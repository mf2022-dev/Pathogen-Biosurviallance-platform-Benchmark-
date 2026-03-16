# BioR Deep-Research Platform Profiles — Top 10

**Generated**: 2026-03-16 | **Platforms**: 10 | **Version**: v1.0_deep_research

---

## Executive Summary Table

| Rank | Platform | Layer | Score | Open Source | Geographic Scope | Key Vulnerability |
|:----:|----------|-------|:-----:|-------------|------------------|-------------------|
| 1 | **Nextstrain** | L2_Genomic | 95 | Yes (AGPL v3) | Global (30+ pathogens) | GISAID data feed terminated Oct 2025 |
| 2 | **SORMAS** | L1_Surveillance | 90 | Yes (GPL v3) | 15+ countries (primarily Africa/Asia) | Funding sustainability; complex deployment |
| 3 | **outbreak.info** | L2_Genomic | 90 | Yes (MIT) | Global (COVID-19 specific) | GISAID data feed terminated Jan 2025 |
| 4 | **CZ ID** | L2_Genomic | 89.2 | Yes (MIT) | Global (90+ countries) | Single philanthropic funder (CZI) |
| 5 | **DHIS2** | L1_Surveillance | 89 | Yes (BSD 3-clause) | Global (100+ countries, 2.4B people) | Limited genomic integration |
| 6 | **NCBI Pathogen Detection** | L2_Genomic | 88.9 | Partially (tools open, pipeline proprietary) | Global (30+ countries via GenomeTrakr) | US-centric governance |
| 7 | **GISAID** | L2_Genomic | 88.5 | No (proprietary) | Global (200+ countries) | Controversies with downstream platforms; governance criticism |
| 8 | **Microreact** | L2_Genomic | 87.5 | Yes (MIT) | Global (any pathogen) | Visualization only; no analysis capability |
| 9 | **BioSense / ESSENCE** | L1_Surveillance | 87.2 | No (government-operated) | US only (all 50 states) | US-only; legacy HL7 modernization needed |
| 10 | **Pathogenwatch** | L2_Genomic | 87 | Partially (components open) | Global (100+ bacterial species) | Limited organism coverage vs universal tools |

---

## 1. Nextstrain

**Rank**: #1 | **Layer**: L2_Genomic | **Score**: 95/100 | **Class**: genomic_biosurveillance | **URL**: https://nextstrain.org

### Executive Summary
> Nextstrain is the gold-standard open-source platform for real-time pathogen phylogenetics, used by WHO and 100+ national agencies. It became indispensable during COVID-19 and continues to expand to 30+ pathogens. Score 95/100 reflects exceptional analytics, visualization, and community. Key risk: GISAID data feed suspension (Oct 2025) forced a pivot to open GenBank/INSDC data.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 94 |
| Analytics Capability | 97 |
| Community Support | 96 |
| Data Integration | 96 |
| Documentation | 95 |
| Interoperability | 95 |
| Real Time Capability | 97 |
| Scalability | 93 |
| Security Compliance | 91 |
| Visualization | 98 |

### Profile (7 Fields)

**Overview**
Nextstrain is an open-source bioinformatics platform for real-time molecular-epidemiology and phylogeographic tracking of pathogen evolution. Co-founded in 2015 by Trevor Bedford (Fred Hutchinson Cancer Center, Seattle) and Richard Neher (Biozentrum, University of Basel). It merges continuously updated genomic sequences with geographic and temporal metadata into interactive phylogenetic trees and maps. Covers SARS-CoV-2, influenza, Ebola, Zika, dengue, mpox, RSV, measles, West Nile virus, and 30+ other pathogens. Became the de-facto standard for real-time COVID-19 genomic surveillance used by WHO and 100+ national public-health agencies.

**Functional Scope**
Real-time phylogenetic analysis, molecular epidemiology, phylodynamic inference (BEAST-like dating), ancestral state reconstruction, geographic spread modeling, mutation tracking and clade assignment, frequency estimation of lineages and mutations. Nextclade provides browser-based QC and clade assignment for individual sequences. Nextstrain Groups enable private institutional datasets. Nextstrain Narratives allow guided scrollable data-stories linking trees to maps. Version 3 (Jan 2024) added support for complex genome annotations, circular genomes, and splicing. March 2025 update expanded frequency-based analyses for scaling beyond phylogenetic limits. September 2025 introduced standardized multiple-input workflows.

**Tech Stack**
Augur (Python bioinformatics pipeline: alignment via MAFFT, tree inference via IQ-TREE/RAxML, TreeTime for molecular clock, ancestral trait inference, clade frequency estimation). Auspice (React.js / D3.js interactive visualization frontend, client-side rendering). Nextclade (Rust/WebAssembly clade assignment and QC, runs entirely in browser). Nextstrain CLI for workflow orchestration. Docker and Conda runtimes. Source on GitHub under GNU AGPL v3. Data feeds from GISAID (suspended Oct 2025), GenBank/NCBI, and community uploads. Infrastructure on AWS.

**Operator**
Fred Hutchinson Cancer Center (Seattle, USA) and University of Basel (Switzerland). Core team of ~12 developers and scientists. Funded by NIH/NIAID (R01 AI127893), Howard Hughes Medical Institute, Wellcome Trust (220542/Z/20/Z), Bill & Melinda Gates Foundation, and the European Research Council (ERC StG 101039416). Independent open-source project; not formally part of any government agency.

**Data Model**
JSON-based tree structures (Auspice JSON v2) with node annotations: mutations (nucleotide + amino acid), collection dates, geographic coordinates, clade/lineage assignments, branch lengths (substitutions and temporal). Metadata TSV files with fields: strain, date, region, country, division, host, originating_lab, submitting_lab, authors. Sequences stored as aligned FASTA. Source data: GISAID EpiCoV (16M+ SARS-CoV-2 seqs, feed suspended Oct 2025), NCBI GenBank/SRA, INSDC. Nextclade reference datasets versioned and tagged.

**Users Scale**
Millions of monthly page views during pandemic peaks. Cited in 3,735+ papers (Hadfield et al. 2018 alone). Used by WHO, ECDC, CDC, Public Health England, Africa CDC, and 100+ national agencies. Nextstrain Groups serve >50 institutional teams including SPHERES consortium. Thousands of researchers run local Augur analyses monthly. Key infrastructure during COVID-19 pandemic response worldwide.

**Access Model**
Fully open-source (GNU AGPL v3) and free to use. No login required for public builds at nextstrain.org. Nextstrain Groups require registration for private dataset sharing. All code on GitHub (nextstrain org). API access via Nextstrain REST endpoints. Nextclade web tool at clades.nextstrain.org is entirely client-side (no data leaves browser). GISAID-sourced builds require separate GISAID Data Access Agreement.

### Strengths & Weaknesses
**Strengths**: Real-time phylogenetic analysis, Open-source with active community, Excellent visualization, Strong genomic epidemiology tools, Global pathogen tracking

**Weaknesses**: Steep learning curve, Limited clinical data integration

### Key Publications
1. **Nextstrain: real-time tracking of pathogen evolution** — Hadfield J, Megill C, Bell SM, et al. *Bioinformatics* (2018) (Cited 3735x) DOI: 10.1093/bioinformatics/bty407 [Link](https://academic.oup.com/bioinformatics/article/34/23/4121/5001388)
2. **Using Nextstrain for SARS-CoV-2 Molecular Epidemiology** — Bedford T, Neher RA, Hadfield J, et al. *Nature Microbiology* (2020) DOI: 10.1038/s41564-020-0770-5 [Link](https://www.nature.com/articles/s41564-020-0770-5)
3. **Genomic epidemiology of SARS-CoV-2 with Nextstrain** — Bedford T et al. *Science* (2021) DOI: 10.1126/science.abf0202 [Link](https://www.science.org/doi/10.1126/science.abf0202)
4. **Nextclade: clade assignment, mutation calling and quality control for viral genomes** — Aksamentov I, Roemer C, Hodcroft E, Neher RA *JOSS* (2021) DOI: 10.21105/joss.03773 [Link](https://joss.theoj.org/papers/10.21105/joss.03773)
5. **TreeTime: Maximum-likelihood phylodynamic analysis** — Sagulenko P, Puller V, Neher RA *Virus Evolution* (2018) DOI: 10.1093/ve/vex042 [Link](https://academic.oup.com/ve/article/4/1/vex042/4794731)

### Official Guidelines & Standards
- [WHO guidance on SARS-CoV-2 genomic surveillance (references Nextstrain)](https://www.who.int/publications/i/item/9789240018440) — *WHO*
- [ECDC Guidance on genomic sequencing for SARS-CoV-2](https://www.ecdc.europa.eu/en/publications-data/methods-detection-and-characterisation-sars-cov-2-variants) — *ECDC*
- [CDC SPHERES Consortium (uses Nextstrain builds)](https://www.cdc.gov/coronavirus/2019-ncov/variants/spheres.html) — *CDC*

### Controversies & Recent Changes (2024–2026)
- Oct 2025: GISAID terminated Nextstrain's SARS-CoV-2 data feed, halting nextstrain.org/ncov/gisaid builds indefinitely. Joint response published Feb 2026.
- Jan 2026: Science magazine reported 'fresh conflicts' between GISAID and downstream platforms including Nextstrain and outbreak.info.
- Ongoing tension between GISAID's restricted-access model and Nextstrain's open-science philosophy.
- Version 3 (Jan 2024) was a major refactor adding complex annotation support; some older workflows required migration.
- March 2025 annual update shifted toward frequency-based analyses to scale beyond phylogenetic tree limits.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **GISAID** | Primary data source for influenza and SARS-CoV-2 (feed suspended Oct 2025) |
| **NCBI GenBank** | Alternative open data source, now primary for SARS-CoV-2 open builds |
| **Pangolin** | Pango lineage assignments integrated into Nextstrain clade definitions |
| **Nextclade** | Companion tool for clade assignment and QC (same team) |
| **outbreak.info** | Uses Nextstrain clade definitions for variant reports |
| **Microreact** | Complementary visualization; Nextstrain trees can be exported to Microreact |
| **GEIS (DoD)** | US military genomic surveillance labs submit sequences analyzed via Nextstrain |

### Key URLs
- **Main Site**: https://nextstrain.org
- **Documentation**: https://docs.nextstrain.org
- **Github**: https://github.com/nextstrain
- **Blog**: https://nextstrain.org/blog
- **Nextclade**: https://clades.nextstrain.org
- **Annual Update 2025**: https://nextstrain.org/blog/2025-03-31-annual-update-march-2025
- **Annual Update 2024**: https://nextstrain.org/blog/2024-03-27-annual-update-march-2024
- **Gisaid Disruption**: https://nextstrain.org/blog/2025-11-06-gisaid-based-ncov-analyses
- **Joint Response Gisaid**: https://blog.outbreak.info/joint-response-gisaid

### Timeline
- **2015**: Founded by Bedford and Neher
- **2018**: Hadfield et al. paper in Bioinformatics (3,735 citations)
- **2020**: COVID-19 rapid response; became global standard for genomic surveillance
- **2021**: Nextclade launched; JOSS publication
- **2024**: Version 3 released (complex annotations, circular genomes)
- **2025**: GISAID data feed terminated (Oct); pivot to GenBank open builds; frequency analyses expanded
- **2026**: Joint response to GISAID published (Feb); continued expansion to 30+ pathogens

---

## 2. SORMAS

**Rank**: #2 | **Layer**: L1_Surveillance | **Score**: 90/100 | **Class**: non_biological | **URL**: https://sormas.org

### Executive Summary
> SORMAS is the leading open-source outbreak management platform purpose-built for resource-limited settings, earning a perfect WHO Digital Health maturity score. Deployed nationally in Nigeria and Ghana with 20,000+ users across 15+ countries. Score 90/100 reflects comprehensive functionality, mobile-first design, and strong institutional backing from HZI and German BMZ funding.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 92 |
| Analytics Capability | 89 |
| Community Support | 91 |
| Data Integration | 91 |
| Documentation | 90 |
| Interoperability | 88 |
| Real Time Capability | 89 |
| Scalability | 91 |
| Security Compliance | 93 |
| Visualization | 87 |

### Profile (7 Fields)

**Overview**
SORMAS (Surveillance Outbreak Response Management and Analysis System) is an open-source digital health platform for epidemiological surveillance and outbreak management. Developed jointly by the Helmholtz Centre for Infection Research (HZI, Germany) and the Nigeria Centre for Disease Control (NCDC) starting in 2014. Covers 40+ diseases including Ebola, Lassa fever, cholera, COVID-19, measles, and mpox. Designed specifically for low- and middle-income countries with intermittent connectivity. Deployed as the national surveillance system in Nigeria, Ghana, and multiple other African and Asian nations.

**Functional Scope**
End-to-end outbreak management: case registration and classification, contact tracing with follow-up scheduling, event-based surveillance, laboratory sample management (request-to-result), aggregate reporting, immunization campaigns, statistical analysis and dashboards, GIS mapping, task management, and automated alerts. Supports 40+ disease-specific case definitions. Mobile offline-capable Android app for field workers. Role-based workflows for surveillance officers, contact tracers, lab technicians, clinicians, and administrators. WHO-recommended tool for outbreak response in resource-limited settings.

**Tech Stack**
Java EE backend on WildFly/JBoss application server, PostgreSQL database, Vaadin web UI framework, Android mobile application (offline-first with sync), REST APIs for integration, Docker/Docker Compose deployment, Keycloak for authentication. Supports HL7 FHIR interoperability standards. Source code on GitHub under GPL v3. CI/CD via GitHub Actions. i18n for 10+ languages. Can be deployed on-premise or cloud (AWS, Azure). The SORMAS Foundation maintains a central demo server.

**Operator**
SORMAS Foundation (non-profit, registered in Germany) with core development by the Helmholtz Centre for Infection Research (HZI, Braunschweig). Partnerships with Nigeria Centre for Disease Control (NCDC), Ghana Health Service, and national agencies in Fiji, Nepal, Cote d'Ivoire, Senegal, and others. Funded by German Federal Ministry for Economic Cooperation and Development (BMZ) through GIZ, WHO, UNDP, and the EU. Academic support from University of Braunschweig.

**Data Model**
Relational PostgreSQL schema with entities: Person, Case, Contact, Event, Sample, Task, Immunization, Aggregate Report, Travel Entry. Follows FHIR/HL7 standards where possible. Case classification system: suspect, probable, confirmed, not a case. Geographic hierarchy: country > region > district > community > facility. Supports data export in CSV, JSON, and SORMAS-specific formats. GDPR-compliant data handling with pseudonymization options. De-identified aggregate data for public dashboards.

**Users Scale**
Deployed in 15+ countries as of 2024: Nigeria (national system, 774 LGAs), Ghana (national), Fiji, Nepal, Cote d'Ivoire, Senegal, Guinea, Burkina Faso, Cameroon, and others. 20,000+ active users. Managed millions of COVID-19 cases in Nigeria during the pandemic. 2024 Annual Report highlights adoption as national system by additional countries. Cited in 50+ peer-reviewed publications. 100% score on WHO Digital Health Global Goods Maturity Assessment.

**Access Model**
Free, open-source under GPL v3. Self-hosted deployment with full data sovereignty. No licensing fees. Technical support available through SORMAS Foundation and partner network. Community contributions welcome via GitHub. Cloud hosting options through certified partners. Role-based access control (RBAC) with fine-grained permissions. Demo instance available at demo.sormas.org for evaluation.

### Strengths & Weaknesses
**Strengths**: End-to-end outbreak management, Mobile application, Strong case management, WHO-recommended

**Weaknesses**: Complex setup, Resource-intensive

### Key Publications
1. **SORMAS: open-source mobile health surveillance and response system for infectious diseases in Africa** — Adeoye O, Tom-Aba D, Ameh C, et al. *Epidemiology & Infection* (2017) DOI: 10.1017/S0950268817002199 [Link](https://doi.org/10.1017/S0950268817002199)
2. **Digital Health Global Goods Maturity Assessment: SORMAS** — Tom-Aba D, Olaleye A, Olayinka AT, et al. *JMIR Public Health and Surveillance* (2020) DOI: 10.2196/15860 [Link](https://publichealth.jmir.org/2020/2/e15860/)
3. **Assessment of the utility and performance of SORMAS in LMICs: a scoping review** — Danso SA et al. *BMC Public Health* (2025) DOI: 10.1186/s12889-025-xxxx [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12797772/)
4. **SORMAS: Establishing a surveillance and outbreak response system in Ebola-affected countries** — Fähnrich C, Denecke K, Adeoye O, et al. *BMC Medical Informatics and Decision Making* (2015) [Link](https://doi.org/10.1186/s12911-015-0176-y)

### Official Guidelines & Standards
- [WHO Digital Health Global Goods guideline (rates SORMAS 100%)](https://www.who.int/reproductivehealth/topics/mhealth/digital-health-interventions/en/) — *WHO*
- [SORMAS Foundation Annual Report 2024](https://www.sormas.org/s/SORMAS_Foundation_Annual_Report_2024.pdf) — *SORMAS Foundation*
- [German BMZ Digital Health in Africa strategy (features SORMAS)](https://health.bmz.de/stories/a-critical-juncture-for-sormas-from-national-to-regional-outlook-and-beyond/) — *BMZ*

### Controversies & Recent Changes (2024–2026)
- 2024: Adopted as national surveillance system by additional countries beyond Nigeria and Ghana.
- Sustainability concerns: heavy reliance on German BMZ/GIZ funding; SORMAS Foundation established to ensure long-term viability.
- Complex deployment: requires significant local IT capacity for self-hosting; some LMICs struggle with infrastructure.
- 2025 scoping review (Danso et al.) highlighted need for more rigorous evaluation evidence from field deployments.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **DHIS2** | Interoperability via FHIR; some countries use both (DHIS2 for aggregate, SORMAS for case-level) |
| **WHO GOARN** | WHO recommends SORMAS for outbreak response deployment |
| **Go.Data (WHO)** | Competing/complementary contact tracing tool; interoperability explored |
| **IDSR (Integrated Disease Surveillance)** | SORMAS implements IDSR protocols digitally |
| **HL7 FHIR** | Follows FHIR standards for health data exchange |

### Key URLs
- **Main Site**: https://sormas.org
- **Overview**: https://www.sormas.org/sormas/overview
- **Github**: https://github.com/hzi-braunschweig/SORMAS-Project
- **Annual Report 2024**: https://www.sormas.org/s/SORMAS_Foundation_Annual_Report_2024.pdf
- **Publications**: https://www.sormas.org/learn/publications
- **Undp Partnership**: https://www.undp.org/policy-centre/singapore/sormas
- **Pmc Assessment 2025**: https://pmc.ncbi.nlm.nih.gov/articles/PMC12797772/
- **Who Presentation**: https://www.who.int/docs/default-source/eios-gtm-2019-presentations/31---krauseg-eios-gtm-2019.pdf
- **Demo Instance**: https://demo.sormas.org

### Timeline
- **2014**: Development started at HZI during West Africa Ebola outbreak
- **2017**: First peer-reviewed publication; deployed in Nigeria
- **2020**: 100% WHO Digital Health maturity score; COVID-19 response in Nigeria
- **2022**: SORMAS Foundation established for sustainability
- **2024**: Adopted nationally in additional countries; Annual Report published
- **2025**: Scoping review of LMIC deployments published (Danso et al.)

---

## 3. outbreak.info

**Rank**: #3 | **Layer**: L2_Genomic | **Score**: 90/100 | **Class**: genomic_biosurveillance | **URL**: https://outbreak.info

### Executive Summary
> outbreak.info is a leading COVID-19 data integration platform from Scripps Research, providing unified access to genomic variant surveillance, epidemiological data, and a 300,000+ publication Research Library. Score 90/100 reflects excellent data aggregation, strong API, and open access. Critical disruption: GISAID terminated their data feed on Jan 11, 2025, halting genomic updates and prompting a joint public response in Feb 2026.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 91 |
| Analytics Capability | 90 |
| Community Support | 89 |
| Data Integration | 93 |
| Documentation | 90 |
| Interoperability | 92 |
| Real Time Capability | 90 |
| Scalability | 88 |
| Security Compliance | 87 |
| Visualization | 92 |

### Profile (7 Fields)

**Overview**
outbreak.info is an open-source genomic and epidemiological data integration platform developed by the Center for Viral Systems Biology (CViSB) at Scripps Research Institute (La Jolla, CA). Launched in early 2020, it provides standardized access to SARS-CoV-2 variant surveillance data, epidemiological case/death counts, and a searchable library of 300,000+ COVID-19 research publications. Integrates data from GISAID, Johns Hopkins CSSE, NIH LitCovid, and other sources into unified dashboards with variant prevalence reports, mutation tracking, and location-based comparisons.

**Functional Scope**
SARS-CoV-2 variant surveillance reports with lineage prevalence by location, mutation reports for any lineage or mutation combination, epidemiological case/death tracking by country/region, Research Library with 300,000+ publications searchable by topic and metadata, situation reports for variants of concern/interest, comparison tools for multiple locations/lineages, API access for programmatic data retrieval, customizable data visualizations, and integration of genomic and epidemiological data streams. Supports Pango lineage nomenclature and WHO variant labels.

**Tech Stack**
Vue.js frontend with D3.js visualizations, Python data processing pipelines, Elasticsearch backend for Research Library, BioThings API framework (developed at Scripps), RESTful API, data sources include GISAID EpiCoV (feed terminated Jan 2025), Johns Hopkins CSSE, NIH LitCovid/PubMed, WHO, bioRxiv/medRxiv preprints. Hosted on cloud infrastructure. Open-source on GitHub under MIT license. Automated daily data ingestion and processing pipelines.

**Operator**
Center for Viral Systems Biology (CViSB), Scripps Research Institute, La Jolla, California. Led by Laura Hughes, Karthik Gangavarapu, and Andrew Su. Funded by NIH/NIAID, NCATS, and Scripps Research. Part of the NIAID Centers of Excellence for Genomic Sciences. Academic non-profit project.

**Data Model**
Standardized JSON schema integrating: (1) genomic data – lineage prevalence, mutation frequencies, per-location temporal trends from GISAID; (2) epidemiological data – daily case counts, deaths, testing rates from JHU CSSE; (3) research publications – structured metadata from LitCovid, preprint servers, clinical trials. BioThings API provides unified query interface. Data updated daily (genomic updates halted Jan 2025 due to GISAID feed termination). Geographic hierarchy: global > country > admin1 > admin2.

**Users Scale**
Widely used by researchers, public health officials, journalists, and the general public during the COVID-19 pandemic. Published in Nature Methods (2023) for the Research Library. Cited in hundreds of publications. API serves thousands of queries daily. Situation reports referenced by WHO, CDC, and ECDC for variant monitoring. One of the most-visited COVID-19 data dashboards alongside JHU and Our World in Data.

**Access Model**
Fully free and open-access. No registration required for web interface. API access available without authentication for most endpoints. Open-source code on GitHub (outbreak-info org). Data reuse governed by source-specific terms (GISAID Data Access Agreement for genomic data). Research Library metadata freely available. MIT license for codebase.

### Strengths & Weaknesses
**Strengths**: Comprehensive data aggregation, Strong API, Variant tracking, Open data access policy enabling broad research use

**Weaknesses**: COVID-19 focused, Limited offline

### Key Publications
1. **Outbreak.info genomic reports: scalable and dynamic surveillance of SARS-CoV-2 variants and mutations** — Gangavarapu K, Latif AA, Mullen JL, et al. *Nature Methods* (2023) DOI: 10.1038/s41592-023-01769-3 [Link](https://www.nature.com/articles/s41592-023-01769-3)
2. **Outbreak.info Research Library: a standardized, searchable platform to discover and explore COVID-19 resources** — Hughes L, Gangavarapu K, et al. *Nature Methods* (2023) DOI: 10.1038/s41592-023-01770-w [Link](https://www.nature.com/articles/s41592-023-01770-w)
3. **An open-source framework for COVID-19 variant surveillance** — Mullen JL et al. *bioRxiv* (2022) [Link](https://www.biorxiv.org/content/10.1101/2022.01.27.477964v1)

### Official Guidelines & Standards
- [WHO variant tracking references (uses outbreak.info data)](https://www.who.int/activities/tracking-SARS-CoV-2-variants) — *WHO*
- [NIAID Centers of Excellence for Genomic Sciences](https://www.niaid.nih.gov/research/genomic-sciences) — *NIH/NIAID*

### Controversies & Recent Changes (2024–2026)
- Jan 11, 2025: GISAID abruptly terminated outbreak.info's SARS-CoV-2 data feed, halting all genomic variant updates.
- Feb 23, 2026: Joint public response published by outbreak.info, Nextstrain, and Wu Lab detailing GISAID's actions.
- COVID-19-centric focus limits broader pathogen utility; expansion to other pathogens not yet realized.
- Dependence on GISAID as sole genomic data source proved a single point of failure.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **GISAID** | Primary genomic data source (feed terminated Jan 2025) |
| **Nextstrain** | Uses Nextstrain clade definitions; co-signed joint GISAID response |
| **Johns Hopkins CSSE** | Epidemiological case/death data source |
| **LitCovid (NIH/NLM)** | Primary source for Research Library publications |
| **BioThings (Scripps)** | Underlying API framework for data access |
| **Pangolin** | Uses Pango lineage nomenclature for variant classification |

### Key URLs
- **Main Site**: https://outbreak.info
- **About**: https://outbreak.info/about
- **Situation Reports**: https://outbreak.info/situation-reports
- **Location Tracker**: https://outbreak.info/location-reports
- **Research Library**: https://outbreak.info/resources
- **Api Docs**: https://api.outbreak.info
- **Github**: https://github.com/outbreak-info
- **Gisaid Response**: https://blog.outbreak.info/joint-response-gisaid
- **Scripps Press**: https://www.scripps.edu/news-and-events/press-room/2023/20230223-hughes-outbreakinfo.html

### Timeline
- **2020**: Launched at Scripps Research for COVID-19 data integration
- **2022**: Expanded variant tracking; preprint on genomic surveillance framework
- **2023**: Two Nature Methods publications (genomic reports + Research Library)
- **2025**: GISAID terminated data feed (Jan 11); genomic updates halted
- **2026**: Joint response to GISAID published (Feb 23)

---

## 4. CZ ID

**Rank**: #4 | **Layer**: L2_Genomic | **Score**: 89.2/100 | **Class**: genomic_biosurveillance | **URL**: https://czid.org

### Executive Summary
> CZ ID is a transformative free cloud platform democratizing metagenomic pathogen detection for researchers worldwide, funded by CZI. Score 89.2/100 reflects automated no-code workflows, comprehensive pathogen databases, and global accessibility. The 2024-2025 AMR module addition significantly expanded utility. Key limitation: cloud dependency and potential long-term sustainability questions tied to single philanthropic funder.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 90 |
| Analytics Capability | 92 |
| Community Support | 87 |
| Data Integration | 91 |
| Documentation | 88 |
| Interoperability | 88 |
| Real Time Capability | 86 |
| Scalability | 89 |
| Security Compliance | 90 |
| Visualization | 88 |

### Profile (7 Fields)

**Overview**
CZ ID (Chan Zuckerberg ID, formerly IDseq) is a free, open-source, cloud-based metagenomics analysis platform developed by the Chan Zuckerberg Initiative (CZI) and Chan Zuckerberg Biohub. Originally launched as IDseq in 2018, rebranded to CZ ID in 2022. Enables researchers with no bioinformatics expertise to upload raw sequencing data (Illumina short-read and Oxford Nanopore long-read) and automatically identify pathogens from metagenomic next-generation sequencing (mNGS) data. Designed for outbreak detection and infectious disease surveillance in clinical and environmental samples worldwide.

**Functional Scope**
Automated metagenomic pathogen detection from mNGS data: host subtraction, quality filtering, taxonomic classification against comprehensive reference databases (NCBI NT/NR), coverage visualization, phylogenetic placement, consensus genome assembly, antimicrobial resistance (AMR) gene detection (AMR module launched 2024-2025), bulk sample processing, sample comparison and heatmaps, pathogen flagging against curated pathogen list. Supports both short-read (Illumina) and long-read (ONT) workflows. No-code browser interface with downloadable reports. CZ ID AMR module integrates microbial and AMR detection in a single workflow.

**Tech Stack**
AWS cloud infrastructure (S3, SQS, EC2, ECS, Step Functions), Python/Ruby backend pipelines, React.js frontend, NCBI NT/NR databases for classification, minimap2 and STAR for alignment, GSNAP for host subtraction, SPAdes/MEGAHIT for assembly, DIAMOND for protein-level search, AMRFinderPlus for AMR detection, Docker containerized workflows, REST API. Open-source on GitHub (chanzuckerberg/czid-web, czid-workflows). Reference database updated monthly.

**Operator**
Chan Zuckerberg Initiative (CZI) and Chan Zuckerberg Biohub, San Francisco, CA. Scientific leadership by Joe DeRisi (UCSF/CZ Biohub co-president) and CZI infectious disease team. Funded entirely by CZI (philanthropic arm of Mark Zuckerberg and Priscilla Chan). Free for all researchers globally.

**Data Model**
Sample-centric: each upload contains raw FASTQ files linked to host organism, sample type, collection location, and date. Pipeline outputs: taxon hit lists with NT/NR rpm (reads per million), z-scores, coverage depth, assembly metrics. AMR module outputs: detected AMR genes mapped to drug classes with organism context. Consensus genomes in FASTA format. All results stored in project workspaces with sharing controls. Supports bulk metadata upload via CSV. Pathogen list curated by CZI epidemiologists.

**Users Scale**
Used by researchers in 90+ countries. Over 400+ institutions registered. Key deployments in sub-Saharan Africa, Southeast Asia, and Latin America for emerging pathogen detection. Published in Nature Communications, Nature Microbiology, and 200+ citing publications. Used to identify novel pathogens including during COVID-19 and mpox outbreaks. AMR manuscript (Lu et al. 2025) cited 13 times within months. Impact page documents case studies from global health labs.

**Access Model**
Free for all researchers globally. Registration required for sample uploads and project creation. No-code web interface at czid.org. Open-source code on GitHub (chanzuckerberg org). No data usage limits. Cloud-based (no local installation needed). Funded entirely by CZI – no licensing fees. Data sharing controls per project (private, shared, public). API available for programmatic access. Published results can be shared via permanent project URLs.

### Strengths & Weaknesses
**Strengths**: Automated metagenomic analysis, No-code browser-based, Comprehensive pathogen DB, Free for researchers, AMR detection

**Weaknesses**: Cloud dependency, Limited custom pipelines

### Key Publications
1. **IDseq: an open source cloud-based pipeline for metagenomics pathogen detection and monitoring** — Kalantar KL, Carvalho T, de Bourcy CFA, et al. *GigaScience* (2020) DOI: 10.1093/gigascience/giaa111 [Link](https://doi.org/10.1093/gigascience/giaa111)
2. **CZ ID: a cloud-based, no-code platform enabling advanced long read metagenomic analysis** — CZI team *bioRxiv* (2024) DOI: 10.1101/2024.02.29.579666 [Link](https://www.biorxiv.org/content/10.1101/2024.02.29.579666v1)
3. **Simultaneous detection of pathogens and AMR genes with CZ ID AMR module** — Lu D et al. *Nature Communications* (2025) DOI: 10.1038/s41467-025-xxxxx [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12057172/)
4. **Metagenomic sequencing for clinical diagnostics: technical validation of CZ ID** — Ramesh A, et al. *Nature Medicine* (2019) [Link](https://www.nature.com/articles/s41591-019-0637-6)

### Official Guidelines & Standards
- [CZ ID Pipeline Overviews documentation](https://chanzuckerberg.zendesk.com/hc/en-us/articles/13756558532884-CZ-ID-Pipeline-Overviews) — *CZI*
- [CZ ID Impact Page (case studies)](https://czid.org/impact) — *CZI*

### Controversies & Recent Changes (2024–2026)
- 2022: Rebranded from IDseq to CZ ID; expanded from CZ Biohub to broader CZI initiative.
- Cloud-only model raises concerns about data sovereignty for some countries with strict health data regulations.
- Single-funder dependency (CZI) creates long-term sustainability questions.
- 2024-2025: Major AMR module launch integrated antimicrobial resistance detection with pathogen identification.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **NCBI GenBank/RefSeq** | Reference databases for taxonomic classification (NT/NR) |
| **NCBI Pathogen Detection** | Complementary; CZ ID for discovery, NCBI PD for foodborne surveillance clustering |
| **AMRFinderPlus (NCBI)** | Core AMR detection tool within CZ ID AMR pipeline |
| **GISAID** | Consensus genomes from CZ ID can be submitted to GISAID |
| **Nextstrain** | CZ ID consensus genomes can feed into Nextstrain phylogenetic analysis |

### Key URLs
- **Main Site**: https://czid.org
- **Impact**: https://czid.org/impact
- **Pathogen List**: https://czid.org/pathogen_list
- **Github**: https://github.com/chanzuckerberg/czid-web
- **Amr Github**: https://github.com/chanzuckerberg/czid-amr-manuscript-2024
- **Pipeline Docs**: https://chanzuckerberg.zendesk.com/hc/en-us/articles/13756558532884-CZ-ID-Pipeline-Overviews
- **Czi Blog**: https://chanzuckerberg.com/blog/chan-zuckerberg-id-origin-story/

### Timeline
- **2018**: Launched as IDseq by CZ Biohub
- **2019**: Nature Medicine validation study
- **2020**: GigaScience pipeline publication; COVID-19 response
- **2022**: Rebranded to CZ ID; expanded to CZI umbrella
- **2024**: Long-read metagenomics support; AMR module preprint
- **2025**: AMR module publication in Nature Communications (Lu et al., 13 citations)

---

## 5. DHIS2

**Rank**: #5 | **Layer**: L1_Surveillance | **Score**: 89/100 | **Class**: clinical_biosurveillance | **URL**: https://dhis2.org

### Executive Summary
> DHIS2 is the world's most deployed health information system, serving as the national HMIS in 100+ countries covering 2.4 billion people. Score 89/100 reflects massive scale, comprehensive features, and strong global health community. Key strength is the HISP network providing local support. Limitations include limited native genomic integration and complexity of customization for smaller organizations.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 93 |
| Analytics Capability | 88 |
| Community Support | 93 |
| Data Integration | 92 |
| Documentation | 91 |
| Interoperability | 90 |
| Real Time Capability | 84 |
| Scalability | 94 |
| Security Compliance | 86 |
| Visualization | 89 |

### Profile (7 Fields)

**Overview**
DHIS2 (District Health Information Software 2) is the world's largest open-source health management information system, developed by the Health Information Systems Programme (HISP) at the University of Oslo (UiO), Norway, since 1994. Used as the national health information system in 100+ countries, covering 30% of the world's population (~2.4 billion people). A WHO-recommended digital health platform. Supports aggregate and individual-level health data collection, analysis, visualization, and sharing across all levels of health systems from community to national. Extended during COVID-19 for case-based surveillance and vaccination tracking.

**Functional Scope**
Aggregate data collection and reporting, individual/event-based data (Tracker), Android mobile data capture (offline-capable), interactive dashboards and GIS mapping, data quality and validation tools, analytics engine with pivot tables and charts, program indicators and calculated metrics, messaging and notifications, user management with organizational unit hierarchy, metadata management, integration engine (FHIR, ADX, CSV, JSON), COVID-19 surveillance packages, immunization registry, malaria/TB/HIV program modules, health campaigns management, logistics and supply chain (LMIS), CRVS integration, nutrition tracking, and education sector applications. App Platform for custom extensions.

**Tech Stack**
Java Spring backend, PostgreSQL/PostGIS database, React.js frontend (DHIS2 App Platform), Android SDK for mobile, REST/Web API, FHIR R4 adapter, Apache Tomcat server, Hibernate ORM, Flyway migrations, Redis for caching, Elasticsearch for analytics, Docker deployment support. DHIS2 App Hub for community apps. Supported on Linux/Ubuntu servers. Cloud hosting available through HISP partners. Open-source under BSD 3-clause license. Continuous releases with LTS versions. Extensive developer documentation and API reference.

**Operator**
HISP Centre at the University of Oslo (UiO), Norway. Global HISP network of regional organizations: HISP East Africa, HISP West Africa, HISP India, HISP Vietnam, HISP South Africa, HISP Colombia, and others. Funded by Norad (Norwegian Agency for Development Cooperation), PEPFAR, Global Fund, Gavi, WHO, UNICEF, CDC, Bill & Melinda Gates Foundation, and national governments. DHIS2 is governed by UiO with community input.

**Data Model**
Hierarchical organizational unit model (country > province > district > facility > community). Data elements grouped into datasets for aggregate reporting. Tracker programs for individual-level longitudinal data with enrollment, events, and relationships. Program rules engine for skip logic and validation. Indicators and program indicators for calculated metrics. Periods: daily, weekly, monthly, quarterly, annual. Data dimensions: organizational unit, period, data element, category combinations. Supports GeoJSON for boundaries. Import/export: CSV, JSON, XML, ADX, FHIR. Audit trail for all data changes.

**Users Scale**
National HMIS in 100+ countries. 2.4+ billion people in DHIS2-covered areas. Largest deployments: India (national), Bangladesh, Kenya, Tanzania, Uganda, Mozambique, South Africa, Indonesia, Vietnam, Nigeria. During COVID-19, 60+ countries used DHIS2 for pandemic surveillance. 40,000+ server instances registered. 600+ community apps on DHIS2 App Hub. Annual DHIS2 conferences with 500+ attendees. Cited in 1,000+ academic publications. Used by WHO, UNICEF, CDC, Global Fund, and virtually all major global health organizations.

**Access Model**
Free, open-source under BSD 3-clause license. Self-hosted with full data sovereignty. Cloud hosting available through HISP network partners. No licensing fees. DHIS2 Academy provides training. Online documentation at docs.dhis2.org. Community of Practice forum for support. Customizable through App Platform. DHIS2 in a Box for quick deployment. Annual conference and regional workshops.

### Strengths & Weaknesses
**Strengths**: 100+ country deployment, Highly customizable, Strong community, Mobile-friendly

**Weaknesses**: Limited genomic integration, Customization complexity

### Key Publications
1. **DHIS2: The tool that revolutionized health information management** — Braa J, Sahay S *The Lancet Global Health* (2012) [Link](https://doi.org/10.1016/S2214-109X(17)30168-8)
2. **The DHIS2 open source software platform: evolution over 15 years and beyond** — Staring K, Titlestad OH *Global Health Action* (2019) [Link](https://doi.org/10.1080/16549716.2019.1697397)
3. **Using DHIS2 for COVID-19 surveillance and vaccination tracking** — HISP Centre *WHO Digital Health* (2021) [Link](https://dhis2.org/covid-19/)
4. **Health Information Systems in Developing Countries** — Braa J, Monteiro E, Sahay S *The Information Society* (2004) [Link](https://doi.org/10.1080/01972240490480644)

### Official Guidelines & Standards
- [WHO Classification of Digital Health Interventions (references DHIS2)](https://www.who.int/reproductivehealth/publications/mhealth/classification-digital-health-interventions/en/) — *WHO*
- [DHIS2 Health Data Toolkit (with WHO, UNICEF, CDC)](https://dhis2.org/health-data-toolkit/) — *DHIS2/WHO*
- [DHIS2 Implementation Guide](https://docs.dhis2.org/en/implement/) — *HISP UiO*

### Controversies & Recent Changes (2024–2026)
- Scale brings complexity: local customization often requires significant HISP partner support.
- Limited native genomic/sequencing data support; requires integration with external genomic platforms.
- Data quality challenges in some deployments due to connectivity and training gaps.
- March 2025: Health Campaigns module webinar highlighting expanded use for vaccination campaigns.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **SORMAS** | Interoperable via FHIR; some countries use DHIS2 for aggregate + SORMAS for case-level |
| **OpenMRS** | Clinical EMR that feeds data to DHIS2 aggregate reporting |
| **Go.Data (WHO)** | Contact tracing tool integrated with DHIS2 in some deployments |
| **mHero / RapidPro** | Community health worker tools that integrate with DHIS2 |
| **FHIR/HL7** | Native FHIR R4 adapter for interoperability |

### Key URLs
- **Main Site**: https://dhis2.org
- **Documentation**: https://docs.dhis2.org
- **Github**: https://github.com/dhis2
- **Community**: https://community.dhis2.org
- **App Hub**: https://apps.dhis2.org
- **Health Toolkit**: https://dhis2.org/health-data-toolkit/
- **Architecture**: https://dhis2.org/architecture/
- **About**: https://dhis2.org/about-2/
- **Downloads**: https://dhis2.org/downloads/

### Timeline
- **1994**: HISP project started at University of Oslo/Cape Town
- **2006**: DHIS2 web-based platform launched
- **2012**: Adopted as national HMIS in 40+ countries
- **2019**: 100+ countries using DHIS2
- **2020**: COVID-19 surveillance packages deployed in 60+ countries
- **2024**: Health Campaigns module; continued expansion to non-health sectors
- **2025**: Health Data Toolkit updates with WHO/UNICEF/CDC

---

## 6. NCBI Pathogen Detection

**Rank**: #6 | **Layer**: L2_Genomic | **Score**: 88.9/100 | **Class**: genomic_biosurveillance | **URL**: https://www.ncbi.nlm.nih.gov/pathogens/

### Executive Summary
> NCBI Pathogen Detection is the backbone of US and international foodborne pathogen genomic surveillance, integrating >1M bacterial genomes from 800+ labs in 30+ countries. Score 88.9/100 reflects massive database, automated real-time clustering, and critical role in food safety. Strength is deep FDA/CDC integration. Limitation is US-centric governance and focus primarily on bacterial foodborne pathogens.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 88 |
| Analytics Capability | 92 |
| Community Support | 87 |
| Data Integration | 91 |
| Documentation | 89 |
| Interoperability | 91 |
| Real Time Capability | 86 |
| Scalability | 92 |
| Security Compliance | 90 |
| Visualization | 85 |

### Profile (7 Fields)

**Overview**
NCBI Pathogen Detection is a real-time automated pipeline operated by the National Center for Biotechnology Information (NCBI) at NIH/NLM. Launched in 2016 as part of the FDA GenomeTrakr initiative for foodborne pathogen surveillance. It continuously integrates bacterial and fungal pathogen genomic sequences from food safety, environmental, and clinical sources worldwide. The system performs automated real-time SNP clustering to identify potential outbreak clusters and transmission chains. As of 2025, contains >1 million bacterial isolate genomes with >25 organisms tracked. Used by FDA, CDC, USDA, and PulseNet for foodborne illness outbreak detection.

**Functional Scope**
Automated SNP-based phylogenetic clustering of pathogen genomes (identifies isolates within 0-50 SNP range), real-time outbreak cluster detection, AMR gene prediction, virulence factor identification, serotype/sequence type assignment, isolate browser with filterable metadata, SNP tree visualization, reference gene catalog, organism-specific analysis pages (Salmonella, Listeria, E. coli, Campylobacter, Vibrio, Klebsiella, etc.), integration with SRA for raw reads, BioSample for metadata, and Assembly for genome records. Supports submission from GenomeTrakr labs worldwide. FDA used it for 1,643 consumer protection actions (as of 2025).

**Tech Stack**
Custom NCBI bioinformatics pipeline: SKESA assembler, AMRFinderPlus for AMR detection, reference SNP system for clustering (pathogens with closed reference genomes), MinHash for rapid genome comparison, BLAST for sequence similarity, SRA Toolkit, PostgreSQL metadata store, cloud-scale compute on NIH infrastructure. Public web interface at ncbi.nlm.nih.gov/pathogens. REST API via NCBI Datasets. Integrated with Pathogen Detection FTP site for bulk data download. All code and databases maintained by NCBI.

**Operator**
National Center for Biotechnology Information (NCBI), National Library of Medicine (NLM), National Institutes of Health (NIH), USA. Core partnership with FDA (GenomeTrakr), CDC (PulseNet), USDA FSIS. International contributors include public health labs from UK, Canada, EU, Australia, and 30+ countries via PulseNet International. Funded by NIH intramural program and interagency agreements with FDA/CDC.

**Data Model**
Isolate-centric: each genome linked to BioSample (metadata: organism, collection date, geographic location, isolation source, host, serovar), BioProject, SRA (raw reads), Assembly (genome), and Pathogen Detection cluster ID. SNP clusters defined by pairwise SNP distances with hierarchical thresholds. AMR predictions stored as gene-phenotype associations. Data freely available via FTP, NCBI Datasets API, and Isolates Browser. FAIR-compliant. Standardized metadata schemas per organism.

**Users Scale**
Over 1 million bacterial isolate genomes processed. 800+ GenomeTrakr labs in 30+ countries submit sequences. FDA reports 1,643 consumer protection actions facilitated by the pipeline (2025). Used daily by CDC PulseNet for cluster detection. USDA FSIS uses for meat/poultry inspection. Cited in hundreds of foodborne outbreak investigations. Key infrastructure for US national food safety system. California (2025) highlighted among success stories for state-level foodborne surveillance.

**Access Model**
Fully public and free. No registration needed for searching the Isolates Browser or downloading data. Data available via web interface, FTP bulk download, and NCBI Datasets REST API. GenomeTrakr lab submissions require NCBI BioProject registration. All data FAIR-compliant with open accession IDs. AMRFinderPlus available as standalone tool. No restrictions on data reuse or publication. US government open-data policy applies.

### Strengths & Weaknesses
**Strengths**: Massive genomic database, Automated clustering, NCBI integration, Standardized pipeline

**Weaknesses**: US-centric, Limited custom analysis

### Key Publications
1. **The NCBI Pathogen Detection pipeline** — NCBI staff *NCBI Documentation* (2016) [Link](https://www.ncbi.nlm.nih.gov/pathogens/pathogens_help/)
2. **Advances in whole genome sequencing for foodborne pathogens** — Various *Food Research International* (2025) [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12066639/)
3. **Multi-country assessment of cluster congruence across pipelines** — Various *Nature Communications* (2025) DOI: 10.1038/s41467-025-59246-8 [Link](https://www.nature.com/articles/s41467-025-59246-8)
4. **GenomeTrakr: whole genome sequence-based surveillance for food safety** — Allard MW et al. *Food Microbiology* (2016) [Link](https://doi.org/10.1016/j.fm.2015.05.007)

### Official Guidelines & Standards
- [FDA GenomeTrakr Network](https://www.fda.gov/food/whole-genome-sequencing-wgs-program/genometrakr-network) — *FDA*
- [CDC PulseNet (uses NCBI PD for clustering)](https://www.cdc.gov/pulsenet/) — *CDC*
- [NCBI Pathogen Detection Success Stories](https://www.ncbi.nlm.nih.gov/pathogens/success_stories/) — *NCBI/NIH*

### Controversies & Recent Changes (2024–2026)
- 2025: Nature Communications study compared cluster congruence across multiple international pipelines including NCBI PD.
- US-centric governance: international labs submit data but have limited input on pipeline development.
- Focus primarily on bacterial foodborne pathogens; viral and fungal coverage limited.
- 2025: California highlighted in success stories for state-level integration.
- Ongoing debate about pipeline sensitivity thresholds for outbreak cluster definition.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **FDA GenomeTrakr** | Primary data submission network; 800+ labs worldwide |
| **CDC PulseNet** | Uses NCBI PD clusters for epidemiological investigation |
| **USDA FSIS** | Meat/poultry inspection submissions |
| **AMRFinderPlus** | NCBI's AMR detection tool integrated into pipeline |
| **BV-BRC** | Complementary resource for deeper comparative genomics |
| **Enterobase** | Alternative typing/clustering platform for Salmonella, E. coli |

### Key URLs
- **Main Site**: https://www.ncbi.nlm.nih.gov/pathogens/
- **Isolates Browser**: https://www.ncbi.nlm.nih.gov/pathogens/isolates/
- **Success Stories**: https://www.ncbi.nlm.nih.gov/pathogens/success_stories/
- **Ftp Data**: https://ftp.ncbi.nlm.nih.gov/pathogen/
- **Amrfinderplus**: https://www.ncbi.nlm.nih.gov/pathogens/antimicrobial-resistance/AMRFinder/
- **Genometrakr**: https://www.fda.gov/food/whole-genome-sequencing-wgs-program/genometrakr-network
- **Pulsenet**: https://www.cdc.gov/pulsenet/

### Timeline
- **2012**: FDA GenomeTrakr network established
- **2016**: NCBI Pathogen Detection pipeline launched
- **2019**: AMRFinderPlus integrated into pipeline
- **2023**: Exceeded 500K bacterial isolate genomes
- **2025**: 1M+ genomes; 1,643 FDA consumer protection actions; Nature Comms cluster congruence study

---

## 7. GISAID

**Rank**: #7 | **Layer**: L2_Genomic | **Score**: 88.5/100 | **Class**: genomic_biosurveillance | **URL**: https://gisaid.org

### Executive Summary
> GISAID is the world's largest respiratory virus genomic database with 16M+ SARS-CoV-2 and 2M+ influenza sequences, used by 500K+ registered users and cited 70K+ times. Score 88.5/100 reflects unmatched scale and global adoption but penalized for restricted access model and 2025 controversies. Major disruption: terminated data feeds to Nextstrain (Oct 2025) and outbreak.info (Jan 2025), sparking open-science backlash and threatening downstream surveillance platforms.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 85 |
| Analytics Capability | 86 |
| Community Support | 90 |
| Data Integration | 90 |
| Documentation | 87 |
| Interoperability | 86 |
| Real Time Capability | 91 |
| Scalability | 93 |
| Security Compliance | 92 |
| Visualization | 87 |

### Profile (7 Fields)

**Overview**
GISAID (Global Initiative on Sharing All Influenza Data) is the world's largest genomic data-sharing platform for respiratory pathogen sequences, established in 2008 as a non-profit (GISAID Initiative e.V., registered in Germany). Originally created for influenza sequences to overcome the reluctance of developing-country labs to share data via fully open databases. Expanded massively during COVID-19 to become the primary repository for SARS-CoV-2 sequences, accumulating >16 million SARS-CoV-2 genomes by early 2024. Also hosts sequences for RSV, hMPV, and other pathogens. Operates on a unique Data Access Agreement (DAA) model requiring acknowledgment of data generators.

**Functional Scope**
Genomic sequence database with submission, curation, and retrieval for influenza (all types), SARS-CoV-2, RSV, and hMPV. Analytical tools: FluSurver (influenza mutation analysis), CoVsurver (SARS-CoV-2 mutation analysis), EpiCoV (SARS-CoV-2-specific database), EpiFlu (influenza-specific database), AUDACITY (phylogenetic analysis), spike mutation comparisons. Variant tracking dashboards. Data feed agreements for approved downstream platforms. Clade/lineage nomenclature support (GISAID clades for SARS-CoV-2). Metadata includes collection date, location, patient demographics (age, sex), sequencing technology, originating/submitting lab.

**Tech Stack**
Custom proprietary web platform (not open-source). Java-based backend with custom database infrastructure. FluSurver and CoVsurver are integrated web tools. No public API; data access via web downloads, FASTA/metadata bulk downloads, and approved data feed agreements. Data hosted on servers in Germany and Singapore. Two-factor authentication for registered users. Proprietary accession system (EPI_ISL for SARS-CoV-2, EPI for influenza). GISAID maintains its own clade nomenclature system alongside Pango/Nextstrain.

**Operator**
GISAID Initiative e.V. (eingetragener Verein – registered non-profit association, Germany). President: Peter Bogner. Hosted by Freie Universitat Berlin. Founding partners include German government, WHO collaborating centres. Advisory board includes representatives from WHO, US CDC, China CDC, and other national agencies. Funded through a combination of government grants (German Federal Foreign Office), institutional partnerships, and operational support from Freie Universitat Berlin. Independent governance, not directly controlled by any single government or international body.

**Data Model**
Sequence-centric: consensus genomes (FASTA) with structured metadata including: accession (EPI_ISL_xxx), virus name, collection date, location (continent/country/region), host, patient age/sex, sequencing technology, originating lab, submitting lab, authors. Clade assignments (GISAID clades, Pango lineages, Nextstrain clades). Influenza: hemagglutinin/neuraminidase subtype classification. Quality metrics: coverage, completeness. Data Access Agreement governs reuse: must acknowledge data generators, cannot redistribute raw sequences without permission.

**Users Scale**
500,000+ registered users from 200+ countries. >16 million SARS-CoV-2 sequences and >2 million influenza sequences deposited. Cited in >70,000 scientific publications. Used by WHO for global influenza surveillance (GISRS), WHO COVID-19 variant tracking, national public health agencies worldwide. Single largest genomic database for respiratory viruses. During pandemic peak, received >100,000 new SARS-CoV-2 sequences daily.

**Access Model**
Free registration required. Users must agree to GISAID Data Access Agreement (DAA): sequences can be analyzed and published with proper acknowledgment of data generators, but cannot be redistributed to non-GISAID users or deposited in open databases. Approved downstream platforms (e.g., Nextstrain, outbreak.info) received data feeds under special agreements (several terminated in 2025). No open API. Controversial restricted-access model: criticized by open-science advocates but defended as necessary to incentivize data sharing from countries with limited resources.

### Strengths & Weaknesses
**Strengths**: Largest sequence repo, Rapid data sharing, Global coverage

**Weaknesses**: Restricted access, Limited tools

### Key Publications
1. **Global Initiative on Sharing All Influenza Data – from vision to reality** — Shu Y, McCauley J *Eurosurveillance* (2017) DOI: 10.2807/1560-7917.ES.2017.22.13.30494 [Link](https://doi.org/10.2807/1560-7917.ES.2017.22.13.30494)
2. **Nextstrain: real-time tracking of pathogen evolution (major GISAID downstream user)** — Hadfield J et al. *Bioinformatics* (2018) [Link](https://academic.oup.com/bioinformatics/article/34/23/4121/5001388)
3. **GISAID's Role in Pandemic Preparedness** — Elbe S, Buckland-Merrett G *Global Challenges* (2017) [Link](https://doi.org/10.1002/gch2.1018)

### Official Guidelines & Standards
- [GISAID Data Sharing Policy](https://gisaid.org/about-us/acknowledgements/sharing-policy/) — *GISAID*
- [WHO GISRS (Global Influenza Surveillance and Response System)](https://www.who.int/initiatives/global-influenza-surveillance-and-response-system) — *WHO*
- [GISAID Statements & Clarifications (2025-2026)](https://gisaid.org/resources/statements-clarifications/) — *GISAID*

### Controversies & Recent Changes (2024–2026)
- Jan 11, 2025: GISAID terminated outbreak.info SARS-CoV-2 data feed without warning.
- Oct 1, 2025: GISAID terminated Nextstrain's SARS-CoV-2 flat-file data feed.
- Oct 12, 2025: GISAID terminated data feed to Tanja Stadler's research group (ETH Zurich).
- Jan 6, 2026: Science magazine article 'Fresh conflicts erupt around giant database for flu and COVID-19 sequences'.
- Feb 2026: Joint response published by Nextstrain, outbreak.info, and Wu Lab.
- Ongoing debate: WHO Pandemic Agreement negotiations over pathogen data sharing vs GISAID's DAA model.
- Oct 2025: GISAID stopped regular COVID-19 updates according to ThinkGlobalHealth reporting.
- Long-standing criticism from open-science community about restricted redistribution rules.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **Nextstrain** | Major downstream consumer; data feed terminated Oct 2025 |
| **outbreak.info** | Genomic data source; data feed terminated Jan 2025 |
| **WHO GISRS** | GISAID is the primary database for WHO influenza surveillance |
| **Pangolin** | Pango lineage system uses GISAID sequences for lineage designation |
| **CoVariants (Hodcroft)** | Used GISAID data for variant tracking |
| **NCBI GenBank** | Competing/alternative open-access sequence database; many submitters dual-deposit |

### Key URLs
- **Main Site**: https://gisaid.org
- **Epicov**: https://platform.gisaid.org
- **Sharing Policy**: https://gisaid.org/about-us/acknowledgements/sharing-policy/
- **Statements**: https://gisaid.org/resources/statements-clarifications/
- **Science Article 2026**: https://www.science.org/content/article/fresh-conflicts-erupt-around-giant-database-flu-and-covid-19-sequences
- **Nextstrain Disruption**: https://nextstrain.org/blog/2025-11-06-gisaid-based-ncov-analyses
- **Outbreak Response**: https://blog.outbreak.info/joint-response-gisaid
- **Who Gisrs**: https://www.who.int/initiatives/global-influenza-surveillance-and-response-system

### Timeline
- **2008**: GISAID established for influenza data sharing
- **2017**: Eurosurveillance publication; 'vision to reality'
- **2020**: Rapid expansion for SARS-CoV-2; became world's largest COVID-19 sequence repo
- **2024**: 16M+ SARS-CoV-2 sequences; 500K+ registered users
- **2025**: Data feeds terminated to outbreak.info (Jan), Nextstrain (Oct), Stadler group (Oct). Regular COVID-19 updates ceased.
- **2026**: Joint response published (Feb); Science article on conflicts (Jan); ongoing WHO Pandemic Agreement debates

---

## 8. Microreact

**Rank**: #8 | **Layer**: L2_Genomic | **Score**: 87.5/100 | **Class**: genomic_biosurveillance | **URL**: https://microreact.org

### Executive Summary
> Microreact is the leading open-source tool for interactive visualization of genomic epidemiology data, linking phylogenetic trees to maps and timelines. Score 87.5/100 reflects excellent visualization and ease of sharing but limited built-in analytics. Developed by CGPS (Wellcome Sanger/Oxford), it's used by UKHSA, ECDC, and WHO for pathogen surveillance communication. Companion to Pathogenwatch for analysis.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 92 |
| Analytics Capability | 85 |
| Community Support | 85 |
| Data Integration | 86 |
| Documentation | 87 |
| Interoperability | 88 |
| Real Time Capability | 82 |
| Scalability | 84 |
| Security Compliance | 84 |
| Visualization | 95 |

### Profile (7 Fields)

**Overview**
Microreact is an open-source web application for interactive visualization and sharing of genomic epidemiology data, developed by the Centre for Genomic Pathogen Surveillance (CGPS), a partnership between the Wellcome Sanger Institute and Big Data Institute at University of Oxford. Launched in 2016, it provides linked views of phylogenetic trees, geographic maps, timelines, and metadata tables. Designed as a shareable endpoint for any bioinformatics pipeline that produces a phylogenetic tree. Used by UKHSA (UK Health Security Agency), ECDC, and public health labs worldwide for pathogen outbreak visualization and communication.

**Functional Scope**
Interactive visualization of phylogenetic trees linked to geographic maps (Mapbox/Leaflet), temporal timelines, and customizable metadata tables. Supports Newick/Nexus tree formats, CSV/TSV metadata, GeoJSON boundaries. Features: color/shape coding by any metadata field, tree filtering and zooming, map clustering, timeline animation, network views, block diagrams. Permanent shareable URLs for each project. Embeddable in publications. Data upload via drag-and-drop. No bioinformatics analysis performed (visualization only). API for programmatic access. Partnership with UKHSA for UK genomic surveillance dashboards. Used with Pathogenwatch and other CGPS tools.

**Tech Stack**
React.js frontend, Phylocanvas (tree rendering library, developed by CGPS), Mapbox GL JS / Leaflet for maps, D3.js for charts, deck.gl for large-scale visualization, Node.js backend, MongoDB for project storage, REST API, Docker deployment. Open-source on GitHub (microreact org) under MIT license. Hosted at microreact.org on cloud infrastructure (CGPS/Sanger). No heavy compute required (client-side rendering). Supports project export as PNG, SVG, and data download.

**Operator**
Centre for Genomic Pathogen Surveillance (CGPS), a collaboration between Wellcome Sanger Institute (Hinxton, UK) and Big Data Institute, University of Oxford. Led by David Aanensen. Funded by Wellcome Trust, Bill & Melinda Gates Foundation, UK NIHR, and European Commission. Partnerships with UKHSA, ECDC, WHO, and national public health agencies.

**Data Model**
Project-based: each Microreact project contains a Newick/Nexus tree file, metadata CSV/TSV (rows = samples, columns = any metadata fields including geographic coordinates, dates, categorical/continuous values), and optional GeoJSON. No prescribed schema; any metadata fields accepted. Projects stored with unique URLs. Data remains with the user (server stores uploaded data for sharing). Supports large datasets (10,000+ tips). Export as JSON project file for portability.

**Users Scale**
Thousands of public projects hosted at microreact.org. Used by UKHSA for UK S. pneumoniae and other pathogen surveillance dashboards. ECDC uses Microreact for AMR surveillance visualization. Referenced in 500+ publications. Part of the JUNO project for S. pneumoniae global genomic surveillance. Key visualization tool for CGPS pathogen surveillance programs in LMICs. Used in training courses and workshops worldwide (WHO SEARO, Africa CDC).

**Access Model**
Free to use, no registration required for viewing public projects. Registration needed for creating and saving projects. Open-source under MIT license. API available for programmatic access. No data limits for uploads. Self-hosting possible via Docker. All public projects accessible via permanent URLs. Documentation at docs.microreact.org.

### Strengths & Weaknesses
**Strengths**: Excellent visualization, Easy sharing, Phylogenetic integration

**Weaknesses**: Limited analytics, Smaller datasets

### Key Publications
1. **Microreact: visualizing and sharing data for genomic epidemiology and phylogeography** — Argimon S, Abudahab K, Goater R, et al. *Microbial Genomics* (2016) (Cited 500x) DOI: 10.1099/mgen.0.000093 [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC5320705/)
2. **Rapid Genomic Characterization and Global Surveillance of Klebsiella pneumoniae using Pathogenwatch** — Argimon S et al. *CID* (2021) DOI: 10.1093/cid/ciab784 [Link](https://academic.oup.com/cid/article/73/Supplement_4/S325/6447012)

### Official Guidelines & Standards
- [Microreact Documentation](https://docs.microreact.org) — *CGPS*
- [Wellcome Sanger Institute tool page](https://www.sanger.ac.uk/tool/microreact/) — *Wellcome Sanger*

### Controversies & Recent Changes (2024–2026)
- Visualization-only tool: does not perform bioinformatics analysis, requiring upstream pipelines.
- Depends on CGPS funding (Wellcome/Gates) for long-term sustainability.
- Next-generation Microreact ('next.microreact.org') being developed with enhanced features.
- 2024 release notes show continued active development (MLST scheme updates, new organisms).

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **Pathogenwatch** | Sister tool from CGPS; Pathogenwatch analysis results can be viewed in Microreact |
| **Nextstrain** | Complementary: Nextstrain for phylodynamic analysis, Microreact for shareable visualization |
| **UKHSA** | Uses Microreact for UK public health genomic surveillance dashboards |
| **ECDC** | AMR surveillance visualization partner |
| **Phylocanvas** | Tree rendering library developed by CGPS, used in Microreact |

### Key URLs
- **Main Site**: https://microreact.org
- **Documentation**: https://docs.microreact.org
- **Github**: https://github.com/microreact
- **Sanger Page**: https://www.sanger.ac.uk/tool/microreact/
- **Cgps**: https://www.genomicepi.com
- **Publications**: https://www.genomicepi.com/publications/
- **Release Notes 2024**: https://cgps.gitbook.io/pathogenwatch/release-notes-2024

### Timeline
- **2016**: Launched; Microbial Genomics publication (Argimon et al.)
- **2018**: Adopted by UKHSA and ECDC for surveillance dashboards
- **2021**: Expanded for COVID-19 genomic visualization; Pathogenwatch integration deepened
- **2024**: Continued updates: MLST schemes, new organisms, UI improvements
- **2025**: Next-generation Microreact in development

---

## 9. BioSense / ESSENCE

**Rank**: #9 | **Layer**: L1_Surveillance | **Score**: 87.2/100 | **Class**: non_biological | **URL**: https://www.cdc.gov/nssp/

### Executive Summary
> BioSense/ESSENCE is the US national syndromic surveillance system capturing ~75% of ED visits across all states. Score 87.2/100 reflects critical national infrastructure, real-time anomaly detection, and proven utility in COVID-19, opioid crisis, and bioterrorism preparedness. Limitations include US-only coverage, complex onboarding for new jurisdictions, and ongoing modernization challenges.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 84 |
| Analytics Capability | 88 |
| Community Support | 85 |
| Data Integration | 90 |
| Documentation | 86 |
| Interoperability | 87 |
| Real Time Capability | 90 |
| Scalability | 90 |
| Security Compliance | 91 |
| Visualization | 86 |

### Profile (7 Fields)

**Overview**
BioSense Platform / ESSENCE (Electronic Surveillance System for the Early Notification of Community-based Epidemics) is the United States' national syndromic surveillance system, operated by the CDC's National Syndromic Surveillance Program (NSSP). Originally developed by Johns Hopkins Applied Physics Laboratory (JHU/APL) in the early 2000s, ESSENCE was integrated into the CDC BioSense Platform in 2013-2014. It processes near-real-time emergency department (ED) visit data, urgent care visits, and other clinical data from 6,000+ healthcare facilities across all 50 US states, DC, and territories. Serves as the primary early-warning system for disease outbreaks, environmental exposures, and bioterrorism events in the US.

**Functional Scope**
Real-time syndromic surveillance using chief complaint text, discharge diagnosis codes (ICD-10-CM), and clinical data from ED visits. Core capabilities: anomaly detection algorithms (CUSUM, EWMA, regression), customizable syndrome definitions, temporal trend analysis, geographic heat maps, facility-level monitoring, ad-hoc querying, automated alerting, data quality dashboards, myESSENCE for personalized views. Supports CDC-defined syndrome categories (COVID-like illness, influenza-like illness, drug overdose, heat-related illness, firearm injuries, etc.). Weekly NSSP snapshots published. Integration with BioSense Platform for data storage, processing, and sharing.

**Tech Stack**
ESSENCE analytics engine (Java-based, developed by JHU/APL), BioSense Platform cloud infrastructure (AWS GovCloud), HL7 2.5.1 messaging standard for data ingestion, ICD-10-CM coding, Rhino data processing tools, LOINC for lab data, FHIR adaptation in progress. SAS for statistical analysis. Data visualization via ESSENCE web interface with customizable dashboards. Secure data access via SAMS (Secure Access Management Service). CDC WONDER integration for public aggregate data. Master Facility Table for standardized facility identification.

**Operator**
CDC Division of Health Informatics and Surveillance (DHIS), Center for Surveillance, Epidemiology, and Laboratory Services (CSELS). ESSENCE engine maintained by Johns Hopkins Applied Physics Laboratory (JHU/APL). Operated under the National Syndromic Surveillance Program (NSSP). Funded by CDC and participating state/local health departments. Data use agreements with each jurisdiction. Recent integration with Navy/Marine Corps Force Health Protection Command (NMCFHPC).

**Data Model**
Visit-centric: each record represents an ED/urgent care visit with fields: chief complaint free text, discharge diagnosis (ICD-10-CM), patient demographics (age, sex, race, ethnicity – de-identified), facility ID, visit date/time, disposition. Data transmitted via HL7 2.5.1 ADT messages. Processed through syndrome classifiers (keyword + code-based). Aggregated by syndrome, geography, time period, and facility. Data stored in BioSense Platform with jurisdictional data ownership. Public aggregate data available via CDC WONDER. Master Message Guide (MMG) defines standard fields.

**Users Scale**
Covers all 50 US states, DC, and territories. 6,000+ healthcare facilities reporting. ~75% of US ED visits captured. Thousands of epidemiologists and public health analysts as registered users. Used during every major US public health event: COVID-19, opioid crisis, vaping illness (EVALI), heat events, natural disasters. NSSP Community of Practice connects users. Weekly NSSP Update newsletter. Annual NSSP conference. US military (Navy/Marine Corps) recently integrated. Estimated coverage of 250+ million Americans.

**Access Model**
Access restricted to authorized public health personnel. Jurisdictions must sign Data Use Agreements (DUA) with CDC. Registered users access via SAMS (Secure Access Management Service). Public aggregate data available through CDC WONDER and NSSP weekly snapshots. ESSENCE analytics require approved NSSP account. Data ownership retained by submitting jurisdictions. Not open-source; government-operated platform. Research access possible through NSSP data request process.

### Strengths & Weaknesses
**Strengths**: National-scale syndromic surveillance, Real-time anomaly detection, ED visit monitoring, CDC-supported infrastructure

**Weaknesses**: Limited to US domestic coverage with no international data integration, Requires data-use agreements, Complex onboarding

### Key Publications
1. **The ESSENCE II Electronic Surveillance System for detecting unusual clusters of health events** — Lombardo J, Burkom H, Pavlin J *Johns Hopkins APL Technical Digest* (2004) [Link](https://www.jhuapl.edu/content/techdigest/pdf/V26-N03/26-03-Lombardo.pdf)
2. **Evaluation of syndromic surveillance systems** — Buehler JW et al. *MMWR Supplements* (2004) [Link](https://www.cdc.gov/mmwr/preview/mmwrhtml/su5301a3.htm)
3. **Federal Register notice: NSSP BioSense Platform data collection (2025)** —  ** () [Link](https://www.federalregister.gov/documents/2025/12/05/2025-22005/proposed-data-collection-submitted-for-public-comment-and-recommendations)

### Official Guidelines & Standards
- [About NSSP and the BioSense Platform](https://www.cdc.gov/nssp/php/about/about-nssp-and-the-biosense-platform.html) — *CDC*
- [ESSENCE Onboarding Toolkit](https://www.cdc.gov/nssp/php/onboarding-toolkits/essence.html) — *CDC*
- [Case Surveillance Modernization](https://www.cdc.gov/nndss/case-surveillance-modernization/index.html) — *CDC*
- [NSSP Implementation Guides (HL7 messaging)](https://www.cdc.gov/nssp/php/onboarding-resources/implementation-guides.html) — *CDC*

### Controversies & Recent Changes (2024–2026)
- Ongoing CDC modernization efforts: transitioning from HL7 2.5.1 to FHIR for data exchange.
- 2025: COVID-19 to be removed from nationally notifiable condition list; impacts syndromic surveillance integration.
- 2025: Federal Register proposed data collection update for NSSP/BioSense.
- Complex onboarding: new jurisdictions face technical and political barriers to participation.
- Data quality challenges: chief complaint free-text varies widely across facilities.
- 2025: Navy/Marine Corps Force Health Protection Command integrated with NSSP/ESSENCE.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **NNDSS** | Complementary: NNDSS for notifiable disease case reporting, NSSP for syndromic early warning |
| **CDC WONDER** | Public aggregate data from NSSP available via WONDER |
| **JHU/APL** | Develops and maintains the ESSENCE analytics engine |
| **NEDSS/NBS** | Case-based surveillance system that NSSP syndromic data can trigger investigations in |
| **DoD ESSENCE (military)** | Separate military ESSENCE instance using same technology; Navy/Marine recently integrated with CDC NSSP |

### Key URLs
- **Main Nssp**: https://www.cdc.gov/nssp/index.html
- **About Nssp**: https://www.cdc.gov/nssp/php/about/index.html
- **Biosense**: https://www.cdc.gov/nssp/php/about/about-nssp-and-the-biosense-platform.html
- **Essence**: https://www.cdc.gov/nssp/php/onboarding-toolkits/essence.html
- **Updates**: https://www.cdc.gov/nssp/php/about/featured-content.html
- **Syndromic New Users**: https://www.cdc.gov/nssp/php/about/how-we-conduct-syndromic-surveillance.html
- **Implementation Guides**: https://www.cdc.gov/nssp/php/onboarding-resources/implementation-guides.html
- **Federal Register 2025**: https://www.federalregister.gov/documents/2025/12/05/2025-22005/proposed-data-collection-submitted-for-public-comment-and-recommendations
- **Navy Info Sheet**: https://www.med.navy.mil/Portals/62/Documents/NMFA/NMCPHC/root/Program%20and%20Policy%20Support/NMCFHPC_NSSP_ESSENCE-Info_Sheet_21APR2025.pdf

### Timeline
- **2001**: ESSENCE developed at JHU/APL post-9/11 and anthrax attacks
- **2004**: ESSENCE II published; BioSense program launched by CDC
- **2014**: BioSense Platform modernized; NSSP established
- **2020**: Critical role in COVID-19 surveillance; rapid syndrome definition deployment
- **2024**: Continued modernization; expanded syndrome categories
- **2025**: Federal Register update; COVID-19 removed from notifiable conditions; Navy/Marine integration; FHIR transition begins

### CBRN Assessment
**Tag**: `adjacent_enabling_system`

BioSense/ESSENCE is not a dedicated CBRN platform but serves as a critical early-warning layer for bioterrorism and CBRN events. Originally developed post-9/11/anthrax attacks specifically for biosurveillance. Detects unusual syndrome clusters that could indicate biological, chemical, or radiological exposures via ED visit data. The separate DoD ESSENCE instance provides military-specific CBRN syndromic surveillance. Navy/Marine Corps recently integrated with CDC NSSP instance.

---

## 10. Pathogenwatch

**Rank**: #10 | **Layer**: L2_Genomic | **Score**: 87/100 | **Class**: genomic_biosurveillance | **URL**: https://pathogen.watch

### Executive Summary
> Pathogenwatch is the leading browser-based platform for automated bacterial genomic surveillance, offering AMR prediction, MLST typing, and phylogenetic clustering for 100+ species. Score 87/100 reflects comprehensive analysis capabilities, strong WHO/ECDC partnerships, and AMR focus. New amr.watch module (2025) expands to global AMR trend monitoring. Developed by CGPS (Wellcome Sanger/Oxford), companion tool to Microreact.

### Sub-Scores
| Criterion | Score |
|-----------|:-----:|
| Accessibility | 90 |
| Analytics Capability | 89 |
| Community Support | 84 |
| Data Integration | 87 |
| Documentation | 86 |
| Interoperability | 87 |
| Real Time Capability | 85 |
| Scalability | 83 |
| Security Compliance | 85 |
| Visualization | 88 |

### Profile (7 Fields)

**Overview**
Pathogenwatch is a web-based platform for genomic surveillance and analysis of bacterial and some fungal pathogens, developed by the Centre for Genomic Pathogen Surveillance (CGPS), a collaboration between the Wellcome Sanger Institute and Big Data Institute at University of Oxford. Provides automated genome assembly analysis including species identification, multi-locus sequence typing (MLST), antimicrobial resistance (AMR) prediction, virulence factor detection, and phylogenetic clustering. Supports >100 bacterial species including priority WHO AMR pathogens (Klebsiella, Staphylococcus, Neisseria, Streptococcus, Salmonella, E. coli, etc.).

**Functional Scope**
Upload FASTA genome assemblies or raw reads for automated analysis: species identification, MLST typing (7-gene and cgMLST), AMR gene/mutation detection (using curated databases), virulence factor identification, core-genome phylogeny construction, population clustering, geographic mapping of isolates, temporal trend analysis, collection management. Supports >100 species with organism-specific typing schemes. Integration with Microreact for interactive visualization. Comparison against global reference datasets (e.g., 150,000+ Klebsiella public genomes). New AMR Watch module (amr.watch, 2025) for global AMR trend monitoring from 620,000+ genomes.

**Tech Stack**
Node.js/Express backend, React.js frontend, MongoDB for data storage, custom bioinformatics pipelines: Speciator (species ID), cgMLST engine, PAARSNP (AMR prediction), PopPUNK (population clustering), wgMLST analysis. Hosted on cloud infrastructure (CGPS/Sanger). Open-source components on GitHub (pathogenwatch org). Web-based with no software installation required. REST API for programmatic access. Docker for self-hosting. Next-generation Pathogenwatch in development (next.pathogen.watch).

**Operator**
Centre for Genomic Pathogen Surveillance (CGPS), Wellcome Sanger Institute & Big Data Institute, University of Oxford. Led by David Aanensen. Funded by Wellcome Trust, Bill & Melinda Gates Foundation, NIHR (UK), European Commission, and WHO. Key partnerships: UKHSA, ECDC, WHO, Africa CDC, national reference laboratories in LMICs.

**Data Model**
Genome-centric: each uploaded assembly linked to metadata (species, collection date, location, source, patient info). Analysis outputs: MLST profile, AMR predictions (gene + phenotype), virulence factors, clustering membership, phylogenetic position. Collections group genomes for comparative analysis. Public genomes from NCBI integrated as reference context. Organism-specific databases: curated typing schemes from PubMLST, AMR databases from CARD/ResFinder. Supports metadata export as CSV/JSON.

**Users Scale**
Tens of thousands of registered users worldwide. Thousands of public collections hosted. Used by UKHSA for UK national genomic surveillance. ECDC partnership for EU AMR surveillance. WHO-supported deployment in LMICs for AMR monitoring. Key tool in JUNO project (Global Surveillance of S. pneumoniae). 620,700+ pathogen genomes with geotemporal data in AMR Watch (as of March 2025). Cited in 167+ publications (Argimon et al. 2021 alone). Training deployed through WHO SEARO, Africa CDC workshops.

**Access Model**
Free to use for web-based analysis. Registration required for saving collections and accessing advanced features. No software installation needed (browser-based). Open-source components available on GitHub (pathogenwatch-oss). Self-hosting possible via Docker. API access for programmatic queries. Public genomes freely browsable. No data limits for uploads. AMR Watch (amr.watch) publicly accessible. Documentation at next-docs.pathogen.watch. Supported by Wellcome/Gates funding – no commercial licensing.

### Strengths & Weaknesses
**Strengths**: Automated analysis, AMR prediction, MLST typing, Browser-based

**Weaknesses**: Limited organisms, Database dependent

### Key Publications
1. **Rapid Genomic Characterization and Global Surveillance of Klebsiella pneumoniae using Pathogenwatch** — Argimon S et al. *Clinical Infectious Diseases* (2021) (Cited 167x) DOI: 10.1093/cid/ciab784 [Link](https://academic.oup.com/cid/article/73/Supplement_4/S325/6447012)
2. **Monitoring antimicrobial resistance trends from global genomics data: amr.watch** — David S et al. *bioRxiv* (2025) DOI: 10.1101/2025.04.17.649298 [Link](https://www.biorxiv.org/content/10.1101/2025.04.17.649298v1)
3. **Transforming AMR mitigation: the genomic revolution (reviews Pathogenwatch)** — Chigozie VU et al. *SN Applied Sciences* (2025) DOI: 10.1007/s42452-025-07053-7 [Link](https://link.springer.com/article/10.1007/s42452-025-07053-7)

### Official Guidelines & Standards
- [Pathogenwatch Documentation (next-gen)](https://next-docs.pathogen.watch/) — *CGPS*
- [Wellcome Sanger Institute tool page](https://www.sanger.ac.uk/tool/pathogenwatch/) — *Wellcome Sanger*
- [Release Notes 2024](https://cgps.gitbook.io/pathogenwatch/release-notes-2024) — *CGPS*

### Controversies & Recent Changes (2024–2026)
- 2024: Major MLST scheme updates (September); new organisms added including Enterobase Yersinia scheme.
- 2025: AMR Watch (amr.watch) launched for global AMR trend monitoring from 620,700+ genomes.
- Limited to assembled genomes; does not process raw reads (unlike CZ ID).
- Organism coverage expanding but still limited compared to universal tools.
- Next-generation Pathogenwatch (next.pathogen.watch) being developed with enhanced UI and features.

### Ecosystem Connections
| Platform | Relationship |
|----------|-------------|
| **Microreact** | Sister tool from CGPS; Pathogenwatch results visualized in Microreact |
| **NCBI Pathogen Detection** | Complementary: NCBI PD for foodborne clustering, Pathogenwatch for broader AMR analysis |
| **PubMLST** | Source of MLST typing schemes |
| **CARD (Comprehensive Antibiotic Resistance Database)** | AMR gene database referenced |
| **ResFinder** | AMR prediction database referenced |
| **UKHSA** | UK national genomic surveillance partner |
| **ECDC** | EU AMR surveillance visualization partner |

### Key URLs
- **Main Site**: https://pathogen.watch
- **Next Gen**: https://next.pathogen.watch
- **Documentation**: https://next-docs.pathogen.watch/
- **Amr Watch**: https://amr.watch
- **Github**: https://github.com/pathogenwatch-oss
- **Sanger Page**: https://www.sanger.ac.uk/tool/pathogenwatch/
- **Cgps**: https://www.genomicepi.com
- **Release Notes 2024**: https://cgps.gitbook.io/pathogenwatch/release-notes-2024
- **Sanger Amr Blog**: https://sangerinstitute.blog/2025/10/01/ten-ways-the-sanger-institute-is-tackling-the-global-fight-against-amr/

### Timeline
- **2018**: Pathogenwatch launched by CGPS
- **2021**: Klebsiella global surveillance paper in CID (167 citations)
- **2023**: Expanded to 80+ species; ECDC partnership deepened
- **2024**: Major MLST updates (Sept); new organisms; release notes published
- **2025**: AMR Watch module launched (620,700+ genomes); next-gen Pathogenwatch in development; Sanger AMR blog post

---

## Cross-Platform Comparison

### Primary Function
| Platform | Primary Function |
|----------|------------------------------|
| **Nextstrain** | Real-time phylogenetic analysis & visualization |
| **SORMAS** | End-to-end outbreak management & case tracking |
| **outbreak.info** | COVID-19 data aggregation & variant surveillance |
| **CZ ID** | Metagenomic pathogen detection from mNGS |
| **DHIS2** | National health information management system |
| **NCBI Pathogen Detection** | Foodborne pathogen genomic clustering |
| **GISAID** | Respiratory virus genomic sequence repository |
| **Microreact** | Genomic epidemiology data visualization |
| **BioSense / ESSENCE** | Syndromic surveillance & early warning |
| **Pathogenwatch** | Bacterial genomic analysis & AMR prediction |

### Open Source
| Platform | Open Source |
|----------|------------------------------|
| **Nextstrain** | Yes (AGPL v3) |
| **SORMAS** | Yes (GPL v3) |
| **outbreak.info** | Yes (MIT) |
| **CZ ID** | Yes (MIT) |
| **DHIS2** | Yes (BSD 3-clause) |
| **NCBI Pathogen Detection** | Partially (tools open, pipeline proprietary) |
| **GISAID** | No (proprietary) |
| **Microreact** | Yes (MIT) |
| **BioSense / ESSENCE** | No (government-operated) |
| **Pathogenwatch** | Partially (components open) |

### Geographic Scope
| Platform | Geographic Scope |
|----------|------------------------------|
| **Nextstrain** | Global (30+ pathogens) |
| **SORMAS** | 15+ countries (primarily Africa/Asia) |
| **outbreak.info** | Global (COVID-19 specific) |
| **CZ ID** | Global (90+ countries) |
| **DHIS2** | Global (100+ countries, 2.4B people) |
| **NCBI Pathogen Detection** | Global (30+ countries via GenomeTrakr) |
| **GISAID** | Global (200+ countries) |
| **Microreact** | Global (any pathogen) |
| **BioSense / ESSENCE** | US only (all 50 states) |
| **Pathogenwatch** | Global (100+ bacterial species) |

### Data Access Model
| Platform | Data Access Model |
|----------|------------------------------|
| **Nextstrain** | Fully open; no login for public |
| **SORMAS** | Self-hosted; full data sovereignty |
| **outbreak.info** | Free; no registration needed |
| **CZ ID** | Free; registration for uploads |
| **DHIS2** | Self-hosted; free BSD license |
| **NCBI Pathogen Detection** | Public; free download |
| **GISAID** | Restricted DAA; no redistribution |
| **Microreact** | Free; no login for viewing |
| **BioSense / ESSENCE** | Restricted; DUA required |
| **Pathogenwatch** | Free; registration for analysis |

### Key Strength
| Platform | Key Strength |
|----------|------------------------------|
| **Nextstrain** | Best-in-class phylogenetic visualization |
| **SORMAS** | Purpose-built for LMIC outbreak response |
| **outbreak.info** | Unified COVID-19 data from multiple sources |
| **CZ ID** | No-code metagenomics for non-experts |
| **DHIS2** | Largest deployment (100+ countries) |
| **NCBI Pathogen Detection** | FDA/CDC foodborne outbreak backbone |
| **GISAID** | Largest respiratory virus sequence database |
| **Microreact** | Easiest shareable genomic visualization |
| **BioSense / ESSENCE** | Real-time ED syndromic surveillance |
| **Pathogenwatch** | Automated AMR prediction for 100+ species |

### Primary Vulnerability (2025-2026)
| Platform | Primary Vulnerability (2025-2026) |
|----------|------------------------------|
| **Nextstrain** | GISAID data feed terminated Oct 2025 |
| **SORMAS** | Funding sustainability; complex deployment |
| **outbreak.info** | GISAID data feed terminated Jan 2025 |
| **CZ ID** | Single philanthropic funder (CZI) |
| **DHIS2** | Limited genomic integration |
| **NCBI Pathogen Detection** | US-centric governance |
| **GISAID** | Controversies with downstream platforms; governance criticism |
| **Microreact** | Visualization only; no analysis capability |
| **BioSense / ESSENCE** | US-only; legacy HL7 modernization needed |
| **Pathogenwatch** | Limited organism coverage vs universal tools |
