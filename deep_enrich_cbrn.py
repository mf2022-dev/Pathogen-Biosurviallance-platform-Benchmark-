#!/usr/bin/env python3
"""
BioR Deep-Research Profile Enrichment - CBRN Operational Platforms (Ranks 170-189)
==================================================================================
Injects manually curated, citation-backed deep_research profiles for the 20
CBRN Operational platforms in L4_CBRN_Operational layer.

Adds to each platform:
  - deep_research block: executive_summary, key_publications,
    official_guidelines, controversies_and_changes, ecosystem_connections,
    key_urls, timeline, cbrn_assessment

Also adds:
  - CBRN cross-platform comparison matrix to meta
  - CBRN executive summary to meta

Run:
    python3 deep_enrich_cbrn.py            # apply enrichment
    python3 deep_enrich_cbrn.py --dry-run  # preview only
"""

import json, os, sys, time
from pathlib import Path

BASE    = os.path.dirname(os.path.abspath(__file__))
MASTER  = os.path.join(BASE, "optB_enriched.json")
DRY_RUN = "--dry-run" in sys.argv

# =====================================================================
# CBRN DEEP-RESEARCH PROFILES (curated 2026-03-17)
# =====================================================================

CBRN_DEEP_PROFILES = {

# ── 170  Saab AWR ──────────────────────────────────────────────────
"Saab AWR": {
    "deep_research": {
        "executive_summary": "Saab AWR is the highest-scored CBRN operational platform (88/100), providing a modular, sensor-agnostic detection, warning, monitoring and reporting system. Delivered to Kuwait National Guard in 2015, it established the world's first integrated national CBRN centre covering an entire country with fixed and mobile sensors by 2017. Key strength is national-scale deployment capability with sensor fusion to minimise false alarms. Limitation: defence procurement only with limited public documentation.",
        "key_publications": [
            {"title": "Saab CBRN Detection and Warning product page", "authors": "Saab AB", "journal": "Saab.com", "year": 2024, "url": "https://www.saab.com/products/cbrn-detection-and-warning"},
            {"title": "Saab receives order for CBRN system to Kuwait National Guard", "authors": "Saab AB", "journal": "Press Release", "year": 2015, "url": "https://www.saab.com/newsroom/press-releases/2015/saab-receives-order-for-cbrn-system"},
            {"title": "NATO ATP-45 CBRN Warning and Reporting", "authors": "NATO NSA", "journal": "NATO Standardization Agreement", "year": 2020, "url": "https://nso.nato.int/nso/nsdd/main/standards"}
        ],
        "official_guidelines": [
            {"title": "NATO STANAG 2103 - CBRN Warning and Reporting", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"},
            {"title": "ATP-45 Procedures for Warning and Reporting CBRN", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "2015: Contract awarded by Kuwait National Guard for national CBRN system.",
            "2017: First integrated national CBRN centre operational in Kuwait, covering entire country.",
            "Limited public documentation on technical standards, pricing, and broader deployment beyond Kuwait.",
            "Defence procurement restrictions limit academic evaluation and peer review of system capabilities."
        ],
        "ecosystem_connections": [
            {"platform": "NATO CBRN Warning Network", "relationship": "Implements ATP-45/APP-11 messaging standards for NATO interoperability"},
            {"platform": "Bruhn NewTech CBRN Suite", "relationship": "Competing/complementary NATO CBRN warning and reporting platform"},
            {"platform": "Systematic SitaWare CBRN", "relationship": "Potential C2 integration partner for CBRN report transmission"},
            {"platform": "ARGOS DSS", "relationship": "Complementary consequence assessment capability"}
        ],
        "key_urls": {
            "main_site": "https://www.saab.com/products/cbrn-detection-and-warning",
            "company": "https://www.saab.com",
            "press_kuwait": "https://www.saab.com/newsroom/press-releases/2015/saab-receives-order-for-cbrn-system"
        },
        "timeline": [
            {"year": 2015, "event": "Kuwait National Guard contract awarded for national CBRN system"},
            {"year": 2017, "event": "First integrated national CBRN centre operational in Kuwait"},
            {"year": 2020, "event": "Continued marketing to NATO/Gulf state customers"},
            {"year": 2024, "event": "Product page updated with current capability descriptions"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["detection", "warning", "reporting", "monitoring", "sensor_fusion", "decision_support", "training_simulation"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "sovereign/on-premise defence installation",
            "assessment": "Saab AWR is a true CBRN operational platform providing end-to-end detection, warning, monitoring and reporting. It demonstrated national-scale deployment covering an entire country (Kuwait) with sensor fusion across fixed and mobile sensors. NATO ATP-45 messaging compliance enables coalition interoperability. The system's modular architecture supports virtually any sensor type, making it uniquely flexible among CBRN platforms. Primary limitation is defence-only procurement and limited public documentation."
        }
    }
},

# ── 171  ENSCO SENTRY ──────────────────────────────────────────────
"ENSCO SENTRY": {
    "deep_research": {
        "executive_summary": "ENSCO SENTRY is a CBRNe warning and decision support system operational at the Pentagon since 2002, making it one of the longest-running enterprise CBRN protection systems. Score 87/100 reflects proven operational deployment, $8.2M sustainment contract (2017), and plug-in architecture supporting unlimited sensor types. Limitation: ITAR restricted, limited evidence of broad national-scale civil deployment.",
        "key_publications": [
            {"title": "ENSCO SENTRY: Advanced Hazard Warning and Decision Support", "authors": "ENSCO Inc.", "journal": "ENSCO.com", "year": 2024, "url": "https://www.ensco.com/national-security/sentry"},
            {"title": "PFPA CBRNE Systems Branch sustainment contract", "authors": "USAspending.gov", "journal": "Federal Contract Award", "year": 2017, "url": "https://www.usaspending.gov"},
            {"title": "Pentagon Force Protection Agency CBRNE operations", "authors": "PFPA", "journal": "DoD", "year": 2020, "url": "https://www.pfpa.mil"}
        ],
        "official_guidelines": [
            {"title": "DoD Instruction 2000.16 - DoD Antiterrorism Standards", "url": "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/200016p.pdf", "org": "DoD"},
            {"title": "PFPA CBRNE Protection Standards", "url": "https://www.pfpa.mil", "org": "Pentagon Force Protection Agency"}
        ],
        "controversies_and_changes": [
            "2002: Installed at the Pentagon as CBRNe early warning system; operational since.",
            "2017: PFPA awarded $8.2M five-year sustainment contract to ENSCO.",
            "ITAR export restrictions limit international deployment and transparency.",
            "Multi-sensor correlation capability reduces false alarm rates - key differentiator for enterprise protection.",
            "Limited public evidence of deployment beyond DoD/DHS National Capital Region facilities."
        ],
        "ecosystem_connections": [
            {"platform": "Pentagon Force Protection Agency", "relationship": "Primary operational customer since 2002"},
            {"platform": "DHS Facilities", "relationship": "Deployed at DHS facilities in National Capital Region"},
            {"platform": "Building Management Systems", "relationship": "Enterprise integration with BMS, cameras, doors, fire systems"},
            {"platform": "Two Six SIGMA", "relationship": "Competing/complementary sensor aggregation platform"}
        ],
        "key_urls": {
            "main_site": "https://www.ensco.com/national-security/sentry",
            "company": "https://www.ensco.com",
            "national_security": "https://www.ensco.com/national-security"
        },
        "timeline": [
            {"year": 2002, "event": "SENTRY installed at the Pentagon for CBRNe early warning"},
            {"year": 2017, "event": "$8.2M five-year sustainment contract from PFPA"},
            {"year": 2020, "event": "Continued operation at DoD/DHS NCR facilities"},
            {"year": 2024, "event": "Updated product capabilities with enterprise integration features"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["detection", "warning", "decision_support", "sensor_fusion", "enterprise_integration"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear", "explosive"],
            "deployment_model": "enterprise/facility protection, on-premise",
            "assessment": "ENSCO SENTRY is a true CBRN operational platform with the longest continuous deployment record among profiled systems (Pentagon since 2002). Its plug-in architecture supports unlimited sensor types with multi-sensor correlation to reduce false alarms. Enterprise-grade integration with BMS/cameras/fire systems makes it uniquely suited for high-value facility protection. ITAR restrictions and DoD-centric deployment limit broader civil adoption."
        }
    }
},

# ── 172  Two Six SIGMA ─────────────────────────────────────────────
"Two Six SIGMA": {
    "deep_research": {
        "executive_summary": "Two Six SIGMA is a CBRNE sensor aggregation and cloud analytics platform with DARPA heritage, available as SaaS on AWS Marketplace. Score 84/100 reflects sensor-agnostic integration of 30+ vendor sensors and cloud-native architecture. Originally developed under DARPA's SIGMA program for radiological/nuclear detection, it has expanded to full CBRNE coverage. Limitation: limited public deployment details and consequence modelling capability.",
        "key_publications": [
            {"title": "Two Six Technologies SIGMA Platform", "authors": "Two Six Technologies", "journal": "TwoSixTech.com", "year": 2024, "url": "https://twosixtech.com/products/sigma/"},
            {"title": "DARPA SIGMA program: large-scale nuclear detection", "authors": "DARPA", "journal": "DARPA.mil", "year": 2016, "url": "https://www.darpa.mil/program/sigma"},
            {"title": "AWS Marketplace - Two Six SIGMA", "authors": "AWS", "journal": "AWS Marketplace", "year": 2024, "url": "https://aws.amazon.com/marketplace"}
        ],
        "official_guidelines": [
            {"title": "DARPA SIGMA Program Overview", "url": "https://www.darpa.mil/program/sigma", "org": "DARPA"},
            {"title": "SIGMA+ and SIGMA Extended Programs", "url": "https://www.darpa.mil/program/sigma-plus", "org": "DARPA"}
        ],
        "controversies_and_changes": [
            "DARPA SIGMA program origin: originally focused on radiological/nuclear detection at city-scale.",
            "DARPA SIGMA+ expanded to chemical detection capabilities.",
            "Transition from government R&D to commercial SaaS product via AWS Marketplace.",
            "Limited independent validation of claimed 30+ vendor sensor integration.",
            "Cloud-native architecture enables rapid deployment but raises data sovereignty questions for classified environments."
        ],
        "ecosystem_connections": [
            {"platform": "DARPA", "relationship": "Original R&D funding and program management for SIGMA"},
            {"platform": "AWS GovCloud", "relationship": "Cloud hosting platform via AWS Marketplace"},
            {"platform": "ENSCO SENTRY", "relationship": "Competing enterprise CBRN warning system"},
            {"platform": "FEMA CBRNResponder", "relationship": "Potential integration partner for US civil response"}
        ],
        "key_urls": {
            "main_site": "https://twosixtech.com/products/sigma/",
            "company": "https://twosixtech.com",
            "darpa_sigma": "https://www.darpa.mil/program/sigma",
            "darpa_sigma_plus": "https://www.darpa.mil/program/sigma-plus"
        },
        "timeline": [
            {"year": 2014, "event": "DARPA SIGMA program initiated for large-scale rad/nuc detection"},
            {"year": 2016, "event": "City-scale demonstrations of networked radiation detection"},
            {"year": 2019, "event": "SIGMA+ program extends to chemical detection"},
            {"year": 2022, "event": "Two Six Technologies commercializes SIGMA platform"},
            {"year": 2024, "event": "Available on AWS Marketplace as SaaS for CBRNE networks"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["detection", "sensor_aggregation", "analytics", "anomaly_detection", "situational_awareness"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "cloud SaaS (AWS Marketplace) and on-premise options",
            "assessment": "Two Six SIGMA is a true CBRN operational platform evolved from DARPA's flagship SIGMA radiological detection program. Its sensor-agnostic architecture supporting 30+ vendor sensors and cloud-native delivery model represent the most modern commercial CBRN sensing platform. DARPA heritage ensures strong technical foundations. Key gap is limited consequence modelling and NATO doctrine messaging compared to European competitors."
        }
    }
},

# ── 173  Riskaware UrbanAware / HASP Suite ─────────────────────────
"Riskaware UrbanAware / HASP Suite": {
    "deep_research": {
        "executive_summary": "Riskaware UrbanAware/HASP is a UK Dstl-heritage CBRN hazard modelling platform specialising in rapid urban dispersion modelling for evacuation and cordon planning. Score 82/100 reflects high-quality scientific modelling pedigree from UK Defence Science. Limitation: primarily a modelling tool rather than full operational platform, lacking integrated sensor management and incident workflow.",
        "key_publications": [
            {"title": "Riskaware HASP Suite product page", "authors": "Riskaware Ltd", "journal": "Riskaware.co.uk", "year": 2024, "url": "https://www.riskaware.co.uk/hazard-assessment-simulation-and-prediction-hasp-suite/"},
            {"title": "Ploughshare Innovations: Dstl technology licensing", "authors": "Ploughshare Innovations", "journal": "Ploughshare.co.uk", "year": 2024, "url": "https://www.ploughshare.co.uk"},
            {"title": "Riskaware-Smiths Detection partnership for integrated CBRN", "authors": "Riskaware Ltd", "journal": "Press Release", "year": 2024, "url": "https://www.riskaware.co.uk/news/"}
        ],
        "official_guidelines": [
            {"title": "UK Dstl CBRN Research Programme", "url": "https://www.gov.uk/government/organisations/defence-science-and-technology-laboratory", "org": "UK MoD/Dstl"},
            {"title": "Ploughshare Innovations Technology Licensing", "url": "https://www.ploughshare.co.uk", "org": "Ploughshare/Dstl"}
        ],
        "controversies_and_changes": [
            "UK Dstl heritage: core algorithms developed by government laboratory then licensed commercially via Ploughshare Innovations.",
            "2024: Partnership announced with Smiths Detection to integrate sensor data with hazard modelling.",
            "Primarily a modelling tool; does not include incident management or sensor network management.",
            "Technical stack details remain largely unconfirmed in public sources."
        ],
        "ecosystem_connections": [
            {"platform": "UK Dstl", "relationship": "Original developer of HASP algorithms; licensed via Ploughshare"},
            {"platform": "Smiths Detection", "relationship": "Sensor integration partner (2024 partnership)"},
            {"platform": "ARGOS DSS", "relationship": "Competing multi-hazard decision support system"},
            {"platform": "CAMEO/ALOHA", "relationship": "Complementary chemical dispersion modelling tools"}
        ],
        "key_urls": {
            "main_site": "https://www.riskaware.co.uk/hazard-assessment-simulation-and-prediction-hasp-suite/",
            "company": "https://www.riskaware.co.uk",
            "dstl": "https://www.gov.uk/government/organisations/defence-science-and-technology-laboratory",
            "ploughshare": "https://www.ploughshare.co.uk"
        },
        "timeline": [
            {"year": 2005, "event": "Dstl develops HASP algorithms for UK CBRN defence"},
            {"year": 2012, "event": "Riskaware licenses HASP via Ploughshare Innovations"},
            {"year": 2020, "event": "UrbanAware platform incorporates HASP for urban scenario modelling"},
            {"year": 2024, "event": "Partnership with Smiths Detection for integrated CBRN sensor-to-model solution"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["hazard_modelling", "dispersion_prediction", "evacuation_planning", "cordon_optimisation", "decision_support"],
            "hazard_coverage": ["chemical", "biological", "radiological"],
            "deployment_model": "sovereign/on-premise, potential cloud deployment",
            "assessment": "Riskaware UrbanAware/HASP is a specialised CBRN hazard modelling platform with strong UK government scientific pedigree. Its urban dispersion modelling capability fills a critical gap for city-scale CBRN incident response. The 2024 Smiths Detection partnership signals evolution toward integrated sensor-to-model solutions. Classified as CBRN operational due to modelling focus, but lacks full incident management and sensor network integration found in more comprehensive suites."
        }
    }
},

# ── 174  Observis ObSAS ────────────────────────────────────────────
"Observis ObSAS": {
    "deep_research": {
        "executive_summary": "Observis ObSAS is a Finnish CBRNe situational awareness platform supporting vehicles, shelters, mobile labs and critical infrastructure. Score 83/100 reflects flexible deployment options (SaaS/on-prem/rugged laptop) and ATP-45 messaging support. Notable for React/Node.js modern web stack and encrypted data streams. Limitation: small company with limited published national-scale deployments.",
        "key_publications": [
            {"title": "Observis ObSAS product overview", "authors": "Observis Oy", "journal": "Observis.fi", "year": 2024, "url": "https://www.observis.fi/en/home/"},
            {"title": "Finnish thesis on LINK mobile app development (React Native/Node.js)", "authors": "Finnish university", "journal": "Academic thesis", "year": 2022, "url": "https://www.observis.fi"},
            {"title": "NATO ATP-45 CBRN Warning and Reporting standard", "authors": "NATO NSA", "journal": "NATO Standardization Agreement", "year": 2020, "url": "https://nso.nato.int/nso/nsdd/main/standards"}
        ],
        "official_guidelines": [
            {"title": "NATO STANAG 2103 / ATP-45 Warning and Reporting", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "2011: Observis Oy founded in Finland.",
            "Modern web stack (React/Node.js) distinguishes ObSAS from legacy defence platforms.",
            "Small company: limited evidence of large-scale operational deployments.",
            "Flexible deployment (SaaS, private cloud, on-prem, rugged laptop) enables diverse operational scenarios."
        ],
        "ecosystem_connections": [
            {"platform": "NATO CBRN community", "relationship": "ATP-45 messaging compliance for coalition interoperability"},
            {"platform": "Bruhn NewTech CBRN Suite", "relationship": "Competing Nordic CBRN platform"},
            {"platform": "Systematic SitaWare", "relationship": "Potential C2 integration partner"},
            {"platform": "Multiple CBRN sensor vendors", "relationship": "LINK integration hub connects heterogeneous sensors"}
        ],
        "key_urls": {
            "main_site": "https://www.observis.fi/en/home/",
            "obsas_product": "https://www.observis.fi/en/obsas/",
            "link_integration": "https://www.observis.fi/en/link/"
        },
        "timeline": [
            {"year": 2011, "event": "Observis Oy founded in Finland"},
            {"year": 2018, "event": "ObSAS platform development with React/Node.js modern stack"},
            {"year": 2022, "event": "LINK mobile app development documented in academic thesis"},
            {"year": 2024, "event": "Continued marketing to military and public security sectors globally"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["monitoring", "situational_awareness", "sensor_integration", "messaging", "data_streaming"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "SaaS, private cloud, on-premise, rugged field deployment",
            "assessment": "Observis ObSAS is a true CBRN operational platform providing situational awareness for diverse deployment scenarios from single vehicles to nationwide networks. Its modern web technology stack (React/Node.js) and ATP-45 compliance position it as a next-generation CBRN awareness platform. The LINK integration hub enables vendor-agnostic sensor connectivity. Limitation is the company's small size and lack of published large-scale deployment evidence."
        }
    }
},

# ── 175  Bruhn NewTech CBRN Suite ──────────────────────────────────
"Bruhn NewTech CBRN Suite": {
    "deep_research": {
        "executive_summary": "Bruhn NewTech CBRN Suite is the most comprehensive NATO-aligned CBRN software suite profiled, claiming operational deployment across 4 of 5 NATO countries and 10+ PfP nations. Score 85/100 reflects STANAG 2103/ATP-45 and STANAG 2497/AEP-45 compliance, SCIM sensor hub integrating 50+ sensors from 20+ manufacturers, and multiple product modules (Analysis, Frontline, SCIM, SafeVita). Limitation: vendor-sourced claims without independent validation.",
        "key_publications": [
            {"title": "Bruhn NewTech CBRN Analysis product page", "authors": "Bruhn NewTech A/S", "journal": "BruhnNewTech.com", "year": 2024, "url": "https://bruhn-newtech.com/cbrn-analysis/"},
            {"title": "SCIM Sensor Hub - 50+ sensor integration", "authors": "Bruhn NewTech A/S", "journal": "BruhnNewTech.com", "year": 2024, "url": "https://bruhn-newtech.com/scim/"},
            {"title": "NATO STANAG 2497 / AEP-45 CBRN Information Management", "authors": "NATO NSA", "journal": "NATO Standard", "year": 2021, "url": "https://nso.nato.int/nso/nsdd/main/standards"}
        ],
        "official_guidelines": [
            {"title": "NATO STANAG 2103 - CBRN Warning and Reporting (ATP-45)", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"},
            {"title": "NATO STANAG 2497 - CBRN Information Management (AEP-45)", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"}
        ],
        "controversies_and_changes": [
            "Claims operational use in 4 of 5 NATO countries and 10+ PfP nations (not independently validated).",
            "~70% of NATO CBRN units using some element of the Bruhn NewTech suite claimed by vendor.",
            "Integration with Systematic SitaWare for CBRN report transmission between platforms.",
            "Annual doctrine standards updates align with NATO STANAG revisions.",
            "Limited independent academic or government evaluation of platform capabilities."
        ],
        "ecosystem_connections": [
            {"platform": "Systematic SitaWare", "relationship": "Integration partner for CBRN report transmission to C2 networks"},
            {"platform": "Saab AWR", "relationship": "Competing CBRN detection and warning platform"},
            {"platform": "50+ sensor vendors (20+ manufacturers)", "relationship": "SCIM hub integrates diverse CBRN sensor hardware"},
            {"platform": "NATO NCI Agency", "relationship": "Standards compliance through NATO doctrine implementation"}
        ],
        "key_urls": {
            "main_site": "https://bruhn-newtech.com",
            "cbrn_analysis": "https://bruhn-newtech.com/cbrn-analysis/",
            "cbrne_frontline": "https://bruhn-newtech.com/cbrne-frontline/",
            "scim": "https://bruhn-newtech.com/scim/",
            "safevita": "https://bruhn-newtech.com/safevita/"
        },
        "timeline": [
            {"year": 1989, "event": "Bruhn NewTech A/S founded in Denmark"},
            {"year": 2005, "event": "CBRN-Analysis platform established for NATO hazard prediction"},
            {"year": 2015, "event": "SCIM sensor hub integrating 50+ sensors from 20+ manufacturers"},
            {"year": 2020, "event": "Claims operational use across 4/5 NATO countries"},
            {"year": 2024, "event": "Continued doctrine updates; integration with SitaWare deepened"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["hazard_prediction", "warning", "reporting", "sensor_integration", "knowledge_management", "information_management"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "sovereign/on-premise NATO defence deployment",
            "assessment": "Bruhn NewTech CBRN Suite is the most comprehensive NATO-aligned CBRN software suite in this assessment, with multiple modules covering hazard prediction (Analysis), simplified field reporting (Frontline), sensor integration (SCIM, 50+ sensors), and personnel monitoring (SafeVita). Claims of deployment across 4/5 NATO countries make it potentially the most widely deployed NATO CBRN operational software. Key strength is deep NATO STANAG compliance. Key gap is reliance on vendor-sourced claims without independent validation."
        }
    }
},

# ── 176  HAVELSAN Counter-CBRN Suite ───────────────────────────────
"HAVELSAN Counter-CBRN Suite": {
    "deep_research": {
        "executive_summary": "HAVELSAN Counter-CBRN Suite is Turkey's sovereign CBRN information management platform comprising MENTOR (management), BRIDGE (monitoring), and NEWS (warning & reporting). Score 81/100 reflects NATO ATP-45 compliance and 2023 national integration protocol with Turkish MoND and TUeBITAK MAM. Limitation: limited English documentation and uncertain export availability.",
        "key_publications": [
            {"title": "HAVELSAN Counter CBRN product page", "authors": "HAVELSAN A.S.", "journal": "Havelsan.com", "year": 2024, "url": "https://www.havelsan.com/en"},
            {"title": "Turkey MoND-TUeBITAK MAM CBRN integration protocol 2023", "authors": "Turkish Ministry of National Defence", "journal": "Government Protocol", "year": 2023, "url": "https://www.msb.gov.tr"},
            {"title": "Turkish Armed Forces Foundation (TSKGV) defence industrial portfolio", "authors": "TSKGV", "journal": "TSKGV.com", "year": 2024, "url": "https://www.tskgv.org.tr"}
        ],
        "official_guidelines": [
            {"title": "NATO ATP-45 CBRN Warning and Reporting (implemented by NEWS module)", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"},
            {"title": "Turkish MoND CBRN Defence Department protocols", "url": "https://www.msb.gov.tr", "org": "Turkey MoND"}
        ],
        "controversies_and_changes": [
            "2023: National integration protocol signed between Turkish MoND CBRN Defence Dept and TUeBITAK MAM for Counter-CBRN system integration.",
            "Sovereign Turkish supplier alignment: HAVELSAN is a TSKGV (Turkish Armed Forces Foundation) affiliate.",
            "Limited English-language transparency on system capabilities and deployment status.",
            "Export availability to non-Turkish NATO allies uncertain."
        ],
        "ecosystem_connections": [
            {"platform": "Turkish Armed Forces", "relationship": "Primary operational customer via MoND CBRN Defence Department"},
            {"platform": "TUeBITAK MAM", "relationship": "Scientific research partner for CBRN integration"},
            {"platform": "NATO CBRN community", "relationship": "ATP-45 compliance enables NATO interoperability"},
            {"platform": "TSKGV ecosystem", "relationship": "Part of Turkish defence foundation industrial portfolio"}
        ],
        "key_urls": {
            "main_site": "https://www.havelsan.com/en",
            "tskgv": "https://www.tskgv.org.tr",
            "mod_turkey": "https://www.msb.gov.tr"
        },
        "timeline": [
            {"year": 1982, "event": "HAVELSAN established as TSKGV affiliate"},
            {"year": 2015, "event": "Counter-CBRN suite development for Turkish Armed Forces"},
            {"year": 2023, "event": "National integration protocol with MoND and TUeBITAK MAM"},
            {"year": 2024, "event": "Continued development of MENTOR, BRIDGE, and NEWS modules"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["information_management", "monitoring", "warning", "reporting", "hazard_simulation", "route_planning"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "sovereign national defence, on-premise",
            "assessment": "HAVELSAN Counter-CBRN Suite is Turkey's sovereign CBRN platform with three integrated modules covering the full CBRN information lifecycle. The 2023 national integration protocol with MoND and TUeBITAK MAM demonstrates institutional commitment. NATO ATP-45 compliance enables interoperability with alliance partners. As a TSKGV affiliate, HAVELSAN has guaranteed domestic market access but faces transparency and export challenges."
        }
    }
},

# ── 177  Systematic SitaWare CBRN Module ───────────────────────────
"Systematic SitaWare CBRN Module": {
    "deep_research": {
        "executive_summary": "Systematic SitaWare CBRN is the NATO-selected CBRN reporting and warning module integrated into the SitaWare C4ISR suite, used by 50+ nations. Score 86/100 reflects NATO DEMETER programme selection, IOC milestone (June 2025), and ATP-45/APP-11 implementation. Key differentiator: embedded within the NATO-standard land C2 system rather than standalone CBRN platform. Limitation: CBRN is a module (not full sensor+model suite); requires external sensor networks.",
        "key_publications": [
            {"title": "SitaWare CBRN Module product page", "authors": "Systematic", "journal": "Systematic.com", "year": 2025, "url": "https://systematic.com/int/industries/defence/products/sitaware-suite/sitaware-modules/sitaware-cbrn/"},
            {"title": "NATO NCI Agency DEMETER programme - SitaWare selection", "authors": "NATO NCI Agency", "journal": "NCIA.nato.int", "year": 2024, "url": "https://www.ncia.nato.int"},
            {"title": "SitaWare IOC milestone with NCIA", "authors": "Systematic", "journal": "Press Release", "year": 2025, "url": "https://systematic.com/news/2025/sitaware-ioc-ncia/"}
        ],
        "official_guidelines": [
            {"title": "NATO ATP-45 CBRN Warning and Reporting procedures", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"},
            {"title": "NATO APP-11 Message Catalogue", "url": "https://nso.nato.int/nso/nsdd/main/standards", "org": "NATO"},
            {"title": "NATO MIP4.4 Interoperability Standard", "url": "https://mip-interop.org", "org": "NATO MIP"}
        ],
        "controversies_and_changes": [
            "2024: NATO NCI Agency selected SitaWare HQ for DEMETER land C2 programme.",
            "June 18, 2025: IOC milestone achieved with NCIA.",
            "CBRN module adds doctrine-compliant reporting to existing C2 infrastructure rather than standalone capability.",
            "Requires external sensor networks and consequence modelling tools (e.g., Bruhn NewTech SCIM).",
            "50+ nations and 18 NATO countries use broader SitaWare suite; CBRN module adoption rate unknown separately."
        ],
        "ecosystem_connections": [
            {"platform": "Bruhn NewTech CBRN Suite", "relationship": "Integration partner: Bruhn NewTech reports transmit through SitaWare C2"},
            {"platform": "NATO NCI Agency", "relationship": "Selected SitaWare for DEMETER land C2 programme"},
            {"platform": "Five Eyes partners", "relationship": "SitaWare supports Five Eyes interoperability"},
            {"platform": "NATO MIP Community", "relationship": "MIP4.4 standard compliance for C2 data exchange"}
        ],
        "key_urls": {
            "main_site": "https://systematic.com/int/industries/defence/products/sitaware-suite/sitaware-modules/sitaware-cbrn/",
            "sitaware_suite": "https://systematic.com/int/industries/defence/products/sitaware-suite/",
            "company": "https://systematic.com",
            "ncia": "https://www.ncia.nato.int"
        },
        "timeline": [
            {"year": 2010, "event": "SitaWare suite established as multi-nation C2 platform"},
            {"year": 2020, "event": "CBRN module development implementing ATP-45/APP-11"},
            {"year": 2024, "event": "NATO NCI Agency selects SitaWare for DEMETER land C2"},
            {"year": 2025, "event": "IOC milestone achieved with NCIA (June 18, 2025)"}
        ],
        "cbrn_assessment": {
            "tag": "cbrn_specific_module",
            "cbrn_functions": ["reporting", "warning", "message_generation", "workflow_management", "c2_integration"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "integrated within NATO C2 infrastructure",
            "assessment": "SitaWare CBRN is the NATO-selected CBRN reporting module embedded in the most widely adopted military C2 suite (50+ nations). Its selection for the DEMETER programme and IOC milestone make it the de-facto NATO standard for CBRN reporting within command networks. Key strength is seamless C2 integration; key limitation is that it is a reporting/workflow module rather than a full detection-to-decision platform. Requires external sensor networks (e.g., Bruhn NewTech SCIM) and consequence assessment tools."
        }
    }
},

# ── 178  FEMA CBRNResponder Network ────────────────────────────────
"FEMA CBRNResponder Network": {
    "deep_research": {
        "executive_summary": "FEMA CBRNResponder Network is the US national common operating platform for CBRN incident data-sharing, integrating RadResponder, ChemResponder, BioResponder, and the IMAAC Portal. Score 85/100 reflects 2,200+ organisations and 13,000+ responders on a single secure platform with 24/7 support and free access. Key strength is multi-hazard integration under one platform. Limitation: US-specific governance; BioResponder still in development.",
        "key_publications": [
            {"title": "FEMA CBRN Tools and Resources", "authors": "FEMA", "journal": "FEMA.gov", "year": 2025, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools"},
            {"title": "USFA Blog: CBRNResponder - A Platform for Shared Data", "authors": "USFA/FEMA", "journal": "USFA.FEMA.gov", "year": 2024, "url": "https://www.usfa.fema.gov/blog/cbrnresponder/"},
            {"title": "DHS PIA-054 RadResponder Network Privacy Impact Assessment", "authors": "DHS", "journal": "DHS.gov", "year": 2025, "url": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network"}
        ],
        "official_guidelines": [
            {"title": "FEMA Hazardous Response Capabilities", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities", "org": "FEMA"},
            {"title": "National Response Framework - CBRN Annex", "url": "https://www.fema.gov/emergency-managers/national-preparedness/frameworks/response", "org": "FEMA"},
            {"title": "RadResponder Standard Operating Guidance", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/rad-responder", "org": "FEMA"}
        ],
        "controversies_and_changes": [
            "Multi-hazard integration: ChemResponder and BioResponder added to existing RadResponder platform.",
            "BioResponder module still in development as of 2025.",
            "US-specific governance limits international adoption.",
            "24/7 hotline and monthly training webinars support operational readiness.",
            "Free to eligible US organisations - no procurement barriers for domestic users."
        ],
        "ecosystem_connections": [
            {"platform": "RadResponder", "relationship": "Core radiological data management module (rank 188)"},
            {"platform": "IMAAC Portal", "relationship": "Integrated atmospheric dispersion modelling service (rank 189)"},
            {"platform": "DHS S&T", "relationship": "Technology development partner"},
            {"platform": "EPA", "relationship": "Environmental response data integration"},
            {"platform": "DOE", "relationship": "Nuclear/radiological expertise and support"},
            {"platform": "CAMEO Suite", "relationship": "Complementary chemical emergency planning tools"}
        ],
        "key_urls": {
            "main_site": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools",
            "usfa_blog": "https://www.usfa.fema.gov/blog/cbrnresponder/",
            "radresponder": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/rad-responder",
            "imaac": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac"
        },
        "timeline": [
            {"year": 2011, "event": "RadResponder Network launched post-Fukushima for US radiological response"},
            {"year": 2018, "event": "ChemResponder module added for chemical incident data"},
            {"year": 2022, "event": "CBRNResponder concept formalised as national common operating platform"},
            {"year": 2024, "event": "2,200+ organisations and 13,000+ responders registered"},
            {"year": 2025, "event": "BioResponder module in development; continued integration with IMAAC"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["incident_management", "data_sharing", "multi_hazard_coordination", "radiological_data", "chemical_data", "biological_data", "plume_modelling"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "cloud SaaS, free for eligible US organisations",
            "assessment": "FEMA CBRNResponder Network is the US national standard for CBRN incident data-sharing, uniquely integrating radiological (RadResponder), chemical (ChemResponder), biological (BioResponder), and atmospheric modelling (IMAAC) under one platform. With 2,200+ organisations and 13,000+ responders, it represents the largest CBRN response community of practice. Key strength is free access and 24/7 support. Key limitation is US-only scope and BioResponder still under development."
        }
    }
},

# ── 179  ARGOS DSS ─────────────────────────────────────────────────
"ARGOS DSS": {
    "deep_research": {
        "executive_summary": "ARGOS is the most mature international CBRN decision support system, operational since 2001 across 13 countries covering 400+ million people. Score 86/100 reflects decades of operational use, 2,500+ chemical specifications, nuclear and chemical modules, and consortium-driven governance. Key differentiator is proven multi-country operational deployment. Limitation: Windows-only client and consortium complexity.",
        "key_publications": [
            {"title": "ARGOS Decision Support System for Emergency Management", "authors": "PDC/DEMA", "journal": "PDC-ARGOS.com", "year": 2024, "url": "https://pdc-argos.com/"},
            {"title": "Nuclear emergency response decision support: ARGOS user experience", "authors": "Various", "journal": "Radiation Protection Dosimetry", "year": 2012, "url": "https://doi.org/10.1093/rpd/ncs165"},
            {"title": "Ireland EPA NEPNA: ARGOS deployment since 2007", "authors": "EPA Ireland", "journal": "EPA.ie", "year": 2020, "url": "https://www.epa.ie"}
        ],
        "official_guidelines": [
            {"title": "IAEA Safety Standards for Emergency Preparedness and Response (EPR)", "url": "https://www.iaea.org/publications/standards", "org": "IAEA"},
            {"title": "EU Council Directive 2013/59/Euratom (Basic Safety Standards)", "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013L0059", "org": "European Commission"}
        ],
        "controversies_and_changes": [
            "2001: ARGOS User Group established; system has been operational for 25+ years.",
            "Consortium model: 13 countries participate with shared development costs.",
            "Windows-only client limits deployment flexibility.",
            "2,500+ chemical specifications enable broad hazmat response beyond nuclear/radiological.",
            "Ireland's EPA/NEPNA has used ARGOS since 2007 for national nuclear emergency preparedness."
        ],
        "ecosystem_connections": [
            {"platform": "RODOS/JRODOS", "relationship": "Complementary radiological decision support system (Germany-focused)"},
            {"platform": "EURDEP/ECURIE", "relationship": "European radiological data exchange feeding into ARGOS assessments"},
            {"platform": "National Met Services", "relationship": "Weather data integration for dispersion modelling"},
            {"platform": "IAEA USIE", "relationship": "International incident notification system complementing ARGOS assessment"},
            {"platform": "CAMEO/ALOHA", "relationship": "Complementary US chemical emergency tools"}
        ],
        "key_urls": {
            "main_site": "https://pdc-argos.com/",
            "user_group": "https://pdc-argos.com/argos-user-group/",
            "features": "https://pdc-argos.com/features/"
        },
        "timeline": [
            {"year": 2001, "event": "ARGOS User Group established; system operational"},
            {"year": 2007, "event": "Ireland EPA/NEPNA adopts ARGOS for nuclear emergency preparedness"},
            {"year": 2011, "event": "Used during Fukushima nuclear accident response"},
            {"year": 2020, "event": "13 countries operational, covering 400M+ people"},
            {"year": 2024, "event": "2,500+ chemical specifications; continued consortium development"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["consequence_assessment", "dispersion_modelling", "decision_support", "dose_prediction", "chemical_modelling", "protective_action_planning"],
            "hazard_coverage": ["chemical", "radiological", "nuclear"],
            "deployment_model": "consortium-managed, Windows client + central server",
            "assessment": "ARGOS is the most proven international CBRN decision support system with 25+ years of operational deployment across 13 countries. Its coverage of 400M+ people and 2,500+ chemical specifications make it uniquely comprehensive for consequence assessment. The consortium governance model ensures shared development costs and multi-national input. Key limitations are Windows-only architecture and absence of biological hazard modelling."
        }
    }
},

# ── 180  RODOS / JRODOS ───────────────────────────────────────────
"RODOS / JRODOS": {
    "deep_research": {
        "executive_summary": "RODOS/JRODOS is a radiological emergency decision support system operational in Germany (BfS/IMIS) and Switzerland (ENSI) since 2010. Score 85/100 reflects strong integration with German national radiation monitoring (IMIS/ELAN supporting ~70 institutions) and multi-pathway dose prediction models. Limitation: radiological/nuclear only with no chemical/biological capability.",
        "key_publications": [
            {"title": "BfS RODOS operational description", "authors": "BfS", "journal": "BfS.de", "year": 2024, "url": "https://www.bfs.de/EN/topics/ion/accident-management/bfs/rlz/rodos.html"},
            {"title": "RODOS/JRODOS technical development", "authors": "KIT", "journal": "Karlsruhe Institute of Technology", "year": 2015, "url": "https://www.kit.edu"},
            {"title": "EU RODOS project publications", "authors": "Various", "journal": "Radiation Protection Dosimetry", "year": 2010, "url": "https://doi.org/10.1093/rpd/ncq380"}
        ],
        "official_guidelines": [
            {"title": "German Radiological Situation Centre (BfS) operations", "url": "https://www.bfs.de/EN/topics/ion/accident-management/bfs/rlz/rodos.html", "org": "BfS"},
            {"title": "ELAN Information System for ~70 institutions", "url": "https://www.bfs.de/EN/topics/ion/accident-management/bfs/elan/elan.html", "org": "BfS"},
            {"title": "Swiss ENSI Nuclear Safety Inspectorate emergency preparedness", "url": "https://www.ensi.ch", "org": "ENSI"}
        ],
        "controversies_and_changes": [
            "Evolution from UNIX-based RODOS to Java-based JRODOS (operational since 2010).",
            "ELAN companion system operational since 2001, supporting ~70 German institutions.",
            "Germany uses RODOS as part of IMIS (Integrated Measurement and Information System).",
            "Radiological/nuclear scope only - no expansion to chemical or biological hazards.",
            "Swiss ENSI adoption validates cross-border applicability."
        ],
        "ecosystem_connections": [
            {"platform": "IMIS (Germany)", "relationship": "RODOS integrated into German national radiation monitoring system"},
            {"platform": "ELAN", "relationship": "Companion information system supporting ~70 institutions"},
            {"platform": "ARGOS DSS", "relationship": "Competing/complementary multi-hazard decision support system"},
            {"platform": "EURDEP/ECURIE", "relationship": "European radiological data exchange feeding RODOS assessments"},
            {"platform": "KIT", "relationship": "Karlsruhe Institute of Technology maintains JRODOS development"}
        ],
        "key_urls": {
            "main_site": "https://www.bfs.de/EN/topics/ion/accident-management/bfs/rlz/rodos.html",
            "elan": "https://www.bfs.de/EN/topics/ion/accident-management/bfs/elan/elan.html",
            "bfs": "https://www.bfs.de",
            "kit": "https://www.kit.edu"
        },
        "timeline": [
            {"year": 1990, "event": "RODOS project initiated (EU-funded post-Chernobyl)"},
            {"year": 2001, "event": "ELAN information system operational for ~70 German institutions"},
            {"year": 2010, "event": "Java-based JRODOS becomes operational"},
            {"year": 2011, "event": "Used during Fukushima accident assessment in Germany"},
            {"year": 2024, "event": "Continues as German federal radiological decision support standard"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["dispersion_modelling", "dose_prediction", "protective_action_planning", "contamination_assessment", "food_chain_modelling"],
            "hazard_coverage": ["radiological", "nuclear"],
            "deployment_model": "government authority on-premise deployment",
            "assessment": "RODOS/JRODOS is a specialised radiological/nuclear emergency decision support system with proven deployment in Germany and Switzerland. Its integration with IMIS and ELAN (~70 institutions) makes it the backbone of German nuclear emergency preparedness. Multi-pathway dose models including food chain contamination assessment provide comprehensive consequence analysis. Limitation is exclusive focus on radiological/nuclear hazards with no chemical/biological capability."
        }
    }
},

# ── 181  CAMEO Suite (EPA/NOAA) ────────────────────────────────────
"CAMEO Suite (EPA/NOAA)": {
    "deep_research": {
        "executive_summary": "CAMEO Suite is the US EPA/NOAA free software package for chemical emergency planning and response, comprising CAMEO Data Manager, CAMEO Chemicals, ALOHA dispersion model, and MARPLOT mapping. Score 80/100 reflects widespread free distribution and active maintenance (v3.0.0, Feb 2026). Limitation: desktop-only chemical focus with no sensor fusion, incident management, or biological/radiological capability.",
        "key_publications": [
            {"title": "CAMEO Software Suite overview", "authors": "US EPA & NOAA", "journal": "EPA.gov", "year": 2026, "url": "https://www.epa.gov/cameo"},
            {"title": "ALOHA Atmospheric Dispersion Model", "authors": "NOAA", "journal": "NOAA Response.restoration.noaa.gov", "year": 2024, "url": "https://response.restoration.noaa.gov/oil-and-chemical-spills/chemical-spills/response-tools/aloha.html"},
            {"title": "CAMEO Chemicals database", "authors": "NOAA", "journal": "NOAA", "year": 2026, "url": "https://cameochemicals.noaa.gov"}
        ],
        "official_guidelines": [
            {"title": "EPA CAMEO official tools page", "url": "https://www.epa.gov/cameo", "org": "US EPA"},
            {"title": "EPCRA Section 312 Emergency Planning requirements", "url": "https://www.epa.gov/epcra", "org": "US EPA"},
            {"title": "NOAA ALOHA response tool", "url": "https://response.restoration.noaa.gov/oil-and-chemical-spills/chemical-spills/response-tools/aloha.html", "org": "NOAA"}
        ],
        "controversies_and_changes": [
            "Feb 2026: CAMEO Chemicals updated to v3.0.0 with refreshed chemical database.",
            "Desktop-only architecture limits cloud/mobile deployment scenarios.",
            "Chemical-only focus: no biological, radiological, or nuclear capability.",
            "Widely mandated for US EPCRA Section 312 emergency planning compliance.",
            "Free distribution ensures broad adoption across US fire departments, LEPCs, and hazmat teams."
        ],
        "ecosystem_connections": [
            {"platform": "IMAAC Portal", "relationship": "CAMEO/ALOHA results can inform IMAAC plume assessments"},
            {"platform": "FEMA CBRNResponder", "relationship": "Complementary chemical planning tool for CBRN response ecosystem"},
            {"platform": "HPAC", "relationship": "DoD/DTRA counterpart for military chemical dispersion modelling"},
            {"platform": "Riskaware HASP", "relationship": "UK equivalent for chemical hazard modelling"}
        ],
        "key_urls": {
            "main_site": "https://www.epa.gov/cameo",
            "cameo_chemicals": "https://cameochemicals.noaa.gov",
            "aloha": "https://response.restoration.noaa.gov/oil-and-chemical-spills/chemical-spills/response-tools/aloha.html",
            "marplot": "https://www.epa.gov/cameo/marplot-software"
        },
        "timeline": [
            {"year": 1988, "event": "CAMEO originally developed under EPCRA requirements"},
            {"year": 2000, "event": "ALOHA atmospheric dispersion model integrated"},
            {"year": 2010, "event": "MARPLOT GIS mapping tool added to suite"},
            {"year": 2020, "event": "Continued active maintenance by EPA/NOAA"},
            {"year": 2026, "event": "CAMEO Chemicals v3.0.0 released (February 2026)"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["emergency_planning", "chemical_database", "dispersion_modelling", "mapping", "data_management"],
            "hazard_coverage": ["chemical"],
            "deployment_model": "free desktop software (Windows/Mac)",
            "assessment": "CAMEO Suite is the de-facto US standard for chemical emergency planning, widely mandated under EPCRA. Its chemical-only focus limits CBRN breadth, but the combination of chemical database (CAMEO Chemicals), dispersion modelling (ALOHA), and mapping (MARPLOT) provides comprehensive chemical hazard assessment. Active maintenance (v3.0.0, Feb 2026) and free distribution ensure continued relevance. Desktop-only architecture is the primary modernisation gap."
        }
    }
},

# ── 182  HPAC ──────────────────────────────────────────────────────
"HPAC": {
    "deep_research": {
        "executive_summary": "HPAC (Hazard Prediction and Assessment Capability) is the US DoD/DTRA CBRN dispersion modelling system and primary model for IMAAC emergency response plumes. Score 84/100 reflects multi-hazard CBRN coverage, SCIPUFF transport/diffusion engine, and NATO JCBRN COE training engagement. Limitation: likely restricted distribution (ITAR), Windows-only, and requires 20-25 GB archived met data.",
        "key_publications": [
            {"title": "EPA Biological Response Tools (references HPAC)", "authors": "US EPA", "journal": "EPA.gov", "year": 2024, "url": "https://www.epa.gov/emergency-response-research/biological-response-tools"},
            {"title": "HPAC distributed object architecture (ORNL report)", "authors": "ORNL", "journal": "Oak Ridge National Laboratory", "year": 2005, "url": "https://www.ornl.gov"},
            {"title": "DTRA HPAC-N training course description", "authors": "DTRA", "journal": "Defense Threat Reduction Agency", "year": 2024, "url": "https://www.dtra.mil"}
        ],
        "official_guidelines": [
            {"title": "IMAAC Federal Atmospheric Dispersion Modelling (HPAC primary model)", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac", "org": "FEMA/DTRA"},
            {"title": "NATO JCBRN COE Training Programme", "url": "https://www.jcbrncoe.org", "org": "NATO JCBRN Centre of Excellence"},
            {"title": "DTRA Technical Reachback Division", "url": "https://www.dtra.mil", "org": "DTRA"}
        ],
        "controversies_and_changes": [
            "HPAC is the primary model used by DTRA for IMAAC plume products.",
            "ORNL report documented CORBA/J2EE architecture; may be outdated for current version.",
            "Likely ITAR or other distribution restrictions limit broad access.",
            "DTRA offers 5-day HPAC-N training course for qualified users.",
            "NATO JCBRN Centre of Excellence uses HPAC in training and modelling exercises."
        ],
        "ecosystem_connections": [
            {"platform": "IMAAC Portal", "relationship": "HPAC is primary dispersion model for IMAAC plume products"},
            {"platform": "FEMA CBRNResponder", "relationship": "IMAAC products feed into CBRNResponder common operating picture"},
            {"platform": "DTRA", "relationship": "Developer and operator of HPAC"},
            {"platform": "NATO JCBRN COE", "relationship": "Training and exercise partner using HPAC"},
            {"platform": "CAMEO/ALOHA", "relationship": "Civilian counterpart for chemical dispersion; HPAC covers full CBRN"}
        ],
        "key_urls": {
            "epa_reference": "https://www.epa.gov/emergency-response-research/biological-response-tools",
            "dtra": "https://www.dtra.mil",
            "imaac": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac",
            "jcbrncoe": "https://www.jcbrncoe.org"
        },
        "timeline": [
            {"year": 1997, "event": "HPAC developed by DSWA/DTRA for CBRN dispersion modelling"},
            {"year": 2005, "event": "ORNL documents distributed object architecture (CORBA/J2EE)"},
            {"year": 2011, "event": "Used during Fukushima response for US government assessments"},
            {"year": 2020, "event": "Continued as primary IMAAC model for federal plume products"},
            {"year": 2024, "event": "NATO JCBRN COE training; DTRA HPAC-N 5-day course ongoing"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["dispersion_modelling", "hazard_prediction", "consequence_assessment", "plume_modelling", "training"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "restricted distribution, Windows desktop, DoD/federal use",
            "assessment": "HPAC is the US DoD/DTRA primary CBRN dispersion modelling capability and the model behind IMAAC federal plume products. Unlike civilian tools (CAMEO/ALOHA), HPAC covers all four CBRN hazard categories with the SCIPUFF transport/diffusion engine. NATO JCBRN COE training engagement demonstrates international relevance. Likely restricted distribution and legacy architecture (CORBA/J2EE) are key limitations."
        }
    }
},

# ── 183  EURDEP / ECURIE ──────────────────────────────────────────
"EURDEP / ECURIE": {
    "deep_research": {
        "executive_summary": "EURDEP/ECURIE is the EU's dual-system radiological monitoring and notification platform: EURDEP exchanges near-real-time monitoring data across 39 European countries (est. 1995), while ECURIE provides 24/7 early notification for nuclear/radiological events under Euratom legal basis. Score 83/100 reflects established legal framework, broad European coverage, and decades of operation. Limitation: European scope only, radiological/nuclear focus, and sparse technical implementation details.",
        "key_publications": [
            {"title": "EURDEP Radiological Data Exchange Platform", "authors": "European Commission JRC", "journal": "JRC.ec.europa.eu", "year": 2024, "url": "https://remon.jrc.ec.europa.eu/About/Rad-Data-Exchange"},
            {"title": "ECURIE - European Community Urgent Radiological Information Exchange", "authors": "European Commission", "journal": "EC", "year": 2024, "url": "https://rem.jrc.ec.europa.eu/RemWeb/activities/Ecurie.aspx"},
            {"title": "Council Decision 87/600/Euratom on early exchange of information", "authors": "Council of the European Union", "journal": "Official Journal", "year": 1987, "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31987D0600"}
        ],
        "official_guidelines": [
            {"title": "Euratom Council Decision 87/600 - Early Exchange of Information", "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31987D0600", "org": "European Council"},
            {"title": "Council Directive 2013/59/Euratom - Basic Safety Standards", "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013L0059", "org": "European Council"},
            {"title": "JRC Radiological Environmental Monitoring", "url": "https://remon.jrc.ec.europa.eu", "org": "European Commission JRC"}
        ],
        "controversies_and_changes": [
            "1987: Euratom Council Decision 87/600 established legal basis post-Chernobyl.",
            "1995: EURDEP established for routine radiological data exchange.",
            "2024: 39 European countries linked in EURDEP network.",
            "EURDEP is not designed as a rapid alert system (routine data exchange); ECURIE handles urgent notifications.",
            "Technical implementation details, protocols, and APIs remain sparsely documented publicly."
        ],
        "ecosystem_connections": [
            {"platform": "ARGOS DSS", "relationship": "EURDEP monitoring data feeds into ARGOS consequence assessments"},
            {"platform": "RODOS/JRODOS", "relationship": "EURDEP data supports RODOS radiological decision support"},
            {"platform": "IAEA USIE", "relationship": "International notification system complementing European ECURIE"},
            {"platform": "National Monitoring Networks", "relationship": "39 countries contribute national station data to EURDEP"},
            {"platform": "CTBTO IMS", "relationship": "Complementary global nuclear monitoring; EURDEP focuses on European gamma dose rates"}
        ],
        "key_urls": {
            "main_site": "https://remon.jrc.ec.europa.eu/About/Rad-Data-Exchange",
            "ecurie": "https://rem.jrc.ec.europa.eu/RemWeb/activities/Ecurie.aspx",
            "jrc_rem": "https://remon.jrc.ec.europa.eu",
            "euratom_decision": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31987D0600"
        },
        "timeline": [
            {"year": 1986, "event": "Chernobyl disaster highlights need for European radiological data exchange"},
            {"year": 1987, "event": "Euratom Council Decision 87/600 establishes legal basis for information exchange"},
            {"year": 1995, "event": "EURDEP established for routine radiological monitoring data exchange"},
            {"year": 2013, "event": "BSS Directive 2013/59/Euratom updates regulatory framework"},
            {"year": 2024, "event": "39 European countries linked; continuous operation since 1995"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["monitoring_data_exchange", "early_notification", "radiological_surveillance", "regulatory_compliance"],
            "hazard_coverage": ["radiological", "nuclear"],
            "deployment_model": "EU institutional platform operated by European Commission",
            "assessment": "EURDEP/ECURIE represents the EU's legal and operational framework for radiological monitoring and emergency notification. With 39 countries linked and Euratom legal basis, it is the most comprehensive regional radiological data exchange system. EURDEP handles routine monitoring data while ECURIE provides urgent 24/7 notification. Post-Chernobyl origin ensures strong institutional commitment. Limitation is European-only scope and radiological/nuclear-only coverage."
        }
    }
},

# ── 184  IAEA USIE ─────────────────────────────────────────────────
"IAEA USIE": {
    "deep_research": {
        "executive_summary": "IAEA USIE (Unified System for Information Exchange in Incidents and Emergencies) is the global standard for nuclear/radiological incident notification among 150+ Member States with 1,000+ registered users. Score 84/100 reflects international legal mandate (Early Notification Convention), IRIX structured data exchange standard, encryption/2FA security, and Fukushima-era deployment. Limitation: international exchange only (not local response platform), restricted to designated officials.",
        "key_publications": [
            {"title": "IAEA Notification and Reporting overview", "authors": "IAEA", "journal": "IAEA.org", "year": 2024, "url": "https://www.iaea.org/topics/notification-and-reporting"},
            {"title": "IAEA Convention on Early Notification of a Nuclear Accident", "authors": "IAEA", "journal": "IAEA Legal", "year": 1986, "url": "https://www.iaea.org/topics/nuclear-safety-conventions/convention-early-notification-nuclear-accident"},
            {"title": "IRIX: International Radiological Information Exchange standard", "authors": "IAEA", "journal": "IAEA.org", "year": 2020, "url": "https://www.iaea.org/topics/emergency-preparedness-and-response-epr/international-radiological-information-exchange-irix"}
        ],
        "official_guidelines": [
            {"title": "Convention on Early Notification of a Nuclear Accident (1986)", "url": "https://www.iaea.org/topics/nuclear-safety-conventions/convention-early-notification-nuclear-accident", "org": "IAEA"},
            {"title": "Convention on Assistance in the Case of a Nuclear Accident (1986)", "url": "https://www.iaea.org/topics/nuclear-safety-conventions/convention-assistance-case-nuclear-accident-or-radiological-emergency", "org": "IAEA"},
            {"title": "IAEA EPR Series: Arrangements for Preparedness for a Nuclear or Radiological Emergency", "url": "https://www.iaea.org/publications/11207/arrangements-for-preparedness-for-a-nuclear-or-radiological-emergency", "org": "IAEA"}
        ],
        "controversies_and_changes": [
            "2009: USIE development initiated.",
            "2011: USIE deployed during Fukushima Daiichi nuclear accident response.",
            "IRIX international data standard implemented for structured, machine-readable exchange.",
            "1,000-1,200+ users from 150+ Member States registered (figures vary by source).",
            "Restricted to designated Convention contact points; not accessible to general public or researchers."
        ],
        "ecosystem_connections": [
            {"platform": "ECURIE", "relationship": "European counterpart for regional radiological notification"},
            {"platform": "EURDEP", "relationship": "European monitoring data exchange; USIE handles incident-level notification"},
            {"platform": "CTBTO IDC", "relationship": "Complementary nuclear event monitoring; CTBTO for treaty verification, USIE for emergency response"},
            {"platform": "National Emergency Response Centres", "relationship": "150+ Member State contact points receive USIE notifications"},
            {"platform": "INES Scale", "relationship": "USIE includes INES reporting for event severity classification"}
        ],
        "key_urls": {
            "main_site": "https://www.iaea.org/topics/notification-and-reporting",
            "early_notification_convention": "https://www.iaea.org/topics/nuclear-safety-conventions/convention-early-notification-nuclear-accident",
            "irix": "https://www.iaea.org/topics/emergency-preparedness-and-response-epr/international-radiological-information-exchange-irix",
            "iec": "https://www.iaea.org/topics/emergency-preparedness-and-response-epr"
        },
        "timeline": [
            {"year": 1986, "event": "Early Notification Convention signed post-Chernobyl"},
            {"year": 2009, "event": "USIE development initiated by IAEA IEC"},
            {"year": 2011, "event": "USIE deployed during Fukushima Daiichi nuclear accident"},
            {"year": 2020, "event": "IRIX international data standard implemented"},
            {"year": 2024, "event": "1,000+ users from 150+ Member States; continued operation as global standard"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["emergency_notification", "information_exchange", "ines_reporting", "assistance_requests", "international_coordination"],
            "hazard_coverage": ["radiological", "nuclear"],
            "deployment_model": "IAEA-hosted secure web platform, international access for designated officials",
            "assessment": "IAEA USIE is the global standard for nuclear/radiological emergency notification, backed by international legal conventions (Early Notification and Assistance Conventions, 1986). With 1,000+ users from 150+ Member States, it represents the most broadly adopted international nuclear emergency communication system. IRIX structured data exchange enables machine-readable information sharing. Proven during Fukushima (2011). Limitation is narrow scope (notification/exchange only) and restricted access."
        }
    }
},

# ── 185  CTBTO IDC ─────────────────────────────────────────────────
"CTBTO IDC": {
    "deep_research": {
        "executive_summary": "CTBTO International Data Centre processes data from 321 monitoring stations and 16 radionuclide laboratories across 89 host countries for nuclear test treaty verification. Score 83/100 reflects the most comprehensive global monitoring network for nuclear events, with SEL3 automated products within 6 hours and analyst-reviewed REB within 2 days. Limitation: treaty-monitoring scope restricts access to States Signatories, and it is not a first-responder platform.",
        "key_publications": [
            {"title": "CTBTO International Data Centre overview", "authors": "CTBTO", "journal": "CTBTO.org", "year": 2024, "url": "https://www.ctbto.org/our-work/international-data-centre"},
            {"title": "International Monitoring System overview", "authors": "CTBTO", "journal": "CTBTO.org", "year": 2024, "url": "https://www.ctbto.org/our-work/international-monitoring-system"},
            {"title": "NDCs4All: Building Capacity for CTBT Verification", "authors": "CTBTO", "journal": "CTBTO.org", "year": 2023, "url": "https://www.ctbto.org/our-work/ndcs4all"}
        ],
        "official_guidelines": [
            {"title": "Comprehensive Nuclear-Test-Ban Treaty (CTBT)", "url": "https://www.ctbto.org/the-treaty", "org": "CTBTO"},
            {"title": "IMS Technology: Seismic, Hydroacoustic, Infrasound, Radionuclide", "url": "https://www.ctbto.org/our-work/international-monitoring-system", "org": "CTBTO"},
            {"title": "NDCs4All capacity building initiative", "url": "https://www.ctbto.org/our-work/ndcs4all", "org": "CTBTO"}
        ],
        "controversies_and_changes": [
            "CTBT signed 1996 but not yet in force (key states have not ratified).",
            "Despite non-entry-into-force, IMS/IDC operates as if treaty were active.",
            "321 monitoring stations: seismic (170), hydroacoustic (11), infrasound (60), radionuclide (80).",
            "~90% of planned IMS facilities now operational.",
            "NDCs4All initiative building capacity in developing States Signatories.",
            "Digital signatures embedded in station data for authenticity verification."
        ],
        "ecosystem_connections": [
            {"platform": "National Data Centres", "relationship": "States Signatories operate NDCs receiving IDC products"},
            {"platform": "IAEA USIE", "relationship": "Complementary: CTBTO for treaty monitoring, IAEA for emergency response"},
            {"platform": "EURDEP/ECURIE", "relationship": "European radiological monitoring complementary to global IMS"},
            {"platform": "WMO/Met services", "relationship": "Atmospheric transport modelling supports radionuclide source attribution"}
        ],
        "key_urls": {
            "main_site": "https://www.ctbto.org/our-work/international-data-centre",
            "ims": "https://www.ctbto.org/our-work/international-monitoring-system",
            "ndcs4all": "https://www.ctbto.org/our-work/ndcs4all",
            "treaty": "https://www.ctbto.org/the-treaty",
            "verification": "https://www.ctbto.org/our-work/verification-regime"
        },
        "timeline": [
            {"year": 1996, "event": "Comprehensive Nuclear-Test-Ban Treaty opened for signature"},
            {"year": 1997, "event": "CTBTO Preparatory Commission established; IMS construction begins"},
            {"year": 2006, "event": "North Korea nuclear test detected by IMS network"},
            {"year": 2013, "event": "IMS radionuclide detections confirmed North Korea tests"},
            {"year": 2024, "event": "~90% of 321 IMS stations operational; 89 host countries; NDCs4All initiative"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["nuclear_monitoring", "treaty_verification", "event_detection", "radionuclide_analysis", "data_products"],
            "hazard_coverage": ["radiological", "nuclear", "seismic", "hydroacoustic", "infrasound"],
            "deployment_model": "international treaty organisation, restricted to States Signatories",
            "assessment": "CTBTO IDC operates the most comprehensive global nuclear event monitoring network (321 stations, 16 labs, 89 countries). While primarily for treaty verification, IMS data has critical dual-use value for nuclear emergency detection. SEL3 automated products within 6 hours and analyst-reviewed REB within 2 days provide rapid nuclear event characterisation. Key limitation is treaty-focused mandate and restricted access to States Signatories."
        }
    }
},

# ── 186  SCADACore EnviroLive CBRNE ────────────────────────────────
"SCADACore EnviroLive CBRNE": {
    "deep_research": {
        "executive_summary": "SCADACore EnviroLive is a web-based IIoT remote monitoring platform for CBRNE sensors with cloud dashboards and alert capabilities. Score 76/100 (lowest among CBRN platforms) reflects rapid deployment capability and vendor-agnostic sensor support, but lacks CBRN doctrine messaging, consequence modelling, and independent operational validation.",
        "key_publications": [
            {"title": "SCADACore CBRN/CBRNE Monitoring application page", "authors": "SCADACore", "journal": "SCADACore.com", "year": 2024, "url": "https://envirolive.scadacore.com/applications/cbrn-cbrne-monitoring/"},
            {"title": "SCADACore IIoT Live platform overview", "authors": "SCADACore", "journal": "SCADACore.com", "year": 2024, "url": "https://scadacore.com"}
        ],
        "official_guidelines": [],
        "controversies_and_changes": [
            "Generic IIoT monitoring platform applied to CBRNE use case rather than purpose-built CBRN platform.",
            "No evidence of CBRN-specific doctrine messaging (ATP-45) or consequence modelling.",
            "Commercial subscription model; pricing and service levels not publicly detailed.",
            "Limited independent validation of CBRNE-specific deployment effectiveness."
        ],
        "ecosystem_connections": [
            {"platform": "Various CBRNE sensor vendors", "relationship": "Vendor-agnostic monitoring of heterogeneous sensor types"},
            {"platform": "FEMA CBRNResponder", "relationship": "Potential data feed to national CBRN response platforms"},
            {"platform": "Two Six SIGMA", "relationship": "Higher-capability CBRNE sensor aggregation competitor"}
        ],
        "key_urls": {
            "main_site": "https://envirolive.scadacore.com/applications/cbrn-cbrne-monitoring/",
            "company": "https://scadacore.com"
        },
        "timeline": [
            {"year": 2015, "event": "SCADACore IIoT Live platform established for industrial monitoring"},
            {"year": 2020, "event": "CBRNE monitoring application marketed for sensor networks"},
            {"year": 2024, "event": "Cloud dashboard and alerting capabilities updated"}
        ],
        "cbrn_assessment": {
            "tag": "adjacent_enabling_system",
            "cbrn_functions": ["sensor_monitoring", "alerting", "data_archival", "cloud_dashboard"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "commercial cloud SaaS subscription",
            "assessment": "SCADACore EnviroLive is an IIoT monitoring platform with CBRNE application rather than a purpose-built CBRN operational platform. It provides sensor data collection, cloud dashboards, and alerting but lacks CBRN doctrine messaging, consequence modelling, and operational workflow management. Classified as adjacent enabling system rather than true CBRN platform. Useful for basic sensor monitoring but insufficient for full CBRN operations."
        }
    }
},

# ── 187  Bertin Environics EnviScreen Operix ───────────────────────
"Bertin Environics EnviScreen Operix": {
    "deep_research": {
        "executive_summary": "Bertin Environics EnviScreen Operix is a CBRN incident management and common operating picture platform with vendor-agnostic sensor integration, claimed in use across 70+ countries (for Environics solutions broadly). Score 80/100 reflects full CBRN incident workflow and integrated COP capability. Limitation: limited English documentation and transparent technical standards information.",
        "key_publications": [
            {"title": "Bertin Environics product portfolio", "authors": "Bertin Environics", "journal": "Bertin-Environics.com", "year": 2024, "url": "https://www.bertin-environics.com/"},
            {"title": "Bertin Group company overview", "authors": "Bertin Group", "journal": "Bertin.fr", "year": 2024, "url": "https://www.bertin.fr"}
        ],
        "official_guidelines": [],
        "controversies_and_changes": [
            "70+ countries claim is for Environics solutions broadly (including hardware detectors), not specifically EnviScreen software.",
            "Limited English-language documentation of standards compliance and technical architecture.",
            "Vendor-agnostic sensor integration: connects multiple manufacturers' CBRN detectors.",
            "Canadian/European dual identity (Bertin Environics Canada / Bertin Group France)."
        ],
        "ecosystem_connections": [
            {"platform": "Environics CBRN detectors", "relationship": "Primary hardware sensor integration (ChemProX, etc.)"},
            {"platform": "Third-party CBRN sensors", "relationship": "Vendor-agnostic integration with multiple manufacturers"},
            {"platform": "Bruhn NewTech CBRN Suite", "relationship": "Competing European CBRN software platform"},
            {"platform": "Saab AWR", "relationship": "Competing CBRN detection and warning system"}
        ],
        "key_urls": {
            "main_site": "https://www.bertin-environics.com/",
            "bertin_group": "https://www.bertin.fr"
        },
        "timeline": [
            {"year": 2005, "event": "Environics established in Finnish CBRN detection market"},
            {"year": 2018, "event": "Bertin Group acquires Environics; creates Bertin Environics"},
            {"year": 2020, "event": "EnviScreen Operix platform marketed for incident management"},
            {"year": 2024, "event": "Solutions marketed across 70+ countries; continued COP development"}
        ],
        "cbrn_assessment": {
            "tag": "true_cbrn_operational_platform",
            "cbrn_functions": ["incident_management", "common_operating_picture", "sensor_integration", "command_control", "monitoring"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "on-premise and field deployable",
            "assessment": "Bertin Environics EnviScreen Operix provides CBRN incident management with a common operating picture integrating sensors, GIS, weather, and sampling data. The vendor-agnostic sensor integration and full CBRN incident workflow make it a comprehensive operational platform. The 70+ country presence (for Environics solutions broadly) indicates market reach. Key limitation is limited transparency on technical standards and architecture."
        }
    }
},

# ── 188  RadResponder ──────────────────────────────────────────────
"RadResponder": {
    "deep_research": {
        "executive_summary": "RadResponder is the US national standard for radiological data collection and management, operated by FEMA with multi-agency support (DHS, EPA, DOE). Score 82/100 reflects free access for eligible US organisations, DHS PIA-documented privacy compliance (PIA-054), and integration into the CBRNResponder ecosystem. Limitation: radiological-only and US-specific.",
        "key_publications": [
            {"title": "DHS PIA-054 RadResponder Network", "authors": "DHS", "journal": "DHS.gov", "year": 2025, "url": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network"},
            {"title": "FEMA RadResponder overview", "authors": "FEMA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/rad-responder"},
            {"title": "RadResponder Standard Operating Guidance", "authors": "FEMA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/rad-responder"}
        ],
        "official_guidelines": [
            {"title": "FEMA Radiological Response Capabilities", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/rad-responder", "org": "FEMA"},
            {"title": "DHS Privacy Impact Assessment PIA-054", "url": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network", "org": "DHS"},
            {"title": "Nuclear/Radiological Incident Annex to NRF", "url": "https://www.fema.gov/emergency-managers/national-preparedness/frameworks/response", "org": "FEMA"}
        ],
        "controversies_and_changes": [
            "2011: RadResponder launched post-Fukushima for US radiological response standardisation.",
            "Aug 2019: DHS PIA-054 initial privacy impact assessment.",
            "Apr 2025: DHS PIA-054 updated privacy documentation.",
            "Part of evolving CBRNResponder ecosystem: RadResponder is the most mature module.",
            "Free to eligible US organisations with no procurement barriers."
        ],
        "ecosystem_connections": [
            {"platform": "FEMA CBRNResponder Network", "relationship": "Core radiological module within CBRNResponder (rank 178)"},
            {"platform": "ChemResponder", "relationship": "Sister platform for chemical incident data"},
            {"platform": "BioResponder", "relationship": "Sister platform for biological incident data (in development)"},
            {"platform": "IMAAC Portal", "relationship": "Plume modelling results inform RadResponder field operations"},
            {"platform": "EPA/DOE", "relationship": "Multi-agency support for radiological expertise"}
        ],
        "key_urls": {
            "main_site": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/rad-responder",
            "dhs_pia": "https://www.dhs.gov/publication/dhsfemapia-054-radresponder-network",
            "cbrnresponder": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools"
        },
        "timeline": [
            {"year": 2011, "event": "RadResponder launched post-Fukushima for US radiological data standardisation"},
            {"year": 2019, "event": "DHS PIA-054 initial privacy impact assessment (August)"},
            {"year": 2022, "event": "Integration into CBRNResponder common operating platform concept"},
            {"year": 2025, "event": "DHS PIA-054 updated (April); continued as US national rad data standard"}
        ],
        "cbrn_assessment": {
            "tag": "cbrn_specific_module",
            "cbrn_functions": ["radiological_data_collection", "data_standardisation", "field_data_management", "analysis", "mitigation_support"],
            "hazard_coverage": ["radiological"],
            "deployment_model": "free US federal web platform for eligible organisations",
            "assessment": "RadResponder is the US national standard for field radiological data collection, serving as the most mature module within the CBRNResponder ecosystem. DHS PIA-054 provides documented privacy compliance. Multi-agency support (FEMA/DHS/EPA/DOE) ensures institutional backing. Classified as CBRN-specific module rather than full platform due to radiological-only focus. Free access removes procurement barriers for US responder organisations."
        }
    }
},

# ── 189  IMAAC Portal ──────────────────────────────────────────────
"IMAAC Portal": {
    "deep_research": {
        "executive_summary": "IMAAC (Interagency Modeling and Atmospheric Assessment Center) Portal provides no-cost expert plume modelling support for CBRNE incidents, coordinated by FEMA with DTRA/HPAC as the primary model. Score 83/100 reflects federal-level coordination, no-cost expert support, and integration into the CBRNResponder ecosystem. Limitation: modelling service only (not incident management platform), US-specific activation process.",
        "key_publications": [
            {"title": "FEMA IMAAC overview", "authors": "FEMA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac"},
            {"title": "IMAAC Technical Operations Center description", "authors": "DHS/DTRA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac"},
            {"title": "National Response Framework - Nuclear/Radiological Incident Annex", "authors": "FEMA", "journal": "FEMA.gov", "year": 2024, "url": "https://www.fema.gov/emergency-managers/national-preparedness/frameworks/response"}
        ],
        "official_guidelines": [
            {"title": "IMAAC Federal Capability overview", "url": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac", "org": "FEMA"},
            {"title": "National Response Framework", "url": "https://www.fema.gov/emergency-managers/national-preparedness/frameworks/response", "org": "FEMA"},
            {"title": "Homeland Security Presidential Directive 5 (HSPD-5)", "url": "https://www.dhs.gov/presidential-directives", "org": "DHS"}
        ],
        "controversies_and_changes": [
            "IMAAC coordinates federal atmospheric assessment; does not perform modelling itself (DTRA/HPAC is primary model).",
            "No-cost expert support for federal, state, local, tribal, and territorial responders.",
            "US-specific activation process through FEMA/DHS coordination.",
            "Integration into CBRNResponder ecosystem provides unified access to plume products.",
            "Exercises and training maintain operational readiness between real-world activations."
        ],
        "ecosystem_connections": [
            {"platform": "HPAC", "relationship": "Primary dispersion model used by DTRA for IMAAC plume products (rank 182)"},
            {"platform": "FEMA CBRNResponder Network", "relationship": "IMAAC Portal integrated into CBRNResponder (rank 178)"},
            {"platform": "DTRA", "relationship": "Provides technical modelling capability for IMAAC"},
            {"platform": "CAMEO/ALOHA", "relationship": "Complementary chemical dispersion tools for local-level planning"},
            {"platform": "RadResponder", "relationship": "Field radiological data informs IMAAC model inputs"}
        ],
        "key_urls": {
            "main_site": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/imaac",
            "cbrnresponder": "https://www.fema.gov/emergency-managers/practitioners/hazardous-response-capabilities/cbrn-tools",
            "nrf": "https://www.fema.gov/emergency-managers/national-preparedness/frameworks/response"
        },
        "timeline": [
            {"year": 2004, "event": "IMAAC established under Homeland Security Presidential Directive 5"},
            {"year": 2011, "event": "Activated during Fukushima nuclear accident for US protective action assessments"},
            {"year": 2018, "event": "Integration into CBRNResponder common operating platform"},
            {"year": 2024, "event": "Continued operation with regular exercises and training; integrated with CBRNResponder"}
        ],
        "cbrn_assessment": {
            "tag": "cbrn_specific_module",
            "cbrn_functions": ["atmospheric_assessment", "plume_modelling", "consequence_coordination", "expert_support", "federal_coordination"],
            "hazard_coverage": ["chemical", "biological", "radiological", "nuclear"],
            "deployment_model": "US federal capability, no-cost for eligible users, activated via FEMA coordination",
            "assessment": "IMAAC Portal is the US federal coordination mechanism for atmospheric dispersion assessment during CBRNE incidents. It provides no-cost expert plume modelling by coordinating DTRA/HPAC and other federal modelling resources. Classified as CBRN-specific module rather than full platform because it is a modelling service rather than an incident management or sensor platform. Key strength is federal-level coordination and no-cost expert support. Integration into CBRNResponder ecosystem provides unified access to plume products."
        }
    }
}

}  # end CBRN_DEEP_PROFILES

# =====================================================================
# CBRN CROSS-PLATFORM COMPARISON
# =====================================================================
CBRN_CROSS_PLATFORM_COMPARISON = {
    "generated": "2026-03-17",
    "platforms_compared": 20,
    "assessment_type": "CBRN Operational Platforms (L4_CBRN_Operational)",
    "comparison_axes": [
        {
            "axis": "CBRN Classification",
            "values": {
                "Saab AWR": "True CBRN operational platform",
                "ENSCO SENTRY": "True CBRN operational platform",
                "Two Six SIGMA": "True CBRN operational platform",
                "Riskaware UrbanAware / HASP Suite": "True CBRN operational platform",
                "Observis ObSAS": "True CBRN operational platform",
                "Bruhn NewTech CBRN Suite": "True CBRN operational platform",
                "HAVELSAN Counter-CBRN Suite": "True CBRN operational platform",
                "Systematic SitaWare CBRN Module": "CBRN-specific module (C2 integration)",
                "FEMA CBRNResponder Network": "True CBRN operational platform",
                "ARGOS DSS": "True CBRN operational platform",
                "RODOS / JRODOS": "True CBRN operational platform",
                "CAMEO Suite (EPA/NOAA)": "True CBRN operational platform (chemical only)",
                "HPAC": "True CBRN operational platform",
                "EURDEP / ECURIE": "True CBRN operational platform",
                "IAEA USIE": "True CBRN operational platform",
                "CTBTO IDC": "True CBRN operational platform",
                "SCADACore EnviroLive CBRNE": "Adjacent enabling system",
                "Bertin Environics EnviScreen Operix": "True CBRN operational platform",
                "RadResponder": "CBRN-specific module (radiological)",
                "IMAAC Portal": "CBRN-specific module (modelling service)"
            }
        },
        {
            "axis": "Hazard Coverage",
            "values": {
                "Saab AWR": "Full CBRN",
                "ENSCO SENTRY": "Full CBRNe",
                "Two Six SIGMA": "Full CBRN",
                "Riskaware UrbanAware / HASP Suite": "C-B-R (no nuclear)",
                "Observis ObSAS": "Full CBRN",
                "Bruhn NewTech CBRN Suite": "Full CBRN",
                "HAVELSAN Counter-CBRN Suite": "Full CBRN",
                "Systematic SitaWare CBRN Module": "Full CBRN",
                "FEMA CBRNResponder Network": "Full CBRN",
                "ARGOS DSS": "C-R-N (no biological)",
                "RODOS / JRODOS": "R-N only",
                "CAMEO Suite (EPA/NOAA)": "Chemical only",
                "HPAC": "Full CBRN",
                "EURDEP / ECURIE": "R-N only",
                "IAEA USIE": "R-N only",
                "CTBTO IDC": "R-N + seismic/hydro/infra",
                "SCADACore EnviroLive CBRNE": "Full CBRN (sensor-dependent)",
                "Bertin Environics EnviScreen Operix": "Full CBRN",
                "RadResponder": "Radiological only",
                "IMAAC Portal": "Full CBRN"
            }
        },
        {
            "axis": "Geographic Scope",
            "values": {
                "Saab AWR": "Kuwait (national); defence export",
                "ENSCO SENTRY": "US DoD/DHS (Pentagon + NCR)",
                "Two Six SIGMA": "US (DARPA heritage); AWS commercial",
                "Riskaware UrbanAware / HASP Suite": "UK (Dstl heritage); export",
                "Observis ObSAS": "Finland; global marketing",
                "Bruhn NewTech CBRN Suite": "4/5 NATO countries + 10+ PfP (claimed)",
                "HAVELSAN Counter-CBRN Suite": "Turkey (national)",
                "Systematic SitaWare CBRN Module": "50+ nations via SitaWare; 18 NATO",
                "FEMA CBRNResponder Network": "US national (2,200+ orgs)",
                "ARGOS DSS": "13 countries (400M+ people)",
                "RODOS / JRODOS": "Germany + Switzerland",
                "CAMEO Suite (EPA/NOAA)": "US nationwide (free download)",
                "HPAC": "US DoD + NATO training",
                "EURDEP / ECURIE": "39 European countries",
                "IAEA USIE": "150+ IAEA Member States",
                "CTBTO IDC": "89 host countries (321 stations)",
                "SCADACore EnviroLive CBRNE": "Commercial (global)",
                "Bertin Environics EnviScreen Operix": "70+ countries (Environics broadly)",
                "RadResponder": "US national",
                "IMAAC Portal": "US federal"
            }
        },
        {
            "axis": "Access Model",
            "values": {
                "Saab AWR": "Defence procurement",
                "ENSCO SENTRY": "Defence procurement (ITAR)",
                "Two Six SIGMA": "Commercial SaaS (AWS Marketplace)",
                "Riskaware UrbanAware / HASP Suite": "Commercial/defence procurement",
                "Observis ObSAS": "Commercial (SaaS/on-prem)",
                "Bruhn NewTech CBRN Suite": "Defence procurement",
                "HAVELSAN Counter-CBRN Suite": "Turkish defence (sovereign)",
                "Systematic SitaWare CBRN Module": "Defence procurement (NATO)",
                "FEMA CBRNResponder Network": "Free (US eligible orgs)",
                "ARGOS DSS": "Consortium membership",
                "RODOS / JRODOS": "Government authority only",
                "CAMEO Suite (EPA/NOAA)": "Free download",
                "HPAC": "Restricted distribution (DoD)",
                "EURDEP / ECURIE": "EU institutional",
                "IAEA USIE": "IAEA Member States (designated officials)",
                "CTBTO IDC": "States Signatories only",
                "SCADACore EnviroLive CBRNE": "Commercial subscription",
                "Bertin Environics EnviScreen Operix": "Commercial/defence",
                "RadResponder": "Free (US eligible orgs)",
                "IMAAC Portal": "Free (US federal activation)"
            }
        },
        {
            "axis": "Primary Strength",
            "values": {
                "Saab AWR": "National-scale sensor network (Kuwait proof)",
                "ENSCO SENTRY": "Pentagon since 2002; enterprise integration",
                "Two Six SIGMA": "DARPA heritage; cloud-native; 30+ sensors",
                "Riskaware UrbanAware / HASP Suite": "UK Dstl scientific modelling pedigree",
                "Observis ObSAS": "Modern web stack; flexible deployment",
                "Bruhn NewTech CBRN Suite": "Most comprehensive NATO CBRN suite",
                "HAVELSAN Counter-CBRN Suite": "Sovereign Turkish CBRN capability",
                "Systematic SitaWare CBRN Module": "NATO-selected C2 CBRN standard",
                "FEMA CBRNResponder Network": "Largest CBRN response community (13K+)",
                "ARGOS DSS": "25+ years operational; 13 countries",
                "RODOS / JRODOS": "German national rad emergency standard",
                "CAMEO Suite (EPA/NOAA)": "Free; US-mandated chemical planning",
                "HPAC": "Primary IMAAC model; full CBRN",
                "EURDEP / ECURIE": "39-country EU legal framework",
                "IAEA USIE": "Global legal mandate (150+ states)",
                "CTBTO IDC": "321 stations; nuclear treaty verification",
                "SCADACore EnviroLive CBRNE": "Rapid IIoT deployment",
                "Bertin Environics EnviScreen Operix": "Full incident COP; 70+ countries",
                "RadResponder": "US national rad data standard; free",
                "IMAAC Portal": "No-cost federal expert modelling"
            }
        },
        {
            "axis": "Primary Limitation",
            "values": {
                "Saab AWR": "Defence-only; limited documentation",
                "ENSCO SENTRY": "ITAR restricted; facility-focused",
                "Two Six SIGMA": "Limited consequence modelling",
                "Riskaware UrbanAware / HASP Suite": "Modelling only; no sensor/incident mgmt",
                "Observis ObSAS": "Small company; limited proof of scale",
                "Bruhn NewTech CBRN Suite": "Vendor-sourced claims; limited validation",
                "HAVELSAN Counter-CBRN Suite": "Limited English docs; export uncertain",
                "Systematic SitaWare CBRN Module": "Module only; needs external sensors",
                "FEMA CBRNResponder Network": "US-only; BioResponder in development",
                "ARGOS DSS": "Windows-only; consortium complexity",
                "RODOS / JRODOS": "Rad/nuclear only; no chem/bio",
                "CAMEO Suite (EPA/NOAA)": "Chemical only; desktop only",
                "HPAC": "Restricted; legacy architecture",
                "EURDEP / ECURIE": "EU only; rad/nuclear only",
                "IAEA USIE": "Notification only; restricted access",
                "CTBTO IDC": "Treaty scope; not first-responder",
                "SCADACore EnviroLive CBRNE": "No doctrine; no modelling; no validation",
                "Bertin Environics EnviScreen Operix": "Limited standards transparency",
                "RadResponder": "Rad only; US only",
                "IMAAC Portal": "Service only; US activation process"
            }
        }
    ]
}

# =====================================================================
# CBRN EXECUTIVE SUMMARY
# =====================================================================
CBRN_EXECUTIVE_SUMMARY = {
    "generated": "2026-03-17",
    "title": "CBRN Operational Digital Platforms - Executive Assessment",
    "total_platforms": 20,
    "score_range": "76-88",
    "layer": "L4_CBRN_Operational",
    "key_findings": [
        "20 CBRN operational platforms assessed with scores ranging from 76 (SCADACore EnviroLive) to 88 (Saab AWR).",
        "Classification: 14 true CBRN operational platforms, 3 CBRN-specific modules, 1 adjacent enabling system, 2 partial-scope platforms.",
        "Geographic distribution: 7 European (Saab, Riskaware, Observis, Bruhn, HAVELSAN, Systematic, Bertin), 8 US (ENSCO, Two Six, FEMA, HPAC, CAMEO, RadResponder, IMAAC, SCADACore), 5 international (ARGOS, RODOS, EURDEP, IAEA, CTBTO).",
        "Full CBRN coverage: Only 10 platforms cover all four hazard types (chemical, biological, radiological, nuclear).",
        "NATO alignment: Saab AWR, Bruhn NewTech, Observis, HAVELSAN, and SitaWare implement ATP-45/APP-11 standards.",
        "Largest operational footprints: IAEA USIE (150+ states), CTBTO IDC (89 countries), Bertin Environics (70+ countries), SitaWare (50+ nations), EURDEP (39 countries), ARGOS (13 countries).",
        "US ecosystem integration: FEMA CBRNResponder, RadResponder, IMAAC Portal, HPAC, and CAMEO form an integrated US CBRN response capability."
    ],
    "recommendations": [
        "Priority integration targets: Connect CBRN sensor platforms (Saab, ENSCO, Two Six) with consequence assessment tools (ARGOS, HPAC, RODOS).",
        "Gap: No single platform provides end-to-end detection-to-decision capability across all CBRN hazards.",
        "NATO standardisation: SitaWare CBRN + Bruhn NewTech integration represents the most comprehensive NATO solution.",
        "Civil-military integration: FEMA CBRNResponder ecosystem (RadResponder + ChemResponder + BioResponder + IMAAC) is the most advanced civil CBRN platform.",
        "Cloud modernisation needed: Legacy desktop architectures (CAMEO, RODOS, HPAC, ARGOS) limit interoperability.",
        "Biological gap: Most CBRN platforms have weakest capability in biological hazard detection and assessment."
    ]
}

# =====================================================================
# ENRICHMENT ENGINE
# =====================================================================
def main():
    print(f"{'[DRY RUN] ' if DRY_RUN else ''}BioR Deep-Research Enrichment - CBRN Operational Platforms (170-189)")
    print("=" * 70)

    # Load master data
    with open(MASTER) as f:
        data = json.load(f)

    updated = 0
    not_found = []

    for name, deep in CBRN_DEEP_PROFILES.items():
        print(f"\n  Processing: {name}")

        # Find in data['all'] by name
        found_all = False
        for p in data['all']:
            if p.get('n') == name:
                found_all = True
                if not DRY_RUN:
                    p['deep_research'] = deep['deep_research']
                print(f"    Updated in all[] (rank #{p.get('r', '?')})")
                break

        if not found_all:
            not_found.append(name)
            print(f"    NOT FOUND in all[]")
            continue

        # Find in layers['L4_CBRN_Operational']
        found_layer = False
        cbrn_layer = data['layers'].get('L4_CBRN_Operational', [])
        for lp in cbrn_layer:
            if lp.get('n') == name:
                found_layer = True
                if not DRY_RUN:
                    lp['deep_research'] = deep['deep_research']
                print(f"    Updated in layers[L4_CBRN_Operational]")
                break

        if not found_layer:
            print(f"    NOT found in L4_CBRN_Operational layer (checked all[] only)")

        updated += 1

    # Add CBRN comparison and executive summary to meta
    if not DRY_RUN:
        data['meta']['cbrn_deep_research_enrichment'] = {
            'timestamp': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
            'platforms_enriched': updated,
            'version': 'v1.0_cbrn_deep_research',
            'method': 'manual_web_research_with_citations'
        }
        data['meta']['cbrn_cross_platform_comparison'] = CBRN_CROSS_PLATFORM_COMPARISON
        data['meta']['cbrn_executive_summary'] = CBRN_EXECUTIVE_SUMMARY

        # Update enrichment timestamp
        data['meta']['cbrn_enrichment_update'] = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())

        # Count deep_research platforms
        deep_count = sum(1 for p in data['all']
                        if p.get('deep_research') and isinstance(p['deep_research'], dict))
        data['meta']['deep_researched_count'] = deep_count

        # Save with backup
        backup_path = MASTER + ".pre_cbrn_backup"
        import shutil
        shutil.copy2(MASTER, backup_path)
        print(f"\n  Backup saved to: {backup_path}")

        with open(MASTER, 'w') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  Saved to {MASTER}")

    # Summary
    print("\n" + "=" * 70)
    print(f"CBRN DEEP-RESEARCH ENRICHMENT COMPLETE")
    print(f"  CBRN platforms updated: {updated}/{len(CBRN_DEEP_PROFILES)}")
    if not_found:
        print(f"  Not found: {', '.join(not_found)}")
    print(f"  CBRN comparison matrix: {'added to meta' if not DRY_RUN else 'would be added'}")
    print(f"  CBRN executive summary: {'added to meta' if not DRY_RUN else 'would be added'}")
    print(f"  Deep research fields: executive_summary, key_publications, official_guidelines,")
    print(f"                        controversies_and_changes, ecosystem_connections, key_urls,")
    print(f"                        timeline, cbrn_assessment")
    print("=" * 70)


if __name__ == '__main__':
    main()
