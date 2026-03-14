# CANONICAL REFERENCE BASELINE

## DO NOT DELETE OR MODIFY THIS DIRECTORY

> **This is the AUTHORITATIVE ground-truth dataset for the Pathogen Surveillance Evaluation Framework (PSEF) v3.0.0.**
> All future analysis, scope refinements, dashboard rebuilds, and derivative works **MUST** reference this baseline.
> If the data needs updating, create a **new version** (e.g., `CANONICAL_v3.1_PLATFORMS.json`) alongside this one.

---

## Baseline Summary

| Metric | Value |
|--------|-------|
| **Date Frozen** | 2026-03-14 |
| **Total Platforms** | 169 |
| **Evaluation Dimensions** | 10 |
| **Total Data Points** | 1,690 |
| **Score Range** | 55 - 95 |
| **Mean Score** | 78.6 |

### Tier Distribution

| Tier | Range | Count |
|------|-------|-------|
| Excellent | >= 90 | 3 |
| Good | 80-89 | 74 |
| Adequate | 70-79 | 77 |
| Developing | < 70 | 15 |

---

## 10 Evaluation Dimensions

| # | Dimension | Short Code | Weight |
|---|-----------|------------|--------|
| 1 | Data Integration | DI | 12% |
| 2 | Analytics Capability | AC | 12% |
| 3 | Visualization | VZ | 10% |
| 4 | Accessibility | AX | 10% |
| 5 | Scalability | SC | 10% |
| 6 | Documentation | DC | 8% |
| 7 | Community Support | CS | 8% |
| 8 | Security & Compliance | SE | 12% |
| 9 | Interoperability | IO | 10% |
| 10 | Real-Time Capability | RT | 8% |

---

## Three Scope Options

### Option A: Global Biosurveillance & Biodefense (114 platforms)
Operational detection/response systems. Excludes R packages, pure research programs, hardware-only sensors, policy frameworks.

### Option B: Full Spectrum Biological Threat Intelligence (169 platforms)
All 169 platforms organized into 5 layers:
- **L1 Active Surveillance** (63 platforms)
- **L2 Genomic & Analytical Tools** (57 platforms)
- **L3 Defense & Military Programs** (35 platforms)
- **L4 Detection Hardware** (9 platforms)
- **L5 Policy & Assessment** (5 platforms)

### Option C: Pathogen Surveillance Software Benchmark (93 platforms)
Usable software platforms only. Excludes military programs, hardware, classified institutes, policy frameworks, R packages.

---

## Complete Platform Registry (169 Platforms)

| # | Platform | Score | Category |
|---|----------|-------|----------|
| 1 | Nextstrain | 95 | Phylogenetic Analysis & Visualization |
| 2 | outbreak.info | 90 | Epidemiological Data Aggregation |
| 3 | SORMAS | 90 | Surveillance & Outbreak Response |
| 4 | DHIS2 | 89 | Health Information Management |
| 5 | NCBI Pathogen Detection | 88.9 | Genomic Pathogen Detection |
| 6 | GISAID | 88.5 | Genomic Data Sharing |
| 7 | Microreact | 87.5 | Genomic Epidemiology Visualization |
| 8 | Pathogenwatch | 87 | Pathogen Genomic Analysis |
| 9 | Galaxy Project | 86.5 | Bioinformatics Workflow Platform |
| 10 | EpiCollect5 | 86 | Mobile Data Collection |
| 11 | Airfinity | 85.5 | AI Health Analytics & Disease Forecasting |
| 12 | HealthMap | 85.5 | Disease Intelligence |
| 13 | ProMED | 85 | Event-Based Surveillance |
| 14 | OpenELIS | 84.5 | Laboratory Information System |
| 15 | WHONET | 84 | AMR Surveillance |
| 16 | ReportStream | 83.5 | Data Exchange Pipeline |
| 17 | BioNumerics | 83 | Bioinformatics Suite |
| 18 | EnteroBase | 82.5 | Bacterial Genomic Database |
| 19 | IRIDA | 82 | Genomic Epidemiology Platform |
| 20 | PHE Sequence Pipeline | 81.5 | National Sequencing Pipeline |
| 21 | GLASS (WHO) | 81 | Global AMR Surveillance |
| 22 | PulseNet | 80.5 | Foodborne Disease Surveillance |
| 23 | Auspice | 80 | Phylogenetic Visualization |
| 24 | Terra | 79.5 | Cloud Bioinformatics |
| 25 | CoVariants | 79 | Variant Tracking |
| 26 | Pangolin | 78.5 | Lineage Classification |
| 27 | Nextclade | 78 | Sequence Analysis |
| 28 | SAP | 77.5 | Regional Surveillance |
| 29 | COG-UK | 77 | National Genomic Consortium |
| 30 | INSaFLU | 76.5 | Influenza Genomic Analysis |
| 31 | GECO (ECDC) | 76 | EU Genomic Surveillance |
| 32 | EpiVerse | 75.5 | R Package Ecosystem |
| 33 | EpiTrax | 75 | Disease Surveillance System |
| 34 | Go.Data (WHO) | 74.5 | Outbreak Investigation |
| 35 | EMPRES-i (FAO) | 74 | Animal Disease Surveillance |
| 36 | Epi Info (CDC) | 73.5 | Epidemiological Analysis |
| 37 | WAHIS (WOAH) | 73 | Animal Health |
| 38 | GenomeTrakr | 72.5 | FDA Genomic Network |
| 39 | OpenHIM | 72 | Health Information Exchange |
| 40 | Sitrep | 71.5 | Situation Reporting |
| 41 | MedStar | 71 | Clinical Surveillance |
| 42 | EIDSS | 70.5 | Integrated Surveillance |
| 43 | CanPath | 70 | Population Cohort |
| 44 | SatScan | 69.5 | Spatial Cluster Detection |
| 45 | QGIS Health | 69 | GIS for Health |
| 46 | FluNet (WHO) | 68.5 | Influenza Surveillance |
| 47 | EIOS (WHO) | 68 | Epidemic Intelligence |
| 48 | ECDC Hub | 67.5 | EU Disease Surveillance |
| 49 | ABIS | 67 | Biosurveillance Analytics |
| 50 | Disease.sh | 66.5 | Disease Data API |
| 51 | Africa CDC ARES | 66 | Continental Surveillance |
| 52 | BioPortal (PR) | 65.5 | Territorial Surveillance |
| 53 | CIVET | 65 | Cluster Investigation |
| 54 | Prion Surveillance | 64 | Prion Disease Surveillance |
| 55 | RESAOLAB | 63 | Lab Network (W. Africa) |
| 56 | OpenMRS | 62 | Medical Records Surveillance |
| 57 | Dashboard Template | 60 | Dashboard Template |
| 58 | CZ ID | 89.2 | Metagenomic Pathogen Detection |
| 59 | BV-BRC | 86 | Bacterial & Viral Bioinformatics Resource |
| 60 | BioSense / ESSENCE | 87.2 | Syndromic Surveillance |
| 61 | NWSS | 86.2 | Wastewater Surveillance |
| 62 | Pathoplexus | 85.6 | Genomic Data Sharing |
| 63 | BlueDot | 85 | AI Epidemic Intelligence |
| 64 | Ginkgo Biosecurity | 84 | Integrated Biosurveillance |
| 65 | CARD / RGI | 84.5 | AMR Gene Database & Analysis |
| 66 | CDC TGS | 83.6 | Traveler Genomic Surveillance |
| 67 | NNDSS | 83.5 | Notifiable Disease Reporting |
| 68 | WastewaterSCAN | 83.5 | Wastewater Epidemiology |
| 69 | Bactopia | 83.2 | Bacterial Genome Analysis Pipeline |
| 70 | AMRFinderPlus | 83 | AMR Gene Detection |
| 71 | Biobot Analytics | 82.8 | Wastewater Epidemiology |
| 72 | ResFinder | 82.5 | AMR Gene Detection |
| 73 | EPIWATCH | 82 | AI Epidemic Intelligence |
| 74 | Taxonium | 82 | Phylogenetic Visualization |
| 75 | Seqera Platform | 82 | Bioinformatics Workflow Management |
| 76 | Taxonium / Treenome Browser | 79.8 | Genome-Phylogeny Visualization |
| 77 | Theiagen PHB | 81 | Public Health Bioinformatics Toolkit |
| 78 | BEAST2 | 81.6 | Bayesian Phylodynamics |
| 79 | GLEWS+ | 81.4 | One Health Early Warning |
| 80 | PHoeNIx | 81.2 | CDC WGS Pipeline |
| 81 | GrapeTree | 79.4 | MST Visualization |
| 82 | SNVPhyl | 78.6 | SNP Phylogenomics |
| 83 | Arvados | 80 | Bioinformatics Infrastructure |
| 84 | One CDP | 80.2 | Unified Data Modernization |
| 85 | Kraken2 / Bracken | 81.5 | Metagenomic Taxonomic Classification |
| 86 | One Codex | 82 | Metagenomic Analysis Platform |
| 87 | ArboNET | 80.5 | Arboviral Disease Surveillance |
| 88 | MalariaGEN | 83 | Malaria Genomic Epidemiology |
| 89 | Nucleic Acid Observatory | 78 | Pathogen-Agnostic Metagenomic Surveillance |
| 90 | PHA4GE | 79.5 | Public Health Bioinformatics Standards |
| 91 | ARTIC Network | 80 | Real-Time Genomic Epidemiology |
| 92 | Project Tycho | 77.5 | Historical Disease Data |
| 93 | MetaPhlAn 4 | 80 | Metagenomic Species Profiling |
| 94 | Vivli AMR Register | 78 | AMR Surveillance Data Sharing |
| 95 | CEIRR / iDPCC | 79 | Respiratory Pathogen Research Network |
| 96 | Solu | 82 | Cloud Genomic Pathogen Surveillance |
| 97 | HESN | 79 | National Disease Surveillance |
| 98 | HHIS / HEWS | 77.5 | Mass Gathering Disease Surveillance |
| 99 | Tawakkalna | 76 | National Digital Health & Pandemic Response |
| 100 | KAUST PGL / AssayM | 73 | Pathogen Genomics Research Tools |
| 101 | Saudi AMR Surveillance | 75 | National AMR Surveillance |
| 102 | EWARN (WHO EMRO) | 75 | Crisis Zone Early Warning |
| 103 | DARPA P3 (Pandemic Prevention Platform) | 84 | Military Pandemic Countermeasure R&D |
| 104 | DARPA PREEMPT | 82.5 | Military Zoonotic Spillover Prevention |
| 105 | DARPA ADEPT | 81 | Military Autonomous Diagnostics |
| 106 | DARPA NOW | 79 | Mobile Medical Countermeasure Manufacturing |
| 107 | DARPA INTERCEPT | 79.5 | Adaptive Bio-Countermeasures |
| 108 | DARPA Safe Genes | 80.5 | Gene Drive Biosecurity & Biodefense |
| 109 | DARPA ECHO | 78.5 | WMD Exposure Detection |
| 110 | DARPA RTA | 78 | Rapid Biological Threat Characterization |
| 111 | BSVE (Biosurveillance Ecosystem) | 82 | Military Integrated Biosurveillance |
| 112 | GEIS | 85 | DoD Global Disease Surveillance Network |
| 113 | F-FAST / FFBS | 81 | Far-Forward Biological Sequencing |
| 114 | USAMRIID Biosurveillance | 84 | Military Biodefense Research & Surveillance |
| 115 | JBPDS | 76 | Military Automated Bio-Agent Detection |
| 116 | DTRA BTRP | 80 | Global Cooperative Biological Threat Reduction |
| 117 | NBIC | 78 | DHS Integrated Biosurveillance |
| 118 | BioWatch | 75.5 | National Aerosol Bio-Detection Network |
| 119 | NBACC | 80.5 | National Biodefense Analysis & Bioforensics |
| 120 | IARPA B24IC | 77.5 | Intelligence Community Bio-Intelligence |
| 121 | Project BioShield / BARDA | 81.5 | National Medical Countermeasure Procurement |
| 122 | GHS Index | 83 | Global Health Security Assessment |
| 123 | SecureBio / NAO | 80 | Metagenomic Biosecurity & AI-Bio Risk |
| 124 | BioFire Defense (FilmArray) | 82 | Rapid Multiplex Biothreat Diagnostics |
| 125 | Battelle REBS+ | 77 | Next-Gen Airborne Bio-Identification |
| 126 | Teledyne FLIR IBAC 2 | 76.5 | Aerosol Biological Agent Collection & Detection |
| 127 | Smiths Detection BioFlash | 77.5 | Rapid Biological Agent Identification |
| 128 | Bertin Environics ENVI Assay | 74.5 | Field BWA Immunoassay Detection |
| 129 | Rheinmetall NBC Field Lab | 76 | Mobile CBRN Reconnaissance & Analysis |
| 130 | Bruker CBRNE Detection | 77 | Multi-Spectrum CBRNE Detection Systems |
| 131 | DORA | 78 | AI Outbreak Risk Prediction (Defense) |
| 132 | EpiHiper | 81 | High-Performance Pandemic Simulation |
| 133 | UK Dstl (Porton Down) | 82.5 | UK Military Biodefense Research |
| 134 | DGA Maitrise NRBC | 77 | French Military CBRN Defense |
| 135 | Bundeswehr CBRN Defence | 78 | German Military CBRN Defense |
| 136 | NATO JCBRN Defence COE | 79.5 | NATO CBRN Knowledge & Capability Hub |
| 137 | EU HERA | 81 | EU Health Emergency Preparedness Authority |
| 138 | IIBR (Israel Institute for Biological Research) | 83 | Israeli National Biodefense Research |
| 139 | VECTOR | 76 | Russian National Virology & Biodefense |
| 140 | Russia 48th CBRN Institute | 72 | Russian Military Biological Defense |
| 141 | China AMMS | 74 | Chinese Military Medical & Biodefense Research |
| 142 | China CISDCP | 77 | Chinese National Disease Surveillance Network |
| 143 | Korea-US Joint Biosurveillance Portal | 78.5 | Allied Joint Biosurveillance System |
| 144 | Japan NIID / JSDF CBRN | 78 | Japanese National & Military Biodefense |
| 145 | Australia DSTG CBRN | 79 | Australian Military CBRN Defense Research |
| 146 | DRDC Suffield (Canada) | 79.5 | Canadian Military CBRN Defense Research |
| 147 | India DRDO Biodefense | 75 | Indian Military Biodefense Research |
| 148 | Africa CDC AGARI | 79 | Pan-African Pathogen Genomic Surveillance |
| 149 | JEE (WHO Joint External Evaluation) | 78 | IHR Compliance & Biosecurity Assessment |
| 150 | Federal Select Agent Program | 74 | US Bioterrorism Agent Regulatory Database |
| 151 | JPEO-CBRND Capabilities | 82 | US DoD CBRN Defense Acquisition Executive |
| 152 | USAID PREDICT | 80 | Global Zoonotic Virus Discovery |
| 153 | North Korea Bio Program (Assessed) | 55 | Assessed State Biological Weapons Capability |
| 154 | BEACON (BU/HealthMap) | 83.5 | Open-Source AI Epidemic Surveillance |
| 155 | GPAP | 82.5 | Global Genomic Pathogen Analysis |
| 156 | PPX (CEPI Pandemic Preparedness Engine) | 79 | AI-Powered Pandemic Preparedness R&D |
| 157 | Sante | 72 | AI Epidemic Intelligence as a Service |
| 158 | Pandemic PACT Tracker | 78.5 | Global Pandemic Research Funding Intelligence |
| 159 | DARPA PANACEA | 78 | Multi-Target Military Therapeutics Platform |
| 160 | DARPA SIGMA+ | 80.5 | Urban CBRN Threat Detection Network |
| 161 | JUPITR | 74 | US Forces Korea Biosurveillance |
| 162 | EMBD | 78 | Navy Shipboard Bio-Agent Detection |
| 163 | AVCAD | 76 | Next-Gen Portable CBRN Detection |
| 164 | Chemring TACBIO / JBTDS | 78.5 | Advanced Biological Point Detection |
| 165 | EpiNow2 | 77 | Real-Time Epidemic Forecasting R Package |
| 166 | Google Earth Engine / Health Map AI | 79.5 | Geospatial AI for Disease Ecology |
| 167 | KIDA Biosecurity Analysis (Korea) | 74.5 | Korean Defense Biodefense Analysis |
| 168 | EIOS 2.0 (WHO Enhanced) | 72 | Next-Gen Epidemic Intelligence from Open Sources |

---

## Files in This Directory

| File | Format | Description |
|------|--------|-------------|
| `REFERENCE_BASELINE.md` | Markdown | This manifest (human-readable) |
| `CANONICAL_169_PLATFORMS.json` | JSON | Full structured data with all scores, dimensions, strengths, weaknesses, and scope metadata |
| `CANONICAL_169_PLATFORMS.csv` | CSV | Flat tabular export for spreadsheets and analysis tools |

---

## Usage Rules

1. **Never delete** any file in this directory.
2. **Never modify** `CANONICAL_169_PLATFORMS.json` after freeze date.
3. If scores need updating, create `CANONICAL_v3.1_PLATFORMS.json` (new version).
4. All dashboards (benchmark.html, benchmark_a/b/c.html) derive from this data.
5. Any new scope analysis must reference this as the universe of platforms.
6. Git tag `baseline-v3.0.0-169` marks the exact commit state.

---

*Frozen on 2026-03-14 | PSEF v3.0.0 | 169 Platforms | 1,690 Data Points*
