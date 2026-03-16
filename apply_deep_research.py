#!/usr/bin/env python3
"""
BioR Deep Research Enrichment — Batch Update
=============================================
Injects manually researched, verified profiles into optB_enriched.json.
Source: User-provided deep research on 10 platforms (2026-03-16).
"""

import json
import time
import copy

MASTER = 'optB_enriched.json'

# Load
with open(MASTER) as f:
    data = json.load(f)

# ============================================================
# UPDATED PROFILES — from deep research
# ============================================================

updates = {

    "Nextstrain": {
        "profile": {
            "overview": "Open-source platform for real-time phylogenetic tracking of pathogens, co-created by Trevor Bedford (Fred Hutch) and Richard Neher (Univ. of Basel). Hadfield et al. (2018, Bioinformatics) describe it as integrating analysis and visualisation to aid outbreak response. Evolved from nextflu; public builds published via nextstrain.org since ~2015.",
            "functional_scope": "Builds reproducible workflows ('builds') that filter/subsample sequences and metadata, infer phylogenetic trees, reconstruct mutations, label clades and infer geographic spread, then publish interactive views via Auspice JSON. Used widely for SARS-CoV-2, influenza, Ebola, Zika, dengue, RSV, mpox and more. Supports local/community/public builds and Nextstrain Groups for private datasets.",
            "tech_stack": "Core: Augur (Python, AGPL-3.0, github.com/nextstrain/augur ~426 stars) for phylogenetic pipelines; Auspice (JavaScript/TypeScript, AGPL-3.0, github.com/nextstrain/auspice ~305 stars) for web visualisation. Nextclade (Rust/WebAssembly) for real-time clade assignment. Outputs JSON for Auspice. Deployable via Nextstrain CLI on Docker or Conda.",
            "operator": "Operated by the Nextstrain team centred on Bedford Lab (Fred Hutch / Univ. of Washington) and Neher Lab (Univ. of Basel). Funded by NIH/NIAID, Howard Hughes Medical Institute, Wellcome Trust, and the Bill & Melinda Gates Foundation. Community labs run their own instances globally.",
            "data_model": "Inputs: sequence FASTA plus tabular metadata (metadata.tsv) with collection date, location, host, submitting lab, and optional exclude/include lists. Pipeline stages produce phylogenetic trees, clade labels and Auspice JSON (ncov_*.json) for interactive exploration. Geographic coordinates via lat_longs.tsv. Sequences sourced from GISAID, GenBank and community uploads.",
            "users_scale": "Used by public health and academic groups globally for routine genomic epidemiology, especially during COVID-19. WHO references Nextstrain in guidance. CDC AMD Toolkit includes Nextstrain training modules. GitHub stars: Augur ~426, Auspice ~305. Exact MAU unconfirmed. Thousands of publications cite Nextstrain builds.",
            "access_model": "Fully open-source under AGPL-3.0 (Augur, Auspice). Public builds browsable at nextstrain.org without login. Custom builds run locally via CLI. Data access depends on upstream sources — GISAID credentials required for SARS-CoV-2 pipelines. Automated GISAID data feeds for SARS-CoV-2 stopped Oct 2025, requiring manual data access."
        },
        "ecosystem_position": "Consumes sequences/metadata from GISAID (credentialed) and GenBank/INSDC (open). Outputs Auspice JSON used in public health training and decision-making. Nextclade provides complementary real-time clade assignment. GISAID feed termination (Oct 2025) disrupted automatic SARS-CoV-2 build refresh.",
        "confidence": "HIGH — well-documented open-source project with peer-reviewed publications. GitHub repos publicly auditable. User scale metrics unconfirmed."
    },

    "ProMED": {
        "profile": {
            "overview": "ProMED (Program for Monitoring Emerging Diseases) is an ISID programme launched in 1994 to identify unusual health events and report outbreaks/toxins across humans, animals and plants. Pioneered internet-based event-based surveillance with expert moderation. After a sustainability crisis in 2023, introduced subscription tiers and platform redesign.",
            "functional_scope": "Publishes curated outbreak reports with expert moderation, adding context, differential diagnoses and links to sources. Covers emerging/re-emerging infections and toxins across human, animal and plant health. Supports rapid informal event-based surveillance and dissemination via web portal and email alerts.",
            "tech_stack": "Delivery primarily via web portal plus email distribution lists. Recent product changes include new website/interface and differentiated subscription tiers with account-based access controls. Specific programming languages, databases and cloud deployment details are largely unconfirmed publicly. No open-source repositories or public APIs documented.",
            "operator": "Operated by the International Society for Infectious Diseases (ISID), a non-profit professional society. Editorial moderation relies on subject-matter experts globally. Specific funding arrangements partly unconfirmed. Recent partnership with samdesk announced Nov 2024 for modernisation.",
            "data_model": "Core records are narrative posts tied to an event (disease/toxin), place and time, with source citations (media, official notices, clinician reports) and moderator commentary. Outputs are human-readable web/email items. Machine-readable export standards and structured data API are unconfirmed.",
            "users_scale": "Historic scale: grew from ~40 members to >83,000 subscribers in >200 countries over 22 years (Madoff & Woodall, 2017). Listed by ECDC as an open-access epidemic intelligence source. Frequently cited in digital surveillance literature. Current subscriber counts post-redesign unconfirmed.",
            "access_model": "Shifted to subscription model: Freemium ($0/mo), Standard ($10/mo) and Pro ($1,000/yr), plus custom commercial/government plans. Previously fully open email distribution. Redistribution terms and API availability not clearly documented publicly. Key limitation: outputs are primarily human-readable, not machine-parseable."
        },
        "ecosystem_position": "Canonical upstream signal source for event-based surveillance. Listed by ECDC as EI information source. Ingested by HealthMap and referenced within WHO EIOS signal ecosystems. Frequently paired with HealthMap in digital surveillance architectures.",
        "confidence": "MEDIUM — well-documented historically (peer-reviewed publications) but recent operational changes (subscription model, pricing, platform redesign) are only partially documented in primary sources."
    },

    "HealthMap": {
        "profile": {
            "overview": "HealthMap is a web-based digital disease detection system operating since Sept 2006, created by John S. Brownstein and Clark C. Freifeld (Children's Hospital Informatics Program / Harvard-MIT). Aggregates outbreak signals from online sources to support epidemic intelligence. Listed by ECDC as an open-access EI information source.",
            "functional_scope": "Automates querying, filtering and classification of unstructured outbreak reports from news aggregators, eyewitness reports, expert-curated sources (ProMED) and official reports. Integrates and visualises alerts on interactive maps by disease, location and time. Early evaluation reported ~84% classifier accuracy across 87 disease categories and 89 countries (JAMIA 2008).",
            "tech_stack": "Implements text-processing and automated classification algorithms to extract disease/location signals from online reports. Specific programming languages, databases and cloud deployment not documented publicly (unconfirmed). No open-source repositories or public APIs documented. Web-based interface with interactive mapping.",
            "operator": "Operated as a project of Boston Children's Hospital with Harvard Medical School-linked investigators. Public website free to use but governed by Terms of Use emphasising Boston Children's ownership/control of site content. Funding arrangements unconfirmed.",
            "data_model": "Transforms unstructured reports into structured alerts labelled by disease category and geolocation, overlaid on map/timeline. Early evaluation processed 778 reports spanning 87 disease categories across 89 countries. Machine-readable export formats and structured data standards unconfirmed.",
            "users_scale": "Current user and alert volumes unconfirmed. Widely referenced in event-based surveillance literature. Listed by ECDC as open-access news aggregator for disease outbreak monitoring. Early assessments compared performance across sources including ProMED and Google News.",
            "access_model": "Public browsing is free with no registration required. Use governed by HealthMap Terms of Use (Boston Children's) which restrict certain uses and note service is not available outside the US without written permission. Official API and bulk redistribution rules largely unconfirmed."
        },
        "ecosystem_position": "Ingests multiple upstream EI sources including ProMED and official organism/agency feeds. Discussed as input signal source within WHO EIOS-informed digital surveillance stacks. Paired with ProMED as canonical event-based surveillance duo.",
        "confidence": "MEDIUM — well-documented in peer-reviewed literature (Freifeld 2008 JAMIA) but current operational metrics, tech stack details and access policies are poorly documented. Geographic restriction in ToU is notable."
    },

    "BlueDot": {
        "profile": {
            "overview": "BlueDot is a Toronto, Canada-based commercial epidemic intelligence company founded by infectious-disease physician Dr Kamran Khan (founding year often cited as 2013, unconfirmed from primary sources). Commercialises AI-enabled outbreak analytics. Canada PHAC publicly announced use of BlueDot for COVID-19 modelling and monitoring on 23 Mar 2020.",
            "functional_scope": "Provides event-based and predictive epidemic intelligence for clients: detecting signals, modelling spread risk and advising preparedness. Published rapid analysis of Wuhan pneumonia (Jan 2020) used 2018 IATA air-travel data (~90% of commercial itineraries) to estimate international dissemination risk, demonstrating travel-routing capability. Covers multi-pathogen surveillance.",
            "tech_stack": "Technology is largely proprietary — deployment, databases and codebase details unconfirmed. Public descriptions emphasise automated signal detection plus modelling using mobility and air-travel data (IATA itinerary datasets). No open-source repositories or public APIs documented. Access via commercial SaaS deliverables and reports.",
            "operator": "Operated by BlueDot (private sector, Toronto, Canada). Canada's Public Health Agency (PHAC) publicly referenced using BlueDot for COVID-19 modelling. Other government procurement and contract values are incompletely public. Exact recurring contract values unconfirmed.",
            "data_model": "Ingests heterogeneous signals (outbreak reports) and mobility data to create risk-relevant outputs (alerts, spread projections, scenario reports). Published work demonstrates airline passenger volume matrices and country vulnerability indices. Internal schemas, identifiers and data retention policies not publicly documented.",
            "users_scale": "Client list, countries covered and user counts not disclosed publicly (unconfirmed). Public evidence of deployment includes federal use by Canada PHAC during COVID-19. Media reports claim BlueDot issued early alerts on 31 Dec 2019 but customer outreach metrics and alert volumes are not independently verifiable.",
            "access_model": "Commercial SaaS subscription for governments and organisations. Public browsing and download not offered. Data-sharing and redistribution terms are contract-based and not publicly posted. Some supporting scientific outputs published open-access (e.g., J Travel Med 2020). Classification: unclassified commercial product."
        },
        "ecosystem_position": "Depends on upstream mobility/transport datasets (IATA itinerary data) and open-source outbreak signals. Outputs consumed by government public health decision processes where contracted. Competes with Metabiota/Concentric (Ginkgo), Airfinity and similar commercial EI providers.",
        "confidence": "LOW — proprietary methods reduce transparency and reproducibility. Most capabilities are vendor-claimed. Privacy controversy emerged around mobility data usage in Canada (Privacy Commissioner investigation)."
    },

    "NCBI Pathogen Detection": {
        "profile": {
            "overview": "NCBI Pathogen Detection (NCBI/NLM/NIH, Bethesda MD) is a public resource that collects, analyses and reports bacterial and fungal isolate genomes for outbreak tracking. Announced >2 million isolates analysed (3 Sep 2024) spanning 97 pathogenic taxa and 753 species. Underpins food-safety networks: FDA GenomeTrakr, CDC PulseNet, USDA-FSIS.",
            "functional_scope": "Automates genome processing, SNP-based clustering and phylogenetic inference to flag related isolates. Provides Isolates Browser with SNP cluster IDs plus reportable AMR/virulence/stress genotypes via AMRFinderPlus. Includes MicroBIGG-E for gene/element browsing (>100K rows for AMR genes). Covers 97 pathogenic taxa across 753 species. Continuous pulls from SRA and GenBank.",
            "tech_stack": "Pipelines continuously pull Illumina reads from SRA and assemblies from GenBank for tracked species. SKESA assembler, AMRFinderPlus for AMR detection, NCBI PGAP for annotation, custom SNP clustering algorithms. Results exposed via Isolates Browser, MicroBIGG-E, and Google BigQuery (ncbi-pathogen-detect.pdbrowser.isolates). BLAST integration. NDARO reference database.",
            "operator": "Operated by NCBI (National Library of Medicine, NIH). Multi-agency ecosystem: FDA GenomeTrakr WGS network is integral part; CDC PulseNet and USDA-FSIS contribute data. NCBI hosts outreach events (e.g., AMR codeathon Sept 23-27, 2024). Federal funding via NIH/NLM intramural and interagency agreements.",
            "data_model": "Core entities link SRA runs/reads, GenBank assemblies and BioSample metadata to computed analytics: SNP cluster IDs, min-same/min-diff distances, AMR genotypes, virulence/stress genotypes and taxonomy IDs. Schema includes BioProject, collection date, lat/long, host, isolation source/type, sequencing platform, plus PFGE legacy fields. Over 2 million isolates indexed.",
            "users_scale": "Over 2 million isolates analysed (Sep 2024), covering 756 bacterial/fungal species in 99 organism groups (Nov 2024). Cloud availability via GCP BigQuery (>1M bacterial isolates). Used by FDA, CDC, USDA and international food safety agencies. GenomeTrakr network includes labs in 30+ countries. Exact MAU unconfirmed.",
            "access_model": "Free and public browsing/querying. Data in public-domain NCBI archives (GenBank/SRA). Submission requires NCBI account via BioSample/SRA/GenBank accessioning. Cloud access via BigQuery (Standard SQL). Data redistribution generally permitted under NCBI public data policies. No registration for browsing."
        },
        "ecosystem_position": "Tight coupling to FDA GenomeTrakr (upstream WGS submissions), CDC PulseNet (downstream outbreak investigation), and USDA-FSIS. Direct dependency on NCBI archival identifiers (SRA/GenBank/BioSample) and AMR tooling (AMRFinderPlus/NDARO/BLAST). International food safety labs submit via GenomeTrakr. Success stories include international Listeria and Salmonella papaya investigations.",
        "confidence": "HIGH — extensively documented via NCBI official publications, peer-reviewed papers, and public data. Scale metrics verified from NCBI Insights blog. Only MAU counts unconfirmed."
    },

    "GISAID": {
        "profile": {
            "overview": "GISAID (Global Initiative on Sharing All Influenza Data) is a Germany-based initiative (Freunde von GISAID e.V.) created in 2008 to enable rapid sharing of influenza virus sequences with contributor recognition. Launched EpiFlu at the 61st World Health Assembly (2008). Expanded during COVID-19 with EpiCoV, becoming the dominant SARS-CoV-2 sharing channel. 17.5 million SARS-CoV-2 sequences across 215 countries/territories as of 31 Oct 2025.",
            "functional_scope": "Hosts curated pathogen genome repositories: EpiFlu (influenza A/B/C), EpiCoV (SARS-CoV-2), EpiPox (mpox), EpiRSV. Built-in tools: FluSurver/CoVsurver for mutation annotation, clade/lineage tracking, antigenic cartography integration. EPI_SET dataset IDs for reproducible collections. Supports WHO vaccine composition recommendations. Some bulk data feeds for dashboards withdrawn in 2025.",
            "tech_stack": "Proprietary web platform (internal stack unconfirmed) with built-in search, download and analysis apps. EPI_SET generator accepts .tsv/.csv/.xml/.json. Access credentialed and logged per-user. Third-party integrations historically used authorised data feeds for dashboards/phylogenies. GISAID withdrew such feeds during 2025 citing terms enforcement.",
            "operator": "Operated by GISAID Initiative (Freunde von GISAID e.V., Germany). Technical oversight via Database Technical Group. Works with WHO GISRS for influenza analyses and training. Public-private partnerships with governments in Germany, Argentina, Brazil, China, Indonesia, Singapore, South Africa. Singapore pledged $2M. Exact funding details partly unconfirmed.",
            "data_model": "Sequences organised around isolate-level IDs (EPI_ISL_XXXXX) with segment accession numbers. WHO 2018 questionnaire notes >30 associated metadata fields: virus name/type/subtype, collection date/location, host, labs, antiviral susceptibility. EpiFlu contained ~1M influenza genome-segment sequences from ~250K viruses (~75% human) per WHO 2018 data. EPI_SET for reproducible dataset citation.",
            "users_scale": "17.5 million SARS-CoV-2 sequences across 215 countries/territories (31 Oct 2025). ~1M influenza genome segments from ~250K viruses (WHO 2018). EpiPox: 654 clade Ib genomes reported (Mar 2026). 500K+ registered users (unconfirmed — commonly cited). Cited over 70,000 times. Exact MAU not published.",
            "access_model": "Free registration required with verified identity/affiliation and Data Access Agreement (DAA). Redistribution explicitly restricted — do not share sequences with unregistered colleagues or publish raw GISAID sequences. Downloads in multiple formats. Automated bulk feeds require additional permissions and have been contentious. INSDC (GenBank/ENA/DDBJ) offers open alternative."
        },
        "ecosystem_position": "Central upstream dependency for SARS-CoV-2 phylogenetic dashboards (Nextstrain, outbreak.info, CoVariants). Aligned with WHO GISRS for influenza vaccine strain consultations. Feed termination (2025) disrupted downstream tools. INSDC repositories (GenBank/ENA/DDBJ) serve as open-access alternative but with smaller SARS-CoV-2 collections. Infographic explicitly compares GISAID exclusivity vs INSDC duplication.",
        "confidence": "HIGH — scale metrics verified from GISAID infographics, WHO PIP-framework questionnaire, and GISAID terms. Governance and technical stack details partly unconfirmed. Redistribution controversy well-documented."
    },

    "Microreact": {
        "profile": {
            "overview": "Microreact is a web tool for sharing interactive genomic epidemiology visualisations (trees/networks + maps + timelines), developed by the Centre for Genomic Pathogen Surveillance (CGPS), historically at the Wellcome Sanger Institute. Enables epidemiologists to explore linked genomic and contextual metadata and share results via stable URLs.",
            "functional_scope": "Generates and links phylogenetic trees, maps, networks, charts and timelines with rich metadata tables and filtering. Projects shareable publicly, via secret links, or embedded. Supports programmatic project creation via authenticated REST API (POST /api/projects/create/ with Access-Token). Deployable locally behind firewalls for sensitive data governance.",
            "tech_stack": "Open-source: github.com/microreact/server (JavaScript, migrate-mongo suggesting MongoDB backend) and github.com/microreact/viewer. REST API with Access-Token authentication. Docker-packaged for on-premise deployment. Commercial supported deployments available by quotation. Recent commits in 2026 show active maintenance.",
            "operator": "Operated by the Microreact/CGPS team. Wellcome Sanger Institute lists Microreact as a Sanger-associated tool. Supports private deployments behind firewalls. Commercial Docker deployment support offered. Funding arrangements unconfirmed on public documentation.",
            "data_model": "Projects combine: (i) phylogeny in Newick format, (ii) metadata table (CSV) with sample IDs and fields for colouring/filtering, (iii) optional geographic coordinates. Outputs: interactive web visualisations, permanent project URL, downloadable .microreact bundle. API requests use JSON. BIGSdb provides a Microreact plugin for uploading visualisations.",
            "users_scale": "User numbers, hosted-project counts and MAU not reported publicly (unconfirmed). Adoption indicators: BIGSdb Microreact plugin integration, active open-source server repo maintenance (2026 commits), frequent use in outbreak dashboard publications and training materials. Commonly used alongside Nextstrain for complementary sharing.",
            "access_model": "Free public viewing on microreact.org. Creating/editing projects and API access requires an account (Access-Token). Software MIT-licensed (open-source repos). On-premise deployment for organisations needing data governance — supported Docker deployments offered commercially. Data redistribution controlled by each project's privacy settings."
        },
        "ecosystem_position": "Visualisation layer consuming upstream outputs from genome analysis pipelines (trees/metadata). Connects with BIGSdb via plugin. Often used alongside Nextstrain for complementary sharing. Infrastructure alliance with CLIMB-BIG-DATA for UK surveillance contexts (PATH-SAFE programme). Companion to Pathogenwatch in CGPS ecosystem.",
        "confidence": "MEDIUM — architecture well-documented via repos and API docs. Core method paper DOI unconfirmed in this session. Usage scale metrics unconfirmed. Active development verified via GitHub."
    },

    "BioSense / ESSENCE": {
        "profile": {
            "overview": "CDC's National Syndromic Surveillance Program (NSSP) operates the BioSense Platform, a secure cloud-based system for near real-time syndromic surveillance. Evolved from mandates in the US Public Health Security and Bioterrorism Preparedness and Response Act of 2002. ESSENCE (Electronic Surveillance System for the Early Notification of Community-based Epidemics, JHU/APL origin) is the central analytics engine.",
            "functional_scope": "Collects de-identified healthcare encounter data (ED/urgent care) and supports situational awareness, trend monitoring and outbreak detection. ESSENCE provides time-series visualisation, ad hoc querying, dashboards and alerting/anomaly detection (Burkom et al., 2021). NSSP Community of Practice (~1,400 professionals) for sharing definitions, methods and training.",
            "tech_stack": "Data arrive as HL7 messages (chief complaint, ICD codes, demographics) processed into BioSense. Deployed in Amazon Web Services (AWS) GovCloud following Dec 2014-May 2015 pilot with 8 jurisdictions plus VA and DoD. Analytics via ESSENCE and SAS Studio/Posit Workbench (Rnssp R package). Access via Access & Management Center (AMC).",
            "operator": "CDC NSSP, Atlanta GA. ESSENCE originated at Johns Hopkins University Applied Physics Laboratory (JHU/APL). CDC partners with CSTE via cooperative agreement (e.g., #6NU38OT000297-02-01). Supports national public health community of practice. Latest CDC page updates Jan 2026.",
            "data_model": "Primary inputs: de-identified HL7 ADT-style encounter messages from facilities (often via health departments/HIEs). Key fields: chief complaint free text, ICD-10 diagnosis codes, patient demographics/location, facility metadata. Aggregated at hourly/daily resolutions for ESSENCE queries. Invalid ZIPs mapped to predefined regions. Public export restricted by access tier.",
            "users_scale": "Verified scale (CDC 'By the Numbers', revised Dec 2022): >6,200 healthcare facilities across 50 states, DC and Guam. >6 million electronic health messages per day. ~73% of US emergency departments contributing. Data available within 24 hours. NSSP Community of Practice includes >1,400 public health professionals. Exact active-user counts unconfirmed.",
            "access_model": "Restricted to authorised public health jurisdictions/partners under data-use agreements and role-based access controls. Facilities send de-identified data to health departments/HIEs which contribute to NSSP. Public users cannot browse raw visit data. Documentation is public but analytic workspaces (ESSENCE, AMC, SAS/Posit Workbench) are credentialed. No public API."
        },
        "ecosystem_position": "Depends on HL7-based clinical messaging flows from hospitals/EDs, mediated by health departments and HIEs. Central analytic environment for US syndromic surveillance practitioners. Connected to CDC Community of Practice. Does not feed directly into genomic platforms (different data domain). Complements NNDSS (case-based) with syndromic pre-diagnostic signals.",
        "confidence": "HIGH — scale metrics verified from CDC Stacks factsheet (Dec 2022). Architecture documented via CDC implementation materials and peer-reviewed ESSENCE publications (Burkom 2021 JMIR). Exact current user counts unconfirmed."
    },

    "Pathogenwatch": {
        "profile": {
            "overview": "Pathogenwatch is a web-based genomic surveillance platform developed by CGPS (Centre for Genomic Pathogen Surveillance, UK) to democratise analysis of microbial genomes for public health. Provides automated typing, clustering and AMR prediction with shareable collections. Peer-reviewed: Genome Medicine (2021) technical summary and Typhi Pathogenwatch (Nature Communications 2021).",
            "functional_scope": "Automated analyses on uploaded microbial genomes: species assignment (Speciator), MLST for 100+ species (PubMLST/Pasteur/Enterobase schemes), cgMLST calling/clustering for 20 schemes, SNP-tree contextualisation, AMR prediction via curated genotype-to-phenotype libraries (genes + mutations). Supports Neisseria gonorrhoeae, Salmonella, Klebsiella, S. aureus, S. pneumoniae, E. coli, V. cholerae, M. tuberculosis and more.",
            "tech_stack": "React SPA (Material Design Lite), Phylocanvas for trees, Leaflet maps, Sigma networks. Backend: Node.js with API. Open-source repos at github.com/pathogenwatch-oss/ (website and analysis components). Analysis tasks containerised with unique Docker image builds. Periodic re-analysis of stored genomes after updates. Infrastructure hosted on CLIMB-BIG-DATA (UK).",
            "operator": "Operated by CGPS (UK) as a public health genomics service. Infrastructure partnership with CLIMB-BIG-DATA. UK Food Standards Agency PATH-SAFE programme uses Pathogenwatch infrastructure for national Salmonella surveillance pilot. AMR libraries curated and published. Funding varies by programme; Wellcome Trust historically.",
            "data_model": "Inputs: genome assemblies (FASTA) and optional short reads (FASTQ) for small-scale assembly. Users attach epidemiological metadata. Outputs: species ID, MLST/cgMLST allele profiles, cluster IDs, SNP trees, AMR markers (gene presence + SNP combinations), downloadable reports/CSVs. Typhi Pathogenwatch: 4,389 public S. Typhi genomes from 26 articles (Nov 2020). Organisms tracked by NCBI TaxID.",
            "users_scale": "Species/taxonomy prediction for >60,000 variants. MLST prediction for 100+ species. cgMLST calling for 20 schemes. Published Typhi snapshot: 4,389 genomes from 26 studies. User/MAU counts unreported. MLST schemes updated to 1 Sep 2025. 13 new cgMLST schemes added Oct 2024. TyphiNET dashboard populated by Pathogenwatch-analysed genomes.",
            "access_model": "Free web access for analysis and browsing. Sign-in required for upload/save (OAuth: Google/Apple/Microsoft/CLIMB). Parts of stack open-source (pathogenwatch-oss repos, AMR libraries on GitHub). Privacy policy: names/emails not shown to other users; analytics collected with open-source tool on CGPS servers; data not sold to third parties."
        },
        "ecosystem_position": "Tight dependency on external typing ecosystems: PubMLST, Pasteur MLST, Enterobase. Infrastructure alliance with CLIMB-BIG-DATA for UK surveillance hosting. UK FSA PATH-SAFE interoperability workstreams reference Enterobase and PubMLST. Companion to Microreact in CGPS ecosystem. TyphiNET dashboard consumes Pathogenwatch-analysed genomes (Dyson et al. 2025 Genome Medicine).",
        "confidence": "HIGH — architecture documented via peer-reviewed publications (Argimon 2021 Genome Medicine, Nature Communications). Active release notes verify 2024-2025 updates. Usage scale metrics (user counts) unconfirmed."
    }
}

# ============================================================
# GLOBAL.HEALTH — NEW PLATFORM TO ADD
# ============================================================

global_health_new = {
    "r": 170,  # Will be assigned proper rank after integration
    "n": "Global.health",
    "u": "https://global.health",
    "s": 82.0,
    "c": "Open Outbreak Data Platform",
    "d": "Consortium-led open-source platform for de-identified case line lists and outbreak data curation",
    "sc": {
        "data_integration": 84,
        "analytics_capability": 80,
        "visualization": 78,
        "accessibility": 85,
        "scalability": 82,
        "documentation": 83,
        "community_support": 81,
        "security_compliance": 82,
        "interoperability": 83,
        "real_time_capability": 80
    },
    "st": [
        "Open-source MIT-licensed code and data",
        "Curation/verification workflow (VERIFIED vs UNVERIFIED)",
        "Multi-institution consortium (Oxford, BCH, Northeastern, Google.org)",
        "Line-list granularity for research",
        "Rockefeller Foundation $3M funding"
    ],
    "wk": [
        "Live portal record counts and coverage metrics not consistently published",
        "Dependent on upstream source data quality",
        "COVID-19 primary focus with limited expansion"
    ],
    "surveillance_input_types": ["epidemiological", "genomic"],
    "primary_input_type": "epidemiological",
    "biosurveillance_class": "genomic_biosurveillance",
    "l": "L2_Genomic",
    "military_biodefense": False,
    "profile": {
        "overview": "Global.health is an open data science initiative for sharing de-identified line-list outbreak data. Launched Jan 2020 with public platform announced 24 Feb 2021 by Oxford University, Boston Children's Hospital, Northeastern University and Google.org. Mission: trusted, reusable outbreak data for research and decision-makers. Rockefeller Foundation granted $3M (Nov 2022).",
        "functional_scope": "Provides anonymised case-level (line list) datasets with curation/verification workflows (VERIFIED vs UNVERIFIED). Data portal, API and data dictionaries. Supports COVID-19 and mpox. Publishes open-source GRAPEVNE tooling for modular analysis pipelines built on Snakemake. Daily export capability in CSV/JSON formats.",
        "tech_stack": "Open-source MIT-licensed (github.com/globaldothealth/list): Node.js/TypeScript (~54.5%) plus Python (~40.4%) services. MongoDB case database with separate curator UI/API, ingestion and geocoding services. CI builds Docker images. 5,563 commits and 25+ contributors. Software version 1.10.1 (2026).",
        "operator": "Multi-institution consortium: Oxford University and Boston Children's Hospital (co-developers), Northeastern University, Google.org. Funded by Rockefeller Foundation ($3M, Nov 2022) to strengthen pathogen surveillance and response. Additional funding sources unconfirmed.",
        "data_model": "De-identified case objects in consistent schema stored in MongoDB. Each case marked VERIFIED (human-reviewed) or UNVERIFIED (auto-ingested). ~60,000 cases manually curated with remaining auto-ingested. Daily exports in CSV/JSON with published data dictionary and attribution tracking per source. Removal/attribution requests handled via GitHub issues.",
        "users_scale": "Scale metrics like MAU and total records on live portal unconfirmed. Development scale: 5,563 commits, 25+ contributors. Highlighted in major media. Used in research on pandemic data curation and modelling. Rockefeller Foundation funding validates institutional significance.",
        "access_model": "Public-facing data portals intended for open access to anonymised data. Code and daily data exports under MIT licence. API advertised. Terms of use and privacy policies linked from website. Data reuse depends on upstream source licences. Removal requests handled via GitHub."
    },
    "ecosystem_position": "Integrates upstream sources via ingestion and attribution tracking. Curation tooling reusable for other outbreak datasets. Interfaces with broader outbreak-data ecosystems (mpox datasets compiling WHO/CDC/ECDC aggregates). GRAPEVNE provides pipeline-based analytics extension.",
    "confidence": "MEDIUM — codebase and architecture well-documented via GitHub. Scale metrics and portal record counts unconfirmed. Funding verified from Rockefeller Foundation announcement."
}


# ============================================================
# APPLY UPDATES
# ============================================================

updated_count = 0

for name, update_data in updates.items():
    new_profile = update_data["profile"]
    ecosystem = update_data.get("ecosystem_position", "")
    confidence = update_data.get("confidence", "")
    
    # Update in all[]
    for p in data['all']:
        if p['n'] == name:
            p['profile'] = new_profile
            if ecosystem:
                p['profile']['ecosystem_position'] = ecosystem
            if confidence:
                p['profile']['confidence'] = confidence
            updated_count += 1
            print(f"  Updated all[]: {name}")
            break
    
    # Update in layers
    for layer_name, layer_platforms in data['layers'].items():
        for p in layer_platforms:
            if p['n'] == name:
                p['profile'] = new_profile
                if ecosystem:
                    p['profile']['ecosystem_position'] = ecosystem
                if confidence:
                    p['profile']['confidence'] = confidence
                print(f"  Updated layers.{layer_name}: {name}")
                break

# Add Global.health
print(f"\n  Adding new platform: Global.health")
data['all'].append(global_health_new)

# Add to layers
if 'L2_Genomic' in data['layers']:
    if isinstance(data['layers']['L2_Genomic'], list):
        data['layers']['L2_Genomic'].append(global_health_new)
    else:
        data['layers']['L2_Genomic']['platforms'] = data['layers']['L2_Genomic'].get('platforms', [])
        data['layers']['L2_Genomic']['platforms'].append(global_health_new)

# Update meta
data['meta']['total'] = len(data['all'])
data['meta']['deep_research_update'] = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
data['meta']['deep_research_platforms'] = [
    'Nextstrain', 'ProMED', 'HealthMap', 'BlueDot',
    'NCBI Pathogen Detection', 'GISAID', 'Microreact',
    'BioSense / ESSENCE', 'Pathogenwatch', 'Global.health'
]

# Count profiles with ecosystem_position (new field from deep research)
deep_enriched = sum(1 for p in data['all'] 
                    if p.get('profile', {}).get('ecosystem_position'))
data['meta']['deep_research_enriched'] = deep_enriched

# Save
with open(MASTER, 'w') as f:
    json.dump(data, f, indent=2)

print(f"\n{'='*60}")
print(f"DEEP RESEARCH UPDATE COMPLETE")
print(f"  Updated: {updated_count} existing platforms")
print(f"  Added: 1 new platform (Global.health)")
print(f"  Total platforms: {data['meta']['total']}")
print(f"  Deep-research enriched (with ecosystem_position): {deep_enriched}")
print(f"  Saved to: {MASTER}")
print(f"{'='*60}")
