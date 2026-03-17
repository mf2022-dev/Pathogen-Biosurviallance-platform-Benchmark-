#!/usr/bin/env python3
"""
Master Injection Script — Injects deep_research for 40 platforms + meta enrichment
==================================================================================
Combines:
  - Batch A: platforms #11-20  (10 platforms)
  - Batch B: platforms #21-30  (10 platforms)
  - Batch C: CBRN platforms #170-189  (20 platforms)
  - Executive summary, evaluation framework, comparative matrix, recommendations/roadmap

Run:
    python3 inject_all.py            # apply enrichment
    python3 inject_all.py --dry-run  # preview only
"""

import json, os, sys, copy, time
from pathlib import Path

BASE    = os.path.dirname(os.path.abspath(__file__))
MASTER  = os.path.join(BASE, "optB_enriched.json")
DRY_RUN = "--dry-run" in sys.argv

# Import profile data from companion scripts
sys.path.insert(0, BASE)
from enrich_all_40 import BATCH_A, BATCH_B
from cbrn_profiles import BATCH_C_CBRN

# =====================================================================
# EXECUTIVE SUMMARY & ENRICHMENT PIPELINE METADATA
# =====================================================================

ENRICHMENT_META = {
    "executive_summary": {
        "title": "BioR Benchmark v3.0 — Deep Research Enrichment Executive Summary",
        "date": "2026-03-17",
        "scope": "189 platforms across 5 layers (L1-L5) including 20 CBRN operational platforms",
        "key_findings": [
            "No single CBRN platform publicly delivers end-to-end capability across all CBRN domains (chemical, biological, radiological, nuclear).",
            "The recommended path for sovereign national capability is an integration stack: sensor fusion + geospatial COP + incident/command layer + interoperable interfaces to international data exchanges (ATP-45/APP-11, EURDEP/ECURIE, IAEA USIE, CTBTO IDC).",
            "Top biosurveillance platforms (Nextstrain, SORMAS, DHIS2) achieve 89-95/100 through open-source models, strong community, and WHO/national agency adoption.",
            "CBRN platforms score 76-88/100 with strongest platforms (Saab AWR 88, ENSCO SENTRY 87, SitaWare CBRN 86, ARGOS 86) demonstrating mature operational deployments.",
            "The GISAID data-feed disruption (Oct 2025) is the single highest-impact risk event affecting the top-10 genomic biosurveillance platforms.",
            "Environmental biosurveillance (wastewater) is the fastest-growing segment, with NWSS, WastewaterSCAN, and Ginkgo Biosecurity expanding from COVID-19 to 6-19 pathogen targets.",
            "AI/NLP-driven epidemic intelligence (BlueDot, Airfinity, HealthMap, BEACON) provides 6-72 hour early warning advantage over traditional reporting systems.",
            "Open-source vs. commercial tension: 60% of top-30 platforms are open-source; all CBRN operational platforms are proprietary/government-restricted."
        ],
        "methodology": "Composite scoring across 10 weighted dimensions (data integration 12%, analytics 12%, security 12%, scalability 10%, interoperability 10%, real-time 10%, visualization 10%, documentation 8%, accessibility 8%, community 8%). Deep research enrichment adds executive summaries, key publications (with DOIs), official guidelines, controversies, ecosystem connections, key URLs, timelines, and CBRN assessments.",
        "total_deep_research_platforms": 50,
        "breakdown": {
            "top_10_previously_enriched": 10,
            "platforms_11_to_30": 20,
            "cbrn_170_to_189": 20
        }
    },

    "evaluation_framework": {
        "title": "BioR 10-Dimension Evaluation Framework",
        "version": "3.0",
        "dimensions": [
            {"name": "Data Integration", "weight": 0.12, "global_mean": 79.3, "description": "Ability to ingest, normalise, and link data from diverse sources"},
            {"name": "Analytics Capability", "weight": 0.12, "global_mean": 79.3, "description": "Depth and sophistication of analytical tools and algorithms"},
            {"name": "Visualization", "weight": 0.10, "global_mean": 76.6, "description": "Quality and interactivity of data presentation and dashboards"},
            {"name": "Accessibility", "weight": 0.08, "global_mean": 73.9, "description": "Ease of access, onboarding, and use across skill levels"},
            {"name": "Scalability", "weight": 0.10, "global_mean": 79.2, "description": "Ability to handle increasing data volumes and user loads"},
            {"name": "Documentation", "weight": 0.08, "global_mean": 77.9, "description": "Quality and completeness of documentation and training materials"},
            {"name": "Community Support", "weight": 0.08, "global_mean": 75.0, "description": "Size, activity, and helpfulness of user/developer community"},
            {"name": "Security & Compliance", "weight": 0.12, "global_mean": 82.5, "description": "Data protection, access control, regulatory compliance"},
            {"name": "Interoperability", "weight": 0.10, "global_mean": 77.3, "description": "Standards support, API availability, data exchange capability"},
            {"name": "Real-Time Capability", "weight": 0.10, "global_mean": 77.7, "description": "Timeliness of data ingestion, processing, and alerting"}
        ],
        "layer_architecture": {
            "L1_Surveillance": {"count": 57, "description": "Clinical, syndromic, and environmental surveillance systems"},
            "L2_Genomic": {"count": 59, "description": "Genomic sequencing, bioinformatics, and pathogen characterisation"},
            "L3_Defense": {"count": 39, "description": "Military and biodefense surveillance and intelligence"},
            "L4_Hardware": {"count": 9, "description": "Physical detection equipment and sensor systems"},
            "L4_CBRN_Operational": {"count": 20, "description": "CBRN operational digital platforms for detection, warning, modelling, and incident management"},
            "L5_Policy": {"count": 5, "description": "Policy frameworks, governance, and regulatory systems"}
        }
    },

    "comparative_matrix_11_to_30": {
        "title": "Cross-Platform Comparison: Platforms #11-30",
        "generated": "2026-03-17",
        "axes": {
            "Primary Function": {
                "Galaxy Project": "Bioinformatics Workflow Engine",
                "NWSS": "Environmental Wastewater Surveillance",
                "BV-BRC": "Pathogen Genome Database & Analysis",
                "EpiCollect5": "Mobile Field Data Collection",
                "Pathoplexus": "Open Pathogen Data Sharing",
                "Airfinity": "AI Epidemic Intelligence (Commercial)",
                "HealthMap": "AI Disease Intelligence (Open)",
                "BlueDot": "AI Epidemic Early Warning (Commercial)",
                "GEIS": "Military Global Biosurveillance",
                "ProMED": "Expert-Curated Outbreak Reporting",
                "CARD / RGI": "AMR Gene Database & Prediction",
                "OpenELIS Global": "Laboratory Information System",
                "Ginkgo Biosecurity": "Metagenomic Biosurveillance",
                "WHONET": "AMR Data Management & Analysis",
                "CDC TGS": "Traveler-Based Genomic Surveillance",
                "BEACON": "Open-Source AI Biothreat Detection",
                "NNDSS": "National Notifiable Disease Reporting",
                "ReportStream": "Public Health Data Exchange Pipeline",
                "WastewaterSCAN": "Academic Wastewater Monitoring Network",
                "Bactopia": "Bacterial Genome Analysis Pipeline"
            },
            "Open Source": {
                "Galaxy Project": True, "NWSS": False, "BV-BRC": True, "EpiCollect5": True,
                "Pathoplexus": True, "Airfinity": False, "HealthMap": True, "BlueDot": False,
                "GEIS": False, "ProMED": True, "CARD / RGI": True, "OpenELIS Global": True,
                "Ginkgo Biosecurity": False, "WHONET": True, "CDC TGS": False, "BEACON": True,
                "NNDSS": False, "ReportStream": True, "WastewaterSCAN": True, "Bactopia": True
            },
            "Geographic Scope": {
                "Galaxy Project": "Global", "NWSS": "US", "BV-BRC": "Global", "EpiCollect5": "Global",
                "Pathoplexus": "Global", "Airfinity": "Global", "HealthMap": "Global", "BlueDot": "Global",
                "GEIS": "Global (30+ countries)", "ProMED": "Global (200+ countries)", "CARD / RGI": "Global",
                "OpenELIS Global": "Global (LMIC focus)", "Ginkgo Biosecurity": "US (expanding)",
                "WHONET": "Global (130+ countries)", "CDC TGS": "US airports", "BEACON": "Global",
                "NNDSS": "US", "ReportStream": "US", "WastewaterSCAN": "US", "Bactopia": "Global"
            },
            "CBRN Relevance": {
                "Galaxy Project": None, "NWSS": "adjacent_enabling_system",
                "BV-BRC": "adjacent_enabling_system", "EpiCollect5": None,
                "Pathoplexus": None, "Airfinity": None,
                "HealthMap": "adjacent_enabling_system", "BlueDot": "adjacent_enabling_system",
                "GEIS": "true_cbrn_operational_platform", "ProMED": "adjacent_enabling_system",
                "CARD / RGI": "adjacent_enabling_system", "OpenELIS Global": None,
                "Ginkgo Biosecurity": "cbrn_adjacent_early_warning", "WHONET": None,
                "CDC TGS": "cbrn_adjacent_early_warning", "BEACON": "adjacent_enabling_system",
                "NNDSS": "adjacent_enabling_system", "ReportStream": None,
                "WastewaterSCAN": None, "Bactopia": None
            }
        }
    },

    "comparative_matrix_cbrn": {
        "title": "Cross-Platform Comparison: CBRN Operational Platforms #170-189",
        "generated": "2026-03-17",
        "axes": {
            "CBRN Classification": {
                "Saab AWR": "true_cbrn_operational_platform",
                "ENSCO SENTRY": "true_cbrn_operational_platform",
                "Two Six SIGMA": "true_cbrn_operational_platform",
                "Riskaware UrbanAware / HASP Suite": "true_cbrn_operational_platform",
                "Observis ObSAS": "true_cbrn_operational_platform",
                "Bruhn NewTech CBRN Suite": "true_cbrn_operational_platform",
                "HAVELSAN Counter-CBRN Suite": "true_cbrn_operational_platform",
                "Systematic SitaWare CBRN Module": "cbrn_specific_module",
                "FEMA CBRNResponder Network": "true_cbrn_operational_platform",
                "ARGOS DSS": "true_cbrn_operational_platform",
                "RODOS / JRODOS": "true_cbrn_operational_platform",
                "CAMEO Suite (EPA/NOAA)": "true_cbrn_operational_platform",
                "HPAC": "true_cbrn_operational_platform",
                "EURDEP / ECURIE": "true_cbrn_operational_platform",
                "IAEA USIE": "true_cbrn_operational_platform",
                "CTBTO IDC": "true_cbrn_operational_platform",
                "SCADACore EnviroLive CBRNE": "adjacent_enabling_system",
                "Bertin Environics EnviScreen Operix": "true_cbrn_operational_platform",
                "RadResponder": "true_cbrn_operational_platform",
                "IMAAC Portal": "true_cbrn_operational_platform"
            },
            "Primary CBRN Domain": {
                "Saab AWR": "All (CBRN)", "ENSCO SENTRY": "All (CBRNe)",
                "Two Six SIGMA": "All (CBRN + Rad focus)", "Riskaware UrbanAware / HASP Suite": "Chem/Bio/Rad (modelling)",
                "Observis ObSAS": "All (CBRN)", "Bruhn NewTech CBRN Suite": "All (CBRN)",
                "HAVELSAN Counter-CBRN Suite": "All (CBRN)", "Systematic SitaWare CBRN Module": "All (CBRN W&R)",
                "FEMA CBRNResponder Network": "All (CBRN)", "ARGOS DSS": "Rad/Chem/Bio (modelling)",
                "RODOS / JRODOS": "Radiological", "CAMEO Suite (EPA/NOAA)": "Chemical",
                "HPAC": "All (CBRN dispersion)", "EURDEP / ECURIE": "Radiological",
                "IAEA USIE": "Nuclear/Radiological", "CTBTO IDC": "Nuclear",
                "SCADACore EnviroLive CBRNE": "Sensor monitoring", "Bertin Environics EnviScreen Operix": "All (CBRN)",
                "RadResponder": "Radiological", "IMAAC Portal": "All (atmospheric)"
            },
            "Operator Country": {
                "Saab AWR": "Sweden", "ENSCO SENTRY": "USA",
                "Two Six SIGMA": "USA", "Riskaware UrbanAware / HASP Suite": "UK",
                "Observis ObSAS": "Finland", "Bruhn NewTech CBRN Suite": "Denmark",
                "HAVELSAN Counter-CBRN Suite": "Turkey", "Systematic SitaWare CBRN Module": "Denmark",
                "FEMA CBRNResponder Network": "USA", "ARGOS DSS": "Denmark",
                "RODOS / JRODOS": "Germany", "CAMEO Suite (EPA/NOAA)": "USA",
                "HPAC": "USA", "EURDEP / ECURIE": "EU (JRC)",
                "IAEA USIE": "International (IAEA)", "CTBTO IDC": "International (CTBTO)",
                "SCADACore EnviroLive CBRNE": "Canada", "Bertin Environics EnviScreen Operix": "Finland/France",
                "RadResponder": "USA", "IMAAC Portal": "USA"
            },
            "NATO Standard Compliance": {
                "Saab AWR": "ATP-45", "ENSCO SENTRY": "N/A (US facility protection)",
                "Two Six SIGMA": "N/A (sensor-agnostic)", "Riskaware UrbanAware / HASP Suite": "N/A (Dstl heritage)",
                "Observis ObSAS": "ATP-45", "Bruhn NewTech CBRN Suite": "STANAG 2103/ATP-45/AEP-45",
                "HAVELSAN Counter-CBRN Suite": "ATP-45", "Systematic SitaWare CBRN Module": "ATP-45/APP-11",
                "FEMA CBRNResponder Network": "N/A (US national)", "ARGOS DSS": "Partial",
                "RODOS / JRODOS": "N/A (EU)", "CAMEO Suite (EPA/NOAA)": "N/A (civilian)",
                "HPAC": "N/A (US DoD)", "EURDEP / ECURIE": "N/A (EU)",
                "IAEA USIE": "N/A (IAEA)", "CTBTO IDC": "N/A (CTBT)",
                "SCADACore EnviroLive CBRNE": "N/A", "Bertin Environics EnviScreen Operix": "NATO aligned",
                "RadResponder": "N/A (US civilian)", "IMAAC Portal": "N/A (US federal)"
            }
        }
    },

    "recommendations_roadmap": {
        "title": "BioR Benchmark Recommendations & Roadmap",
        "version": "3.0",
        "date": "2026-03-17",
        "sovereign_national_cbrn_architecture": {
            "description": "Recommended reference architecture for a sovereign national CBRN integration stack",
            "layers": [
                {
                    "layer": "Field Sensors",
                    "description": "Fixed, mobile, and deployable CBRN detection equipment",
                    "reference_platforms": ["Saab AWR (sensors)", "Bruhn SafeVita (50+ sensors/20+ manufacturers)", "Observis ObSAS LINK (mobile)"],
                    "key_requirement": "Sensor-agnostic integration supporting multi-vendor equipment"
                },
                {
                    "layer": "Edge Integration / Gateway",
                    "description": "Sensor data aggregation, normalisation, and edge processing",
                    "reference_platforms": ["Two Six SIGMA", "Bruhn SCIM", "HAVELSAN BRIDGE", "ObSAS"],
                    "key_requirement": "Real-time data fusion with reduced false alarm rates"
                },
                {
                    "layer": "National COP / Command Bus",
                    "description": "Geospatial common operating picture with CBRN overlay on military/civilian C2",
                    "reference_platforms": ["Systematic SitaWare CBRN Module", "Bertin EnviScreen Operix", "Saab AWR (COP)"],
                    "key_requirement": "ATP-45/APP-11 messaging compliance for NATO interoperability"
                },
                {
                    "layer": "Warning, Analytics & Decision Support",
                    "description": "Hazard prediction, dispersion modelling, protective action recommendations",
                    "reference_platforms": ["ARGOS DSS", "RODOS/JRODOS", "HPAC", "CAMEO/ALOHA", "Riskaware HASP"],
                    "key_requirement": "Multi-hazard modelling (chem, bio, rad, nuclear) with real-time meteorological input"
                },
                {
                    "layer": "External Reporting Interfaces",
                    "description": "International data exchange and notification systems",
                    "reference_platforms": ["EURDEP/ECURIE (EU radiological)", "IAEA USIE (global nuclear)", "CTBTO IDC (treaty verification)"],
                    "key_requirement": "Interoperable data exchange with international obligation compliance"
                },
                {
                    "layer": "Incident Management & Response",
                    "description": "Multi-agency coordination, resource management, public communication",
                    "reference_platforms": ["FEMA CBRNResponder Network", "RadResponder", "IMAAC Portal"],
                    "key_requirement": "Cross-agency interoperability with training and exercise program"
                }
            ],
            "reference_data_flow": "SENSORS → EDGE_GW → NATIONAL_BUS → COP + ANALYTICS → EXTERNAL_NETWORKS (EU/IAEA/CTBTO)"
        },
        "immediate_actions": [
            "Conduct gap analysis of current national CBRN digital infrastructure against 6-layer reference architecture.",
            "Establish interoperability requirements for ATP-45/APP-11 messaging across all CBRN digital systems.",
            "Evaluate sensor integration middleware (Bruhn SCIM, Two Six SIGMA, ObSAS) for multi-vendor support.",
            "Ensure interfaces to EURDEP/ECURIE, IAEA USIE, and CTBTO IDC meet international notification obligations.",
            "Assess Saab AWR and Bruhn NewTech as potential national-scale CBRN platform candidates."
        ],
        "medium_term_goals": [
            "Integrate biosurveillance intelligence (NWSS, Ginkgo, Nextstrain genomic data) into national CBRN COP for bio-domain awareness.",
            "Deploy AI/NLP epidemic intelligence (BlueDot/BEACON-class) as early warning layer feeding CBRN bio-component.",
            "Establish national wastewater surveillance linked to CBRN bio-detection for dual-use environmental monitoring.",
            "Create common data bus connecting civilian (FEMA/DHS) and military (DoD/GEIS) CBRN platforms.",
            "Develop training and exercise program using CBRN platform simulation capabilities (Saab AWR simulated training, FEMA monthly exercises)."
        ],
        "long_term_vision": [
            "Sovereign end-to-end CBRN digital capability covering all four domains with national integration.",
            "Seamless bidirectional data exchange with NATO allies (via ATP-45/APP-11) and international organisations (IAEA, CTBTO, EU).",
            "AI-augmented decision support combining atmospheric modelling, genomic surveillance, and epidemic intelligence.",
            "Federated approach allowing each national component to be best-in-class while maintaining system-of-systems coherence.",
            "Quarterly update cycle for benchmark reassessment and platform capability evolution tracking."
        ]
    }
}

# =====================================================================
# INJECTION ENGINE
# =====================================================================

def load_master():
    with open(MASTER, 'r') as f:
        return json.load(f)

def save_master(data):
    backup = MASTER + f".backup_{int(time.time())}"
    import shutil
    shutil.copy2(MASTER, backup)
    print(f"✓ Backup created: {backup}")
    
    with open(MASTER, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"✓ Master file saved: {MASTER}")

def match_platform(platforms, name):
    """Match platform by name ('n' field) with fuzzy matching."""
    # Exact match first
    for i, p in enumerate(platforms):
        if p.get('n') == name:
            return i
    
    # Case-insensitive
    for i, p in enumerate(platforms):
        if p.get('n', '').lower() == name.lower():
            return i
    
    # Partial match
    for i, p in enumerate(platforms):
        n = p.get('n', '')
        if name.lower() in n.lower() or n.lower() in name.lower():
            return i
    
    # Description match
    for i, p in enumerate(platforms):
        d = p.get('d', '')
        if name.lower() in d.lower():
            return i
    
    return None

def inject_deep_research(data, batch_name, batch_data):
    """Inject deep_research blocks into matching platforms."""
    platforms = data['all']
    updated = 0
    skipped = 0
    
    for name, enrichment in batch_data.items():
        idx = match_platform(platforms, name)
        if idx is None:
            print(f"  ⚠ SKIP: '{name}' not found in master file")
            skipped += 1
            continue
        
        p = platforms[idx]
        current_name = p.get('n', 'Unknown')
        current_rank = p.get('r', '?')
        
        # Inject deep_research
        if 'deep_research' in enrichment:
            p['deep_research'] = enrichment['deep_research']
            print(f"  ✓ #{current_rank} {current_name}: deep_research injected ({len(enrichment['deep_research'].get('key_publications', []))} pubs)")
            updated += 1
        
        # Optionally update profile fields if provided (for CBRN platforms that need profile updates)
        if 'profile' in enrichment:
            for field, value in enrichment['profile'].items():
                if value and len(str(value)) > len(str(p.get('profile', {}).get(field, ''))) * 0.8:
                    p['profile'][field] = value
    
    print(f"  [{batch_name}] Updated: {updated}, Skipped: {skipped}")
    return updated, skipped

def main():
    print("=" * 70)
    print("BioR Deep-Research Injection — 40 Platforms + Meta Enrichment")
    print("=" * 70)
    
    if DRY_RUN:
        print("*** DRY RUN MODE — no changes will be saved ***\n")
    
    data = load_master()
    
    # Count current deep_research
    current_dr = sum(1 for p in data['all'] if isinstance(p.get('deep_research'), dict) and p['deep_research'])
    print(f"\nCurrent deep_research count: {current_dr}/189\n")
    
    total_updated = 0
    total_skipped = 0
    
    # Batch A: Platforms #11-20
    print("--- Batch A: Platforms #11-20 ---")
    u, s = inject_deep_research(data, "Batch A", BATCH_A)
    total_updated += u
    total_skipped += s
    
    # Batch B: Platforms #21-30
    print("\n--- Batch B: Platforms #21-30 ---")
    u, s = inject_deep_research(data, "Batch B", BATCH_B)
    total_updated += u
    total_skipped += s
    
    # Batch C: CBRN Platforms #170-189
    print("\n--- Batch C: CBRN Platforms #170-189 ---")
    u, s = inject_deep_research(data, "Batch C (CBRN)", BATCH_C_CBRN)
    total_updated += u
    total_skipped += s
    
    # Inject meta enrichment
    print("\n--- Meta Enrichment ---")
    if 'meta' not in data:
        data['meta'] = {}
    
    data['meta']['enrichment_pipeline'] = {
        "executive_summary": ENRICHMENT_META["executive_summary"],
        "evaluation_framework": ENRICHMENT_META["evaluation_framework"],
        "recommendations_roadmap": ENRICHMENT_META["recommendations_roadmap"],
        "last_enrichment": "2026-03-17",
        "enrichment_version": "v2.0_deep_research_40"
    }
    
    # Add comparative matrices
    if 'cross_platform_comparisons' not in data['meta']:
        data['meta']['cross_platform_comparisons'] = {}
    
    data['meta']['cross_platform_comparisons']['platforms_11_to_30'] = ENRICHMENT_META["comparative_matrix_11_to_30"]
    data['meta']['cross_platform_comparisons']['cbrn_170_to_189'] = ENRICHMENT_META["comparative_matrix_cbrn"]
    
    print("  ✓ Executive summary injected")
    print("  ✓ Evaluation framework injected")
    print("  ✓ Comparative matrices injected (11-30 and CBRN)")
    print("  ✓ Recommendations & roadmap injected")
    
    # Update meta counts
    new_dr = sum(1 for p in data['all'] if isinstance(p.get('deep_research'), dict) and p['deep_research'])
    data['meta']['deep_research_count'] = new_dr
    data['meta']['enrichment_updates'] = data['meta'].get('enrichment_updates', [])
    data['meta']['enrichment_updates'].append({
        "date": "2026-03-17",
        "action": "deep_research_40_platforms",
        "details": f"Injected deep_research for {total_updated} platforms (Batch A: #11-20, Batch B: #21-30, Batch C: CBRN #170-189). Added executive summary, evaluation framework, comparative matrices, and recommendations/roadmap.",
        "version": "v2.0_deep_research_40"
    })
    
    # Summary
    print(f"\n{'=' * 70}")
    print(f"SUMMARY")
    print(f"{'=' * 70}")
    print(f"  Platforms updated:  {total_updated}")
    print(f"  Platforms skipped:  {total_skipped}")
    print(f"  Deep research:      {current_dr} → {new_dr}")
    print(f"  Meta enrichment:    Executive summary + framework + matrices + roadmap")
    
    if DRY_RUN:
        print(f"\n*** DRY RUN — no changes saved ***")
    else:
        save_master(data)
        print(f"\n✓ All changes saved to {MASTER}")
    
    # Verification
    print(f"\n--- Verification ---")
    for batch_name, batch_data in [("A", BATCH_A), ("B", BATCH_B), ("C", BATCH_C_CBRN)]:
        for name in batch_data:
            idx = match_platform(data['all'], name)
            if idx is not None:
                p = data['all'][idx]
                has_dr = isinstance(p.get('deep_research'), dict) and bool(p['deep_research'])
                status = "✓" if has_dr else "✗"
                print(f"  {status} Batch {batch_name}: #{p.get('r','?')} {p.get('n','?')}")

if __name__ == "__main__":
    main()
