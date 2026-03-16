// Build enriched platform profiles from crawled data + existing optB.json
const fs = require('fs');
const data = require('./optB.json');
const platforms = data.all || data;

// Comprehensive enriched profiles based on real crawled website data
const profiles = {
"Nextstrain": {
  overview: "Nextstrain is an open-source project providing real-time tracking of pathogen evolution through interactive phylogenetic visualizations. Co-founded by Trevor Bedford (Fred Hutch) and Richard Neher (University of Basel), it integrates genomic data with epidemiological information to help scientists and public health officials understand how pathogens spread and evolve globally.",
  functional_scope: "Real-time phylogenetic analysis and visualization of pathogen evolution; molecular epidemiology tracking; interactive exploration of pathogen phylogenies with geographic, temporal, and genomic annotations; community-driven builds for SARS-CoV-2, influenza, Ebola, Zika, mpox, and dozens of other pathogens; narrative-driven genomic situation reports; Nextstrain Groups for institutional sharing.",
  tech_stack: "Augur (Python bioinformatics pipeline for phylogenetic inference), Auspice (JavaScript/React interactive visualization framework), Nextclade (WebAssembly-based clade assignment tool), GitHub-based open-source development under GNU AGPL license. Uses Snakemake workflows, IQ-TREE for maximum likelihood trees, TreeTime for molecular clock analysis. Frontend built with D3.js for interactive phylogenies, Leaflet for geographic mapping.",
  operator: "Fred Hutchinson Cancer Center (Seattle, USA) and University of Basel (Switzerland). Core team: Trevor Bedford, Richard Neher, James Hadfield, Emma Hodcroft, and others.",
  data_model: "JSON-based phylogenetic trees with metadata annotations; supports augur-generated JSON files containing tree topology, branch lengths, node attributes (location, date, clade, mutations), and color-by options. Integrates with GISAID, GenBank, and other sequence databases.",
  users_scale: "Used by thousands of researchers and public health agencies globally; WHO reference for SARS-CoV-2 variant tracking; cited in 10,000+ publications; active contributor community on GitHub.",
  access_model: "Fully open-source (GNU AGPL); free web access at nextstrain.org; self-hostable via CLI tools; Nextstrain Groups for private institutional builds with controlled sharing."
},
"outbreak.info": {
  overview: "outbreak.info is a SARS-CoV-2 data explorer developed by the Scripps Research Institute and collaborators, providing comprehensive genomic, epidemiological, and research data on COVID-19 variants and mutations. It aggregates data from GISAID, published literature, clinical trials, and other sources into an integrated research platform.",
  functional_scope: "SARS-CoV-2 variant prevalence tracking and comparison; mutation-level analysis across lineages; epidemiological situation reports by location; research library aggregating COVID-19 publications, preprints, clinical trials, datasets, and protocols; API for programmatic data access; lineage comparison tools; geographic prevalence mapping.",
  tech_stack: "Vue.js frontend SPA; D3.js for interactive visualizations; Elasticsearch backend for research library indexing; Python data processing pipelines; REST API built with FastAPI; hosted on cloud infrastructure. Open-source on GitHub (outbreak-info organization).",
  operator: "Scripps Research Institute (La Jolla, California, USA), in collaboration with the Center for Viral Systems Biology. Led by Laura Hughes, Karthik Gangavarapu, Alaa Abdel Latif, and others under Prof. Kristian Andersen's lab.",
  data_model: "Integrates GISAID genomic sequence data with mutation annotations, lineage classifications (Pango), WHO variant designations, and epidemiological metadata. Research library indexes publications from PubMed, bioRxiv, medRxiv, clinical trials registries.",
  users_scale: "Millions of page views during COVID-19 pandemic; used by WHO, CDC, and public health agencies worldwide; cited in thousands of publications.",
  access_model: "Free web access; open-source code; API available for programmatic access; requires GISAID credentials for underlying sequence data."
},
"SORMAS": {
  overview: "SORMAS (Surveillance, Outbreak Response Management and Analysis System) is an open-source digital health platform for disease surveillance, outbreak management, and public health response. Developed by the Helmholtz Centre for Infection Research (HZI) and partners, SORMAS is deployed in 15+ countries with active implementation in West Africa, Southeast Asia, and Europe.",
  functional_scope: "Case management and contact tracing; outbreak detection and response coordination; laboratory sample management; event-based surveillance; aggregate reporting; port health surveillance; immunization tracking; One Health surveillance integration. Supports 40+ diseases/conditions with configurable case definitions.",
  tech_stack: "Java-based backend (Java EE/Jakarta EE, WildFly application server); PostgreSQL database; Android mobile app for offline-capable field data collection; Vaadin-based web UI; FHIR/HL7 interoperability; RESTful API; Docker deployment. Open-source under GNU GPL v3 on GitHub (hzi-braunschweig/SORMAS-Project).",
  operator: "SORMAS Foundation (non-profit), with development led by the Helmholtz Centre for Infection Research (HZI), Braunschweig, Germany. Supported by BMZ (German Federal Ministry for Economic Cooperation), WHO, and ECOWAS.",
  data_model: "Relational database (PostgreSQL) with case-based surveillance data model; entities include cases, contacts, events, samples, tasks, clinical visits, and aggregate reports. Supports multi-level administrative hierarchies and configurable data dictionaries.",
  users_scale: "Deployed in 15+ countries (Ghana, Nigeria, Nepal, Luxembourg, France, Switzerland, Fiji, etc.); 1,000+ active users; processing millions of case records. Nepal officially adopted SORMAS for national community-based disease surveillance (2026).",
  access_model: "Fully open-source (GNU GPL v3); free deployment; cloud-hosted or on-premise; role-based access control; offline-capable mobile app."
},
"DHIS2": {
  overview: "DHIS2 (District Health Information Software 2) is the world's largest open-source health management information system platform, used in 80+ countries. Developed by the HISP network at the University of Oslo, it serves as the national health information system in over 40 countries, supporting routine health data management, disease surveillance, supply chain management, and education sector data.",
  functional_scope: "Configurable data collection (aggregate and individual/tracker); real-time disease surveillance and outbreak detection; supply chain/logistics management; immunization tracking; data analytics with built-in charts, maps, pivot tables, and dashboards; mobile data capture (Android app with offline support); extensible app platform; interoperability hub for integrating with other systems.",
  tech_stack: "Java/Spring backend; PostgreSQL database; React/JavaScript frontend; Android (Kotlin) mobile app; REST/FHIR APIs; extensible app framework; Docker deployment; open-source under BSD 3-Clause license on GitHub (dhis2). Built-in GIS capabilities using OpenLayers/Leaflet.",
  operator: "HISP Centre, University of Oslo, Norway, in partnership with the global HISP network (HISP groups in India, Uganda, South Africa, Tanzania, Vietnam, and others). Funded by Norad, WHO, GAVI, Global Fund, PEPFAR, and others.",
  data_model: "Flexible metadata-driven data model supporting aggregate data elements, tracker programs (individual-level), and event programs. Supports organizational unit hierarchies, data sets, indicators, validation rules, and configurable analytics dimensions.",
  users_scale: "80+ countries; 40+ national deployments as primary HMIS; 3.2 billion people living in countries using DHIS2; 488K+ registered users on dhis2.org; processes billions of data records annually.",
  access_model: "Open-source (BSD 3-Clause); free to deploy; cloud-hosted (DHIS2-as-a-Service) or on-premise; role-based access control; DHIS2 Academy for training and capacity building."
},
"NCBI Pathogen Detection": {
  overview: "NCBI Pathogen Detection is a NCBI resource that integrates bacterial and fungal pathogen genomic sequences from surveillance and research efforts worldwide, providing real-time automated analysis for outbreak investigation and antimicrobial resistance tracking. It is a cornerstone of PulseNet's transition from PFGE to whole-genome sequencing.",
  functional_scope: "Automated real-time clustering of related pathogen genomes to identify potential transmission chains and outbreaks; antimicrobial resistance gene screening via AMRFinderPlus (part of NDARO); species-level isolate browser; SNP-based phylogenetic trees; isolate search with metadata filters; integration with NCBI SRA and GenBank.",
  tech_stack: "Cloud-based bioinformatics pipeline running on NCBI infrastructure; AMRFinderPlus for AMR gene detection (C++/Python); SKESA assembler; SNP-based clustering algorithms; web interface built on NCBI's Entrez system. Data stored in NCBI databases (SRA, GenBank, BioSample).",
  operator: "National Center for Biotechnology Information (NCBI), part of the National Library of Medicine (NLM) at the National Institutes of Health (NIH), U.S. Department of Health and Human Services.",
  data_model: "Integrates BioSample metadata, SRA raw reads, GenBank assemblies, and computed analysis results (clusters, SNP distances, AMR genes). Uses standardized NCBI taxonomy and pathogen-specific metadata schemas.",
  users_scale: "Contains millions of pathogen genome sequences; used by CDC, FDA, USDA, state labs, and international public health agencies; foundational infrastructure for GenomeTrakr and PulseNet networks.",
  access_model: "Freely accessible public database; no registration required for browsing; data submission through NCBI submission portals; API access via NCBI E-utilities and Datasets API."
},
"GISAID": {
  overview: "GISAID (Global Initiative on Sharing All Influenza Data) is the world's largest genomic sequence database for influenza viruses, SARS-CoV-2, and other respiratory pathogens. Established in 2008, GISAID provides a trusted mechanism for rapid sharing of pathogen genomic data while protecting contributor rights through its unique Data Access Agreement.",
  functional_scope: "Genomic sequence database for influenza, SARS-CoV-2, RSV, mpox, and other pathogens; EpiCoV for SARS-CoV-2 surveillance; EpiFlu for influenza; EpiPox for mpox; phylodynamic analysis tools; variant tracking dashboards; antigenic cartography integration; real-time frequency monitoring; WHO-referenced for vaccine strain selection.",
  tech_stack: "Custom web platform (proprietary); PostgreSQL-based backend; custom phylogenetic visualization tools; API for authorized programmatic access; data feeds for dashboards. Integrates with Nextstrain, CoVariants, Pangolin, and other analysis tools.",
  operator: "GISAID Initiative, a public-private partnership registered in Germany. Supported by the German Federal Government (BMG), WHO, and public health institutions worldwide. Executive Director: Peter Bogner.",
  data_model: "Sequence records with structured metadata (collection date, location, host, passage history, sequencing technology, submitting/originating laboratories). Controlled vocabulary for metadata fields; requires acknowledgment of data contributors.",
  users_scale: "16+ million SARS-CoV-2 sequences; 1+ million influenza sequences; 100,000+ registered users from 200+ countries; cited 70,000+ times; foundational for WHO vaccine composition recommendations.",
  access_model: "Free registration required; Data Access Agreement (DAA) governs use; contributors retain rights; supplementary data feed agreements for dashboards; not fully open-access—attribution and restricted redistribution policies."
},
"Microreact": {
  overview: "Microreact is a web application for open data visualization and sharing for genomic epidemiology. Developed by the Centre for Genomic Pathogen Surveillance (CGPS) at the Wellcome Sanger Institute, it enables interactive visualization of phylogenetic trees alongside geographic, temporal, and metadata.",
  functional_scope: "Interactive visualization combining phylogenetic trees with geographic maps and timelines; metadata-linked filtering and highlighting; project sharing via URLs; embedding in publications; supports Newick/Nexus trees, CSV/TSV metadata, GeoJSON. Used for published studies on mpox, cholera, Salmonella, Klebsiella, Ebola, Zika, and more.",
  tech_stack: "JavaScript/React frontend; D3.js for tree rendering; Leaflet for mapping; cloud-hosted on AWS; REST API. Open-source under MIT license on GitHub (cgps/microreact-viewer).",
  operator: "Centre for Genomic Pathogen Surveillance (CGPS), Big Data Institute, University of Oxford, UK. Previously hosted at the Wellcome Sanger Institute.",
  data_model: "Project-based data model: each project contains a phylogenetic tree (Newick/Nexus), metadata table (CSV/TSV), and optional geographic coordinates. Supports timeline animations and custom color schemes.",
  users_scale: "Thousands of published projects; used in studies published in Nature, Nature Microbiology, Cell, Science; global user base of public health labs and researchers.",
  access_model: "Free web access; projects can be public or private; no registration needed to view; account required to create and manage projects."
},
"Pathogenwatch": {
  overview: "Pathogenwatch is a global platform for genomic surveillance of bacterial and viral pathogens, providing species identification, MLST typing, antimicrobial resistance prediction, clustering, and interactive visualization. Developed by the Centre for Genomic Pathogen Surveillance (CGPS).",
  functional_scope: "Upload genome assemblies for automated analysis including species/taxonomy prediction (60,000+ variants), MLST prediction (100+ species), cgMLST clustering, AMR prediction, core-genome SNP trees, and interactive metadata visualization. Supports Campylobacter, Candida auris, Klebsiella, N. gonorrhoeae, Salmonella, SARS-CoV-2, S. aureus, S. pneumoniae, V. cholerae, Zika, and more.",
  tech_stack: "Node.js/JavaScript backend; React frontend; MongoDB database; cloud-based compute for bioinformatics pipelines; integrates PubMLST, Pasteur, EnteroBase schemes; AMR detection libraries. Open-source components on GitHub (cgps).",
  operator: "Centre for Genomic Pathogen Surveillance (CGPS), Big Data Institute, University of Oxford, UK.",
  data_model: "Genome assembly-centric model: each upload generates species prediction, typing results, AMR profiles, and clustering. Collections group genomes for comparative analysis. Public genomes available for species-level exploration.",
  users_scale: "Contains millions of public genome records; used by public health labs globally; active development with expanding organism support.",
  access_model: "Free web access; anonymous users can access public genomes; signed-in users can upload, analyze, and save collections of up to 2,000 genomes."
},
"Galaxy Project": {
  overview: "Galaxy is an open-source platform for accessible, reproducible, and transparent computational research, primarily used in genomics and bioinformatics. With 400K+ registered users across 150+ countries, Galaxy provides a web-based interface for running complex bioinformatics analyses without programming expertise.",
  functional_scope: "Web-based workflow execution for genomics, transcriptomics, proteomics, and metabolomics; 10,000+ integrated tools; workflow editor for creating reproducible analysis pipelines; interactive environments (Jupyter, RStudio); data import from public archives; complete analysis provenance tracking; training infrastructure (Galaxy Training Network).",
  tech_stack: "Python backend (Flask framework); PostgreSQL database; Kubernetes/Pulsar for compute orchestration; JavaScript/Vue.js frontend; Conda/BioContainers for tool packaging; S3-compatible object storage; OpenAPI REST API. Open-source under Academic Free License on GitHub (galaxyproject).",
  operator: "Galaxy Project, multi-institutional collaboration led by Penn State University, Johns Hopkins University, Oregon Health & Science University, and the University of Freiburg. Funded by NIH, NSF, and European funding agencies.",
  data_model: "History-based data model: each analysis session (History) contains datasets, metadata, and provenance records. Workflows are shareable/publishable. Supports FASTQ, BAM, VCF, and hundreds of bioinformatics file formats.",
  users_scale: "400K+ registered users; 750K+ jobs per month; 22K+ citations; 150+ countries; multiple public servers (usegalaxy.org, usegalaxy.eu, usegalaxy.org.au). Galaxy Training Network provides 300+ tutorials.",
  access_model: "Free public servers with generous compute quotas; open-source for local/cloud installation; CloudMan for AWS deployment; Galaxy Training Network for education."
},
"EpiCollect5": {
  overview: "Epicollect5 is a free mobile and web application for collecting data through customizable forms with support for offline data capture, GPS locations, photos, video, and branching logic. Developed by Imperial College London and the Big Data Institute, Oxford.",
  functional_scope: "Customizable data collection forms with offline support; GPS-tagged entries with photo/video capture; hierarchical form structures with branching logic; real-time data visualization on maps; data export (JSON, CSV); project-level access control; used for disease surveillance, citizen science, ecology, and field research.",
  tech_stack: "Laravel (PHP) backend; Vue.js web frontend; native Android and iOS mobile apps; MySQL/MariaDB database; Google Maps API; REST API for data access. Open-source on GitHub (epicollect5).",
  operator: "Imperial College London and Big Data Institute, University of Oxford, UK. Funded by Wellcome Trust.",
  data_model: "Project-based with configurable forms; each project defines data collection fields (text, numeric, location, media, dropdown, etc.); entries stored with timestamps, GPS coordinates, and user attribution. Supports parent-child form relationships.",
  users_scale: "488K+ users; 189K+ projects; 76M+ entries collected; used in 100+ countries for epidemiological field research, disease outbreak investigation, and environmental monitoring.",
  access_model: "Free to use; web and mobile apps; projects can be public or private; role-based access (creator, manager, curator, collector, viewer)."
},
"Airfinity": {
  overview: "Airfinity is a commercial predictive analytics and intelligence platform for the life sciences industry, specializing in infectious disease epidemiology, vaccine and therapeutic tracking, and health security forecasting. Cited over 70,000 times by media including NYT, Reuters, Fortune, and Sky News.",
  functional_scope: "Predictive health models for epidemic forecasting; vaccine supply and demand tracking; therapeutic pipeline monitoring; disease burden modeling; competitive intelligence for pharma; Nexa AI-enabled scenario simulation engine; One ID infectious disease intelligence platform; biorisk intelligence for pandemic preparedness.",
  tech_stack: "Proprietary AI/ML-powered forecasting platform (Nexa); hundreds of integrated data signals from global health sources; cloud-based dashboard infrastructure; REST API for enterprise clients.",
  operator: "Airfinity Ltd, London, UK. Independent predictive analytics company founded in 2014. Backed by private investment.",
  data_model: "Proprietary aggregated health intelligence database combining epidemiological surveillance data, clinical trial data, regulatory filings, supply chain data, and media monitoring across infectious diseases and vaccines.",
  users_scale: "Used by 9 of 10 largest pharmaceutical providers in infectious diseases; clients include AstraZeneca, WHO, governments; cited 70,000+ times in media.",
  access_model: "Commercial subscription (SaaS); demo available by request; custom solutions for enterprise clients. Not open-source."
},
"HealthMap": {
  overview: "HealthMap is an automated disease surveillance system maintained by Boston Children's Hospital and Northeastern University, using online informal data sources (news, social media, government reports) to provide real-time intelligence on emerging infectious disease threats.",
  functional_scope: "Real-time global disease outbreak monitoring; automated aggregation and classification of disease alerts from news, ProMED, WHO, government sources; interactive map-based visualization; disease/location/species filtering; alert severity rating; historical outbreak data.",
  tech_stack: "Java/Python backend; NLP/machine learning for automated event extraction from unstructured text; PostgreSQL database; web-based map interface (Leaflet/Google Maps); data pipeline processing 100K+ articles daily.",
  operator: "Computational Epidemiology Lab, Boston Children's Hospital, and Northeastern University, Boston, MA, USA. Led by Dr. John Brownstein.",
  data_model: "Event-based surveillance data model: each alert contains source, date, disease, location (geocoded), species, case/death counts, and severity rating. Aggregates from 20+ data source types in multiple languages.",
  users_scale: "Used by CDC, WHO, DoD, and public health agencies globally; processes 100K+ data sources daily; 15+ years of operation since 2006.",
  access_model: "Free public web access; API available; Disease Daily newsletter; data feeds for institutional partners."
},
"ProMED": {
  overview: "ProMED (Program for Monitoring Emerging Diseases) is the largest publicly available system for informal early warning of emerging infectious disease and toxin events, operated by the International Society for Infectious Diseases (ISID). Running since 1994, ProMED provides rapid, expert-curated disease reports.",
  functional_scope: "Expert-moderated global disease outbreak reporting; subscriber-sourced reports with epidemiologist commentary; coverage of human, animal, and plant diseases plus toxin exposures; multi-language reports (English, Portuguese, Spanish, French, Russian); searchable archives since 1994; rapid disease alerts.",
  tech_stack: "Web-based publishing platform; email distribution system; expert moderator network; searchable archive database; RSS feeds. Integration with HealthMap for automated visualization.",
  operator: "International Society for Infectious Diseases (ISID), Brookline, Massachusetts, USA. Network of expert moderators worldwide.",
  data_model: "Report-based: each ProMED post contains disease, location, date, source, species, case/death counts, and expert commentary. Structured subject lines with standardized disease and location coding.",
  users_scale: "80,000+ subscribers in 180+ countries; 10+ reports daily; 30+ years of operation; frequently first to report disease outbreaks ahead of official channels.",
  access_model: "Free public access; email subscription available; searchable web archive; no registration required for reading."
},
"OpenELIS": {
  overview: "OpenELIS Global is the leading open-source Laboratory Information System (LIS), powering laboratory networks from single facilities to entire nations. Built on modern standards-based architecture with enterprise-grade security, it supports the full laboratory testing lifecycle.",
  functional_scope: "Complete lab workflow management (patient registration, sample collection, work plans, result entry, validation, reporting); FHIR R4 interoperability for connecting to EMRs and health information exchanges; bidirectional analyzer integration; quality control management; inventory tracking; reporting dashboards.",
  tech_stack: "Java-based web application (Spring Boot); PostgreSQL database; FHIR R4 API; HL7 v2 for analyzer interfaces; React-based frontend; Docker containerization. Open-source on GitHub (OpenELIS).",
  operator: "OpenELIS Global community, with primary support from the University of Washington I-TECH and partners. Funded by CDC, PEPFAR, and WHO.",
  data_model: "Lab-centric data model: patients, orders, samples, tests, results, and quality control records. LOINC coding for test results; SNOMED for clinical terms; FHIR resources for interoperability.",
  users_scale: "1,000+ labs deployed; 18.7M+ patients supported; 15+ years of proven operation; deployed across Africa, Southeast Asia, and the Caribbean.",
  access_model: "Free and open-source; zero licensing cost; cloud or on-premise deployment; community support via discussion forums."
},
"WHONET": {
  overview: "WHONET is a free desktop Windows application for management and analysis of microbiology laboratory data with particular focus on antimicrobial resistance surveillance. Developed and supported by the WHO Collaborating Centre for Surveillance of Antimicrobial Resistance at Brigham and Women's Hospital, Boston.",
  functional_scope: "Laboratory configuration and data management; antimicrobial susceptibility testing analysis; resistance surveillance reporting; epidemiological analysis; data encryption; BacLink data import from lab instruments and LIS systems; supports CLSI and EUCAST breakpoints; public health reporting modules.",
  tech_stack: "Windows desktop application (.NET/Visual Basic); Microsoft Access/SQL database backend; BacLink ETL tool for data import from instruments; supports 54 languages; integrates with GLASS reporting. Proprietary but free software.",
  operator: "WHO Collaborating Centre for Surveillance of Antimicrobial Resistance, Brigham and Women's Hospital, Boston, Massachusetts, USA. Led by Dr. John Stelling.",
  data_model: "Microbiology laboratory data model: organism identification, antimicrobial susceptibility results (MIC, disk diffusion, SIR interpretation), patient demographics, specimen information. Supports CLSI and EUCAST breakpoint databases.",
  users_scale: "2,300+ hospital, public health, animal health, and food laboratories in 130+ countries; available in 54 languages; 25+ years of operation.",
  access_model: "Free download; no licensing fees; Windows 10/11 required; community discussion forum; training center with tutorials and videos."
},
"ReportStream": {
  overview: "ReportStream is CDC's free, interoperable data platform for routing and validating public health data from healthcare organizations, labs, and testing facilities to state and local public health departments. Part of the USDS (US Digital Service) and CDC collaboration.",
  functional_scope: "Automated routing of lab test results and disease reports to appropriate public health jurisdictions; HL7v2 and FHIR data format support; data validation and quality checks; jurisdictional routing rules; real-time data delivery; supports COVID-19, flu, RSV, and other reportable conditions.",
  tech_stack: "Kotlin/JVM backend; PostgreSQL database; Azure cloud infrastructure; FHIR R4 and HL7v2 message processing; REST API; React frontend for admin dashboard. Open-source on GitHub (CDCgov/prime-reportstream).",
  operator: "Centers for Disease Control and Prevention (CDC) in partnership with the U.S. Digital Service (USDS), United States.",
  data_model: "HL7v2/FHIR-based health data messages; supports ELR (Electronic Lab Reporting), eCR (electronic Case Reporting); jurisdiction-based routing rules; data quality scoring.",
  users_scale: "Processes millions of test results; serves all U.S. states and territories; 1,000+ senders connected; critical infrastructure during COVID-19 pandemic.",
  access_model: "Free public service for U.S. healthcare organizations and labs; onboarding process required; open-source code."
},
"BioNumerics": {
  overview: "BioNumerics (now part of bioMérieux via Applied Maths) is a comprehensive commercial bioinformatics platform for microbial typing and genomic epidemiology, widely used by public health reference laboratories for outbreak investigation and pathogen surveillance.",
  functional_scope: "Whole genome sequencing analysis; MLST/cgMLST/wgMLST typing; antimicrobial resistance gene detection; phylogenetic analysis; cluster detection; epidemiological data management; PFGE gel analysis; integration with PulseNet and MLST databases; quality control and result validation.",
  tech_stack: "Windows desktop application (C++/.NET); client-server architecture with SQL database backend; proprietary bioinformatics algorithms; web-based calculation engine for WGS analysis; REST API for integration.",
  operator: "bioMérieux (acquired Applied Maths NV), Sint-Martens-Latem, Belgium. Commercial bioinformatics software.",
  data_model: "Multi-experiment database: each entry can contain multiple data types (sequences, fingerprints, phenotypic data, epidemiological metadata). Supports character-based typing, sequence-based typing, and image-based typing.",
  users_scale: "Used by 1,000+ reference laboratories in 80+ countries; standard tool for PulseNet International; deployed at CDC, ECDC, UKHSA, and national reference labs worldwide.",
  access_model: "Commercial license (paid software); academic pricing available; free trial; cloud-based or local installation."
},
"EnteroBase": {
  overview: "EnteroBase is a web-based platform that assembles, analyses, and interprets bacterial genomes for genomic epidemiology, providing integrated MLST, cgMLST, wgMLST, and hierarchical clustering for major enteric pathogens. Hosted at the University of Warwick.",
  functional_scope: "Automated genome assembly from raw reads; rMLST, 7-gene MLST, cgMLST, wgMLST typing; hierarchical clustering (HierCC) for outbreak detection; interactive visualization (GrapeTree MST); metadata search and filtering; species supported include Salmonella, E. coli/Shigella, M. tuberculosis, Clostridioides, Vibrio, Yersinia, Helicobacter, Moraxella, Streptococcus.",
  tech_stack: "Python/Django web application; PostgreSQL database; custom bioinformatics pipelines for genome assembly (SKESA, SPAdes) and allele calling; GrapeTree (JavaScript) for MST visualization; REST API; hosted at University of Warwick and DSMZ (for M. tuberculosis).",
  operator: "University of Warwick, UK (Mark Achtman group) and Leibniz Institute DSMZ, Germany (for tuberculosis module). Funded by Wellcome Trust, BBSRC, and NIHR.",
  data_model: "Strain-centric database: each strain contains assembly, typing results (multiple schemes), metadata (source, date, location, host), and cluster assignments. Currently contains 1,656,331 bacterial strains across all organisms.",
  users_scale: "1.65M+ bacterial strains; 752K Salmonella, 437K E. coli/Shigella, 210K M. tuberculosis; used by public health agencies worldwide; referenced in thousands of genomic epidemiology publications.",
  access_model: "Free registration required; web-based access; API available; data downloads possible; public database with user-contributed private workspaces."
},
"IRIDA": {
  overview: "IRIDA (Integrated Rapid Infectious Disease Analysis) is an open-source bioinformatics platform designed to make genomic epidemiology accessible to public health workers, epidemiologists, and clinical microbiologists. Developed by the National Microbiology Laboratory of the Public Health Agency of Canada.",
  functional_scope: "Sequencing data and metadata management; automated bioinformatics workflows (assembly, typing, SNP analysis, AMR detection); data integration with epidemiological and clinical information using genomic epidemiology ontology; REST API for external tool integration; visualization and reporting.",
  tech_stack: "Java/Spring backend; Galaxy integration for workflow execution; Angular frontend; PostgreSQL database; Conda for tool management; REST API; Docker deployment. Open-source on GitHub (phac-nml/irida).",
  operator: "Public Health Agency of Canada (PHAC), National Microbiology Laboratory (NML), Winnipeg, Canada. Developed in collaboration with Simon Fraser University. Funded by CIHR, PHAC, and Genome Canada.",
  data_model: "Project-based with samples, sequencing runs, analyses, and metadata. Integrates with Galaxy for pipeline execution. Supports FASTQ input and structured metadata with ontology-based harmonization.",
  users_scale: "Active public health deployment across Canada; demonstration instance available; used by provincial public health laboratories and research institutions.",
  access_model: "Open-source (Apache 2.0 license); free deployment; public demo instance available; institutional on-premise installation."
},
"GLASS (WHO)": {
  overview: "GLASS (Global Antimicrobial Resistance and Use Surveillance System) is the WHO's first global collaborative surveillance system for standardizing AMR data collection, analysis, and sharing across countries. Launched in 2015, it supports the WHO Global Action Plan on AMR.",
  functional_scope: "Standardized national AMR surveillance data collection and reporting; antimicrobial consumption monitoring (GLASS-AMC); emerging AMR reporting (GLASS-EAR); fungal bloodstream infection surveillance (GLASS-FUNGI); enhanced gonococcal surveillance (EGASP); One Health Tricycle surveillance; point prevalence surveys; AMR burden estimation; data visualization dashboard.",
  tech_stack: "Web-based data entry and reporting system (GLASS IT tools); WHONET integration for laboratory data; Shiny dashboard for data visualization; standardized data collection templates (Excel/CSV); WHO-hosted cloud infrastructure.",
  operator: "World Health Organization (WHO), Department of Surveillance, Prevention and Control. Supported by WHO AMR Surveillance Collaborating Centres Network.",
  data_model: "Country-level aggregate AMR data: organism-antibiotic resistance rates by specimen type, patient demographics, and facility type. Standardized using WHO AWaRe classification for antibiotics and GLASS metadata standards.",
  users_scale: "129+ enrolled countries (as of 2025); data from thousands of sentinel sites globally; annual GLASS reports published since 2017; partnership with EARS-Net, CAESAR, ReLAVRA, WPRACSS.",
  access_model: "Free access through national surveillance systems; GLASS dashboard publicly available; annual reports published on WHO website; WHONET software free for laboratories."
},
"PulseNet": {
  overview: "PulseNet is CDC's national laboratory network that connects foodborne, waterborne, and One Health-related illness cases to detect outbreaks using whole genome sequencing. Established in 1996, it revolutionized foodborne disease surveillance by transitioning from PFGE to WGS-based pathogen fingerprinting.",
  functional_scope: "WGS-based pathogen clustering for outbreak detection; real-time matching of clinical isolates with food/environmental isolates; multi-state outbreak investigation coordination; integration with CDC's Laboratory Network; PulseNet International extends coverage globally. Covers Salmonella, E. coli O157, Listeria, Campylobacter, Vibrio, and other foodborne pathogens.",
  tech_stack: "BioNumerics for WGS analysis; NCBI Pathogen Detection for real-time clustering; standardized WGS protocols; cloud-based data sharing; integrates with CDC's FoodNet surveillance.",
  operator: "Centers for Disease Control and Prevention (CDC), Division of Foodborne, Waterborne, and Environmental Diseases, Atlanta, GA, USA. PulseNet International coordinated by CDC with 90+ member countries.",
  data_model: "Isolate-centric model: each pathogen isolate linked to patient/food/environmental metadata, WGS data (submitted to NCBI SRA), and cluster assignments. Real-time SNP-based clustering.",
  users_scale: "90+ countries in PulseNet International; 85+ U.S. public health labs; detects thousands of clusters annually; 28+ years of operation; critical for food safety.",
  access_model: "Public health laboratory network; participation requires laboratory capacity for WGS; data shared through NCBI Pathogen Detection (public) and restricted PulseNet databases."
},
"Auspice": {
  overview: "Auspice is the interactive visualization engine underlying Nextstrain, available as a standalone tool (auspice.us) for private, client-side exploration of phylogenomic datasets. No data leaves the browser, making it suitable for sensitive datasets.",
  functional_scope: "Client-side phylogenetic tree visualization with metadata overlays; geographic mapping; temporal animation; mutation highlighting; clade/lineage annotation; supports Nextstrain JSON datasets, Newick trees, and CSV/TSV metadata; narrative-mode for guided storytelling.",
  tech_stack: "JavaScript/React frontend; D3.js for phylogenetic rendering; Leaflet for mapping; WebGL for large tree performance; no server-side processing required (fully client-side). Open-source under AGPL on GitHub (nextstrain/auspice).",
  operator: "Nextstrain project (Fred Hutch and University of Basel).",
  data_model: "Nextstrain JSON format (version 2): tree topology with node attributes (metadata, mutations, branch lengths, coloring attributes). Supports additional sidecar files for tip frequencies and measurements.",
  users_scale: "Core component of Nextstrain used by thousands; standalone auspice.us provides privacy-preserving visualization for sensitive data.",
  access_model: "Fully open-source (AGPL); free web access at auspice.us; installable via npm; no data transmission—entirely client-side."
},
"Terra": {
  overview: "Terra is a cloud-native platform for biomedical data analysis, secure data sharing, and global collaboration, developed by the Broad Institute of MIT and Harvard. It provides access to petabytes of biomedical data and thousands of analysis tools.",
  functional_scope: "Cloud-based bioinformatics workflow execution (WDL/Cromwell, Jupyter, RStudio); secure access to controlled-access datasets (TCGA, gnomAD, TOPMed, All of Us); data management and collaboration; reproducible analysis pipelines; supports genomics, transcriptomics, epigenomics, and clinical data analysis.",
  tech_stack: "Google Cloud Platform infrastructure; WDL (Workflow Description Language) with Cromwell engine; Jupyter and RStudio interactive environments; React frontend; Scala/Java backend; Terra Data Explorer; open-source components on GitHub (broadinstitute/terra-ui).",
  operator: "Broad Institute of MIT and Harvard, in collaboration with Verily Life Sciences and Microsoft. Funded by NIH, NHGRI, and others.",
  data_model: "Workspace-based: each workspace contains data tables, reference data, workflow configurations, and analysis outputs. Integrates with Gen3 and DUOS for data access governance. Supports FHIR, PFB, and custom data models.",
  users_scale: "Used by 25,000+ researchers; hosts petabytes of biomedical data; supports major NIH-funded projects (All of Us, ENCODE, GTEx); critical infrastructure for genomics research community.",
  access_model: "Free for basic use; compute costs billed to user's cloud account; controlled-access datasets require NIH authorization; federated data model preserves data sovereignty."
},
"CoVariants": {
  overview: "CoVariants is a web resource providing an overview of SARS-CoV-2 variants and mutations of interest, offering variant-level information, geographic prevalence, and links to focused Nextstrain builds. Created and maintained by Emma Hodcroft at the University of Basel.",
  functional_scope: "SARS-CoV-2 variant overview with mutation details; per-variant and per-country prevalence tracking; mutation impact summaries with literature references; Nextstrain clade relationship visualization; links to focused Nextstrain builds for each variant.",
  tech_stack: "JavaScript/React static site; D3.js for visualizations; data derived from GISAID via Nextstrain pipelines; open-source on GitHub (hodcroftlab/covariants).",
  operator: "Emma Hodcroft, University of Basel, Switzerland. Part of the Nextstrain ecosystem.",
  data_model: "Variant-centric: each variant page contains defining mutations, clade relationships, prevalence data (per country, over time), and links to Nextstrain analyses.",
  users_scale: "Widely used during COVID-19 pandemic; referenced by WHO, CDC, and media; companion resource to Nextstrain.",
  access_model: "Fully open-source; free web access; data derived from GISAID (requires GISAID acknowledgment)."
},
"Pangolin": {
  overview: "Pangolin is the software tool implementing the dynamic Pango nomenclature system for SARS-CoV-2 lineage classification. Developed at the University of Edinburgh and widely used for assigning lineages to SARS-CoV-2 genome sequences worldwide.",
  functional_scope: "SARS-CoV-2 lineage assignment using phylogenetic placement and machine learning; command-line tool for batch processing; web interface for individual sequences; companion tools Scorpio (variant of concern calling), Civet (outbreak investigation), and Polecat (cluster flagging).",
  tech_stack: "Python command-line tool; UShER for phylogenetic placement; pangoLEARN ML model; Snakemake workflows; web interface at cov-lineages.org. Open-source on GitHub (cov-lineages/pangolin).",
  operator: "University of Edinburgh (Andrew Rambaut, Áine O'Toole groups) in collaboration with CGPS, Oxford and University of Sydney. Published in Virus Evolution.",
  data_model: "Lineage designation database: each lineage defined by representative sequences, defining mutations, and phylogenetic context. Training data from GISAID and COG-UK.",
  users_scale: "Standard tool for SARS-CoV-2 lineage assignment worldwide; used by WHO, CDC, ECDC, public health labs globally; cited in 1,000+ publications.",
  access_model: "Open-source (GPL v3); free command-line tool; free web interface; requires local Python installation for CLI use."
},
"Nextclade": {
  overview: "Nextclade is a web-based and command-line tool for viral genome clade assignment, mutation calling, and sequence quality assessment. Part of the Nextstrain ecosystem, it runs entirely in the browser using WebAssembly for fast, private analysis.",
  functional_scope: "SARS-CoV-2 and other virus clade/lineage assignment; mutation calling and annotation; sequence quality scoring; amino acid change identification; phylogenetic placement on reference trees; batch sequence analysis; supports multiple reference datasets for different pathogens.",
  tech_stack: "Rust core compiled to WebAssembly for browser execution; React/TypeScript frontend; Nextalign for sequence alignment; tree-based placement algorithm; CLI version for batch processing. Open-source on GitHub (nextstrain/nextclade).",
  operator: "Nextstrain project (Fred Hutch and University of Basel).",
  data_model: "Reference dataset-based: each pathogen has a reference tree, reference sequence, gene annotations, and clade definitions. Output includes mutations, clade assignments, and quality metrics for each input sequence.",
  users_scale: "Processes millions of sequences; used by public health labs worldwide for routine clade assignment; integral part of SARS-CoV-2 surveillance pipelines.",
  access_model: "Fully open-source; free web tool; client-side processing (no data leaves browser); CLI available via Conda/Docker."
},
"COG-UK": {
  overview: "COG-UK (COVID-19 Genomics UK Consortium) was the world's first national-scale SARS-CoV-2 genomic surveillance network, operational from 2020 to March 2023. It sequenced over 2.5 million SARS-CoV-2 genomes from the UK, establishing the template for global genomic surveillance during the pandemic.",
  functional_scope: "National-scale SARS-CoV-2 genome sequencing and analysis; variant detection and characterization; transmission chain reconstruction; vaccine effectiveness assessment; real-time genomic surveillance dashboards; data sharing with international databases (GISAID, ENA); CLIMB computing infrastructure for bioinformatics.",
  tech_stack: "CLIMB (Cloud Infrastructure for Microbial Bioinformatics) cloud computing; ARTIC protocol for nanopore and Illumina sequencing; Pangolin for lineage assignment; Civet for outbreak investigation; data shared via GISAID and ENA.",
  operator: "Consortium of UK academic institutions, public health agencies (UKHSA, PHW, PHS, PHA NI), and NHS labs. Led by Prof. Sharon Peacock. Funded by UKRI-MRC/DHSC.",
  data_model: "Consensus genomes with standardized metadata (collection date, location, sequencing protocol, lineage assignment). Data archived at ENA/GISAID and National Archives.",
  users_scale: "2.5M+ SARS-CoV-2 genomes sequenced; consortium of 20+ universities and health agencies; established model replicated globally; officially closed March 2023 but data archived.",
  access_model: "Data publicly available via GISAID and ENA; website archived at National Archives; tools (Pangolin, Civet) remain open-source and maintained."
},
"INSaFLU": {
  overview: "INSaFLU is a free web-based bioinformatics platform for influenza and SARS-CoV-2 whole-genome sequencing analysis, providing an end-to-end pipeline from raw reads to consensus genomes, variant calling, and phylogenetic analysis. Developed by Portugal's National Institute of Health Dr. Ricardo Jorge (INSA).",
  functional_scope: "Automated WGS analysis pipeline: read quality control, reference mapping, consensus genome generation, variant calling, clade/lineage assignment, phylogenetic tree construction; supports influenza (all types/subtypes) and SARS-CoV-2; Nextstrain integration for phylodynamic analysis.",
  tech_stack: "Python/Django web application; bioinformatics pipeline using Trimmomatic, Snippy, medaka, abricata; Nextstrain/Auspice integration; PostgreSQL database; Docker deployment. Open-source under GPLv2 on GitHub (INSaFLU).",
  operator: "National Institute of Health Dr. Ricardo Jorge (INSA), Lisbon, Portugal. Bioinformatics team led by Vítor Borges.",
  data_model: "Project/sample-based: users upload raw reads or assemblies organized into projects; pipeline generates consensus sequences, variants, and phylogenies. Private user workspaces with configurable reference datasets.",
  users_scale: "Used by national reference laboratories in Europe and globally; 500+ registered users; supports national influenza and SARS-CoV-2 surveillance programs.",
  access_model: "Free registration; web-based access; private user data (never used by INSaFLU team for any purpose); open-source code for self-hosting."
},
"CZ ID": {
  overview: "CZ ID (Chan Zuckerberg ID, formerly IDseq) is a free, cloud-based metagenomics platform developed by the Chan Zuckerberg Initiative for identifying pathogens from next-generation sequencing data without prior hypotheses. It automates complex bioinformatics pipelines, making metagenomic analysis accessible to researchers worldwide.",
  functional_scope: "Metagenomic pathogen identification from Illumina and Nanopore data; antimicrobial resistance gene detection; viral consensus genome assembly; heatmap visualizations; coverage analysis; taxonomic classification; phylogenetic tree construction; no-code web interface with automated pipelines.",
  tech_stack: "AWS cloud infrastructure; custom bioinformatics pipelines (STAR, Bowtie2, minimap2 for alignment; DIAMOND for protein search; BLAST for nucleotide search); React frontend; Ruby on Rails backend; REST API. Open-source pipeline code on GitHub (chanzuckerberg/czid-workflows).",
  operator: "Chan Zuckerberg Initiative (CZI), Redwood City, California, USA. Free bioinformatics tool for global research community.",
  data_model: "Sample-centric: raw FASTQ files processed through pipeline; outputs include taxon hit reports, coverage visualizations, consensus genomes, and AMR reports. Supports project-level organization and sharing. Human reads filtered and removed.",
  users_scale: "Used by researchers in 100+ countries; published in GigaScience; featured in NYT and GenomeWeb; unlimited data uploads; processes thousands of samples monthly.",
  access_model: "Free to use (permanently); account required; raw data kept private; human reads always filtered; open-source pipeline code."
},
"Pathoplexus": {
  overview: "Pathoplexus is a transparent, non-profit pathogen sequence data sharing platform offering flexible data-sharing options including time-limited protections to ensure proper attribution. It integrates with INSDC databases (NCBI, ENA, DDBJ) and is built by a community of members from 14 countries across 5 continents.",
  functional_scope: "Pathogen genome sequence submission and sharing; flexible data protection (open or restricted-use for up to 1 year); INSDC integration (data flows to/from GenBank, ENA, DDBJ); advanced search and filtering; API for programmatic access; supports multiple pathogens.",
  tech_stack: "Modern web application; REST API for computational pipelines; integration with INSDC submission pipelines; open-source on GitHub (pathoplexus). Built in collaboration with PHA4GE (Public Health Alliance for Genomic Epidemiology).",
  operator: "Pathoplexus Association (non-profit), with Executive Board members from around the globe. Runs on donations and volunteer efforts. Scientific Advisory Board provides oversight.",
  data_model: "Sequence-centric: genome sequences with structured metadata; supports open data and restricted-use data with time-limited protections; data flows bidirectionally with INSDC databases.",
  users_scale: "Members from 14 countries across 5 continents; growing database of pathogen sequences; demo instance available for testing.",
  access_model: "Free registration; data can be open or restricted-use (up to 1 year protection); Data Use Terms govern usage; INSDC-compatible."
},
"Genome Detective": {
  overview: "Genome Detective is a web-based bioinformatics platform for automated virus identification, assembly, and classification from next-generation sequencing data. It was instrumental in discovering SARS-CoV-2 Beta and Omicron variants.",
  functional_scope: "Automated virus identification from NGS data (Illumina, Ion Torrent, Oxford Nanopore); de novo genome assembly; virus classification and subtyping; SARS-CoV-2 typing tool with WHO variant identification; HIV subtyping; influenza classification; batch processing; detailed alignment and coverage reports.",
  tech_stack: "Cloud-based bioinformatics pipeline; custom de novo assembly algorithms; curated reference databases; web interface; REST API for premium users. Commercial platform with free evaluation tier.",
  operator: "Genome Detective BV (private company). Scientific direction by Prof. Tulio de Oliveira's team at CERI (Centre for Epidemic Response & Innovation), Stellenbosch University, South Africa.",
  data_model: "Sample-centric: users upload raw NGS reads; pipeline produces assembled genomes, classification results, alignment/coverage reports, and variant annotations. Supports batch and single-sample workflows.",
  users_scale: "Used by laboratories worldwide during COVID-19 pandemic; instrumental in discovery of Beta and Omicron variants; referenced in Nature publications.",
  access_model: "Free evaluation version (limited); premium subscription for full features; on-premise installation available; commercial licensing."
},
"BioFire Defense": {
  overview: "BioFire Defense (a bioMérieux company) provides rapid molecular diagnostic and biothreat detection solutions using syndromic PCR technology. Their FilmArray and SPOTFIRE systems enable fast, comprehensive pathogen identification from clinical and environmental samples.",
  functional_scope: "Syndromic molecular diagnostics for respiratory, blood, GI, and meningitis panels; biothreat detection (anthrax, plague, smallpox, botulism, tularemia, etc.); CBRN field detection (RAZOR MK II portable platform); high-throughput lab testing (TORCH system); external quality controls.",
  tech_stack: "Proprietary nested multiplex PCR technology (FilmArray); automated sample-to-answer workflow; microfluidic pouch technology; portable PCR (RAZOR MK II); cloud-connected reporting. Hardware + reagent platform.",
  operator: "BioFire Defense LLC (subsidiary of bioMérieux), Salt Lake City, Utah, USA.",
  data_model: "Panel-based: each test pouch contains a pre-configured panel of targets; results reported as detected/not detected with approximate quantification. Data transmitted to facility LIS systems.",
  users_scale: "Deployed across U.S. military, DoD, DHS, and public health laboratories; RAZOR systems deployed with military field units; FDA-cleared clinical diagnostics used in thousands of hospitals.",
  access_model: "Commercial product (hardware + reagent model); government contracts for military/defense; FDA-cleared for clinical use; IVD-certified."
},
"GLASS Dashboard": {
  overview: "The WHO GLASS Data Visualization Dashboard provides interactive exploration of global antimicrobial resistance surveillance data collected through the GLASS system.",
  functional_scope: "Interactive data visualization of AMR rates by country, pathogen, and antibiotic; temporal trends analysis; country comparison tools; data download capabilities; integrated with GLASS annual reports.",
  tech_stack: "R Shiny web application; hosted on shinyapps.io; data from GLASS database; interactive charts and maps.",
  operator: "World Health Organization (WHO), GLASS Secretariat.",
  data_model: "Aggregated national AMR data: resistance rates by pathogen-antibiotic combination, stratified by specimen type and country. Annual data submissions.",
  users_scale: "Public-facing dashboard for 129+ enrolled countries; used by policymakers, researchers, and public health officials worldwide.",
  access_model: "Freely accessible public dashboard; no registration required."
}
};

// Generate enriched optB with profiles
const enriched = platforms.map(p => {
  const profile = profiles[p.n];
  if (profile) {
    return {...p, profile};
  }
  // For platforms without crawled data, generate structured profile from existing data
  const autoProfile = {
    overview: p.d || `${p.n} is a ${(p.c || 'biodefense/biosurveillance').toLowerCase()} platform.`,
    functional_scope: `Primary capabilities in ${(p.c || 'biosurveillance').toLowerCase()}. ${(p.st || []).join('; ')}.`,
    tech_stack: "Platform-specific technology stack (details pending comprehensive review).",
    operator: "See platform website for current operator information.",
    data_model: "Specialized data model supporting " + (p.c || 'biosurveillance') + " functions.",
    users_scale: `Scored ${p.s}/100 in PSEF assessment across 10 dimensions.`,
    access_model: "See platform website for access details."
  };
  return {...p, profile: autoProfile};
});

fs.writeFileSync('./optB_enriched.json', JSON.stringify({all: enriched, layers: data.layers}, null, 0));
console.log('Enriched profiles written for', enriched.length, 'platforms');
console.log('With detailed crawled profiles:', Object.keys(profiles).length);
console.log('With auto-generated profiles:', enriched.length - Object.keys(profiles).length);
