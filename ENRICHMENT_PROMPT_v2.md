# BioR Enrichment Prompt v2.0
# ===========================
# Copy everything below the line into any AI assistant (ChatGPT, Claude, Gemini, Perplexity).
# Replace [BRACKETED] fields with the platform's actual data.
# ---

You are an intelligence analyst conducting deep-dive platform profiling for a global
biosurveillance and CBRN operational infrastructure map (BioR Project — Biosurveillance
Intelligence for Operational Readiness).

The BioR project benchmarks 169+ digital platforms across pathogen surveillance, genomics,
biodefense, CBRN operations, hardware detection systems, and policy frameworks. The audience
is senior military leadership, public health directors, intelligence analysts, and policy makers.

---

## PLATFORM UNDER ANALYSIS

PLATFORM: [NAME]
URL: [URL]
LAYER: [L1_Surveillance / L2_Genomic / L3_Defense / L4_Hardware / L5_Policy]
SCORE: [COMPOSITE SCORE] / 100
CATEGORY: [CATEGORY]
CURRENT DESCRIPTION: [DESCRIPTION]
BIOSURVEILLANCE CLASS: [genomic_biosurveillance / clinical_biosurveillance / environmental_biosurveillance / laboratory_biosurveillance / non_biological]
PRIMARY INPUT TYPE: [genomic / epidemiological / syndromic / clinical / environmental / signals_intelligence / modeling / geospatial / laboratory / hardware_sensor / policy_index / multi_source]
SURVEILLANCE INPUT TYPES: [list all that apply from the 12 types above]
MILITARY/BIODEFENSE FLAG: [Yes / No]
STRENGTHS: [list current strengths]
WEAKNESSES: [list current weaknesses]

CURRENT SUB-SCORES (0-100 each):
  data_integration:    [XX]
  analytics_capability: [XX]
  visualization:        [XX]
  accessibility:        [XX]
  scalability:          [XX]
  documentation:        [XX]
  community_support:    [XX]
  security_compliance:  [XX]
  interoperability:     [XX]
  real_time_capability: [XX]

---

## LAYER DEFINITIONS (5-Layer Architecture)

Assign each platform to exactly ONE layer:

| Layer | Name | Definition |
|-------|------|-----------|
| L1_Surveillance | Surveillance | Primarily collects, aggregates, or reports epidemiological, clinical, syndromic, or environmental data. Includes disease reporting systems, outbreak management, event-based intelligence, wastewater monitoring, environmental sensing, and syndromic surveillance. |
| L2_Genomic | Genomic | Primarily processes, analyzes, or shares genomic/sequence data. Includes bioinformatics pipelines, phylogenetics, AMR detection, pathogen databases, metagenomic analysis, variant tracking, and genomic data sharing repositories. |
| L3_Defense | Defense | A defense/military program, biodefense initiative, threat reduction effort, or CBRN operational system. Includes MCM development, bioforensics, defense research institutes (allied + adversary), and CBRN programs. |
| L4_Hardware | Hardware | A physical detection device, field-deployable sensor, rapid diagnostic instrument, aerosol collector, or CBRN detection system. The platform IS the hardware (not just software that runs on hardware). |
| L5_Policy | Policy | A governance framework, health security index, preparedness assessment, regulatory program, or pandemic funding tracker. Produces assessments, scores, or policy guidance — not operational data. |

---

## CBRN ASSESSMENT (Required for L3_Defense and L4_Hardware platforms)

If this platform is in L3_Defense or L4_Hardware, you MUST answer this section.

### CBRN Classification (pick one):
- **TRUE CBRN OPERATIONAL PLATFORM** — Purpose-built for CBRN incident detection, response, or management
- **CBRN MODULE WITHIN LARGER SUITE** — Has a CBRN-specific component but is part of a broader system
- **ADJACENT ENABLING SYSTEM** — Supports CBRN missions but is not itself a CBRN operational platform
- **NOT CBRN** — No direct CBRN operational function (e.g., pure biodefense R&D, policy, procurement)

### CBRN Functional Tags (select all that apply):
- [ ] Biological threat detection
- [ ] Chemical hazard detection
- [ ] Radiological/nuclear monitoring
- [ ] Plume/dispersion modeling
- [ ] Incident management
- [ ] Sensor integration
- [ ] Warning and reporting (W&R)
- [ ] Decision support / consequence assessment
- [ ] Command and control (C2) interoperability
- [ ] Responder workflow
- [ ] Decontamination planning
- [ ] CBRN forensics / attribution

### CBRN Gate Rule:
Do NOT classify generic public health platforms, single-purpose surveillance databases,
or broad command-and-control systems as CBRN platforms unless they clearly perform
CBRN operational functions. A platform must actively support chemical, biological,
radiological, or nuclear incident detection, response modeling, warning/reporting,
sensor fusion, or responder decision-making to qualify.

---

## REQUIRED OUTPUT: 8 PROFILE FIELDS

Research this platform thoroughly and return EXACTLY these 8 fields.
Each field should be 200-500 characters, factual, specific, and cite real numbers,
dates, names, and organizations. Do NOT invent data. If uncertain, write "unconfirmed."

### 1. OVERVIEW (200-500 chars)
What is this platform? Who created it and when? What is its primary mission?
Include founding year, key people/labs, institutional home, and origin story.

### 2. FUNCTIONAL SCOPE (200-500 chars)
What does it actually do? List specific capabilities, supported pathogens/diseases/hazards/agents,
analysis types, modules, and unique features that distinguish it from competitors.

### 3. TECH STACK (200-500 chars)
What technologies power it? Programming languages, frameworks, databases,
cloud platforms, APIs, data standards (HL7/FHIR/ISO/NATO STANAG/OGC/EDXL, etc.),
and deployment model. Include GitHub repo URL if open-source.

### 4. OPERATOR (200-500 chars)
Who operates and funds it? Organization name, country, department, partnerships.
Include funding sources (grants, government contracts) with dollar amounts if known.

### 5. DATA MODEL (200-500 chars)
How is data structured? Input formats, output formats, key data types,
ontologies/standards used, interoperability with other systems. Include specific
database sizes (number of records/sequences/genomes/sensors/incidents/sites) if known.

### 6. USERS & SCALE (200-500 chars)
Who uses it? How many users/countries/institutions? Deployment scale, citation
counts, download stats, monthly active users, installed sites, or agency adoption.
Include specific numbers.

### 7. ACCESS MODEL (200-500 chars)
How do you access it? Free/paid/freemium? Open-source license type? Registration
required? API access? Data redistribution restrictions? Commercial use allowed?

### 8. ECOSYSTEM POSITION (200-400 chars)
What platforms feed data INTO this one? What platforms consume its outputs?
What are the closest competitors or alternatives? Where does it sit in the
data flow of a national or international surveillance pipeline?

---

## REQUIRED OUTPUT: SCORE REVIEW

Review the current sub-scores listed above. For each dimension, state whether
the score appears: CORRECT, TOO HIGH, or TOO LOW — based on your research.
If adjusting, suggest a revised score and briefly explain why.

| Dimension | Current | Assessment | Suggested | Reason |
|-----------|---------|------------|-----------|--------|
| data_integration | [XX] | CORRECT / TOO HIGH / TOO LOW | [YY] | [brief reason] |
| analytics_capability | [XX] | ... | ... | ... |
| visualization | [XX] | ... | ... | ... |
| accessibility | [XX] | ... | ... | ... |
| scalability | [XX] | ... | ... | ... |
| documentation | [XX] | ... | ... | ... |
| community_support | [XX] | ... | ... | ... |
| security_compliance | [XX] | ... | ... | ... |
| interoperability | [XX] | ... | ... | ... |
| real_time_capability | [XX] | ... | ... | ... |

---

## REQUIRED OUTPUT: REFERENCE MATERIALS

### Key Scientific Publications (3-5)
For each: Author(s), Year, Title, Journal, DOI or URL

### Official Guidelines / Policy Documents (2-3)
Standards, government directives, or international guidelines that reference this platform

### Recent Changes (2024-2026)
Any controversies, major updates, funding changes, governance shifts, or operational changes

### Platform Connections
Data feeds, API integrations, upstream data sources, downstream consumers, and dependencies on other platforms in the ecosystem

---

## REQUIRED OUTPUT: CONFIDENCE ASSESSMENT

Rate overall confidence in this profile:

| Level | Definition |
|-------|-----------|
| **HIGH** | Multiple independent primary sources (official docs, peer-reviewed papers, government reports). All 8 fields well-supported. |
| **MEDIUM** | Mix of primary and secondary sources. Some fields based on vendor documentation or press releases rather than independent verification. |
| **LOW** | Limited publicly available information. Some fields based on inference, OSINT analysis, or single-source reporting. |
| **VERY LOW** | Opaque or denied-access platform. Most fields are assessed/inferred rather than confirmed. Applicable to adversary state programs. |

**Confidence:** [HIGH / MEDIUM / LOW / VERY LOW]
**Source Gaps:** [Describe what information was NOT available and what would be needed to raise confidence]

---

## OUTPUT QUALITY RULES

1. Be precise and skeptical.
2. Prefer official documentation, peer-reviewed literature, government sources, and vendor technical documents.
3. Distinguish clearly between verified facts and vendor claims.
4. If a metric, funding figure, or technical detail is not publicly confirmed, write "unconfirmed."
5. Do not hallucinate numbers, dates, user counts, or funding amounts.
6. For CBRN platforms: always complete the CBRN Assessment section.
7. For adversary/opaque platforms: always assign LOW or VERY LOW confidence and explain gaps.
8. Cross-reference against known platforms in the ecosystem (Nextstrain, GISAID, NCBI, DHIS2, etc.) to position this platform accurately.
