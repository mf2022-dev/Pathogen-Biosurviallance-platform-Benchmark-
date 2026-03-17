import { Hono } from 'hono'

const app = new Hono()

app.get('/api/health', (c) => c.json({ status: 'ok' }))

// Handle favicon to prevent 500
app.get('/favicon.ico', (c) => {
  return new Response(null, { status: 204 })
})

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BioR Deep-Research Profiles — 50 Biosurveillance & CBRN Platforms</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'bio-dark': '#0f172a',
        'bio-navy': '#1e293b',
        'bio-slate': '#334155',
        'bio-accent': '#38bdf8',
        'bio-green': '#22c55e',
        'bio-amber': '#f59e0b',
        'bio-red': '#ef4444',
        'bio-purple': '#a78bfa',
      }
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
  body { font-family: 'Inter', sans-serif; }
  code, .mono { font-family: 'JetBrains Mono', monospace; }
  .glass { background: rgba(30,41,59,0.85); backdrop-filter: blur(12px); border: 1px solid rgba(56,189,248,0.15); }
  .glass-light { background: rgba(51,65,85,0.5); backdrop-filter: blur(8px); border: 1px solid rgba(56,189,248,0.1); }
  .gradient-text { background: linear-gradient(135deg, #38bdf8 0%, #a78bfa 50%, #22c55e 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .score-ring { position: relative; width: 72px; height: 72px; }
  .score-ring svg { transform: rotate(-90deg); }
  .score-ring .value { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; }
  .platform-card { transition: all 0.3s ease; }
  .platform-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(56,189,248,0.15); }
  .tab-active { border-color: #38bdf8; color: #38bdf8; background: rgba(56,189,248,0.1); }
  .fade-in { animation: fadeIn 0.4s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .layer-L1 { color: #22c55e; } .layer-L2 { color: #38bdf8; } .layer-L3 { color: #ef4444; } .layer-L4 { color: #f59e0b; } .layer-L5 { color: #a78bfa; }
  .badge-L1 { background: rgba(34,197,94,0.15); color: #22c55e; border: 1px solid rgba(34,197,94,0.3); }
  .badge-L2 { background: rgba(56,189,248,0.15); color: #38bdf8; border: 1px solid rgba(56,189,248,0.3); }
  .badge-L3 { background: rgba(239,68,68,0.15); color: #ef4444; border: 1px solid rgba(239,68,68,0.3); }
  .badge-L4_CBRN { background: rgba(245,158,11,0.15); color: #f59e0b; border: 1px solid rgba(245,158,11,0.3); }
  .layer-L4_CBRN { color: #f59e0b; }
  ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #1e293b; } ::-webkit-scrollbar-thumb { background: #475569; border-radius: 3px; }
  .pub-item { border-left: 3px solid #38bdf8; }
  .eco-line { border-left: 2px dashed #475569; }
  .timeline-dot { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #38bdf8; background: #0f172a; }
  .comparison-table th { position: sticky; top: 0; z-index: 10; }
</style>
</head>
<body class="bg-bio-dark text-gray-200 min-h-screen">

<!-- HEADER -->
<header class="glass sticky top-0 z-50 border-b border-bio-accent/20">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-bio-accent to-bio-purple flex items-center justify-center">
        <i class="fas fa-shield-virus text-white text-lg"></i>
      </div>
      <div>
        <h1 class="text-lg font-bold gradient-text">BioR Intelligence</h1>
        <p class="text-xs text-gray-400">Deep-Research Platform Profiles — 50 Platforms</p>
      </div>
    </div>
    <div class="flex items-center gap-4 text-sm">
      <span class="text-gray-400"><i class="fas fa-database mr-1"></i> 189 platforms</span>
      <span class="text-bio-accent"><i class="fas fa-microscope mr-1"></i> 50 deep profiles</span>
      <span class="text-bio-amber"><i class="fas fa-radiation mr-1"></i> 20 CBRN</span>
      <span class="text-gray-500 mono text-xs">v3.1.0 | 2026-03-17</span>
    </div>
  </div>
</header>

<!-- NAV TABS -->
<nav class="max-w-7xl mx-auto px-4 pt-4 flex gap-2 overflow-x-auto" id="nav-tabs">
  <button onclick="showView('overview')" class="nav-tab tab-active px-4 py-2 rounded-lg text-sm font-medium border border-transparent whitespace-nowrap transition-all" data-view="overview">
    <i class="fas fa-chart-bar mr-1"></i> Overview
  </button>
  <button onclick="showView('profiles')" class="nav-tab px-4 py-2 rounded-lg text-sm font-medium border border-transparent whitespace-nowrap transition-all text-gray-400 hover:text-gray-200" data-view="profiles">
    <i class="fas fa-id-card mr-1"></i> Platform Profiles
  </button>
  <button onclick="showView('comparison')" class="nav-tab px-4 py-2 rounded-lg text-sm font-medium border border-transparent whitespace-nowrap transition-all text-gray-400 hover:text-gray-200" data-view="comparison">
    <i class="fas fa-columns mr-1"></i> Comparison
  </button>
  <button onclick="showView('ecosystem')" class="nav-tab px-4 py-2 rounded-lg text-sm font-medium border border-transparent whitespace-nowrap transition-all text-gray-400 hover:text-gray-200" data-view="ecosystem">
    <i class="fas fa-project-diagram mr-1"></i> Ecosystem Map
  </button>
</nav>

<!-- MAIN CONTENT -->
<main class="max-w-7xl mx-auto px-4 py-6" id="main-content">
  <div id="loading" class="text-center py-20">
    <i class="fas fa-spinner fa-spin text-bio-accent text-3xl"></i>
    <p class="text-gray-400 mt-4">Loading deep-research data...</p>
  </div>
</main>

<script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
