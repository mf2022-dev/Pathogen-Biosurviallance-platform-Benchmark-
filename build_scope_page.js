const fs = require("fs");

function esc(s) { return s; }

function card(href, letter, color, iconClass, title, desc, count, countLabel, includes, layers) {
  const colorMap = {a:'blue',b:'purple',c:'emerald'};
  const c = colorMap[letter.toLowerCase()];
  let incTags = includes.map(t => '<span class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">' + t + '</span>').join('\n                ');
  if (layers) {
    incTags = layers.map(l => '<span class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ' + l.bg + ' ' + l.text + '">' + l.label + '</span>').join('\n                ');
  }
  return `
        <a href="${href}" class="card card-${letter.toLowerCase()} block p-8 hover:border-${c}-500">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 icon-${letter.toLowerCase()}">
                <i class="${iconClass} text-white text-2xl"></i>
            </div>
            <div class="flex items-center gap-2 mb-2">
                <span class="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-${c}-100 text-${c}-700">Scope ${letter}</span>
            </div>
            <h2 class="text-xl font-extrabold text-gray-900 mb-2">${title}</h2>
            <p class="text-sm text-gray-500 mb-5 leading-relaxed">${desc}</p>
            <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-${c}-50 rounded-lg flex items-center justify-center">
                    <span class="text-xl font-extrabold text-${c}-600">${count}</span>
                </div>
                <span class="text-sm text-gray-600 font-semibold">${countLabel}</span>
            </div>
            <div class="flex flex-wrap gap-1.5 mb-6">
                ${incTags}
            </div>
            <div class="flex items-center text-${c}-600 font-bold text-sm">
                Open Benchmark <i class="fas fa-arrow-right ml-2"></i>
            </div>