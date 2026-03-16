# BioR Benchmark — Complete Methodology, Criteria & Data Architecture

## Master Reference Document for Manual Enrichment

**Version:** v3.0.0 | **Date:** 2026-03-16 | **Baseline:** 169 Platforms | 1,690+ Data Points

---

## PART 1: WHAT IS BioR?

### Identity

| Field | Value |
|-------|-------|
| **Name** | BioR — Biosurveillance Intelligence for Operational Readiness |
| **Purpose** | Strategic intelligence product for global biodefense posture assessment |
| **Scope** | 169 digital platforms across pathogen surveillance, genomics, defense, hardware & policy |
| **Audience** | Senior military leadership, public health directors, intel analysts, policy makers |
| **Time Horizon** | 3–10 year forward-looking strategic assessment |
| **Classification** | Open but authoritative (comparable to SIPRI, GHS Index) |

### Three Fundamental Questions

1. **What exists?** → Global Threat Landscape Map
2. **What is missing?** → Capability Gap Analysis (15 domains × 8 regions)
3. **What should connect?** → Interoperability Assessment (10 types)

---

## PART 2: THE 5-LAYER ARCHITECTURE

Every platform is assigned to exactly one of 5 layers. Layers represent the functional domain of the platform in the global pathogen surveillance ecosystem.

### Layer Definitions

| Layer | Name | Description | Count |
|-------|------|-------------|-------|
| **L1** | **Surveillance** | Epidemiological surveillance, disease reporting, outbreak management, syndromic monitoring, event-based intelligence, wastewater monitoring, environmental sensing | **57** |
| **L2** | **Genomic** | Genomic sequencing, bioinformatics pipelines, phylogenetics, AMR detection, pathogen databases, metagenomic analysis, variant tracking, data sharing repositories | **59** |
| **L3** | **Defense** | Military biodefense programs, CBRN defense, MCM development, threat reduction, bioforensics, defense research institutes (allied + adversary) | **39** |
| **L4** | **Hardware** | Physical detection devices, field-deployable sensors, rapid diagnostics, aerosol collectors, point-of-need instruments, CBRN detection systems | **9** |
| **L5** | **Policy** | Governance frameworks, health security indices, preparedness assessments, regulatory programs, pandemic funding trackers | **5** |

### Layer Assignment Rules

- **L1** = Platform primarily collects, aggregates, or reports epidemiological/clinical/environmental data
- **L2** = Platform primarily processes, analyzes, or shares genomic/sequence data
- **L3** = Platform is a defense/military program, biodefense initiative, or threat reduction effort
- **L4** = Platform is a physical hardware device or sensor system
- **L5** = Platform is a governance, policy, or assessment framework

---

## PART 3: PLATFORM CLASSIFICATION TAXONOMY

Every platform is tagged with three classification axes:

### Axis 1: Biosurveillance Class (5 classes)

| Class | Definition | Count |
|-------|-----------|-------|
| **genomic_biosurveillance** | Platforms that process, analyze, or share pathogen genome/sequence data | **61** |
| **non_biological** | Platforms that don't directly process biological samples (epi reporting, policy, procurement, military programs) | **68** |
| **environmental_biosurveillance** | Platforms that monitor environmental sources (wastewater, air, animal reservoirs, One Health) | **19** |
| **clinical_biosurveillance** | Platforms that process clinical patient/hospital data for surveillance | **13** |
| **laboratory_biosurveillance** | Platforms centered on laboratory networks, lab information systems, or lab-based detection | **8** |

### Axis 2: Surveillance Input Types (12 types, multi-value)

Each platform can have 1 or more input types. This captures what kind of data flows into the platform.

| Input Type | Definition | Platforms |
|------------|-----------|-----------|
| **genomic** | DNA/RNA sequence data, genomes, variants, mutations | 61 |
| **epidemiological** | Case counts, outbreak reports, disease notifications, aggregate epi data | 36 |
| **environmental** | Wastewater, air sampling, animal/zoonotic, One Health environmental data | 22 |
| **signals_intelligence** | Media scanning, social media, news feeds, event-based open-source intel | 16 |
| **multi_source** | Integrates 3+ fundamentally different data types | 15 |
| **modeling** | Simulation, forecasting, mathematical/statistical models | 13 |
| **geospatial** | Geographic, mapping, spatial epidemiology, GIS data | 11 |
| **clinical** | Individual patient records, hospital data, electronic health records | 17 |
| **syndromic** | Chief complaint, ED visit data, pre-diagnostic signals | 10 |
| **laboratory** | Lab test results, sample tracking, lab network data | 10 |
| **hardware_sensor** | Physical sensor output, aerosol detection, field instrument data | 6 |
| **policy_index** | Assessment scores, compliance data, governance indicators | 5 |

### Axis 3: Primary Input Type (single value)

The dominant data type the platform processes. Same 12 types as above but each platform gets exactly one.

| Primary Input | Count |
|---------------|-------|
| genomic | 61 |
| epidemiological | 26 |
| multi_source | 15 |
| environmental | 12 |
| clinical | 11 |
| signals_intelligence | 11 |
| syndromic | 8 |
| laboratory | 8 |
| geospatial | 6 |
| modeling | 4 |
| policy_index | 4 |
| hardware_sensor | 3 |

### Axis 4: Military/Biodefense Flag (boolean)

Platforms with direct military application or dedicated biodefense function are flagged. Currently **10 platforms** carry this flag (predominantly L4_Hardware systems like BioFire, JBPDS, FLIR IBAC 2, etc.).

---

## PART 4: THE 14-DIMENSION SCORING FRAMEWORK

### Core 10 Dimensions (from PSEF v3.0.0 — currently scored)

Every platform is scored 0–100 on each dimension. The composite score is a weighted average.

| # | Dimension | Code | Weight | Definition | Global Avg |
|---|-----------|------|--------|-----------|------------|
| 1 | **Data Integration** | DI | 12% | Ability to ingest, normalize, and integrate diverse data sources. Multi-format support, ETL capability, cross-system data flow | 79.3 |
| 2 | **Analytics Capability** | AC | 12% | Depth and breadth of analytical functions: statistical analysis, ML/AI, pattern detection, outbreak detection algorithms, phylogenetics | 79.3 |
| 3 | **Security & Compliance** | SE | 10% | Data protection, encryption, access control, regulatory compliance (GDPR, HIPAA, ISO 27799), audit trails, vulnerability management | 82.5 |
| 4 | **Visualization** | VZ | 10% | Quality of visual outputs: dashboards, maps, charts, phylogenetic trees, interactive exploration, export capability | 76.6 |
| 5 | **Accessibility** | AX | 10% | Ease of access and use: deployment simplicity, user interface quality, multilingual support, mobile access, training requirements | 73.9 |
| 6 | **Scalability** | SC | 10% | Ability to handle growing data volumes, users, and geographic scope. Cloud elasticity, distributed architecture, performance under load | 79.2 |
| 7 | **Interoperability** | IO | 8% | Standards compliance (HL7 FHIR, LOINC, SNOMED), API availability, data exchange capability, integration with other ecosystem platforms | 77.3 |
| 8 | **Real-Time Capability** | RT | 8% | Speed of data ingestion and output: real-time streaming, near-real-time alerts, latency, update frequency | 77.7 |
| 9 | **Documentation** | DC | 5% | Quality of user guides, API docs, technical documentation, training materials, onboarding guides, code comments | 77.9 |
| 10 | **Community Support** | CS | 5% | Active user community, GitHub activity, forums, mailing lists, conference presence, institutional backing, citation count | 75.0 |

**Total weight of Core 10: 90%**

### 4 New Strategic Dimensions (BioR additions — planned)

| # | Dimension | Code | Weight | Definition |
|---|-----------|------|--------|-----------|
| 11 | **Technology Maturity (TRL)** | TM | 3% | Technology Readiness Level 1-9 scale adapted for biodefense |
| 12 | **Crisis Surge Capacity** | SG | 3% | Ability to scale 10-100x during pandemic/crisis. Staff surge, infrastructure elasticity, rapid deployment |
| 13 | **Allied Interoperability Score** | AI | 2% | Specific ability to interoperate within Five Eyes, NATO, WHO, or other allied frameworks |
| 14 | **Dual-Use Risk** | DR | 2% | Risk that platform technology could be misused for offensive biological purposes |

**Total weight of all 14: 100%**

### Score Interpretation

| Range | Label | Count |
|-------|-------|-------|
| 90–100 | **Excellent** — World-class, reference standard | 3 |
| 80–89 | **Good** — Production-grade, widely deployed | 63 |
| 70–79 | **Adequate** — Functional with notable gaps | 86 |
| 60–69 | **Developing** — Early stage or significant limitations | 16 |
| < 60 | **Minimal** — Assessed but very limited (adversary/opaque states) | 1 |

### Composite Score Calculation

```
Composite = (DI × 0.12) + (AC × 0.12) + (SE × 0.10) + (VZ × 0.10) + (AX × 0.10) 
          + (SC × 0.10) + (IO × 0.08) + (RT × 0.08) + (DC × 0.05) + (CS × 0.05)
```

The composite ranges from 48.5 (North Korea Bio Program) to 95.0 (Nextstrain).

---

## PART 5: COMPLETE PLATFORM DATA SCHEMA

Every platform record contains exactly these fields:

### Core Identification Fields

| Field | Key | Type | Description |
|-------|-----|------|-------------|
| Rank | `r` | integer | Global rank 1–169 by composite score |
| Name | `n` | string | Platform name |
| URL | `u` | string | Primary URL |
| Composite Score | `s` | float | Weighted average of 10 dimensions (0–100) |
| Category | `c` | string | Functional category (e.g., "Phylogenetic Analysis & Visualization") |
| Description | `d` | string | One-line description |
| Layer | `l` | string | L1_Surveillance / L2_Genomic / L3_Defense / L4_Hardware / L5_Policy |
| Biosurveillance Class | `biosurveillance_class` | string | One of 5 classes |
| Primary Input Type | `primary_input_type` | string | One of 12 types |
| Surveillance Input Types | `surveillance_input_types` | array[string] | One or more of 12 types |
| Military/Biodefense | `military_biodefense` | boolean | True if military application |

### Sub-Scores (10 dimensions)

| Field | Key Path | Type | Range |
|-------|----------|------|-------|
| Data Integration | `sc.data_integration` | integer | 0–100 |
| Analytics Capability | `sc.analytics_capability` | integer | 0–100 |
| Visualization | `sc.visualization` | integer | 0–100 |
| Accessibility | `sc.accessibility` | integer | 0–100 |
| Scalability | `sc.scalability` | integer | 0–100 |
| Documentation | `sc.documentation` | integer | 0–100 |
| Community Support | `sc.community_support` | integer | 0–100 |
| Security & Compliance | `sc.security_compliance` | integer | 0–100 |
| Interoperability | `sc.interoperability` | integer | 0–100 |
| Real-Time Capability | `sc.real_time_capability` | integer | 0–100 |

### Qualitative Assessment

| Field | Key | Type | Description |
|-------|-----|------|-------------|
| Strengths | `st` | array[string] | 3–5 key strengths |
| Weaknesses | `wk` | array[string] | 2–3 key weaknesses |

### Enriched Profile (7 fields)

| Field | Key Path | Target Length | Description |
|-------|----------|---------------|-------------|
| Overview | `profile.overview` | 200–500 chars | What it is, who created it, when, mission |
| Functional Scope | `profile.functional_scope` | 200–500 chars | What it does, capabilities, pathogens/diseases |
| Tech Stack | `profile.tech_stack` | 200–500 chars | Technologies, languages, frameworks, standards |
| Operator | `profile.operator` | 150–400 chars | Organizations, country, funding |
| Data Model | `profile.data_model` | 150–400 chars | Data structure, formats, standards, sizes |
| Users & Scale | `profile.users_scale` | 150–400 chars | Users, countries, deployment scale, citations |
| Access Model | `profile.access_model` | 150–400 chars | Free/paid, open-source, license, restrictions |

---

## PART 6: GEOGRAPHIC & GEOPOLITICAL FRAMEWORK

### NATO-Style 5-Tier Country Classification

| Tier | Label | Description | Examples |
|------|-------|-------------|----------|
| **Tier 1** | Full Spectrum | Advanced multi-domain biodefense, offensive awareness, global reach | US, UK, Israel |
| **Tier 2** | Significant | Strong capabilities in most domains, some gaps | France, Germany, Japan, South Korea, Australia, Canada |
| **Tier 3** | Emerging | Growing investment, partial capabilities, regional focus | Saudi Arabia, India, Brazil, South Africa |
| **Tier 4** | Minimal | Basic public health surveillance, limited biodefense-specific capability | Most African nations, Pacific Islands, Central Asia |
| **Tier 5** | Unknown / Denied | Opaque, classified, or denied access to assessment | North Korea, Iran (partially), Myanmar |

### 8 Core Geographic Regions

| # | Region | Key Entities | NATO Tier |
|---|--------|-------------|-----------|
| 1 | United States | DARPA, DoD, DHS, CDC, BARDA | Tier 1 |
| 2 | Five Eyes | US, UK, Canada, Australia, NZ | Tier 1 |
| 3 | NATO / EU Europe | France, Germany, EU HERA, NATO COE | Tier 1–2 |
| 4 | Israel | IIBR, IDF Medical Corps | Tier 1 |
| 5 | East Asia Allies | Japan NIID/JSDF, Korea KIDA/K-CDC | Tier 2 |
| 6 | Russia + China (adversary) | VECTOR, 48th CBRN, AMMS, CISDCP | Adversary |
| 7 | Africa (Pan-continental) | Africa CDC, AGARI, RESAOLAB | Tier 3–4 |
| 8 | Middle East / Gulf | Saudi Arabia, UAE, Qatar | Tier 2–3 |

### 6 Alliance Frameworks

| # | Framework | Members | Focus |
|---|-----------|---------|-------|
| 1 | Five Eyes (FVEY) | US, UK, CA, AU, NZ | Intel sharing, bio cooperation |
| 2 | NATO CBRN | 31 states | JCBRN COE, STANAGs, collective defense |
| 3 | EU / HERA | 27 states | Civilian biodefense, MCM procurement |
| 4 | Quad | US, JP, IN, AU | Indo-Pacific health security |
| 5 | WHO / IHR | 196 states | Global baseline, JEE, GHSA |
| 6 | Africa CDC / AU | 55 states | Continental genomic surveillance |

---

## PART 7: CAPABILITY GAP ANALYSIS FRAMEWORK (15 Domains)

Every domain is assessed across all 8 core regions. This is the "What is missing?" analysis.

| # | Domain | Key Question |
|---|--------|-------------|
| 1 | Early Warning & Event Detection | Can we detect a novel outbreak within 24 hours? |
| 2 | Genomic Sequencing & Pathogen ID | Can we sequence an unknown pathogen in-field? |
| 3 | Real-Time Data Sharing Across Borders | Can allies share surveillance data during a crisis? |
| 4 | MCM Development Speed | Pathogen ID to vaccine/therapeutic in 60–100 days? |
| 5 | Biological Agent Detection | Can we detect deliberate release in urban environment? |
| 6 | Laboratory Network Capacity | Enough BSL-3/4 labs in the right locations? |
| 7 | Wastewater & Environmental Surveillance | Community spread detection before clinical cases? |
| 8 | AMR Surveillance & Response | Real-time global antimicrobial resistance tracking? |
| 9 | AI/ML Forecasting & Prediction | Can we predict next spillover or pandemic trajectory? |
| 10 | Supply Chain & Logistics | MCM manufacturing and distribution at global scale? |
| 11 | Biosecurity & Dual-Use Oversight | Detect misuse of synthetic biology / gene editing? |
| 12 | Workforce & Training Readiness | Enough trained biodefense personnel globally? |
| 13 | Communication & Public Health Messaging | Coordinated risk communication across nations? |
| 14 | One Health Integration | Human, animal, environmental systems connected? |
| 15 | Bioforensics & Attribution | Natural vs. accidental vs. deliberate determination? |

---

## PART 8: INTEROPERABILITY ASSESSMENT FRAMEWORK (10 Types)

| # | Type | Assessment Focus |
|---|------|-----------------|
| 1 | Data Format Standards | HL7 FHIR, LOINC, SNOMED, ISO 11179 adoption |
| 2 | Real-Time API Connectivity | Live API connections between platforms |
| 3 | Genomic Data Sharing Protocols | GISAID, Nextstrain, NCBI data flow |
| 4 | Classification Level Bridging | Classified military → unclassified public health |
| 5 | Cross-Border Legal Frameworks | DSAs, IHR, GDPR compliance |
| 6 | Language & Terminology Harmonization | Multi-language alert ingestion capability |
| 7 | Hardware-to-Software Pipeline | Field devices → surveillance dashboards |
| 8 | One Health Data Integration | Human + animal + environmental system connections |
| 9 | Allied Coalition Interoperability | Five Eyes / NATO joint operation bio sharing |
| 10 | Civilian-Military Data Bridge | DoD → CDC / military → civilian PH systems |

---

## PART 9: COMPLETE PLATFORM REGISTRY (169 Platforms)

### L1_Surveillance (57 platforms)

| Rank | Score | Name | Category | Class | Primary Input |
|------|-------|------|----------|-------|---------------|
| 2 | 90.0 | SORMAS | Surveillance & Outbreak Response | non_biological | epidemiological |
| 5 | 89.0 | DHIS2 | Health Information Management | clinical_biosurveillance | clinical |
| 9 | 87.2 | BioSense / ESSENCE | Syndromic Surveillance | non_biological | syndromic |
| 12 | 86.2 | NWSS | Wastewater Surveillance | environmental_biosurveillance | environmental |
| 14 | 86.0 | EpiCollect5 | Mobile Data Collection | non_biological | epidemiological |
| 16 | 85.5 | Airfinity | AI Health Analytics & Disease Forecasting | environmental_biosurveillance | signals_intelligence |
| 17 | 85.5 | HealthMap | Disease Intelligence | non_biological | signals_intelligence |
| 18 | 85.0 | BlueDot | AI-Powered Infectious Disease Forecasting | non_biological | signals_intelligence |
| 20 | 85.0 | ProMED | Event-Based Surveillance | non_biological | signals_intelligence |
| 24 | 84.0 | WHONET | AMR Surveillance | non_biological | laboratory |
| 26 | 83.5 | BEACON (BU/HealthMap) | Open-Source AI Epidemic Surveillance | non_biological | signals_intelligence |
| 27 | 83.5 | NNDSS | Notifiable Disease Reporting | non_biological | epidemiological |
| 28 | 83.5 | ReportStream | Data Exchange Pipeline | clinical_biosurveillance | clinical |
| 29 | 83.5 | WastewaterSCAN | Academic Wastewater Pathogen Monitoring Network | environmental_biosurveillance | epidemiological |
| 35 | 82.8 | Biobot Analytics | Commercial Wastewater Epidemiology Analytics | environmental_biosurveillance | environmental |
| 40 | 82.0 | BSVE (Biosurveillance Ecosystem) | Military Integrated Biosurveillance | environmental_biosurveillance | multi_source |
| 42 | 82.0 | EPIWATCH | Open-Source AI Epidemic Surveillance (Advanced) | non_biological | signals_intelligence |
| 51 | 81.4 | GLEWS+ | One Health Early Warning | environmental_biosurveillance | multi_source |
| 55 | 81.0 | GLASS (WHO) | Global AMR Surveillance | non_biological | laboratory |
| 57 | 80.5 | ArboNET | Arboviral Disease Surveillance | non_biological | epidemiological |
| 59 | 80.2 | One CDP | Unified Data Modernization | clinical_biosurveillance | clinical |
| 70 | 79.5 | Google Earth Engine / Health Map AI | Geospatial AI for Disease Ecology | environmental_biosurveillance | geospatial |
| 79 | 79.0 | CEIRR / iDPCC | Respiratory Pathogen Research Network | non_biological | laboratory |
| 81 | 79.0 | HESN | National Disease Surveillance | non_biological | epidemiological |
| 87 | 78.5 | Korea-US Joint Biosurveillance Portal | Allied Joint Biosurveillance System | non_biological | multi_source |
| 99 | 78.0 | Vivli AMR Register | AMR Surveillance Data Sharing | non_biological | laboratory |
| 101 | 77.5 | HHIS / HEWS | Mass Gathering Disease Surveillance | clinical_biosurveillance | clinical |
| 102 | 77.5 | Project Tycho | Historical Disease Data | non_biological | epidemiological |
| 103 | 77.5 | SAP | Regional Surveillance | non_biological | epidemiological |
| 109 | 77.0 | EpiNow2 | Real-Time Epidemic Forecasting R Package | non_biological | modeling |
| 121 | 76.0 | Tawakkalna | National Digital Health & Pandemic Response | non_biological | clinical |
| 127 | 75.0 | EWARN (WHO EMRO) | Crisis Zone Early Warning | clinical_biosurveillance | clinical |
| 128 | 75.0 | EpiTrax | Disease Surveillance System | non_biological | epidemiological |
| 129 | 75.0 | Saudi AMR Surveillance | National AMR Surveillance | clinical_biosurveillance | laboratory |
| 131 | 74.6 | China CISDCP | Chinese National Disease Surveillance Network | environmental_biosurveillance | epidemiological |
| 134 | 74.5 | Go.Data (WHO) | Outbreak Investigation | non_biological | epidemiological |
| 136 | 74.0 | EMPRES-i (FAO) | Animal Disease Surveillance | environmental_biosurveillance | environmental |
| 138 | 74.0 | JUPITR | US Forces Korea Biosurveillance | environmental_biosurveillance | environmental |
| 139 | 73.5 | Epi Info (CDC) | Epidemiological Analysis | non_biological | epidemiological |
| 140 | 73.3 | BioWatch | National Aerosol Bio-Detection Network | environmental_biosurveillance | environmental |
| 142 | 73.0 | WAHIS (WOAH) | Global Animal Disease Surveillance System | environmental_biosurveillance | environmental |
| 145 | 72.0 | EIOS 2.0 (WHO Enhanced) | Next-Gen Epidemic Intelligence from Open Sources | non_biological | signals_intelligence |
| 146 | 72.0 | OpenHIM | Health Information Exchange | clinical_biosurveillance | clinical |
| 147 | 72.0 | Santé | AI Epidemic Intelligence as a Service | non_biological | signals_intelligence |
| 150 | 71.0 | MedStar | Clinical Surveillance | clinical_biosurveillance | clinical |
| 151 | 70.5 | EIDSS | Integrated Surveillance | environmental_biosurveillance | epidemiological |
| 153 | 69.5 | SatScan | Spatial Cluster Detection | non_biological | geospatial |
| 155 | 69.0 | QGIS Health | Open-Source GIS for Spatial Epidemiology | non_biological | geospatial |
| 156 | 68.5 | FluNet (WHO) | Influenza Surveillance | non_biological | epidemiological |
| 157 | 68.0 | EIOS (WHO) | Epidemic Intelligence | non_biological | signals_intelligence |
| 158 | 67.5 | ECDC Hub | EU Disease Surveillance | non_biological | epidemiological |
| 159 | 67.0 | ABIS | Biosurveillance Analytics | non_biological | signals_intelligence |
| 160 | 66.5 | Disease.sh | Disease Data API | non_biological | epidemiological |
| 162 | 66.0 | Africa CDC ARES | Continental Surveillance | non_biological | epidemiological |
| 163 | 65.5 | BioPortal (PR) | Territorial Surveillance | non_biological | clinical |
| 165 | 64.0 | Prion Surveillance | Prion Disease Surveillance | non_biological | epidemiological |
| 167 | 62.0 | OpenMRS | Medical Records Surveillance | clinical_biosurveillance | clinical |

### L2_Genomic (59 platforms)

| Rank | Score | Name | Category | Class | Primary Input |
|------|-------|------|----------|-------|---------------|
| 1 | 95.0 | Nextstrain | Phylogenetic Analysis & Visualization | genomic_biosurveillance | genomic |
| 3 | 90.0 | outbreak.info | Epidemiological Data Aggregation | genomic_biosurveillance | genomic |
| 4 | 89.2 | CZ ID | Metagenomic Pathogen Detection | genomic_biosurveillance | genomic |
| 6 | 88.9 | NCBI Pathogen Detection | Genomic Pathogen Detection | genomic_biosurveillance | genomic |
| 7 | 88.5 | GISAID | Global Genomic Data Sharing Repository | genomic_biosurveillance | genomic |
| 8 | 87.5 | Microreact | Genomic Epidemiology Visualization | genomic_biosurveillance | genomic |
| 10 | 87.0 | Pathogenwatch | Pathogen Genomic Analysis | genomic_biosurveillance | genomic |
| 11 | 86.5 | Galaxy Project | Bioinformatics Workflow Platform | genomic_biosurveillance | genomic |
| 13 | 86.0 | BV-BRC | Bacterial & Viral Bioinformatics Resource | genomic_biosurveillance | genomic |
| 15 | 85.6 | Pathoplexus | Open-Access Pathogen Genomic Data Sharing | genomic_biosurveillance | genomic |
| 21 | 84.5 | CARD / RGI | AMR Gene Database & Analysis | genomic_biosurveillance | genomic |
| 22 | 84.5 | OpenELIS | Laboratory Information System | laboratory_biosurveillance | laboratory |
| 23 | 84.0 | Ginkgo Biosecurity | Integrated Biosurveillance | genomic_biosurveillance | genomic |
| 25 | 83.6 | CDC TGS | Traveler Genomic Surveillance | genomic_biosurveillance | genomic |
| 30 | 83.2 | Bactopia | Bacterial Genome Analysis Pipeline | genomic_biosurveillance | genomic |
| 31 | 83.0 | AMRFinderPlus | NCBI AMR Gene & Point Mutation Detection | genomic_biosurveillance | genomic |
| 32 | 83.0 | BioNumerics | Bioinformatics Suite | genomic_biosurveillance | genomic |
| 34 | 83.0 | MalariaGEN | Malaria Genomic Epidemiology | genomic_biosurveillance | genomic |
| 36 | 82.5 | EnteroBase | Bacterial Genomic Database | genomic_biosurveillance | genomic |
| 37 | 82.5 | GPAP | Global Genomic Pathogen Analysis | genomic_biosurveillance | genomic |
| 38 | 82.5 | ResFinder | Acquired AMR Gene Identification Database | genomic_biosurveillance | genomic |
| 43 | 82.0 | IRIDA | Genomic Epidemiology Platform | genomic_biosurveillance | genomic |
| 45 | 82.0 | One Codex | Metagenomic Analysis Platform | genomic_biosurveillance | genomic |
| 46 | 82.0 | Seqera Platform | Bioinformatics Workflow Management | genomic_biosurveillance | genomic |
| 47 | 82.0 | Solu | Cloud Genomic Pathogen Surveillance | genomic_biosurveillance | genomic |
| 48 | 82.0 | Taxonium | Large-Scale Phylogenetic Tree Browser | genomic_biosurveillance | genomic |
| 49 | 81.5 | Kraken2 / Bracken | Metagenomic Taxonomic Classification | genomic_biosurveillance | genomic |
| 50 | 81.5 | PHE Sequence Pipeline | National Sequencing Pipeline | genomic_biosurveillance | genomic |
| 52 | 81.2 | PHoeNIx | CDC WGS Pipeline | genomic_biosurveillance | genomic |
| 56 | 81.0 | Theiagen PHB | Public Health Bioinformatics Toolkit | genomic_biosurveillance | genomic |
| 58 | 80.5 | PulseNet | Foodborne Disease Surveillance | genomic_biosurveillance | genomic |
| 61 | 80.0 | ARTIC Network | Real-Time Genomic Epidemiology | genomic_biosurveillance | genomic |
| 62 | 80.0 | Arvados | Bioinformatics Infrastructure | genomic_biosurveillance | genomic |
| 63 | 80.0 | Auspice | Interactive Genomic Epidemiology Visualization | genomic_biosurveillance | genomic |
| 65 | 80.0 | MetaPhlAn 4 | Metagenomic Species Profiling | genomic_biosurveillance | genomic |
| 67 | 79.8 | Taxonium / Treenome Browser | Genome-Phylogeny Visualization | genomic_biosurveillance | genomic |
| 69 | 79.5 | BEAST2 | Bayesian Phylodynamics | genomic_biosurveillance | genomic |
| 72 | 79.5 | PHA4GE | Public Health Bioinformatics Standards | genomic_biosurveillance | genomic |
| 73 | 79.5 | Terra | Cloud Bioinformatics | genomic_biosurveillance | genomic |
| 75 | 79.4 | GrapeTree | MST Visualization | genomic_biosurveillance | genomic |
| 77 | 79.0 | Africa CDC AGARI | Pan-African Pathogen Genomic Surveillance | genomic_biosurveillance | genomic |
| 80 | 79.0 | CoVariants | Variant Tracking | genomic_biosurveillance | genomic |
| 85 | 78.6 | SNVPhyl | SNP Phylogenomics | genomic_biosurveillance | genomic |
| 89 | 78.5 | Pangolin | Lineage Classification | genomic_biosurveillance | genomic |
| 91 | 78.4 | SecureBio / NAO | Metagenomic Biosecurity & AI-Bio Risk | genomic_biosurveillance | genomic |
| 97 | 78.0 | Nextclade | Sequence Analysis | genomic_biosurveillance | genomic |
| 98 | 78.0 | Nucleic Acid Observatory | Pathogen-Agnostic Metagenomic Surveillance | genomic_biosurveillance | environmental |
| 107 | 77.0 | COG-UK | National Genomic Consortium | genomic_biosurveillance | genomic |
| 112 | 76.5 | INSaFLU | Influenza Genomic Analysis | genomic_biosurveillance | genomic |
| 118 | 76.0 | GECO (ECDC) | EU Genomic Surveillance | genomic_biosurveillance | genomic |
| 122 | 75.8 | APGI | Regional Capacity Building | genomic_biosurveillance | genomic |
| 126 | 75.5 | EpiVerse | R Package Ecosystem | genomic_biosurveillance | modeling |
| 141 | 73.0 | KAUST PGL / AssayM | Pathogen Genomics Research Tools | genomic_biosurveillance | genomic |
| 144 | 72.5 | GenomeTrakr | FDA Genomic Network | genomic_biosurveillance | genomic |
| 149 | 71.5 | Sitrep | Situation Reporting | genomic_biosurveillance | epidemiological |
| 152 | 70.0 | CanPath | Population Cohort | genomic_biosurveillance | genomic |
| 164 | 65.0 | CIVET | Cluster Investigation | genomic_biosurveillance | genomic |
| 166 | 63.0 | RESAOLAB | Lab Network (W. Africa) | genomic_biosurveillance | laboratory |
| 168 | 60.0 | Dashboard Template | Dashboard Template | genomic_biosurveillance | genomic |

### L3_Defense (39 platforms)

| Rank | Score | Name | Category | Class | Primary Input |
|------|-------|------|----------|-------|---------------|
| 19 | 85.0 | GEIS | DoD Global Disease Surveillance Network | non_biological | multi_source |
| 39 | 82.2 | USAMRIID Biosurveillance | Military Biodefense Research & Surveillance | laboratory_biosurveillance | laboratory |
| 44 | 82.0 | JPEO-CBRND Capabilities | US DoD CBRN Defense Acquisition Executive | non_biological | multi_source |
| 53 | 81.0 | DARPA P3 | Military Pandemic Countermeasure R&D | non_biological | multi_source |
| 54 | 81.0 | EU HERA | EU Health Emergency Preparedness Authority | non_biological | multi_source |
| 60 | 80.1 | DARPA PREEMPT | Military Zoonotic Spillover Prevention | environmental_biosurveillance | environmental |
| 64 | 80.0 | DTRA BTRP | Global Cooperative Biological Threat Reduction | non_biological | multi_source |
| 66 | 80.0 | USAID PREDICT | Global Zoonotic Virus Discovery | environmental_biosurveillance | environmental |
| 68 | 79.8 | UK Dstl (Porton Down) | UK Military Biodefense Research | laboratory_biosurveillance | laboratory |
| 71 | 79.5 | NATO JCBRN Defence COE | NATO CBRN Knowledge & Capability Hub | non_biological | multi_source |
| 74 | 79.4 | EpiHiper | High-Performance Pandemic Simulation | non_biological | modeling |
| 76 | 79.3 | Project BioShield / BARDA | National Medical Countermeasure Procurement | non_biological | multi_source |
| 78 | 79.0 | Australia DSTG CBRN | Australian Military CBRN Defense Research | non_biological | multi_source |
| 83 | 78.9 | DARPA ADEPT | Military Autonomous Diagnostics | laboratory_biosurveillance | genomic |
| 84 | 78.8 | DARPA SIGMA+ | Urban CBRN Threat Detection Network | non_biological | hardware_sensor |
| 86 | 78.5 | F-FAST / FFBS | Far-Forward Biological Sequencing | genomic_biosurveillance | genomic |
| 90 | 78.4 | DARPA Safe Genes | Gene Drive Biosecurity & Biodefense | genomic_biosurveillance | genomic |
| 92 | 78.2 | NBACC | National Biodefense Analysis & Bioforensics | non_biological | laboratory |
| 93 | 78.0 | Bundeswehr CBRN Defence | German Military CBRN Defense | clinical_biosurveillance | multi_source |
| 95 | 78.0 | Japan NIID / JSDF CBRN | Japanese National & Military Biodefense | non_biological | multi_source |
| 96 | 78.0 | NBIC | DHS Integrated Biosurveillance | environmental_biosurveillance | multi_source |
| 100 | 77.8 | DRDC Suffield (Canada) | Canadian Military CBRN Defense Research | non_biological | multi_source |
| 108 | 77.0 | DARPA INTERCEPT | Adaptive Bio-Countermeasures | non_biological | genomic |
| 110 | 77.0 | IIBR | Israeli National Biodefense Research | non_biological | laboratory |
| 114 | 76.4 | DORA | AI Outbreak Risk Prediction (Defense) | non_biological | modeling |
| 115 | 76.2 | DARPA NOW | Mobile Medical Countermeasure Manufacturing | non_biological | multi_source |
| 116 | 76.2 | EMBD | Navy Shipboard Bio-Agent Detection | clinical_biosurveillance | hardware_sensor |
| 117 | 76.0 | AVCAD | Next-Gen Portable CBRN Detection | environmental_biosurveillance | hardware_sensor |
| 123 | 75.7 | DARPA ECHO | WMD Exposure Detection | non_biological | clinical |
| 124 | 75.7 | DARPA RTA | Rapid Biological Threat Characterization | non_biological | genomic |
| 125 | 75.5 | DARPA PANACEA | Multi-Target Military Therapeutics Platform | non_biological | genomic |
| 130 | 74.9 | DGA Maîtrise NRBC | French Military CBRN Defense | laboratory_biosurveillance | multi_source |
| 132 | 74.6 | IARPA B24IC | Intelligence Community Bio-Intelligence | non_biological | signals_intelligence |
| 135 | 74.5 | KIDA Biosecurity Analysis (Korea) | Korean Defense Biodefense Analysis | non_biological | modeling |
| 143 | 72.7 | India DRDO Biodefense | Indian Military Biodefense Research | genomic_biosurveillance | multi_source |
| 148 | 72.0 | VECTOR | Russian National Virology & Biodefense | environmental_biosurveillance | genomic |
| 154 | 69.2 | China AMMS | Chinese Military Medical & Biodefense Research | non_biological | multi_source |
| 161 | 66.1 | Russia 48th CBRN Institute | Russian Military Biological Defense | non_biological | multi_source |
| 169 | 48.5 | North Korea Bio Program (Assessed) | Assessed State Biological Weapons Capability | non_biological | multi_source |

### L4_Hardware (9 platforms)

| Rank | Score | Name | Category | Class | Primary Input |
|------|-------|------|----------|-------|---------------|
| 41 | 82.0 | BioFire Defense (FilmArray) | Rapid Multiplex Biothreat Diagnostics | laboratory_biosurveillance | laboratory |
| 104 | 77.5 | Smiths Detection BioFlash | Rapid Biological Agent Identification | non_biological | hardware_sensor |
| 105 | 77.0 | Battelle REBS+ | Next-Gen Airborne Bio-Identification | non_biological | environmental |
| 106 | 77.0 | Bruker CBRNE Detection | Multi-Spectrum CBRNE Detection Systems | laboratory_biosurveillance | hardware_sensor |
| 111 | 76.8 | Chemring TACBIO / JBTDS | Advanced Biological Point Detection | clinical_biosurveillance | hardware_sensor |
| 113 | 76.5 | Teledyne FLIR IBAC 2 | Aerosol Biological Agent Collection & Detection | environmental_biosurveillance | environmental |
| 119 | 76.0 | JBPDS | Military Automated Bio-Agent Detection | non_biological | hardware_sensor |
| 120 | 76.0 | Rheinmetall NBC Field Lab | Mobile CBRN Reconnaissance & Analysis | clinical_biosurveillance | laboratory |
| 133 | 74.5 | Bertin Environics ENVI Assay | Field BWA Immunoassay Detection | laboratory_biosurveillance | hardware_sensor |

### L5_Policy (5 platforms)

| Rank | Score | Name | Category | Class | Primary Input |
|------|-------|------|----------|-------|---------------|
| 33 | 83.0 | GHS Index | Global Health Security Assessment | non_biological | policy_index |
| 82 | 79.0 | PPX (CEPI) | AI-Powered Pandemic Preparedness R&D | non_biological | policy_index |
| 88 | 78.5 | Pandemic PACT Tracker | Global Pandemic Research Funding Intelligence | non_biological | policy_index |
| 94 | 78.0 | JEE (WHO) | IHR Compliance & Biosecurity Assessment | non_biological | policy_index |
| 137 | 74.0 | Federal Select Agent Program | US Bioterrorism Agent Regulatory Database | non_biological | epidemiological |

---

## PART 10: HOW TO USE THIS FOR MANUAL ENRICHMENT

When you research a platform, use this document as your reference frame. For each platform, collect:

1. **Verify/correct the Layer assignment** — Is it in the right layer?
2. **Verify/correct the Biosurveillance Class** — Does the classification match?
3. **Verify/correct the Input Types** — Are the surveillance input types accurate?
4. **Review the 10 Sub-Scores** — Do they feel right? Flag any that seem too high or too low
5. **Review Strengths/Weaknesses** — Add missing ones, correct inaccuracies
6. **Enrich the 7 Profile Fields** — The core enrichment task:
   - Overview (200–500 chars, factual, cite dates/names/numbers)
   - Functional Scope (200–500 chars, specific capabilities)
   - Tech Stack (200–500 chars, real technologies)
   - Operator (150–400 chars, organizations and funding)
   - Data Model (150–400 chars, formats and standards)
   - Users & Scale (150–400 chars, real numbers)
   - Access Model (150–400 chars, how to get access)
7. **Add Reference Links** — Key publications, guidelines, policy documents

---

*BioR — Biosurveillance Intelligence for Operational Readiness*
*Benchmark Methodology v3.0.0 | 169 Platforms | 14 Dimensions | 5 Layers | 15 Gap Domains | 10 Interop Types*
*Generated 2026-03-16*
