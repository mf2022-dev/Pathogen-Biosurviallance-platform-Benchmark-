#!/bin/bash
# Push to GitHub helper script
# Usage: ./scripts/push_to_github.sh https://github.com/USERNAME/REPO.git

REPO_URL="$1"

if [ -z "$REPO_URL" ]; then
    echo "Usage: $0 <repository-url>"
    echo "Example: $0 https://github.com/username/pathogen-surveillance-evaluation.git"
    exit 1
fi

echo "Pushing to: $REPO_URL"
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"
git branch -M main
git push -u origin main

echo "Done! Repository pushed to $REPO_URL"
