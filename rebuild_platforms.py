#!/usr/bin/env python3
"""
BioR Platform Rebuild Script
=============================
Reads optB_enriched.json (the single source of truth) and propagates
platform data to all 4 data targets + updates platform counts across
all 11 dashboards.

Usage:
    cd /home/user/pathogen-push
    python3 rebuild_platforms.py                    # full rebuild
    python3 rebuild_platforms.py --add platform.json # add a new platform from JSON file, then rebuild
    python3 rebuild_platforms.py --dry-run           # show what would change without writing

Data flow:
    optB_enriched.json  ──►  bior/platform_directory/platforms_data.js
                         ──►  bior/phase1/comparison_engine/index.html   (inline PLATFORMS array)
                         ──►  bior/phase1/executive_dashboard/index.html (inline PLATFORMS array)
                         ──►  bior/phase1/threat_map/index.html          (inline PLATFORMS array)
                         ──►  all 11 dashboards: update "N platforms" counts
"""

import json
import re
import sys
import os
from datetime import datetime, timezone

# ============================================================
# PATHS
# ============================================================
BASE = os.path.dirname(os.path.abspath(__file__))
MASTER = os.path.join(BASE, 'optB_enriched.json')

TARGETS = {
    'platform_directory': os.path.join(BASE, 'bior/platform_directory/platforms_data.js'),
    'comparison_engine':  os.path.join(BASE, 'bior/phase1/comparison_engine/index.html'),
    'executive_dashboard':os.path.join(BASE, 'bior/phase1/executive_dashboard/index.html'),
    'threat_map':         os.path.join(BASE, 'bior/phase1/threat_map/index.html'),
}

ALL_DASHBOARDS = [
    os.path.join(BASE, 'bior/phase1/executive_dashboard/index.html'),
    os.path.join(BASE, 'bior/phase1/threat_map/index.html'),
    os.path.join(BASE, 'bior/phase1/gap_analysis/index.html'),
    os.path.join(BASE, 'bior/phase1/interop_assessment/index.html'),
    os.path.join(BASE, 'bior/phase1/comparison_engine/index.html'),
    os.path.join(BASE, 'bior/phase2/investment_roadmap/index.html'),
    os.path.join(BASE, 'bior/phase2/allied_posture/index.html'),
    os.path.join(BASE, 'bior/phase2/readiness_scorecard/index.html'),
    os.path.join(BASE, 'bior/phase3/adversary_dossier/index.html'),
    os.path.join(BASE, 'bior/phase3/regional_briefs/index.html'),
    os.path.join(BASE, 'bior/platform_directory/index.html'),
    os.path.join(BASE, 'bior/intake/index.html'),
]

# PSEF v3.0 dimension weights
WEIGHTS = {
    'data_integration': 0.12,
    'analytics_capability': 0.12,
    'visualization': 0.10,
    'accessibility': 0.10,
    'scalability': 0.10,
    'documentation': 0.08,
    'community_support': 0.08,
    'security_compliance': 0.12,
    'interoperability': 0.10,
    'real_time_capability': 0.08,
}

# Layer inference from category keywords
LAYER_KEYWORDS = {
    'L4_Hardware': ['hardware', 'detection', 'point detect', 'sensor', 'aerosol', 'cbrn reconnaissance',
                    'bio-agent', 'portable', 'shipboard', 'multi-spectrum', 'airborne bio'],
    'L5_Policy': ['policy', 'health security assessment', 'ihr compliance', 'regulatory',
                  'pandemic preparedness r&d', 'funding intelligence'],
    'L3_Defense': ['defense', 'defence', 'military', 'biodefense', 'bioweapons', 'cbrn',
                   'nato', 'adversary', 'dtra', 'darpa', 'countermeasure', 'bioforensic',
                   'threat reduction', 'wmd', 'bioterror'],
    'L2_Genomic': ['genomic', 'phylogenetic', 'bioinformatics', 'sequence', 'genome',
                   'metagenomic', 'amr gene', 'lineage', 'snp', 'phylo', 'dna', 'rna',
                   'variant track', 'clade', 'augur', 'nextclade'],
    'L1_Surveillance': [],  # default fallback
}


def infer_layer(category):
    """Infer platform layer from category string."""
    cat_lower = category.lower()
    for layer, keywords in LAYER_KEYWORDS.items():
        for kw in keywords:
            if kw in cat_lower:
                return layer
    return 'L1_Surveillance'


def load_master():
    """Load the master optB_enriched.json."""
    with open(MASTER, 'r') as f:
        return json.load(f)


def save_master(data):
    """Save back to master JSON."""
    with open(MASTER, 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  [WRITE] {MASTER} ({os.path.getsize(MASTER):,} bytes)")


def add_platform(filepath, data):
    """Add a new platform from a JSON file into the master data."""
    with open(filepath, 'r') as f:
        new = json.load(f)

    # Validate required fields
    required = ['n', 's', 'c', 'u']
    for field in required:
        if field not in new:
            # Try long-form keys
            mapping = {'n': 'name', 's': 'composite', 'c': 'category', 'u': 'url'}
            alt = mapping.get(field)
            if alt and alt in new:
                new[field] = new.pop(alt)
            else:
                print(f"  [ERROR] Missing required field: {field}")
                sys.exit(1)

    # Map alternative keys
    key_map = {
        'name': 'n', 'url': 'u', 'composite': 's', 'category': 'c',
        'desc': 'd', 'description': 'd', 'scores': 'sc',
        'strengths': 'st', 'weaknesses': 'wk'
    }
    for old_key, new_key in key_map.items():
        if old_key in new and new_key not in new:
            new[new_key] = new.pop(old_key)

    # Check for duplicates
    existing_names = {p['n'].lower() for p in data['all']}
    if new['n'].lower() in existing_names:
        print(f"  [SKIP] Platform '{new['n']}' already exists in database")
        return data, False

    # Assign rank
    new['r'] = len(data['all']) + 1

    # Ensure description
    if 'd' not in new or not new['d']:
        new['d'] = new.get('profile', {}).get('overview', '')[:120] if new.get('profile') else ''

    # Infer layer if not set
    layer = new.pop('layer', None) or new.pop('ly', None) or infer_layer(new.get('c', ''))

    # Add to all[]
    data['all'].append(new)

    # Add to appropriate layer
    if layer not in data['layers']:
        data['layers'][layer] = []
    data['layers'][layer].append(new)

    # Update meta
    data['meta']['total'] = len(data['all'])
    data['meta']['generated'] = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')

    print(f"  [ADD] {new['n']} (score: {new['s']}, layer: {layer}, rank: {new['r']})")
    return data, True


def recalculate_ranks(data):
    """Re-sort platforms by score descending and assign ranks."""
    data['all'].sort(key=lambda p: (-p.get('s', 0), p.get('n', '')))
    for i, p in enumerate(data['all']):
        p['r'] = i + 1
    # Also re-sort within layers
    for layer in data['layers']:
        data['layers'][layer].sort(key=lambda p: (-p.get('s', 0), p.get('n', '')))
    return data


def build_comparison_array(data):
    """Build the PLATFORMS array for Comparison Engine / Executive Dashboard / Threat Map."""
    platforms = []
    for p in data['all']:
        entry = {
            'rank': p['r'],
            'name': p['n'],
            'url': p['u'],
            'overall_score': p['s'],
            'category': p['c'],
            'description': p.get('d', ''),
            'dimension_scores': p.get('sc', {}),
            'strengths': p.get('st', []),
            'weaknesses': p.get('wk', []),
        }
        platforms.append(entry)
    return platforms


def build_directory_array(data):
    """Build the PLATFORMS array for Platform Directory (includes rich profile fields)."""
    # Build a name-to-layer lookup from the layers dict (source of truth)
    name_to_layer = {}
    name_to_extra = {}  # surveillance_input_types, military_biodefense, biosurveillance_class
    for lname, lplats in data.get('layers', {}).items():
        for lp in lplats:
            name_to_layer[lp['n']] = lname
            name_to_extra[lp['n']] = {
                'sit': lp.get('surveillance_input_types', []),
                'pit': lp.get('primary_input_type', ''),
                'bsc': lp.get('biosurveillance_class', ''),
                'mil': lp.get('military_biodefense', False),
            }

    platforms = []
    for p in data['all']:
        profile = p.get('profile', {})
        # Use actual layer from data structure, fallback to inference
        layer = p.get('l') or name_to_layer.get(p['n']) or infer_layer(p.get('c', ''))
        extra = name_to_extra.get(p['n'], {})
        entry = {
            'r': p['r'],
            'n': p['n'],
            'u': p['u'],
            's': p['s'],
            'c': p['c'],
            'desc': p.get('d', ''),
            'sc': p.get('sc', {}),
            'st': p.get('st', []),
            'wk': p.get('wk', []),
            'ly': layer,
            'sit': extra.get('sit', p.get('surveillance_input_types', [])),
            'pit': extra.get('pit', p.get('primary_input_type', '')),
            'bsc': extra.get('bsc', p.get('biosurveillance_class', '')),
            'mil': extra.get('mil', p.get('military_biodefense', False)),
            'ov': profile.get('overview', ''),
            'fs': profile.get('functional_scope', ''),
            'ts': profile.get('tech_stack', ''),
            'op': profile.get('operator', ''),
            'dm': profile.get('data_model', ''),
            'us': profile.get('users_scale', ''),
            'am': profile.get('access_model', ''),
        }
        # Only include military flag if True to save space
        if not entry['mil']:
            del entry['mil']
        platforms.append(entry)
    return platforms


def write_platform_directory(data, dry_run=False):
    """Write bior/platform_directory/platforms_data.js"""
    platforms = build_directory_array(data)
    js_content = 'const PLATFORMS=' + json.dumps(platforms, ensure_ascii=False, separators=(',', ':')) + ';'
    target = TARGETS['platform_directory']
    if dry_run:
        print(f"  [DRY] Would write {target} ({len(js_content):,} chars)")
    else:
        with open(target, 'w') as f:
            f.write(js_content)
        print(f"  [WRITE] {target} ({os.path.getsize(target):,} bytes)")
    return len(platforms)


def write_inline_platforms(data, target_key, dry_run=False):
    """Replace inline PLATFORMS = [...] array in an HTML file."""
    platforms = build_comparison_array(data)
    json_str = json.dumps(platforms, ensure_ascii=False, separators=(',', ':'))

    target = TARGETS[target_key]
    with open(target, 'r') as f:
        html = f.read()

    # Pattern: const PLATFORMS = [...]; or const PLATFORMS = [...]\n
    pattern = r'const PLATFORMS\s*=\s*\[.*?\];'
    match = re.search(pattern, html, re.DOTALL)
    if not match:
        # Try single-line match (minified)
        pattern2 = r'const PLATFORMS\s*=\s*\[[^\n]*'
        match = re.search(pattern2, html)

    if match:
        replacement = f'const PLATFORMS = {json_str};'
        # Handle case where it's on a very long line - find the closing ];
        start = match.start()
        # Find the actual end by counting brackets
        depth = 0
        i = html.index('[', start)
        for j in range(i, len(html)):
            if html[j] == '[': depth += 1
            elif html[j] == ']': depth -= 1
            if depth == 0:
                end = j + 1
                # Skip optional semicolon
                if end < len(html) and html[end] == ';':
                    end += 1
                break

        new_html = html[:start] + replacement + html[end:]

        if dry_run:
            print(f"  [DRY] Would update {target} (PLATFORMS array: {len(platforms)} entries)")
        else:
            with open(target, 'w') as f:
                f.write(new_html)
            print(f"  [WRITE] {target} ({os.path.getsize(target):,} bytes)")
    else:
        print(f"  [WARN] Could not find PLATFORMS array in {target}")


def update_platform_counts(old_count, new_count, dry_run=False):
    """Update all hardcoded platform counts across dashboards."""
    if old_count == new_count:
        print(f"  [SKIP] Platform count unchanged ({new_count})")
        return

    old_data_points = old_count * 10
    new_data_points = new_count * 10

    replacements = [
        (f'{old_count} Platforms', f'{new_count} Platforms'),
        (f'{old_count} platforms', f'{new_count} platforms'),
        (f'{old_count} Mapped', f'{new_count} Mapped'),
        (f'total_platforms": {old_count}', f'total_platforms": {new_count}'),
        (f'Search {old_count}', f'Search {new_count}'),
        (f'{old_count} Platforms |', f'{new_count} Platforms |'),
        (f'{old_data_points} Data Points', f'{new_data_points} Data Points'),
        (f'{old_data_points} data points', f'{new_data_points} data points'),
        (f"'{old_data_points:,}'", f"'{new_data_points:,}'"),
        (f'{old_count} platforms', f'{new_count} platforms'),
    ]

    for dashboard in ALL_DASHBOARDS:
        if not os.path.exists(dashboard):
            continue
        with open(dashboard, 'r') as f:
            content = f.read()

        original = content
        changes = 0
        for old_str, new_str in replacements:
            if old_str in content:
                count = content.count(old_str)
                content = content.replace(old_str, new_str)
                changes += count

        # Also handle numeric-only references in JS context
        # e.g., platform_count: 169 or totalPlatforms = 169
        content = re.sub(
            rf'(platform.?count["\']?\s*[:=]\s*){old_count}(\b)',
            rf'\g<1>{new_count}\2',
            content,
            flags=re.IGNORECASE
        )

        if content != original:
            if dry_run:
                print(f"  [DRY] Would update counts in {os.path.basename(dashboard)} ({changes} replacements)")
            else:
                with open(dashboard, 'w') as f:
                    f.write(content)
                print(f"  [COUNT] {os.path.basename(dashboard)} — updated {changes} count references")
        else:
            if dry_run:
                print(f"  [DRY] No count changes needed in {os.path.basename(dashboard)}")


def rebuild(dry_run=False):
    """Full rebuild: propagate master data to all targets."""
    print("=" * 60)
    print("BioR Platform Rebuild Script")
    print("=" * 60)

    # Load master
    print(f"\n[1/5] Loading master data from optB_enriched.json...")
    data = load_master()
    total = len(data['all'])
    layers = {k: len(v) for k, v in data['layers'].items()}
    print(f"  Found {total} platforms across {len(layers)} layers: {layers}")

    # Recalculate ranks
    print(f"\n[2/5] Recalculating ranks by score descending...")
    data = recalculate_ranks(data)
    if not dry_run:
        save_master(data)
    top3 = [(p['n'], p['s']) for p in data['all'][:3]]
    print(f"  Top 3: {top3}")

    # Write Platform Directory
    print(f"\n[3/5] Rebuilding Platform Directory (platforms_data.js)...")
    n = write_platform_directory(data, dry_run)
    print(f"  {n} platform entries written")

    # Write inline PLATFORMS arrays
    print(f"\n[4/5] Updating inline PLATFORMS arrays...")
    for key in ['comparison_engine', 'executive_dashboard', 'threat_map']:
        write_inline_platforms(data, key, dry_run)

    # Update counts
    print(f"\n[5/5] Updating platform counts across all dashboards...")
    # Detect old count from existing files
    old_count = detect_old_count()
    update_platform_counts(old_count, total, dry_run)

    # Summary
    print("\n" + "=" * 60)
    print(f"{'[DRY RUN] ' if dry_run else ''}REBUILD COMPLETE")
    print(f"  Platforms: {old_count} → {total}")
    print(f"  Data points: {old_count * 10} → {total * 10}")
    print(f"  Targets updated: platform_directory, comparison_engine, executive_dashboard, threat_map")
    print(f"  Count updates: {len(ALL_DASHBOARDS)} dashboard files scanned")
    print("=" * 60)


def detect_old_count():
    """Detect the current platform count from dashboard HTML headers/footers (not data arrays)."""
    # Check dashboard HTML files for the displayed count (not data arrays)
    # Prioritize the platform directory header which shows "N Platforms | ..."
    for dashboard in ALL_DASHBOARDS:
        if not os.path.exists(dashboard):
            continue
        with open(dashboard, 'r') as f:
            content = f.read()
        # Look for count in header/subtitle text like "169 Platforms |"
        match = re.search(r'(\d+)\s+Platforms\s*\|', content)
        if match:
            return int(match.group(1))
    # Fallback: any "N Platforms" mention
    for dashboard in ALL_DASHBOARDS:
        if not os.path.exists(dashboard):
            continue
        with open(dashboard, 'r') as f:
            content = f.read()
        match = re.search(r'(\d+)\s*Platforms', content)
        if match:
            return int(match.group(1))
    return 169  # default


def main():
    dry_run = '--dry-run' in sys.argv
    add_file = None

    for i, arg in enumerate(sys.argv[1:], 1):
        if arg == '--add' and i < len(sys.argv) - 1:
            add_file = sys.argv[i + 1]

    if add_file:
        print(f"\n[ADD] Adding platform from {add_file}...")
        data = load_master()
        data, added = add_platform(add_file, data)
        if added:
            data = recalculate_ranks(data)
            if not dry_run:
                save_master(data)
            else:
                print("  [DRY] Would save updated master")

    rebuild(dry_run)


if __name__ == '__main__':
    main()
