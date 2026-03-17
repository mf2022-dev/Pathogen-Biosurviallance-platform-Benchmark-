#!/usr/bin/env python3
"""
CBRN Deep-Research Profiles — 20 Platforms (#170-189)
=====================================================
"""

BATCH_C_CBRN = {

"Saab AWR": {
    "deep_research": {
        "executive_summary": "Saab AWR (Automatic Warning and Reporting) is a modular CBRN detection, warning, monitoring and reporting system capable of national-scale sensor network deployment. Score 88/100 (highest among CBRN operational platforms). Delivered to Kuwait National Guard (2015); first national CBRN centre operational (2017) with fixed and mobile sensors across the country. Sensor-agnostic architecture integrates a wide range of detection equipment. Decision support and simulated training capabilities. True CBRN Operational Platform.",
        "key_publications": [
            {"title": "Saab CBRN Detection and Warning Systems — Product Overview", "authors": "Saab AB", "journal": "Saab Defence & Security", "year": 2024, "url": "https://www.saab.com/products/cbrn-detection-and-warning"},
            {"title": "Kuwait National CBRN Centre operational with Saab AWR", "authors": "Saab Press Release", "journal": "Saab Newsroom", "year": 2017, "url": "https://www.saab.com/newsroom"}
        ],
        "official_guidelines": [
            {"title": "Saab AWR Product Page", "url": "https://www.saab.com/products/cbrn-detection-and-warning", "org": "Saab"},
            {"title": "NATO STANAG 2103 / ATP-45 (CBRN Warning and Reporting)", "url": "https://www.nato.int/cps/en/natohq/topics_49157.htm", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "Limited public technical documentation; most specifications classified or export-controlled.",
            "Kuwait deployment is the primary publicly documented reference case (2015-2017).",
            "Sensor-agnostic architecture is a key differentiator but integration complexity varies by sensor manufacturer.",
            "2024: Continued development for multi-domain CBRN awareness; details under defence procurement confidentiality."
        ],
        "ecosystem_connections": [
            {"platform": "NATO STANAG 2103/ATP-45", "relationship": "Implements NATO CBRN warning and reporting standards"},
            {"platform": "EURDEP/ECURIE", "relationship": "Can interface with European radiological data exchange networks"},
            {"platform": "National military C2 systems", "relationship": "Integrates into national command and control infrastructure"},
            {"platform": "Third-party CBRN sensors", "relationship": "Sensor-agnostic: supports fixed, deployable, and mobile sensors from multiple manufacturers"}
        ],
        "key_urls": {
            "main_site": "https://www.saab.com/products/cbrn-detection-and-warning",
            "saab_defence": "https://www.saab.com/markets/defence-and-security",
            "newsroom": "https://www.saab.com/newsroom"
        },
        "timeline": [
            {"year": 2010, "event": "Saab AWR system development and initial military deployments"},
            {"year": 2015, "event": "Kuwait National Guard contract delivery"},
            {"year": 2017, "event": "Kuwait national CBRN centre operational with fixed/mobile sensor network"},
            {"year": 2024, "event": "Continued product evolution for multi-domain CBRN awareness"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: Saab AWR provides end-to-end CBRN detection, warning, monitoring and reporting at national scale. Sensor fusion reduces false alarms. Proven national deployment (Kuwait). CBRN function tags: BIO, CHEM, RAD, SENSOR, MODEL, W&R, C2, DECISIONSUPPORT."
    }
},

"ENSCO SENTRY": {
    "deep_research": {
        "executive_summary": "ENSCO SENTRY is a CBRNe warning and decision support system for enterprise/facility protection. Installed at the Pentagon since 2002. PFPA awarded ENSCO a US$8.2M 5-year contract (2017) for software development and on-site support. Plug-in architecture supports unlimited sensor types. Provides time-series data, alarms, and situational awareness. Score 87/100. True CBRN Operational Platform.",
        "key_publications": [
            {"title": "ENSCO SENTRY — National Security Solutions", "authors": "ENSCO Inc.", "journal": "ENSCO Product Brief", "year": 2024, "url": "https://www.ensco.com/national-security/sentry"},
            {"title": "Pentagon Force Protection Agency CBRN sensor integration", "authors": "PFPA/ENSCO", "journal": "Federal contract records", "year": 2017, "url": "https://www.usaspending.gov/"}
        ],
        "official_guidelines": [
            {"title": "ENSCO SENTRY Product Page", "url": "https://www.ensco.com/national-security/sentry", "org": "ENSCO"},
            {"title": "DHS CBRN Detection Standards", "url": "https://www.dhs.gov/science-and-technology/cbrn-defense", "org": "DHS S&T"}
        ],
        "controversies_and_changes": [
            "Most operational details classified due to Pentagon security requirements.",
            "US$8.2M PFPA contract (2017) is the primary publicly documented financial reference.",
            "Plug-in sensor architecture provides extensibility but creates integration testing burden.",
            "Continuous operation since 2002 demonstrates exceptional system maturity and reliability."
        ],
        "ecosystem_connections": [
            {"platform": "Pentagon CBRN sensor network", "relationship": "Primary deployment: integrates building/campus CBRN sensors"},
            {"platform": "DHS CBRN programs", "relationship": "Aligns with DHS CBRN detection and warning frameworks"},
            {"platform": "FEMA CBRNResponder", "relationship": "Potential integration for incident escalation to national response"},
            {"platform": "Third-party sensors", "relationship": "Plug-in architecture supports unlimited sensor types from any manufacturer"}
        ],
        "key_urls": {
            "main_site": "https://www.ensco.com/national-security/sentry",
            "ensco_national_security": "https://www.ensco.com/national-security",
            "usaspending": "https://www.usaspending.gov/"
        },
        "timeline": [
            {"year": 2002, "event": "SENTRY installed at the Pentagon for CBRNe protection"},
            {"year": 2017, "event": "US$8.2M 5-year PFPA sustainment contract awarded"},
            {"year": 2022, "event": "20 years of continuous Pentagon operation"},
            {"year": 2024, "event": "Continued development and sensor integration enhancements"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: SENTRY provides real-time CBRNe warning and decision support for critical facility protection. 22+ years of continuous Pentagon deployment. Plug-in sensor architecture. CBRN function tags: CHEM, BIO, RAD, SENSOR, W&R, DECISIONSUPPORT."
    }
},

"Two Six SIGMA": {
    "deep_research": {
        "executive_summary": "Two Six Technologies SIGMA is a sensor-agnostic data aggregation and cloud analytics platform for CBRN/security detection networks. Score 84/100. Available via AWS Marketplace as SaaS. DARPA heritage. Ingests continuous sensor streams or packaged alerts; applies advanced analysis for automated anomaly detection; outputs web situational awareness display and smartphone app. True CBRN Operational Platform.",
        "key_publications": [
            {"title": "SIGMA Platform — Two Six Technologies", "authors": "Two Six Technologies", "journal": "Product Documentation", "year": 2024, "url": "https://twosixtech.com/products/sigma/"},
            {"title": "DARPA SIGMA program for nuclear/radiological detection", "authors": "DARPA", "journal": "DARPA Programs", "year": 2019, "url": "https://www.darpa.mil/program/sigma"}
        ],
        "official_guidelines": [
            {"title": "SIGMA Product Page", "url": "https://twosixtech.com/products/sigma/", "org": "Two Six Technologies"},
            {"title": "AWS Marketplace — SIGMA", "url": "https://aws.amazon.com/marketplace/seller-profile?id=two-six-technologies", "org": "AWS"}
        ],
        "controversies_and_changes": [
            "DARPA heritage provides strong technical pedigree but raises questions about military-civilian dual use.",
            "SaaS model via AWS Marketplace enables commercial distribution but requires cloud connectivity.",
            "Sensor-agnostic approach creates integration flexibility but testing/certification complexity.",
            "Limited publicly documented case studies beyond DARPA demonstrations."
        ],
        "ecosystem_connections": [
            {"platform": "DARPA SIGMA", "relationship": "Heritage program; SIGMA evolved from DARPA nuclear/radiological detection research"},
            {"platform": "AWS Marketplace", "relationship": "Commercial distribution channel as SaaS"},
            {"platform": "Third-party sensors", "relationship": "Sensor-agnostic: integrates any CBRN sensor stream"},
            {"platform": "DHS CBRN programs", "relationship": "Aligns with DHS detection and monitoring frameworks"}
        ],
        "key_urls": {
            "main_site": "https://twosixtech.com/products/sigma/",
            "twosix": "https://twosixtech.com/",
            "darpa_sigma": "https://www.darpa.mil/program/sigma",
            "aws_marketplace": "https://aws.amazon.com/marketplace/"
        },
        "timeline": [
            {"year": 2016, "event": "DARPA SIGMA program demonstrated urban-scale nuclear detection network"},
            {"year": 2020, "event": "Two Six Technologies spun out from Vencore/DLT; commercialised SIGMA"},
            {"year": 2023, "event": "SIGMA available on AWS Marketplace as SaaS"},
            {"year": 2024, "event": "Enhanced analytics and multi-sensor integration capabilities"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: SIGMA provides sensor-agnostic CBRN data aggregation with cloud analytics and automated anomaly detection. DARPA heritage. SaaS delivery model. CBRN function tags: RAD, CHEM, BIO, SENSOR, MODEL, W&R, DECISIONSUPPORT."
    }
},

"Riskaware UrbanAware / HASP Suite": {
    "deep_research": {
        "executive_summary": "Riskaware's UrbanAware with HASP (Hazard Assessment Simulation and Prediction) Suite provides CBRN hazard modelling and decision support, with Dstl heritage. Score 82/100. Urban dispersion modelling, evacuation and cordon planning. 2024 partnership with Smiths Detection. UK Ministry of Defence provenance via Ploughshare Innovations licensing.",
        "key_publications": [
            {"title": "HASP Suite — Hazard Assessment, Simulation & Prediction", "authors": "Riskaware Ltd", "journal": "Product Documentation", "year": 2024, "url": "https://www.riskaware.co.uk/hazard-assessment-simulation-and-prediction-hasp-suite/"},
            {"title": "UrbanAware: CBRN decision support for urban environments", "authors": "Riskaware", "journal": "Riskaware Solutions", "year": 2024, "url": "https://www.riskaware.co.uk/solutions/cbrn-hazmat/"}
        ],
        "official_guidelines": [
            {"title": "Riskaware HASP Suite Product Page", "url": "https://www.riskaware.co.uk/hazard-assessment-simulation-and-prediction-hasp-suite/", "org": "Riskaware"},
            {"title": "UK Dstl CBRN Research", "url": "https://www.gov.uk/government/organisations/defence-science-and-technology-laboratory", "org": "Dstl"}
        ],
        "controversies_and_changes": [
            "Dstl heritage provides strong scientific basis but much research remains classified.",
            "2024: Partnership with Smiths Detection for integrated sensor-to-model capability.",
            "Urban dispersion modelling accuracy depends on high-resolution building and meteorological data.",
            "Ploughshare Innovations licensing model for commercialising Dstl IP."
        ],
        "ecosystem_connections": [
            {"platform": "Dstl (UK MoD)", "relationship": "HASP Suite based on Dstl research and IP"},
            {"platform": "Smiths Detection", "relationship": "2024 partnership for sensor-to-model integration"},
            {"platform": "Ploughshare Innovations", "relationship": "Licensing body for Dstl intellectual property"},
            {"platform": "NATO CBRN programs", "relationship": "Aligns with NATO CBRN hazard modelling requirements"}
        ],
        "key_urls": {
            "main_site": "https://www.riskaware.co.uk/hazard-assessment-simulation-and-prediction-hasp-suite/",
            "cbrn_solutions": "https://www.riskaware.co.uk/solutions/cbrn-hazmat/",
            "riskaware": "https://www.riskaware.co.uk/",
            "dstl": "https://www.gov.uk/government/organisations/defence-science-and-technology-laboratory"
        },
        "timeline": [
            {"year": 2010, "event": "HASP Suite development based on Dstl research"},
            {"year": 2018, "event": "UrbanAware product launched for urban CBRN decision support"},
            {"year": 2024, "event": "Partnership with Smiths Detection for integrated detection-to-modelling"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: UrbanAware/HASP provides CBRN hazard dispersion modelling and decision support for urban environments. Dstl scientific heritage. CBRN function tags: CHEM, BIO, RAD, MODEL, DECISIONSUPPORT, W&R."
    }
},

"Observis ObSAS": {
    "deep_research": {
        "executive_summary": "Observis ObSAS is a Finnish CBRNe situational awareness and integration platform for vehicles, shelters, mobile labs and critical infrastructure. Score 83/100. Supports ATP-45 messaging and NATO standards. ObSAS LINK for mobile units. Multi-deployment modes (vehicle, shelter, lab, fixed facility). True CBRN Operational Platform.",
        "key_publications": [
            {"title": "ObSAS CBRNe Situational Awareness System", "authors": "Observis Oy", "journal": "Product Documentation", "year": 2024, "url": "https://www.observis.fi/en/home/"},
            {"title": "ObSAS LINK — Mobile CBRNe Integration", "authors": "Observis Oy", "journal": "Product Brief", "year": 2024, "url": "https://www.observis.fi/en/home/"}
        ],
        "official_guidelines": [
            {"title": "Observis Products Overview", "url": "https://www.observis.fi/en/home/", "org": "Observis Oy"},
            {"title": "NATO ATP-45 CBRN Warning and Reporting Standard", "url": "https://www.nato.int/cps/en/natohq/topics_49157.htm", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "Finnish defence export regulations limit publicly available technical details.",
            "ATP-45 compliance ensures NATO interoperability but creates dependency on standard updates.",
            "Multi-deployment versatility (vehicle, shelter, lab, fixed) is a key differentiator.",
            "Limited publicly documented international deployments beyond Nordic/NATO context."
        ],
        "ecosystem_connections": [
            {"platform": "NATO ATP-45/APP-11", "relationship": "Implements NATO CBRN warning and reporting messaging standards"},
            {"platform": "Finnish Defence Forces", "relationship": "Primary national operator"},
            {"platform": "NATO CBRN battalions", "relationship": "Designed for NATO CBRN unit integration"},
            {"platform": "Third-party sensors", "relationship": "Integrates various CBRN detection equipment"}
        ],
        "key_urls": {
            "main_site": "https://www.observis.fi/en/home/",
            "observis": "https://www.observis.fi/"
        },
        "timeline": [
            {"year": 2015, "event": "ObSAS platform development by Observis Oy (Finland)"},
            {"year": 2020, "event": "ObSAS LINK mobile capability introduced"},
            {"year": 2024, "event": "Continued development for multi-domain CBRNe awareness"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: ObSAS provides CBRNe situational awareness and integration across deployment modes (vehicle, shelter, lab, fixed). ATP-45 compliant. CBRN function tags: BIO, CHEM, RAD, SENSOR, W&R, C2."
    }
},

"Bruhn NewTech CBRN Suite": {
    "deep_research": {
        "executive_summary": "Bruhn NewTech provides a NATO-aligned CBRN software family: CBRN-Analysis (hazard prediction and W&R), CBRNE-Frontline (tactical app), SCIM (sensor integration), and SafeVita (50+ sensors from 20+ manufacturers). Score 85/100. Danish company with strong NATO STANAG 2103/ATP-45/AEP-45 alignment. True CBRN Operational Platform.",
        "key_publications": [
            {"title": "CBRN-Analysis — Hazard Prediction and Warning & Reporting", "authors": "Bruhn NewTech A/S", "journal": "Product Documentation", "year": 2024, "url": "https://bruhn-newtech.com/cbrn-analysis/"},
            {"title": "SafeVita — Sensor Integration for CBRN Protection", "authors": "Bruhn NewTech A/S", "journal": "Product Documentation", "year": 2024, "url": "https://bruhn-newtech.com/safevita/"},
            {"title": "CBRNE-Frontline — Tactical CBRN Mobile Application", "authors": "Bruhn NewTech A/S", "journal": "Product Documentation", "year": 2024, "url": "https://bruhn-newtech.com/products/"}
        ],
        "official_guidelines": [
            {"title": "Bruhn NewTech CBRN-Analysis", "url": "https://bruhn-newtech.com/cbrn-analysis/", "org": "Bruhn NewTech"},
            {"title": "NATO STANAG 2103 / ATP-45 / AEP-45", "url": "https://www.nato.int/cps/en/natohq/topics_49157.htm", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "50+ sensors from 20+ manufacturers integrated via SafeVita — most extensive CBRN sensor integration publicly documented.",
            "NATO-standard alignment (STANAG 2103/ATP-45/AEP-45) ensures interoperability but creates standard-version dependency.",
            "Danish defence procurement context; export to NATO/partner nations under Danish export controls.",
            "SCIM sensor integration middleware is a key differentiator for multi-vendor environments."
        ],
        "ecosystem_connections": [
            {"platform": "NATO STANAG 2103/ATP-45/AEP-45", "relationship": "Full NATO standard compliance for CBRN W&R"},
            {"platform": "20+ sensor manufacturers", "relationship": "SafeVita integrates 50+ sensors from 20+ manufacturers"},
            {"platform": "SitaWare", "relationship": "Can integrate with Systematic SitaWare C2 system"},
            {"platform": "National CBRN centres", "relationship": "Deployed with NATO and national CBRN forces"}
        ],
        "key_urls": {
            "main_site": "https://bruhn-newtech.com/cbrn-analysis/",
            "products": "https://bruhn-newtech.com/products/",
            "safevita": "https://bruhn-newtech.com/safevita/",
            "about": "https://bruhn-newtech.com/about/"
        },
        "timeline": [
            {"year": 2008, "event": "Bruhn NewTech founded in Denmark; CBRN software development begins"},
            {"year": 2015, "event": "CBRN-Analysis achieves NATO STANAG compliance"},
            {"year": 2020, "event": "SafeVita sensor integration platform launched (50+ sensors)"},
            {"year": 2024, "event": "Full product family: CBRN-Analysis, CBRNE-Frontline, SCIM, SafeVita"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: Bruhn NewTech provides end-to-end NATO-standard CBRN capability: hazard prediction, warning & reporting, sensor integration (50+ sensors from 20+ manufacturers), and tactical mobile app. CBRN function tags: BIO, CHEM, RAD, SENSOR, MODEL, W&R, DECISIONSUPPORT, FORENSICS."
    }
},

"HAVELSAN Counter-CBRN Suite": {
    "deep_research": {
        "executive_summary": "HAVELSAN provides a Counter-CBRN software suite: MENTOR (information management), BRIDGE (sensor integration), and NEWS (warning and reporting). Score 81/100. Turkish defence company. Supports event management, NATO-message calculations, hazard mapping, route planning and ERG support. TUBiTAK MAM cooperation for CBRN defence R&D.",
        "key_publications": [
            {"title": "HAVELSAN Counter-CBRN Solutions", "authors": "HAVELSAN A.S.", "journal": "HAVELSAN Defence Solutions", "year": 2024, "url": "https://www.havelsan.com/en"},
            {"title": "TUBiTAK MAM-HAVELSAN CBRN Defence Cooperation", "authors": "TUBiTAK MAM", "journal": "TUBiTAK MAM Press", "year": 2023, "url": "https://mam.tubitak.gov.tr/en/signatures-signed-between-tubitak-mammsb-and-havelsan-for-cbrn-defense-cooperation/"}
        ],
        "official_guidelines": [
            {"title": "HAVELSAN Product Overview", "url": "https://www.havelsan.com/en/about-us", "org": "HAVELSAN"},
            {"title": "NATO CBRN Defence Standards", "url": "https://www.nato.int/cps/en/natohq/topics_49157.htm", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "Turkish defence export context: availability subject to Turkish government export approvals.",
            "TUBiTAK MAM cooperation signals R&D investment in indigenous CBRN capability.",
            "Limited publicly documented international deployments beyond Turkish Armed Forces.",
            "NATO-aligned but Turkish strategic autonomy goals may influence standards evolution."
        ],
        "ecosystem_connections": [
            {"platform": "Turkish Armed Forces", "relationship": "Primary national operator"},
            {"platform": "TUBiTAK MAM", "relationship": "R&D cooperation partner for CBRN defence technology"},
            {"platform": "NATO ATP-45", "relationship": "Implements NATO CBRN warning and reporting standards"},
            {"platform": "ERG (Emergency Response Guidebook)", "relationship": "ERG integration for hazmat response support"}
        ],
        "key_urls": {
            "main_site": "https://www.havelsan.com/en",
            "about": "https://www.havelsan.com/en/about-us",
            "tubitak_cooperation": "https://mam.tubitak.gov.tr/en/signatures-signed-between-tubitak-mammsb-and-havelsan-for-cbrn-defense-cooperation/"
        },
        "timeline": [
            {"year": 2015, "event": "HAVELSAN Counter-CBRN suite development initiated"},
            {"year": 2020, "event": "MENTOR/BRIDGE/NEWS components operational with Turkish Armed Forces"},
            {"year": 2023, "event": "TUBiTAK MAM-HAVELSAN CBRN defence cooperation agreement signed"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: HAVELSAN MENTOR/BRIDGE/NEWS provides CBRN information management, sensor integration, and warning & reporting for national defence. CBRN function tags: BIO, CHEM, RAD, SENSOR, W&R, INCIDENT, C2."
    }
},

"Systematic SitaWare CBRN Module": {
    "deep_research": {
        "executive_summary": "Systematic's SitaWare CBRN Module provides NATO-standard ATP-45/APP-11 CBRN reporting and warning within the SitaWare C4ISR suite. Score 86/100. Danish company. DEMETER IOC milestone in NATO context. Enhances command-and-control situational awareness with CBRN overlay. CBRN-Specific Module within broader C2 system.",
        "key_publications": [
            {"title": "SitaWare CBRN Module", "authors": "Systematic A/S", "journal": "Product Documentation", "year": 2024, "url": "https://systematic.com/int/industries/defence/products/sitaware-suite/sitaware-modules/sitaware-cbrn/"},
            {"title": "SitaWare Suite — C4ISR Solutions", "authors": "Systematic A/S", "journal": "Product Overview", "year": 2024, "url": "https://systematic.com/int/industries/defence/products/sitaware-suite/"}
        ],
        "official_guidelines": [
            {"title": "SitaWare CBRN Module Product Page", "url": "https://systematic.com/int/industries/defence/products/sitaware-suite/sitaware-modules/sitaware-cbrn/", "org": "Systematic"},
            {"title": "NATO ATP-45 / APP-11 Standards", "url": "https://www.nato.int/cps/en/natohq/topics_49157.htm", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "CBRN module is part of the larger SitaWare C2 ecosystem; standalone deployment not typical.",
            "DEMETER program IOC milestone demonstrates NATO operational adoption.",
            "ATP-45/APP-11 compliance ensures interoperability but ties to NATO standard update cycles.",
            "Systematic's broad C2 customer base (30+ nations) provides wide deployment potential."
        ],
        "ecosystem_connections": [
            {"platform": "SitaWare Suite", "relationship": "CBRN module is integral to SitaWare C4ISR ecosystem"},
            {"platform": "NATO ATP-45/APP-11", "relationship": "Implements full NATO CBRN reporting and warning procedures"},
            {"platform": "Bruhn NewTech", "relationship": "Danish ecosystem partner; potential integration with CBRN-Analysis"},
            {"platform": "NATO DEMETER program", "relationship": "SitaWare involved in NATO CBRN program milestones"},
            {"platform": "30+ national armed forces", "relationship": "SitaWare Suite deployed with military forces globally"}
        ],
        "key_urls": {
            "main_site": "https://systematic.com/int/industries/defence/products/sitaware-suite/sitaware-modules/sitaware-cbrn/",
            "sitaware_suite": "https://systematic.com/int/industries/defence/products/sitaware-suite/",
            "systematic": "https://systematic.com/"
        },
        "timeline": [
            {"year": 2005, "event": "SitaWare Suite initial development by Systematic"},
            {"year": 2015, "event": "CBRN module added with ATP-45 compliance"},
            {"year": 2020, "event": "DEMETER IOC milestone in NATO CBRN context"},
            {"year": 2024, "event": "SitaWare deployed with 30+ national armed forces; CBRN module matured"}
        ],
        "cbrn_assessment": "cbrn_specific_module: SitaWare CBRN Module provides NATO ATP-45/APP-11 CBRN reporting and warning within a mature C4ISR system deployed by 30+ nations. CBRN function tags: W&R, C2, DECISIONSUPPORT."
    }
},

"FEMA CBRNResponder Network": {
    "deep_research": {
        "executive_summary": "FEMA CBRNResponder Network is the US national common operating platform concept for CBRN incident data-sharing, integrating RadResponder, ChemResponder, BioResponder (in development), and IMAAC Portal. Score 85/100. Thousands of organisations engaged. 24/7 hotline and monthly training. Governance and workflow integration across federal/state/local responders.",
        "key_publications": [
            {"title": "FEMA CBRN Tools and Resources", "authors": "FEMA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools"},
            {"title": "RadResponder Network — Standardized Radiological Data", "authors": "FEMA/DHS", "journal": "DHS Publication", "year": 2023, "url": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network"}
        ],
        "official_guidelines": [
            {"title": "FEMA CBRNResponder Network", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools", "org": "FEMA"},
            {"title": "DHS CBRN Office Resources", "url": "https://www.dhs.gov/science-and-technology/cbrn-defense", "org": "DHS"}
        ],
        "controversies_and_changes": [
            "BioResponder component still in development; network currently strongest for radiological (RadResponder).",
            "ChemResponder capability growing but less mature than radiological tools.",
            "Cross-agency coordination challenges between FEMA, DHS, DoD, and state/local responders.",
            "2025: Continued emphasis on training and exercises; governance model maturing."
        ],
        "ecosystem_connections": [
            {"platform": "RadResponder", "relationship": "Radiological data management component of CBRNResponder Network"},
            {"platform": "IMAAC Portal", "relationship": "Atmospheric dispersion modelling products feed into CBRNResponder"},
            {"platform": "HPAC", "relationship": "DoD dispersion modelling engine behind IMAAC products"},
            {"platform": "CAMEO Suite", "relationship": "Chemical emergency planning tools complement ChemResponder"},
            {"platform": "DHS S&T", "relationship": "Technology development and standards support"},
            {"platform": "State/local responders", "relationship": "Thousands of organisations participate in the network"}
        ],
        "key_urls": {
            "main_site": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools",
            "radresponder": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network",
            "imaac": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac",
            "fema": "https://www.fema.gov/"
        },
        "timeline": [
            {"year": 2011, "event": "RadResponder Network established post-Fukushima"},
            {"year": 2018, "event": "CBRNResponder Network concept formalised by FEMA"},
            {"year": 2020, "event": "ChemResponder development; COVID-19 shifted priorities"},
            {"year": 2024, "event": "BioResponder component development; thousands of organisations engaged"},
            {"year": 2025, "event": "National backbone concept maturing; 24/7 hotline and monthly training"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: FEMA CBRNResponder Network is the US national common operating platform for multi-hazard CBRN incident response, integrating radiological, chemical, biological, and atmospheric modelling tools. CBRN function tags: BIO, CHEM, RAD, INCIDENT, W&R, C2, DECISIONSUPPORT, MCM."
    }
},

"ARGOS DSS": {
    "deep_research": {
        "executive_summary": "ARGOS is a mature multi-hazard decision support system for emergency management of CBRN releases, used in 13 countries. Score 86/100. Developed by PDC (Prolog Development Centre) and Danish Emergency Management Agency (DEMA). GIS-based consequence assessment with atmospheric dispersion models. Supports nuclear, radiological, chemical, and biological scenarios.",
        "key_publications": [
            {"title": "ARGOS Decision Support System for Nuclear and Radiological Emergencies", "authors": "Hoe S et al.", "journal": "Journal of Environmental Radioactivity", "year": 2002, "doi": "10.1016/S0265-931X(01)00062-4", "url": "https://www.sciencedirect.com/science/article/pii/S0265931X01000624"},
            {"title": "ARGOS: Decision support for nuclear emergencies", "authors": "PDC/DEMA", "journal": "PDC-ARGOS Documentation", "year": 2024, "url": "https://pdc-argos.com/"}
        ],
        "official_guidelines": [
            {"title": "ARGOS Product Overview", "url": "https://pdc-argos.com/", "org": "PDC"},
            {"title": "IAEA Emergency Preparedness and Response", "url": "https://www.iaea.org/topics/emergency-preparedness-and-response", "org": "IAEA"}
        ],
        "controversies_and_changes": [
            "13-country deployment provides strong operational validation.",
            "Model accuracy depends on quality of meteorological data and source term estimation.",
            "Integration between ARGOS and EURDEP/ECURIE data for real-time radiological monitoring.",
            "2024: Ongoing development for multi-hazard (chemical/biological) scenario support."
        ],
        "ecosystem_connections": [
            {"platform": "EURDEP/ECURIE", "relationship": "Integrates European radiological monitoring data"},
            {"platform": "RODOS/JRODOS", "relationship": "Complementary European radiological DSS; ARGOS used in Nordic/partner countries"},
            {"platform": "IAEA USIE", "relationship": "International incident information exchange feeds into ARGOS scenarios"},
            {"platform": "National Met Services", "relationship": "Meteorological data input for dispersion modelling"},
            {"platform": "DEMA", "relationship": "Danish Emergency Management Agency as primary operational user"}
        ],
        "key_urls": {
            "main_site": "https://pdc-argos.com/",
            "technology": "https://pdc-argos.com/technology/",
            "dema": "https://www.brs.dk/en/"
        },
        "timeline": [
            {"year": 1990, "event": "ARGOS development initiated post-Chernobyl"},
            {"year": 2002, "event": "Hoe et al. publication in J. Environmental Radioactivity"},
            {"year": 2010, "event": "Expanded to 13-country deployment; multi-hazard support"},
            {"year": 2024, "event": "Continued development for CBRN consequence assessment"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: ARGOS provides multi-hazard CBRN consequence assessment and decision support, operational in 13 countries. GIS-based with atmospheric dispersion modelling. CBRN function tags: CHEM, BIO, RAD, MODEL, DECISIONSUPPORT, W&R."
    }
},

"RODOS / JRODOS": {
    "deep_research": {
        "executive_summary": "RODOS (Real-time Online Decision Support) / JRODOS (Java-based RODOS) is a radiological emergency prognosis and decision support system. Score 85/100. JRODOS operational since 2010. Used in Germany and Switzerland. Multi-pathway dose assessment models. Predicts contamination, doses, and supports protective action decisions. Developed by KIT (Germany).",
        "key_publications": [
            {"title": "RODOS: Decision support system for off-site emergency management in Europe", "authors": "Ehrhardt J, Weis A (eds.)", "journal": "Radiation Protection Dosimetry", "year": 2000, "url": "https://academic.oup.com/rpd/article-abstract/73/1-4/35/1602032"},
            {"title": "JRODOS: an updated DSS for nuclear emergency response", "authors": "Ievdin I et al.", "journal": "Radioprotection", "year": 2010, "doi": "10.1051/radiopro/2010016", "url": "https://www.radioprotection.org/articles/radiopro/abs/2010/05/radiopro100016/radiopro100016.html"}
        ],
        "official_guidelines": [
            {"title": "BfS RODOS Documentation", "url": "https://www.bfs.de/EN/topics/ion/accident-management/bfs/rlz/rodos.html", "org": "BfS (Germany)"},
            {"title": "KIT JRODOS Development", "url": "https://www.kit.edu/english/index.php", "org": "KIT"}
        ],
        "controversies_and_changes": [
            "Transition from original RODOS to Java-based JRODOS required significant redevelopment effort.",
            "Model complexity requires expert users for accurate scenario configuration.",
            "European focus; limited adoption outside EU (ARGOS more widely deployed globally).",
            "Ongoing KIT development for enhanced modelling capabilities."
        ],
        "ecosystem_connections": [
            {"platform": "EURDEP/ECURIE", "relationship": "Monitoring data from EURDEP feeds RODOS/JRODOS scenarios"},
            {"platform": "ARGOS DSS", "relationship": "Complementary radiological DSS; RODOS used in Germany/Switzerland, ARGOS in Nordic countries"},
            {"platform": "IAEA USIE", "relationship": "International incident data informs RODOS scenario inputs"},
            {"platform": "BfS (Germany)", "relationship": "Primary operational user in Germany"},
            {"platform": "KIT", "relationship": "Develops and maintains JRODOS"}
        ],
        "key_urls": {
            "main_site": "https://www.bfs.de/EN/topics/ion/accident-management/bfs/rlz/rodos.html",
            "kit": "https://www.kit.edu/english/",
            "radioprotection": "https://www.radioprotection.org/"
        },
        "timeline": [
            {"year": 1990, "event": "RODOS development initiated as EU project post-Chernobyl"},
            {"year": 2000, "event": "RODOS operational; Ehrhardt & Weis publication"},
            {"year": 2010, "event": "JRODOS (Java-based) becomes operational; replaces original RODOS"},
            {"year": 2024, "event": "Continued JRODOS development by KIT; used in Germany/Switzerland"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: RODOS/JRODOS provides radiological emergency prognosis and decision support with multi-pathway dose assessment. Operational in Germany and Switzerland. CBRN function tags: RAD, MODEL, DECISIONSUPPORT, W&R."
    }
},

"CAMEO Suite (EPA/NOAA)": {
    "deep_research": {
        "executive_summary": "CAMEO (Computer-Aided Management of Emergency Operations) Suite is EPA/NOAA's set of free software tools for chemical emergency planning and response. Score 80/100. Includes CAMEO Data Manager, CAMEO Chemicals, MARPLOT (mapping), and ALOHA (atmospheric dispersion). Updated Feb 2026. Used by thousands of US first responders and LEPCs. True CBRN Operational Platform (chemical domain).",
        "key_publications": [
            {"title": "CAMEO Suite — EPA Chemical Emergency Tools", "authors": "US EPA / NOAA", "journal": "EPA.gov", "year": 2026, "url": "https://www.epa.gov/cameo"},
            {"title": "ALOHA Atmospheric Dispersion Model", "authors": "NOAA/EPA", "journal": "NOAA ORR", "year": 2024, "url": "https://response.restoration.noaa.gov/oil-and-chemical-spills/chemical-spills/response-tools/aloha.html"}
        ],
        "official_guidelines": [
            {"title": "CAMEO Suite Download and Documentation", "url": "https://www.epa.gov/cameo", "org": "EPA"},
            {"title": "ALOHA User's Manual", "url": "https://response.restoration.noaa.gov/sites/default/files/aloha-user-manual.pdf", "org": "NOAA"}
        ],
        "controversies_and_changes": [
            "Feb 2026: CAMEO Suite updated with new chemical data and ALOHA model improvements.",
            "Desktop-based architecture limits modern web/mobile access.",
            "ALOHA dispersion model is simplified compared to more sophisticated military models (HPAC).",
            "Free availability ensures wide adoption but limited support compared to commercial alternatives."
        ],
        "ecosystem_connections": [
            {"platform": "FEMA CBRNResponder", "relationship": "CAMEO tools complement ChemResponder component"},
            {"platform": "HPAC", "relationship": "More sophisticated military dispersion model; CAMEO for civilian first responders"},
            {"platform": "LEPCs", "relationship": "Local Emergency Planning Committees use CAMEO for Tier II reporting"},
            {"platform": "EPCRA/TRI", "relationship": "CAMEO supports EPA EPCRA compliance and Tier II chemical inventory"}
        ],
        "key_urls": {
            "main_site": "https://www.epa.gov/cameo",
            "aloha": "https://response.restoration.noaa.gov/oil-and-chemical-spills/chemical-spills/response-tools/aloha.html",
            "cameo_chemicals": "https://cameochemicals.noaa.gov/",
            "marplot": "https://www.epa.gov/cameo/marplot-software"
        },
        "timeline": [
            {"year": 1988, "event": "CAMEO Suite created by EPA and NOAA for EPCRA compliance"},
            {"year": 2000, "event": "ALOHA atmospheric dispersion model integrated"},
            {"year": 2015, "event": "CAMEO Chemicals web version launched"},
            {"year": 2024, "event": "Ongoing updates to chemical database and ALOHA model"},
            {"year": 2026, "event": "Feb 2026 update with new chemical data and model improvements"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: CAMEO Suite provides chemical emergency planning and response tools including atmospheric dispersion modelling (ALOHA). Free, widely deployed with US first responders. CBRN function tags: CHEM, MODEL, DECISIONSUPPORT, INCIDENT."
    }
},

"HPAC": {
    "deep_research": {
        "executive_summary": "HPAC (Hazard Prediction and Assessment Capability) is the US DoD/DTRA's premier CBRN dispersion modelling system. Score 84/100. Used for IMAAC plume modelling products. Supports chemical, biological, nuclear, and radiological release scenarios. Meteorology and geography-based dispersion prediction. Restricted military/government access only.",
        "key_publications": [
            {"title": "HPAC — Hazard Prediction and Assessment Capability", "authors": "DTRA", "journal": "DTRA Documentation", "year": 2024, "url": "https://www.epa.gov/emergency-response-research/biological-response-tools"},
            {"title": "DTRA CBRN Modelling and Simulation", "authors": "DTRA", "journal": "DTRA Programs", "year": 2023, "url": "https://www.dtra.mil/"}
        ],
        "official_guidelines": [
            {"title": "DTRA HPAC Resources", "url": "https://www.dtra.mil/", "org": "DTRA/DoD"},
            {"title": "IMAAC Modelling Framework", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac", "org": "FEMA/IMAAC"}
        ],
        "controversies_and_changes": [
            "Restricted military/government access limits public scrutiny and validation.",
            "HPAC provides the modelling engine behind IMAAC plume products for civilian response.",
            "Model accuracy depends on source term estimation and meteorological data quality.",
            "Ongoing modernisation under DTRA for next-generation CBRN modelling."
        ],
        "ecosystem_connections": [
            {"platform": "IMAAC Portal", "relationship": "HPAC provides the modelling engine for IMAAC atmospheric assessment products"},
            {"platform": "FEMA CBRNResponder", "relationship": "IMAAC products (powered by HPAC) feed into national CBRN response"},
            {"platform": "CAMEO/ALOHA", "relationship": "Civilian-grade complement; HPAC is more sophisticated military-grade"},
            {"platform": "DTRA", "relationship": "HPAC developed and maintained by Defense Threat Reduction Agency"},
            {"platform": "National Weather Service", "relationship": "Meteorological data input for dispersion calculations"}
        ],
        "key_urls": {
            "main_site": "https://www.dtra.mil/",
            "imaac": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac",
            "epa_bio_tools": "https://www.epa.gov/emergency-response-research/biological-response-tools"
        },
        "timeline": [
            {"year": 1995, "event": "HPAC development by DSWA (now DTRA)"},
            {"year": 2003, "event": "IMAAC established using HPAC as primary modelling engine"},
            {"year": 2015, "event": "HPAC modernisation for enhanced biological and nuclear scenarios"},
            {"year": 2024, "event": "Continued DTRA development for next-generation CBRN modelling"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: HPAC is the DoD's premier CBRN dispersion modelling system, powering IMAAC products for national incident response. CBRN function tags: CHEM, BIO, RAD, MODEL, DECISIONSUPPORT."
    }
},

"EURDEP / ECURIE": {
    "deep_research": {
        "executive_summary": "EURDEP (European Radiological Data Exchange Platform) provides near-real-time radiological data exchange across 39 countries; ECURIE (European Community Urgent Radiological Information Exchange) provides 24/7 emergency notification. Score 83/100. Operated by European Commission/JRC. Critical international radiological data sharing infrastructure. Hourly updates during emergencies.",
        "key_publications": [
            {"title": "EURDEP: European Radiological Data Exchange Platform", "authors": "EC Joint Research Centre", "journal": "JRC Documentation", "year": 2024, "url": "https://remon.jrc.ec.europa.eu/About/Rad-Data-Exchange"},
            {"title": "EU Radiological Emergency Monitoring and Information Exchange", "authors": "European Commission", "journal": "EC Publications", "year": 2022, "url": "https://ec.europa.eu/energy/topics/nuclear-energy/radiation-protection_en"}
        ],
        "official_guidelines": [
            {"title": "EURDEP Data Exchange Portal", "url": "https://remon.jrc.ec.europa.eu/About/Rad-Data-Exchange", "org": "EC JRC"},
            {"title": "ECURIE Emergency Notification System", "url": "https://ec.europa.eu/energy/topics/nuclear-energy/radiation-protection_en", "org": "European Commission"}
        ],
        "controversies_and_changes": [
            "39-country participation provides excellent European coverage but non-EU countries have variable data quality.",
            "EURDEP data exchange frequency increases to hourly during radiological emergencies.",
            "Dependency on national radiological monitoring networks for data quality and timeliness.",
            "Integration with ARGOS and RODOS/JRODOS for decision support."
        ],
        "ecosystem_connections": [
            {"platform": "ARGOS DSS", "relationship": "Monitoring data feeds into ARGOS consequence assessment"},
            {"platform": "RODOS/JRODOS", "relationship": "Monitoring data feeds into RODOS decision support"},
            {"platform": "IAEA USIE", "relationship": "Complementary international notification system (EURDEP=EU, USIE=global)"},
            {"platform": "CTBTO IDC", "relationship": "Complementary global monitoring; CTBTO for treaty verification, EURDEP for civil protection"},
            {"platform": "National radiological monitoring networks", "relationship": "Data providers across 39 countries"}
        ],
        "key_urls": {
            "main_site": "https://remon.jrc.ec.europa.eu/About/Rad-Data-Exchange",
            "jrc": "https://joint-research-centre.ec.europa.eu/",
            "ec_radiation": "https://ec.europa.eu/energy/topics/nuclear-energy/radiation-protection_en"
        },
        "timeline": [
            {"year": 1986, "event": "ECURIE established following Chernobyl disaster"},
            {"year": 1995, "event": "EURDEP operational for routine radiological data exchange"},
            {"year": 2011, "event": "Enhanced during Fukushima response; frequency increased globally"},
            {"year": 2024, "event": "39 countries participating; hourly emergency updates; JRC operation"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: EURDEP/ECURIE provides critical European radiological data exchange and emergency notification across 39 countries. Essential infrastructure for radiological emergency response. CBRN function tags: RAD, SENSOR, W&R, C2."
    }
},

"IAEA USIE": {
    "deep_research": {
        "executive_summary": "IAEA USIE (Unified System for Information Exchange in Incidents and Emergencies) is the secure portal for urgent information exchange during nuclear/radiological incidents. Score 84/100. 1,000+ users from 150+ Member States. Operated by IAEA Incident and Emergency Centre (IEC). Supports emergency notifications, follow-ups, assistance requests, and INES reporting. Treaty-based international notification obligation.",
        "key_publications": [
            {"title": "IAEA Notification and Reporting — USIE", "authors": "IAEA", "journal": "IAEA.org", "year": 2024, "url": "https://www.iaea.org/topics/notification-and-reporting"},
            {"title": "Convention on Early Notification of a Nuclear Accident", "authors": "IAEA", "journal": "IAEA Legal Series", "year": 1986, "url": "https://www.iaea.org/topics/nuclear-safety-conventions/convention-early-notification-nuclear-accident"}
        ],
        "official_guidelines": [
            {"title": "IAEA USIE Portal", "url": "https://www.iaea.org/topics/notification-and-reporting", "org": "IAEA"},
            {"title": "IAEA Emergency Preparedness and Response", "url": "https://www.iaea.org/topics/emergency-preparedness-and-response", "org": "IAEA"},
            {"title": "IRIX — International Radiological Information Exchange Format", "url": "https://www.iaea.org/topics/emergency-preparedness-and-response/international-radiological-information-exchange-irix-format", "org": "IAEA"}
        ],
        "controversies_and_changes": [
            "Treaty-based obligation: Convention on Early Notification requires member states to report incidents.",
            "IRIX format standardisation ongoing; varying national adoption of IRIX data exchange format.",
            "Secure portal access restricted to authorised national competent authorities.",
            "Response time and data quality depend on national reporting capabilities."
        ],
        "ecosystem_connections": [
            {"platform": "EURDEP/ECURIE", "relationship": "Complementary: USIE for global IAEA notification, ECURIE for European regional"},
            {"platform": "CTBTO IDC", "relationship": "Complementary: USIE for incident response, CTBTO for treaty verification monitoring"},
            {"platform": "ARGOS/RODOS", "relationship": "Incident information from USIE informs national DSS scenario inputs"},
            {"platform": "National Nuclear Regulatory Bodies", "relationship": "Primary users and data submitters for 150+ member states"},
            {"platform": "INES", "relationship": "International Nuclear Event Scale reporting via USIE"}
        ],
        "key_urls": {
            "main_site": "https://www.iaea.org/topics/notification-and-reporting",
            "iaea_epr": "https://www.iaea.org/topics/emergency-preparedness-and-response",
            "irix": "https://www.iaea.org/topics/emergency-preparedness-and-response/international-radiological-information-exchange-irix-format",
            "convention": "https://www.iaea.org/topics/nuclear-safety-conventions/convention-early-notification-nuclear-accident"
        },
        "timeline": [
            {"year": 1986, "event": "Convention on Early Notification signed following Chernobyl"},
            {"year": 2000, "event": "USIE portal established for secure incident information exchange"},
            {"year": 2011, "event": "Critical role during Fukushima; USIE used extensively for international coordination"},
            {"year": 2020, "event": "IRIX format standardisation; 1,000+ users from 150+ member states"},
            {"year": 2024, "event": "Continued operation and IRIX format development"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: IAEA USIE is the international treaty-based system for nuclear/radiological incident notification and information exchange. 150+ member states. CBRN function tags: RAD, W&R, INCIDENT, C2."
    }
},

"CTBTO IDC": {
    "deep_research": {
        "executive_summary": "CTBTO International Data Centre processes data from the International Monitoring System (IMS) into automated event lists (SEL) and analyst-reviewed Reviewed Event Bulletins (REB) for nuclear test treaty verification. Score 83/100. 337 monitoring facilities worldwide (seismic, hydroacoustic, infrasound, radionuclide). Operated by CTBTO Preparatory Commission in Vienna. Treaty verification foundation with dual civilian applications.",
        "key_publications": [
            {"title": "CTBTO International Data Centre — Overview", "authors": "CTBTO", "journal": "CTBTO.org", "year": 2024, "url": "https://www.ctbto.org/our-work/international-data-centre"},
            {"title": "The International Monitoring System", "authors": "CTBTO", "journal": "CTBTO Publications", "year": 2023, "url": "https://www.ctbto.org/our-work/international-monitoring-system"},
            {"title": "CTBTO verification of the 2006 DPRK nuclear test", "authors": "CTBTO", "journal": "Science & Global Security", "year": 2007, "url": "https://www.ctbto.org/our-work/detecting-nuclear-tests"}
        ],
        "official_guidelines": [
            {"title": "CTBTO IDC Products and Services", "url": "https://www.ctbto.org/our-work/international-data-centre", "org": "CTBTO"},
            {"title": "CTBTO International Monitoring System", "url": "https://www.ctbto.org/our-work/international-monitoring-system", "org": "CTBTO"}
        ],
        "controversies_and_changes": [
            "Treaty not yet in force (CTBT); Preparatory Commission operates provisionally.",
            "Data access restricted to National Data Centres of signatory states.",
            "Dual-use applications: IMS data valuable for earthquake, tsunami, and nuclear accident monitoring.",
            "2024: Continued IMS buildout; 337 of planned facilities operational."
        ],
        "ecosystem_connections": [
            {"platform": "IAEA USIE", "relationship": "Complementary: CTBTO for verification monitoring, USIE for incident notification"},
            {"platform": "EURDEP/ECURIE", "relationship": "Radionuclide data can complement European monitoring during nuclear events"},
            {"platform": "National Data Centres", "relationship": "Signatory state NDCs receive and analyse CTBTO IDC products"},
            {"platform": "IMS stations (337)", "relationship": "Global network of seismic, hydroacoustic, infrasound, and radionuclide stations"}
        ],
        "key_urls": {
            "main_site": "https://www.ctbto.org/our-work/international-data-centre",
            "ims": "https://www.ctbto.org/our-work/international-monitoring-system",
            "detecting": "https://www.ctbto.org/our-work/detecting-nuclear-tests",
            "ctbto": "https://www.ctbto.org/"
        },
        "timeline": [
            {"year": 1996, "event": "CTBT opened for signature; CTBTO Preparatory Commission established"},
            {"year": 2000, "event": "IDC begins operations; initial IMS stations operational"},
            {"year": 2006, "event": "DPRK nuclear test detected and characterised by IMS/IDC"},
            {"year": 2017, "event": "DPRK sixth nuclear test: IDC provided rapid analysis within hours"},
            {"year": 2024, "event": "337 monitoring facilities operational; continued IMS expansion"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: CTBTO IDC provides global nuclear test verification monitoring with 337 IMS facilities. Data products (SEL, REB) are foundation for treaty verification and have critical dual-use for nuclear/radiological event detection. CBRN function tags: RAD, SENSOR, MODEL, W&R."
    }
},

"SCADACore EnviroLive CBRNE": {
    "deep_research": {
        "executive_summary": "SCADACore EnviroLive CBRNE is a web-based remote monitoring platform for HSE and CBRNE sensors. Score 76/100 (lowest in CBRN category). Cloud dashboards, data archival, real-time alerts. Collects data from CBRNE devices for viewing, analysis, and reporting. No plume modelling capability. Commercial monitoring service.",
        "key_publications": [
            {"title": "EnviroLive CBRNE Monitoring", "authors": "SCADACore", "journal": "SCADACore Product", "year": 2024, "url": "https://envirolive.scadacore.com/applications/cbrn-cbrne-monitoring/"}
        ],
        "official_guidelines": [
            {"title": "EnviroLive CBRNE Product Page", "url": "https://envirolive.scadacore.com/applications/cbrn-cbrne-monitoring/", "org": "SCADACore"}
        ],
        "controversies_and_changes": [
            "Limited CBRN-specific functionality compared to dedicated military platforms.",
            "No atmospheric dispersion modelling or hazard prediction capability.",
            "Cloud-based architecture raises data sovereignty concerns for defence applications.",
            "Best suited for industrial/commercial HSE monitoring with CBRNE sensor integration."
        ],
        "ecosystem_connections": [
            {"platform": "Third-party CBRNE sensors", "relationship": "Integrates various CBRNE detection devices for remote monitoring"},
            {"platform": "Industrial IoT platforms", "relationship": "Complementary remote monitoring for HSE compliance"},
            {"platform": "SCADA systems", "relationship": "Can interface with industrial control systems for environmental monitoring"}
        ],
        "key_urls": {
            "main_site": "https://envirolive.scadacore.com/applications/cbrn-cbrne-monitoring/",
            "scadacore": "https://www.scadacore.com/"
        },
        "timeline": [
            {"year": 2015, "event": "SCADACore EnviroLive platform launched for industrial monitoring"},
            {"year": 2020, "event": "CBRNE monitoring application added"},
            {"year": 2024, "event": "Cloud dashboard enhancements; continued sensor integration"}
        ],
        "cbrn_assessment": "adjacent_enabling_system: SCADACore EnviroLive provides basic CBRNE sensor data collection and monitoring via web dashboards. Lacks hazard modelling or decision support. Suited for industrial/commercial HSE monitoring. CBRN function tags: SENSOR."
    }
},

"Bertin Environics EnviScreen Operix": {
    "deep_research": {
        "executive_summary": "Bertin Environics (now part of CNIM Group) provides EnviScreen/Operix for CBRN incident management, command/control and monitoring with common operating picture (COP). Score 80/100. Integrates CBRN sensors, GIS, weather, and sampling data. Finnish-Canadian heritage. Incident workflows for command and control.",
        "key_publications": [
            {"title": "Bertin Environics CBRN Solutions", "authors": "Bertin Environics", "journal": "Product Documentation", "year": 2024, "url": "https://www.bertin-environics.com/"},
            {"title": "EnviScreen COP for CBRN Operations", "authors": "Bertin Environics", "journal": "Product Brief", "year": 2023, "url": "https://www.bertin-environics.com/"}
        ],
        "official_guidelines": [
            {"title": "Bertin Environics Products", "url": "https://www.bertin-environics.com/", "org": "Bertin Environics"}
        ],
        "controversies_and_changes": [
            "Corporate restructuring: Environics (Finland) merged with Bertin Technologies (France), now part of CNIM Group.",
            "Limited publicly available technical documentation.",
            "Focuses on integrating Bertin Environics' own CBRN detection hardware with software COP.",
            "Competition from larger platform vendors (Systematic, Bruhn, Saab) in NATO markets."
        ],
        "ecosystem_connections": [
            {"platform": "Bertin CBRN detectors", "relationship": "Primary integration with Bertin's own CBRN detection equipment"},
            {"platform": "NATO CBRN programs", "relationship": "Aligned with NATO operational requirements"},
            {"platform": "GIS platforms", "relationship": "GIS integration for geographic situational awareness"},
            {"platform": "Weather services", "relationship": "Meteorological data input for situational awareness"}
        ],
        "key_urls": {
            "main_site": "https://www.bertin-environics.com/",
            "cnim": "https://www.cnim.com/"
        },
        "timeline": [
            {"year": 2010, "event": "Environics Oy CBRN software development (Finland)"},
            {"year": 2018, "event": "Merger with Bertin Technologies forming Bertin Environics"},
            {"year": 2024, "event": "Continued product development under CNIM Group"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: Bertin Environics EnviScreen/Operix provides CBRN incident management and COP with integrated sensor, GIS, and weather data. CBRN function tags: BIO, CHEM, RAD, SENSOR, C2, INCIDENT."
    }
},

"RadResponder": {
    "deep_research": {
        "executive_summary": "RadResponder is a FEMA-supported free platform for standardised radiological data collection and management across US responders. Score 82/100. Standardises radiological data practices to analyse site dangers and support mitigation decisions. Part of the FEMA CBRNResponder Network. Free for US government and response organisations.",
        "key_publications": [
            {"title": "RadResponder Network — DHS/FEMA", "authors": "DHS/FEMA", "journal": "DHS Publications", "year": 2023, "url": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network"},
            {"title": "FEMA Radiological Data Management Tools", "authors": "FEMA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools"}
        ],
        "official_guidelines": [
            {"title": "RadResponder Network Page", "url": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network", "org": "DHS/FEMA"},
            {"title": "FEMA CBRN Tools", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools", "org": "FEMA"}
        ],
        "controversies_and_changes": [
            "US-only focus limits international applicability.",
            "Radiological-only scope; no chemical or biological data management.",
            "2024: Continued integration with CBRNResponder Network concept.",
            "Training and adoption vary across state/local response organisations."
        ],
        "ecosystem_connections": [
            {"platform": "FEMA CBRNResponder", "relationship": "Core radiological component of CBRNResponder Network"},
            {"platform": "IMAAC Portal", "relationship": "Radiological data complements IMAAC plume products"},
            {"platform": "NRC (Nuclear Regulatory Commission)", "relationship": "Regulatory context for radiological incidents"},
            {"platform": "DOE/NNSA", "relationship": "Federal radiological response coordination"}
        ],
        "key_urls": {
            "main_site": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network",
            "fema_cbrn": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools",
            "radresponder_app": "https://www.radresponder.net/"
        },
        "timeline": [
            {"year": 2011, "event": "RadResponder established post-Fukushima for standardised radiological data"},
            {"year": 2018, "event": "Integration into FEMA CBRNResponder Network concept"},
            {"year": 2024, "event": "Continued operation; free for US response organisations"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: RadResponder provides standardised radiological data collection and management for US response community. Core component of FEMA CBRNResponder Network. CBRN function tags: RAD, SENSOR, INCIDENT, MCM."
    }
},

"IMAAC Portal": {
    "deep_research": {
        "executive_summary": "IMAAC (Interagency Modeling and Atmospheric Assessment Center) Portal is the US federal capability providing no-cost plume modelling support for hazmat/CBRNE incidents via coordinated atmospheric assessment. Score 83/100. FEMA-led federal interagency effort. Interfaces with CBRNResponder Network. Uses HPAC and other models for dispersion prediction.",
        "key_publications": [
            {"title": "IMAAC — Interagency Modeling and Atmospheric Assessment Center", "authors": "FEMA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac"},
            {"title": "IMAAC Concept of Operations", "authors": "DHS/FEMA", "journal": "Federal Guidance", "year": 2023, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac"}
        ],
        "official_guidelines": [
            {"title": "IMAAC Portal", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac", "org": "FEMA"},
            {"title": "FEMA Hazardous Response Capabilities", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities", "org": "FEMA"}
        ],
        "controversies_and_changes": [
            "US-only federal service; no international equivalent of this coordination model.",
            "Dependent on HPAC and other DoD/DOE modelling engines for actual dispersion calculations.",
            "Coordination challenges across multiple federal agencies (FEMA, DTRA, DOE, NWS).",
            "2025: Continued emphasis on interagency coordination and training exercises."
        ],
        "ecosystem_connections": [
            {"platform": "HPAC", "relationship": "Primary dispersion modelling engine behind IMAAC products"},
            {"platform": "FEMA CBRNResponder", "relationship": "Plume products feed into CBRNResponder Network"},
            {"platform": "DTRA", "relationship": "Provides HPAC modelling capability to IMAAC"},
            {"platform": "NWS/NOAA", "relationship": "Meteorological data and atmospheric modelling support"},
            {"platform": "DOE/NNSA", "relationship": "Nuclear/radiological scenario modelling support"},
            {"platform": "CAMEO/ALOHA", "relationship": "Complementary civilian-grade chemical dispersion tools"}
        ],
        "key_urls": {
            "main_site": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac",
            "fema_hazardous": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities",
            "dtra": "https://www.dtra.mil/"
        },
        "timeline": [
            {"year": 2003, "event": "IMAAC established as federal interagency atmospheric assessment capability"},
            {"year": 2011, "event": "Critical role during Fukushima US consequence assessment"},
            {"year": 2020, "event": "IMAAC governance and coordination model matured"},
            {"year": 2025, "event": "Continued interagency operation; interfaces with CBRNResponder Network"}
        ],
        "cbrn_assessment": "true_cbrn_operational_platform: IMAAC provides coordinated federal atmospheric dispersion modelling for CBRNE incidents. Uses HPAC and other models. FEMA-led interagency coordination. CBRN function tags: CHEM, BIO, RAD, MODEL, DECISIONSUPPORT."
    }
}

}  # end BATCH_C_CBRN

if __name__ == "__main__":
    print(f"CBRN Batch C loaded: {len(BATCH_C_CBRN)} platforms")
    for name, data in BATCH_C_CBRN.items():
        dr = data["deep_research"]
        assert "executive_summary" in dr, f"{name}: missing executive_summary"
        assert "cbrn_assessment" in dr, f"{name}: missing cbrn_assessment"
        print(f"  ✓ {name}: cbrn={dr['cbrn_assessment'][:60]}...")
    print("All CBRN validations passed.")
