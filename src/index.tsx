import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// ============== API ROUTES ==============

app.get('/api/platforms', (c) => c.json(getPlatformData()))
app.get('/api/dimensions', (c) => c.json(getDimensionData()))
app.get('/api/threats', (c) => c.json(getSaudiThreats()))
app.get('/api/gaps', (c) => c.json(getGapAnalysis()))
app.get('/api/architecture', (c) => c.json(getArchitecture()))
app.get('/api/roadmap', (c) => c.json(getRoadmap()))
app.get('/api/methodology', (c) => c.json(getMethodology()))

// ============== MAIN PAGE ==============
app.get('/', (c) => c.html(getMainHTML()))

export default app

// ============== DATA FUNCTIONS ==============

function getPlatformData() {
  return {
    platforms: [
      {
        id: 'nextstrain', name: 'Nextstrain', developer: 'Fred Hutch / Basel', type: 'Open-source',
        url: 'https://nextstrain.org', year: 2015, license: 'MIT',
        scores: { analytical: 9, coverage: 7, compatibility: 8, usability: 7, scalability: 8, interoperability: 9, surveillance: 9, governance: 9 },
        strengths: ['Real-time phylogenetics', '21+ viruses', 'Interactive visualization', 'Automated phylodynamics'],
        weaknesses: ['Limited bacteria', 'No AMR detection', 'Requires bioinformatics skills', 'No metagenomics'],
        pathogens: ['SARS-CoV-2', 'Influenza', 'Ebola', 'Zika', 'Dengue', 'Mpox', 'RSV'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'gisaid', name: 'GISAID', developer: 'GISAID Initiative', type: 'Global Repository',
        url: 'https://gisaid.org', year: 2008, license: 'Custom (DAA)',
        scores: { analytical: 7, coverage: 8, compatibility: 7, usability: 8, scalability: 9, interoperability: 7, surveillance: 8, governance: 6 },
        strengths: ['Largest sequence database', 'Global coverage', 'SARS-CoV-2/Influenza focus', 'Rapid data sharing'],
        weaknesses: ['Not fully open access', 'Limited analysis tools', 'No bacteria/fungi', 'Restricted re-sharing'],
        pathogens: ['SARS-CoV-2', 'Influenza', 'RSV', 'Mpox', 'Avian Flu'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'czid', name: 'CZ ID', developer: 'Chan Zuckerberg Initiative', type: 'Cloud Platform',
        url: 'https://czid.org', year: 2018, license: 'MIT',
        scores: { analytical: 9, coverage: 9, compatibility: 9, usability: 9, scalability: 8, interoperability: 7, surveillance: 7, governance: 8 },
        strengths: ['No-code metagenomic detection', 'Broad pathogen coverage', 'AMR identification', 'Long-read support'],
        weaknesses: ['Not real-time surveillance', 'Limited phylogenetics', 'US infrastructure dependent', 'No outbreak alerting'],
        pathogens: ['Viruses', 'Bacteria', 'Fungi', 'Parasites'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'pathogenwatch', name: 'Pathogenwatch', developer: 'CGPS (Wellcome Sanger)', type: 'Web Platform',
        url: 'https://pathogen.watch', year: 2018, license: 'Open Source',
        scores: { analytical: 8, coverage: 8, compatibility: 7, usability: 8, scalability: 7, interoperability: 8, surveillance: 7, governance: 9 },
        strengths: ['60,000+ variants', 'cgMLST clustering', 'AMR gene detection', 'WHO priority pathogen focus'],
        weaknesses: ['Limited viral support', 'No metagenomics', 'Processing speed', 'No real-time alerts'],
        pathogens: ['S. pneumoniae', 'K. pneumoniae', 'S. Typhi', 'N. gonorrhoeae', 'SARS-CoV-2'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'solu', name: 'Solu', developer: 'Solu Genomics', type: 'Cloud Platform',
        url: 'https://solugenomics.com', year: 2022, license: 'Proprietary',
        scores: { analytical: 8, coverage: 6, compatibility: 7, usability: 9, scalability: 8, interoperability: 6, surveillance: 8, governance: 6 },
        strengths: ['Real-time dashboard', 'HIPAA compliant', 'No-code interface', 'Automated pipeline'],
        weaknesses: ['Bacteria/fungi only', 'Freemium model', 'Limited interoperability', 'No virus support'],
        pathogens: ['Bacteria', 'Fungi'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'enterobase', name: 'EnteroBase', developer: 'University of Warwick', type: 'Web Platform',
        url: 'https://enterobase.warwick.ac.uk', year: 2016, license: 'Free',
        scores: { analytical: 9, coverage: 5, compatibility: 7, usability: 7, scalability: 8, interoperability: 7, surveillance: 7, governance: 8 },
        strengths: ['800K+ genomes', 'wgMLST analysis', 'Deep Salmonella/E.coli coverage', 'Hierarchical clustering'],
        weaknesses: ['Limited pathogen scope', 'No viruses/fungi', 'Steep learning curve', 'Slow uploads'],
        pathogens: ['Salmonella', 'E. coli', 'Clostridioides', 'Moraxella'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'phoenix', name: 'PHoeNIx', developer: 'CDC (DHQP)', type: 'Open-source Pipeline',
        url: 'https://github.com/CDCgov/phoenix', year: 2023, license: 'Apache 2.0',
        scores: { analytical: 9, coverage: 6, compatibility: 8, usability: 5, scalability: 7, interoperability: 7, surveillance: 6, governance: 9 },
        strengths: ['CDC-standardized', 'QC + AMR + taxonomy', 'Platform-agnostic', 'Reproducible'],
        weaknesses: ['CLI only', 'Bacteria only', 'No real-time dashboard', 'Requires Nextflow'],
        pathogens: ['Bacteria'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'terra', name: 'Terra.bio', developer: 'Broad Institute / Verily', type: 'Cloud Platform',
        url: 'https://terra.bio', year: 2019, license: 'BSD',
        scores: { analytical: 8, coverage: 8, compatibility: 9, usability: 6, scalability: 9, interoperability: 8, surveillance: 6, governance: 7 },
        strengths: ['Scalable WDL workflows', 'Nextstrain integration', 'Large-scale genomics', 'Google Cloud backend'],
        weaknesses: ['Complex setup', 'Freemium costs', 'Not surveillance-focused', 'Steep learning curve'],
        pathogens: ['Viruses', 'Bacteria', 'Fungi'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'microreact', name: 'Microreact', developer: 'CGPS', type: 'Open-source Web Tool',
        url: 'https://microreact.org', year: 2016, license: 'MIT',
        scores: { analytical: 6, coverage: 7, compatibility: 6, usability: 9, scalability: 6, interoperability: 8, surveillance: 8, governance: 9 },
        strengths: ['Interactive visualization', 'Phylogenetics + maps + timelines', 'Easy sharing', 'No-code'],
        weaknesses: ['No analysis pipeline', 'Visualization only', 'Limited scalability', 'No AMR detection'],
        pathogens: ['Any (visualization)'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      },
      {
        id: 'galaxy', name: 'Galaxy', developer: 'Galaxy Community', type: 'Open-source Platform',
        url: 'https://galaxyproject.org', year: 2005, license: 'AFL',
        scores: { analytical: 8, coverage: 9, compatibility: 9, usability: 7, scalability: 8, interoperability: 8, surveillance: 6, governance: 9 },
        strengths: ['8,000+ tools', 'Comprehensive bioinformatics', 'Large community', 'Workflow sharing'],
        weaknesses: ['Not pathogen-specific', 'No real-time surveillance', 'Resource-intensive', 'Complex for beginners'],
        pathogens: ['Any (general bioinformatics)'],
        oneHealth: false, massGathering: false, wastewater: false, aiPrediction: false
      }
    ]
  }
}

function getDimensionData() {
  return {
    dimensions: [
      { id: 'analytical', name: 'Analytical Performance', icon: 'flask', color: '#ef4444', weight: 15, description: 'Detection sensitivity, species-level classification accuracy, AMR detection F1-score, phylogenetic resolution, variant calling precision/recall', metrics: ['Sensitivity ≥95%', 'Species accuracy ≥99%', 'AMR F1 ≥0.90', 'SNP resolution ≤5bp'] },
      { id: 'coverage', name: 'Pathogen Coverage', icon: 'virus', color: '#f97316', weight: 15, description: 'Virus, bacteria, fungi, parasites, novel/emerging pathogen discovery capability', metrics: ['Virus families', 'Bacterial genera', 'Fungal species', 'Novel detection'] },
      { id: 'compatibility', name: 'Data Compatibility', icon: 'dna', color: '#eab308', weight: 10, description: 'Input formats, sequencing platforms (Illumina/ONT/PacBio), read types, metagenomics support', metrics: ['FASTQ/BAM/VCF', 'Illumina/ONT/PacBio', 'Short/Long reads', 'Amplicon/WGS'] },
      { id: 'usability', name: 'Usability & Access', icon: 'desktop', color: '#22c55e', weight: 10, description: 'No-code GUI, CLI/API availability, documentation quality, onboarding time, multi-language support', metrics: ['GUI available', 'API access', 'Docs quality', 'Setup time <1hr'] },
      { id: 'scalability', name: 'Scalability', icon: 'bolt', color: '#06b6d4', weight: 10, description: 'Samples per hour, batch processing capacity, auto-scaling cloud, storage limits, concurrent users', metrics: ['Throughput/hr', 'Batch size', 'Cloud elasticity', 'Storage'] },
      { id: 'interoperability', name: 'Interoperability', icon: 'link', color: '#3b82f6', weight: 15, description: 'GISAID/NCBI/ENA integration, FHIR/HL7 compliance, REST APIs, cross-platform data exchange', metrics: ['GISAID export', 'NCBI/ENA', 'REST API', 'FHIR support'] },
      { id: 'surveillance', name: 'Surveillance Features', icon: 'bell', color: '#8b5cf6', weight: 15, description: 'Real-time monitoring, automated outbreak cluster detection, phylogeographic mapping, temporal analysis, alerting', metrics: ['Real-time', 'Auto-alerts', 'Geo-mapping', 'Temporal'] },
      { id: 'governance', name: 'Governance', icon: 'building-columns', color: '#ec4899', weight: 10, description: 'Open-source license, data privacy (GDPR/HIPAA), community size, institutional backing, cost transparency', metrics: ['Open source', 'Privacy', 'Community', 'Sustainability'] }
    ]
  }
}

function getSaudiThreats() {
  return {
    threats: [
      { name: 'MERS-CoV', category: 'Zoonotic Virus', risk: 'critical', prevalence: '39% camels positive (2023-24)', icon: 'virus', description: 'Active zoonotic spillover from dromedary camels. 9 human cases in early 2025. Clade B lineage 5 spike evolution ongoing.', sources: ['Clinical', 'Camel', 'Environmental'], genomicNeed: 'Real-time camel-human interface sequencing & spillover prediction' },
      { name: 'AMR Pathogens', category: 'Bacteria', risk: 'critical', prevalence: 'Rising rates nationally', icon: 'bacterium', description: 'High AMR rates amplified during Hajj mass gatherings. 686 S.aureus isolates characterized from 7 Saudi regions (2025).', sources: ['Clinical', 'Wastewater', 'Environmental'], genomicNeed: 'Continuous resistome tracking via wastewater & clinical WGS' },
      { name: 'Meningococcal Disease', category: 'Bacteria', risk: 'high', prevalence: '54% vaccine compliance (Umrah)', icon: 'bacterium', description: '17+ confirmed cases linked to Umrah pilgrimage in 2025 (WHO). Only 54% compliance with MenACWY vaccination.', sources: ['Clinical', 'Pilgrim screening'], genomicNeed: 'Serogroup genomic typing & cross-border transmission tracking' },
      { name: 'Dengue Fever', category: 'Arbovirus', risk: 'high', prevalence: 'Seasonal outbreaks (Western KSA)', icon: 'mosquito', description: 'Vector-borne, increasing with climate change in Jeddah and western regions. Multiple serotypes co-circulating.', sources: ['Clinical', 'Vector surveillance'], genomicNeed: 'Serotype-level WGS and vector genomics integration' },
      { name: 'Leishmaniasis', category: 'Parasite', risk: 'medium', prevalence: '2nd highest in MENA', icon: 'bug', description: 'L. major infection in arid/semi-arid zones. Saudi Arabia ranks 2nd in MENA for cutaneous leishmaniasis.', sources: ['Clinical', 'Environmental'], genomicNeed: 'Parasite genome sequencing & sandfly vector surveillance' },
      { name: 'Brucellosis', category: 'Zoonotic Bacteria', risk: 'medium', prevalence: 'Most common bacterial zoonosis', icon: 'cow', description: 'Most common bacterial zoonosis in KSA. Linked to livestock contact and unpasteurized dairy.', sources: ['Clinical', 'Animal', 'Food'], genomicNeed: 'One Health genomic surveillance across human-animal interface' },
      { name: 'Respiratory Viruses', category: 'Virus Panel', risk: 'high', prevalence: 'Seasonal + Hajj surges', icon: 'lungs', description: 'Influenza, RSV, SARS-CoV-2 surge during mass gatherings. Multi-pathogen co-infection dynamics.', sources: ['Clinical', 'Wastewater'], genomicNeed: 'Multiplexed respiratory pathogen panel with real-time phylogenetics' },
      { name: 'Tuberculosis (MDR-TB)', category: 'Bacteria', risk: 'medium', prevalence: 'Ongoing + MDR concern', icon: 'lungs', description: 'Pulmonary TB with increasing MDR-TB concerns. Multi-drug resistance genomic markers critical for treatment.', sources: ['Clinical', 'Contact tracing'], genomicNeed: 'WGS-based drug resistance profiling & transmission clustering' }
    ],
    massGathering: {
      hajj2026: '11.9M pilgrims',
      countries: '180+',
      umrahMonthly: '2M+ per month',
      wastewaterSites: 'Makkah, Madinah, Jeddah Airport',
      duration: '5-day Hajj + year-round Umrah',
      genomicCoverage: 'Currently <5% of isolates sequenced'
    }
  }
}

function getGapAnalysis() {
  return {
    capabilities: [
      { name: 'Mass Gathering Genomic Intelligence', global: false, bioR: true, category: 'innovation', description: 'Real-time sequencing during Hajj/Umrah from 180+ countries — no existing platform addresses this', impact: 'critical' },
      { name: 'Wastewater Genomic Sentinel Network', global: false, bioR: true, category: 'innovation', description: 'Continuous multi-pathogen metagenomics from wastewater at pilgrimage sites, airports, cities', impact: 'critical' },
      { name: 'One Health Zoonotic Nexus', global: false, bioR: true, category: 'innovation', description: 'Unified human + animal + environmental surveillance dashboard with cross-domain analytics', impact: 'critical' },
      { name: 'AI Outbreak Prediction Engine', global: false, bioR: true, category: 'innovation', description: 'ML models combining genomic mutations, climate data, pilgrim mobility for early warning', impact: 'high' },
      { name: 'Arid Climate Pathogen Observatory', global: false, bioR: true, category: 'innovation', description: 'Desert ecosystem pathogen ecology: dust-borne microbes, desalination plant surveillance', impact: 'high' },
      { name: 'Zoonotic Spillover Monitoring', global: false, bioR: true, category: 'innovation', description: 'Real-time camel-human MERS-CoV interface tracking with phylogenetic spillover detection', impact: 'critical' },
      { name: 'Genomic Foundation Model Integration', global: false, bioR: true, category: 'innovation', description: 'ViraLM/Protein Set Transformer fine-tuned on MENA pathogen sequences for prediction', impact: 'high' },
      { name: 'Dust-borne Pathogen Genomics', global: false, bioR: true, category: 'innovation', description: 'Metagenomic sequencing of microorganisms from transnational dust storms (Shamal winds)', impact: 'medium' },
      { name: 'Clinical Genomic Surveillance', global: true, bioR: true, category: 'existing', description: 'Hospital-based pathogen WGS and AMR detection — available in most top platforms', impact: 'baseline' },
      { name: 'Phylogenetic Visualization', global: true, bioR: true, category: 'existing', description: 'Interactive evolutionary trees and timelines — Nextstrain, Microreact lead here', impact: 'baseline' },
      { name: 'Metagenomic Pathogen Detection', global: true, bioR: true, category: 'existing', description: 'Shotgun/amplicon unbiased pathogen identification — CZ ID, Galaxy excel', impact: 'baseline' },
      { name: 'AMR Gene Detection', global: true, bioR: true, category: 'existing', description: 'Antimicrobial resistance gene identification and tracking — Pathogenwatch, PHoeNIx, Solu', impact: 'baseline' }
    ]
  }
}

function getArchitecture() {
  return {
    pillars: [
      { id: 1, name: 'Mass Gathering Genomic Intelligence', abbr: 'MGGI', icon: 'mosque', color: '#10b981', description: 'Real-time genomic sequencing of respiratory, enteric, and meningococcal pathogens during Hajj/Umrah from 180+ countries. Pilgrim origin-mapping and cross-border transmission tracking.' },
      { id: 2, name: 'One Health Zoonotic Nexus', abbr: 'OHZN', icon: 'paw', color: '#3b82f6', description: 'Unified camel-human-environment MERS-CoV surveillance dashboard. AI-driven spillover prediction models integrating animal, human, and environmental genomic data.' },
      { id: 3, name: 'Wastewater Genomic Sentinel', abbr: 'WGSN', icon: 'water', color: '#06b6d4', description: 'Permanent monitoring stations at Makkah, Madinah, Jeddah Airport, and major cities. Multi-pathogen metagenomics detecting 100+ pathogens and full AMR resistome.' },
      { id: 4, name: 'AI Pathogen Intelligence Engine', abbr: 'APIE', icon: 'brain', color: '#8b5cf6', description: 'Genomic foundation models (ViraLM/PST) fine-tuned on MENA data. Outbreak trajectory prediction, mutation consequence analysis, and AMR emergence forecasting.' },
      { id: 5, name: 'Arid Climate Pathogen Observatory', abbr: 'ACPO', icon: 'sun', color: '#f59e0b', description: 'Desert/arid ecosystem pathogen ecology monitoring. Dust-borne genomics from Shamal wind events, desalination plant microbial surveillance, climate-pathogen correlation models.' },
      { id: 6, name: 'Regional Genomic Diplomacy Hub', abbr: 'RGDH', icon: 'globe-americas', color: '#ec4899', description: 'MENA pathogen genome repository with capacity building programs. WHO IPSN partnership, cross-border early warning system, and training academy for regional scientists.' },
      { id: 7, name: 'Benchmark-as-a-Service', abbr: 'BaaS', icon: 'chart-bar', color: '#ef4444', description: 'Standardized Saudi reference datasets with ground-truth annotations. 8-dimension scoring rubric, global benchmark competitions, and open-challenge datasets.' }
    ],
    dataSources: [
      { name: 'Clinical Genomics', icon: 'hospital', description: 'KFSHRC, MOH hospital WGS labs across 13 regions', color: '#ef4444' },
      { name: 'Wastewater Genomics', icon: 'droplet', description: 'Makkah, Madinah, airports, 20+ cities', color: '#06b6d4' },
      { name: 'Animal Genomics', icon: 'horse', description: 'Camel, livestock, poultry surveillance', color: '#f59e0b' },
      { name: 'Environmental', icon: 'leaf', description: 'Dust, water, soil, air sampling networks', color: '#22c55e' }
    ],
    partners: [
      { name: 'KFSHRC', role: 'Clinical genomics & hospital surveillance', logo: 'hospital' },
      { name: 'KAUST', role: 'Wastewater genomics, AI/ML, environmental', logo: 'flask' },
      { name: 'Saudi MOH', role: 'National surveillance data & policy', logo: 'building-columns' },
      { name: 'Saudi CDC', role: 'Epidemiology & outbreak response', logo: 'shield-virus' },
      { name: 'WHO EMRO', role: 'Regional coordination & IPSN', logo: 'globe' },
      { name: 'Wellcome Sanger', role: 'Pathogenwatch integration & training', logo: 'dna' }
    ]
  }
}

function getRoadmap() {
  return {
    phases: [
      {
        id: 0, name: 'Foundation & Prototype', duration: '3 months',
        status: 'active', color: '#14b8a6',
        milestones: [
          'Benchmark framework publication',
          'Interactive dashboard (this site)',
          'Reference dataset curation',
          'Partner MOUs signed',
          'GitHub repository launch'
        ]
      },
      {
        id: 1, name: 'Core Pipelines & AMR Module', duration: '12 months',
        status: 'planned', color: '#3b82f6',
        milestones: [
          'Clinical WGS pipeline deployment',
          'AMR resistome tracking (wastewater)',
          'Hajj 2027 pilot sequencing',
          'GISAID/NCBI data exchange',
          'Real-time dashboard v2'
        ]
      },
      {
        id: 2, name: 'One Health Expansion', duration: '24 months',
        status: 'planned', color: '#8b5cf6',
        milestones: [
          'Camel MERS-CoV genomic surveillance',
          'Wastewater sentinel network (5 cities)',
          'Environmental metagenomics',
          'Cross-border early warning pilot',
          'Regional training academy launch'
        ]
      },
      {
        id: 3, name: 'AI Intelligence Engine', duration: '36 months',
        status: 'planned', color: '#ec4899',
        milestones: [
          'Genomic foundation model (MENA fine-tuned)',
          'Outbreak trajectory prediction',
          'Mutation consequence analysis',
          'AMR emergence forecasting',
          'Automated alert system'
        ]
      },
      {
        id: 4, name: 'Scale to MENA & NEOM', duration: '60 months',
        status: 'planned', color: '#f59e0b',
        milestones: [
          'MENA genome repository (10 countries)',
          'NEOM biosurveillance integration',
          'WHO IPSN full partnership',
          'BioR-Pathogen v3.0 release',
          'Global benchmark competition #1'
        ]
      }
    ]
  }
}

function getMethodology() {
  return {
    framework: {
      title: 'Multi-Dimensional Evaluation Framework',
      description: 'Each platform is evaluated across 8 standardized dimensions using a 1-10 scoring rubric derived from published literature, platform documentation, and hands-on testing.',
      scoringRubric: [
        { range: '9-10', label: 'Excellent', description: 'Best-in-class, comprehensive capability', color: '#14b8a6' },
        { range: '7-8', label: 'Good', description: 'Strong capability with minor gaps', color: '#3b82f6' },
        { range: '5-6', label: 'Moderate', description: 'Functional but significant limitations', color: '#eab308' },
        { range: '1-4', label: 'Limited', description: 'Minimal or absent capability', color: '#ef4444' }
      ]
    },
    sources: [
      'Platform official documentation and user guides',
      'Published peer-reviewed benchmarking studies',
      'WHO Global Genomic Surveillance Strategy (2024)',
      'ECDC Framework for Genomic Surveillance (2023)',
      'PG-PHASE evaluation framework (PMC 2021)',
      'National Microbial Genomics Framework, Australia (2025-2027)',
      'Hands-on testing with publicly available demo datasets',
      'Community feedback from bioinformatics forums and GitHub issues'
    ],
    references: [
      { title: 'Pathogenwatch: A public health platform for rapid interpretation of pathogen genomics', journal: 'medRxiv 2026', url: 'https://www.medrxiv.org/content/10.64898/2026.03.18.26348693v1' },
      { title: 'Optimizing global genomic surveillance for early detection', journal: 'Nature Comms 2026', url: 'https://www.nature.com/articles/s41467-026-70664-0' },
      { title: 'Wastewater surveillance unveils the impact of mass gatherings on AMR', journal: 'Nature Water 2025', url: 'https://www.nature.com/articles/s44221-025-00446-3' },
      { title: 'Solu: a cloud platform for real-time genomic pathogen surveillance', journal: 'PMC 2024', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11731562/' },
      { title: 'EnteroBase in 2025: exploring the genomic epidemiology of bacterial pathogens', journal: 'NAR 2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11701629/' },
      { title: 'Leveraging Hajj and Umrah for Genomic Multi-Pathogen Surveillance', journal: 'ResearchGate 2025', url: 'https://www.researchgate.net/publication/397414376' }
    ]
  }
}

// ============== MAIN HTML ==============
function getMainHTML() {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BioR-Pathogen | Pathogen Genomic Surveillance Benchmark</title>
    <meta name="description" content="BioR-Pathogen: A Multi-Dimensional Benchmarking Framework for Integrated Pathogen Genomic Surveillance Platforms with One Health and Mass Gathering Intelligence">
    <meta name="keywords" content="pathogen genomics, biosurveillance, benchmark, One Health, MERS-CoV, AMR, Hajj, Saudi Arabia">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <!-- BioR Design System -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mf2022-dev/BioR-ToolKit@main/public/static/bior-design-system.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              bio: { 50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#00A86B',500:'#008F5B',600:'#007850',700:'#006241',800:'#064e3b',900:'#022c22' },
              patho: { 50:'#fdf2f8',100:'#fce7f3',200:'#fbcfe8',300:'#f9a8d4',400:'#f472b6',500:'#ec4899',600:'#db2777',700:'#be185d',800:'#9d174d',900:'#831843' }
            }
          }
        }
      }
    </script>
    <style>
      /* BioR Design System Integration Overrides */
      body{font-family:var(--bior-font);background:var(--bior-bg-page);color:var(--bior-text-primary)}
      .mono{font-family:var(--bior-font-mono)}
      .gradient-text{background:linear-gradient(135deg,var(--bior-primary) 0%,var(--bior-info) 50%,var(--bior-special) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
      .gradient-bg{background:linear-gradient(135deg,#e8f5e9 0%,#f0fdf4 30%,#ecfdf5 60%,#e0f2fe 100%)}
      .glass{background:var(--bior-glass-bg);backdrop-filter:blur(var(--bior-glass-blur));border:1px solid var(--bior-glass-border)}
      .glow{box-shadow:var(--bior-shadow-glow)}
      .glow-hover:hover{box-shadow:var(--bior-shadow-glow-lg);transform:translateY(-2px)}
      .pulse-dot{animation:biorPulse 2s infinite}
      .fade-in{animation:biorFadeUp 0.6s ease-out}
      .score-bar{transition:width 1.2s var(--bior-ease)}
      .tab-btn{transition:all var(--bior-duration-normal) var(--bior-ease);padding:8px 16px;border-radius:var(--bior-radius-md);font-size:13px;font-weight:500;color:var(--bior-text-muted);border:1px solid transparent}
      .tab-btn:hover{color:var(--bior-text-secondary);background:var(--bior-bg-elevated)}
      .tab-btn.active{background:rgba(var(--bior-primary-rgb),0.15);color:var(--bior-primary);border-color:rgba(var(--bior-primary-rgb),0.3);border-bottom:none}
      .nav-link{position:relative}.nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:var(--bior-primary);transition:width var(--bior-duration-normal) var(--bior-ease)}.nav-link:hover::after{width:100%}
      .counter{font-variant-numeric:tabular-nums}
      .timeline-line{position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bior-primary),var(--bior-info),var(--bior-special),#ec4899,var(--bior-warning))}
      @media(max-width:768px){.timeline-line{left:24px}}
      .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:var(--z-modal);display:none;align-items:center;justify-content:center;backdrop-filter:blur(8px)}
      .modal-overlay.show{display:flex}
      .heatmap-cell{transition:all var(--bior-duration-normal) var(--bior-ease);cursor:pointer}
      .heatmap-cell:hover{transform:scale(1.15);z-index:10}
      .feature-check{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--bior-radius-sm);font-size:12px}
      /* BioR accent for primary actions */
      .bior-accent{color:var(--bior-primary)}
      .bior-accent-bg{background:rgba(var(--bior-primary-rgb),0.15)}
      /* Section backgrounds using BioR tokens */
      .section-dark{background:var(--bior-bg-page)}
      .section-elevated{background:rgba(0,168,107,0.03)}
    </style>
</head>
<body class="bior-scroll">

    <!-- NAV -->
    <nav class="fixed top-0 w-full z-30 bior-glass border-b" style="border-color:var(--bior-border-subtle)">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,var(--bior-primary),var(--bior-info));box-shadow:0 4px 16px rgba(var(--bior-primary-rgb),0.3)">
                        <i class="fas fa-dna text-white text-lg"></i>
                    </div>
                    <div>
                        <span class="text-lg font-bold" style="color:var(--bior-text-primary)">BioR<span style="color:var(--bior-primary)">-Pathogen</span></span>
                        <span class="hidden sm:inline text-xs ml-2" style="color:var(--bior-text-faint)">v1.0</span>
                    </div>
                </div>
                <div class="hidden lg:flex items-center gap-5">
                    <a href="#benchmark" class="nav-link text-sm transition" style="color:var(--bior-text-secondary)">Benchmark</a>
                    <a href="#platforms" class="nav-link text-sm transition" style="color:var(--bior-text-secondary)">Platforms</a>
                    <a href="#threats" class="nav-link text-sm transition" style="color:var(--bior-text-secondary)">Threats</a>
                    <a href="#gaps" class="nav-link text-sm transition" style="color:var(--bior-text-secondary)">Gap Analysis</a>
                    <a href="#architecture" class="nav-link text-sm transition" style="color:var(--bior-text-secondary)">Architecture</a>
                    <a href="#roadmap" class="nav-link text-sm transition" style="color:var(--bior-text-secondary)">Roadmap</a>
                    <a href="#methodology" class="nav-link text-sm transition" style="color:var(--bior-text-secondary)">Methodology</a>
                    <a href="https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-" target="_blank" class="bior-btn text-sm flex items-center gap-2">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
                <button onclick="document.getElementById('mobileMenu').classList.toggle('hidden')" class="lg:hidden" style="color:var(--bior-text-secondary)">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
            <div id="mobileMenu" class="hidden lg:hidden pb-4 space-y-2">
                <a href="#benchmark" class="block py-2 text-sm" style="color:var(--bior-text-secondary)">Benchmark</a>
                <a href="#platforms" class="block py-2 text-sm" style="color:var(--bior-text-secondary)">Platforms</a>
                <a href="#threats" class="block py-2 text-sm" style="color:var(--bior-text-secondary)">Threats</a>
                <a href="#gaps" class="block py-2 text-sm" style="color:var(--bior-text-secondary)">Gap Analysis</a>
                <a href="#architecture" class="block py-2 text-sm" style="color:var(--bior-text-secondary)">Architecture</a>
                <a href="#roadmap" class="block py-2 text-sm" style="color:var(--bior-text-secondary)">Roadmap</a>
                <a href="#methodology" class="block py-2 text-sm" style="color:var(--bior-text-secondary)">Methodology</a>
            </div>
        </div>
    </nav>

    <!-- HERO -->
    <section class="gradient-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-10 w-72 h-72 rounded-full filter blur-[120px]" style="background:var(--bior-primary)"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 rounded-full filter blur-[150px]" style="background:var(--bior-info)"></div>
            <div class="absolute top-1/2 left-1/2 w-64 h-64 rounded-full filter blur-[100px]" style="background:var(--bior-special)"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <div class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8" style="background:rgba(var(--bior-primary-rgb),0.1);border:1px solid rgba(var(--bior-primary-rgb),0.3)">
                    <span class="w-2 h-2 rounded-full pulse-dot" style="background:var(--bior-primary)"></span>
                    <span class="text-sm mono" style="color:var(--bior-primary-light)">Phase 0 — Active Development</span>
                </div>
                <h1 class="text-5xl sm:text-7xl font-black mb-6 leading-tight">
                    <span class="gradient-text">BioR-Pathogen</span>
                </h1>
                <p class="text-xl sm:text-2xl mb-2 font-light" style="color:var(--bior-text-secondary)">
                    Biosurveillance Intelligence & One-Health Real-time
                </p>
                <p class="text-lg sm:text-xl mb-4 font-light" style="color:var(--bior-text-muted)">
                    Pathogen Genomics Platform
                </p>
                <p class="text-base mb-10 max-w-3xl mx-auto leading-relaxed" style="color:var(--bior-text-muted)">
                    The world's first multi-dimensional benchmarking framework for integrated pathogen genomic surveillance platforms — designed with mass gathering intelligence and One Health integration from Saudi Arabia.
                </p>
                <div class="flex flex-wrap justify-center gap-4 mb-16">
                    <a href="#benchmark" class="bior-btn px-8 py-3.5 rounded-xl text-base flex items-center gap-2">
                        <i class="fas fa-chart-simple"></i> Explore Benchmark
                    </a>
                    <a href="#architecture" class="bior-btn-sec px-8 py-3.5 rounded-xl text-base font-semibold transition flex items-center gap-2">
                        <i class="fas fa-sitemap"></i> View Architecture
                    </a>
                    <a href="#methodology" class="bior-btn-sec px-8 py-3.5 rounded-xl text-base font-semibold transition flex items-center gap-2">
                        <i class="fas fa-book-open"></i> Methodology
                    </a>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    <div class="bior-kpi accent-green text-center">
                        <div class="text-3xl font-black counter" style="color:var(--bior-primary)" data-target="10">0</div>
                        <div class="text-xs mt-1" style="color:var(--bior-text-muted)">Platforms Evaluated</div>
                    </div>
                    <div class="bior-kpi accent-blue text-center">
                        <div class="text-3xl font-black counter" style="color:var(--bior-info)" data-target="8">0</div>
                        <div class="text-xs mt-1" style="color:var(--bior-text-muted)">Benchmark Dimensions</div>
                    </div>
                    <div class="bior-kpi accent-purple text-center">
                        <div class="text-3xl font-black counter" style="color:var(--bior-special)" data-target="7">0</div>
                        <div class="text-xs mt-1" style="color:var(--bior-text-muted)">Innovation Pillars</div>
                    </div>
                    <div class="bior-kpi accent-amber text-center">
                        <div class="text-3xl font-black counter" style="color:var(--bior-warning)" data-target="40">0</div>
                        <div class="text-xs mt-1" style="color:var(--bior-text-muted)">Evaluation Criteria</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BENCHMARK -->
    <section id="benchmark" class="py-20 section-elevated">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">COMPARATIVE ANALYSIS</span>
                <h2 class="text-4xl font-bold mb-4">Multi-Dimensional Benchmark</h2>
                <p style="color:var(--bior-text-muted)" class="max-w-2xl mx-auto">Comprehensive evaluation of 10 global pathogen genomic surveillance platforms across 8 standardized dimensions</p>
            </div>

            <div id="dimensionCards" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"></div>

            <!-- Tabs -->
            <div class="flex flex-wrap gap-1 mb-8" style="border-bottom:1px solid var(--bior-border-subtle)">
                <button class="tab-btn active px-4 py-3 text-sm font-medium rounded-t-lg" data-tab="radar" onclick="switchTab('radar')">
                    <i class="fas fa-chart-simple mr-1"></i> Radar
                </button>
                <button class="tab-btn px-4 py-3 text-sm font-medium rounded-t-lg" data-tab="heatmap" onclick="switchTab('heatmap')">
                    <i class="fas fa-th mr-1"></i> Heatmap
                </button>
                <button class="tab-btn px-4 py-3 text-sm font-medium rounded-t-lg" data-tab="features" onclick="switchTab('features')">
                    <i class="fas fa-list-check mr-1"></i> Features
                </button>
                <button class="tab-btn px-4 py-3 text-sm font-medium rounded-t-lg" data-tab="rankings" onclick="switchTab('rankings')">
                    <i class="fas fa-ranking-star mr-1"></i> Rankings
                </button>
            </div>

            <!-- Tab: Radar -->
            <div id="tab-radar" class="tab-content">
                <div class="grid lg:grid-cols-5 gap-8">
                    <div class="lg:col-span-3 bior-panel">
                        <h3 class="text-lg font-semibold mb-2 flex items-center gap-2"><i class="fas fa-chart-simple" style="color:var(--bior-primary)"></i> Platform Comparison Radar</h3>
                        <p class="text-xs mb-4" style="color:var(--bior-text-muted)">Select platforms to compare (max 5)</p>
                        <div class="flex flex-wrap gap-2 mb-4" id="platformSelector"></div>
                        <div class="radar-container" style="max-height:420px"><canvas id="radarChart"></canvas></div>
                    </div>
                    <div class="lg:col-span-2 bior-panel">
                        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-ranking-star" style="color:var(--bior-primary)"></i> Overall Rankings</h3>
                        <div id="rankingList" class="space-y-3"></div>
                    </div>
                </div>
            </div>

            <!-- Tab: Heatmap -->
            <div id="tab-heatmap" class="tab-content hidden">
                <div class="bior-panel overflow-x-auto">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-th" style="color:var(--bior-primary)"></i> Score Heatmap Matrix</h3>
                    <p class="text-xs mb-4" style="color:var(--bior-text-muted)">Hover over cells for details. Color intensity = score strength.</p>
                    <div id="heatmapContainer"></div>
                </div>
            </div>

            <!-- Tab: Features -->
            <div id="tab-features" class="tab-content hidden">
                <div class="bior-panel overflow-x-auto">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-list-check" style="color:var(--bior-primary)"></i> Feature Comparison Matrix</h3>
                    <div id="featureTable"></div>
                </div>
            </div>

            <!-- Tab: Rankings -->
            <div id="tab-rankings" class="tab-content hidden">
                <div class="bior-panel">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-ranking-star" style="color:var(--bior-primary)"></i> Weighted Score Ranking</h3>
                    <p class="text-xs mb-4" style="color:var(--bior-text-muted)">Platforms ranked by dimension-weighted composite score</p>
                    <div id="fullRankingList" class="space-y-4"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- PLATFORMS -->
    <section id="platforms" class="py-20 section-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">PLATFORM PROFILES</span>
                <h2 class="text-4xl font-bold mb-4">10 Platforms Evaluated</h2>
                <p style="color:var(--bior-text-muted)">In-depth analysis of each platform's capabilities and limitations</p>
            </div>
            <div id="platformGrid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </div>
    </section>

    <!-- THREATS -->
    <section id="threats" class="py-20 section-elevated">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">THREAT INTELLIGENCE</span>
                <h2 class="text-4xl font-bold mb-4">Saudi Arabia Pathogen Landscape</h2>
                <p style="color:var(--bior-text-muted)" class="max-w-2xl mx-auto">Priority pathogen threats requiring genomic surveillance in the Kingdom of Saudi Arabia</p>
            </div>
            <div class="glass rounded-2xl p-6 mb-8" style="border:1px solid var(--bior-badge-warning-border);background:var(--bior-badge-warning-bg)">
                <div class="flex items-start gap-4">
                    <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(245,158,11,0.15)">
                        <i class="fas fa-mosque text-2xl" style="color:var(--bior-warning)"></i>
                    </div>
                    <div class="flex-1">
                    <h3 class="text-lg font-bold mb-2" style="color:var(--bior-warning)">Mass Gathering Biosurveillance — Hajj & Umrah 2026</h3>
                    <p class="text-sm mb-4" style="color:var(--bior-text-muted)">The largest annual human gathering on Earth. No existing genomic surveillance platform addresses real-time pathogen monitoring during mass gatherings at this scale.</p>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                            <div class="text-center glass rounded-lg p-2"><div class="text-lg font-bold" style="color:var(--bior-warning)">11.9M</div><div class="text-[10px]" style="color:var(--bior-text-muted)">Pilgrims 2026</div></div>
                            <div class="text-center glass rounded-lg p-2"><div class="text-lg font-bold" style="color:var(--bior-warning)">180+</div><div class="text-[10px]" style="color:var(--bior-text-muted)">Countries</div></div>
                            <div class="text-center glass rounded-lg p-2"><div class="text-lg font-bold" style="color:var(--bior-warning)">2M+</div><div class="text-[10px]" style="color:var(--bior-text-muted)">Monthly Umrah</div></div>
                            <div class="text-center glass rounded-lg p-2"><div class="text-lg font-bold" style="color:var(--bior-warning)">5 days</div><div class="text-[10px]" style="color:var(--bior-text-muted)">Hajj Duration</div></div>
                            <div class="text-center glass rounded-lg p-2"><div class="text-lg font-bold" style="color:var(--bior-danger)">&lt;5%</div><div class="text-[10px]" style="color:var(--bior-text-muted)">Isolates Sequenced</div></div>
                            <div class="text-center glass rounded-lg p-2"><div class="text-lg font-bold" style="color:var(--bior-warning)">3</div><div class="text-[10px]" style="color:var(--bior-text-muted)">Sentinel Sites</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="threatGrid" class="grid md:grid-cols-2 gap-6"></div>
        </div>
    </section>

    <!-- GAPS -->
    <section id="gaps" class="py-20 section-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">INNOVATION GAP</span>
                <h2 class="text-4xl font-bold mb-4">What No Platform Solves</h2>
                <p style="color:var(--bior-text-muted)" class="max-w-2xl mx-auto">8 critical capabilities missing from all existing global platforms — uniquely addressed by BioR-Pathogen</p>
            </div>
            <div class="grid lg:grid-cols-2 gap-6 mb-8">
                <div class="bior-panel" style="border-color:var(--bior-badge-danger-border)">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2" style="color:var(--bior-badge-danger-text)"><i class="fas fa-xmark-circle"></i> Missing Globally</h3>
                    <div id="gapMissing" class="space-y-3"></div>
                </div>
                <div class="bior-panel" style="border-color:var(--bior-badge-success-border)">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2" style="color:var(--bior-badge-success-text)"><i class="fas fa-check-circle"></i> Available Globally</h3>
                    <div id="gapExisting" class="space-y-3"></div>
                </div>
            </div>
            <div class="bior-panel border" style="border-color:var(--bior-border-primary)">
                <div class="text-sm mb-2" style="color:var(--bior-primary)">BioR-Pathogen fills ALL gaps</div>
                <div class="text-3xl font-black" style="color:var(--bior-primary)">12/12 capabilities</div>
                <div class="text-xs mt-2" style="color:var(--bior-text-muted)">Including 8 innovations not found in any existing platform</div>
            </div>
        </div>
    </section>

    <!-- ARCHITECTURE -->
    <section id="architecture" class="py-20 section-elevated">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">SYSTEM DESIGN</span>
                <h2 class="text-4xl font-bold mb-4">BioR-Pathogen Architecture</h2>
                <p style="color:var(--bior-text-muted)" class="max-w-2xl mx-auto">7 Innovation Pillars designed to fill every gap in global pathogen genomic surveillance</p>
            </div>
            <div id="pillarGrid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"></div>
            <!-- Data Flow -->
            <div class="bior-panel">
                <h3 class="text-xl font-bold mb-8 text-center" style="color:var(--bior-text-primary)">Integrated Data Architecture</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6" id="dataSourceCards"></div>
                    <div class="flex justify-center my-4"><i class="fas fa-angles-down text-3xl animate-bounce" style="color:var(--bior-primary)"></i></div>
                <div class="bior-panel text-center mb-4" style="border-color:rgba(var(--bior-primary-rgb),0.3);background:rgba(var(--bior-primary-rgb),0.05)">
                    <div class="mono text-sm mb-1 font-bold" style="color:var(--bior-primary)">UNIFIED GENOMIC DATA LAKE</div>
                    <div class="text-xs" style="color:var(--bior-text-muted)">Sequences + Metadata + Geolocation + Temporal + Climate + Mobility Data</div>
                </div>
                <div class="flex justify-center my-4"><i class="fas fa-angles-down text-3xl animate-bounce" style="color:var(--bior-special);animation-delay:.3s"></i></div>
                <div class="bior-panel text-center mb-4" style="border-color:rgba(139,92,246,0.3);background:rgba(139,92,246,0.05)">
                    <div class="mono text-sm mb-1 font-bold" style="color:var(--bior-special)">AI PATHOGEN INTELLIGENCE ENGINE</div>
                    <div class="text-xs" style="color:var(--bior-text-muted)">Genomic Foundation Model | Outbreak Prediction | Mutation Impact | AMR Forecasting</div>
                </div>
                <div class="flex justify-center my-4"><i class="fas fa-angles-down text-3xl animate-bounce" style="color:var(--bior-info);animation-delay:.6s"></i></div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bior-card p-3 text-center" style="border-color:rgba(0,168,107,0.2)"><i class="fas fa-mosque text-lg mb-1" style="color:var(--bior-success)"></i><div class="text-xs mono" style="color:var(--bior-success)">Mass Gathering Monitor</div></div>
                    <div class="bior-card p-3 text-center" style="border-color:rgba(59,130,246,0.2)"><i class="fas fa-paw text-lg mb-1" style="color:var(--bior-info)"></i><div class="text-xs mono" style="color:var(--bior-info)">One Health Nexus</div></div>
                    <div class="bior-card p-3 text-center" style="border-color:rgba(245,158,11,0.2)"><i class="fas fa-shield-virus text-lg mb-1" style="color:var(--bior-warning)"></i><div class="text-xs mono" style="color:var(--bior-warning)">AMR Tracker</div></div>
                    <div class="bior-card p-3 text-center" style="border-color:rgba(236,72,153,0.2)"><i class="fas fa-chart-bar text-lg mb-1" style="color:#ec4899"></i><div class="text-xs mono" style="color:#ec4899">Benchmark Scorecard</div></div>
                </div>
            </div>
            <!-- Partners -->
            <div class="mt-12">
                <h3 class="text-xl font-bold mb-6 text-center">Strategic Partners</h3>
                <div id="partnerGrid" class="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
            </div>
        </div>
    </section>

    <!-- VISION 2030 -->
    <section class="py-20 section-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">STRATEGIC ALIGNMENT</span>
                <h2 class="text-4xl font-bold mb-4">Vision 2030 Integration</h2>
                <p style="color:var(--bior-text-muted)">Directly supports 3 national strategic programs</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bior-card-strategy accent-green p-6">
                    <div class="card-icon mb-4" style="background:rgba(0,168,107,0.2)"><i class="fas fa-dna text-xl" style="color:var(--bior-success)"></i></div>
                    <h3 class="font-bold mb-2" style="color:var(--bior-badge-success-text)">National Biotechnology Strategy</h3>
                    <p style="color:var(--bior-text-muted)" class="text-sm">Expands the national genomic database and analytics platform. Aligns with the $34.6B GDP target by 2040 through genomics innovation and biomanufacturing.</p>
                </div>
                <div class="bior-card-strategy accent-blue p-6">
                    <div class="card-icon mb-4" style="background:rgba(59,130,246,0.2)"><i class="fas fa-hospital text-xl" style="color:var(--bior-info)"></i></div>
                    <h3 class="font-bold mb-2" style="color:var(--bior-badge-info-text)">Health Sector Transformation</h3>
                    <p style="color:var(--bior-text-muted)" class="text-sm">Digital health infrastructure for preventive care. Real-time genomic surveillance reduces outbreak detection time from weeks to hours.</p>
                </div>
                <div class="bior-card-strategy accent-purple p-6">
                    <div class="card-icon mb-4" style="background:rgba(139,92,246,0.2)"><i class="fas fa-shield-virus text-xl" style="color:var(--bior-special)"></i></div>
                    <h3 class="font-bold mb-2" style="color:var(--bior-badge-special-text)">National AMR Action Plan</h3>
                    <p style="color:var(--bior-text-muted)" class="text-sm">Fills the largest gap in the 2022-2025 national action plan with genomic AMR surveillance and real-time resistome tracking across clinical and environmental sources.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ROADMAP -->
    <section id="roadmap" class="py-20 section-elevated">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">IMPLEMENTATION PLAN</span>
                <h2 class="text-4xl font-bold mb-4">Development Roadmap</h2>
                <p style="color:var(--bior-text-muted)" class="max-w-2xl mx-auto">5-phase implementation plan from prototype to MENA-wide deployment</p>
            </div>
            <div id="roadmapTimeline" class="relative"></div>
        </div>
    </section>

    <!-- METHODOLOGY -->
    <section id="methodology" class="py-20 section-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="mono text-sm mb-2 block" style="color:var(--bior-primary)">SCIENTIFIC FRAMEWORK</span>
                <h2 class="text-4xl font-bold mb-4">Benchmark Methodology</h2>
                <p style="color:var(--bior-text-muted)" class="max-w-2xl mx-auto">Transparent, reproducible evaluation framework grounded in published standards</p>
            </div>
            <div class="grid lg:grid-cols-2 gap-8">
                <div>
                    <div class="bior-panel mb-6">
                        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-ruler" style="color:var(--bior-primary)"></i> Scoring Rubric</h3>
                        <div id="scoringRubric" class="space-y-3"></div>
                    </div>
                    <div class="bior-panel">
                        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-weight-scale" style="color:var(--bior-primary)"></i> Dimension Weights</h3>
                        <div id="dimensionWeights"></div>
                    </div>
                </div>
                <div>
                    <div class="bior-panel mb-6">
                        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-database" style="color:var(--bior-primary)"></i> Data Sources</h3>
                        <div id="methodSources" class="space-y-2"></div>
                    </div>
                    <div class="bior-panel">
                        <h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><i class="fas fa-book" style="color:var(--bior-primary)"></i> Key References</h3>
                        <div id="methodRefs" class="space-y-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-12 section-elevated" style="border-top:1px solid var(--bior-border-subtle)">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:linear-gradient(135deg,var(--bior-primary),var(--bior-info))"><i class="fas fa-dna text-white text-sm"></i></div>
                        <span class="text-lg font-bold" style="color:var(--bior-text-primary)">BioR<span style="color:var(--bior-primary)">-Pathogen</span></span>
                    </div>
                    <p class="text-sm" style="color:var(--bior-text-muted)">Biosurveillance Intelligence & One-health Real-time Pathogen Genomics Platform</p>
                </div>
                <div>
                    <h4 class="font-semibold text-sm mb-3">Quick Links</h4>
                    <div class="space-y-2">
                        <a href="#benchmark" class="block text-sm transition" style="color:var(--bior-text-muted)" onmouseover="this.style.color='var(--bior-primary)'" onmouseout="this.style.color='var(--bior-text-muted)'">Benchmark</a>
                        <a href="#architecture" class="block text-sm transition" style="color:var(--bior-text-muted)" onmouseover="this.style.color='var(--bior-primary)'" onmouseout="this.style.color='var(--bior-text-muted)'">Architecture</a>
                        <a href="#methodology" class="block text-sm transition" style="color:var(--bior-text-muted)" onmouseover="this.style.color='var(--bior-primary)'" onmouseout="this.style.color='var(--bior-text-muted)'">Methodology</a>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold text-sm mb-3">Resources</h4>
                    <div class="space-y-2">
                        <a href="https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-" target="_blank" class="block text-sm transition" style="color:var(--bior-text-muted)" onmouseover="this.style.color='var(--bior-primary)'" onmouseout="this.style.color='var(--bior-text-muted)'"><i class="fab fa-github mr-1"></i> GitHub Repository</a>
                        <a href="#roadmap" class="block text-sm transition" style="color:var(--bior-text-muted)" onmouseover="this.style.color='var(--bior-primary)'" onmouseout="this.style.color='var(--bior-text-muted)'"><i class="fas fa-road mr-1"></i> Roadmap</a>
                    </div>
                </div>
            </div>
            <div class="pt-6 text-center" style="border-top:1px solid var(--bior-border-subtle)">
                <p class="text-xs" style="color:var(--bior-text-faint)">&copy; 2026 BioR-Pathogen Project | Saudi Arabia | Open Science Initiative</p>
                <p class="text-xs mt-1" style="color:var(--bior-text-disabled)">Built for the advancement of global pathogen genomic surveillance</p>
            </div>
        </div>
    </footer>

    <!-- PLATFORM DETAIL MODAL -->
    <div id="platformModal" class="modal-overlay" onclick="if(event.target===this)closePlatformModal()">
        <div class="bior-modal p-8 max-w-2xl w-full mx-4 max-h-[85vh] overflow-y-auto bior-scroll">
            <div class="flex justify-between items-center mb-6">
                <h3 id="modalTitle" class="text-2xl font-bold"></h3>
                <button onclick="closePlatformModal()" class="text-xl" style="color:var(--bior-text-muted)"><i class="fas fa-times"></i></button>
            </div>
            <div id="modalContent"></div>
        </div>
    </div>

    <!-- ==================== JAVASCRIPT ==================== -->
    <script>
    let platformData, dimensionData, threatData, gapData, architectureData, roadmapData, methodologyData;
    let radarChart = null;
    let selectedPlatforms = new Set();

    async function init() {
        const [pR,dR,tR,gR,aR,rR,mR] = await Promise.all([
            fetch('/api/platforms').then(r=>r.json()),
            fetch('/api/dimensions').then(r=>r.json()),
            fetch('/api/threats').then(r=>r.json()),
            fetch('/api/gaps').then(r=>r.json()),
            fetch('/api/architecture').then(r=>r.json()),
            fetch('/api/roadmap').then(r=>r.json()),
            fetch('/api/methodology').then(r=>r.json())
        ]);
        platformData=pR; dimensionData=dR; threatData=tR; gapData=gR; architectureData=aR; roadmapData=rR; methodologyData=mR;

        // Default: select top 5
        const sorted = [...platformData.platforms].sort((a,b)=>sum(b.scores)-sum(a.scores));
        sorted.slice(0,5).forEach(p=>selectedPlatforms.add(p.id));

        renderAll();
        animateCounters();
    }

    function sum(s){return Object.values(s).reduce((a,v)=>a+v,0)}
    function avg(s){return (sum(s)/8).toFixed(1)}

    function renderAll(){
        renderDimensions(); renderPlatformSelector(); renderRadarChart(); renderRankings();
        renderHeatmap(); renderFeatureTable(); renderFullRankings();
        renderPlatformGrid(); renderThreats(); renderGaps(); renderArchitecture();
        renderRoadmap(); renderMethodology();
    }

    function renderDimensions(){
        const c=document.getElementById('dimensionCards');
        c.innerHTML=dimensionData.dimensions.map(d=>\`
            <div class="bior-card p-4 cursor-pointer group" title="\${d.description}">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:\${d.color}20">
                        <i class="fas fa-\${d.icon}" style="color:\${d.color}"></i>
                    </div>
                    <span class="text-sm font-semibold" style="color:var(--bior-text-primary)">\${d.name}</span>
                </div>
                <p class="text-xs line-clamp-2" style="color:var(--bior-text-muted)">\${d.description}</p>
                <div class="mt-2 text-xs" style="color:var(--bior-text-faint)">Weight: <span class="mono" style="color:\${d.color}">\${d.weight}%</span></div>
            </div>
        \`).join('');
    }

    function renderPlatformSelector(){
        const c=document.getElementById('platformSelector');
        const colors=['#00A86B','#3b82f6','#8b5cf6','#ef4444','#f97316','#22c55e','#ec4899','#06b6d4','#eab308','#64748b'];
        c.innerHTML=platformData.platforms.map((p,i)=>{
            const sel=selectedPlatforms.has(p.id);
            return \`<button onclick="togglePlatform('\${p.id}')" class="text-xs px-3 py-1.5 rounded-lg transition font-medium" style="border:1px solid \${sel?colors[i]:'var(--bior-border-default)'};background:\${sel?colors[i]+'20':'transparent'};color:\${sel?colors[i]:'var(--bior-text-muted)'}">\${p.name}</button>\`;
        }).join('');
    }

    function togglePlatform(id){
        if(selectedPlatforms.has(id)){selectedPlatforms.delete(id)}
        else if(selectedPlatforms.size<5){selectedPlatforms.add(id)}
        renderPlatformSelector(); renderRadarChart();
    }

    function renderRadarChart(){
        const ctx=document.getElementById('radarChart').getContext('2d');
        if(radarChart)radarChart.destroy();
        const labels=dimensionData.dimensions.map(d=>d.name);
        const colors=['#00A86B','#3b82f6','#8b5cf6','#ef4444','#f97316','#22c55e','#ec4899','#06b6d4','#eab308','#64748b'];
        const sel=platformData.platforms.filter(p=>selectedPlatforms.has(p.id));
        const datasets=sel.map((p,i)=>({
            label:p.name,
            data:dimensionData.dimensions.map(d=>p.scores[d.id]),
            borderColor:colors[platformData.platforms.indexOf(p)],
            backgroundColor:colors[platformData.platforms.indexOf(p)]+'15',
            borderWidth:2, pointRadius:4, pointBackgroundColor:colors[platformData.platforms.indexOf(p)],
            pointHoverRadius:6
        }));
        radarChart=new Chart(ctx,{
            type:'radar',data:{labels,datasets},
            options:{
                responsive:true,
                scales:{r:{beginAtZero:true,max:10,ticks:{stepSize:2,color:'#6b7280',backdropColor:'transparent',font:{size:10}},grid:{color:'rgba(0,0,0,0.1)'},angleLines:{color:'rgba(0,0,0,0.1)'},pointLabels:{color:'#374151',font:{size:11}}}},
                plugins:{legend:{display:true,position:'bottom',labels:{color:'#4b5563',font:{size:11},padding:15,usePointStyle:true,pointStyle:'circle'}},tooltip:{backgroundColor:'#ffffff',titleColor:'#1a1a2e',bodyColor:'#4b5563',borderColor:'rgba(0,0,0,0.12)',borderWidth:1}}
            }
        });
    }

    function renderRankings(){
        const ranked=[...platformData.platforms].map(p=>({...p,total:sum(p.scores),average:avg(p.scores)})).sort((a,b)=>b.total-a.total);
        const max=ranked[0].total;
        document.getElementById('rankingList').innerHTML=ranked.map((p,i)=>{
            const pct=(p.total/max*100).toFixed(0);
            const medal=i===0?'text-amber-400':i===1?'text-gray-400':i===2?'text-amber-600':'';
            const icon=i===0?'trophy':i===1?'medal':i===2?'award':'';
            return \`<div class="flex items-center gap-3 p-2.5 rounded-lg transition cursor-pointer" style="border-radius:var(--bior-radius-md)" onmouseover="this.style.background='var(--bior-bg-elevated)'" onmouseout="this.style.background='transparent'" onclick="openPlatformModal('\${p.id}')">
                <span class="text-lg font-bold w-8 text-center \${medal}">\${i<3?'<i class="fas fa-'+icon+'"></i>':i+1}</span>
                <div class="flex-1">
                    <div class="flex justify-between items-center mb-1"><span class="text-sm font-semibold">\${p.name}</span><span class="mono text-xs" style="color:var(--bior-primary)">\${p.average}/10</span></div>
                    <div class="h-1.5 rounded-full overflow-hidden" style="background:var(--bior-bg-elevated)"><div class="h-full rounded-full score-bar" style="width:\${pct}%;background:linear-gradient(90deg,#00A86B,#3b82f6)"></div></div>
                </div>
                <span class="mono text-xs w-10 text-right" style="color:var(--bior-text-muted)">\${p.total}/80</span>
            </div>\`;
        }).join('');
    }

    function renderHeatmap(){
        const dims=dimensionData.dimensions;
        const ranked=[...platformData.platforms].sort((a,b)=>sum(b.scores)-sum(a.scores));
        let html='<table class="w-full text-xs"><thead><tr><th class="p-2 text-left sticky left-0 z-10 min-w-[100px]" style="color:var(--bior-text-muted);background:var(--bior-bg-card)">Platform</th>';
        dims.forEach(d=>{html+=\`<th class="p-2 text-center min-w-[60px]" title="\${d.name}"><i class="fas fa-\${d.icon}" style="color:\${d.color}"></i><div class="text-[9px] mt-1" style="color:var(--bior-text-faint)">\${d.name.split(' ')[0]}</div></th>\`});
        html+='<th class="p-2 text-center font-bold" style="color:var(--bior-primary)">Avg</th></tr></thead><tbody>';
        ranked.forEach(p=>{
            html+='<tr class="border-t" style="border-color:var(--bior-border-subtle)">';
            html+=\`<td class="p-2 font-medium sticky left-0 z-10" style="background:var(--bior-bg-card)">\${p.name}</td>\`;
            dims.forEach(d=>{
                const v=p.scores[d.id];
                const intensity=v/10;
                const bg=v>=9?'rgba(20,184,166,'+intensity*0.6+')':v>=7?'rgba(59,130,246,'+intensity*0.5+')':v>=5?'rgba(234,179,8,'+intensity*0.4+')':'rgba(239,68,68,'+intensity*0.4+')';
                html+=\`<td class="p-1 text-center"><div class="heatmap-cell rounded-md p-2 mx-auto" style="background:\${bg}" title="\${p.name}: \${d.name} = \${v}/10"><span class="mono font-bold">\${v}</span></div></td>\`;
            });
            html+=\`<td class="p-2 text-center mono font-bold" style="color:var(--bior-primary)">\${avg(p.scores)}</td></tr>\`;
        });
        html+='</tbody></table>';
        document.getElementById('heatmapContainer').innerHTML=html;
    }

    function renderFeatureTable(){
        const features=[
            {name:'Open Source',key:'license',check:p=>p.license!=='Proprietary'&&p.license!=='Custom (DAA)'},
            {name:'Cloud-based',check:p=>['Cloud Platform','Global Repository'].includes(p.type)},
            {name:'Free to Use',check:p=>!['Proprietary'].includes(p.license)},
            {name:'Virus Support',check:p=>p.pathogens.some(x=>['SARS-CoV-2','Influenza','Ebola','Zika','Dengue','Viruses','Any (visualization)','Any (general bioinformatics)'].includes(x))},
            {name:'Bacteria',check:p=>p.pathogens.some(x=>['Bacteria','Salmonella','E. coli','S. pneumoniae','K. pneumoniae','Any (visualization)','Any (general bioinformatics)'].includes(x))},
            {name:'Fungi',check:p=>p.pathogens.some(x=>['Fungi','Any (general bioinformatics)'].includes(x))},
            {name:'AMR Detection',check:p=>[9,8].includes(p.scores.analytical)&&p.strengths.some(s=>s.toLowerCase().includes('amr'))},
            {name:'Real-time',check:p=>p.scores.surveillance>=8},
            {name:'No-code GUI',check:p=>p.scores.usability>=8},
            {name:'One Health',check:p=>p.oneHealth},
            {name:'Mass Gathering',check:p=>p.massGathering},
            {name:'Wastewater',check:p=>p.wastewater},
            {name:'AI Prediction',check:p=>p.aiPrediction}
        ];
        let html='<table class="w-full text-xs"><thead><tr><th class="p-2 text-left sticky left-0 z-10 min-w-[120px]" style="color:var(--bior-text-muted);background:var(--bior-bg-card)">Feature</th>';
        platformData.platforms.forEach(p=>{html+=\`<th class="p-2 text-center min-w-[70px]"><div class="text-[10px]">\${p.name}</div></th>\`});
        html+='<th class="p-2 text-center min-w-[70px] font-bold" style="color:var(--bior-primary)"><div class="text-[10px]">BioR-P</div></th></tr></thead><tbody>';
        features.forEach(f=>{
            html+='<tr class="border-t" style="border-color:var(--bior-border-subtle)">';
            html+=\`<td class="p-2 font-medium sticky left-0 z-10" style="background:var(--bior-bg-card)">\${f.name}</td>\`;
            platformData.platforms.forEach(p=>{
                const has=f.check(p);
                html+=\`<td class="p-1 text-center"><span class="feature-check" style="background:\${has?'rgba(0,168,107,0.15)':'rgba(239,68,68,0.1)'};color:\${has?'var(--bior-success)':'var(--bior-danger)'}">\${has?'<i class="fas fa-check"></i>':'<i class="fas fa-minus"></i>'}</span></td>\`;
            });
            html+=\`<td class="p-1 text-center"><span class="feature-check" style="background:rgba(0,168,107,0.15);color:var(--bior-primary)"><i class="fas fa-check"></i></span></td>\`;
            html+='</tr>';
        });
        html+='</tbody></table>';
        document.getElementById('featureTable').innerHTML=html;
    }

    function renderFullRankings(){
        const dims=dimensionData.dimensions;
        const ranked=[...platformData.platforms].map(p=>{
            const weighted=dims.reduce((s,d)=>s+(p.scores[d.id]*d.weight/100),0);
            return{...p,weighted:weighted.toFixed(2),total:sum(p.scores),average:avg(p.scores)};
        }).sort((a,b)=>b.weighted-a.weighted);
        const maxW=parseFloat(ranked[0].weighted);
        document.getElementById('fullRankingList').innerHTML=ranked.map((p,i)=>{
            const pct=(parseFloat(p.weighted)/maxW*100).toFixed(0);
            return \`<div class="glass rounded-xl p-4 glow-hover transition">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(var(--bior-primary-rgb),0.1)"><span class="text-xl font-black" style="color:var(--bior-primary)">#\${i+1}</span></div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between mb-1"><span class="font-bold">\${p.name}</span><div class="flex items-center gap-3"><span class="mono text-sm" style="color:var(--bior-primary)">\${p.weighted}</span><span class="text-xs" style="color:var(--bior-text-muted)">weighted</span></div></div>
                        <div class="h-2 rounded-full overflow-hidden mb-2" style="background:var(--bior-bg-elevated)"><div class="h-full rounded-full" style="width:\${pct}%;background:linear-gradient(90deg,#00A86B,#3b82f6,#8b5cf6)"></div></div>
                        <div class="flex flex-wrap gap-2">\${dimensionData.dimensions.map(d=>{const v=p.scores[d.id];const st=v>=9?'color:var(--bior-primary)':v>=7?'color:var(--bior-info)':v>=5?'color:var(--bior-warning)':'color:var(--bior-danger)';return \`<span class="text-[10px]" style="\${st}"><i class="fas fa-\${d.icon} mr-0.5"></i>\${v}</span>\`}).join('')}</div>
                    </div>
                </div>
            </div>\`;
        }).join('');
    }

    function renderPlatformGrid(){
        document.getElementById('platformGrid').innerHTML=platformData.platforms.map(p=>{
            const total=sum(p.scores);const a=avg(p.scores);
            return \`<div class="bior-card-strategy p-6 cursor-pointer" onclick="openPlatformModal('\${p.id}')">
                <div class="card-header" style="margin-bottom:12px"><div class="flex items-center justify-between w-full">
                    <h3 class="card-title">\${p.name}</h3>
                    <span class="bior-badge bior-badge-success mono">\${a}/10</span>
                </div></div>
                <p class="text-xs mb-3" style="color:var(--bior-text-faint)">\${p.developer} | \${p.type} | \${p.year}</p>
                <div class="mb-3"><div class="text-xs mb-1 font-medium" style="color:var(--bior-badge-success-text)">Strengths:</div><div class="flex flex-wrap gap-1">\${p.strengths.slice(0,3).map(s=>\`<span class="bior-badge bior-badge-success" style="font-size:9px;text-transform:none">\${s}</span>\`).join('')}</div></div>
                <div class="mb-3"><div class="text-xs mb-1 font-medium" style="color:var(--bior-badge-danger-text)">Gaps:</div><div class="flex flex-wrap gap-1">\${p.weaknesses.slice(0,3).map(w=>\`<span class="bior-badge bior-badge-danger" style="font-size:9px;text-transform:none">\${w}</span>\`).join('')}</div></div>
                <div class="card-footer"><a href="\${p.url}" target="_blank" class="text-xs flex items-center gap-1" style="color:var(--bior-primary)" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> Visit</a><span class="text-xs" style="color:var(--bior-text-faint)">Click for details</span></div>
            </div>\`;
        }).join('');
    }

    function openPlatformModal(id){
        const p=platformData.platforms.find(x=>x.id===id); if(!p)return;
        document.getElementById('modalTitle').textContent=p.name;
        const dims=dimensionData.dimensions;
        document.getElementById('modalContent').innerHTML=\`
            <div class="flex items-center gap-3 mb-4"><span class="text-sm" style="color:var(--bior-text-secondary)">\${p.developer}</span><span class="bior-badge bior-badge-info">\${p.type}</span><span class="bior-badge bior-badge-info">\${p.year}</span><span class="bior-badge bior-badge-info">\${p.license}</span></div>
            <a href="\${p.url}" target="_blank" class="text-sm block mb-6" style="color:var(--bior-primary)"><i class="fas fa-external-link-alt mr-1"></i>\${p.url}</a>
            <h4 class="font-semibold mb-3" style="color:var(--bior-text-primary)">Dimension Scores</h4>
            <div class="space-y-2 mb-6">\${dims.map(d=>{const v=p.scores[d.id];const pct=v*10;return \`<div class="flex items-center gap-3"><div class="w-28 text-xs flex items-center gap-1.5"><i class="fas fa-\${d.icon}" style="color:\${d.color}"></i><span style="color:var(--bior-text-secondary)">\${d.name.split(' ')[0]}</span></div><div class="flex-1 h-2 rounded-full overflow-hidden" style="background:var(--bior-bg-elevated)"><div class="h-full rounded-full" style="width:\${pct}%;background:\${d.color}"></div></div><span class="mono text-xs w-8 text-right" style="color:\${d.color}">\${v}/10</span></div>\`}).join('')}</div>
            <div class="grid grid-cols-2 gap-4 mb-6"><div><h4 class="font-semibold text-sm mb-2" style="color:var(--bior-badge-success-text)">Strengths</h4><ul class="space-y-1">\${p.strengths.map(s=>\`<li class="text-xs flex items-start gap-2" style="color:var(--bior-text-secondary)"><i class="fas fa-check mt-0.5 text-[10px]" style="color:var(--bior-success)"></i>\${s}</li>\`).join('')}</ul></div><div><h4 class="font-semibold text-sm mb-2" style="color:var(--bior-badge-danger-text)">Weaknesses</h4><ul class="space-y-1">\${p.weaknesses.map(w=>\`<li class="text-xs flex items-start gap-2" style="color:var(--bior-text-secondary)"><i class="fas fa-xmark mt-0.5 text-[10px]" style="color:var(--bior-danger)"></i>\${w}</li>\`).join('')}</ul></div></div>
            <h4 class="font-semibold text-sm mb-2" style="color:var(--bior-text-primary)">Supported Pathogens</h4>
            <div class="flex flex-wrap gap-1 mb-4">\${p.pathogens.map(x=>\`<span class="bior-badge bior-badge-success" style="text-transform:none">\${x}</span>\`).join('')}</div>
            <div class="flex gap-2 text-xs">\${[{k:'oneHealth',l:'One Health'},{k:'massGathering',l:'Mass Gathering'},{k:'wastewater',l:'Wastewater'},{k:'aiPrediction',l:'AI Prediction'}].map(f=>\`<span class="bior-badge \${p[f.k]?'bior-badge-success':'bior-badge-danger'}">\${p[f.k]?'\\u2713':'\\u2717'} \${f.l}</span>\`).join('')}</div>
        \`;
        document.getElementById('platformModal').classList.add('show');
    }

    function closePlatformModal(){document.getElementById('platformModal').classList.remove('show')}

    function renderThreats(){
        document.getElementById('threatGrid').innerHTML=threatData.threats.map(t=>{
            const riskColor={critical:'var(--bior-danger)',high:'var(--bior-warning)',medium:'#eab308'};
            const riskBadge={critical:'bior-badge-danger',high:'bior-badge-warning',medium:'bior-badge-warning'};
            return \`
            <div class="bior-card p-5" style="border-color:\${riskColor[t.risk]}30">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background:var(--bior-bg-elevated)"><i class="fas fa-\${t.icon}" style="color:var(--bior-text-secondary)"></i></div>
                        <div><h3 class="font-bold" style="color:var(--bior-text-primary)">\${t.name}</h3><span class="text-xs" style="color:var(--bior-text-muted)">\${t.category}</span></div>
                    </div>
                    <span class="bior-badge \${riskBadge[t.risk]}">\${t.risk}</span>
                </div>
                <p class="text-sm mb-3" style="color:var(--bior-text-muted)">\${t.description}</p>
                <div class="flex items-center gap-2 mb-2"><span class="text-xs" style="color:var(--bior-text-faint)">Prevalence:</span><span class="mono text-xs" style="color:var(--bior-primary)">\${t.prevalence}</span></div>
                <div class="rounded-lg p-2 mb-2" style="background:var(--bior-bg-elevated)"><div class="text-[10px] font-medium mb-1" style="color:var(--bior-badge-special-text)">Genomic Need:</div><div class="text-[11px]" style="color:var(--bior-text-secondary)">\${t.genomicNeed}</div></div>
                <div class="flex flex-wrap gap-1">\${t.sources.map(s=>\`<span class="bior-badge bior-badge-info" style="text-transform:none">\${s}</span>\`).join('')}</div>
            </div>
        \`}).join('');
    }

    function renderGaps(){
        const missing=gapData.capabilities.filter(c=>!c.global);
        const existing=gapData.capabilities.filter(c=>c.global);
        const impactColors={critical:'color:var(--bior-danger)',high:'color:var(--bior-warning)',medium:'color:#eab308',baseline:'color:var(--bior-text-muted)'};
        document.getElementById('gapMissing').innerHTML=missing.map(c=>\`
            <div class="flex items-start gap-3 p-3 rounded-lg" style="background:var(--bior-badge-danger-bg);border:1px solid var(--bior-badge-danger-border)">
                <div class="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(239,68,68,0.2)"><i class="fas fa-xmark text-xs" style="color:var(--bior-danger)"></i></div>
                <div><div class="flex items-center gap-2 flex-wrap"><h4 class="font-semibold text-sm" style="color:var(--bior-text-primary)">\${c.name}</h4><span class="bior-badge bior-badge-success" style="text-transform:none">BioR-Pathogen</span><span class="text-[10px]" style="\${impactColors[c.impact]}">\${c.impact}</span></div><p class="text-xs mt-1" style="color:var(--bior-text-muted)">\${c.description}</p></div>
            </div>
        \`).join('');
        document.getElementById('gapExisting').innerHTML=existing.map(c=>\`
            <div class="flex items-start gap-3 p-3 rounded-lg" style="background:var(--bior-badge-success-bg);border:1px solid var(--bior-badge-success-border)">
                <div class="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(0,168,107,0.2)"><i class="fas fa-check text-xs" style="color:var(--bior-success)"></i></div>
                <div><h4 class="font-semibold text-sm" style="color:var(--bior-text-primary)">\${c.name}</h4><p class="text-xs mt-1" style="color:var(--bior-text-muted)">\${c.description}</p></div>
            </div>
        \`).join('');
    }

    function renderArchitecture(){
        document.getElementById('pillarGrid').innerHTML=architectureData.pillars.map(p=>\`
            <div class="bior-card-strategy p-6" style="border-color:\${p.color}30">
                <div class="card-header">
                    <div class="card-icon" style="background:\${p.color}20"><i class="fas fa-\${p.icon}" style="color:\${p.color}"></i></div>
                    <div><span class="mono text-[10px]" style="color:\${p.color}">PILLAR \${p.id}</span><div class="card-title" style="font-size:14px">\${p.name}</div></div>
                </div>
                <span class="bior-badge" style="background:\${p.color}20;color:\${p.color};border:1px solid \${p.color}40;margin-bottom:12px;display:inline-block">\${p.abbr}</span>
                <p class="card-body">\${p.description}</p>
            </div>
        \`).join('');
        document.getElementById('dataSourceCards').innerHTML=architectureData.dataSources.map(ds=>\`
            <div class="bior-card p-4 text-center" style="border-color:\${ds.color}30">
                <i class="fas fa-\${ds.icon} text-xl mb-2" style="color:\${ds.color}"></i>
                <div class="text-sm font-semibold" style="color:var(--bior-text-primary)">\${ds.name}</div>
                <div class="text-[10px]" style="color:var(--bior-text-muted)">\${ds.description}</div>
            </div>
        \`).join('');
        document.getElementById('partnerGrid').innerHTML=architectureData.partners.map(p=>\`
            <div class="bior-card p-4">
                <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(var(--bior-primary-rgb),0.2)"><i class="fas fa-\${p.logo} text-sm" style="color:var(--bior-primary)"></i></div><div><div class="font-bold text-sm" style="color:var(--bior-primary)">\${p.name}</div><p class="text-xs" style="color:var(--bior-text-muted)">\${p.role}</p></div></div>
            </div>
        \`).join('');
    }

    function renderRoadmap(){
        const phases=roadmapData.phases;
        const c=document.getElementById('roadmapTimeline');
        c.innerHTML=\`<div class="hidden md:block timeline-line"></div>\${phases.map((p,i)=>{
            const isLeft=i%2===0;
            return \`<div class="relative mb-12 md:mb-16">
                <div class="hidden md:block absolute left-1/2 top-6 w-5 h-5 rounded-full border-4 -translate-x-1/2 z-10" style="border-color:\${p.color};background:\${p.status==='active'?p.color:'var(--bior-bg-card)'}"></div>
                <div class="md:w-[45%] \${isLeft?'md:mr-auto md:pr-12':'md:ml-auto md:pl-12'} pl-12 md:pl-0 relative">
                    <div class="md:hidden absolute left-0 top-6 w-5 h-5 rounded-full border-4 z-10" style="border-color:\${p.color};background:\${p.status==='active'?p.color:'var(--bior-bg-card)'}"></div>
                    <div class="bior-card p-6" style="border-color:\${p.color}30">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="bior-badge" style="background:\${p.color}20;color:\${p.color};border:1px solid \${p.color}40">Phase \${p.id}</span>
                            \${p.status==='active'?'<span class=\"bior-badge bior-badge-success flex items-center gap-1\"><span class=\"w-1.5 h-1.5 rounded-full pulse-dot\" style=\"background:var(--bior-primary)\"></span>Active</span>':''}
                        </div>
                        <h3 class="font-bold text-lg mb-1" style="color:\${p.color}">\${p.name}</h3>
                        <div class="text-xs mb-4" style="color:var(--bior-text-muted)">\${p.duration}</div>
                        <ul class="space-y-1.5">\${p.milestones.map(m=>\`<li class="text-xs flex items-start gap-2" style="color:var(--bior-text-secondary)"><i class="fas fa-\${p.status==='active'?'spinner fa-spin':'circle'} text-[8px] mt-1" style="color:\${p.color}"></i>\${m}</li>\`).join('')}</ul>
                    </div>
                </div>
            </div>\`;
        }).join('')}\`;
    }

    function renderMethodology(){
        const m=methodologyData;
        document.getElementById('scoringRubric').innerHTML=m.framework.scoringRubric.map(r=>\`
            <div class="flex items-center gap-3 p-3 rounded-lg" style="background:\${r.color}10;border:1px solid \${r.color}30">
                <span class="mono text-lg font-bold w-14 text-center" style="color:\${r.color}">\${r.range}</span>
                <div><div class="font-semibold text-sm" style="color:\${r.color}">\${r.label}</div><div class="text-xs" style="color:var(--bior-text-muted)">\${r.description}</div></div>
            </div>
        \`).join('');
        document.getElementById('dimensionWeights').innerHTML='<div class="space-y-2">'+dimensionData.dimensions.map(d=>\`
            <div class="flex items-center gap-3"><div class="w-24 text-xs flex items-center gap-1.5"><i class="fas fa-\${d.icon}" style="color:\${d.color}"></i>\${d.name.split(' ')[0]}</div>
            <div class="flex-1 h-3 rounded-full overflow-hidden" style="background:var(--bior-bg-elevated)"><div class="h-full rounded-full" style="width:\${d.weight*100/15}%;background:\${d.color}"></div></div>
            <span class="mono text-xs w-8 text-right" style="color:\${d.color}">\${d.weight}%</span></div>
        \`).join('')+'</div>';
        document.getElementById('methodSources').innerHTML=m.sources.map(s=>\`
            <div class="flex items-start gap-2 text-xs" style="color:var(--bior-text-secondary)"><i class="fas fa-check-circle mt-0.5" style="color:var(--bior-primary)"></i><span>\${s}</span></div>
        \`).join('');
        document.getElementById('methodRefs').innerHTML=m.references.map(r=>\`
            <a href="\${r.url}" target="_blank" class="block p-3 rounded-lg transition" style="background:var(--bior-bg-elevated)">
                <div class="text-sm font-medium mb-1" style="color:var(--bior-text-primary)">\${r.title}</div>
                <div class="text-xs" style="color:var(--bior-primary)">\${r.journal}</div>
            </a>
        \`).join('');
    }

    function switchTab(tab){
        document.querySelectorAll('.tab-content').forEach(t=>t.classList.add('hidden'));
        document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
        document.getElementById('tab-'+tab).classList.remove('hidden');
        document.querySelector('[data-tab="'+tab+'"]').classList.add('active');
    }

    function animateCounters(){
        document.querySelectorAll('.counter').forEach(el=>{
            const target=parseInt(el.dataset.target);
            let current=0;
            const step=Math.max(1,Math.floor(target/30));
            const timer=setInterval(()=>{
                current+=step;
                if(current>=target){current=target;clearInterval(timer);el.textContent=target+'+'
                    if(target===10||target===8||target===7)el.textContent=target}
                else{el.textContent=current}
            },40);
        });
    }

    document.addEventListener('keydown',e=>{if(e.key==='Escape')closePlatformModal()});
    init();
    </script>
</body>
</html>`
}
