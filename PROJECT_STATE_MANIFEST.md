# BioR Project — Complete State Manifest
## Backup Date: 2026-03-16T23:30:00Z

---

## PROJECT OVERVIEW

**Project Name**: BioR — Biosurveillance Intelligence for Operational Readiness  
**Version**: v3.0.0 (PSEF baseline) + v1.0 Deep Research Enrichment  
**Baseline**: 169 Tier-1 platforms, 1,690 data points (frozen 2026-03-14)  
**Git Tag**: `baseline-v3.0.0-169`  
**Purpose**: Strategic intelligence mapping of global biosurveillance landscape for senior military, public-health, intelligence, and policy leaders  

---

## TWO REPOSITORIES

### 1. pathogen-push (Main Data & Analysis Repository)
- **Local Path**: `/home/user/pathogen-push/`
- **GitHub**: `https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-`
- **Branch**: `main`
- **Latest Commit**: `b729ada` — Add readable deep-research profiles for top 10 platforms (Markdown)
- **Total Commits**: 27
- **Size**: ~12 MB (excluding .git)

### 2. webapp (Deep-Research Viewer Web Application)
- **Local Path**: `/home/user/webapp/`
- **Branch**: `main`
- **Latest Commit**: `ea950d7` — BioR Deep-Research Viewer webapp
- **Size**: ~173 MB (including node_modules)
- **Live URL**: Sandbox service on port 3000

---

## COMPLETE PHASE HISTORY

### Phase 0: Foundation (Commits 9e35e1b → 7b8b3e4)
- Initial PSEF v3.0 framework with 56 platforms
- Interactive benchmark dashboard (heatmap, compare, rankings, analytics)
- Fixed JS reduce error in analytics

### Phase 1: Platform Expansion (Commits a612b23 → 46d78c5)
- Added 46 platforms → total 102 (Middle East, AMR, metagenomics, wastewater, AI, bioinformatics)
- Added 51 defense/biodefense/military platforms → total 154 (L3_Defense layer)
- Added 3 final platforms (Google Earth Engine AI, KIDA Korea, EIOS 2.0) → **total 169**
- Created 3 scope analysis dashboards (Options A/B/C)
- Froze canonical reference baseline: 169 platforms, 10 dimensions, 1,690 data points

### Phase 2: BioR Intelligence Deliverables (Commits 1c859dd → 37cff86)
- BioR v1.0 plan locked
- Phase 1 deliverables: Executive Dashboard (J), Global Threat Map (A), Capability Gap Analysis, Interoperability Assessment, Platform Comparison Engine
- Phase 2 deliverables: Option B Deep-Dive, 3 result sets, enhanced gap analysis
- Phase 3 deliverables: Adversary Dossier (51KB), Regional Briefs (53KB)

### Phase 3: Platform Intelligence (Commits b449708 → 3d3d179)
- 169 platform intelligence briefs with full profiles
- Crawled real platform data for enrichment
- Enriched all 169 profiles via LLM (gpt-5-nano) with web-crawled context
- Platform Directory, Adversary Dossier with 2024-2026 intelligence
- Platform Intake Tool + rebuild_platforms.py auto-propagation script
- Landing Portal + Full Benchmark Report

### Phase 4: Quality Assurance & Deep Research (Commits d713633 → b729ada)
- Layer Intelligence Analysis page
- QA Phase 2: Applied user decisions (Q1=B, Q2=A+flag, Q3=B)
- Complete benchmark methodology reference document (BIOR_BENCHMARK_METHODOLOGY.md)
- Enrichment Prompt v2.0 with 5-layer model, CBRN tags, ecosystem fields
- **DEEP RESEARCH ENRICHMENT** for top 10 platforms:
  - 7-field profiles (200-700 chars each) with real citations
  - deep_research block: executive_summary, key_publications, official_guidelines, controversies_and_changes, ecosystem_connections, key_urls, timeline, cbrn_assessment
  - Cross-platform comparison table (6 axes)
  - BioSense/ESSENCE tagged as `adjacent_enabling_system` for CBRN
- Readable Markdown report: DEEP_RESEARCH_TOP10.md
- Interactive web viewer (webapp) with 4 views

---

## KEY DATA FILES

| File | Location | Description | Size |
|------|----------|-------------|------|
| `optB_enriched.json` | pathogen-push/ | Master dataset: 169 platforms, all profiles, 10 deep research | 1,042 KB |
| `optA.json` | pathogen-push/ | Option A scope: 114 platforms | 95 KB |
| `optB.json` | pathogen-push/ | Option B scope: 169 platforms (original) | 312 KB |
| `optC.json` | pathogen-push/ | Option C scope: 93 platforms | ~90 KB |
| `CANONICAL_169_PLATFORMS.json` | pathogen-push/reference_baseline/ | Frozen baseline | ~250 KB |
| `CANONICAL_169_PLATFORMS.csv` | pathogen-push/reference_baseline/ | CSV version of baseline | ~50 KB |
| `data.json` | webapp/public/static/ | Extracted top 10 deep-research data for viewer | 88 KB |

---

## KEY SCRIPTS

| Script | Purpose |
|--------|---------|
| `deep_enrich_top10.py` | Deep-research enrichment for top 10 (reusable for batches 11-20, etc.) |
| `enrich_profiles.py` | LLM-based profile enrichment engine (gpt-5-nano + web crawling) |
| `apply_deep_research.py` | Apply deep-research data to enriched JSON |
| `rebuild_platforms.py` | Auto-propagate platform changes across all data files |
| `build_profiles.js` | Build platform profile pages |
| `build_scope.js` / `build_scope_page.py` | Build scope analysis dashboards |
| `gen_scope.py` / `gen_scope_final.js` | Generate scope HTML pages |
| `analyze.js` | Platform analysis utilities |

---

## WEBSITE PAGES

| Page | Description |
|------|-------------|
| `index.html` | Landing portal |
| `benchmark.html` | Main interactive benchmark dashboard |
| `benchmark_a.html` | Option A benchmark (114 platforms) |
| `benchmark_b.html` | Option B benchmark (169 platforms) |
| `benchmark_c.html` | Option C benchmark (93 platforms) |
| `scope.html` | Scope analysis hub |
| `bior/index.html` | BioR intelligence portal |
| `bior/phase1/` | Phase 1 deliverables |
| `bior/phase2/` | Phase 2 deliverables |
| `bior/phase3/` | Phase 3 deliverables |
| `bior/platform_directory/` | Platform intelligence directory |
| `bior/report/` | Full benchmark report |

---

## TOP 10 DEEP-RESEARCH PLATFORMS

| Rank | Platform | Layer | Score | Publications | Ecosystem Links | CBRN |
|:----:|----------|-------|:-----:|:------------:|:---------------:|:----:|
| 1 | Nextstrain | L2_Genomic | 95 | 5 | 7 | — |
| 2 | SORMAS | L1_Surveillance | 90 | 4 | 5 | — |
| 3 | outbreak.info | L2_Genomic | 90 | 3 | 6 | — |
| 4 | CZ ID | L2_Genomic | 89.2 | 4 | 5 | — |
| 5 | DHIS2 | L1_Surveillance | 89 | 4 | 5 | — |
| 6 | NCBI Pathogen Detection | L2_Genomic | 88.9 | 4 | 6 | — |
| 7 | GISAID | L2_Genomic | 88.5 | 3 | 6 | — |
| 8 | Microreact | L2_Genomic | 87.5 | 2 | 5 | — |
| 9 | BioSense / ESSENCE | L1_Surveillance | 87.2 | 3 | 5 | adjacent_enabling_system |
| 10 | Pathogenwatch | L2_Genomic | 87 | 3 | 7 | — |

---

## LAYER ARCHITECTURE

| Layer | Count | Description |
|-------|:-----:|-------------|
| L1_Surveillance | 57 | Epidemiological surveillance, outbreak reporting, syndromic, wastewater |
| L2_Genomic | 59 | Sequencing, phylogenetics, AMR detection, genomic analysis |
| L3_Defense | 39 | Military biodefense, CBRN, bioforensics, countermeasures |
| L4_Hardware | 9 | Physical sensors, rapid diagnostics, detection devices |
| L5_Policy | 5 | Governance frameworks, health-security indices |

---

## EVALUATION CRITERIA (10 Dimensions)

| Criterion | Weight | Global Mean |
|-----------|:------:|:-----------:|
| Data Integration | 12% | 79.3 |
| Analytics Capability | 12% | 79.3 |
| Visualization | 10% | 76.6 |
| Accessibility | 8% | 73.9 |
| Scalability | 10% | 79.2 |
| Documentation | 8% | 77.9 |
| Community Support | 8% | 75.0 |
| Security & Compliance | 12% | 82.5 |
| Interoperability | 10% | 77.3 |
| Real-Time Capability | 10% | 77.7 |

---

## BACKUP LOCATIONS

1. **GitHub** (primary): `https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-`
2. **Sandbox tar.gz** (via ProjectBackup tool): Uploaded to blob storage
3. **AI Drive** (`/mnt/aidrive/`): Compressed archive copy
4. **Local Git**: Full history in `.git/` directories

---

## HOW TO RESTORE

```bash
# From GitHub:
git clone https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-.git pathogen-push

# From tar.gz backup:
tar -xzf bior_pathogen_push_backup_2026-03-16.tar.gz -C /home/user/

# From AI Drive:
cp /mnt/aidrive/bior_full_backup_2026-03-16.tar.gz /tmp/
tar -xzf /tmp/bior_full_backup_2026-03-16.tar.gz -C /home/user/
```

---

## NEXT STEPS (Recommended)

1. **Enrich platforms #11-20** using `deep_enrich_top10.py` as template
2. **Deploy webapp to Cloudflare Pages** for permanent URL
3. **Expand CBRN assessment** to all L3_Defense platforms
4. **Add adversary platform profiles** (Russia VECTOR, China AMMS, etc.)
5. **Build investment roadmap** (Phase 2 deliverable)
6. **Quarterly update cycle** per BioR project plan
