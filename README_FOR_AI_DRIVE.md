# BioR Framework - AI DRIVE Copy

This is the AI DRIVE backup of BioR v3.1.0 — Biosurveillance Intelligence for Operational Readiness.

## Contents
Complete framework including all HTML documents, JSON data files (189 platforms), 50 deep-research enrichment blocks, 25+ documentation files, and enrichment scripts.

## Key Data
- **Master:** `optB_enriched.json` (~1.2 MB, 189 platforms, 50 deep-research)
- **Baseline:** `reference_baseline/CANONICAL_169_PLATFORMS.json` (frozen, do not modify)
- **GitHub:** https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-

## Restore
Extract and push to GitHub for deployment:
```bash
tar -xzf bior_full_backup_2026-03-17.tar.gz -C /home/user/
cd /home/user/pathogen-push
git remote add origin https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-.git
git push -u origin main
```
