#!/usr/bin/env python3
"""Check project structure and file integrity."""
import os
import json

required_files = [
    'index.html',
    'master_index_a_plus_plus_plus.html',
    'README.md',
    '_config.yml',
    'data/platform_evaluation_data.json',
    'data/evaluation_criteria_detailed.json',
    'frameworks/comprehensive_evaluation_framework_v3_0.html',
    'reports/executive_summary_dashboard.html',
    'reports/comprehensive_evaluation_results.html',
    'reports/gap_analysis_roadmap.html',
]

print("Checking project structure...")
missing = []
for f in required_files:
    if os.path.exists(f):
        size = os.path.getsize(f)
        print(f"  ✓ {f} ({size} bytes)")
    else:
        print(f"  ✗ {f} MISSING")
        missing.append(f)

# Validate JSON
for jf in ['data/platform_evaluation_data.json', 'data/evaluation_criteria_detailed.json']:
    try:
        with open(jf) as f:
            json.load(f)
        print(f"  ✓ {jf} - Valid JSON")
    except Exception as e:
        print(f"  ✗ {jf} - Invalid JSON: {e}")

if missing:
    print(f"\n{len(missing)} files missing!")
else:
    print("\nAll files present and valid!")
