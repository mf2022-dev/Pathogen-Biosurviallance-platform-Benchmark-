const fs = require("fs");

function tag(label, bg, tc) {
  return '<span class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold ' + (bg||'bg-gray-100') + ' ' + (tc||'text-gray-600') + '">' + label + '</span>';
}

function row(dim, a, b, c) {
  function cell(v) {
    if (v === true) return '<td class="px-6 py-3 text-center"><i class="fas fa-check text-green-500"></i></td>';
    if (v === false) return '<td class="px-6 py-3 text-center"><i class="fas fa-times text-red-400"></i></td>';
    return '<td class="px-6 py-3 text-center text-xs text-gray-400">' + v + '</td>';
  }
  return '<tr class="hover:bg-gray-50"><td class="px-6 py-3 font-semibold text-gray-700">' + dim + '</td>' + cell(a) + cell(b) + cell(c) + '</tr>';
}

const rows = [
  row('Total Platforms', '<b class="text-blue-600">114</b>', '<b class="text-purple-600">169</b>', '<b class="text-emerald-600">93</b>'),
  row('Surveillance Systems', true, true, true),
  row('Genomic/Bioinformatics', 'Partial', true, true),
  row('AI/ML Intelligence', true, true, true),
  row('DARPA Programs', 'Operational only', true, false),
  row('Military (Global)', true, true, false),
  row('Detection Hardware', 'Some', true, false),
  row('Policy Frameworks', false, true, false),
  row('R Packages / CLI Tools', false, true, true),
  row('Classified / Assessed', false, true, false),
  row('Best For', 'Decision makers', 'Complete picture', 'Software buyers')
].join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scope Selector - PSEF v3.0.0</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
<style>
body{font-family:Inter,-apple-system,sans-serif}
.gbg{background:linear-gradient(135deg,#667eea,#764ba2)}
.sc{transition:all .3s;border:2px solid transparent;border-radius:1rem;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.06)}
.sc:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.12)}
.sc-a:hover{border-color:#3b82f6}.sc-b:hover{border-color:#8b5cf6}.sc-c:hover{border-color:#10b981}
.ic-a{background:linear-gradient(135deg,#3b82f6,#1d4ed8)}
.ic-b{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.ic-c{background:linear-gradient(135deg,#10b981,#059669)}
