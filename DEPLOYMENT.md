# Venus Transport React - Deployment Guide

## 🚀 Quick Deployment Guide

This guide will help you deploy your Venus Transport React application to production.

## Prerequisites

- Node.js installed
- Project built successfully
- Hosting service account (Netlify, Vercel, or similar)

## Step 1: Test Locally

Before deploying, ensure everything works:

```bash
cd venus-transport-react
npm install
npm start
```

Visit `http://localhost:3000` and test all pages.

## Step 2: Create Production Build

```bash
npm run build
```

This creates an optimized `build/` folder.

## Step 3: Choose Deployment Method

### Method A: Netlify (Easiest - Recommended)

**Option 1: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag the `build` folder to Netlify
4. Done! Your site is live

**Option 2: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd venus-transport-react
npm run build
netlify deploy --prod --dir=build
```

**Important**: Create a `_redirects` file in the `public` folder:
```
/*    /index.html   200
```

### Method B: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd venus-transport-react
vercel --prod
```

Follow the prompts. Vercel automatically handles SPA routing.

### Method C: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/venus-transport",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

**Note**: GitHub Pages requires using `HashRouter` instead of `BrowserRouter` for proper routing.

### Method D: Traditional Hosting (cPanel, Shared Hosting)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `build/` folder to your web server's public directory (usually `public_html` or `www`)

3. Create a `.htaccess` file in the root directory:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## Step 4: Configure Custom Domain (Optional)

### Netlify:
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records

### Vercel:
1. Go to Project Settings > Domains
2. Add domain
3. Configure DNS

## Step 5: Environment Variables

If you need environment variables:

1. Create `.env` file locally (already in .gitignore):
```env
REACT_APP_PHONE=+919313879878
REACT_APP_EMAIL=info@venustransport.com
```

2. Add to hosting platform:
   - **Netlify**: Site settings > Build & deploy > Environment
   - **Vercel**: Project Settings > Environment Variables

## Step 6: SSL Certificate

Most modern hosts (Netlify, Vercel) provide free SSL automatically. For traditional hosting:
- Use Let's Encrypt (usually available in cPanel)
- Or your host's SSL certificate option

## Troubleshooting

### Issue: Routes don't work (404 errors)

**Solution**: Ensure your server redirects all requests to `index.html`

**Netlify**: Add `_redirects` file:
```
/*    /index.html   200
```

**Apache**: Use `.htaccess` (see Method D above)

**Nginx**: Add to config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Issue: Images not loading

**Solution**: 
- Ensure images are in `public/assets/` folder
- Use absolute paths: `/assets/images/logo.png`
- Check file names match exactly (case-sensitive)

### Issue: Blank page after deployment

**Solution**:
1. Check browser console for errors
2. Verify build completed successfully
3. Check if `homepage` in package.json is correct
4. Clear browser cache

## Performance Checklist

- [ ] Images optimized (WebP format recommended)
- [ ] Build size under 2MB
- [ ] All console errors fixed
- [ ] Mobile responsive tested
- [ ] All links working
- [ ] Forms submitting correctly
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

## Post-Deployment

1. **Test all pages**: Click through every page
2. **Test on mobile**: Check responsive design
3. **Check SEO**: View page source, verify meta tags
4. **Test forms**: Submit contact form
5. **Check speed**: Use Google PageSpeed Insights
6. **Monitor**: Set up Google Analytics (optional)

## Continuous Deployment (Optional)

### With Netlify/Vercel + GitHub:

1. Push code to GitHub
2. Connect repository to Netlify/Vercel
3. Every push automatically deploys

**GitHub Action example** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --dir=build --prod
```

## Support

For deployment issues:
- Email: info@venustransport.com
- Phone: +91 93138 79878

---

**Recommended: Netlify for easiest deployment with automatic SSL and CDN**
