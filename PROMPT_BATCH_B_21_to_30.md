# EXTRACTION PROMPT — Batch B: Deep-Research Profiles for Platforms #21–30

You are a biosurveillance intelligence analyst. Generate citation-backed deep-research profiles for the 10 platforms listed below. Each profile MUST follow the exact JSON schema shown. This data will be programmatically injected into a master knowledge base.

---

## OUTPUT FORMAT

Return a single valid JSON object. NO markdown code fences. NO explanation text. ONLY the JSON object.

```json
{
  "CARD / RGI": {
    "profile": {
      "overview": "300-700 char factual overview: founding year, creator, institution, key stats, citations",
      "functional_scope": "300-700 char: what it does, tools, workflows, analyses, unique features",
      "tech_stack": "300-700 char: languages, frameworks, databases, deployment, GitHub repos, licenses",
      "operator": "200-500 char: operating institution, funding sources with dollar amounts if known",
      "data_model": "300-700 char: data structures, formats, ontologies, volume stats",
      "users_scale": "200-500 char: user counts, geographic reach, citations, adoption metrics",
      "access_model": "200-500 char: open-source/commercial, license type, API availability, data terms"
    },
    "deep_research": {
      "executive_summary": "300-500 char summary: what it is, who uses it, score justification, key risk",
      "key_publications": [
        {
          "title": "Full paper title",
          "authors": "First author et al.",
          "journal": "Journal Name",
          "year": 2024,
          "doi": "10.xxxx/xxxxx",
          "citations": 100,
          "url": "https://..."
        }
      ],
      "official_guidelines": [
        {
          "title": "Guideline or policy document title",
          "url": "https://...",
          "org": "Issuing Organization"
        }
      ],
      "controversies_and_changes": [
        "YYYY: Event description with factual detail"
      ],
      "ecosystem_connections": [
        {
          "platform": "Connected Platform Name",
          "relationship": "How they connect"
        }
      ],
      "key_urls": {
        "main_site": "https://...",
        "documentation": "https://...",
        "github": "https://...",
        "key_publication": "https://..."
      },
      "timeline": [
        {"year": 2015, "event": "Event description"}
      ],
      "cbrn_assessment": null
    }
  }
}
```

---

## STRICT RULES

1. Every field MUST be filled — no empty strings. Use "(unconfirmed)" if data is uncertain.
2. Include **3-5 key_publications** with real DOIs and URLs.
3. Include **2-4 official_guidelines** with real URLs.
4. Include **3-6 controversies_and_changes** (focus on 2023-2026 events).
5. Include **4-7 ecosystem_connections** referencing other platforms in this benchmark.
6. Include **6-10 key_urls** (main_site, documentation, github, publications, etc.).
7. Include **5-8 timeline events** spanning the platform's history.
8. `cbrn_assessment`: set to `null` unless the platform has direct CBRN/biodefense relevance (then provide a string).
9. All URLs must be real and verifiable — do NOT fabricate DOIs or links.
10. All statistics must be sourced — cite year if approximate.
11. Profile fields should UPGRADE the existing profiles below with more specificity and citations.
12. The JSON keys for each platform must EXACTLY match the platform names shown.

---

## THE 10 PLATFORMS

### #21 — CARD / RGI
- **URL:** https://card.mcmaster.ca
- **Score:** 84.5/100 | **Layer:** L2_Genomic
- **Category:** AMR Reference Database & Analysis
- **Description:** Curated antimicrobial resistance determinant database with Resistance Gene Identifier tool
- **Key facts:** McMaster University, Hamilton, Canada. McArthur Lab. ARO (Antibiotic Resistance Ontology). RGI predicts resistomes from protein/nucleotide data using homology and SNP models. Dec 2024 release: 1,200+ new beta-lactamase genes, 1,400+ new AMR genes. PMC3697360 original CARD paper. GitHub: arpcard/rgi. Python/BLAST+/HMMER3/DIAMOND. Supports metagenomics. CARD 2023 NAR paper. Used by NCBI AMRFinderPlus. CC-BY-4.0 license.
- **Existing profile overview:** CARD and RGI are developed by the McArthur Lab at McMaster University, Canada. CARD is the gold-standard curated AMR reference database, integrated with the ARO.
- **Existing profile users_scale:** Among the most-cited AMR databases globally with 3,000+ citations. Used by NCBI, WHO GLASS partners, public health labs.

### #22 — OpenELIS
- **URL:** https://openelis-global.org
- **Score:** 84.5/100 | **Layer:** L2_Genomic
- **Category:** Open-Source Laboratory Information System
- **Description:** Enterprise-level open-source LIMS for public health laboratories
- **Key facts:** OpenELIS Global. Mauritius deployed across 12 labs processing 500,000+ COVID-19 tests (4,000% capacity increase). Java/Spring Boot, React.js, PostgreSQL. UNDP Digital X Solution listing. SolDevelo as partner. He et al. 2023 sustainability paper. Jul 2025 patient matching improvements. I-TECH involvement. FHIR R4 interoperability. GitHub: I-TECH-UW/OpenELIS-Global-2. Mozilla Public License.
- **Existing profile overview:** OpenELIS Global is the leading open-source Laboratory Information System for public health laboratory networks. University of Washington with CDC support.
- **Existing profile users_scale:** 1,000+ labs deployed across 20+ countries, supporting 18.7+ million patients. 15+ years.

### #23 — Ginkgo Biosecurity
- **URL:** https://biosecurity.ginkgo.bio
- **Score:** 84/100 | **Layer:** L2_Genomic
- **Category:** Metagenomic Biosecurity & Early Warning
- **Description:** Technology-first biological threat detection using metagenomic and environmental surveillance
- **Key facts:** Division of Ginkgo Bioworks (NYSE: DNA). Concentric by Ginkgo — airport wastewater pathogen monitoring with CDC. CDC TGS partnership since Aug 2021 via XpresCheck/XWELL. Expanded to 30+ viruses/bacteria/AMR (Nov 2023). Air monitoring: SARS-CoV-2 in 98.3% of samples Oct 2023-Aug 2024 (medRxiv 2025). EID article Mar 2025: "Leveraging a Strategic Public-Private Partnership." Eurofins Genomics partner. Acquired Metabiota 2022. $350M+ in biosecurity contracts (CDC, BARDA, DoD).
- **Existing profile overview:** Ginkgo Biosecurity is a biosurveillance division of Ginkgo Bioworks, launched during COVID-19.
- **NOTE:** Set `cbrn_assessment` to a string describing CBRN-adjacent early warning capability.

### #24 — WHONET
- **URL:** https://whonet.org
- **Score:** 84/100 | **Layer:** L1_Surveillance
- **Category:** AMR Surveillance Software
- **Description:** Free WHO-endorsed software for antimicrobial resistance surveillance data management
- **Key facts:** Developed 1989 by Dr. John Stelling (Brigham and Women's Hospital/WHO). Free desktop software. WHO GLASS backbone — 130 countries enrolled, 127+ by end 2024. 2025 WHO GLASS report: 23M+ confirmed infections. BMC Infectious Diseases Jan 2026 paper (PMC12910943). Windows-based. BacLink module. SaTScan integration. CLSI and EUCAST breakpoints. Fleming Fund supports 30+ countries. 54 languages. 2,300+ labs in 130+ countries.
- **Existing profile overview:** WHONET is a free Windows desktop application for AMR surveillance, developed by WHO Collaborating Centre at Brigham and Women's Hospital.

### #25 — CDC TGS
- **URL:** https://www.cdc.gov/amd/php/about/tgs.html
- **Score:** 83.6/100 | **Layer:** L2_Genomic
- **Category:** Airport-Based Pathogen Monitoring
- **Description:** CDC program collecting nasal swabs and airplane wastewater from arriving international travelers
- **Key facts:** Launched 2021. Surpassed 1 MILLION voluntary participants (CDC press release Jan 30, 2026). Expanded to Miami (MIA) and Chicago (ORD) Mar 2024. ScienceDirect Feb 2026 paper. Partners: Ginkgo Bioworks/Concentric, XpresCheck/XWELL. 30+ pathogens. PMC12078540: public-private partnership analysis Sept 2021-Aug 2024. Bilateral UK-US airplane wastewater monitoring (medRxiv Feb 2026). CDC data visualization dashboard.
- **Existing profile overview:** CDC's Travelers' Genomic Surveillance (TGS) program monitors international travelers at U.S. airports.
- **NOTE:** Set `cbrn_assessment` to a string describing CBRN-adjacent early warning capability.

### #26 — BEACON (BU/HealthMap)
- **URL:** https://beaconbio.org
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** AI-Powered Global Disease Surveillance
- **Description:** Open-source AI-powered biothreat reporting and disease surveillance platform
- **Key facts:** Beta launched Apr 23, 2025. Boston University. "First biothreats reporting system to leverage generative AI" (BU press release). Dr. Nahid Bhadelia founder. Open-source. Near real-time reports. Covers human, animal, plant, environmental threats. Oct 2025: Report Maps. Jul 2025: Disease Event Filtering, automated digests. UTMB SPECTRE webinar Apr 2025. Free at beaconbio.org. WBUR Sept 2025 profile. $6M NSF/Gates funded. PandemIQ LLM. 17 language NLP.
- **Existing profile overview:** BEACON is an open-source AI+human hybrid epidemic intelligence platform developed at Boston University.

### #27 — NNDSS
- **URL:** https://www.cdc.gov/nndss/
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** National Case-Based Disease Reporting
- **Description:** CDC's system for collecting notifiable disease case data from all US jurisdictions
- **Key facts:** CDC's backbone for nationally notifiable disease reporting. Case Surveillance Modernization initiative (Jan 2026 update). Transitioning from legacy to HL7 case notification messaging. NEDSS infrastructure. CSTE partnership. 120+ notifiable conditions. MMWR weekly/annual tables. All 50 states, DC, territories participate. eSHARE archives. Predecessor system since 1878.
- **Existing profile overview:** NNDSS is the CDC's foundational case surveillance system. Operational since 1961 (predecessor since 1878).
- **Existing profile users_scale:** Covers entire US population (~330M). Every state/territorial health department reports.

### #28 — ReportStream
- **URL:** https://reportstream.cdc.gov
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** Public Health Data Exchange Pipeline
- **Description:** CDC's free, open-source interoperable data transfer platform for public health reporting
- **Key facts:** Built by USDS and CDC. Open-source on GitHub (CDCgov/prime-reportstream). Supports HL7 v2 and FHIR. Nava PBC prime contract for FHIR-based pipeline. Connects facilities, labs, and public health agencies. Replaces point-to-point connections. Free. Part of CDC Data Modernization Initiative. PHDI linkage. Kotlin/Java backend, React frontend, Azure. PostgreSQL.
- **Existing profile overview:** ReportStream is CDC's free, interoperable data platform connecting healthcare organizations, labs, and public health agencies.
- **Existing profile users_scale:** Thousands of labs and healthcare facilities. Millions of reports monthly to 60+ jurisdictions.

### #29 — WastewaterSCAN
- **URL:** https://data.wastewaterscan.org
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** Academic Wastewater Pathogen Monitoring
- **Description:** National academic wastewater monitoring program tracking 19+ pathogens
- **Key facts:** Stanford + Emory partnership, Verily (Google) lab partner. Philanthropically funded. 19 pathogens at 147 sites (Mar 2026). Nature Scientific Data paper Oct 2024: "Human pathogen nucleic acids in wastewater solids from 191 treatment plants." Jul 2024 STAT News: cut back monitoring sites. Lancet Microbe paper Jan 2025. Public dashboard. Data 2-7x/week since Jan 2022.
- **Existing profile overview:** WastewaterSCAN is a Stanford-led national wastewater surveillance network launched in 2020 by Boehm and Wolfe.
- **Existing profile users_scale:** Monitors wastewater serving millions of Americans. 50+ peer-reviewed publications.

### #30 — Bactopia
- **URL:** https://bactopia.github.io
- **Score:** 83.2/100 | **Layer:** L2_Genomic
- **Category:** Bacterial Genome Analysis Pipeline
- **Description:** Nextflow-based flexible pipeline for complete bacterial genome analysis
- **Key facts:** Created by Robert A. Petit III. mSystems paper 2020 (doi:10.1128/msystems.00190-20, Petit & Read). 150+ tools. Nextflow DSL2. Bactopia v3 at Nextflow Summit 2023 Boston — "enhancements for public health genomic surveillance." Nov 2025: "Nextflow v25 Broke Bactopia, So We Rewrote It." GitHub: bactopia/bactopia. Conda/Docker/Singularity. Free, open-source MIT license. Automates SRA/GenBank download.
- **Existing profile overview:** Bactopia is a flexible, portable Nextflow pipeline for complete bacterial genome analysis, by Robert Petit at Wyoming Public Health Laboratory.

---

## ECOSYSTEM CONTEXT

These platforms rank #21-30 in a benchmark of 189 biosurveillance platforms. Platforms #1-10 (Nextstrain, SORMAS, outbreak.info, CZ ID, DHIS2, NCBI Pathogen Detection, GISAID, Microreact, BioSense/ESSENCE, Pathogenwatch) have deep-research profiles. Platforms #11-20 (Galaxy Project, NWSS, BV-BRC, EpiCollect5, Pathoplexus, Airfinity, HealthMap, BlueDot, GEIS, ProMED) are being profiled in parallel.

Key ecosystem references: GISAID (data feed terminations 2025), Nextstrain, NCBI GenBank/SRA, WHO GLASS, CDC NSSP/BioSense, PubMLST, INSDC, Pangolin, Nextclade, IRIDA. Focus on 2024-2026 developments. All URLs must be real.

Return ONLY the JSON object. No markdown wrapper. No explanation.
