# Website Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- GitHub account
- Repository with all framework files

### Steps
1. Push all files to the `main` branch
2. Go to Repository → Settings → Pages
3. Source: Deploy from branch → `main` → `/ (root)`
4. Click Save
5. Wait 2-5 minutes for deployment

### Custom Domain (Optional)
1. Add your domain to the CNAME file
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Verification
- Check `https://username.github.io/repo-name`
- Verify all internal links work
- Test search and filter functionality
- Confirm charts render correctly
