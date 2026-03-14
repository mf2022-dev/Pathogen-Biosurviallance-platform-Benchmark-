# Pathogen Surveillance Evaluation Framework (PSEF) v3.0.0

**Canonical Baseline: 169 Platforms | 10 Dimensions | 1,690 Data Points**

Comprehensive evaluation framework for global pathogen surveillance and biodefense platforms, covering civilian, military/defense, genomic, hardware, and policy systems across 30+ countries.

## Live Dashboard

- **Full Benchmark (169):** [benchmark.html](benchmark.html)
- **Scope Selector:** [scope.html](scope.html)
  - **Option A** - Global Biosurveillance & Biodefense (114 platforms): [benchmark_a.html](benchmark_a.html)
  - **Option B** - Full Spectrum 5-Layer Analysis (169 platforms): [benchmark_b.html](benchmark_b.html)
  - **Option C** - Software Platforms Only (93 platforms): [benchmark_c.html](benchmark_c.html)
- **Framework:** [frameworks/comprehensive_evaluation_framework_v3_0.html](frameworks/comprehensive_evaluation_framework_v3_0.html)
- **Reports:** [reports/executive_summary_dashboard.html](reports/executive_summary_dashboard.html)
- **Site Index:** [master_index_a_plus_plus_plus.html](master_index_a_plus_plus_plus.html)

## Key Statistics

| Metric | Value |
|--------|-------|
| Total Platforms | **169** |
| Evaluation Dimensions | **10** |
| Total Data Points | **1,690** |
| Score Range | 55 - 95 |
| Mean Score | 78.6 |
| Baseline Date | 2026-03-14 |
| Git Tag | `baseline-v3.0.0-169` |

### Tier Distribution

| Tier | Range | Count |
|------|-------|-------|
| Excellent (>= 90) | Nextstrain, outbreak.info, SORMAS | 3 |
| Good (80-89) | CZ ID, DHIS2, GISAID, DARPA P3, GEIS, etc. | 74 |
| Adequate (70-79) | BioWatch, DARPA NOW, China CISDCP, etc. | 77 |
| Developing (< 70) | RESAOLAB, OpenMRS, North Korea Bio, etc. | 15 |

## Top 10 Platforms

| Rank | Platform | Score | Category |
|------|----------|-------|----------|
| 1 | Nextstrain | 95 | Phylogenetic Analysis & Visualization |
| 2 | outbreak.info | 90 | Epidemiological Data Aggregation |
| 3 | SORMAS | 90 | Surveillance & Outbreak Response |
| 4 | CZ ID | 89.2 | Metagenomic Pathogen Detection |
| 5 | DHIS2 | 89 | Health Information Management |
| 6 | NCBI Pathogen Detection | 88.9 | Genomic Pathogen Detection |
| 7 | GISAID | 88.5 | Genomic Data Sharing |
| 8 | Microreact | 87.5 | Genomic Epidemiology Visualization |
| 9 | BioSense / ESSENCE | 87.2 | Syndromic Surveillance |
| 10 | Pathogenwatch | 87 | Pathogen Genomic Analysis |

## Evaluation Dimensions

| Dimension | Weight | Global Avg |
|-----------|--------|------------|
| Security & Compliance | 12% | 82.5 |
| Data Integration | 12% | 79.3 |
| Analytics Capability | 12% | 79.3 |
| Scalability | 10% | 79.2 |
| Documentation | 8% | 77.9 |
| Real-Time Capability | 8% | 77.7 |
| Interoperability | 10% | 77.3 |
| Visualization | 10% | 76.6 |
| Community Support | 8% | 75.0 |
| Accessibility | 10% | 73.9 |

## Platform Coverage

### By Domain
- **Core Surveillance & Genomics:** 57 platforms
- **Wave 2 (Metagenomic, Wastewater, AMR):** 46 platforms
- **DARPA BTO Programs:** 10 platforms
- **US DoD/DTRA/DHS:** 19 platforms
- **International Military/Defense:** 16 platforms
- **Detection Hardware:** 9 platforms
- **Middle East Platforms:** 7 platforms
- **AI & Forecasting:** 5 platforms

### By Country/Region
USA, UK, France, Germany, Israel, Russia, China, South Korea, Japan, Australia, Canada, India, Saudi Arabia, Africa (Pan-continental
), EU, NATO

## Canonical Reference Baseline

The `reference_baseline/` directory contains the frozen authoritative dataset:

- `CANONICAL_169_PLATFORMS.json` - Full structured data (all scores, dimensions, strengths, weaknesses)
- `CANONICAL_169_PLATFORMS.csv` - Flat tabular export for spreadsheets
- `REFERENCE_BASELINE.md` - Manifest with complete 169-platform registry and usage rules

**Rules:** Never modify files in `reference_baseline/`. If data needs updating, create a new version (e.g., `CANONICAL_v3.1_PLATFORMS.json`).

## Project Structure

```
pathogen-push/
├── benchmark.html              # Full benchmark dashboard (169 platforms)
├── benchmark_a.html            # Option A: Biosurveillance & Biodefense (114)
├── benchmark_b.html            # Option B: Full Spectrum 5-Layer (169)
├── benchmark_c.html            # Option C: Software Only (93)
├── scope.html                  # Scope selector hub page
├── index.html                  # Main landing page
├── master_index_a_plus_plus_plus.html  # Complete site map
├── reference_baseline/         # FROZEN canonical dataset
│   ├── CANONICAL_169_PLATFORMS.json
│   ├── CANONICAL_169_PLATFORMS.csv
│   └── REFERENCE_BASELINE.md
├── frameworks/                 # Evaluation methodology
├── reports/                    # Evaluation results & dashboards
├── case_studies/               # In-depth platform analyses
├── evaluation_tools/           # Evaluation templates
├── implementation_guides/      # Deployment guides
├── standards_reference/        # Compliance mappings
├── data/                       # JSON evaluation data
└── scripts/                    # Automation scripts
```

## Compliance Standards

- WHO Pathogen Surveillance Guidance
- CDC Advanced Molecular Detection Standards
- ISO 27799:2025 Health Informatics Security
- FDA AI/ML Guidance for Health Software

## Version

- **Version:** 3.0.0
- **Platforms Evaluated:** 169
- **Date:** March 2026
- **Status:** Active
