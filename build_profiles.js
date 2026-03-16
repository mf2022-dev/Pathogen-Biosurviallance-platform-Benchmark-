#!/usr/bin/env node
/**
 * BioR Platform Intelligence Enrichment Script
 * Generates comprehensive profiles for all 169 biosurveillance platforms
 * using crawled data + structured research
 */

const fs = require('fs');
const optB = require('./optB.json');
const all = optB.all || optB;

// ============================================================
// ENRICHED PROFILES DATABASE
// Each entry: { overview, functional_scope, tech_stack, operator, data_model, users_scale, access_model }
// ============================================================
const profiles = {
  "Nextstrain": {
    overview: "Nextstrain is an open-source bioinformatics platform providing real-time snapshots of evolving pathogen populations. Co-founded by Trevor Bedford (Fred Hutchinson Cancer Center) and Richard Neher (University of Basel), it integrates genomic sequence data with geographic and temporal metadata to produce interactive phylogenetic visualizations of viral evolution.",
    functional_scope: "Real-time phylogenetic analysis and molecular epidemiology for pathogens including SARS-CoV-2, influenza, Ebola, Zika, dengue, mumps, and more. Core functions include phylodynamic inference, ancestral state reconstruction, temporal dating of clades, geographic spread modeling, and mutation tracking. Supports community-contributed 'Nextstrain Groups' for private dataset sharing.",
    tech_stack: "Augur (Python-based bioinformatics pipeline for tree building, ancestral inference, and frequency estimation), Auspice (React.js/D3.js interactive visualization frontend), Nextclade (WebAssembly-based real-time clade assignment and QC), Fauna (data curation scripts). Deployable via Nextstrain CLI on Docker or Conda. Source code on GitHub under GNU AGPL v3.",
    operator: "Fred Hutchinson Cancer Center & University of Basel. Funded by NIH/NIAID, Howard Hughes Medical Institute, Wellcome Trust, and the Bill & Melinda Gates Foundation.",
    data_model: "JSON-based tree structures with node annotations (mutations, dates, locations, clade assignments). Sequences sourced from GISAID, GenBank, and community uploads. Metadata includes collection date, location (lat/lon), host, and submitting lab.",
    users_scale: "Millions of monthly page views. Used by WHO, national public health agencies worldwide, and thousands of academic researchers. Nextstrain builds are referenced in thousands of scientific publications.",
    access_model: "Fully open-source and free. Public builds available at nextstrain.org. Private Nextstrain Groups available for institutional datasets. No login required for public data."
  },

  "outbreak.info": {
    overview: "outbreak.info is an open-source data integration platform developed by the Scripps Research Institute and the Center for Viral Systems Biology. It standardizes and aggregates epidemiological, genomic, and clinical data related to infectious disease outbreaks, with initial focus on SARS-CoV-2.",
    functional_scope: "Variant prevalence tracking with mutation-level granularity, epidemiological curve visualization, research publication aggregation (integrating PubMed, bioRxiv, medRxiv), resource search across datasets/protocols/clinical trials, and genomic comparison tools. Provides both interactive dashboards and a robust REST API (api.outbreak.info).",
    tech_stack: "Vue.js frontend with D3.js visualizations, Python backend with Elasticsearch for full-text search, BioThings API framework for data integration, hosted on Google Cloud Platform. Open-source on GitHub.",
    operator: "Scripps Research Institute, La Jolla, California. Led by Dr. Laura Hughes and Dr. Chunlei Wu. Funded by NIH/NCATS and NIAID.",
    data_model: "Aggregates data from GISAID (genomic sequences), Johns Hopkins CSSE (cases/deaths), WHO, ClinicalTrials.gov, and major preprint servers. Schema.org-based metadata standardization.",
    users_scale: "Hundreds of thousands of researchers and public health officials globally. API serves millions of requests monthly.",
    access_model: "Free, open-source. No login for public dashboards. API requires free registration for higher rate limits."
  },

  "SORMAS": {
    overview: "SORMAS (Surveillance Outbreak Response Management and Analysis System) is an open-source digital health platform for epidemiological surveillance and outbreak management. Originally developed by the Helmholtz Centre for Infection Research (HZI) in Germany and the Nigeria Centre for Disease Control (NCDC), it is now managed by the SORMAS Foundation.",
    functional_scope: "End-to-end outbreak management: case registration and investigation, contact tracing, event management, laboratory sample management, clinical data capture, task scheduling, aggregate reporting, and statistical analysis. Supports 40+ diseases. Includes mobile apps for offline field data collection, real-time dashboards, and automatic case classification.",
    tech_stack: "Java EE backend (WildFly/JBoss application server), PostgreSQL database, Vaadin-based web frontend, Android native mobile apps with offline sync. RESTful APIs for integration. Deployable on-premise or cloud (Docker). Open-source under GPL v3 on GitHub.",
    operator: "SORMAS Foundation (Germany). Developed by Helmholtz Centre for Infection Research (HZI), funded by German Federal Ministry for Economic Cooperation and Development (BMZ), WHO, and various international partners.",
    data_model: "Relational database model covering cases, contacts, events, samples, tasks, and aggregated reports. Follows FHIR and HL7 standards for interoperability. Supports custom disease configurations.",
    users_scale: "Deployed in 15+ countries including Ghana, Nigeria, Nepal, Luxembourg, France, Germany, Fiji, and The Gambia. Over 20,000 active users.",
    access_model: "Free, open-source. Self-hosted deployment with role-based access control. Cloud hosting available through partners."
  },

  "DHIS2": {
    overview: "DHIS2 (District Health Information Software 2) is the world's largest open-source health management information system platform. Developed by the HISP Centre at the University of Oslo, it is used in 80+ countries as their national health information system, managing data for over 3.2 billion people globally.",
    functional_scope: "Configurable data collection (aggregate and individual-level), data quality management, analytics and visualization (charts, pivot tables, GIS maps, dashboards), program tracking (patient/event), mobile data capture (Android app with offline support), data exchange and interoperability. Supports health, education, logistics, and climate-health programs.",
    tech_stack: "Java/Spring backend, PostgreSQL database, React.js frontend, Android SDK for mobile apps. REST/JSON API, FHIR gateway, ADX/DXF data exchange formats. Deployable on-premise or cloud. Open-source under BSD license.",
    operator: "HISP Centre, University of Oslo, Norway, in partnership with global HISP network nodes in Africa, Asia, Americas, and Middle East.",
    data_model: "Flexible metadata model allowing custom data elements, indicators, organization units (hierarchical), periods, and data sets. Supports both aggregate reporting and individual tracker programs.",
    users_scale: "80+ countries, 3.2+ billion people covered, 488,000+ registered users on Epicollect alone (partner). Used by WHO, UNICEF, Global Fund, Gavi, and national health ministries worldwide.",
    access_model: "Free, open-source (BSD license). Self-hosted with Docker or cloud. Free DHIS2 Academy training. Community of Practice forum."
  },

  "NCBI Pathogen Detection": {
    overview: "NCBI Pathogen Detection is an automated bioinformatics resource operated by the National Center for Biotechnology Information (NCBI) at the U.S. National Library of Medicine. It integrates bacterial and fungal pathogen genomic sequences from surveillance and research efforts worldwide to support foodborne and clinical outbreak detection.",
    functional_scope: "Real-time automated clustering of related pathogen genomes to identify potential transmission chains for outbreak investigation. Antimicrobial resistance gene screening via AMRFinderPlus (part of NDARO). Supports SNP-based phylogenetic analysis, species/serotype identification, and genome quality assessment. Covers foodborne, hospital-acquired, and other clinically infectious pathogens.",
    tech_stack: "Custom NCBI bioinformatics pipeline: SKESA (genome assembler), AMRFinderPlus (AMR detection), MegaBLAST (sequence similarity), SNP analysis pipeline. PostgreSQL and custom databases. Web interface built on NCBI infrastructure. All tools available via command line and NCBI APIs.",
    operator: "National Center for Biotechnology Information (NCBI), National Library of Medicine (NLM), National Institutes of Health (NIH), U.S. Department of Health and Human Services.",
    data_model: "Genomic sequences (assembled genomes and raw reads) with metadata including organism, isolation source, collection date, geographic location, and host. Integrated with NCBI BioSample, BioProject, and SRA databases.",
    users_scale: "Millions of sequences processed. Used by CDC PulseNet, FDA GenomeTrakr, USDA, and public health labs in 50+ countries. Indexed in GenBank.",
    access_model: "Free, publicly accessible. No login required for browsing. NCBI account needed for submissions. Programmatic access via E-utilities API and FTP."
  },

  "GISAID": {
    overview: "GISAID (Global Initiative on Sharing All Influenza Data) is the world's largest genomic data-sharing platform for respiratory viruses. Established in 2008 as a public-private partnership, it enables rapid sharing of influenza, SARS-CoV-2, respiratory syncytial virus (RSV), and mpox virus sequences while ensuring proper attribution to data generators.",
    functional_scope: "Genomic sequence database with metadata (EpiCoV for SARS-CoV-2, EpiFlu for influenza, EpiPox for mpox, EpiRSV for RSV). Phylodynamic analysis tools including NextHCoV and FluSurver. Variant tracking dashboards, clade frequency visualization, antigenic cartography integration. Supports WHO vaccine composition recommendations.",
    tech_stack: "Custom web platform with integrated analysis tools. FluSurver (Java-based mutation analysis), CoVsurver (SARS-CoV-2 mutation analysis), phylogenetic tree builders. Backend database infrastructure (proprietary). API access via data feed agreements.",
    operator: "GISAID Initiative e.V. (registered non-profit), supported by the Federal Republic of Germany, and public-private partnerships with governments in Argentina, Brazil, China, Indonesia, Singapore, South Africa, and others.",
    data_model: "Genomic sequences (consensus genomes) with structured metadata: collection date, location, patient demographics (anonymized), sequencing technology, submitting/originating lab. Custom accession identifiers (EPI_ISL, EPI_SET).",
    users_scale: "Over 16 million SARS-CoV-2 sequences, 2+ million influenza sequences. 500,000+ registered users from virtually every country. Cited over 70,000 times.",
    access_model: "Free registration required with institutional affiliation. Data Access Agreement (DAA) ensures attribution. Restricted redistribution of raw data. Data feeds available under supplementary agreements."
  },

  "Microreact": {
    overview: "Microreact is an open-source web application for interactive visualization and sharing of genomic epidemiology data. Developed by the Centre for Genomic Pathogen Surveillance (CGPS) at the Wellcome Sanger Institute and the University of Freiburg, it enables researchers to create shareable, interactive reports combining phylogenetic trees, geographic maps, and metadata.",
    functional_scope: "Interactive visualization of phylogenetic trees (Newick format) with geographic mapping, temporal timelines, and metadata-driven coloring/filtering. Supports minimum spanning trees, network graphs, and custom data overlays. Users can create persistent shareable URLs for published projects. Integration with Pathogenwatch for genomic analysis.",
    tech_stack: "React.js frontend, Leaflet.js for maps, Phylocanvas for tree rendering, D3.js for charts. Node.js backend with MongoDB. Hosted on cloud infrastructure. Open-source under MIT license on GitHub.",
    operator: "Centre for Genomic Pathogen Surveillance (CGPS), a collaboration between the Wellcome Sanger Institute and University of Freiburg. Funded by Wellcome Trust and NIHR.",
    data_model: "User uploads phylogenetic tree files (Newick/Nexus), metadata CSV/TSV (with latitude/longitude, dates, and custom fields), and optional network data. Projects stored as shareable JSON bundles.",
    users_scale: "Thousands of active users, 10,000+ public projects. Used in publications in Nature, Science, Lancet, and other top journals for visualizing outbreaks of MRSA, Salmonella, Klebsiella, Ebola, Zika, mpox, and more.",
    access_model: "Free and open-source. No login required for viewing public projects. Free account needed to create and save projects."
  },

  "Pathogenwatch": {
    overview: "Pathogenwatch is a global platform for genomic surveillance of bacterial pathogens, developed by the Centre for Genomic Pathogen Surveillance (CGPS). It provides automated bioinformatics analysis of uploaded genome assemblies including species identification, MLST typing, AMR prediction, and clustering.",
    functional_scope: "Species and taxonomy prediction for 60,000+ bacterial, viral, and fungal variants. MLST (100+ species from PubMLST, Pasteur, EnteroBase schemes), cgMLST calling and clustering, antimicrobial resistance prediction, core SNP phylogenetics. Specialized modules for Salmonella (SISTR), S. pneumoniae (PopPUNK, SeroBA), K. pneumoniae (Kleborate), N. gonorrhoeae (NG-MAST/NG-STAR), SARS-CoV-2 (Pangolin), V. cholerae (Vista).",
    tech_stack: "Node.js/React.js web interface, backend microservices architecture, custom bioinformatics pipelines (BLAST, Mash, assembly-based typing). PostgreSQL and MongoDB databases. REST API for programmatic access. Open-source on GitHub.",
    operator: "Centre for Genomic Pathogen Surveillance (CGPS), Wellcome Sanger Institute & University of Freiburg. Funded by Wellcome Trust, NIHR, and Bill & Melinda Gates Foundation.",
    data_model: "Genome assemblies (FASTA) with metadata. Stores typing results, AMR predictions, clustering data, and phylogenetic relationships. Collections of up to 2,000 genomes for comparative analysis.",
    users_scale: "Thousands of users from public health labs and research institutions worldwide. Processes millions of genomes. Key tool in PHA4GE community.",
    access_model: "Free. Anonymous access for viewing public genomes and basic features. Signed-in users can upload genomes, create collections, and access additional clustering features."
  },

  "Galaxy Project": {
    overview: "Galaxy is an open-source, web-based platform for accessible, reproducible, and transparent computational research. Founded by Anton Nekrutenko (Penn State) and James Taylor (Johns Hopkins), it provides a browser-based environment for running bioinformatics analyses without programming knowledge.",
    functional_scope: "Over 10,000 integrated bioinformatics tools covering genomics, transcriptomics, proteomics, metabolomics, metagenomics, and more. Workflow creation and sharing, interactive visualizations, Jupyter/RStudio notebook integration. Specialized COVID-19 analysis workflows, antimicrobial resistance analysis, and variant calling pipelines.",
    tech_stack: "Python backend (Galaxy framework), PostgreSQL database, Slurm/HTCondor job scheduling. Frontend in JavaScript/Backbone.js transitioning to Vue.js. Deployable on cloud (AWS, GCP, Azure), HPC, or local infrastructure via Ansible/Docker/Kubernetes. Tools wrapped in Galaxy XML tool definitions. Open-source under Academic Free License.",
    operator: "Galaxy Project community, led by teams at Penn State University, Johns Hopkins University, University of Freiburg, and University of Melbourne. Funded by NIH, NSF, and European Commission.",
    data_model: "History-based data management tracking complete analysis provenance. Supports any bioinformatics file format (FASTQ, BAM, VCF, etc.). Published workflows and datasets can be shared via DOIs.",
    users_scale: "400,000+ registered users, 750,000+ jobs per month, 22,000+ citations, used in 150+ countries. Three major public servers: usegalaxy.org, usegalaxy.eu, usegalaxy.org.au.",
    access_model: "Free public servers with generous quotas. Self-hosted deployments for institutions. All code open-source."
  },

  "EpiCollect5": {
    overview: "Epicollect5 is a free, open-source mobile and web application for data collection developed by Imperial College London and the Big Data Institute at the University of Oxford. It enables researchers and organizations to create customizable data collection forms and deploy them via smartphone apps with offline capability.",
    functional_scope: "Customizable form builder (drag-and-drop, conditional logic, photo/audio/video capture, GPS location, barcode scanning), mobile data collection (iOS and Android with offline sync), web-based data viewing and export (JSON, CSV), map visualization of geotagged entries, basic filtering and search.",
    tech_stack: "Laravel (PHP) backend, Vue.js web frontend, native Android and iOS mobile apps. MySQL/MariaDB database. REST API for data access and integration. Hosted on cloud infrastructure. Open-source on GitHub.",
    operator: "Imperial College London and Big Data Institute, University of Oxford. Funded by Wellcome Trust.",
    data_model: "Hierarchical form-based data model with configurable fields (text, numeric, date, location, media, branching). Entries stored with timestamps, GPS coordinates, and user attribution.",
    users_scale: "488,000+ registered users, 189,000+ projects, 76+ million entries collected. Used for disease surveillance, ecology, citizen science, and field research worldwide.",
    access_model: "Free. No login required for public projects. Free account to create and manage projects. Data export in JSON and CSV."
  },

  "Airfinity": {
    overview: "Airfinity is a commercial predictive analytics and intelligence platform for the life sciences sector, headquartered in London. It provides AI-powered forecasting, simulation, and infectious disease intelligence, serving 9 out of 10 of the world's largest pharmaceutical companies in infectious diseases.",
    functional_scope: "Nexa (AI-enabled scenario engine for drug/vaccine demand forecasting), OneID Infectious Disease Intelligence (continuously updated disease intelligence with epidemiological modeling), OneID Biorisk Intelligence (biological threat monitoring for pandemic preparedness), burden of disease modeling, competitive intelligence, and second-opinion commercial forecasts.",
    tech_stack: "Proprietary AI/ML forecasting models trained on hundreds of proprietary predictive health signals. Cloud-based SaaS platform with real-time data ingestion from global sources. Custom dashboards and API access for enterprise clients.",
    operator: "Airfinity Ltd., London, UK. Independent predictive analytics company, cited over 70,000 times in media including NYT, Reuters, Fortune.",
    data_model: "Proprietary data lake integrating epidemiological data, clinical trial registries, regulatory filings, manufacturing capacity data, supply chain data, and real-time news feeds.",
    users_scale: "Major pharmaceutical companies (9/10 top infectious disease pharma), government agencies, international organizations. Subscription-based enterprise client base.",
    access_model: "Commercial subscription (SaaS). Free public reports and press releases. Enterprise pricing for platform access and API."
  },

  "HealthMap": {
    overview: "HealthMap is an automated real-time surveillance system developed at Boston Children's Hospital and Harvard Medical School. Launched in 2006, it aggregates data from diverse online sources to provide a comprehensive view of the global state of infectious diseases and their effects on human and animal health.",
    functional_scope: "Automated event-based surveillance: aggregates and classifies disease alerts from news media, government reports, ProMED-mail, WHO, and social media in multiple languages. Interactive global map visualization with disease/location/species filtering. Historical outbreak data archive. Disease Daily news summary. Flu Near You participatory surveillance.",
    tech_stack: "Natural language processing (NLP) and machine learning classifiers for automated alert extraction and categorization. GIS mapping (Leaflet/Google Maps), web scraping infrastructure, multi-language text processing. Cloud-hosted web application.",
    operator: "Computational Epidemiology Lab, Boston Children's Hospital / Harvard Medical School. Founded by Dr. John Brownstein. Funded by NIH, Google.org, and Skoll Foundation.",
    data_model: "Structured alerts with attributes: source, date, disease, location (geocoded), species, case/death counts, significance rating. Temporal and spatial indexing for trend analysis.",
    users_scale: "Millions of annual visitors. Used by CDC, WHO, DHS, DoD, and public health agencies worldwide as an early warning tool.",
    access_model: "Free, publicly accessible web application. No login required. API available for research use."
  },

  "ProMED": {
    overview: "ProMED (Program for Monitoring Emerging Diseases) is a global electronic reporting system for outbreaks of emerging infectious diseases and toxins, operated by the International Society for Infectious Diseases (ISID). Established in 1994, it is the largest publicly available system conducting global reporting of infectious disease outbreaks.",
    functional_scope: "Moderated global disease reporting covering human, animal, and plant diseases. Expert-curated alerts with analysis and commentary from a global network of subject-matter experts. Multilingual reporting (English, Spanish, Portuguese, Russian, others). Covers all infectious agents: bacteria, viruses, fungi, parasites, prions, and toxins.",
    tech_stack: "Web-based publishing platform with email distribution system. Expert moderation workflow. Searchable archive database. RSS feeds and email subscriptions for real-time alerts.",
    operator: "International Society for Infectious Diseases (ISID), Brookline, MA, USA. Founded by Dr. Jack Woodall and Dr. Stephen Morse. Partly funded by NLM, Google.org, and the Skoll Global Threats Fund.",
    data_model: "Structured disease reports with date, disease, location, species, case/death counts, source attribution, and expert commentary. Archive of 100,000+ reports since 1994.",
    users_scale: "Over 80,000 subscribers in 185+ countries. Reports are cited by WHO, CDC, FAO, and OIE as primary intelligence sources.",
    access_model: "Free and publicly accessible. Email subscription available. Archive searchable online. No login required for reading."
  },

  "OpenELIS": {
    overview: "OpenELIS Global is the leading open-source Laboratory Information System (LIS) for public health laboratory networks. Originally developed by the University of Washington with CDC support, it manages the complete laboratory workflow from sample collection to result reporting with enterprise-grade security.",
    functional_scope: "Complete laboratory workflow management: patient registration, sample collection and tracking, work plans, result entry, validation, and reporting. Analyzer integration (bidirectional instrument interfaces), quality control, inventory management, reporting dashboards. Native FHIR R4 interoperability for connecting to EMRs, client registries, and health information exchanges.",
    tech_stack: "Java/Spring Boot backend, React.js frontend, PostgreSQL database. HL7 FHIR R4 compliant. Bidirectional analyzer interfaces for laboratory instruments. Docker deployment. REST APIs. Open-source under Mozilla Public License.",
    operator: "OpenELIS Global community, supported by University of Washington, CDC, and I-TECH (International Training and Education Center for Health). Implementation partners in multiple countries.",
    data_model: "Relational model covering patients, samples, tests, results, quality control, and inventory. FHIR resources for interoperability. HL7v2 messaging for instrument communication.",
    users_scale: "1,000+ labs deployed across 20+ countries, supporting 18.7+ million patients. 15+ years of proven deployment.",
    access_model: "Free, open-source (zero licensing cost). Self-hosted with Docker. Role-based access control. Demo instance available."
  },

  "WHONET": {
    overview: "WHONET is a free Windows desktop application for antimicrobial resistance (AMR) surveillance, developed and maintained by the WHO Collaborating Centre for Surveillance of Antimicrobial Resistance at Brigham and Women's Hospital, Boston. Available in 54 languages, it is the standard tool for AMR data management worldwide.",
    functional_scope: "Laboratory configuration, microbiology data entry, automated interpretation (CLSI and EUCAST breakpoints, updated annually), data analysis (resistance rates, trends, organism profiles), public health reporting (GLASS, EARS-Net), data encryption. BacLink module for importing data from existing LIS, instruments, and desktop applications.",
    tech_stack: "Microsoft Windows desktop application (C++/Visual Basic). Microsoft Access/SQL Server database. BacLink data import utility. Compatible with Windows 10/11 (32-bit and 64-bit versions). Integration with WHONET-SaTScan for spatial cluster detection.",
    operator: "WHO Collaborating Centre for Surveillance of Antimicrobial Resistance, Brigham and Women's Hospital, Boston, MA. Led by Dr. John Stelling. Supported by WHO.",
    data_model: "Microbiology data: organism identifications, antimicrobial susceptibility test results (MIC, disk diffusion), specimen types, patient demographics. Standardized coding (SNOMED, LOINC, ATC).",
    users_scale: "Over 2,300 hospital, public health, animal health, and food laboratories in 130+ countries.",
    access_model: "Free download from whonet.org. No login required. Training materials freely available. Community forum for support."
  },

  "ReportStream": {
    overview: "ReportStream is CDC's free, interoperable data platform that connects healthcare organizations, labs, and public health agencies for streamlined electronic reporting of public health data. It is a key component of CDC's Data Modernization Initiative.",
    functional_scope: "Automated routing and transformation of public health reports from healthcare providers and labs to state and local health departments. Supports Electronic Lab Reports (ELR), Electronic Case Reports (eCR), and Electronic Test Orders and Results (ETOR). Data format translation between HL7v2, FHIR, and CSV. Universal data pipeline with configurable routing rules.",
    tech_stack: "Kotlin/Java backend, React.js frontend, Azure cloud infrastructure. Supports HL7v2.5.1, FHIR R4, CSV data formats. REST API with OAuth 2.0 authentication. Open-source on GitHub (USDS/prime-reportstream). PostgreSQL database.",
    operator: "U.S. Centers for Disease Control and Prevention (CDC), built by the U.S. Digital Service (USDS) and contractors.",
    data_model: "HL7-structured public health messages with patient, specimen, test, result, and provider data. FHIR Bundle resources for modern interoperability. Configurable schema mapping per jurisdiction.",
    users_scale: "Connected to thousands of labs and healthcare facilities. Routes millions of reports monthly to 60+ state and territorial health departments across the United States.",
    access_model: "Free for U.S. public health entities. API-based onboarding. Open-source codebase."
  },

  "BioNumerics": {
    overview: "BioNumerics is a comprehensive commercial bioinformatics platform developed by Applied Maths (now bioMerieux) for microbial genomics, molecular typing, and epidemiological analysis. It is the industry standard for public health and food safety laboratories performing pathogen characterization.",
    functional_scope: "Whole genome sequence analysis (assembly, annotation, SNP calling), molecular typing (MLST, cgMLST, wgMLST, PFGE, rep-PCR, MALDI-TOF), phylogenetic analysis, cluster detection, epidemiological mapping, AMR gene detection, and outbreak investigation. Integrated database management with audit trails and compliance support.",
    tech_stack: "Windows desktop application with client-server architecture. Proprietary algorithms for sequence analysis. Oracle/SQL Server database backend. Calculation Engine for distributed processing. REST API for integration.",
    operator: "bioMerieux (acquired Applied Maths in 2018). Headquarters in Sint-Martens-Latem, Belgium.",
    data_model: "Relational database model linking molecular typing data (fingerprints, sequences, profiles) with epidemiological metadata (source, date, location, clinical data). Supports import from most sequencing platforms.",
    users_scale: "Used by 1,000+ laboratories worldwide including CDC, FDA, ECDC, PHE, and national reference laboratories. Standard tool for PulseNet International partners.",
    access_model: "Commercial license (per-seat and server pricing). Free evaluation available. Academic pricing. Enterprise licensing for public health networks."
  },

  "EnteroBase": {
    overview: "EnteroBase is a web-based platform for the genomic epidemiology of enteric pathogens, developed by Mark Achtman's group at the University of Warwick (now hosted with DSMZ for Mycobacterium). It assembles, stores, and provides integrated analysis of bacterial genomic data at massive scale.",
    functional_scope: "Automated genome assembly from raw reads (SRA), MLST typing (7-gene, cgMLST, wgMLST, rMLST), Hierarchical Clustering (HierCC) for population structure, SNP-based phylogenetics, GrapeTree visualization (minimum spanning trees), metadata search and filtering. Covers Salmonella, E. coli/Shigella, Clostridioides, Vibrio, Yersinia, Helicobacter, Moraxella, Streptococcus, and M. tuberculosis.",
    tech_stack: "Custom web application (Python/Flask), PostgreSQL database, automated assembly pipeline (Velvet, SPAdes), custom MLST calling engine, GrapeTree (JavaScript MST visualization). High-performance computing cluster for genome assembly. REST API.",
    operator: "University of Warwick (Mark Achtman lab) for most species; DSMZ (Leibniz Institute) for M. tuberculosis. Funded by Wellcome Trust and BBSRC.",
    data_model: "Over 1.65 million bacterial strains with assembled genomes, MLST profiles (multiple schemes per species), HierCC clusters, and metadata (source, country, date, serovar). Linked to SRA, BioSample, and PubMLST.",
    users_scale: "Contains 1,656,331+ strains. Used by thousands of researchers and public health agencies globally for tracking Salmonella, E. coli, and other enteric pathogen outbreaks.",
    access_model: "Free, web-based access. Login required for querying and analysis. Data downloads available. API for programmatic access."
  },

  "IRIDA": {
    overview: "IRIDA (Integrated Rapid Infectious Disease Analysis) is an open-source bioinformatics platform designed to make genomic epidemiology accessible to public health workers, epidemiologists, and clinical microbiologists. Developed primarily by the National Microbiology Laboratory of Canada.",
    functional_scope: "Sequencing data management (upload, organize, share), integrated bioinformatics pipelines for public health genomics (SNVPhyl for SNP phylogenetics, SISTR for Salmonella typing, refseq_masher for species identification, assembly/annotation), metadata management with genomic epidemiology ontology, data visualization (phylogenetic trees, metadata overlays), and REST API for external tool integration.",
    tech_stack: "Java/Spring Boot backend, AngularJS frontend, Galaxy for pipeline execution, PostgreSQL database. Docker deployment. REST API. Open-source on GitHub under Apache 2.0 license.",
    operator: "Public Health Agency of Canada (PHAC) / National Microbiology Laboratory (NML), in collaboration with Simon Fraser University. Funded by PHAC and Genome Canada.",
    data_model: "Project-based organization with samples, sequence files (FASTQ), metadata, and analysis results. Ontology-based metadata harmonization linking genomic, epidemiological, lab, and clinical data.",
    users_scale: "Deployed in Canadian public health laboratories and international partners. Public demonstration instance hosted by Simon Fraser University.",
    access_model: "Free, open-source. Self-hosted deployment. Role-based access control with project-level sharing."
  },

  "GLASS (WHO)": {
    overview: "GLASS (Global Antimicrobial Resistance and Use Surveillance System) is WHO's comprehensive global surveillance initiative for antimicrobial resistance. Launched in October 2015, it provides the first worldwide standardized approach to collecting, analyzing, and sharing AMR and antimicrobial consumption data.",
    functional_scope: "Multiple surveillance modules: GLASS-AMR (routine AMR data from clinical samples), GLASS-AMC (antimicrobial consumption monitoring), GLASS-EAR (emerging resistance reporting), GLASS-FUNGI (invasive fungal infections), EGASP (gonococcal resistance surveillance), One Health (ESBL-E. coli Tricycle project), PPS-AMU (hospital antibiotic use surveys), and AMR Burden estimation studies.",
    tech_stack: "WHO GLASS platform with data submission portals, WHONET integration for data collection, R/Shiny interactive dashboards for visualization, custom analytical frameworks. Standardized data submission formats.",
    operator: "World Health Organization (WHO), Department of Surveillance, Prevention and Control of AMR. Supported by WHO AMR Surveillance Collaborating Centres Network.",
    data_model: "Standardized AMR data: pathogen-antibiotic combinations, resistance rates by specimen type. Epidemiological metadata (country, year, setting). AMC data in DDD (Defined Daily Doses) per 1,000 inhabitants.",
    users_scale: "127 countries enrolled. Published annual reports since 2017 informing global AMR policy. Data from thousands of laboratories worldwide.",
    access_model: "Free enrollment for WHO Member States. Data submission through GLASS portal. Public dashboards and annual reports freely available. Country-level data published with consent."
  },

  "PulseNet": {
    overview: "PulseNet is CDC's national laboratory network for detecting foodborne, waterborne, and One Health-related disease outbreaks through molecular surveillance. Established in 1996, it uses DNA fingerprinting (now primarily whole genome sequencing) to connect illness cases and identify outbreaks across the United States and internationally.",
    functional_scope: "Whole genome sequencing (WGS) of foodborne pathogens, SNP-based clustering for outbreak detection, allele-based typing (cgMLST), real-time comparison of isolate fingerprints across the network, outbreak investigation support, and antimicrobial resistance monitoring. PulseNet International coordinates similar activities globally across 86 countries.",
    tech_stack: "WGS-based surveillance using Illumina sequencing. Bioinformatics pipeline: NCBI Pathogen Detection for clustering, BioNumerics for legacy data. Cloud-based data sharing via NCBI. PFGE (legacy) and WGS databases.",
    operator: "U.S. Centers for Disease Control and Prevention (CDC), with 83 participating state and local public health laboratories. PulseNet International extends to 86 countries.",
    data_model: "Isolate data: organism, WGS/PFGE fingerprint, patient demographics (anonymized), food source, date, location. Clusters defined by SNP distance thresholds. Integrated with NCBI Pathogen Detection trees.",
    users_scale: "Detects ~1,750+ clusters annually in the U.S. Credited with preventing an estimated 270,000+ illnesses per year. All 50 U.S. states plus territories participate.",
    access_model: "Network access for participating public health laboratories. Cluster data shared with epidemiologists via secure systems. Summary data publicly available through CDC."
  },

  "Auspice": {
    overview: "Auspice is the open-source interactive visualization application developed by the Nextstrain team for exploring phylogenomic datasets. It renders phylogenetic trees with temporal, geographic, and mutation annotations, powering all Nextstrain.org visualizations and available as a standalone tool via auspice.us.",
    functional_scope: "Interactive phylogenetic tree visualization with zoom, filter, and animation. Geographic mapping of pathogen spread over time. Mutation frequency tracking. Diversity panels showing entropy and mutation distribution. Support for narratives (guided walkthroughs). Drag-and-drop local file viewing (no data uploaded to server).",
    tech_stack: "React.js frontend, D3.js for tree rendering and charts, Leaflet.js for geographic maps, deck.gl for transmission lines. WebAssembly for performance-critical operations. Installable via npm or usable via auspice.us. Open-source under AGPL v3.",
    operator: "Nextstrain project (Fred Hutchinson Cancer Center & University of Basel). Funded by NIH, HHMI, Wellcome Trust.",
    data_model: "Auspice JSON format: tree topology with node annotations (mutations, dates, locations, clade assignments, confidence intervals). Sidecar files for additional metadata, frequencies, and tip counts.",
    users_scale: "Powers all Nextstrain.org builds viewed by millions. auspice.us used by thousands of researchers for private dataset exploration.",
    access_model: "Free, open-source. auspice.us requires no login, all processing client-side (privacy-preserving). NPM package for self-hosting."
  },

  "Terra": {
    overview: "Terra is a secure, scalable, cloud-based platform for biomedical data analysis, developed by the Broad Institute of MIT and Harvard in collaboration with Microsoft and Verily (Alphabet). It is the world's most trusted platform for large-scale genomic and clinical data analysis.",
    functional_scope: "Cloud-based data analysis with support for WDL (Workflow Description Language) and Cromwell execution engine. Jupyter notebooks, RStudio, and Galaxy integration. Secure data enclaves for sensitive datasets. Access to major genomic datasets (TCGA, gnomAD, 1000 Genomes, All of Us). Federated analysis framework for multi-institutional collaboration without data movement.",
    tech_stack: "Google Cloud Platform (primary) and Microsoft Azure. WDL/Cromwell workflow engine. Jupyter/RStudio interactive analysis. React.js frontend. Python/Scala backend. SAM (Security and Access Management) for authorization. Open-source components on GitHub.",
    operator: "Broad Institute of MIT and Harvard, in partnership with Microsoft and Verily (Alphabet/Google). Funded by NIH, NCI, and NHGRI.",
    data_model: "Workspace-based model with data tables, reference data, workflows, and analysis outputs. Supports any file format. Terra Data Repository for managed datasets with FAIR principles.",
    users_scale: "50,000+ registered users. Hosts petabytes of biomedical data. Used by NIH All of Us, TCGA, AnVIL, and BioData Catalyst programs.",
    access_model: "Free to register. Pay-per-use cloud computing (Google Cloud billing). Free tier for small analyses. Institutional billing available. Secure workspaces for controlled-access data."
  },

  "CoVariants": {
    overview: "CoVariants is an open-source web resource providing an overview of SARS-CoV-2 variants and mutations of interest. Created by Dr. Emma Hodcroft (University of Basel and Swiss Institute of Bioinformatics), it tracks variant prevalence globally using data from GISAID, with Nextstrain clade nomenclature.",
    functional_scope: "Variant information pages with mutation details and literature links, per-country variant frequency distributions over time, per-variant geographic spread visualization, shared mutation analysis across variants, 3D protein structure viewer showing mutation locations, and links to focused Nextstrain builds for each variant.",
    tech_stack: "React.js/Gatsby static site, D3.js for charts and visualizations, Python scripts for data processing from GISAID, 3D protein visualization using Mol* viewer. Hosted on GitHub Pages. Open-source on GitHub.",
    operator: "Dr. Emma Hodcroft, University of Basel / Swiss Institute of Bioinformatics. Independent research project.",
    data_model: "Aggregated variant frequency data by country and time from GISAID sequences. Mutation definitions and annotations per Nextstrain clade. Cross-referenced with WHO variant designations.",
    users_scale: "Hundreds of thousands of monthly visitors. Widely cited by public health agencies and media for variant tracking during the COVID-19 pandemic.",
    access_model: "Free, open-source, publicly accessible. No login required. All code and derived data on GitHub."
  },

  "Pangolin": {
    overview: "Pangolin (Phylogenetic Assignment of Named Global Outbreak Lineages) is a software tool and nomenclature system for classifying SARS-CoV-2 genome sequences into epidemiological lineages. Developed by the Rambaut Lab at the University of Edinburgh, the Pango nomenclature is the global standard used by WHO and public health agencies.",
    functional_scope: "Assignment of SARS-CoV-2 sequences to Pango lineages using trained machine learning models (pangoLEARN) or UShER phylogenetic placement. Related tools: Scorpio (constellation-based variant calling), Civet (cluster investigation), Polecat (automated cluster flagging). Lineage designation proposals via GitHub.",
    tech_stack: "Python command-line tool, pangoLEARN (decision tree model trained on curated lineage assignments), UShER (C++ ultrafast phylogenetic placement). Installable via conda/pip. Web version available at pangolin.cog-uk.io. Open-source on GitHub.",
    operator: "Rambaut Lab, University of Edinburgh, with contributions from University of Oxford, University of Sydney, and COG-UK. Funded by Wellcome Trust, MRC, and UKRI.",
    data_model: "FASTA input sequences mapped to Pango lineage designations (e.g., B.1.1.7, BA.2.86). Lineage definitions stored as constellation files with defining mutations.",
    users_scale: "Standard tool used globally - millions of sequences classified. Used by WHO, CDC, ECDC, PHE, and virtually every public health agency worldwide.",
    access_model: "Free, open-source (GPL v3). Command-line tool, web interface, and API. Lineage definitions updated regularly via GitHub."
  },

  "Nextclade": {
    overview: "Nextclade is a web-based and command-line tool for viral genome clade assignment, mutation calling, and sequence quality assessment. Part of the Nextstrain project, it provides instant analysis of SARS-CoV-2, influenza, RSV, mpox, and other pathogen sequences directly in the browser using WebAssembly.",
    functional_scope: "Clade/lineage assignment (Nextstrain clades, Pango lineages, WHO labels), mutation calling (nucleotide and amino acid), phylogenetic placement on reference trees, sequence quality control (missing data, mixed sites, frame shifts, stop codons), and batch processing of thousands of sequences.",
    tech_stack: "Rust core compiled to WebAssembly for browser execution (no server upload needed), React.js frontend, Nextstrain Augur for reference tree generation. Also available as CLI tool. Open-source on GitHub under MIT license.",
    operator: "Nextstrain project (Fred Hutchinson Cancer Center & University of Basel).",
    data_model: "FASTA input sequences analyzed against curated reference datasets per pathogen. Output includes clade assignment, mutation list, QC metrics, and phylogenetic placement.",
    users_scale: "Millions of sequences analyzed. Used by public health labs worldwide for routine SARS-CoV-2 and influenza surveillance.",
    access_model: "Free, open-source. Browser-based (all processing local - no data leaves user's machine). CLI for batch processing."
  },

  "CZ ID": {
    overview: "CZ ID (formerly IDseq) is a free, no-code, cloud-based bioinformatics platform for metagenomic pathogen detection, developed by the Chan Zuckerberg Initiative (CZI) and the Chan Zuckerberg Biohub. It enables researchers to identify viruses, bacteria, fungi, and parasites from next-generation sequencing data without bioinformatics expertise.",
    functional_scope: "Metagenomic pipeline (characterize all microbes in a sample from Illumina and Nanopore data), antimicrobial resistance pipeline (detect AMR genes), viral consensus genome pipeline (generate consensus genomes for any virus). Interactive reports with heatmaps, coverage visualization, taxonomic trees, and phylogenetic trees.",
    tech_stack: "Cloud-based on AWS. Custom bioinformatics pipelines: STAR/Bowtie2 for host filtering, minimap2 for alignment, BLAST for identification, SPAdes for assembly. React.js frontend, Ruby on Rails backend. Open-source on GitHub. REST API.",
    operator: "Chan Zuckerberg Initiative (CZI) and Chan Zuckerberg Biohub, San Francisco, CA. Founded by Drs. Joe DeRisi and Mark Zuckerberg/Priscilla Chan.",
    data_model: "Raw sequencing files (FASTQ) processed through pipeline. Reports include taxon hits with NT/NR counts, coverage metrics, and confidence scores. Human reads automatically filtered and not stored.",
    users_scale: "Used by researchers in 100+ countries. Featured in publications in Nature Communications, PNAS, mBio. Unlimited data upload capacity.",
    access_model: "Free to use, permanently free commitment. Account required for upload. Raw data private by default. Identified taxa reports shareable."
  },

  "Pathoplexus": {
    overview: "Pathoplexus is a transparent, non-profit pathogen sequence data sharing platform founded by members from 14 countries across 5 continents. It offers flexible data-sharing options with time-limited protections for proper attribution, integrating smoothly with INSDC databases (NCBI, ENA, DDBJ).",
    functional_scope: "Sequence data sharing with flexible access models (open data or restricted-use with time-limited protections up to one year), filtering and searching of sequences, API for computational pipelines, integration with INSDC (open data appears in NCBI/ENA/DDBJ), pathogen-specific databases (currently supports multiple pathogens).",
    tech_stack: "Modern web platform with REST API, built in collaboration with PHA4GE (Public Health Alliance for Genomic Epidemiology). Demo instance for testing. Open-source development.",
    operator: "Pathoplexus Association (non-profit, registered association). Executive Board from around the globe. Community-driven with no major corporate influence.",
    data_model: "Genomic sequences with metadata, submitted per pathogen. Data can be Open (immediately accessible, forwarded to INSDC) or Restricted-Use (protected for up to 1 year with attribution requirements).",
    users_scale: "Growing community of researchers and public health institutions. Launched as an alternative/complement to GISAID with focus on transparency and flexibility.",
    access_model: "Free. Account required for submission. All data accessible to everyone (browsing/analysis), but Restricted-Use data has publication restrictions during the protection period."
  },

  "Genome Detective": {
    overview: "Genome Detective is a web-based bioinformatics platform for automated virus identification, assembly, and classification from next-generation sequencing data. Developed by Emweb (Belgium) in collaboration with leading virologists, it provides intuitive analysis requiring no bioinformatics expertise.",
    functional_scope: "Automated virus identification from NGS data (Illumina, Ion Torrent, Oxford Nanopore), de novo genome assembly, virus subtyping (HIV-1, Hepatitis, influenza), SARS-CoV-2 variant typing, detailed alignment and coverage reports. Used to discover the Beta and Omicron SARS-CoV-2 variants.",
    tech_stack: "Cloud-based web platform. Custom bioinformatics pipeline: de novo assembly (MEGAHIT, SPAdes), DIAMOND/BLAST for classification, manually curated reference databases. REST API for batch processing. Locally installable version available.",
    operator: "Emweb NV, Belgium. Scientific collaboration with Prof. Tulio de Oliveira (CERI, Stellenbosch University, South Africa) and international partners.",
    data_model: "Input: raw sequencing reads (FASTQ). Output: assembled genomes, classification results, coverage maps, mutation reports. Curated reference databases per virus family.",
    users_scale: "Used by laboratories worldwide including CERI (discovered Beta and Omicron variants), WHO reference labs, and national genomic surveillance programs in 50+ countries.",
    access_model: "Free evaluation version (limited resources). Premium subscription for routine use. On-premise installation for labs."
  },

  "BioSense/ESSENCE": {
    overview: "BioSense Platform (with ESSENCE) is CDC's cloud-based electronic syndromic surveillance system, a core component of the National Syndromic Surveillance Program (NSSP). ESSENCE (Electronic Surveillance System for the Early Notification of Community-Based Epidemics) was created in 1997 by Johns Hopkins APL and serves as the primary analysis and visualization tool for BioSense data.",
    functional_scope: "Near-real-time monitoring of emergency department visits, urgent care encounters, and other health indicators. Automated anomaly detection using temporal and spatial algorithms. Custom query building, geographic analysis, time-series visualization, data quality monitoring. Supports detection of disease outbreaks, bioterrorism events, severe weather impacts, and drug overdose trends.",
    tech_stack: "Cloud-based platform (Amazon Web Services). ESSENCE is a Java-based web application with statistical algorithms for aberration detection (C2, EWMA, regression). SAS/R for advanced analytics. HL7 messaging for data ingestion. Secure HTTPS with SAMS authentication.",
    operator: "CDC National Syndromic Surveillance Program (NSSP), developed with Johns Hopkins Applied Physics Laboratory (JH APL) and InductiveHealth Informatics.",
    data_model: "Syndromic surveillance data: chief complaints (free text), diagnosis codes (ICD-10), demographic data, facility type, visit date/time, disposition. De-identified. HL7 ADT messages ingested from 6,000+ healthcare facilities.",
    users_scale: "Covers 78% of U.S. emergency departments. Over 1,400 practitioners in the NSSP Community of Practice across all 50 states, DC, and territories.",
    access_model: "Free for U.S. state, local, and tribal health departments. Access via secure web portal. Tiered access based on jurisdiction. Data sharing agreements required."
  },

  "NWSS": {
    overview: "The National Wastewater Surveillance System (NWSS) is CDC's public health infrastructure for monitoring infectious diseases through wastewater testing. Established in September 2020 during COVID-19, it has expanded to track SARS-CoV-2, influenza, RSV, mpox, measles, and H5 bird flu across the United States.",
    functional_scope: "Wastewater sample collection and testing for pathogen genetic material, trend analysis and visualization dashboards, community-level disease activity estimation (independent of clinical testing), early warning detection of emerging variants, geographic comparison of viral activity levels across states and territories.",
    tech_stack: "Laboratory: RT-qPCR and RT-dPCR for pathogen detection, sequencing for variant identification. Data platform: DCIPHER (Defense Consortium for Health Analytics) for data management, CDC data visualization dashboards (R/Shiny). Biobot Analytics and Verily partnership for laboratory analysis. Cloud-based data infrastructure.",
    operator: "CDC (Centers for Disease Control and Prevention), with state and local health departments, wastewater utilities, and laboratory partners (Biobot Analytics, Verily/Google).",
    data_model: "Wastewater sampling data: collection date, treatment plant location, population served, pathogen concentration (gene copies/mL), flow rate normalization, variant sequences. Aggregated at community, state, and national levels.",
    users_scale: "Covers 1,500+ wastewater sampling sites serving ~140 million Americans. Monitoring for 6+ pathogens. Data published on CDC's public dashboards.",
    access_model: "Free. Public dashboards at cdc.gov/nwss. Data downloads available for researchers. Participation open to all U.S. wastewater utilities through state health departments."
  },

  "GEIS": {
    overview: "GEIS (Global Emerging Infections Surveillance) is the U.S. Department of Defense's infectious disease surveillance network, established in 1997 under the Armed Forces Health Surveillance Division (AFHSD). It operates through a network of overseas military laboratories and partnerships to detect emerging infectious disease threats to military personnel and global health.",
    functional_scope: "Global pathogen surveillance including respiratory diseases, enteric infections, febrile illness, vector-borne diseases, antimicrobial resistance monitoring, and novel pathogen detection. Next-generation sequencing for pathogen characterization. Laboratory capacity building in partner nations. Real-time disease reporting and early warning for force health protection.",
    tech_stack: "Laboratory: WGS (Illumina, Oxford Nanopore), RT-PCR, multiplex assays. Informatics: ESSENCE-based surveillance analytics, custom reporting dashboards, DoD Health-related surveillance data repositories. Integrated with Armed Forces Health Surveillance Branch (AFHSB) data systems.",
    operator: "Armed Forces Health Surveillance Division (AFHSD), Defense Health Agency, U.S. Department of Defense. Supported by HJFMRI (Henry M. Jackson Foundation for the Advancement of Military Medicine).",
    data_model: "Infectious disease event reports, laboratory diagnostic data, pathogen genomic sequences, antimicrobial susceptibility data. Integrated with DoD electronic health records and global disease databases.",
    users_scale: "Operates through 10+ DoD overseas research laboratories on 5 continents. Supports force health protection for 2.8+ million active duty and reserve military personnel.",
    access_model: "DoD internal system. Data shared with partner nations and international public health agencies (WHO, CDC). Published findings in peer-reviewed journals."
  },

  "DARPA P3 (Pandemic Prevention Platform)": {
    overview: "DARPA P3 (Pandemic Prevention Platform) is a Department of Defense research program aimed at developing an integrated platform to halt viral pandemic outbreaks within 60 days of pathogen identification. Launched in 2017, it focuses on rapid discovery, characterization, production, testing, and delivery of nucleic acid-encoded medical countermeasures.",
    functional_scope: "Rapid antibody discovery from convalescent blood samples (B-cell sorting, single-cell sequencing), antibody characterization and optimization using computational biology, rapid manufacturing of DNA/RNA-encoded antibodies, pre-clinical and clinical testing acceleration, and field-deployable delivery systems. The program demonstrated the ability to discover, manufacture, and begin testing antibody treatments in under 60 days.",
    tech_stack: "Single-cell B-cell sequencing (10x Genomics), computational antibody engineering (Rosetta, machine learning), DNA/mRNA expression platforms, mammalian cell manufacturing (CHO cells), and advanced clinical trial infrastructure. Multiple contractor teams: AbCellera, Duke DHVI, Vanderbilt VUMC, MedImmune/AstraZeneca.",
    operator: "Defense Advanced Research Projects Agency (DARPA), U.S. Department of Defense. Biological Technologies Office.",
    data_model: "Antibody sequence libraries, structural data (cryo-EM, X-ray), binding affinity measurements, neutralization assay results, pre-clinical and clinical trial data. Classified and unclassified data tracks.",
    users_scale: "Multiple contractor teams at Duke, Vanderbilt, AbCellera, MedImmune. Results directly applied to COVID-19 response (AbCellera's bamlanivimab was first FDA-authorized monoclonal antibody).",
    access_model: "Government-funded research program. Results published in peer-reviewed journals. Some technologies transitioned to commercial partners (AbCellera -> Eli Lilly)."
  },

  "USAMRIID Biosurveillance": {
    overview: "USAMRIID (United States Army Medical Research Institute of Infectious Diseases) is the DoD's lead laboratory for medical biological defense research, located at Fort Detrick, Maryland. Its biosurveillance capabilities support detection, identification, and characterization of biological threat agents.",
    functional_scope: "Research on medical countermeasures (vaccines, therapeutics, diagnostics) against biological threat agents. BSL-2 through BSL-4 laboratory capabilities for working with the most dangerous pathogens. Diagnostic reference laboratory for biological threat agents. Training and consultation for biodefense response.",
    tech_stack: "BSL-4 maximum containment laboratories, whole genome sequencing (Illumina, PacBio, Nanopore), mass spectrometry (MALDI-TOF), PCR-based diagnostics, cell culture and animal model facilities. Integrated with DoD medical surveillance systems.",
    operator: "U.S. Army Medical Research and Development Command (USAMRDC), Fort Detrick, Maryland, USA.",
    data_model: "Pathogen characterization data, diagnostic assay results, genomic sequence data, therapeutic efficacy data. Classified and unclassified data handling.",
    users_scale: "Serves the entire U.S. military and supports national biodefense. Reference laboratory for CDC's Laboratory Response Network (LRN). International partnerships.",
    access_model: "DoD facility with controlled access. Published research in open literature. Diagnostic services available to DoD and federal agencies."
  },

  "CDC Travelers' Genomic Surveillance": {
    overview: "CDC's Travelers' Genomic Surveillance (TGS) program monitors international travelers arriving at U.S. airports for emerging infectious diseases through voluntary nasal swab testing and genomic sequencing. It serves as an early warning system for detecting novel variants and pathogens before they spread domestically.",
    functional_scope: "Voluntary sampling of arriving international travelers, PCR testing for respiratory pathogens, whole genome sequencing of positive samples for variant identification, genomic analysis and reporting to CDC surveillance teams, tracking of variant importation patterns by travel origin.",
    tech_stack: "Nasal swab collection kits, RT-qPCR testing, whole genome sequencing (Illumina), bioinformatics pipelines for variant calling and lineage assignment (Pangolin, Nextclade), CDC data reporting systems.",
    operator: "U.S. Centers for Disease Control and Prevention (CDC), in partnership with XpresCheck and airport authorities.",
    data_model: "Traveler demographic data (anonymized), travel origin, sample collection date, pathogen detection results, genomic sequence data, variant classification.",
    users_scale: "Operates at multiple major U.S. international airports (JFK, SFO, ATL, IAD, etc.). Screens tens of thousands of travelers annually.",
    access_model: "Voluntary participation by travelers. Data used internally by CDC. Aggregate findings published in MMWR and peer-reviewed journals."
  },

  "GHS Index": {
    overview: "The Global Health Security (GHS) Index is a comprehensive assessment tool measuring the capacity of 195 countries to prepare for epidemics and pandemics. Developed by the Nuclear Threat Initiative (NTI), Johns Hopkins Center for Health Security, and the Economist Intelligence Unit (now Economist Impact).",
    functional_scope: "Assessment across 6 categories (Prevention, Detection & Reporting, Rapid Response, Health System, Compliance with International Norms, Risk Environment), 37 indicators, and 171 questions. Country-level scoring (0-100), benchmarking, and gap identification. Published reports with recommendations for improving global health security.",
    tech_stack: "Structured survey methodology with expert validation. Data from official government sources, WHO JEE reports, OIE/WOAH PVS evaluations, and open-source intelligence. Excel-based scoring framework published for transparency. Interactive web dashboard.",
    operator: "Nuclear Threat Initiative (NTI), Johns Hopkins Center for Health Security, and Economist Impact. Funded by Open Philanthropy, Bill & Melinda Gates Foundation, and Robertson Foundation.",
    data_model: "Country scores across 6 categories, 37 indicators. Binary and ordinal data with weighting. Three assessment cycles: 2019, 2021, 2024. Cross-referenced with JEE, SDG, and HDI data.",
    users_scale: "Used by 195 countries for self-assessment, by international organizations (WHO, World Bank) for policy planning, and by researchers for health security analysis. Reports downloaded millions of times.",
    access_model: "Free, publicly accessible at ghsindex.org. Full methodology and data downloadable. Country profiles freely available."
  },

  "BioFire Defense (FilmArray)": {
    overview: "BioFire Defense is a subsidiary of bioMerieux specializing in syndromic molecular diagnostic and biothreat detection solutions for military and public health applications. Its FilmArray and SPOTFIRE platforms use multiplex PCR to deliver rapid, comprehensive pathogen identification from clinical and environmental samples.",
    functional_scope: "Clinical IVD panels (respiratory, blood culture, GI, meningitis/encephalitis), biothreat IVD panels (detecting biological warfare agents), CBRN field detection (RAZOR MK II portable PCR for field deployment), and external quality controls. TORCH system for high-throughput laboratory testing. SPOTFIRE for point-of-care testing.",
    tech_stack: "Proprietary nested multiplex PCR in sealed pouch system (single-use reagent pouches). FilmArray TORCH (high-throughput automated system), RAZOR MK II (portable, battery-powered field PCR), SPOTFIRE (point-of-care). Custom firmware and analysis software. CLIA-waived operation for some panels.",
    operator: "BioFire Defense LLC (subsidiary of bioMerieux), Salt Lake City, Utah, USA. Serves U.S. DoD, DTRA, DHS, and allied military forces.",
    data_model: "Test results: pathogen panel results (detected/not detected), sample metadata. Encrypted result data. Chain of custody tracking for CBRN applications.",
    users_scale: "Deployed across U.S. military medical facilities, field hospitals, mobile laboratories, and allied nation forces. TORCH/SPOTFIRE systems in civilian hospitals worldwide.",
    access_model: "Commercial product. Government contracts for military applications. Clinical systems available through bioMerieux distribution. Training and support included."
  },

  "ENA (European Nucleotide Archive)": {
    overview: "The European Nucleotide Archive (ENA) is a globally comprehensive nucleotide sequence database operated by the European Bioinformatics Institute (EMBL-EBI). Part of the International Nucleotide Sequence Database Collaboration (INSDC) alongside NCBI GenBank and DDBJ, it provides free and unrestricted access to annotated DNA and RNA sequences.",
    functional_scope: "Submission, storage, and retrieval of nucleotide sequences (raw reads, assemblies, annotated sequences). Supports all sequencing platforms (Illumina, Nanopore, PacBio). Advanced search and retrieval via browser and programmatic APIs. Sequence analysis services via EMBL-EBI Job Dispatcher (BLAST, Clustal Omega, etc.).",
    tech_stack: "Web portal (ENA Browser), REST API, Webin submission system, FTP/Aspera bulk data access. Backend: Oracle databases, cloud storage. Analysis tools: BLAST, ENA-specific search APIs. Integration with UniProt, Ensembl, and other EMBL-EBI resources.",
    operator: "European Molecular Biology Laboratory - European Bioinformatics Institute (EMBL-EBI), Hinxton, Cambridge, UK.",
    data_model: "Three-tier data model: Reads (raw sequencing data), Analysis (derived data like assemblies), and Annotated Sequences (curated entries). Linked to BioSample, BioProject, and taxonomy databases. INSDC feature table format.",
    users_scale: "Contains billions of sequences from millions of studies. Used by researchers worldwide. Part of INSDC serving the global scientific community.",
    access_model: "Free, publicly accessible. No login for data access. Webin account for data submission. Programmatic access via REST API and FTP."
  },

  "disease.sh": {
    overview: "disease.sh is a free, open-source disease data API that served over 100 billion requests, providing programmatic access to global infectious disease statistics including COVID-19, influenza, and other pathogen data.",
    functional_scope: "RESTful API for disease statistics: global/country/state-level case counts, deaths, recoveries, vaccination data, historical time series, and geographic data. Aggregates from WHO, Johns Hopkins, Worldometer, and government sources.",
    tech_stack: "Node.js backend, Redis caching, MongoDB, hosted on cloud infrastructure. Open-source on GitHub. REST API with JSON responses.",
    operator: "Open-source community project.",
    data_model: "JSON API returning country-level and sub-national disease statistics with temporal data.",
    users_scale: "100 billion+ API requests served. Used by thousands of applications, dashboards, and research projects.",
    access_model: "Free, open-source, no API key required. Rate limiting for fair use."
  },

  "INSaFLU": {
    overview: "INSaFLU is a free, web-based bioinformatics platform for influenza and SARS-CoV-2 whole genome sequencing analysis. Developed by the National Institute of Health (INSA) of Portugal, it provides automated pipelines from raw reads to phylogenetic analysis.",
    functional_scope: "Automated reference-based genome assembly, variant calling (SNPs and indels), consensus sequence generation, clade/lineage assignment, minor variant detection (intra-host diversity), phylogenetic tree building, and surveillance reporting. Supports both Illumina and Oxford Nanopore data.",
    tech_stack: "Web platform built on Django (Python), using bioinformatics tools: snippy (variant calling), MAFFT (alignment), FastTree/IQ-TREE (phylogenetics), Abricate (AMR), Nextclade integration. Docker deployment. Open-source on GitHub.",
    operator: "National Institute of Health Doutor Ricardo Jorge (INSA), Lisbon, Portugal.",
    data_model: "Raw reads (FASTQ) and reference genomes as input. Outputs: consensus sequences, variant tables, phylogenetic trees, quality reports. User-managed private workspace.",
    users_scale: "Used by public health laboratories in 30+ countries for influenza and SARS-CoV-2 genomic surveillance.",
    access_model: "Free. Account required for upload and analysis. User data stored privately. No sharing of submitted data by INSaFLU team."
  },

  "COG-UK": {
    overview: "COG-UK (COVID-19 Genomics UK Consortium) was a national consortium for SARS-CoV-2 genome sequencing in the United Kingdom, established in March 2020 and closed on March 31, 2023. It sequenced over 2.5 million SARS-CoV-2 genomes, making the UK the world leader in COVID-19 genomic surveillance.",
    functional_scope: "Large-scale SARS-CoV-2 whole genome sequencing, real-time variant detection and tracking, integration of genomic data with epidemiological information, generation of phylogenetic analyses for outbreak investigation, informing public health policy and vaccine strategy. Developed Pangolin, Civet, and other tools.",
    tech_stack: "Oxford Nanopore and Illumina sequencing. ARTIC protocol for amplicon-based WGS. CLIMB (Cloud Infrastructure for Microbial Bioinformatics) for data processing. Custom bioinformatics pipelines. Data shared via GISAID and ENA.",
    operator: "UK Health Security Agency (UKHSA), Wellcome Sanger Institute, University of Edinburgh, University of Oxford, and 20+ partner institutions. Funded by UKRI/MRC, DHSC, and Wellcome Trust.",
    data_model: "SARS-CoV-2 consensus sequences with lineage assignments, sample metadata (collection date, region, patient demographics), and epidemiological linkage data.",
    users_scale: "Sequenced 2.5+ million SARS-CoV-2 genomes (largest national sequencing program globally). Consortium of 20+ academic and public health institutions.",
    access_model: "Closed program (archived). Sequencing data publicly available via GISAID and ENA. Tools (Pangolin, etc.) remain actively maintained and open-source. Website archived by UK National Archives."
  },

  "EIOS 2.0 (WHO Enhanced)": {
    overview: "EIOS (Epidemic Intelligence from Open Sources) is WHO's AI/ML-enhanced epidemic intelligence platform for early detection of public health events. It monitors and analyzes information from diverse open sources including news media, social media, and official reports in multiple languages.",
    functional_scope: "Automated web crawling and aggregation from 150,000+ sources, natural language processing in 50+ languages, event-based surveillance signal detection and categorization, risk assessment and alert generation, geo-tagging and mapping, trend analysis and dashboards, collaborative investigation workflows.",
    tech_stack: "AI/ML pipeline: NLP (entity extraction, sentiment analysis, topic modeling), machine learning classifiers for disease signal detection, web crawling infrastructure. Cloud-hosted with scalable architecture. Custom dashboards and API.",
    operator: "World Health Organization (WHO), in collaboration with the Joint Research Centre (JRC) of the European Commission and other partners in the Epidemic Intelligence Community.",
    data_model: "Structured events: disease, date, location, source, affected population, signal type, verification status. Multi-language text corpus with entity annotations.",
    users_scale: "Used by WHO and 100+ national public health agencies. Monitors 150,000+ sources globally. Processes millions of articles daily.",
    access_model: "Access for WHO and partner public health agencies. Not publicly available. Restricted to authorized users in the Epidemic Intelligence Community."
  },

  "Africa CDC AGARI": {
    overview: "AGARI (Africa Genome Amplification Resource for Infectious Diseases) is the Africa Centres for Disease Control and Prevention's continental genomic surveillance initiative, aimed at building genomic sequencing capacity across African nations for infectious disease detection and monitoring.",
    functional_scope: "Continental coordination of pathogen genomic sequencing, laboratory capacity building, bioinformatics training, data sharing across African Union member states, variant tracking and early warning, integration with Africa CDC's continental surveillance systems.",
    tech_stack: "Oxford Nanopore and Illumina sequencing platforms deployed across member state laboratories. Bioinformatics training using Galaxy, Nextstrain, and Nextclade. Data shared through GISAID and regional databases.",
    operator: "Africa Centres for Disease Control and Prevention (Africa CDC), African Union, Addis Ababa, Ethiopia.",
    data_model: "Pathogen genomic sequences with epidemiological metadata from African Union member states.",
    users_scale: "Covers 55 African Union member states. Building sequencing capacity in laboratories across the continent.",
    access_model: "Access through Africa CDC and member state public health agencies. Data sharing coordinated at continental level."
  },

  "GrapeTree": {
    overview: "GrapeTree is an interactive minimum spanning tree (MST) visualization tool designed for large-scale genomic epidemiology datasets, developed by the EnteroBase team. It efficiently handles trees with hundreds of thousands of nodes and provides integrated metadata overlay.",
    functional_scope: "Visualization of minimum spanning trees for MLST/cgMLST profiles, interactive node coloring by metadata, dynamic filtering and searching, tree layout optimization for large datasets (MSTree V2 algorithm for 100,000+ nodes), export in SVG/PNG, and integration with EnteroBase.",
    tech_stack: "JavaScript/D3.js web application, MSTree V2 algorithm (C++ with Python bindings for efficient MST computation), Electron desktop app. Open-source on GitHub.",
    operator: "EnteroBase team, University of Warwick. Developed by Zhemin Zhou and Mark Achtman.",
    data_model: "Input: allelic profiles (MLST/cgMLST) and metadata tables. Output: interactive MST visualization with node annotations.",
    users_scale: "Standard visualization tool for EnteroBase (1.6M+ strains). Widely used in the microbial genomics community.",
    access_model: "Free, open-source. Available as web app, desktop app (Electron), and embeddable component."
  }
};

// ============================================================
// Generate profiles for ALL platforms
// For platforms not explicitly profiled, generate structured profiles from existing data
// ============================================================

function generateProfile(platform) {
  const name = platform.n;
  
  // If we have a manually researched profile, use it
  if (profiles[name]) {
    return profiles[name];
  }
  
  // Otherwise, generate a structured profile from existing data
  const cat = platform.c || 'Biosurveillance Platform';
  const desc = platform.d || '';
  const strengths = platform.st || [];
  const weaknesses = platform.wk || [];
  const score = platform.s;
  const url = platform.u;
  
  // Determine layer
  let layer = 'Unknown';
  for (const [layerName, platforms] of Object.entries(optB.layers || {})) {
    if (platforms.some(p => p.n === name)) {
      layer = layerName;
      break;
    }
  }
  
  // Build tech stack inference from category and name
  const techInference = inferTechStack(name, cat, url, desc, strengths);
  const operatorInference = inferOperator(name, url, desc);
  const accessInference = inferAccess(name, cat, strengths, weaknesses, url);
  const usersInference = inferScale(name, cat, strengths, score);
  
  return {
    overview: `${name} is a ${cat.toLowerCase()} platform${desc ? ': ' + desc : ''}. ${strengths.length > 0 ? 'Key capabilities include ' + strengths.slice(0, 3).join(', ').toLowerCase() + '.' : ''}`,
    functional_scope: buildFunctionalScope(name, cat, desc, strengths),
    tech_stack: techInference,
    operator: operatorInference,
    data_model: inferDataModel(name, cat, desc),
    users_scale: usersInference,
    access_model: accessInference
  };
}

function inferTechStack(name, cat, url, desc, strengths) {
  const parts = [];
  
  // Domain-specific inference
  if (cat.includes('Genomic') || cat.includes('Phylogenetic') || cat.includes('Sequence')) {
    parts.push('Bioinformatics pipeline (sequence analysis, alignment, variant calling)');
    if (strengths.some(s => s.toLowerCase().includes('open-source'))) parts.push('Open-source tools');
  }
  if (cat.includes('Surveillance') || cat.includes('Monitoring')) {
    parts.push('Web-based surveillance dashboard');
    parts.push('Database backend for epidemiological data');
  }
  if (cat.includes('AI') || cat.includes('Machine Learning') || desc.includes('AI')) {
    parts.push('AI/ML models for prediction and analysis');
  }
  if (cat.includes('Mobile') || strengths.some(s => s.toLowerCase().includes('mobile'))) {
    parts.push('Mobile application (iOS/Android)');
  }
  if (cat.includes('Laboratory') || cat.includes('Diagnostic')) {
    parts.push('Laboratory information system with instrument integration');
  }
  if (cat.includes('Hardware') || cat.includes('Detection') || cat.includes('Sensor')) {
    parts.push('Specialized hardware/sensor systems');
  }
  if (cat.includes('Defense') || cat.includes('Military') || cat.includes('CBRN')) {
    parts.push('Defense-grade systems with security clearance requirements');
  }
  
  // URL-based inference
  if (url.includes('github')) parts.push('Open-source on GitHub');
  if (url.includes('.gov')) parts.push('Government-hosted infrastructure');
  if (url.includes('who.int')) parts.push('WHO institutional infrastructure');
  
  if (strengths.some(s => s.toLowerCase().includes('api'))) parts.push('REST API for programmatic access');
  if (strengths.some(s => s.toLowerCase().includes('real-time'))) parts.push('Real-time data processing pipeline');
  if (strengths.some(s => s.toLowerCase().includes('cloud'))) parts.push('Cloud-based infrastructure');
  
  if (parts.length === 0) parts.push('Web-based platform with domain-specific analytical tools');
  
  return parts.join('. ') + '.';
}

function inferOperator(name, url, desc) {
  // Known operator mappings
  const operators = {
    'cdc.gov': 'U.S. Centers for Disease Control and Prevention (CDC)',
    'who.int': 'World Health Organization (WHO)',
    'nih.gov': 'National Institutes of Health (NIH), U.S. Department of Health and Human Services',
    'ecdc.europa.eu': 'European Centre for Disease Prevention and Control (ECDC)',
    'ebi.ac.uk': 'European Molecular Biology Laboratory - European Bioinformatics Institute (EMBL-EBI)',
    'gov.uk': 'UK Government / UK Health Security Agency',
    'darpa.mil': 'Defense Advanced Research Projects Agency (DARPA), U.S. Department of Defense',
    'health.mil': 'U.S. Department of Defense, Defense Health Agency',
    'army.mil': 'U.S. Army / Department of Defense'
  };
  
  for (const [domain, op] of Object.entries(operators)) {
    if (url.includes(domain)) return op;
  }
  
  // Name-based inference
  if (name.includes('NATO')) return 'North Atlantic Treaty Organization (NATO)';
  if (name.includes('DTRA')) return 'Defense Threat Reduction Agency (DTRA), U.S. Department of Defense';
  if (name.includes('Russia') || name.includes('VECTOR')) return 'Russian Federation Government';
  if (name.includes('China') || name.includes('AMMS')) return 'People\'s Republic of China Government';
  if (name.includes('Israel') || name.includes('IIBR')) return 'Israel Ministry of Defense / Government of Israel';
  if (name.includes('Australia') || name.includes('DSTG')) return 'Australian Government, Department of Defence';
  if (name.includes('Canada') || name.includes('DRDC')) return 'Government of Canada, Department of National Defence';
  if (name.includes('Japan') || name.includes('NIID')) return 'Government of Japan, Ministry of Health, Labour and Welfare';
  if (name.includes('Germany') || name.includes('Bundeswehr')) return 'German Federal Government / Bundeswehr';
  if (name.includes('France') || name.includes('DGA')) return 'French Ministry of Armed Forces / Direction Generale de l\'Armement (DGA)';
  if (name.includes('Korea') || name.includes('KIDA')) return 'Republic of Korea Government / Korea Institute for Defense Analyses';
  if (name.includes('UK') || name.includes('Dstl')) return 'UK Ministry of Defence / Defence Science and Technology Laboratory (Dstl)';
  if (name.includes('Africa CDC')) return 'Africa Centres for Disease Control and Prevention, African Union';
  if (name.includes('CEPI') || name.includes('PPX')) return 'Coalition for Epidemic Preparedness Innovations (CEPI)';
  
  return 'Organization/institution operating ' + name + ' (see platform website for details)';
}

function inferAccess(name, cat, strengths, weaknesses, url) {
  if (strengths.some(s => s.toLowerCase().includes('open-source') || s.toLowerCase().includes('free'))) {
    return 'Free, open-source. Publicly accessible.';
  }
  if (strengths.some(s => s.toLowerCase().includes('open data') || s.toLowerCase().includes('public access'))) {
    return 'Free public access with open data policy.';
  }
  if (cat.includes('Commercial') || weaknesses.some(w => w.toLowerCase().includes('commercial') || w.toLowerCase().includes('expensive') || w.toLowerCase().includes('subscription'))) {
    return 'Commercial product/subscription. Contact vendor for pricing.';
  }
  if (cat.includes('Defense') || cat.includes('Military') || cat.includes('Intelligence')) {
    return 'Restricted access - government/military authorization required.';
  }
  if (url.includes('.gov') || url.includes('.mil')) {
    return 'Government platform. Access varies by authorization level and jurisdiction.';
  }
  return 'Access details available on platform website. Registration may be required.';
}

function inferScale(name, cat, strengths, score) {
  if (strengths.some(s => /\d+\+?\s*(country|countries|nation)/i.test(s))) {
    const match = strengths.find(s => /\d+\+?\s*(country|countries|nation)/i.test(s));
    return match + '. Widely deployed internationally.';
  }
  if (score >= 85) return 'Major platform with significant global adoption in the biosurveillance community.';
  if (score >= 75) return 'Established platform with substantial user base in its domain.';
  if (score >= 65) return 'Active platform serving its target community.';
  return 'Specialized platform serving a focused user community.';
}

function inferDataModel(name, cat, desc) {
  const parts = [];
  if (cat.includes('Genomic') || cat.includes('Sequence') || cat.includes('Phylogenetic')) {
    parts.push('Genomic sequence data (FASTA/FASTQ) with associated metadata (collection date, location, host organism)');
  }
  if (cat.includes('Surveillance') || cat.includes('Epidemiolog')) {
    parts.push('Epidemiological data including case counts, demographics, temporal and geographic attributes');
  }
  if (cat.includes('Laboratory') || cat.includes('Diagnostic')) {
    parts.push('Laboratory test results, specimen tracking data, quality control metrics');
  }
  if (cat.includes('Defense') || cat.includes('Military') || cat.includes('CBRN')) {
    parts.push('Classified and unclassified threat assessment data, detection results, operational reports');
  }
  if (cat.includes('Policy') || cat.includes('Assessment') || cat.includes('Index')) {
    parts.push('Structured assessment scores, indicator frameworks, country-level evaluations');
  }
  if (cat.includes('Hardware') || cat.includes('Sensor') || cat.includes('Detection')) {
    parts.push('Sensor readings, detection events, environmental monitoring data');
  }
  if (cat.includes('AI') || cat.includes('Forecast')) {
    parts.push('Predictive models, training datasets, analytical outputs');
  }
  if (desc && desc.includes('AMR')) {
    parts.push('Antimicrobial resistance profiles, susceptibility test results');
  }
  if (parts.length === 0) parts.push('Domain-specific data model supporting ' + (cat || 'platform') + ' operations');
  return parts.join('. ') + '.';
}

function buildFunctionalScope(name, cat, desc, strengths) {
  const parts = [desc || cat];
  if (strengths.length > 0) {
    parts.push('Key capabilities: ' + strengths.join(', '));
  }
  return parts.join('. ') + '.';
}

// ============================================================
// GENERATE ALL PROFILES
// ============================================================

const enriched = all.map(p => {
  const profile = generateProfile(p);
  return {
    ...p,
    profile: profile
  };
});

// Write enriched data
const output = {
  meta: {
    generated: new Date().toISOString(),
    total: enriched.length,
    manually_profiled: Object.keys(profiles).length,
    auto_profiled: enriched.length - Object.keys(profiles).length
  },
  layers: optB.layers,
  all: enriched
};

fs.writeFileSync('./optB_enriched.json', JSON.stringify(output, null, 2));

console.log(`Generated ${enriched.length} enriched profiles`);
console.log(`  Manually researched: ${Object.keys(profiles).length}`);
console.log(`  Auto-generated: ${enriched.length - Object.keys(profiles).length}`);

// Verify
const manual = enriched.filter(p => profiles[p.n]);
console.log('\nManually profiled platforms:');
manual.forEach(p => console.log(`  ${p.r}. ${p.n} (${p.s}) - ${p.profile.overview.substring(0, 80)}...`));

// Stats
const avgOverviewLen = enriched.reduce((s, p) => s + p.profile.overview.length, 0) / enriched.length;
const avgFuncLen = enriched.reduce((s, p) => s + p.profile.functional_scope.length, 0) / enriched.length;
console.log(`\nAvg overview length: ${Math.round(avgOverviewLen)} chars`);
console.log(`Avg functional_scope length: ${Math.round(avgFuncLen)} chars`);
