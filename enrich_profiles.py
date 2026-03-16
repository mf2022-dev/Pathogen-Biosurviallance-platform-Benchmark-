#!/usr/bin/env python3
"""
BioR Platform Profile Enrichment Engine
========================================
Generates research-grade profiles for all platforms missing them.
Uses web crawling + LLM (GPT-5-mini) to produce structured 7-field profiles.

Usage:
    python3 enrich_profiles.py                    # enrich all missing
    python3 enrich_profiles.py --batch 1          # batch 1 (rank 1-50)
    python3 enrich_profiles.py --batch 2          # batch 2 (rank 51-100)
    python3 enrich_profiles.py --batch 3          # batch 3 (rank 101-169)
    python3 enrich_profiles.py --count 10         # only do first N missing
    python3 enrich_profiles.py --dry-run          # show what would be enriched
"""

import json
import os
import sys
import time
import yaml
import subprocess
from pathlib import Path

# ============================================================
# CONFIG
# ============================================================
BASE = os.path.dirname(os.path.abspath(__file__))
MASTER = os.path.join(BASE, 'optB_enriched.json')

# Load LLM config from environment (set by GenSpark sandbox)
API_KEY = os.environ.get('OPENAI_API_KEY', '')
BASE_URL = os.environ.get('OPENAI_BASE_URL', '')
if not API_KEY:
    # Fallback: load from YAML config
    config_path = os.path.expanduser('~/.genspark_llm.yaml')
    if os.path.exists(config_path):
        with open(config_path) as f:
            raw = f.read()
            for key, val in os.environ.items():
                raw = raw.replace(f'${{{key}}}', val)
            config = yaml.safe_load(raw)
        API_KEY = config.get('openai', {}).get('api_key', '')
        BASE_URL = config.get('openai', {}).get('base_url', '')

# ============================================================
# CRAWL FUNCTION
# ============================================================
def crawl_url(url, timeout=15):
    """Crawl a URL and return text content (first 3000 chars)."""
    try:
        import urllib.request
        import ssl
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 BioR-Enrichment/1.0'})
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Strip HTML tags for text extraction
            import re
            text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
            text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
            text = re.sub(r'<[^>]+>', ' ', text)
            text = re.sub(r'\s+', ' ', text).strip()
            return text[:4000]
    except Exception as e:
        return f"[Crawl failed: {str(e)[:100]}]"


# ============================================================
# LLM PROFILE GENERATION
# ============================================================
def generate_profile_llm(platform, crawled_text):
    """Use LLM to generate a structured 7-field profile."""
    from openai import OpenAI
    
    client = OpenAI(api_key=API_KEY, base_url=BASE_URL)
    
    prompt = f"""You are a biosurveillance intelligence analyst. Generate a structured profile for this platform.

PLATFORM: {platform['n']}
CATEGORY: {platform.get('c', '')}
DESCRIPTION: {platform.get('d', '')}
URL: {platform.get('u', '')}
LAYER: {platform.get('l', '')}
SCORE: {platform.get('s', '')}
STRENGTHS: {json.dumps(platform.get('st', []))}
WEAKNESSES: {json.dumps(platform.get('wk', []))}
SURVEILLANCE INPUT TYPES: {json.dumps(platform.get('surveillance_input_types', []))}
BIOSURVEILLANCE CLASS: {platform.get('biosurveillance_class', '')}
MILITARY/BIODEFENSE: {platform.get('military_biodefense', False)}

CRAWLED WEBSITE TEXT (first 4000 chars):
{crawled_text[:3000]}

Generate a JSON object with EXACTLY these 7 fields. Each field should be factual, specific, and 100-400 characters long. Use real data from the crawled text when available. Do NOT invent specific numbers unless they appear in the source data.

Return ONLY valid JSON:
{{
  "overview": "What this platform is, who created it, when, and its primary mission. Include specific facts.",
  "functional_scope": "What it actually does - specific features, capabilities, supported analyses, diseases/pathogens covered.",
  "tech_stack": "Known technologies, programming languages, frameworks, databases, cloud platforms, APIs, standards.",
  "operator": "Organization(s) that operate/fund this platform, including country and any partnerships.",
  "data_model": "How data is structured, what formats are used, key data types handled, standards followed.",
  "users_scale": "Who uses it, how many users/countries/installations, deployment scale, citation counts if academic.",
  "access_model": "How to access - free/paid, open-source, registration needed, license type, restrictions."
}}"""

    try:
        response = client.chat.completions.create(
            model='gpt-5-nano',
            messages=[
                {"role": "system", "content": "You are a biosurveillance technology analyst. Return ONLY valid JSON. No markdown, no explanation."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            max_tokens=1500,
        )
        
        text = response.choices[0].message.content.strip()
        # Clean up markdown code blocks if present
        if text.startswith('```'):
            text = text.split('\n', 1)[1] if '\n' in text else text[3:]
            if text.endswith('```'):
                text = text[:-3]
            text = text.strip()
        
        profile = json.loads(text)
        
        # Validate all 7 fields exist
        required = ['overview', 'functional_scope', 'tech_stack', 'operator', 'data_model', 'users_scale', 'access_model']
        for field in required:
            if field not in profile:
                profile[field] = ''
        
        return profile
        
    except json.JSONDecodeError as e:
        print(f"    [JSON ERROR] {str(e)[:80]}")
        print(f"    Raw text: {text[:200]}")
        return None
    except Exception as e:
        print(f"    [LLM ERROR] {str(e)[:120]}")
        return None


# ============================================================
# MAIN ENRICHMENT LOOP
# ============================================================
def main():
    dry_run = '--dry-run' in sys.argv
    batch = None
    count = None
    
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg == '--batch' and i < len(sys.argv) - 1:
            batch = int(sys.argv[i + 1])
        if arg == '--count' and i < len(sys.argv) - 1:
            count = int(sys.argv[i + 1])
    
    # Load data
    with open(MASTER) as f:
        data = json.load(f)
    
    # Build name-to-layer lookup for extra fields
    name_to_extra = {}
    for lname, lplats in data['layers'].items():
        for p in lplats:
            name_to_extra[p['n']] = {
                'l': lname,
                'surveillance_input_types': p.get('surveillance_input_types', []),
                'biosurveillance_class': p.get('biosurveillance_class', ''),
                'military_biodefense': p.get('military_biodefense', False),
            }
    
    # Find platforms needing profiles
    needs = []
    for p in data['all']:
        prof = p.get('profile', {})
        if not prof or not prof.get('overview') or len(prof.get('overview', '')) < 100:
            extra = name_to_extra.get(p['n'], {})
            entry = dict(p)
            entry.update(extra)
            needs.append(entry)
    
    # Filter by batch
    if batch == 1:
        needs = [p for p in needs if p['r'] <= 50]
    elif batch == 2:
        needs = [p for p in needs if 51 <= p['r'] <= 100]
    elif batch == 3:
        needs = [p for p in needs if p['r'] > 100]
    
    if count:
        needs = needs[:count]
    
    print(f"{'[DRY RUN] ' if dry_run else ''}BioR Profile Enrichment Engine")
    print(f"Platforms to enrich: {len(needs)}")
    print(f"{'Batch: ' + str(batch) if batch else 'All batches'}")
    print("=" * 60)
    
    if dry_run:
        for p in needs:
            print(f"  #{p['r']} [{p.get('l','')}] {p['n']} — {p.get('u','')}")
        return
    
    enriched = 0
    failed = 0
    
    for i, p in enumerate(needs):
        print(f"\n[{i+1}/{len(needs)}] #{p['r']} {p['n']} ({p.get('l','')})")
        
        # Step 1: Crawl
        url = p.get('u', '')
        print(f"  Crawling {url}...")
        crawled = crawl_url(url)
        crawl_len = len(crawled)
        print(f"  Crawled: {crawl_len} chars")
        
        # Step 2: Generate profile via LLM
        print(f"  Generating profile via LLM...")
        profile = generate_profile_llm(p, crawled)
        
        if profile and profile.get('overview') and len(profile['overview']) > 50:
            # Step 3: Inject into data
            # Update in layers
            for lname, lplats in data['layers'].items():
                for lp in lplats:
                    if lp['n'] == p['n']:
                        lp['profile'] = profile
            
            # Update in all[]
            for ap in data['all']:
                if ap['n'] == p['n']:
                    ap['profile'] = profile
            
            enriched += 1
            print(f"  SUCCESS: overview={len(profile['overview'])} chars")
        else:
            failed += 1
            print(f"  FAILED")
        
        # Rate limiting - small delay between requests
        if i < len(needs) - 1:
            time.sleep(0.5)
    
    # Save
    data['meta']['enrichment_update'] = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
    
    # Count total profiles
    total_profiles = sum(1 for p in data['all'] 
                        if p.get('profile') and p['profile'].get('overview') 
                        and len(p['profile']['overview']) > 100)
    data['meta']['manually_profiled'] = total_profiles
    data['meta']['auto_profiled'] = 169 - total_profiles
    
    with open(MASTER, 'w') as f:
        json.dump(data, f, indent=2)
    
    print("\n" + "=" * 60)
    print(f"ENRICHMENT COMPLETE")
    print(f"  Enriched: {enriched}")
    print(f"  Failed: {failed}")
    print(f"  Total with profiles: {total_profiles}/169")
    print(f"  Remaining: {169 - total_profiles}")
    print("=" * 60)


if __name__ == '__main__':
    main()
