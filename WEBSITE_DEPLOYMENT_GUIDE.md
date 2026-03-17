# Website Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- GitHub account with access to: https://github.com/mf2022-dev/Pathogen-Biosurviallance-platform-Benchmark-
- Repository with all framework files on `main` branch

### Steps
1. Push all files to the `main` branch
2. Go to Repository -> Settings -> Pages
3. Source: Deploy from branch -> `main` -> `/ (root)`
4. Click Save
5. Wait 2-5 minutes for deployment

### Custom Domain (Optional)
1. Add your domain to the CNAME file
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Verification
- Check `https://mf2022-dev.github.io/Pathogen-Biosurviallance-platform-Benchmark-/`
- Verify all internal links work
- Test search and filter functionality
- Confirm charts render correctly

### Key Pages to Verify
| Page | URL Path |
|------|----------|
| Landing Page | `/` (index.html) |
| Full Benchmark | `/benchmark.html` |
| Scope Selector | `/scope.html` |
| Option A (114) | `/benchmark_a.html` |
| Option B (169) | `/benchmark_b.html` |
| Option C (93) | `/benchmark_c.html` |
| Executive Summary | `/reports/executive_summary_dashboard.html` |
| Framework | `/frameworks/comprehensive_evaluation_framework_v3_0.html` |
| Site Index | `/master_index_a_plus_plus_plus.html` |

### Data Files to Verify
- `optB_enriched.json` loads correctly (189 platforms, 50 deep-research)
- `optA.json`, `optB.json`, `optC.json` all accessible
