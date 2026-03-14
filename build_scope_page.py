html = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scope Selector - PSEF v3.0.0</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
<style>
body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif}
.gradient-bg{background:linear-gradient(135deg,#667eea,#764ba2)}
.sc{transition:all .3s;border:2px solid transparent;border-radius:1rem;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.06),0 4px 12px rgba(0,0,0,.04)}
.sc:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.12)}
.sc-a:hover{border-color:#3b82f6}.sc-b:hover{border-color:#8b5cf6}.sc-c:hover{border-color:#10b981}
.ic-a{background:linear-gradient(135deg,#3b82f6,#1d4ed8)}
.ic-b{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.ic-c{background:linear-gradient(135deg,#10b981,#059669)}
.tg{display:inline-block;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em}