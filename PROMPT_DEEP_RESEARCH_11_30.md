# PROMPT: Generate Deep-Research Profiles for Biosurveillance Platforms #11–30

You are a biosurveillance intelligence analyst. Generate citation-backed deep-research profiles for the 20 platforms listed below. Each profile MUST follow the exact JSON schema shown.

---

## OUTPUT FORMAT

Return a single valid JSON object:

```json
{
  "Platform Name": {
    "profile": {
      "overview": "300-700 char factual overview with founding year, creator, institution, key stats, citations",
      "functional_scope": "300-700 char description of what it does, tools, workflows, analyses supported",
      "tech_stack": "300-700 char: programming languages, frameworks, databases, deployment, GitHub repos with star counts if known, licenses",
      "operator": "200-500 char: operating institution, funding sources, partnerships",
      "data_model": "300-700 char: data structures, input/output formats, identifiers, schema fields, volume stats",
      "users_scale": "200-500 char: user counts, geographic reach, adoption metrics, citations",
      "access_model": "200-500 char: open-source vs commercial, licensing, registration, API availability, data redistribution terms"
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
          "url": "https://...",
          "citations": 100
        }
      ],
      "official_guidelines": [
        {
          "title": "Guideline title",
          "url": "https://...",
          "org": "Organization"
        }
      ],
      "controversies_and_changes": [
        "2024: Event description with factual detail",
        "2025: Another event"
      ],
      "ecosystem_connections": [
        {
          "platform": "Connected Platform Name",
          "relationship": "Description of how they connect"
        }
      ],
      "key_urls": {
        "main_site": "https://...",
        "documentation": "https://...",
        "github": "https://...",
        "key_publication": "https://..."
      },
      "timeline": [
        {"year": 2015, "event": "Founded/launched"},
        {"year": 2024, "event": "Major update"}
      ],
      "cbrn_assessment": null
    }
  }
}
```

**RULES:**
1. Every field MUST be filled — no empty strings. Use "(unconfirmed)" if data is uncertain.
2. Include 3-5 key_publications with real DOIs and URLs.
3. Include 2-4 official_guidelines.
4. Include 3-6 controversies_and_changes (focus on 2023-2026 events).
5. Include 4-7 ecosystem_connections to other platforms in this benchmark.
6. Include 6-10 key_urls (main_site, documentation, github, publications, etc.).
7. Include 5-8 timeline events.
8. cbrn_assessment: set to null unless the platform has direct CBRN/biodefense relevance (then provide a brief string).
9. All URLs must be real and verifiable.
10. All statistics must be sourced (cite year if approximate).

---

## THE 20 PLATFORMS TO PROFILE

### #11 — Galaxy Project
- **URL:** https://galaxyproject.org
- **Score:** 86.5/100 | **Layer:** L2_Genomic
- **Category:** Bioinformatics Workflow Platform
- **Description:** Open-source web-based platform for accessible, reproducible computational research
- **Key facts from research:** Founded by Anton Nekrutenko (Penn State) and James Taylor (Johns Hopkins). 2024 NAR update paper (Nucleic Acids Research 52:W1, W83, May 2024, doi:10.1093/nar/gkae410). Version 25.0 released June 2025 with wizard-style builders. 10,000+ integrated tools. 400K+ users, 750K+ jobs/month, 22K+ citations. Three public servers: usegalaxy.org, usegalaxy.eu, usegalaxy.org.au. Python backend, PostgreSQL, Slurm/HTCondor, Vue.js frontend. Academic Free License. Galaxy at Genome Informatics 2025 (Nov 2025).

### #12 — NWSS (National Wastewater Surveillance System)
- **URL:** https://www.cdc.gov/nwss/
- **Score:** 86.2/100 | **Layer:** L1_Surveillance
- **Category:** Wastewater Surveillance
- **Description:** CDC's national wastewater surveillance infrastructure monitoring pathogens in municipal wastewater
- **Key facts from research:** Established Sept 2020 during COVID-19. Expanded from 209 sites (Sept 2020) to 1,500+ sites by Dec 2022, covering ~47% US population (~140M people). Monitors SARS-CoV-2, influenza, RSV, mpox, measles, H5 bird flu. Uses RT-qPCR/RT-dPCR. Aquascope tool for variant detection (May 2025). National Academies report (Sept 2024) endorsed permanent wastewater surveillance. CDC DCIPHER data platform. Partners: Biobot Analytics, Verily. PMC article PMC11103741 on NWSS expansion.

### #13 — BV-BRC (Bacterial and Viral Bioinformatics Resource Center)
- **URL:** https://bv-brc.org
- **Score:** 86/100 | **Layer:** L2_Genomic
- **Category:** Bacterial & Viral Bioinformatics Resource
- **Description:** NIAID-funded integrated resource combining PATRIC + IRD/ViPR
- **Key facts from research:** Launched 2022 merging PATRIC (bacterial) + IRD/ViPR (viral). 2025 NAR paper (Nucleic Acids Research 54:D1, D715, Nov 2025, doi unconfirmed) — "over 14 million publicly available genomes and 33 high-throughput bioinformatic analysis services with AI integration." NIAID contract HHSN272201400027C. University of Chicago lead, Virginia Tech, JCVI. Java/Solr backend, React frontend, RAST annotation. NIAID BRC Webinar Series Oct 2025. Original NAR 2023 launch paper. Free public access with registration for workspace.

### #14 — EpiCollect5
- **URL:** https://five.epicollect.net
- **Score:** 86/100 | **Layer:** L1_Surveillance
- **Category:** Mobile Data Collection
- **Description:** Free mobile/web data collection platform for field epidemiology and research
- **Key facts from research:** Developed by CGPS (Centre for Genomic Pathogen Surveillance) — footer shows "© 2025 Centre for Genomic Pathogen Surveillance, v11.1.15". Originally created for infectious disease surveillance (community.epicollect.net). Laravel/Vue.js backend, native Android/iOS apps. 488K+ users, 189K+ projects, 76M+ entries. 100% free with no limits. GPS, photo, audio, video, barcode, offline capability. Used worldwide for disease surveillance, ecology, citizen science. REST API. Open-source on GitHub.

### #15 — Pathoplexus
- **URL:** https://pathoplexus.org
- **Score:** 85.6/100 | **Layer:** L2_Genomic
- **Category:** Open-Access Pathogen Genomic Data Sharing
- **Description:** Non-profit open-source pathogen sequence sharing platform, GISAID alternative
- **Key facts from research:** Launched 27 Aug 2024. Founded by members from 14 countries across 5 continents. Non-profit registered association. Built on open-source software Loculus. Won Swiss National Prize for Open Research Data (Dec 2024). WHO submission (Dec 2025) describes governance. Integrates with INSDC (GenBank/ENA/DDBJ). Data can be Open (immediate) or Restricted-Use (up to 1 year). ETH Zurich CEVO group involvement. SIB Swiss Institute of Bioinformatics. FAIRsharing entry (Dec 2024). Theo Sanderson (key developer). PHA4GE collaboration.

### #16 — Airfinity
- **URL:** https://airfinity.com
- **Score:** 85.5/100 | **Layer:** L1_Surveillance
- **Category:** AI Health Analytics & Disease Forecasting
- **Description:** Commercial AI-powered disease forecasting platform covering 160+ infectious diseases
- **Key facts from research:** London-based company. Products: IDA 360 (launched Feb 2023 for infectious disease tracking), BioRisk Intelligence (Oct 2022, 160+ diseases), Nexa AI scenario engine. Obesity intelligence platform launched Jan 2024. Serves 9/10 largest pharma companies. Cited 70,000+ times in media (NYT, Reuters, Fortune). Wiley paper "The Business of Pandemic Intelligence" (Jul 2025). Forecasts tripledemic burden (COVID-19/flu/RSV). Proprietary AI/ML models. Commercial SaaS subscription only.

### #17 — HealthMap
- **URL:** https://healthmap.org
- **Score:** 85.5/100 | **Layer:** L1_Surveillance
- **Category:** Disease Intelligence
- **Description:** Automated real-time disease intelligence system mining news/reports using AI/NLP
- **Key facts from research:** Launched Sept 2006 by Dr. John Brownstein and Clark Freifeld at Boston Children's Hospital / Harvard-MIT. JAMIA 2008 paper: ~84% classifier accuracy across 87 disease categories, 89 countries (778 reports). ECDC lists as open-access EI source. Ingests ProMED, WHO, Google News. Flu Near You participatory surveillance. Free web app, no login required. NLP/ML classification pipeline. Listed as upstream signal source for WHO EIOS.

### #18 — BlueDot
- **URL:** https://bluedot.global
- **Score:** 85/100 | **Layer:** L1_Surveillance
- **Category:** AI-Powered Infectious Disease Forecasting
- **Description:** Commercial AI-powered infectious disease intelligence for early warning
- **Key facts from research:** Founded 2013 by Dr. Kamran Khan, Toronto. Famously alerted clients to COVID-19 Dec 31, 2019 (5 days before WHO). Uses IATA airline data (~90% commercial itineraries) for spread modeling. J Travel Med 2020 publication on Wuhan analysis. Canada PHAC publicly used BlueDot for COVID-19 (Mar 2020). 190+ diseases/syndromes. 65+ languages monitored. Intelligence protects 840M+ people (claimed). VC-backed (Diagram Ventures). 100+ peer-reviewed publications co-authored. Proprietary methods, commercial SaaS.

### #19 — GEIS (Global Emerging Infections Surveillance)
- **URL:** https://www.health.mil/Military-Health-Topics/Health-Readiness/AFHSD/Global-Emerging-Infections-Surveillance
- **Score:** 85/100 | **Layer:** L3_Defense
- **Category:** Military Disease Surveillance Network
- **Description:** DoD global infectious disease surveillance program protecting military service members
- **Key facts from research:** Established 1997 under AFHSD (Armed Forces Health Surveillance Division). EID Journal GEIS Supplement Oct 2024 (Volume 30, Supplement) — comprehensive review articles. PMC11559577: "Since 1997, GEIS has focused on surveilling pathogens likely to affect military operations." PMC11559581: "GEIS enables the US government to mitigate infectious disease threats to DoD mission readiness." Operates in 30+ countries. Partners with HJFMRI. Uses WGS labs, ESSENCE analytics. Supports 2.8M DoD personnel. Nov 2024 Army article highlighted GEIS importance.

### #20 — ProMED
- **URL:** https://promedmail.org
- **Score:** 85/100 | **Layer:** L1_Surveillance
- **Category:** Event-Based Outbreak Reporting
- **Description:** Expert-curated email/web outbreak reporting system since 1994
- **Key facts from research:** Launched 1994 by International Society for Infectious Diseases (ISID). Grew from 40 to 83,000+ subscribers in 200+ countries (Madoff & Woodall, 2017). Covers humans, animals, plants. 2023 sustainability crisis led to subscription model: Freemium ($0), Standard ($10/mo), Pro ($1,000/yr). Nov 2024 partnership with samdesk for modernization. ECDC lists as open-access EI source. Key upstream signal for HealthMap and WHO EIOS.

### #21 — CARD / RGI (Comprehensive Antibiotic Resistance Database)
- **URL:** https://card.mcmaster.ca
- **Score:** 84.5/100 | **Layer:** L2_Genomic
- **Category:** AMR Reference Database & Analysis
- **Description:** Curated antimicrobial resistance determinant database with RGI detection tool
- **Key facts from research:** McMaster University, Hamilton, Canada. McArthur Lab. Antibiotic Resistance Ontology (ARO) organizing principle. RGI (Resistance Gene Identifier) predicts resistomes from protein/nucleotide data using homology and SNP models. Dec 2024 release: 1,200+ new beta-lactamase genes, 1,400+ new AMR genes. PMC3697360 original CARD paper. GitHub: arpcard/rgi. Python/BLAST+ tools. Supports metagenomics. Free and open-source. CARD 2023 NAR paper. Used by NCBI AMRFinderPlus as reference.

### #22 — OpenELIS
- **URL:** https://openelis-global.org
- **Score:** 84.5/100 | **Layer:** L2_Genomic
- **Category:** Open-Source Laboratory Information System
- **Description:** Enterprise-level open-source LIMS for public health laboratories
- **Key facts from research:** OpenELIS Global — open enterprise-level LIMS. Mauritius deployed across 12 labs processing 500,000+ COVID-19 tests (4,000% capacity increase). Java-based, web technologies. UNDP Digital X Solution listing. SolDevelo as implementation partner. He et al. 2023 (ScienceDirect, cited 6x) — sustainability lessons from 13 years. Jul 2025 new features: patient matching improvements. iI-Tech involvement. Tailored for public health labs in LMICs. FHIR interoperability. Open-source on GitHub (I-TECH-UW/OpenELIS-Global-2).

### #23 — Ginkgo Biosecurity
- **URL:** https://biosecurity.ginkgo.bio
- **Score:** 84/100 | **Layer:** L2_Genomic
- **Category:** Metagenomic Biosecurity & Early Warning
- **Description:** Technology-first biological threat detection using metagenomic and environmental surveillance
- **Key facts from research:** Division of Ginkgo Bioworks (NYSE: DNA). Concentric by Ginkgo — airport wastewater pathogen monitoring program with CDC. CDC TGS partnership since Aug 2021 via XpresCheck/XWELL. Expanded to 30+ viruses/bacteria/AMR (Nov 2023). Airport air monitoring: SARS-CoV-2 detected in 98.3% of air samples Oct 2023-Aug 2024 (medRxiv 2025). EID article (Mar 2025): "Leveraging a Strategic Public-Private Partnership." Eurofins Genomics partner. Wastewater surveillance blog post on global health infrastructure. Acquired Metabiota 2022.

### #24 — WHONET
- **URL:** https://whonet.org
- **Score:** 84/100 | **Layer:** L1_Surveillance
- **Category:** AMR Surveillance Software
- **Description:** Free WHO-endorsed software for antimicrobial resistance surveillance data management
- **Key facts from research:** Developed 1989 by Dr. John Stelling (Brigham and Women's Hospital/WHO). Free desktop software managing microbiology lab data for AMR surveillance. WHO GLASS (Global Antimicrobial Resistance and Use Surveillance System) backbone — 130 countries enrolled, 127+ countries by end 2024. 2025 WHO GLASS report: data from 23M+ confirmed infections. BMC Infectious Diseases Jan 2026 paper (PMC12910943) on WHONET usage. Connects lab data to WHO reporting. Windows-based. Fleming Fund supports 30+ countries.

### #25 — CDC TGS (Traveler-based Genomic Surveillance)
- **URL:** https://www.cdc.gov/amd/php/about/tgs.html
- **Score:** 83.6/100 | **Layer:** L2_Genomic
- **Category:** Airport-Based Pathogen Monitoring
- **Description:** CDC program collecting nasal swabs and airplane wastewater from arriving international travelers
- **Key facts from research:** Launched 2021. Surpassed 1 MILLION voluntary participants (CDC press release Jan 30, 2026). Collects anonymous nasal swabs + airplane wastewater at US international airports. Expanded to Miami (MIA) and Chicago (ORD) in Mar 2024. ScienceDirect Feb 2026 paper on SARS-CoV-2 variant detection. Partners: Ginkgo Bioworks/Concentric, XpresCheck/XWELL. Monitors 30+ pathogens. PMC12078540: public-private partnership analysis Sept 2021-Aug 2024. Bilateral UK-US airplane wastewater monitoring (medRxiv Feb 2026). CDC data visualization dashboard.

### #26 — BEACON (BU/HealthMap)
- **URL:** https://beaconbio.org
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** AI-Powered Global Disease Surveillance
- **Description:** Open-source AI-powered biothreat reporting and disease surveillance platform
- **Key facts from research:** Beta launched Apr 23, 2025. Boston University. "First biothreats reporting system to leverage generative AI" (BU press release). Founded by Dr. Nahid Bhadelia. Open-source. Near real-time reports of sentinel cases, clusters, outbreaks. Covers human, animal, plant, environmental threats. WBUR Sept 2025 profile. Oct 2025: introduced Report Maps for outbreak visualization. Jul 2025: Disease Event Filtering and automated daily/weekly digests. UTMB SPECTRE webinar Apr 2025. Free and open access at beaconbio.org.

### #27 — NNDSS (National Notifiable Diseases Surveillance System)
- **URL:** https://www.cdc.gov/nndss/
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** National Case-Based Disease Reporting
- **Description:** CDC's system for collecting notifiable disease case data from all US jurisdictions
- **Key facts from research:** CDC's backbone for nationally notifiable disease reporting. Case Surveillance Modernization initiative (Jan 2026 update). Transitioning from legacy to HL7 case notification messaging. NEDSS (National Electronic Disease Surveillance System) infrastructure. Jurisdiction implementation map for HL7 adoption. CSTE (Council of State and Territorial Epidemiologists) partnership. Covers 120+ notifiable conditions. Data published in MMWR weekly/annual tables. All 50 states, DC, territories participate. eSHARE archives.

### #28 — ReportStream
- **URL:** https://reportstream.cdc.gov
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** Public Health Data Exchange Pipeline
- **Description:** CDC's free, open-source interoperable data transfer platform for public health reporting
- **Key facts from research:** Built by USDS (US Digital Service) and CDC. Open-source on GitHub. Secure data aggregation and routing to public health entities. Supports HL7 v2 and FHIR standards. Nava PBC won prime contract to enhance ReportStream with FHIR-based pipeline. Connects healthcare facilities, labs, and public health agencies. Replaces point-to-point connections. Free for all senders and receivers. Part of CDC's Data Modernization Initiative. Links to PHDI (Public Health Data Interoperability).

### #29 — WastewaterSCAN
- **URL:** https://data.wastewaterscan.org
- **Score:** 83.5/100 | **Layer:** L1_Surveillance
- **Category:** Academic Wastewater Pathogen Monitoring
- **Description:** National academic wastewater monitoring program tracking 19+ pathogens
- **Key facts from research:** Stanford University + Emory University partnership, Verily (Google) as lab partner. Philanthropically funded. Now monitors 19 pathogens at 147 sites nationwide (Mar 2026 Instagram update). Nature Scientific Data paper (Oct 2024): "Human pathogen nucleic acids in wastewater solids from 191 treatment plants." Jul 2024 STAT News: cut back some monitoring sites due to funding constraints. Lancet Microbe paper (Jan 2025): respiratory virus season surveillance 2023-2024. Public dashboard at data.wastewaterscan.org. Data collected 2-7x per week since Jan 2022.

### #30 — Bactopia
- **URL:** https://bactopia.github.io
- **Score:** 83.2/100 | **Layer:** L2_Genomic
- **Category:** Bacterial Genome Analysis Pipeline
- **Description:** Nextflow-based flexible pipeline for complete bacterial genome analysis
- **Key facts from research:** Created by Robert A. Petit III. mSystems paper 2020 (doi: 10.1128/msystems.00190-20, Petit & Read). 150+ bioinformatics tools integrated. Nextflow-based (DSL2). Bactopia v3 presented at Nextflow Summit 2023 Boston — "enhancements for public health genomic surveillance." Nov 2025 YouTube: "Nextflow v25 Broke Bactopia, So We Rewrote It" — active maintenance. GitHub: bactopia/bactopia. Supports assembly, annotation, MLST, AMR, pan-genome, phylogenetics. Conda/Docker/Singularity support. Free, open-source. Automates downloading SRA/GenBank data.

---

## CROSS-PLATFORM COMPARISON TABLE

Also generate a `cross_platform_comparison` object with these 6 axes for all 20 platforms:

```json
"cross_platform_comparison": {
  "axes": ["Primary Function", "Open Source", "Geographic Scope", "Data Access Model", "Key Strength", "Primary Vulnerability (2025-2026)"],
  "platforms": {
    "Galaxy Project": ["Bioinformatics workflow platform", "Yes (AFL)", "Global", "Free public servers", "...", "..."],
    ...
  }
}
```

---

## IMPORTANT CONTEXT

- These platforms rank #11–30 in a benchmark of 169 biosurveillance platforms.
- The top 10 (#1 Nextstrain through #10 Pathogenwatch) already have deep-research profiles.
- Key ecosystem connections to reference: GISAID (data feed terminations 2025), Nextstrain, NCBI, WHO GLASS, CDC NSSP/BioSense, PubMLST, INSDC.
- Focus on 2024-2026 developments.
- For GEIS (#19), set `cbrn_assessment` to a string describing its biodefense role.
- For CDC TGS (#25) and Ginkgo Biosecurity (#23), note CBRN-adjacent early warning capability.

Return ONLY the JSON object. No markdown wrapper, no explanation.
