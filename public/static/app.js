// BioR Deep-Research Viewer — app.js v3.1.0
// Supports 50 platforms: Top 30 Biosurveillance + 20 CBRN Operational
let DATA = null;
let currentView = 'overview';
let selectedPlatform = null;
let filterLayer = 'all';
let searchQuery = '';

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
  let cls, label;
  if (l === 'L4_CBRN_Operational') {
    cls = 'badge-L4_CBRN';
    label = 'L4 CBRN';
  } else if (l && l.startsWith('L1')) {
    cls = 'badge-L1'; label = 'L1 Surveillance';
  } else if (l && l.startsWith('L2')) {
    cls = 'badge-L2'; label = 'L2 Genomic';
  } else if (l && l.startsWith('L3')) {
    cls = 'badge-L3'; label = 'L3 Defense';
  } else {
    cls = 'badge-L3'; label = l || 'Unknown';
  }
  return `<span class="${cls} px-2 py-0.5 rounded text-xs font-medium">${label}</span>`;
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

function getFiltered() {
  let ps = DATA.platforms;
  if (filterLayer !== 'all') ps = ps.filter(p => p.layer === filterLayer);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    ps = ps.filter(p => p.name.toLowerCase().includes(q) || (p.category||'').toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q));
  }
  return ps;
}

function setFilter(layer) {
  filterLayer = layer;
  showView(currentView);
}

function doSearch(val) {
  searchQuery = val;
  showView(currentView);
}

// ── OVERVIEW VIEW ───────────────────────────────────────────────
function renderOverview() {
  const ps = getFiltered();
  const allPs = DATA.platforms;
  const avgScore = ps.length ? (ps.reduce((a, p) => a + p.score, 0) / ps.length).toFixed(1) : '0';
  const layers = {};
  allPs.forEach(p => { layers[p.layer] = (layers[p.layer] || 0) + 1; });

  const bioCount = allPs.filter(p => p.rank <= 30).length;
  const cbrnCount = allPs.filter(p => p.rank >= 170).length;

  let cards = ps.map(p => `
    <div class="platform-card glass rounded-xl p-4 cursor-pointer fade-in" onclick="showPlatformDetail('${p.name.replace(/'/g,"\\'")}')">
      <div class="flex items-start justify-between mb-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-gray-500 mono text-xs">#${p.rank}</span>
            ${layerBadge(p.layer)}
            ${p.deep_research?.cbrn_assessment ? '<span class="text-xs text-amber-400"><i class="fas fa-radiation"></i></span>' : ''}
          </div>
          <h3 class="text-white font-bold text-base truncate">${p.name}</h3>
          <p class="text-gray-400 text-xs mt-1 truncate">${p.category}</p>
        </div>
        ${scoreRing(p.score, 60)}
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
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold gradient-text">${allPs.length}</div>
        <div class="text-xs text-gray-400 mt-1">Deep Profiles</div>
      </div>
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold text-bio-accent">${avgScore}</div>
        <div class="text-xs text-gray-400 mt-1">Avg Score</div>
      </div>
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold text-bio-green">${allPs.reduce((a,p) => a + (p.deep_research?.key_publications?.length||0), 0)}</div>
        <div class="text-xs text-gray-400 mt-1">Total Citations</div>
      </div>
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold text-bio-purple">${allPs.reduce((a,p) => a + (p.deep_research?.ecosystem_connections?.length||0), 0)}</div>
        <div class="text-xs text-gray-400 mt-1">Ecosystem Links</div>
      </div>
      <div class="glass rounded-xl p-4 text-center">
        <div class="text-3xl font-bold text-bio-amber">${cbrnCount}</div>
        <div class="text-xs text-gray-400 mt-1">CBRN Platforms</div>
      </div>
    </div>

    <!-- Search + Filters -->
    <div class="glass rounded-xl p-4 mb-6">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1 min-w-[200px]">
          <input type="text" placeholder="Search platforms..." value="${searchQuery}" oninput="doSearch(this.value)"
            class="w-full bg-bio-slate/50 border border-bio-accent/20 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-bio-accent/50">
        </div>
        <div class="flex gap-2 flex-wrap">
          <button onclick="setFilter('all')" class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filterLayer === 'all' ? 'bg-bio-accent/20 text-bio-accent border border-bio-accent/40' : 'text-gray-400 hover:text-white border border-transparent'}">All (${allPs.length})</button>
          ${Object.entries(layers).map(([l, c]) => `
            <button onclick="setFilter('${l}')" class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filterLayer === l ? 'bg-bio-accent/20 text-bio-accent border border-bio-accent/40' : 'text-gray-400 hover:text-white border border-transparent'}">${l.replace('_', ' ').replace('Operational','')} (${c})</button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Layer breakdown -->
    <div class="glass rounded-xl p-4 mb-6">
      <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-layer-group mr-2 text-bio-accent"></i>Layer Distribution</h3>
      <div class="flex gap-4 flex-wrap">
        ${Object.entries(layers).map(([l, c]) => `
          <div class="flex items-center gap-2">
            ${layerBadge(l)}
            <span class="text-white font-bold">${c}</span>
          </div>
        `).join('')}
      </div>
    </div>

    ${ps.length === 0 ? '<p class="text-gray-500 text-center py-10">No platforms match your filter.</p>' : ''}

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
  const p = DATA.platforms.find(x => x.name === name);
  if (!p) return '<p class="text-red-400">Platform not found</p>';
  const prof = p.profile || {};
  const dr = p.deep_research || {};
  const sc = p.scores || {};

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
    <a href="${g.url || '#'}" target="_blank" class="block glass-light rounded-lg p-3 mb-2 hover:border-bio-accent/30 transition-all">
      <div class="text-white text-sm">${g.title || g}</div>
      <div class="text-gray-500 text-xs mt-1">${g.org ? `<i class="fas fa-building mr-1"></i>${g.org}` : ''}</div>
    </a>
  `).join('');

  // Controversies
  const controv = (dr.controversies_and_changes || []).map(c =>
    `<li class="text-gray-300 text-sm mb-2 pl-2">${typeof c === 'string' ? c : c.description || JSON.stringify(c)}</li>`
  ).join('');

  // Ecosystem
  const eco = (dr.ecosystem_connections || []).map(e => `
    <div class="flex items-start gap-3 mb-3 eco-line pl-4 py-2">
      <div>
        <span class="text-bio-accent font-semibold text-sm">${e.platform || e.name || ''}</span>
        <p class="text-gray-400 text-xs mt-0.5">${e.relationship || e.description || ''}</p>
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
        <span class="text-bio-accent font-bold text-sm">${t.year || t.date || ''}</span>
        <p class="text-gray-300 text-sm">${t.event || t.description || ''}</p>
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

  // CBRN Assessment
  let cbrnHtml = '';
  const cbrn = dr.cbrn_assessment;
  if (cbrn) {
    const classification = typeof cbrn === 'string' ? cbrn : (cbrn.classification || cbrn.tag || '');
    const assessment = typeof cbrn === 'object' ? (cbrn.assessment || cbrn.description || '') : '';
    const isOperational = p.layer === 'L4_CBRN_Operational';
    const borderColor = isOperational ? 'border-amber-500/30' : 'border-red-500/30';
    const tagColor = isOperational ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' : 'bg-red-500/20 text-red-400 border-red-500/40';
    const iconColor = isOperational ? 'text-amber-400' : 'text-red-400';
    
    cbrnHtml = `<div class="glass rounded-xl p-5 mb-6 border ${borderColor}">
      <h3 class="${iconColor} font-bold text-sm mb-3"><i class="fas fa-radiation mr-2"></i>CBRN Assessment</h3>
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold ${tagColor} mb-3">${classification.replace(/_/g, ' ')}</span>
      ${assessment ? `<p class="text-gray-300 text-sm leading-relaxed">${assessment}</p>` : ''}
      ${typeof cbrn === 'object' && cbrn.primary_domain ? `<p class="text-gray-400 text-xs mt-2"><strong>Domain:</strong> ${cbrn.primary_domain}</p>` : ''}
      ${typeof cbrn === 'object' && cbrn.nato_standards ? `<p class="text-gray-400 text-xs mt-1"><strong>NATO Standards:</strong> ${cbrn.nato_standards}</p>` : ''}
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
            <span class="text-gray-500 mono text-sm">#${p.rank}</span>
            ${layerBadge(p.layer)}
          </div>
          <h2 class="text-2xl font-bold text-white mb-2">${p.name}</h2>
          <p class="text-gray-400 text-sm mb-3">${p.category} — ${p.description}</p>
          <a href="${p.url}" target="_blank" class="text-bio-accent text-sm hover:underline"><i class="fas fa-external-link-alt mr-1"></i>${p.url}</a>
        </div>
        ${scoreRing(p.score, 80)}
      </div>

      <!-- Executive Summary -->
      <div class="mt-4 p-4 rounded-lg bg-bio-accent/5 border border-bio-accent/20">
        <p class="text-gray-200 text-sm leading-relaxed italic">"${dr.executive_summary || ''}"</p>
      </div>

      <!-- Strengths / Weaknesses -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h4 class="text-bio-green text-xs font-semibold mb-2"><i class="fas fa-check-circle mr-1"></i>Strengths</h4>
          <ul class="text-sm text-gray-300 space-y-1">${(p.strengths||[]).map(s=>`<li class="flex items-start gap-2"><span class="text-bio-green mt-1">•</span>${s}</li>`).join('')}</ul>
        </div>
        <div>
          <h4 class="text-bio-amber text-xs font-semibold mb-2"><i class="fas fa-exclamation-triangle mr-1"></i>Weaknesses</h4>
          <ul class="text-sm text-gray-300 space-y-1">${(p.weaknesses||[]).map(w=>`<li class="flex items-start gap-2"><span class="text-bio-amber mt-1">•</span>${w}</li>`).join('')}</ul>
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
    ${controv ? `<div class="glass rounded-xl p-5 mb-6">
      <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-exclamation-circle mr-2 text-bio-amber"></i>Controversies & Recent Changes</h3>
      <ul class="list-disc list-inside">${controv}</ul>
    </div>` : ''}

    <!-- Ecosystem + Timeline -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="glass rounded-xl p-5">
        <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-project-diagram mr-2 text-bio-accent"></i>Ecosystem Connections (${(dr.ecosystem_connections||[]).length})</h3>
        ${eco || '<p class="text-gray-500 text-sm italic">No ecosystem data</p>'}
      </div>
      <div class="glass rounded-xl p-5">
        <h3 class="text-sm font-semibold text-gray-300 mb-4"><i class="fas fa-clock mr-2 text-bio-accent"></i>Timeline</h3>
        ${timeline || '<p class="text-gray-500 text-sm italic">No timeline data</p>'}
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
  const ps = getFiltered();
  const rows = ps.map(p => `
    <tr class="border-b border-bio-slate/50 hover:bg-bio-slate/30 cursor-pointer transition-colors" onclick="showPlatformDetail('${p.name.replace(/'/g,"\\'")}')">
      <td class="py-3 px-3 mono text-xs text-gray-500">${p.rank}</td>
      <td class="py-3 px-3">
        <div class="font-semibold text-white text-sm">${p.name}</div>
        <div class="text-gray-500 text-xs">${p.category}</div>
      </td>
      <td class="py-3 px-3">${layerBadge(p.layer)}</td>
      <td class="py-3 px-3 text-center">
        <span class="font-bold mono" style="color:${scoreColor(p.score)}">${p.score}</span>
      </td>
      <td class="py-3 px-3 text-xs text-gray-400 max-w-md">${truncate(p.deep_research?.executive_summary, 120)}</td>
      <td class="py-3 px-3 text-center text-xs text-gray-400">${p.deep_research?.key_publications?.length || 0}</td>
      <td class="py-3 px-3 text-center">
        <i class="fas fa-chevron-right text-gray-600"></i>
      </td>
    </tr>
  `).join('');

  return `<div class="fade-in">
    <!-- Search + Filter -->
    <div class="glass rounded-xl p-4 mb-4">
      <div class="flex flex-wrap items-center gap-3">
        <input type="text" placeholder="Search..." value="${searchQuery}" oninput="doSearch(this.value)"
          class="flex-1 min-w-[200px] bg-bio-slate/50 border border-bio-accent/20 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-bio-accent/50">
        <div class="flex gap-2 flex-wrap">
          <button onclick="setFilter('all')" class="px-3 py-1.5 rounded-lg text-xs font-medium ${filterLayer === 'all' ? 'bg-bio-accent/20 text-bio-accent' : 'text-gray-400'}">All</button>
          <button onclick="setFilter('L1_Surveillance')" class="px-3 py-1.5 rounded-lg text-xs font-medium ${filterLayer === 'L1_Surveillance' ? 'bg-bio-accent/20 text-bio-accent' : 'text-gray-400'}">L1</button>
          <button onclick="setFilter('L2_Genomic')" class="px-3 py-1.5 rounded-lg text-xs font-medium ${filterLayer === 'L2_Genomic' ? 'bg-bio-accent/20 text-bio-accent' : 'text-gray-400'}">L2</button>
          <button onclick="setFilter('L3_Defense')" class="px-3 py-1.5 rounded-lg text-xs font-medium ${filterLayer === 'L3_Defense' ? 'bg-bio-accent/20 text-bio-accent' : 'text-gray-400'}">L3</button>
          <button onclick="setFilter('L4_CBRN_Operational')" class="px-3 py-1.5 rounded-lg text-xs font-medium ${filterLayer === 'L4_CBRN_Operational' ? 'bg-bio-accent/20 text-bio-accent' : 'text-gray-400'}">CBRN</button>
        </div>
      </div>
    </div>
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
    <p class="text-gray-500 text-xs mt-3 text-center">Showing ${ps.length} of ${DATA.platforms.length} platforms</p>
  </div>`;
}

// ── COMPARISON VIEW ─────────────────────────────────────────────
function renderComparison() {
  const comp = DATA.comparison;
  if (!comp) return '<p class="text-gray-400 text-center py-10">No comparison data available</p>';

  // Top 30 table
  const top30 = comp.top30 || {};
  const cbrn = comp.cbrn || {};

  const top30Rows = (top30.platforms || []).map(p => `
    <tr class="border-b border-bio-slate/30 hover:bg-bio-slate/20 cursor-pointer" onclick="showPlatformDetail('${(DATA.platforms.find(x=>x.rank===p.rank)||{}).name||''}')">
      <td class="py-2 px-3 mono text-xs text-gray-500">${p.rank}</td>
      <td class="py-2 px-3 text-sm font-medium text-white">${p.name}</td>
      <td class="py-2 px-3">${layerBadge(p.layer)}</td>
      <td class="py-2 px-3 text-center"><span class="font-bold mono" style="color:${scoreColor(p.score)}">${p.score}</span></td>
      <td class="py-2 px-3 text-xs text-gray-400">${(p.cbrn || '—').replace(/_/g,' ')}</td>
    </tr>
  `).join('');

  const cbrnRows = (cbrn.platforms || []).map(p => `
    <tr class="border-b border-bio-slate/30 hover:bg-bio-slate/20 cursor-pointer" onclick="showPlatformDetail('${(DATA.platforms.find(x=>x.rank===p.rank)||{}).name||''}')">
      <td class="py-2 px-3 mono text-xs text-gray-500">${p.rank}</td>
      <td class="py-2 px-3 text-sm font-medium text-white">${p.name}</td>
      <td class="py-2 px-3 text-center"><span class="font-bold mono" style="color:${scoreColor(p.score)}">${p.score}</span></td>
      <td class="py-2 px-3 text-xs text-amber-400">${(p.classification || '').replace(/_/g,' ')}</td>
    </tr>
  `).join('');

  return `<div class="fade-in">
    <!-- Top 30 Biosurveillance -->
    <div class="glass rounded-xl overflow-hidden mb-6">
      <div class="bg-bio-slate/40 px-4 py-3 border-b border-bio-accent/10">
        <h3 class="text-sm font-semibold text-bio-accent"><i class="fas fa-trophy mr-2"></i>Top 30 Biosurveillance Platforms (${top30.count || 0})</h3>
      </div>
      <table class="w-full">
        <thead><tr class="text-xs text-gray-500 uppercase bg-bio-slate/20">
          <th class="py-2 px-3 text-left w-16">#</th>
          <th class="py-2 px-3 text-left">Platform</th>
          <th class="py-2 px-3 text-left">Layer</th>
          <th class="py-2 px-3 text-center w-20">Score</th>
          <th class="py-2 px-3 text-left">CBRN Tag</th>
        </tr></thead>
        <tbody>${top30Rows}</tbody>
      </table>
    </div>

    <!-- CBRN Operational -->
    <div class="glass rounded-xl overflow-hidden mb-6">
      <div class="bg-amber-500/10 px-4 py-3 border-b border-amber-500/20">
        <h3 class="text-sm font-semibold text-amber-400"><i class="fas fa-radiation mr-2"></i>CBRN Operational Platforms (${cbrn.count || 0})</h3>
      </div>
      <table class="w-full">
        <thead><tr class="text-xs text-gray-500 uppercase bg-bio-slate/20">
          <th class="py-2 px-3 text-left w-16">#</th>
          <th class="py-2 px-3 text-left">Platform</th>
          <th class="py-2 px-3 text-center w-20">Score</th>
          <th class="py-2 px-3 text-left">Classification</th>
        </tr></thead>
        <tbody>${cbrnRows}</tbody>
      </table>
    </div>
  </div>`;
}

// ── ECOSYSTEM MAP VIEW ──────────────────────────────────────────
function renderEcosystem() {
  const connections = {};
  DATA.platforms.forEach(p => {
    const eco = p.deep_research?.ecosystem_connections || [];
    eco.forEach(e => {
      const target = e.platform || e.name || '';
      const key = [p.name, target].sort().join('↔');
      if (!connections[key]) {
        connections[key] = { from: p.name, to: target, relationships: [] };
      }
      connections[key].relationships.push({ direction: p.name + ' → ' + target, text: e.relationship || e.description || '' });
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

  const nodeCounts = {};
  DATA.platforms.forEach(p => {
    const eco = p.deep_research?.ecosystem_connections || [];
    nodeCounts[p.name] = eco.length;
  });

  const nodeList = Object.entries(nodeCounts).sort((a,b) => b[1] - a[1]).map(([n, c]) => {
    const p = DATA.platforms.find(x => x.name === n);
    return `<div class="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-bio-slate/30 cursor-pointer" onclick="showPlatformDetail('${n.replace(/'/g,"\\'")}')">
      <div class="flex items-center gap-3">
        ${layerBadge(p?.layer || '')}
        <span class="text-white text-sm font-medium truncate">${n}</span>
      </div>
      <span class="text-bio-accent font-bold">${c}</span>
    </div>`;
  }).join('');

  return `<div class="fade-in">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-1">
        <div class="glass rounded-xl p-5 sticky top-20">
          <h3 class="text-sm font-semibold text-gray-300 mb-3"><i class="fas fa-sitemap mr-2 text-bio-accent"></i>Connection Count</h3>
          <div class="max-h-[60vh] overflow-y-auto">${nodeList}</div>
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
