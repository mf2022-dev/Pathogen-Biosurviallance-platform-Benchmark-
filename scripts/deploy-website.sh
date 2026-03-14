#!/bin/bash
# Deploy website helper
echo "=== Pathogen Surveillance Framework Deployment ==="
echo "1. Checking git status..."
git status
echo ""
echo "2. Adding all files..."
git add .
echo ""
echo "3. Committing..."
git commit -m "Deploy: Pathogen Surveillance Framework v3.0.0"
echo ""
echo "4. Pushing to GitHub..."
git push origin main
echo ""
echo "=== Deployment complete ==="
echo "Enable GitHub Pages at: Settings → Pages → main / root"
