# BioR — Biosurveillance Intelligence for Operational Readiness

## Project Plan v1.0 | Locked 2026-03-15

---

## 1. Product Identity

| Field | Value |
|-------|-------|
| **Name** | BioR |
| **Full Title** | Biosurveillance Intelligence for Operational Readiness |
| **Acronym Breakdown** | **B**iosurveillance **I**ntelligence for **O**perational **R**eadiness |
| **Version** | Built on PSEF v3.0.0 canonical baseline |
| **Baseline** | 169 Tier 1 platforms, 1,690 data points (frozen 2026-03-14) |
| **Git Tag** | `baseline-v3.0.0-169` |

---

## 2. Strategic Purpose

BioR answers three fundamental questions:

1. **What exists?** — Global Threat Landscape Map
2. **What is missing?** — Capability Gap Analysis
3. **What should connect?** — Interoperability Assessment

### This product IS:
- A forward-looking strategic intelligence product (3-10 year horizon)
- Prescriptive for allied nations, descriptive for adversary states
- Designed for senior military leadership, public health directors, intel analysts, and policy makers
- A living system with continuous updates and event-triggered snapshots

### This product is NOT:
- A software buyer's guide
- A technical benchmarking tool for engineers
- An academic paper
- A current-state-only snapshot

---

## 3. Audience

| Audience | Role | What They Need |
|----------|------|----------------|
| Senior military/defense leadership | Generals, defense ministers, NSC | 30-second executive dashboard, threat posture |
| Public health agency directors | CDC, WHO, ECDC-level | Capability gaps, interoperability barriers |
| Intelligence community analysts | Biodefense intel officers | Adversary assessments, confidence-weighted scoring |
| Policy makers & legislators | Parliament, congress, funders | Investment roadmap, phased recommendations |

---

## 4. Classification & Distribution

| Level | Description |
|-------|-------------|
| **Primary** | Open but authoritative — publicly accessible, positioned as expert reference (comparable to SIPRI, GHS Index) |
| **Secondary** | Sensitive but unclassified (SBU) — restricted distribution for adversary-specific assessments |

---

## 5. Phased Delivery Plan

### Phase 1 — Core (Build Now)

| # | Deliverable | Description | Priority |
|---|-------------|-------------|----------|
| J | **Executive Summary Dashboard** | Single-page visual for 30-second leadership briefing | CRITICAL |
| A | **Global Threat Landscape Map** | World map with NATO 5-tier country classification | CRITICAL |
| B | **Capability Gap Analysis** | 15 capability domains assessed across 8 core regions | CRITICAL |
| C | **Interoperability Assessment** | 10 interoperability types mapped across allied systems | HIGH |
| I | **Platform Comparison Engine** | Enhanced interactive tool (already built, needs upgrade) | HIGH |

### Phase 2 — Expand (Build Next)

| # | Deliverable | Description | Dependency |
|---|-------------|-------------|------------|
| E | **Strategic Investment Roadmap** | Phased: Quick wins (0-1yr) / Build (1-3yr) / Transform (3-10yr) | Requires Phase 1 gap data |
| G | **Allied Biodefense Posture Review** | Five Eyes, NATO, Quad, EU strengths & vulnerabilities | Requires Phase 1 threat map |
| D | **Technology Readiness Scorecard** | TRL + ORL dual-axis + custom 6-tier biodefense scale | Requires Phase 1 platform data |

### Phase 3 — Specialize (Build Later)

| # | Deliverable | Description | Dependency |
|---|-------------|-------------|------------|
| F | **Adversary Capability Dossier** | Russia, China, DPRK, Iran deep dive + 5 assessed states | Requires Phase 1+2 |
| H | **Regional Recommendation Briefs** | 8 core + 12 derivative region briefs | Requires all prior phases |

---

## 6. Evaluation Framework

### 14 Dimensions (10 current + 4 new)

#### Current Dimensions (retained)

| # | Dimension | Code | Weight | Priority Tier |
|---|-----------|------|--------|--------------|
| 1 | Data Integration | DI | 12% | YOUR TOP 6 |
| 2 | Analytics Capability | AC | 12% | YOUR TOP 6 |
| 3 | Visualization | VZ | 10% | YOUR TOP 6 |
| 4 | Accessibility | AX | 10% | YOUR TOP 6 |
| 5 | Scalability | SC | 10% | YOUR TOP 6 |
| 6 | Real-Time Capability | RT | 8% | YOUR TOP 6 |
| 7 | Security & Compliance | SE | 10% | Supporting |
| 8 | Interoperability | IO | 8% | Supporting |
| 9 | Documentation | DC | 5% | Supporting |
| 10 | Community Support | CS | 5% | Supporting |

#### New Strategic Dimensions

| # | Dimension | Code | Weight | Rationale |
|---|-----------|------|--------|-----------|
| 11 | Technology Maturity (TRL) | TM | 3% | Feeds Readiness Scorecard |
| 12 | Crisis Surge Capacity | SG | 3% | Critical for 3-10yr forward-looking horizon |
| 13 | Allied Interoperability Score | AI | 2% | Feeds Interoperability Assessment |
| 14 | Dual-Use Risk | DR | 2% | Essential for adversary analysis & biosecurity |

**Total: 100%**

#### Deferred Dimensions (Phase 2/3)

| Dimension | Reason for Deferral |
|-----------|-------------------|
| Deployment Speed | Derivable from TRL |
| Cost / Total Cost of Ownership | Requires procurement data |
| Workforce Burden | Requires field survey data |
| Supply Chain Dependency | Deep specialist analysis |
| Political / Export Control Risk | Legal research intensive |
| Autonomous Operation Capability | Subset of Accessibility + Crisis Surge |
| Bioforensic Attribution Support | Phase 3 adversary dossier |
| Resilience / Redundancy | Subset of Scalability + Crisis Surge |

---

## 7. Platform Universe

### Tier 1 — Fully Evaluated (169 platforms)

The canonical baseline frozen on 2026-03-14. All 169 platforms scored across 10 dimensions (to be expanded to 14).

Reference: `reference_baseline/CANONICAL_169_PLATFORMS.json`

### Tier 2 — Assessed / Placeholder (to be added)

Platforms identified but not fully scored. Each gets:
- Qualitative narrative assessment
- Estimated capability indicators
- Confidence level (High / Medium / Low / Very Low)

**Known Tier 2 additions needed
| Region | Platforms to Add |
|--------|-----------------|
| Iran | National biodefense program (assessed) |
| Taiwan | Taiwan CDC + defense bio programs |
| ASEAN | Regional disease surveillance networks |
| Latin America | PAHO, Brazil Fiocruz |
| Nordic/Baltic | Finland, Sweden bio programs |
| Eastern Europe | NATO frontier state capabilities |
| Central Asia | Post-Soviet BTRP legacy sites |
| Pacific Islands | Limited infrastructure assessment |

---

## 8. Geographic Scope

### Core Regions (8 — dedicated analysis)

| # | Region | Key Entities | Tier |
|---|--------|-------------|------|
| 1 | United States | DARPA, DoD, DHS, CDC, BARDA | NATO Tier 1 |
| 2 | Five Eyes (combined) | US, UK, Canada, Australia, NZ | NATO Tier 1 |
| 3 | NATO / EU Europe | France, Germany, EU HERA, NATO COE | NATO Tier 1-2 |
| 4 | Israel | IIBR, IDF Medical Corps | NATO Tier 1 |
| 5 | East Asia Allies | Japan NIID/JSDF, Korea KIDA/K-CDC | NATO Tier 2 |
| 6 | Russia + China (adversary) | VECTOR, 48th CBRN, AMMS, CISDCP | Adversary analysis |
| 7 | Africa (Pan-continental) | Africa CDC, AGARI, RESAOLAB | NATO Tier 3-4 |
| 8 | Middle East / Gulf | Saudi Arabia, UAE, Qatar | NATO Tier 2-3 |

### Derivative Regions (12 — brief format, generated from core analysis)

India, Australia/NZ, ASEAN, Latin America, Nordic/Baltic, Eastern Europe, Central Asia, North Korea/Iran, Taiwan, Pacific Islands, North Africa/Sahel, Non-state actors

---

## 9. Country Classification Model

**NATO-style 5-tier CBRN classification:**

| Tier | Label | Description | Example Countries |
|------|-------|-------------|-------------------|
| Tier 1 | **Full Spectrum** | Advanced multi-domain biodefense, offensive awareness, global reach | US, UK, Israel |
| Tier 2 | **Significant** | Strong capabilities in most domains, some gaps | France, Germany, Japan, South Korea, Australia, Canada |
| Tier 3 | **Emerging** | Growing investment, partial capabilities, regional focus | Saudi Arabia, India, Brazil, South Africa |
| Tier 4 | **Minimal** | Basic public health surveillance, limited biodefense-specific capability | Most African nations, Pacific Islands, Central Asia |
| Tier 5 | **Unknown / Denied** | Opaque, classified, or denied access to assessment | North Korea, Iran (partially), Myanmar |

**Adversary overlay:** Russia and China assessed separately with dual classification (capability tier + intent assessment)

---

## 10. Adversary Analysis Scope

### Full Analysis (4 states)

| State | Current Platforms | Scoring Method |
|-------|------------------|---------------|
| Russia | VECTOR, 48th CBRN Institute | OSINT + expert assessment + comparative inference + confidence-weighted |
| China | AMMS, CISDCP | OSINT + expert assessment + comparative inference + confidence-weighted |
| North Korea | Assessed bio program | OSINT + comparative inference + confidence-weighted (Low confidence) |
| Iran | To be added as Tier 2 | OSINT + comparative inference + confidence-weighted (Low confidence) |

### Narrative Assessment Only (5)

| State/Actor | Assessment Type |
|-------------|----------------|
| Syria | Qualitative paragraph — CBRN history, current status |
| Pakistan | Qualitative paragraph — dual-use bio capability |
| Myanmar | Qualitative paragraph — emerging biosecurity concern |
| Cuba | Qualitative paragraph — historical program allegations |
| Non-state actors | Qualitative paragraph — bioterrorism threat landscape |

---

## 11. Alliance Frameworks

### Core (6 — dedicated assessment)

| # | Framework | Members | Focus |
|---|-----------|---------|-------|
| 1 | Five Eyes (FVEY) | US, UK, CA, AU, NZ | Intel sharing, bio cooperation |
| 2 | NATO CBRN | 31 states | JCBRN COE, STANAGs, collective defense |
| 3 | EU / HERA | 27 states | Civilian biodefense, MCM procurement |
| 4 | Quad | US, JP, IN, AU | Indo-Pacific health security |
| 5 | WHO / IHR | 196 states | Global baseline, JEE, GHSA |
| 6 | Africa CDC / AU | 55 states | Continental genomic surveillance, AGARI |

### Deferred to Phase 2 (7)

AUKUS, US-Korea bilateral, US-Israel bilateral, ASEAN Health, GCC, BRICS Health, other US bilateral arrangements

---

## 12. Capability Gap Domains (15)

All 15 domains assessed across 8 core regions:

| # | Domain | Key Question |
|---|--------|-------------|
| 1 | Early warning & event detection | Can we detect a novel outbreak within 24 hours? |
| 2 | Genomic sequencing & pathogen ID | Can we sequence an unknown pathogen in-field? |
| 3 | Real-time data sharing across borders | Can allies share surveillance data during a crisis? |
| 4 | MCM development speed | Pathogen ID to vaccine/therapeutic in 60-100 days? |
| 5 | Biological agent detection | Can we detect deliberate release in urban environment? |
| 6 | Laboratory network capacity | Enough BSL-3/4 labs in the right locations? |
| 7 | Wastewater & environmental surveillance | Community spread detection before clinical cases? |
| 8 | AMR surveillance & response | Real-time global antimicrobial resistance tracking? |
| 9 | AI/ML forecasting & prediction | Can we predict next spillover or pandemic trajectory? |
| 10 | Supply chain & logistics | MCM manufacturing and distribution at global scale? |
| 11 | Biosecurity & dual-use oversight | Detect misuse of synthetic biology / gene editing? |
| 12 | Workforce & training readiness | Enough trained biodefense personnel globally? |
| 13 | Communication & public health messaging | Coordinated risk communication across nations? |
| 14 | One Health integration | Human, animal, environmental systems connected? |
| 15 | Bioforensics & attribution | Natural vs. accidental vs. deliberate determination? |

---

## 13. Interoperability Assessment Scope (10 types)

| # | Type | Assessment Focus |
|---|------|-----------------|
| 1 | Data format standards | HL7 FHIR, LOINC, SNOMED, ISO 11179 adoption |
| 2 | Real-time API connectivity | Live API connections between platforms |
| 3 | Genomic data sharing protocols | GISAID, Nextstrain, NCBI data flow |
| 4 | Classification level bridging | Classified military to unclassified public health |
| 5 | Cross-border legal frameworks | DSAs, IHR, GDPR compliance |
| 6 | Language & terminology harmonization | Multi-language alert ingestion capability |
| 7 | Hardware-to-software pipeline | Field devices to surveillance dashboards |
| 8 | One Health data integration | Human, animal, environmental system connections |
| 9 | Allied coalition interoperability | Five Eyes / NATO joint operation bio sharing |
| 10 | Civilian-military data bridge | DoD to CDC / military to civilian PH systems |

---

## 14. Executive Dashboard Elements (11)

Single-page visual for 30-second leadership consumption:

| # | Element | Description |
|---|---------|-------------|
| 1 | Global threat heat map | World map color-coded by NATO 5-tier |
| 2 | Top 10 / Bottom 10 | Best and worst performers at a glance |
| 3 | Critical gap alerts | Red/amber/green for most dangerous gaps |
| 4 | Allied vs. adversary comparison | Side-by-side capability bar chart |
| 5 | Readiness stoplight chart | TRL/ORL green/amber/red by program |
| 6 | Interoperability network diagram | Which allied systems can/cannot connect |
| 7 | Investment priority matrix | 2x2 impact vs. cost grid |
| 8 | Trend arrows | Capability trajectory by region |
| 9 | Key numbers strip | 169 platforms, 30+ countries, X gaps, Y recommendations |
| 10 | 30-second narrative | 3-4 sentence summary of top finding |
| 11 | Phase indicators | Current phase status of BioR deliverables |

---

## 15. Delivery Formats

| Format | Audience | Description |
|--------|----------|-------------|
| Interactive web dashboard | All | Primary interface — tabs, filters, drill-down |
| Standalone HTML pages | All | Each deliverable as dedicated page |
| Downloadable PDF | Leadership, Policy | Professional formatted offline reports |
| Interactive + Static hybrid | All | Web for maps/comparisons, PDF for narratives |
| Slide deck / briefing | Leadership | PowerPoint-style for in-person briefings |
| Data export (JSON/CSV/Excel) | Analysts | Raw data behind every deliverable |
| API endpoint | Technical integrators | Programmatic data access |

---

## 16. Update Model

| Trigger | Action |
|---------|--------|
| **Quarterly milestone** | Formal snapshot, version increment, scores refreshed |
| **Major event** | Pandemic declaration, treaty change, adversary capability shift, major platform launch |
| **Continuous** | Living data — new intel integrated as it emerges |
| **Annual** | Full comprehensive review, new regional briefs, dimension weight reassessment |

---

## 17. Data Foundation

| Asset | Location | Status |
|-------|----------|--------|
| Canonical 169 platforms (Tier 1) | `reference_baseline/CANONICAL_169_PLATFORMS.json` | FROZEN |
| Canonical CSV export | `reference_baseline/CANONICAL_169_PLATFORMS.csv` | FROZEN |
| Baseline manifest | `reference_baseline/REFERENCE_BASELINE.md` | FROZEN |
| Option A scope (114) | `optA.json` + `benchmark_a.html` | ACTIVE |
| Option B scope (169) | `optB.json` + `benchmark_b.html` | ACTIVE |
| Option C scope (93) | `optC.json` + `benchmark_c.html` | ACTIVE |
| Git tag | `baseline-v3.0.0-169` | PERMANENT |

---

## 18. Project Timeline

| Phase | Deliverables | Estimated Scope |
|-------|-------------|----------------|
| **Phase 1** | Executive Dashboard, Threat Map, Gap Analysis, Interop Assessment, Comparison Engine | Core build |
| **Phase 2** | Investment Roadmap, Allied Posture Review, Readiness Scorecard | Expansion |
| **Phase 3** | Adversary Dossier, 20 Regional Briefs | Specialization |

---

*BioR — Biosurveillance Intelligence for Operational Readiness*
*Project Plan v1.0 | Locked 2026-03-15*
*Built on PSEF v3.0.0 Canonical Baseline: 169 Platforms | 1,690 Data Points*
