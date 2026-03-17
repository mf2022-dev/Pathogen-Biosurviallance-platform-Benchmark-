# Changelog

## [3.1.0] - 2026-03-17 — Deep Research Expansion v2.0

### Added
- Deep-research enrichment for 40 additional platforms (total: 50 enriched)
  - Batch A: Platforms #11-20 (Galaxy Project, NWSS, BV-BRC, EpiCollect5, Pathoplexus, Airfinity, HealthMap, BlueDot, GEIS, ProMED)
  - Batch B: Platforms #21-30 (CARD/RGI, OpenELIS Global, Ginkgo Biosecurity, WHONET, CDC TGS, BEACON, NNDSS, ReportStream, WastewaterSCAN, Bactopia)
  - Batch C: 20 CBRN operational platforms #170-189 (Saab AWR, ENSCO SENTRY, Two Six SIGMA, Riskaware HASP/UrbanAware, Observis ObSAS, Bruhn NewTech CBRN Suite, HAVELSAN Counter-CBRN Suite, Systematic SitaWare CBRN Module, FEMA CBRNResponder Network, ARGOS DSS, RODOS/JRODOS, CAMEO Suite, HPAC, EURDEP/ECURIE, IAEA USIE, CTBTO IDC, SCADACore EnviroLive CBRNE, Bertin Environics EnviScreen Operix, RadResponder, IMAAC Portal)
- Executive summary with 8 key findings injected into meta.enrichment_pipeline
- 10-dimension evaluation framework with weights and global means
- Comparative matrices for platforms 11-30 (4 axes) and CBRN 170-189 (4 axes)
- Recommendations & roadmap with 6-layer sovereign national CBRN architecture
- 31 CBRN assessments across all enriched platforms (true_cbrn, cbrn_module, adjacent, early_warning)
- New scripts: `enrich_all_40.py`, `cbrn_profiles.py`, `inject_all.py`
- `.gitignore` file for Python cache and backup files

### Changed
- `optB_enriched.json` deep_research count: 10 → 50 platforms
- Updated README.md with full v3.1.0 coverage tables and CBRN architecture
- Updated PROJECT_STATE_MANIFEST.md with Phase 5 history and current state

## [3.0.2] - 2026-03-16 — CBRN Platform Addition

### Added
- 20 CBRN operational digital platforms (#170-189) with 7-field profiles
- L4_CBRN_Operational layer classification
- CBRN function tags (BIO, CHEM, RAD, SENSOR, MODEL, INCIDENT, W&R, C2, DECISIONSUPPORT, FORENSICS, MCM)
- Extraction prompt files: PROMPT_BATCH_A/B/C for AI model enrichment
- Injection script: `inject_deep_research_11_30.py`

## [3.0.1] - 2026-03-16 — Deep Research Top 10

### Added
- Deep-research enrichment for top 10 platforms (Nextstrain through Pathogenwatch)
- 7-field enhanced profiles (200-700 chars each) with real citations
- `deep_research` block: executive_summary, key_publications, official_guidelines, controversies_and_changes, ecosystem_connections, key_urls, timeline, cbrn_assessment
- Cross-platform comparison table (6 axes)
- Readable Markdown report: DEEP_RESEARCH_TOP10.md
- BioSense/ESSENCE tagged as `adjacent_enabling_system` for CBRN
- Interactive web viewer (webapp) with 4 views

## [3.0.0] - 2026-03-14 — Canonical Baseline

### Added
- Canonical baseline frozen: 169 platforms, 10 dimensions, 1,690 data points
- Complete evaluation of 169 pathogen surveillance platforms across 5 layers
- 10-dimension scoring methodology with weighted criteria
- Interactive landing page with search, filter, and charts
- Executive summary dashboard
- Gap analysis and improvement roadmap
- 3 scope analysis dashboards (Options A/B/C)
- Platform comparison engine
- BioR intelligence deliverables (Phases 1-3)
- Adversary Dossier (Russia, China, DPRK, Iran)
- Regional Recommendation Briefs (8 core regions)
- Standards reference mapping (WHO, CDC, ISO, FDA, NATO)
- GitHub Pages deployment with Jekyll
- GitHub Actions CI/CD workflow

### Compliance
- WHO Pathogen Surveillance Guidance alignment
- CDC AMD Standards compliance
- ISO 27799:2025 mapping
- FDA AI/ML Guidance alignment
- NATO CBRN Standards (STANAG 2103, ATP-45, APP-11, AEP-45)
