#!/usr/bin/env python3
"""Validate JSON data files."""
import json
import os

json_files = [
    'data/platform_evaluation_data.json',
    'data/evaluation_criteria_detailed.json'
]

for jf in json_files:
    try:
        with open(jf) as f:
            data = json.load(f)
        if 'platforms' in data:
            print(f"✓ {jf}: {len(data['platforms'])} platforms")
        elif 'categories' in data:
            print(f"✓ {jf}: {len(data['categories'])} categories")
        else:
            print(f"✓ {jf}: Valid JSON")
    except Exception as e:
        print(f"✗ {jf}: {e}")
