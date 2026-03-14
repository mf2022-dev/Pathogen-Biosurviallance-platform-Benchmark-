const fs = require('fs');

// Read the original benchmark as template
const template = fs.readFileSync('benchmark.html', 'utf8');

// Read classified data
const optA_data = JSON.parse(fs.readFileSync('optA.json', 'utf8'));
const optB_data = JSON.parse(fs.readFileSync('optB.json', 'utf8'));
const optC_data = JSON.parse(fs.readFileSync('optC.json', 'utf8'));

function rerank(platforms) {
  platforms.sort((a, b) => b.s - a.s);
  platforms.forEach((p, i) => { p.r = i + 1; });
  return platforms;
}

function platformToJS(p) {
  const sc = Object.entries(p.sc).map(([k,v]) => `${k}:${v}`).join(',');
  const st = (p.st||[]).map(s => `"${s.replace(/"/g,'\\"')}"`).join(',');
  const wk = (p.wk||[]).map(w => `"${w.replace(/"/g,'\\"')}"`).join(',');
  const desc = p.d ? `d:"${(p.d||'').replace(/"/g,'\\"')}",` : '';
  return `    {r:${p.r},n:"${p.n}",u:"${p.u}",s:${p.s},c:"${p.c}",${desc}sc:{${sc}},st:[${st}],wk:[${wk}]}`;
}

function buildBenchmark(config) {
  let html = template;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${config.title}</title>`
  );

  // Replace nav brand
  html = html.replace(
    /PSEF v3\.0\.0/g,
    config.navBrand
  );

  // Replace hero
  html = html.replace(
    /Interactive Benchmark Dashboard/,
    config.heroBadge
  );
  html = html.replace(
    /<h1 class="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">Platform Benchmark<\/h1>/,
    `<h1 class="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">${config.heroTitle}</h1>`
  );
  html = html.replace(
    /Compare, analyze, and benchmark 169 pathogen surveillance & biodefense platforms across 10 evaluation dimensions with interactive visualizations\./,
    config.heroDesc
  );

  // Replace stats
  html = html.replace(
    /<div class="text-3xl font-extrabold">169<\/div>\s*<div class="text-xs opacity-80">Platforms<\/div>/,
    `<div class="text-3xl font-extrabold">${config.count}</div>\n                    <div class="text-xs opacity-80">Platforms</div>`
  );
  html = html.replace(
    /<div class="text-3xl font-extrabold">1690<\/div>\s*<div class="text-xs opacity-80">Data Points<\/div>/,
    `<div class="text-3xl font-extrabold">${config.count * 10}</div>\n                    <div class="text-xs opacity-80">Data Points</div>`
  );

  // Replace 4th stat box
  html = html.replace(
    /<div class="text-3xl font-extrabold">4<\/div>\s*<div class="text-xs opacity-80">Standards<\/div>/,
    `<div class="text-3xl font-extrabold">${config.fourthStat}</div>\n                    <div class="text-xs opacity-80">${config.fourthLabel}</div>`
  );

  // Replace PLATFORMS array
  const platformsJS = config.platforms.map(platformToJS).join(',\n');
  html = html.replace(
    /const PLATFORMS = \[[\s\S]*?\];/,
    `const PLATFORMS = [\n${platformsJS}\n];`
  );

  // Replace rankings header
  html = html.replace(
    /Full Platform Rankings/,
    config.rankingsTitle
  );

  // Add back link to scope selector
  html = html.replace(
    /<a href="index\.html" class="px-3 py-2 rounded hover:bg-white\/10 transition">Home<\/a>/,
    `<a href="index.html" class="px-3 py-2 rounded hover:bg-white/10 transition">Home</a>
                <a href="scope.html" class="px-3 py-2 rounded hover:bg-white/10 transition text-cyan-300"><i class="fas fa-microscope mr-1"></i>Scopes</a>`
  );

  return html;
}

// ============================================================
// OPTION A: Global Biosurveillance & Biodefense
// ============================================================
const optA_platforms = rerank(optA_data);
const optA_html = buildBenchmark({
  title: 'Option A — Global Biosurveillance & Biodefense Platforms',
  navBrand: 'PSEF — Scope A',
  heroBadge: 'Scope A: Operational Biosurveillance',
  heroTitle: 'Global Biosurveillance & Biodefense',
  heroDesc: `${optA_platforms.length} operational platforms that actively detect, monitor, or respond to biological threats — civilian, military, and defense sectors worldwide. Excludes R packages, templates, pure research, hardware-only sensors, and policy frameworks.`,
  count: optA_platforms.length,
  fourthStat: '8',
  fourthLabel: 'Sectors',
  rankingsTitle: 'Full Operational Platform Rankings',
  platforms: optA_platforms
});
fs.writeFileSync('benchmark_a.html', optA_html);
console.log(`Option A: ${optA_platforms.length} platforms → benchmark_a.html`);

// ============================================================
// OPTION B: Full Spectrum (5 Layers)
// ============================================================
// For Option B, we keep all platforms but add a layer tag
const layerMap = {
  L1_Surveillance: 'Surveillance',
  L2_Genomic: 'Genomic Tools',
  L3_Defense: 'Defense',
  L4_Hardware: 'Hardware',
  L5_Policy: 'Policy'
};

const optB_all = [];
Object.entries(optB_data.layers).forEach(([layer, platforms]) => {
  platforms.forEach(p => {
    p._layer = layerMap[layer] || layer;
    // Prefix category with layer tag
    p.c = `[${p._layer}] ${p.c}`;
    optB_all.push(p);
  });
});
const optB_platforms = rerank(optB_all);

const layerCounts = {};
optB_all.forEach(p => {
  layerCounts[p._layer] = (layerCounts[p._layer] || 0) + 1;
});

const optB_html = buildBenchmark({
  title: 'Option B — Full Spectrum Biological Threat Intelligence',
  navBrand: 'PSEF — Scope B',
  heroBadge: 'Scope B: Full Spectrum',
  heroTitle: 'Full Spectrum Biological Threat Intelligence',
  heroDesc: `All ${optB_platforms.length} platforms organized into 5 scored layers: Surveillance (${layerCounts['Surveillance']||0}), Genomic Tools (${layerCounts['Genomic Tools']||0}), Defense Programs (${layerCounts['Defense']||0}), Detection Hardware (${layerCounts['Hardware']||0}), Policy & Assessment (${layerCounts['Policy']||0}). Each layer scored on criteria appropriate to its domain.`,
  count: optB_platforms.length,
  fourthStat: '5',
  fourthLabel: 'Layers',
  rankingsTitle: 'Full Spectrum Rankings (All 5 Layers)',
  platforms: optB_platforms
});
fs.writeFileSync('benchmark_b.html', optB_html);
console.log(`Option B: ${optB_platforms.length} platforms → benchmark_b.html`);

// ============================================================
// OPTION C: Software Platforms Only
// ============================================================
const optC_platforms = rerank(optC_data);
const optC_html = buildBenchmark({
  title: 'Option C — Pathogen Surveillance Software Benchmark',
  navBrand: 'PSEF — Scope C',
  heroBadge: 'Scope C: Software Only',
  heroTitle: 'Pathogen Surveillance Software',
  heroDesc: `${optC_platforms.length} software platforms you can actually access and use for pathogen surveillance. No military programs, classified institutes, defense hardware, or policy frameworks — pure software benchmarking.`,
  count: optC_platforms.length,
  fourthStat: '93',
  fourthLabel: '% Open Access',
  rankingsTitle: 'Software Platform Rankings',
  platforms: optC_platforms
});
fs.writeFileSync('benchmark_c.html', optC_html);
console.log(`Option C: ${optC_platforms.length} platforms → benchmark_c.html`);

console.log('\nDone! All three benchmark files generated.');
