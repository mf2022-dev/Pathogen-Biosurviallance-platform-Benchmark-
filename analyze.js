const fs = require('fs');
const html = fs.readFileSync('benchmark.html','utf8');
const match = html.match(/const PLATFORMS = \[([\s\S]*?)\];/);
if (!match) { console.log('No match'); process.exit(1); }
eval('var PLATFORMS = [' + match[1] + '];');

const cats = {};
PLATFORMS.forEach(p => {
  if (!cats[p.c]) cats[p.c] = [];
  cats[p.c].push({name: p.n, score: p.s});
});

console.log('=== TOTAL PLATFORMS:', PLATFORMS.length);
console.log('=== UNIQUE CATEGORIES:', Object.keys(cats).length);
console.log('');

const sorted = Object.entries(cats).sort((a,b) => b[1].length - a[1].length);
sorted.forEach(([cat, platforms]) => {
  console.log(cat + ' (' + platforms.length + '):');
  platforms.forEach(p => console.log('  - ' + p.name + ': ' + p.score));
});

const scores = PLATFORMS.map(p => p.s);
console.log('');
console.log('=== SCORE STATS ===');
console.log('Min:', Math.min(...scores));
console.log('Max:', Math.max(...scores));
console.log('Avg:', (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1));
console.log('Excellent (90+):', scores.filter(s => s >= 90).length);
console.log('Good (80-89):', scores.filter(s => s >= 80 && s < 90).length);
console.log('Adequate (70-79):', scores.filter(s => s >= 70 && s < 80).length);
console.log('Developing (<70):', scores.filter(s => s < 70).length);

// Check for issues
console.log('');
console.log('=== POTENTIAL ISSUES ===');

// Duplicate names
const names = PLATFORMS.map(p => p.n);
const dupes = names.filter((n, i) => names.indexOf(n) !== i);
if (dupes.length) console.log('Duplicate names:', dupes);
else console.log('No duplicate names');

// Overlapping categories (similar names)
console.log('');
console.log('=== CATEGORY GROUPING ===');
const catGroups = {
  'DARPA Programs': [],
  'US DoD/DHS/IC': [],
  'Defense Industry Hardware': [],
  'International Military': [],
  'Surveillance & Epidemiology': [],
  'Genomic/Bioinformatics': [],
  'AMR Specific': [],
  'Wastewater': [],
  'AI/ML Intelligence': [],
  'Assessment/Regulatory': [],
  'Regional/Country': [],
  'Other': []
};

PLATFORMS.forEach(p => {
  const n = p.n.toLowerCase();
  const c = p.c.toLowerCase();
  if (n.includes('darpa')) catGroups['DARPA Programs'].push(p.n);
  else if (c.includes('military') || c.includes('defense') || c.includes('defence') || c.includes('dod') || c.includes('dhs') || n.includes('usamriid') || n.includes('bsve') || n.includes('geis') || n.includes('jbpds') || n.includes('dtra') || n.includes('nbic') || n.includes('biowatch') || n.includes('nbacc') || n.includes('iarpa') || n.includes('bioshield') || n.includes('jpeo') || n.includes('jupitr') || n.includes('embd') || n.includes('avcad')) catGroups['US DoD/DHS/IC'].push(p.n);
  else if (c.includes('detection') || c.includes('sensor') || n.includes('biofire') || n.includes('battelle') || n.includes('teledyne') || n.includes('smiths') || n.includes('bertin') || n.includes('rheinmetall') || n.includes('bruker') || n.includes('chemring')) catGroups['Defense Industry Hardware'].push(p.n);
  else if (n.includes('dstl') || n.includes('dga') || n.includes('bundeswehr') || n.includes('nato') || n.includes('hera') || n.includes('iibr') || n.includes('vector') || n.includes('russia 48') || n.includes('amms') || n.includes('cisdcp') || n.includes('korea-us') || n.includes('niid') || n.includes('dstg') || n.includes('drdc') || n.includes('drdo') || n.includes('agari') || n.includes('predict') || n.includes('north korea') || n.includes('kida')) catGroups['International Military'].push(p.n);
  else if (c.includes('amr') || n.includes('amr') || n.includes('card') || n.includes('resfinder') || n.includes('whonet')) catGroups['AMR Specific'].push(p.n);
  else if (c.includes('wastewater') || n.includes('wastewater') || n.includes('biobot') || n.includes('nwss')) catGroups['Wastewater'].push(p.n);
  else if (c.includes('ai') || c.includes('intelligence') || c.includes('forecast') || n.includes('bluedot') || n.includes('airfinity') || n.includes('healthmap') || n.includes('beacon') || n.includes('epiwatch') || n.includes('ginkgo')) catGroups['AI/ML Intelligence'].push(p.n);
  else if (c.includes('assessment') || c.includes('regulatory') || c.includes('funding') || n.includes('ghs') || n.includes('jee') || n.includes('select agent') || n.includes('pandemic pact')) catGroups['Assessment/Regulatory'].push(p.n);
  else if (c.includes('genomic') || c.includes('phylo') || c.includes('bioinformatics') || c.includes('metagenomic') || c.includes('sequence')) catGroups['Genomic/Bioinformatics'].push(p.n);
  else if (c.includes('surveillance') || c.includes('epidemiol') || c.includes('outbreak') || c.includes('health information')) catGroups['Surveillance & Epidemiology'].push(p.n);
  else catGroups['Other'].push(p.n);
});

Object.entries(catGroups).forEach(([group, items]) => {
  if (items.length) {
    console.log(group + ' (' + items.length + '):', items.join(', '));
  }
});
