# AI Developer Instructions

## Project: BioR — Biosurveillance Intelligence for Operational Readiness v3.1.0

### Quick Reference
- **Repository:** [github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-](https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-)
- **Branch:** main
- **Deployment:** GitHub Pages (from main branch, root)
- **Total Platforms:** 189 (169 Tier-1 + 20 CBRN Operational)
- **Deep-Researched:** 50 platforms (26.5% coverage)
- **Key Data Files:** 5+ JSON, 25+ Markdown, 13+ HTML dashboards

### For AI Agents
1. All HTML files are self-contained with CDN dependencies
2. No build process required - static HTML/CSS/JS
3. Master data file: `optB_enriched.json` (~1.2 MB, 189 platforms)
4. GitHub Pages deployment from root of main branch
5. Jekyll config in `_config.yml` handles GitHub Pages settings

### Key Data Files
- `optB_enriched.json` - Master dataset: 189 platforms, all profiles, 50 deep_research blocks
- `optA.json` - Option A scope: 114 platforms
- `optB.json` - Option B scope: 169 platforms (original)
- `optC.json` - Option C scope: 93 platforms
- `reference_baseline/CANONICAL_169_PLATFORMS.json` - Frozen baseline (do not modify)

### Key Scripts
- `enrich_all_40.py` - Deep-research profiles for platforms #11-30
- `cbrn_profiles.py` - Deep-research profiles for 20 CBRN platforms #170-189
- `inject_all.py` - Master injection engine for all batches + meta enrichment
- `deep_enrich_top10.py` - Deep-research enrichment for top 10 (original)
- `rebuild_platforms.py` - Auto-propagate platform changes across all data files

### Deployment Steps
1. Push to GitHub repository
2. Enable GitHub Pages: Settings -> Pages -> main branch / root
3. Site available at: `https://mf2022-dev.github.io/Pathogen-Biosurviallance-platform-Benchmark-/`

### Layer Architecture
| Layer | Count | Description |
|-------|:-----:|-------------|
| L1_Surveillance | 57 | Epidemiological surveillance, outbreak reporting |
| L2_Genomic | 59 | Sequencing, phylogenetics, AMR detection |
| L3_Defense | 39 | Military biodefense, CBRN, bioforensics |
| L4_Hardware | 9 | Physical sensors, rapid diagnostics |
| L4_CBRN_Operational | 20 | CBRN operational systems: detection, modelling, C2 |
| L5_Policy | 5 | Governance frameworks, health-security indices |
