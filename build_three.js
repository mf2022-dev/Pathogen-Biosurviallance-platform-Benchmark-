const fs = require('fs');
const html = fs.readFileSync('benchmark.html', 'utf8');
const match = html.match(/const PLATFORMS = \[([\s\S]*?)\];/);
eval('var ALL = [' + match[1] + '];');

// ============================================================
// CLASSIFICATION ENGINE
// ============================================================

// Option A: Operational biosurveillance & biodefense systems
// Criteria: Must be an operational system/platform that actively detects, monitors, or responds
// Exclude: R packages, templates, pure research programs, hardware-only, policy docs, classified-only
function isOptionA(p) {
  const n = p.n.toLowerCase();
  const c = p.c.toLowerCase();
  const d = (p.d || '').toLowerCase();

  // EXCLUDE: R packages and CLI-only bioinformatics tools
  const excludeTools = ['epinow2','epivarse','beast2','metaphlan','kraken2','bactopia','amrfinderplus',
    'resfinder','snvphyl','grapetree','pangolin','nextclade','covariants','civet','sitrep',
    'taxonium / treenome','dashboard template','qgis health','satscan'];
  if (excludeTools.some(t => n.includes(t))) return false;

  // EXCLUDE: Pure DARPA research programs (not operational)
  const excludeDarpa = ['darpa echo','darpa rta','darpa now','darpa intercept','darpa safe genes',
    'darpa adept','darpa panacea'];
  if (excludeDarpa.some(t => n.includes(t))) return false;

  // EXCLUDE: Hardware-only sensors (no software platform)
  const excludeHardware = ['teledyne flir','bertin environics','rheinmetall nbc','bruker cbrne',
    'battelle rebs','avcad'];
  if (excludeHardware.some(t => n.includes(t))) return false;

  // EXCLUDE: Classified-only with no operational platform
  const excludeClassified = ['north korea','russia 48th','iarpa b24ic'];
  if (excludeClassified.some(t => n.includes(t))) return false;

  // EXCLUDE: Policy/assessment frameworks (not operational surveillance)
  const excludePolicy = ['ghs index','jee (who','federal select agent','pandemic pact'];
  if (excludePolicy.some(t => n.includes(t))) return false;

  // EXCLUDE: Templates and general infra
  if (n === 'dashboard template' || n === 'arvados') return false;

  // EXCLUDE: Too generic / not surveillance specific
  const excludeGeneric = ['openmrs','openhim','canpath','resaolab','medstar','abis',
    'disease.sh','galaxy project','terra','seqera','one cdp','project tycho',
    'epiverse','theiagen phb','phoenix','taxonium'];
  if (excludeGeneric.some(t => n.includes(t))) return false;
  if (n === 'taxonium') return false;

  return true;
}

// Option B: ALL 169 platforms, but classified into 5 layers
function classifyLayer(p) {
  const n = p.n.toLowerCase();
  const c = p.c.toLowerCase();

  // Layer 1: Active Surveillance Platforms
  if (['sormas','dhis2','biosense','nwss','nndss','epitrax','go.data','eios','ecdc hub',
    'flunet','hesn','hhis','tawakkalna','ewarn','geis','biowatch','nbic','bsve',
    'cisdcp','korea-us joint','wahis','empres-i','arbonet','healthmap','promed',
    'epiwatch','beacon','bluedot','airfinity','ginkgo','eios 2.0','eidss',
    'bioportal','africa cdc ares','pulseNet','glews+','ceirr','wastewatersc',
    'biobot','nwss','disease.sh','epicollect','sap','saudi amr surv',
    'glass (who)','whonet','genometrakr','reportstream','bioSense',
    'solu','outbreak.info','jupitr','africa cdc agari'].some(t => n.includes(t)) ||
    c.includes('surveillance') || c.includes('early warning') || c.includes('outbreak') ||
    c.includes('epidemic intelligence') || c.includes('disease') && !c.includes('historical'))
    return 'L1_Surveillance';

  // Layer 3: Defense & Military Programs
  if (n.includes('darpa') || n.includes('usamriid') || n.includes('dtra') || n.includes('jpeo') ||
    n.includes('f-fast') || n.includes('nbacc') || n.includes('iarpa') || n.includes('bioshield') ||
    n.includes('dstl') || n.includes('dga') || n.includes('bundeswehr') || n.includes('nato') ||
    n.includes('eu hera') || n.includes('iibr') || n.includes('vector') || n.includes('russia 48') ||
    n.includes('amms') || n.includes('dstg') || n.includes('drdc') || n.includes('drdo') ||
    n.includes('predict') || n.includes('north korea') || n.includes('kida') ||
    n.includes('embd') || n.includes('avcad') || n.includes('sigma+') || n.includes('epihiper') ||
    n.includes('dora') || n.includes('securebio'))
    return 'L3_Defense';

  // Layer 4: Detection Hardware
  if (n.includes('biofire') || n.includes('battelle') || n.includes('teledyne') ||
    n.includes('smiths detection') || n.includes('bertin') || n.includes('rheinmetall') ||
    n.includes('bruker') || n.includes('chemring') || n.includes('jbpds'))
    return 'L4_Hardware';

  // Layer 5: Policy & Assessment
  if (n.includes('ghs index') || n.includes('jee') || n.includes('select agent') ||
    n.includes('pandemic pact') || n.includes('ppx') || c.includes('assessment') ||
    c.includes('regulatory') || c.includes('funding'))
    return 'L5_Policy';

  // Layer 2: Genomic & Analytical Tools (everything else)
  return 'L2_Genomic';
}

// Option C: Usable software platforms only
function isOptionC(p) {
  const n = p.n.toLowerCase();
  const c = p.c.toLowerCase();

  // Must be software you can access/use (web platform, downloadable tool, or open API)
  // EXCLUDE all military, defense, classified
  const excludeMilitary = ['darpa','usamriid','bsve','geis','f-fast','jbpds','dtra','nbic',
    'biowatch','nbacc','iarpa','bioshield','biofire defense','battelle rebs','teledyne flir',
    'smiths detection','bertin environics','rheinmetall','bruker cbrne','dora','epihiper',
    'dstl','dga ma','bundeswehr','nato jcbrn','eu hera','iibr','vector (','russia 48',
    'china amms','china cisdcp','korea-us joint','japan niid','australia dstg','drdc suffield',
    'india drdo','africa cdc agari','jpeo-cbrnd','usaid predict','north korea','securebio',
    'sigma+','jupitr','embd','avcad','chemring','kida','panacea'];
  if (excludeMilitary.some(t => n.includes(t))) return false;

  // EXCLUDE policy/assessment
  const excludePolicy = ['ghs index','jee (who','federal select agent','pandemic pact','ppx'];
  if (excludePolicy.some(t => n.includes(t))) return false;

  // EXCLUDE non-software (templates, cohorts, standards bodies)
  const excludeNonSw = ['dashboard template','canpath','pha4ge','openhim','medstar','abis',
    'resaolab','openmrs','project tycho'];
  if (excludeNonSw.some(t => n.includes(t))) return false;

  // EXCLUDE government-only with no public access
  const excludeGovOnly = ['hesn','hhis / hews','tawakkalna','kaust pgl','saudi amr',
    'ewarn','eios 2.0'];
  if (excludeGovOnly.some(t => n.includes(t))) return false;

  return true;
}

// ============================================================
// BUILD CLASSIFICATION
// ============================================================
const optA = ALL.filter(isOptionA);
const optB_layers = {};
ALL.forEach(p => {
  const layer = classifyLayer(p);
  if (!optB_layers[layer]) optB_layers[layer] = [];
  optB_layers[layer].push(p);
});
const optC = ALL.filter(isOptionC);

console.log('=== OPTION A: Global Biosurveillance & Biodefense ===');
console.log('Total:', optA.length);
optA.sort((a,b) => b.s - a.s);
optA.forEach((p,i) => console.log(`  ${i+1}. ${p.n} (${p.s}) — ${p.c}`));

console.log('\n=== OPTION B: Full Spectrum (5 Layers) ===');
console.log('Total:', ALL.length);
const layerNames = {
  L1_Surveillance: 'Layer 1: Active Surveillance Systems',
  L2_Genomic: 'Layer 2: Genomic & Analytical Tools',
  L3_Defense: 'Layer 3: Defense & Military Programs',
  L4_Hardware: 'Layer 4: Detection Hardware',
  L5_Policy: 'Layer 5: Policy & Assessment'
};
Object.entries(optB_layers).sort().forEach(([layer, platforms]) => {
  platforms.sort((a,b) => b.s - a.s);
  console.log(`\n  ${layerNames[layer] || layer} (${platforms.length}):`);
  platforms.forEach((p,i) => console.log(`    ${i+1}. ${p.n} (${p.s})`));
});

console.log('\n=== OPTION C: Software Platforms Only ===');
console.log('Total:', optC.length);
optC.sort((a,b) => b.s - a.s);
optC.forEach((p,i) => console.log(`  ${i+1}. ${p.n} (${p.s}) — ${p.c}`));

// Write JSON files for the builder
fs.writeFileSync('optA.json', JSON.stringify(optA, null, 2));
fs.writeFileSync('optB.json', JSON.stringify({layers: optB_layers, all: ALL}, null, 2));
fs.writeFileSync('optC.json', JSON.stringify(optC, null, 2));
console.log('\n=== JSON files written ===');
