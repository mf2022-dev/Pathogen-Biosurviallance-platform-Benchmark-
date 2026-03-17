# EXTRACTION PROMPT — Batch C: Deep-Research Profiles for CBRN Operational Platforms #170–189

You are a CBRN defense and biosurveillance intelligence analyst. Generate deep-research profiles for the 20 CBRN operational platforms listed below. Each profile MUST follow the exact JSON schema shown. These platforms are in the L4_CBRN_Operational layer of a global biosurveillance benchmark. This data will be programmatically injected into a master knowledge base.

---

## OUTPUT FORMAT

Return a single valid JSON object. NO markdown code fences. NO explanation text. ONLY the JSON object.

```json
{
  "Saab AWR": {
    "profile": {
      "overview": "300-700 char factual overview: founding year, creator, operator, key deployments, key stats",
      "functional_scope": "300-700 char: capabilities, sensor types, modelling, standards supported (ATP-45, STANAG, etc)",
      "tech_stack": "300-700 char: software architecture, sensors supported, data standards, deployment model, APIs",
      "operator": "200-500 char: company/agency, country, customers, contract values if known",
      "data_model": "300-700 char: data formats, standards (ATP-45/APP-11/STANAG), sensor data types, interoperability",
      "users_scale": "200-500 char: countries/agencies deployed, population coverage, installations",
      "access_model": "200-500 char: commercial/government, classification level, licensing, availability"
    },
    "deep_research": {
      "executive_summary": "300-500 char: what it is, who uses it, CBRN classification, key capability, key limitation",
      "key_publications": [
        {
          "title": "Full document/paper title",
          "authors": "Author(s) or Organization",
          "journal": "Journal/Report Name",
          "year": 2024,
          "doi": "10.xxxx/xxxxx or N/A",
          "citations": 0,
          "url": "https://..."
        }
      ],
      "official_guidelines": [
        {
          "title": "Guideline or standard reference",
          "url": "https://...",
          "org": "Issuing Organization (NATO, IAEA, EPA, etc.)"
        }
      ],
      "controversies_and_changes": [
        "YYYY: Event description with factual detail"
      ],
      "ecosystem_connections": [
        {
          "platform": "Connected Platform Name",
          "relationship": "How they interoperate"
        }
      ],
      "key_urls": {
        "main_site": "https://...",
        "product_page": "https://...",
        "documentation": "https://..."
      },
      "timeline": [
        {"year": 2015, "event": "Event description"}
      ],
      "cbrn_assessment": "REQUIRED STRING: CBRN classification (TRUE CBRN OPERATIONAL PLATFORM / CBRN-SPECIFIC MODULE / ADJACENT ENABLING SYSTEM) + applicable function tags (BIO, CHEM, RAD, SENSOR, MODEL, INCIDENT, W&R, C2, DECISIONSUPPORT, FORENSICS, MCM) + brief operational assessment"
    }
  }
}
```

---

## STRICT RULES

1. Every field MUST be filled — no empty strings. Use "(unconfirmed)" if uncertain.
2. Include **2-4 key_publications** (technical papers, procurement documents, press releases, NATO references).
3. Include **2-3 official_guidelines** (NATO STANAGs, IAEA guides, EPA/FEMA directives).
4. Include **2-5 controversies_and_changes** (focus on 2023-2026 developments).
5. Include **3-6 ecosystem_connections** to other CBRN platforms in this list or to biosurveillance platforms.
6. Include **4-8 key_urls**.
7. Include **4-7 timeline events**.
8. `cbrn_assessment` is REQUIRED (non-null) for ALL platforms — classify as: TRUE CBRN OPERATIONAL PLATFORM, CBRN-SPECIFIC MODULE, or ADJACENT ENABLING SYSTEM. Tag with applicable CBRN functions.
9. All URLs must be real and verifiable — do NOT fabricate.
10. Profile fields should UPGRADE the existing summaries below with more specificity.
11. JSON keys MUST exactly match the platform names shown.

---

## THE 20 CBRN PLATFORMS

### #170 — Saab AWR
- **URL:** https://www.saab.com/products/cbrn-detection-and-warning
- **Score:** 88/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_operational
- **Description:** Modular CBRN detection, warning, monitoring and reporting system with national-scale sensor network capability
- **Key facts:** Delivered AWR to Kuwait National Guard 2015; national centre operational Kuwait 2017. Integrates fixed, deployable and mobile sensors. Decision support/sensor fusion. ATP-45 compliant. OPC UA interfaces.

### #171 — ENSCO SENTRY
- **URL:** https://www.ensco.com/national-security/sentry
- **Score:** 87/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_operational
- **Description:** CBRNe warning and decision support for enterprise/facility protection, Pentagon since 2002
- **Key facts:** Installed Pentagon since 2002. PFPA $8.2M (5-year) contract 2017. Multi-facility deployment NCR. Plug-in architecture, unlimited sensor types. SCADA/BMS integration.

### #172 — Two Six SIGMA
- **URL:** https://twosixtech.com/products/sigma/
- **Score:** 84/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_operational
- **Description:** Sensor-agnostic data aggregation and cloud analytics for CBRNE detection networks
- **Key facts:** DARPA SIGMA heritage. AWS Marketplace SaaS. Networked detection. Automated anomaly detection. Web display + smartphone app.

### #173 — Riskaware UrbanAware / HASP Suite
- **URL:** https://www.riskaware.co.uk/hazard-assessment-simulation-and-prediction-hasp-suite/
- **Score:** 82/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_modelling
- **Description:** CBRN/HazMat hazard modelling and decision support, UK Dstl heritage
- **Key facts:** Dstl-developed, Ploughshare Innovations license. UK government Vapoursynth investment 2024. Smiths Detection partnership 2024. Urban dispersion modelling.

### #174 — Observis ObSAS
- **URL:** https://www.observis.fi/en/home/
- **Score:** 83/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_operational
- **Description:** CBRNe situational awareness for vehicles, shelters, mobile labs, critical infrastructure
- **Key facts:** Finnish company, founded 2011. ATP-45 messaging. ObSAS LINK for mobile units. Heterogeneous sensor integration.

### #175 — Bruhn NewTech CBRN Suite
- **URL:** https://bruhn-newtech.com/cbrn-analysis/
- **Score:** 85/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_operational
- **Description:** NATO-aligned CBRN suite: CBRN-Analysis, CBRNE-Frontline, SCIM, SafeVita
- **Key facts:** Denmark, founded 1989. STANAG 2103/ATP-45 and STANAG 2497/AEP-45 compliant. SCIM integrates 50+ sensors. Annual releases. NATO and PfP markets. Integration with Systematic SitaWare.

### #176 — HAVELSAN Counter-CBRN Suite
- **URL:** https://www.havelsan.com/en
- **Score:** 81/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_operational
- **Description:** Turkish defence CBRN suite: MENTOR, BRIDGE, NEWS
- **Key facts:** HAVELSAN est. 1982; TSKGV affiliate. 2023 protocol with Turkey MoND + TUeBITAK MAM. NATO message calculations. ATP-45 templates.

### #177 — Systematic SitaWare CBRN Module
- **URL:** https://systematic.com/int/industries/defence/products/sitaware-suite/sitaware-modules/sitaware-cbrn/
- **Score:** 86/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_command_control
- **Description:** NATO-standard CBRN reporting/warning in SitaWare C4ISR, selected for NATO land C2
- **Key facts:** Danish company. SitaWare HQ selected by NATO for land C2 (Apr 2024). IOC reached Jun 18, 2025. ATP-45/APP-11 AdatP-3 message formats. CBRN 1-6 reporting workflow.

### #178 — FEMA CBRNResponder Network
- **URL:** https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools
- **Score:** 85/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_incident_management
- **Description:** FEMA's national common operating platform integrating RadResponder, ChemResponder, BioResponder, IMAAC
- **Key facts:** Integrates ChemResponder, RadResponder, BioResponder (in dev), IMAAC Portal. 24/7 support hotline. Monthly training webinars. Multi-agency.

### #179 — ARGOS DSS
- **URL:** https://pdc-argos.com/
- **Score:** 86/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_modelling
- **Description:** Multi-hazard decision support in 13 countries covering 400M+ people
- **Key facts:** User Group since 2001. 13 countries, 400M+ people. Nuclear/radiological + chemical modules (2500+ chemicals). URD urban dispersion. Ireland's NEPNA since 2007. DEMA co-development.

### #180 — RODOS / JRODOS
- **URL:** https://www.bfs.de/EN/topics/ion/accident-management/bfs/rlz/rodos.html
- **Score:** 85/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_modelling
- **Description:** Radiological emergency DSS, Java-based JRODOS since 2010
- **Key facts:** Germany BfS/IMIS backbone. JRODOS operational since 2010. Swiss ENSI also uses. KIT maintenance. ELAN operational since 2001 with ~70 institutions. Multi-pathway models.

### #181 — CAMEO Suite (EPA/NOAA)
- **URL:** https://www.epa.gov/cameo
- **Score:** 80/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_planning_tool
- **Description:** Free EPA/NOAA chemical emergency planning (ALOHA, CAMEO Chemicals, MARPLOT)
- **Key facts:** Updated Feb 2026. 4 core programs. Free distribution. ALOHA dispersion model. Chemical datasheets + reactivity prediction.

### #182 — HPAC
- **URL:** (DoD/DTRA system)
- **Score:** 84/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_modelling
- **Description:** DoD/DTRA CBRN dispersion modelling, primary model for IMAAC emergency response plumes
- **Key facts:** DTRA development. Primary IMAAC model. Atmospheric + enclosed spaces. NATO/JCBRN COE training. DTRA school HPAC-N 5-day course.

### #183 — EURDEP / ECURIE
- **URL:** https://remon.jrc.ec.europa.eu/About/Rad-Data-Exchange
- **Score:** 83/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_data_exchange
- **Description:** EU radiological data exchange (EURDEP, est. 1995) + urgent nuclear notification (ECURIE)
- **Key facts:** 39 countries linked. EURDEP est. 1995. Euratom Decision 87/600. BSS Directive 2013/59. JRC portal. At least daily data normally, hourly during emergency.

### #184 — IAEA USIE
- **URL:** https://www.iaea.org/topics/notification-and-reporting
- **Score:** 84/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_data_exchange
- **Description:** IAEA secure information exchange for nuclear/radiological incidents
- **Key facts:** 1,000+ users from 150+ Member States. Launched during Fukushima 2011. INES reporting. Emergency notifications. Encryption + 2FA.

### #185 — CTBTO IDC
- **URL:** https://www.ctbto.org/our-work/international-data-centre
- **Score:** 83/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_treaty_verification
- **Description:** CTBT verification — seismic, hydroacoustic, infrasound, radionuclide monitoring
- **Key facts:** SEL3 within 6 hours (automatic), REB within 2 days. Vienna HQ. NDCs4All initiative. States Signatories funded.

### #186 — SCADACore EnviroLive CBRNE
- **URL:** https://envirolive.scadacore.com/applications/cbrn-cbrne-monitoring/
- **Score:** 76/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_monitoring
- **Description:** Web-based remote CBRNE sensor monitoring with cloud dashboards
- **Key facts:** IIoT/EnviroLive platform. Vendor-agnostic. Real-time dashboards. Commercial subscription.

### #187 — Bertin Environics EnviScreen Operix
- **URL:** https://www.bertin-environics.com/
- **Score:** 80/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_operational
- **Description:** CBRN incident management, C2, and monitoring with COP
- **Key facts:** Canada/Bertin Group. 70+ countries. Sensor + GIS + weather integration. COP workflow.

### #188 — RadResponder
- **URL:** https://www.radresponder.net/
- **Alt URL:** https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network
- **Score:** 82/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_monitoring
- **Description:** FEMA free platform for radiological data management across US responders
- **Key facts:** DHS PIA-054 (Aug 2019, updated Apr 2025). Multi-agency: FEMA, DHS S&T, EPA, DOE. National standard for radiological data.

### #189 — IMAAC Portal
- **URL:** https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac
- **Score:** 83/100 | **Layer:** L4_CBRN_Operational | **Class:** cbrn_modelling
- **Description:** Federal atmospheric dispersion modelling coordination for CBRNE incidents
- **Key facts:** No-cost expert support. Federal position plume products. Interfaces with CBRNResponder. DHS S&T funded development.

---

## ECOSYSTEM CONTEXT

These 20 CBRN platforms form the L4_CBRN_Operational layer in a 189-platform biosurveillance benchmark. They interoperate with each other (e.g., FEMA CBRNResponder integrates RadResponder + IMAAC; Bruhn NewTech integrates with Systematic SitaWare; EURDEP feeds ARGOS). They also connect to biosurveillance platforms in other layers (e.g., GEIS in L3_Defense, CDC NWSS in L1_Surveillance, NCBI in L2_Genomic).

NATO standards: ATP-45, STANAG 2103, STANAG 2497/AEP-45, APP-11/AdatP-3. IAEA standards: INES, Convention on Early Notification. EU: Euratom Directive, BSS Directive 2013/59.

All CBRN platforms MUST have non-null cbrn_assessment. Focus on 2023-2026 developments. All URLs must be real.

Return ONLY the JSON object. No markdown wrapper. No explanation.
