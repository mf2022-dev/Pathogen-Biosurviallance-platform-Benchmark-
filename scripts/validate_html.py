#!/usr/bin/env python3
"""Basic HTML validation for framework files."""
import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

print(f"Found {len(html_files)} HTML files:")
for hf in sorted(html_files):
    with open(hf) as f:
        content = f.read()
    has_doctype = content.strip().startswith('<!DOCTYPE')
    has_closing = '</html>' in content
    size = len(content)
    status = "✓" if has_doctype and has_closing else "✗"
    print(f"  {status} {hf} ({size} bytes)")
