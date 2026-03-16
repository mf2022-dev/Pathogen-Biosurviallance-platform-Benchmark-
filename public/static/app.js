// BioR Deep-Research Viewer — app.js
let DATA = null;
let currentView = 'overview';
let selectedPlatform = null;

// ── INIT ────────────────────────────────────────────────────────
async function init() {
  try {
    const res = await fetch('/static/data.json');
    DATA = await res.json();
    showView('overview');
  } catch (e) {
    document.getElementById('main-content').innerHTML =
      '<p class="text-red-400 text-center py-20">Failed to load data: ' + e.message + '</p>';
  }
}

// ── VIEW ROUTER ─────────────────────────────────────────────────
function showView(view) {
  currentView = view;
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.remove('tab-active');
    t.classList.add('text-gray-400');
  });
  const active = document.querySelector(`[data-view="${view}"]`);
  if (active) { active.classList.add('tab-active'); active.classList.remove('text-gray-400'); }

  const main = document.getElementById('main-content');
  switch (view) {
    case 'overview': main.innerHTML = renderOverview(); break;
    case 'profiles': main.innerHTML = renderProfiles(); break;
    case 'comparison': main.innerHTML = renderComparison(); break;
    case 'ecosystem': main.innerHTML = renderEcosystem(); break;
  }
}

// ── HELPERS ──────────────────────────────────────────────────────
function scoreColor(s) {
  if (s >= 90) return '#22c55e';
  if (s >= 85) return '#38bdf8';
  if (s >= 80) return '#f59e0b';
  return '#ef4444';
}

function layerBadge(l) {
  const cls = l.startsWith('L1') ? 'badge-L1' : l.startsWith('L2') ? 'badge-L2' : 'badge-L3';
  const labels = { L1_Surveillance: 'L1 Surveillance', L2_Genomic: 'L2 Genomic', L3_Defense: 'L3 Defense' };
  return `<span class="${cls} px-2 py-0.5 rounded text-xs font-medium">${labels[l] || l}</span>`;
}

function scoreRing(score, size = 72) {
  const r = 28, circ = 2 * Math.PI * r, offset = circ - (score / 100) * circ;
  const col = scoreColor(score);
  return `<div class="score-ring" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#334155" stroke-width="5"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${col}" stroke-width="5"
        stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
    </svg>
    <div class="value" style="color:${col}">${score}</div>
  </div>`;
}

function truncate(str, len = 200) {
  if (!str || str.length <= len) return str || '';
  return str.substring(0, len) + '...';
}

// ── OVERVIEW VIEW ───────────────────────────────────────────────
function renderOverview() {
  const ps = DATA.platforms;
  const avgScore = (ps.reduce((a, p) => a + p.s, 0) / ps.length).toFixed(1);
  const layers = {};
  ps.forEach(p => { layers[p.l] = (layers[p.l] || 0) + 1; });

  let cards = ps.map(p => `
    <div class="platform-card glass rounded-xl p-4 cursor-pointer fade-in" onclick="showPlatformDetail('${p.n.replace(/'/g,"\\'")}')">
      <div class="flex items-start justify-between mb-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-gray-500 mono text-xs">#${p.r}</span>
            ${layerBadge(p.l)}
          </div>
          <h3 class="text-white font-bold text-base truncate">${p.n}</h3>
          <p class="text-gray-400 text-xs mt-1 truncate">${p.c}</p>
        </div>
        ${scoreRing(p.s, 60)}
      </div>
      <p class="text-gray-300 text-xs leading-relaxed line-clamp-3">${truncate(p.deep_research?.executive_summary, 180)}</p>
      <div class="flex items-center gap-3 mt-3 text-xs text-gray-500">
        <span><i class="fas fa-book mr-1"></i>${p.deep_research?.key_publications?.length || 0} pubs</span>
        <span><i class="fas fa-link mr-1"></i>${p.deep_research?.ecosystem_connections?.length || 0} connections</span>
        <span><i class="fas fa-clock mr-1"></i>${p.deep_research?.timeline?.length || 0} milestones</span>
      </div>
    </div>
  `).join('');

  return `<div class="fade-in">
    <!-- Stats bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold gradient-text">${ps.length}</div>
        <div class="text-xs text-gray-400 mt-1">Deep Profiles</div>
      </div>
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold text-bio-accent">${avgScore}</div>
        <div class="text-xs text-gray-400 mt-1">Avg Score</div>
      </div>
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold text-bio-green">${ps.reduce((a,p) => a + (p.deep_research?.key_publications?.length||0), 0)}</div>
        <div class="text-xs text-gray-400 mt-1">Total Citations</div>
      </div>
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold text-bio-purple">${ps.reduce((a,p) => a + (p.deep_research?.ecosystem_connections?.length||0), 0)}</div>
        <div class="text-xs text-gray-400 mt-1">Ecosystem Links</div>
      </div>
    </div>

    <!-- Layer breakdown -->
    <div class="glass rounded-xl p-4 mb-6">
      <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-layer-group mr-2 text-bio-accent"></i>Layer Distribution</h3>
      <div class="flex gap-6">
        ${Object.entries(layers).map(([l, c]) => `
          <div class="flex items-center gap-2">
            ${layerBadge(l)}
            <span class="text-white font-bold">${c}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Platform grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${cards}
    </div>
  </div>`;
}

// ── PLATFORM DETAIL ─────────────────────────────────────────────
function showPlatformDetail(name) {
  selectedPlatform = name;
  const main = document.getElementById('main-content');
  main.innerHTML = renderPlatformDetail(name);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPlatformDetail(name) {
  const p = DATA.platforms.find(x => x.n === name);
  if (!p) return '<p class="text-red-400">Platform not found</p>';
  const prof = p.profile || {};
  const dr = p.deep_research || {};
  const sc = p.sc || {};

  // Sub-scores
  const subScores = Object.entries(sc).sort((a,b) => b[1] - a[1]).map(([k, v]) => {
    const label = k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const w = (v / 100) * 100;
    return `<div class="flex items-center gap-3 mb-2">
      <span class="text-xs text-gray-400 w-40 truncate">${label}</span>
      <div class="flex-1 bg-bio-slate rounded-full h-2">
        <div class="h-2 rounded-full" style="width:${w}%;background:${scoreColor(v)}"></div>
      </div>
      <span class="text-xs font-mono font-bold w-8 text-right" style="color:${scoreColor(v)}">${v}</span>
    </div>`;
  }).join('');

  // 7 fields
  const fieldIcons = {
    overview: 'fa-info-circle', functional_scope: 'fa-cogs', tech_stack: 'fa-code',
    operator: 'fa-building', data_model: 'fa-database', users_scale: 'fa-users', access_model: 'fa-lock-open'
  };
  const fields = ['overview','functional_scope','tech_stack','operator','data_model','users_scale','access_model']
    .map(f => `
      <div class="glass-light rounded-lg p-4 mb-3">
        <h4 class="text-bio-accent text-sm font-semibold mb-2">
          <i class="fas ${fieldIcons[f]} mr-2"></i>${f.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}
        </h4>
        <p class="text-gray-300 text-sm leading-relaxed">${prof[f] || '<span class="text-gray-500 italic">Not available</span>'}</p>
      </div>
    `).join('');

  // Publications
  const pubs = (dr.key_publications || []).map((pub, i) => `
    <div class="pub-item pl-4 py-3 mb-2 glass-light rounded-r-lg">
      <div class="text-white text-sm font-medium">${pub.title}</div>
      <div class="text-gray-400 text-xs mt-1">${pub.authors || ''} — <em>${pub.journal || ''}</em> (${pub.year || ''})${pub.citations ? ` · <span class="text-bio-amber">${pub.citations} citations</span>` : ''}</div>
      <div class="flex gap-3 mt-2">
        ${pub.doi ? `<span class="mono text-xs text-gray-500">DOI: ${pub.doi}</span>` : ''}
        ${pub.url ? `<a href="${pub.url}" target="_blank" class="text-bio-accent text-xs hover:underline"><i class="fas fa-external-link-alt mr-1"></i>View</a>` : ''}
      </div>
    </div>
  `).join('');

  // Guidelines
  const guides = (dr.official_guidelines || []).map(g => `
    <a href="${g.url}" target="_blank" class="block glass-light rounded-lg p-3 mb-2 hover:border-bio-accent/30 transition-all">
      <div class="text-white text-sm">${g.title}</div>
      <div class="text-gray-500 text-xs mt-1"><i class="fas fa-building mr-1"></i>${g.org || ''}</div>
    </a>
  `).join('');

  // Controversies
  const controv = (dr.controversies_and_changes || []).map(c =>
    `<li class="text-gray-300 text-sm mb-2 pl-2">${c}</li>`
  ).join('');

  // Ecosystem
  const eco = (dr.ecosystem_connections || []).map(e => `
    <div class="flex items-start gap-3 mb-3 eco-line pl-4 py-2">
      <div>
        <span class="text-bio-accent font-semibold text-sm">${e.platform}</span>
        <p class="text-gray-400 text-xs mt-0.5">${e.relationship}</p>
      </div>
    </div>
  `).join('');

  // Timeline
  const timeline = (dr.timeline || []).map(t => `
    <div class="flex items-start gap-3 mb-4">
      <div class="flex flex-col items-center">
        <div class="timeline-dot"></div>
        <div class="w-0.5 h-full bg-bio-slate"></div>
      </div>
      <div>
        <span class="text-bio-accent font-bold text-sm">${t.year}</span>
        <p class="text-gray-300 text-sm">${t.event}</p>
      </div>
    </div>
  `).join('');

  // URLs
  const urls = Object.entries(dr.key_urls || {}).map(([k, v]) =>
    `<a href="${v}" target="_blank" class="flex items-center gap-2 text-sm text-gray-300 hover:text-bio-accent py-1 transition-colors">
      <i class="fas fa-link text-gray-600 text-xs"></i>
      <span class="font-medium">${k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</span>
      <span class="text-gray-600 text-xs truncate flex-1">${v}</span>
      <i class="fas fa-external-link-alt text-gray-600 text-xs"></i>
    </a>`
  ).join('');

  // CBRN
  let cbrnHtml = '';
  if (dr.cbrn_assessment) {
    cbrnHtml = `<div class="glass rounded-xl p-5 mb-6 border border-red-500/30">
      <h3 class="text-red-400 font-bold text-sm mb-3"><i class="fas fa-radiation mr-2"></i>CBRN Assessment</h3>
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/40 mb-3">${dr.cbrn_assessment.tag}</span>
      <p class="text-gray-300 text-sm leading-relaxed">${dr.cbrn_assessment.assessment}</p>
    </div>`;
  }

  return `<div class="fade-in">
    <!-- Back button -->
    <button onclick="showView('${currentView === 'profiles' ? 'profiles' : 'overview'}')" class="text-gray-400 hover:text-bio-accent text-sm mb-4 transition-colors">
      <i class="fas fa-arrow-left mr-2"></i>Back
    </button>

    <!-- Header -->
    <div class="glass rounded-xl p-6 mb-6">
      <div class="flex items-start justify-between flex-wrap gap-4">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-gray-500 mono text-sm">#${p.r}</span>
            ${layerBadge(p.l)}
            <span class="text-gray-500 text-xs">${p.biosurveillance_class || ''}</span>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2">${p.n}</h2>
          <p class="text-gray-400 text-sm mb-3">${p.c} — ${p.d}</p>
          <a href="${p.u}" target="_blank" class="text-bio-accent text-sm hover:underline"><i class="fas fa-external-link-alt mr-1"></i>${p.u}</a>
        </div>
        ${scoreRing(p.s, 80)}
      </div>

      <!-- Executive Summary -->
      <div class="mt-4 p-4 rounded-lg bg-bio-accent/5 border border-bio-accent/20">
        <p class="text-gray-200 text-sm leading-relaxed italic">"${dr.executive_summary || ''}"</p>
      </div>

      <!-- Strengths / Weaknesses -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h4 class="text-bio-green text-xs font-semibold mb-2"><i class="fas fa-check-circle mr-1"></i>Strengths</h4>
          <ul class="text-sm text-gray-300 space-y-1">${(p.st||[]).map(s=>`<li class="flex items-start gap-2"><span class="text-bio-green mt-1">•</span>${s}</li>`).join('')}</ul>
        </div>
        <div>
          <h4 class="text-bio-amber text-xs font-semibold mb-2"><i class="fas fa-exclamation-triangle mr-1"></i>Weaknesses</h4>
          <ul class="text-sm text-gray-300 space-y-1">${(p.wk||[]).map(w=>`<li class="flex items-start gap-2"><span class="text-bio-amber mt-1">•</span>${w}</li>`).join('')}</ul>
        </div>
      </div>
    </div>

    <!-- Sub-scores -->
    <div class="glass rounded-xl p-5 mb-6">
      <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-chart-bar mr-2 text-bio-accent"></i>Evaluation Sub-Scores (10 Criteria)</h3>
      ${subScores}
    </div>

    ${cbrnHtml}

    <!-- 7-Field Profile -->
    <div class="mb-6">
      <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-id-card mr-2 text-bio-accent"></i>Structured Profile (7 Fields)</h3>
      ${fields}
    </div>

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- Publications -->
      <div class="glass rounded-xl p-5">
        <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-book mr-2 text-bio-accent"></i>Key Publications (${(dr.key_publications||[]).length})</h3>
        ${pubs || '<p class="text-gray-500 text-sm italic">No publications available</p>'}
      </div>

      <!-- Guidelines -->
      <div class="glass rounded-xl p-5">
        <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-balance-scale mr-2 text-bio-accent"></i>Official Guidelines & Standards</h3>
        ${guides || '<p class="text-gray-500 text-sm italic">No guidelines available</p>'}
      </div>
    </div>

    <!-- Controversies -->
    <div class="glass rounded-xl p-5 mb-6">
      <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-exclamation-circle mr-2 text-bio-amber"></i>Controversies & Recent Changes (2024–2026)</h3>
      <ul class="list-disc list-inside">${controv}</ul>
    </div>

    <!-- Ecosystem + Timeline -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="glass rounded-xl p-5">
        <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-project-diagram mr-2 text-bio-accent"></i>Ecosystem Connections (${(dr.ecosystem_connections||[]).length})</h3>
        ${eco}
      </div>
      <div class="glass rounded-xl p-5">
        <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-clock mr-2 text-bio-accent"></i>Timeline</h3>
        ${timeline}
      </div>
    </div>

    <!-- Key URLs -->
    <div class="glass rounded-xl p-5 mb-6">
      <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-globe mr-2 text-bio-accent"></i>Key URLs & References</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1">${urls}</div>
    </div>
  </div>`;
}

// ── PROFILES LIST VIEW ──────────────────────────────────────────
function renderProfiles() {
  const rows = DATA.platforms.map(p => `
    <tr class="border-b border-bio-slate/50 hover:bg-bio-slate/30 cursor-pointer transition-colors" onclick="showPlatformDetail('${p.n.replace(/'/g,"\\'")}')">
      <td class="py-3 px-3 mono text-xs text-gray-500">${p.r}</td>
      <td class="py-3 px-3">
        <div class="font-semibold text-white text-sm">${p.n}</div>
        <div class="text-gray-500 text-xs">${p.c}</div>
      </td>
      <td class="py-3 px-3">${layerBadge(p.l)}</td>
      <td class="py-3 px-3 text-center">
        <span class="font-bold mono" style="color:${scoreColor(p.s)}">${p.s}</span>
      </td>
      <td class="py-3 px-3 text-xs text-gray-400 max-w-md">${truncate(p.deep_research?.executive_summary, 120)}</td>
      <td class="py-3 px-3 text-center text-xs text-gray-400">${p.deep_research?.key_publications?.length || 0}</td>
      <td class="py-3 px-3 text-center">
        <i class="fas fa-chevron-right text-gray-600"></i>
      </td>
    </tr>
  `).join('');

  return `<div class="fade-in">
    <div class="glass rounded-xl overflow-hidden">
      <table class="w-full">
        <thead>
          <tr class="bg-bio-slate/50 text-xs text-gray-400 uppercase">
            <th class="py-3 px-3 text-left">#</th>
            <th class="py-3 px-3 text-left">Platform</th>
            <th class="py-3 px-3 text-left">Layer</th>
            <th class="py-3 px-3 text-center">Score</th>
            <th class="py-3 px-3 text-left">Summary</th>
            <th class="py-3 px-3 text-center">Pubs</th>
            <th class="py-3 px-3"></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;
}

// ── COMPARISON VIEW ─────────────────────────────────────────────
function renderComparison() {
  const comp = DATA.comparison;
  if (!comp || !comp.comparison_axes) return '<p class="text-gray-400">No comparison data</p>';

  const names = DATA.platforms.map(p => p.n);

  const tables = comp.comparison_axes.map(ax => {
    const rows = names.map(n => `
      <tr class="border-b border-bio-slate/30 hover:bg-bio-slate/20">
        <td class="py-2 px-3 text-sm font-medium text-white whitespace-nowrap">${n}</td>
        <td class="py-2 px-3 text-sm text-gray-300">${ax.values[n] || '—'}</td>
      </tr>
    `).join('');

    return `<div class="glass rounded-xl overflow-hidden mb-6">
      <div class="bg-bio-slate/40 px-4 py-3 border-b border-bio-accent/10">
        <h3 class="text-sm font-semibold text-bio-accent"><i class="fas fa-th-list mr-2"></i>${ax.axis}</h3>
      </div>
      <table class="w-full">
        <thead><tr class="text-xs text-gray-500 uppercase bg-bio-slate/20">
          <th class="py-2 px-3 text-left w-48">Platform</th>
          <th class="py-2 px-3 text-left">${ax.axis}</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }).join('');

  return `<div class="fade-in">${tables}</div>`;
}

// ── ECOSYSTEM MAP VIEW ──────────────────────────────────────────
function renderEcosystem() {
  // Build connection map
  const connections = {};
  DATA.platforms.forEach(p => {
    const eco = p.deep_research?.ecosystem_connections || [];
    eco.forEach(e => {
      const key = [p.n, e.platform].sort().join('↔');
      if (!connections[key]) {
        connections[key] = { from: p.n, to: e.platform, relationships: [] };
      }
      connections[key].relationships.push({ direction: p.n + ' → ' + e.platform, text: e.relationship });
    });
  });

  const connList = Object.values(connections).map(c => `
    <div class="glass-light rounded-lg p-4 mb-3 fade-in">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-bio-accent font-semibold text-sm">${c.from}</span>
        <i class="fas fa-arrows-alt-h text-gray-600"></i>
        <span class="text-bio-purple font-semibold text-sm">${c.to}</span>
      </div>
      ${c.relationships.map(r => `
        <div class="text-xs text-gray-400 pl-4 border-l-2 border-bio-slate mb-1">
          <span class="text-gray-500">${r.direction}:</span> ${r.text}
        </div>
      `).join('')}
    </div>
  `).join('');

  // Count connections per platform
  const nodeCounts = {};
  DATA.platforms.forEach(p => {
    const eco = p.deep_research?.ecosystem_connections || [];
    nodeCounts[p.n] = eco.length;
  });

  const nodeList = Object.entries(nodeCounts).sort((a,b) => b[1] - a[1]).map(([n, c]) => {
    const p = DATA.platforms.find(x => x.n === n);
    return `<div class="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-bio-slate/30 cursor-pointer" onclick="showPlatformDetail('${n.replace(/'/g,"\\'")}')">
      <div class="flex items-center gap-3">
        ${layerBadge(p?.l || '')}
        <span class="text-white text-sm font-medium">${n}</span>
      </div>
      <span class="text-bio-accent font-bold">${c}</span>
    </div>`;
  }).join('');

  return `<div class="fade-in">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-1">
        <div class="glass rounded-xl p-5 sticky top-20">
          <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-sitemap mr-2 text-bio-accent"></i>Connection Count</h3>
          ${nodeList}
          <div class="mt-4 p-3 rounded-lg bg-bio-accent/5 border border-bio-accent/20">
            <p class="text-xs text-gray-400"><strong class="text-bio-accent">${Object.keys(connections).length}</strong> unique connections across ${DATA.platforms.length} platforms</p>
          </div>
        </div>
      </div>
      <div class="lg:col-span-2">
        <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-project-diagram mr-2 text-bio-accent"></i>All Ecosystem Connections</h3>
        ${connList}
      </div>
    </div>
  </div>`;
}

// ── BOOT ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
