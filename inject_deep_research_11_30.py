#!/usr/bin/env python3
"""
BioR Deep-Research Injection Script — Platforms #11-30 + CBRN #170-189
======================================================================
Takes JSON output from AI model extraction prompts and injects:
  - Updated 7-field profiles
  - deep_research blocks (executive_summary, key_publications,
    official_guidelines, controversies_and_changes, ecosystem_connections,
    key_urls, timeline, cbrn_assessment)
  - cross_platform_comparison appended to meta

USAGE:
  1. Save AI-generated JSON to a file (e.g., batch_a_response.json)
  2. Run: python3 inject_deep_research_11_30.py batch_a_response.json
  3. Repeat for each batch (batch_b_response.json, batch_c_cbrn_response.json)

  Or use --dry-run to preview without modifying the master file:
  python3 inject_deep_research_11_30.py batch_a_response.json --dry-run

  Or inject all batches at once:
  python3 inject_deep_research_11_30.py batch_a.json batch_b.json batch_c.json
"""

import json, os, sys, time, copy
from pathlib import Path

BASE    = os.path.dirname(os.path.abspath(__file__))
MASTER  = os.path.join(BASE, "optB_enriched.json")
DRY_RUN = "--dry-run" in sys.argv

# Name mapping: AI response key -> master file platform name
# This handles minor name variations between prompt and master file
NAME_MAP = {
    # Batch A (11-20) — exact matches expected
    "Galaxy Project": "Galaxy Project",
    "NWSS": "NWSS",
    "BV-BRC": "BV-BRC",
    "EpiCollect5": "EpiCollect5",
    "Pathoplexus": "Pathoplexus",
    "Airfinity": "Airfinity",
    "HealthMap": "HealthMap",
    "BlueDot": "BlueDot",
    "GEIS": "GEIS (Global Emerging Infections Surveillance)",
    "GEIS (Global Emerging Infections Surveillance)": "GEIS (Global Emerging Infections Surveillance)",
    "ProMED": "ProMED",
    
    # Batch B (21-30)
    "CARD / RGI": "CARD / RGI",
    "CARD/RGI": "CARD / RGI",
    "OpenELIS": "OpenELIS",
    "Ginkgo Biosecurity": "Ginkgo Biosecurity",
    "WHONET": "WHONET",
    "CDC TGS": "CDC TGS",
    "BEACON": "BEACON (BU/HealthMap)",
    "BEACON (BU/HealthMap)": "BEACON (BU/HealthMap)",
    "NNDSS": "NNDSS",
    "ReportStream": "ReportStream",
    "WastewaterSCAN": "WastewaterSCAN",
    "Bactopia": "Bactopia",
    
    # Batch C — CBRN (170-189)
    "Saab AWR": "Saab AWR",
    "ENSCO SENTRY": "ENSCO SENTRY",
    "Two Six SIGMA": "Two Six SIGMA",
    "Riskaware UrbanAware / HASP Suite": "Riskaware UrbanAware / HASP Suite",
    "Riskaware UrbanAware/HASP Suite": "Riskaware UrbanAware / HASP Suite",
    "Observis ObSAS": "Observis ObSAS",
    "Bruhn NewTech CBRN Suite": "Bruhn NewTech CBRN Suite",
    "HAVELSAN Counter-CBRN Suite": "HAVELSAN Counter-CBRN Suite",
    "Systematic SitaWare CBRN Module": "Systematic SitaWare CBRN Module",
    "FEMA CBRNResponder Network": "FEMA CBRNResponder Network",
    "ARGOS DSS": "ARGOS DSS",
    "RODOS / JRODOS": "RODOS / JRODOS",
    "RODOS/JRODOS": "RODOS / JRODOS",
    "CAMEO Suite": "CAMEO Suite (EPA/NOAA)",
    "CAMEO Suite (EPA/NOAA)": "CAMEO Suite (EPA/NOAA)",
    "HPAC": "HPAC",
    "EURDEP / ECURIE": "EURDEP / ECURIE",
    "EURDEP/ECURIE": "EURDEP / ECURIE",
    "IAEA USIE": "IAEA USIE",
    "CTBTO IDC": "CTBTO IDC",
    "SCADACore EnviroLive CBRNE": "SCADACore EnviroLive CBRNE",
    "Bertin Environics EnviScreen Operix": "Bertin Environics EnviScreen Operix",
    "RadResponder": "RadResponder",
    "IMAAC Portal": "IMAAC Portal",
}

PROFILE_FIELDS = ["overview", "functional_scope", "tech_stack", "operator", "data_model", "users_scale", "access_model"]
DEEP_RESEARCH_FIELDS = ["executive_summary", "key_publications", "official_guidelines", "controversies_and_changes", "ecosystem_connections", "key_urls", "timeline", "cbrn_assessment"]


def validate_deep_research(name, dr):
    """Validate deep_research block structure."""
    issues = []
    
    if not isinstance(dr, dict):
        return [f"{name}: deep_research is not a dict"]
    
    for field in DEEP_RESEARCH_FIELDS:
        if field not in dr:
            if field == "cbrn_assessment":
                continue  # cbrn_assessment can be absent (defaults to None)
            issues.append(f"{name}: missing deep_research.{field}")
    
    # Validate key_publications structure
    if "key_publications" in dr:
        pubs = dr["key_publications"]
        if not isinstance(pubs, list):
            issues.append(f"{name}: key_publications is not a list")
        elif len(pubs) == 0:
            issues.append(f"{name}: key_publications is empty")
        else:
            for i, pub in enumerate(pubs):
                if not isinstance(pub, dict):
                    issues.append(f"{name}: key_publications[{i}] is not a dict")
                else:
                    for req in ["title", "authors", "journal", "year"]:
                        if req not in pub:
                            issues.append(f"{name}: key_publications[{i}] missing '{req}'")
    
    # Validate ecosystem_connections structure
    if "ecosystem_connections" in dr:
        eco = dr["ecosystem_connections"]
        if not isinstance(eco, list):
            issues.append(f"{name}: ecosystem_connections is not a list")
        elif len(eco) == 0:
            issues.append(f"{name}: ecosystem_connections is empty")
    
    # Validate timeline structure
    if "timeline" in dr:
        tl = dr["timeline"]
        if not isinstance(tl, list):
            issues.append(f"{name}: timeline is not a list")
        elif len(tl) == 0:
            issues.append(f"{name}: timeline is empty")
    
    return issues


def load_response_json(filepath):
    """Load AI response JSON, handling potential markdown wrappers."""
    with open(filepath, 'r') as f:
        content = f.read().strip()
    
    # Strip markdown code fences if present
    if content.startswith("```"):
        lines = content.split("\n")
        # Remove first line (```json or ```) and last line (```)
        start = 1
        end = len(lines) - 1
        while end > 0 and lines[end].strip() == "```":
            end -= 1
        content = "\n".join(lines[start:end+1])
    
    return json.loads(content)


def apply_batch(master_data, response_data, batch_label=""):
    """Apply a batch of deep-research data to the master file."""
    platforms = master_data["all"]
    
    # Build name->index lookup
    name_to_idx = {}
    for i, p in enumerate(platforms):
        name_to_idx[p.get("n", "")] = i
    
    updated = 0
    skipped = 0
    warnings = []
    
    # Handle cross_platform_comparison separately
    comparison = None
    if "cross_platform_comparison" in response_data:
        comparison = response_data.pop("cross_platform_comparison")
    
    for resp_name, resp_data in response_data.items():
        # Resolve name
        master_name = NAME_MAP.get(resp_name, resp_name)
        
        if master_name not in name_to_idx:
            warnings.append(f"  WARNING: '{resp_name}' (resolved to '{master_name}') not found in master. Skipping.")
            skipped += 1
            continue
        
        idx = name_to_idx[master_name]
        platform = platforms[idx]
        
        # Update profile fields
        if "profile" in resp_data:
            resp_profile = resp_data["profile"]
            if "profile" not in platform:
                platform["profile"] = {}
            
            for field in PROFILE_FIELDS:
                if field in resp_profile and resp_profile[field]:
                    old_val = platform["profile"].get(field, "")
                    new_val = resp_profile[field]
                    # Only update if new value is longer/more detailed
                    if len(str(new_val)) >= len(str(old_val)) * 0.8:
                        platform["profile"][field] = new_val
                    else:
                        warnings.append(f"  NOTE: {master_name}.profile.{field} — new value shorter than 80% of existing, keeping original")
        
        # Set deep_research block
        if "deep_research" in resp_data:
            dr = resp_data["deep_research"]
            
            # Ensure cbrn_assessment exists (default to None)
            if "cbrn_assessment" not in dr:
                dr["cbrn_assessment"] = None
            
            # Validate
            issues = validate_deep_research(master_name, dr)
            if issues:
                for issue in issues:
                    warnings.append(f"  VALIDATION: {issue}")
            
            platform["deep_research"] = dr
            updated += 1
        else:
            warnings.append(f"  WARNING: '{resp_name}' has no deep_research block")
    
    # Apply cross_platform_comparison to meta
    if comparison:
        meta_key = f"cross_platform_comparison_{batch_label}" if batch_label else "cross_platform_comparison_new"
        master_data["meta"][meta_key] = comparison
    
    return updated, skipped, warnings


def main():
    # Collect input files (skip flags)
    input_files = [arg for arg in sys.argv[1:] if not arg.startswith("--")]
    
    if not input_files:
        print("USAGE: python3 inject_deep_research_11_30.py <response_file.json> [response_file2.json ...] [--dry-run]")
        print()
        print("Input files should contain AI-generated deep-research JSON for platforms.")
        print("Use --dry-run to preview changes without modifying the master file.")
        sys.exit(1)
    
    # Load master
    print(f"Loading master: {MASTER}")
    with open(MASTER) as f:
        master = json.load(f)
    
    total_platforms = len(master["all"])
    existing_dr = sum(1 for p in master["all"] if p.get("deep_research") and len(p.get("deep_research", {})) > 0)
    print(f"  Total platforms: {total_platforms}")
    print(f"  With deep_research: {existing_dr}")
    print()
    
    total_updated = 0
    total_skipped = 0
    all_warnings = []
    
    for filepath in input_files:
        print(f"Processing: {filepath}")
        
        try:
            response_data = load_response_json(filepath)
        except json.JSONDecodeError as e:
            print(f"  ERROR: Invalid JSON in {filepath}: {e}")
            continue
        except FileNotFoundError:
            print(f"  ERROR: File not found: {filepath}")
            continue
        
        # Determine batch label from filename
        batch_label = Path(filepath).stem
        
        platform_count = len([k for k in response_data.keys() if k != "cross_platform_comparison"])
        print(f"  Found {platform_count} platform entries")
        
        updated, skipped, warnings = apply_batch(master, response_data, batch_label)
        total_updated += updated
        total_skipped += skipped
        all_warnings.extend(warnings)
        
        print(f"  Updated: {updated}, Skipped: {skipped}")
        for w in warnings:
            print(w)
        print()
    
    # Update meta
    new_dr = sum(1 for p in master["all"] if p.get("deep_research") and len(p.get("deep_research", {})) > 0)
    master["meta"]["deep_research_enrichment"] = {
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "platforms_enriched": new_dr,
        "version": "v2.0_deep_research_11_30_cbrn",
        "method": "ai_extraction_with_human_verified_prompts",
        "batches_applied": [Path(f).stem for f in input_files]
    }
    
    # Summary
    print("=" * 60)
    print(f"SUMMARY")
    print(f"  Platforms updated with deep_research: {total_updated}")
    print(f"  Platforms skipped: {total_skipped}")
    print(f"  Total deep_research count: {existing_dr} -> {new_dr}")
    print(f"  Warnings: {len(all_warnings)}")
    
    if DRY_RUN:
        print()
        print("DRY RUN — no changes written to disk.")
    else:
        # Backup
        backup_path = MASTER + ".backup_pre_deep_11_30"
        if not os.path.exists(backup_path):
            import shutil
            shutil.copy2(MASTER, backup_path)
            print(f"  Backup saved: {backup_path}")
        
        # Write
        with open(MASTER, "w") as f:
            json.dump(master, f, indent=2, ensure_ascii=False)
        print(f"  Master updated: {MASTER}")
    
    print("=" * 60)


if __name__ == "__main__":
    main()
