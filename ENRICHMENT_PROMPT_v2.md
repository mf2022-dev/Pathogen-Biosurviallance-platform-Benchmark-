# BioR Enrichment Prompt v2.0
# Option A: 5-Layer Architecture + CBRN Multi-Tag System
# 
# USAGE: Copy everything below the line into any AI assistant (ChatGPT, Claude,
# Gemini, Perplexity) and replace the [BRACKETED] fields with platform data.
# ============================================================================

You are an intelligence analyst conducting deep-dive platform profiling for a global
biosurveillance and CBRN operational infrastructure map (BioR Project — Biosurveillance
Intelligence for Operational Readiness). This project benchmarks 169+ platforms across
pathogen surveillance, genomics, biodefense, detection hardware, and policy frameworks.

---

## PLATFORM BEING PROFILED

PLATFORM: [NAME]
URL: [URL]
LAYER: [LAYER — one of the 5 below]
CURRENT CATEGORY: [CATEGORY]
CURRENT DESCRIPTION: [DESCRIPTION]
CURRENT SCORE: [COMPOSITE SCORE] / 100

---

## 5-LAYER ARCHITECTURE (assign exactly one)

| Layer | Name | Definition | Assignment Rule |
|-------|------|-----------|-----------------|
| L1 | Surveillance | Epidemiological surveillance, disease reporting, outbreak management, syndromic monitoring, event-based intelligence, wastewater monitoring, environmental sensing | Platform primarily collects, aggregates, or reports epidemiological / clinical / environmental data |
| L2 | Genomic | Genomic sequencing, bioinformatics pipelines, phylogenetics, AMR detection, pathogen databases, metagenomic analysis, variant tracking, data sharing repositories | Platform primarily processes, analyzes, or shares genomic / sequence data |
| L3 | Defense | Military biodefense programs, CBRN defense, MCM development, threat reduction, bioforensics, defense research institutes (allied + adversary), CBRN operational systems | Platform is a defense/military program, biodefense initiative, CBRN operational system, or threat reduction effort |
| L4 | Hardware | Physical detection devices, field-deployable sensors, rapid diagnostics, aerosol collectors, point-of-need instruments, CBRN detection systems | Platform is a physical hardware device or sensor system |
| L5 | Policy | Governance frameworks, health security indices, preparedness assessments, regulatory programs, pandemic funding trackers | Platform is a governance, policy, or assessment framework |

---

## CBRN FUNCTION TAGS (multi-select, only if L3_Defense or L4_Hardware)

If this platform operates in the CBRN domain, tag ALL applicable functions:

- [ ] BIO — Biological threat detection, bioagent identification, biodefense
- [ ] CHEM — Chemical hazard detection, chemical agent identification
- [ ] RAD — Radiological monitoring, nuclear detection
- [ ] SENSOR — Sensor integration, networked detection, environmental monitoring hardware
- [ ] MODEL — Plume/dispersion modeling, consequence assessment, hazard prediction
- [ ] INCIDENT — CBRN incident management, responder workflow, operational coordination
- [ ] W&R — Warning and reporting, alert dissemination, notification systems
- [ ] C2 — Command and control integration, battle management, C2ISR interoperability
- [ ] DECISIONSUPPORT — Decision support, course-of-action analysis, risk assessment
- [ ] FORENSICS — Bioforensics, attribution analysis, sample chain-of-custody
- [ ] MCM — Medical countermeasure development, procurement, stockpile management

IMPORTANT CBRN CLASSIFICATION RULE:
After completing your research, explicitly state whether this platform is:
  (A) A TRUE CBRN OPERATIONAL PLATFORM — directly performs CBRN operational functions
  (B) A CBRN-SPECIFIC MODULE within a larger defense/health suite
  (C) An ADJACENT ENABLING SYSTEM — supports CBRN mission but is not itself a CBRN platform
Do NOT classify generic public health platforms, single-purpose surveillance databases,
or broad command-and-control systems as CBRN unless they clearly perform CBRN operational
functions as defined by the tags above.

---

## REQUIRED OUTPUT: 9 PROFILE FIELDS

Return EXACTLY these 9 fields. Each should be 200–500 characters, factual, specific,
and cite real numbers, dates, names, and organizations. Do NOT invent data.
If uncertain, write "unconfirmed."

### 1. OVERVIEW (200–500 chars)
What is this platform? Who created it and when? What is its primary mission?
Include: founding year, key people/labs, institutional home, origin story.

### 2. FUNCTIONAL SCOPE (200–500 chars)
What does it actually do? List specific capabilities, supported pathogens/diseases
or hazards/agents, analysis types, modules, and unique features that distinguish it
from competitors.

### 3. TECH STACK (200–500 chars)
What technologies power it? Programming languages, frameworks, databases, cloud
platforms, APIs, data standards (HL7/FHIR/ISO/NATO STANAG/OGC, etc.), deployment
model. Include GitHub repo URL if open-source.

### 4. OPERATOR (200–500 chars)
Who operates and funds it? Organization name, country, department, partnerships.
Include funding sources (grants, government contracts) with dollar amounts if known.

### 5. DATA MODEL (200–500 chars)
How is data structured? Input formats, output formats, key data types,
ontologies/standards used, interoperability with other systems. Include specific
database sizes (records/sequences/genomes/sensors/incidents/sites) if known.

### 6. USERS & SCALE (200–500 chars)
Who uses it? How many users/countries/institutions? Deployment scale, citation
counts, download stats, monthly active users, installed sites, or agency adoption.
Include specific numbers.

### 7. ACCESS MODEL (200–500 chars)
How do you access it? Free/paid/freemium? Open-source license type? Registration
required? API access? Data redistribution restrictions? Commercial use allowed?
Classification level (unclassified / CUI / classified)?

### 8. ECOSYSTEM POSITION (200–400 chars)
What platforms feed data INTO this one? What platforms consume its outputs?
What are the closest competitors or alternatives? Where does it sit in the data
flow of a national or international surveillance/defense pipeline?

### 9. CONFIDENCE ASSESSMENT (100–200 chars)
Rate overall confidence in this profile: HIGH / MEDIUM / LOW / VERY LOW.
Explain what sources were available vs. what gaps remain. Flag any fields where
data is unverified, vendor-claimed only, or inferred from OSINT.

---

## REQUIRED OUTPUT: SCORE REVIEW

Review the current 10-dimension sub-scores and flag any that seem too high or too
low based on your research. Only flag scores you have evidence to dispute.

| Dimension | Current Score | Your Assessment | Evidence |
|-----------|--------------|-----------------|----------|
| Data Integration | [SCORE] | OK / Too High / Too Low | [why] |
| Analytics Capability | [SCORE] | OK / Too High / Too Low | [why] |
| Visualization | [SCORE] | OK / Too High / Too Low | [why] |
| Accessibility | [SCORE] | OK / Too High / Too Low | [why] |
| Scalability | [SCORE] | OK / Too High / Too Low | [why] |
| Documentation | [SCORE] | OK / Too High / Too Low | [why] |
| Community Support | [SCORE] | OK / Too High / Too Low | [why] |
| Security & Compliance | [SCORE] | OK / Too High / Too Low | [why] |
| Interoperability | [SCORE] | OK / Too High / Too Low | [why] |
| Real-Time Capability | [SCORE] | OK / Too High / Too Low | [why] |

---

## REQUIRED OUTPUT: REFERENCES & CONTEXT

### Key Publications (3–5)
List author, year, journal, title, and DOI/URL for the most important scientific
or technical publications about this platform.

### Official Guidelines & Policy Documents (2–3)
List any government, WHO, NATO, or institutional guidelines that reference or
mandate use of this platform.

### Controversies, Limitations, or Recent Major Changes (2024–2026)
Any known issues, data access disputes, funding changes, leadership changes,
operational failures, or major upgrades.

### Ecosystem Connections
List specific platforms this one integrates with, feeds data to, or receives
data from. Use format: "[Platform Name] — [relationship type]"

---

## OUTPUT QUALITY RULES

1. Be precise and skeptical.
2. Prefer official documentation, peer-reviewed literature, government sources,
   and vendor technical documents over news articles or blog posts.
3. Distinguish clearly between VERIFIED FACTS and VENDOR CLAIMS.
4. If a metric, funding figure, or technical detail is not publicly confirmed,
   write "unconfirmed" — do not guess or extrapolate.
5. For adversary-state platforms (Russia, China, DPRK, Iran), clearly state
   confidence level and source limitations.
6. For CBRN platforms, ground your assessment in observable capabilities, not
   marketing language.
7. Do not classify a platform as something it is not to fill the template —
   leave fields as "insufficient data" if warranted.
