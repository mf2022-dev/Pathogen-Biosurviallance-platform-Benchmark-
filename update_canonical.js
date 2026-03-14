const fs = require('fs');
const html = fs.readFileSync('benchmark.html','utf8');

const dimMatch = html.match(/const DIMENSIONS = (\[[\s\S]*?\]);/);
const DIMENSIONS = eval(dimMatch[1]);

const platMatch = html.match(/const PLATFORMS = (\[[\s\S]*?\]);[\s\S]*?(?:const |function )/);
const PLATFORMS = eval(platMatch[1]);

const withDesc = PLATFORMS.filter(p => p.d && p.d.trim());
const noDesc = PLATFORMS.filter(p => !p.d || !p.d.trim());
console.log('With descriptions:', withDesc.length);
console.log('Without descriptions:', noDesc.length);
if (noDesc.length > 0) noDesc.forEach(p => console.log('  MISSING:', p.n));

// Update canonical JSON
const data = JSON.parse(fs.readFileSync('reference_baseline/CANONICAL_169_PLATFORMS.json','utf8'));
let updated = 0;
for (const platform of PLATFORMS) {
  const match = data.platforms.find(p => p.name === platform.n);
  if (match && platform.d && (!match.description || match.description.trim() === '')) {
    match.description = platform.d;
    updated++;
  }
}
fs.writeFileSync('reference_baseline/CANONICAL_169_PLATFORMS.json', JSON.stringify(data, null, 2));
console.log('Updated canonical JSON descriptions:', updated);

// Regenerate CSV
const dims = data.dimensions.map(d => d.key);
let csv = 'Rank,Name,Overall_Score,Category,Description,' + dims.join(',') + ',Strengths,Weaknesses\n';
for (const p of data.platforms) {
  const name = '"' + p.name.replace(/"/g, '""') + '"';
  const cat = '"' + p.category.replace(/"/g, '""') + '"';
  const desc = '"' + (p.description || '').replace(/"/g, '""') + '"';
  const str = '"' + (p.strengths || []).join('; ').replace(/"/g, '""') + '"';
  const wk = '"' + (p.weaknesses || []).join('; ').replace(/"/g, '""') + '"';
  const scores = dims.map(d => p.dimension_scores[d] || '');
  csv += [p.rank, name, p.overall_score, cat, desc, ...scores, str, wk].join(',') + '\n';
}
fs.writeFileSync('reference_baseline/CANONICAL_169_PLATFORMS.csv', csv);
console.log('CSV regenerated with', data.platforms.length, 'rows');
