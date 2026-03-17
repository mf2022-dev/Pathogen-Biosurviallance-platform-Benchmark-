# EXTRACTION PROMPT — Batch A: Deep-Research Profiles for Platforms #11–20

You are a biosurveillance intelligence analyst. Generate citation-backed deep-research profiles for the 10 platforms listed below. Each profile MUST follow the exact JSON schema shown. This data will be programmatically injected into a master knowledge base.

---

## OUTPUT FORMAT

Return a single valid JSON object. NO markdown code fences. NO explanation text. ONLY the JSON object.

```json
{
  "Galaxy Project": {
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
11. Profile fields should UPGRADE the existing profiles below, adding more specificity and citations.
12. The JSON keys for each platform must EXACTLY match the platform names shown.

---

## THE 10 PLATFORMS

### #11 — Galaxy Project
- **URL:** https://galaxyproject.org
- **Score:** 86.5/100 | **Layer:** L2_Genomic
- **Category:** Bioinformatics Workflow Platform
- **Description:** Open-source web-based platform for accessible, reproducible computational research
- **Key facts:** Founded by Anton Nekrutenko (Penn State) and James Taylor (Johns Hopkins, d.2020). 2024 NAR update paper (Nucleic Acids Research 52:W1, W83, May 2024, doi:10.1093/nar/gkae410). Version 25.0 released June 2025 with wizard-style builders. 10,000+ integrated tools. 400K+ users, 750K+ jobs/month, 22K+ citations. Three public servers: usegalaxy.org, usegalaxy.eu, usegalaxy.org.au. Python backend, PostgreSQL, Slurm/HTCondor, Vue.js frontend. Academic Free License. Galaxy at Genome Informatics 2025 (Nov 2025).
- **Existing profile overview:** Galaxy is an open-source, web-based platform for accessible, reproducible, and transparent computational research. Founded by Anton Nekrutenko (Penn State) and James Taylor (Johns Hopkins), it provides a browser-based environment for running bioinformatics analyses without programming knowledge.
- **Existing profile users_scale:** 400,000+ registered users, 750,000+ jobs per month, 22,000+ citations, used in 150+ countries. Three major public servers.

### #12 — NWSS (National Wastewater Surveillance System)
- **URL:** https://www.cdc.gov/nwss/
- **Score:** 86.2/100 | **Layer:** L1_Surveillance
- **Category:** Wastewater Surveillance
- **Description:** CDC's national wastewater surveillance infrastructure monitoring pathogens in municipal wastewater
- **Key facts:** Established Sept 2020 during COVID-19. Expanded from 209 sites (Sept 2020) to 1,500+ sites by Dec 2022, covering ~47% US population (~140M people). Monitors SARS-CoV-2, influenza, RSV, mpox, measles, H5 bird flu. Uses RT-qPCR/RT-dPCR. Aquascope tool for variant detection (May 2025). National Academies report (Sept 2024) endorsed permanent wastewater surveillance. CDC DCIPHER data platform. Partners: Biobot Analytics, Verily. PMC article PMC11103741.
- **Existing profile overview:** The National Wastewater Surveillance System (NWSS) is CDC's public health infrastructure for monitoring infectious diseases through wastewater testing. Established in September 2020.
- **Existing profile users_scale:** 1,500+ sampling sites serving ~140M Americans. 6+ pathogens.

### #13 — BV-BRC (Bacterial and Viral Bioinformatics Resource Center)
- **URL:** https://bv-brc.org
- **Score:** 86/100 | **Layer:** L2_Genomic
- **Category:** Bacterial & Viral Bioinformatics Resource
- **Description:** NIAID-funded integrated resource combining PATRIC + IRD/ViPR
- **Key facts:** Launched 2022 merging PATRIC (bacterial) + IRD/ViPR (viral). 2025 NAR paper (Nucleic Acids Research 54:D1, D715, Nov 2025) — "over 14 million publicly available genomes and 33 high-throughput bioinformatic analysis services with AI integration." NIAID contract HHSN272201400027C. University of Chicago lead, Virginia Tech, JCVI. Java/Solr backend, React frontend, RAST annotation. NIAID BRC Webinar Series Oct 2025. Free public access with registration for workspace.
- **Existing profile overview:** BV-BRC is a comprehensive NIAID-funded resource for infectious disease research, combining the former PATRIC (bacterial) and IRD/ViPR (viral) databases into a unified platform launched in 2022.

### #14 — EpiCollect5
- **URL:** https://five.epicollect.net
- **Score:** 86/100 | **Layer:** L1_Surveillance
- **Category:** Mobile Data Collection
- **Description:** Free mobile/web data collection platform for field epidemiology and research
- **Key facts:** Developed by CGPS (Centre for Genomic Pathogen Surveillance), v11.1.15 (2025). Laravel/Vue.js backend, native Android/iOS apps. 488K+ users, 189K+ projects, 76M+ entries. 100% free with no limits. GPS, photo, audio, video, barcode, offline capability. REST API. Open-source on GitHub. Originally from Imperial College London, now Oxford Big Data Institute.
- **Existing profile overview:** Epicollect5 is a free, open-source mobile and web application for data collection developed by Imperial College London and the Big Data Institute at the University of Oxford.

### #15 — Pathoplexus
- **URL:** https://pathoplexus.org
- **Score:** 85.6/100 | **Layer:** L2_Genomic
- **Category:** Open-Access Pathogen Genomic Data Sharing
- **Description:** Non-profit open-source pathogen sequence sharing platform, GISAID alternative
- **Key facts:** Launched 27 Aug 2024. Founded by members from 14 countries across 5 continents. Non-profit registered association. Built on open-source software Loculus. Won Swiss National Prize for Open Research Data (Dec 2024). WHO submission (Dec 2025). Integrates with INSDC (GenBank/ENA/DDBJ). Open or Restricted-Use data options. ETH Zurich CEVO group. SIB Swiss Institute of Bioinformatics. PHA4GE collaboration. Theo Sanderson key developer.
- **Existing profile overview:** Pathoplexus is a transparent, non-profit pathogen sequence data sharing platform founded by members from 14 countries across 5 continents.

### #16 — Airfinity
- **URL:** https://airfinity.com
- **Score:** 85.5/100 | **Layer:** L1_Surveillance
- **Category:** AI Health Analytics & Disease Forecasting
- **Description:** Commercial AI-powered disease forecasting platform covering 160+ infectious diseases
- **Key facts:** London-based. Products: IDA 360 (launched Feb 2023), BioRisk Intelligence (Oct 2022, 160+ diseases), Nexa AI scenario engine. Obesity intelligence (Jan 2024). Serves 9/10 largest pharma companies. Cited 70,000+ times in media. Wiley paper "The Business of Pandemic Intelligence" (Jul 2025). Proprietary AI/ML. Commercial SaaS only.
- **Existing profile overview:** Airfinity is a commercial predictive analytics and intelligence platform for the life sciences sector, headquartered in London.

### #17 — HealthMap
- **URL:** https://healthmap.org
- **Score:** 85.5/100 | **Layer:** L1_Surveillance
- **Category:** Disease Intelligence
- **Description:** Automated real-time disease intelligence system mining news/reports using AI/NLP
- **Key facts:** Launched Sept 2006 by Dr. John Brownstein and Clark Freifeld at Boston Children's Hospital / Harvard-MIT. JAMIA 2008 paper: ~84% classifier accuracy, 87 disease categories, 89 countries. ECDC lists as open-access EI source. Ingests ProMED, WHO, Google News. Flu Near You participatory surveillance. NLP/ML classification. Upstream signal for WHO EIOS. Free, no login required.
- **Existing profile overview:** HealthMap is an automated real-time surveillance system developed at Boston Children's Hospital and Harvard Medical School. Launched in 2006.

### #18 — BlueDot
- **URL:** https://bluedot.global
- **Score:** 85/100 | **Layer:** L1_Surveillance
- **Category:** AI-Powered Infectious Disease Forecasting
- **Description:** Commercial AI-powered infectious disease intelligence for early warning
- **Key facts:** Founded 2013 by Dr. Kamran Khan, Toronto. Alerted clients to COVID-19 Dec 31, 2019 (5 days before WHO). Uses IATA airline data (~90% commercial itineraries). J Travel Med 2020. PHAC used BlueDot for COVID-19 (Mar 2020). 190+ diseases/syndromes. 65+ languages. 840M+ people protected (claimed). VC-backed. 100+ peer-reviewed publications. Commercial SaaS.
- **Existing profile overview:** BlueDot is a Canadian AI-powered infectious disease intelligence company founded in 2013 by Dr. Kamran Khan.

### #19 — GEIS (Global Emerging Infections Surveillance)
- **URL:** https://www.health.mil/Military-Health-Topics/Health-Readiness/AFHSD/Global-Emerging-Infections-Surveillance
- **Score:** 85/100 | **Layer:** L3_Defense
- **Category:** Military Disease Surveillance Network
- **Description:** DoD global infectious disease surveillance program protecting military service members
- **Key facts:** Established 1997 under AFHSD. EID Journal GEIS Supplement Oct 2024 (Volume 30, Supplement). PMC11559577 and PMC11559581. 30+ countries. Partners with HJFMRI. WGS labs, ESSENCE analytics. 2.8M DoD personnel. Nov 2024 Army article. African Lion 2025 exercise demonstrated GEIS.
- **Existing profile overview:** GEIS is the U.S. Department of Defense's infectious disease surveillance network, established in 1997 under AFHSD.
- **NOTE:** Set `cbrn_assessment` to a string describing its biodefense/CBRN role (not null).

### #20 — ProMED
- **URL:** https://promedmail.org
- **Score:** 85/100 | **Layer:** L1_Surveillance
- **Category:** Event-Based Outbreak Reporting
- **Description:** Expert-curated email/web outbreak reporting system since 1994
- **Key facts:** Launched 1994 by ISID (International Society for Infectious Diseases). 83,000+ subscribers in 200+ countries. 2023 sustainability crisis => subscription model: Freemium ($0), Standard ($10/mo), Pro ($1,000/yr). Nov 2024 partnership with samdesk. ECDC lists as open-access EI source. Upstream signal for HealthMap and WHO EIOS.
- **Existing profile overview:** ProMED is a global electronic reporting system for outbreaks of emerging infectious diseases, operated by ISID since 1994.

---

## ECOSYSTEM CONTEXT

These platforms rank #11-20 in a benchmark of 189 biosurveillance platforms. The top 10 (#1 Nextstrain through #10 Pathogenwatch) already have deep-research profiles with ecosystem connections to: GISAID, NCBI GenBank, WHO GLASS, CDC NSSP/BioSense, PubMLST, INSDC, Pangolin, Nextclade, outbreak.info, Microreact. Platforms #21-30 include: CARD/RGI, OpenELIS, Ginkgo Biosecurity, WHONET, CDC TGS, BEACON, NNDSS, ReportStream, WastewaterSCAN, Bactopia.

Focus on 2024-2026 developments. Cross-reference ecosystem connections across all 30 platforms. All URLs must be real.

Return ONLY the JSON object. No markdown wrapper. No explanation.
