# Deployment Guide

Complete guide for deploying the Gradientflo landing page to production.

## Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint passes (`npm run lint`)
- [ ] No console errors in browser
- [ ] All components under 500 lines
- [ ] Production build succeeds (`npm run build`)

### Content Review
- [ ] All text content is correct
- [ ] Images are optimized and loading
- [ ] Links are working
- [ ] Email form is functional
- [ ] Metadata is set in `app/layout.tsx`

### Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile devices
- [ ] Test on tablet
- [ ] Test form submission
- [ ] Test all navigation links
- [ ] Test responsive breakpoints

### Performance
- [ ] Images are using Next.js Image component
- [ ] Fonts are optimized
- [ ] No unnecessary dependencies
- [ ] Build size is reasonable

### SEO
- [ ] Page title is set
- [ ] Meta description is set
- [ ] Open Graph tags configured
- [ ] Alt text on images

## Deployment Platforms

### Option 1: Vercel (Recommended)

Vercel is the easiest option for Next.js apps (it's made by the Next.js team).

#### Steps:

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy"

3. **Configure (if needed):**
   - Environment variables (none required for this project)
   - Custom domain
   - Analytics

4. **Done!**
   - Your site is live
   - Auto-deploys on every push to main

#### Vercel Configuration (Optional)

Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

---

### Option 2: Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

2. **Deploy:**
   - Connect GitHub repository
   - Configure build settings
   - Deploy

3. **netlify.toml configuration:**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

---

### Option 3: AWS Amplify

1. **Connect repository:**
   - Go to AWS Amplify Console
   - Connect GitHub repository

2. **Build settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

---

### Option 4: Self-Hosted (VPS/Docker)

#### Using PM2:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Install PM2:**
   ```bash
   npm install -g pm2
   ```

3. **Start with PM2:**
   ```bash
   pm2 start npm --name "gradientflo" -- start
   pm2 save
   pm2 startup
   ```

#### Using Docker:

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Build and run:
```bash
docker-compose up -d
```

---

## Environment Variables

This project currently doesn't require environment variables, but if you add features like:
- Analytics
- Backend API
- Database
- Email service

Create `.env.local` for local development:
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

For production, set these in your hosting platform's dashboard.

---

## Custom Domain Setup

### Vercel:
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS

### DNS Records:
```
Type: A
Name: @
Value: [Platform IP]

Type: CNAME
Name: www
Value: [Platform domain]
```

---

## Post-Deployment Checklist

### Verification
- [ ] Site loads correctly
- [ ] All pages work
- [ ] Forms submit properly
- [ ] Images load
- [ ] Fonts load correctly
- [ ] Mobile version works
- [ ] SSL certificate is active (HTTPS)

### Performance Testing
- [ ] Run Lighthouse test (aim for 90+ scores)
- [ ] Test page load speed
- [ ] Check Core Web Vitals
- [ ] Test on slow 3G connection

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags
- [ ] Check robots.txt
- [ ] Test Open Graph preview

### Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure analytics (Google Analytics, Plausible)
- [ ] Set up uptime monitoring
- [ ] Configure performance monitoring

---

## Continuous Deployment

### Automatic Deployments

With Vercel/Netlify:
- Push to `main` branch → deploys to production
- Push to other branches → creates preview deployment
- Pull requests → creates preview deployment

### Manual Deployments

```bash
# Build locally
npm run build

# Test production build
npm run start

# Deploy (platform specific)
vercel deploy --prod
# or
netlify deploy --prod
```

---

## Rollback Strategy

### Vercel:
1. Go to deployments
2. Click on previous deployment
3. Click "Promote to Production"

### Git-based rollback:
```bash
git revert HEAD
git push origin main
```

---

## Performance Optimization

### Already Implemented:
✅ Next.js Image optimization
✅ Font optimization
✅ Code splitting
✅ Minification
✅ Tree shaking

### Additional Optimizations:
- [ ] Enable CDN caching
- [ ] Configure proper Cache-Control headers
- [ ] Enable compression (gzip/brotli)
- [ ] Set up image CDN (optional)

---

## Security

### Headers Configuration

Add to `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics
```typescript
// Add to app/layout.tsx <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check files are in `public/` directory
- Verify paths start with `/`
- Check file permissions on server

### 404 Errors
- Verify `app/` directory structure
- Check Next.js version compatibility
- Review deployment logs

### Slow Performance
- Check Lighthouse scores
- Optimize images
- Review network tab in DevTools
- Check bundle size: `npm run build`

---

## Scaling

### When to Scale:
- High traffic volume
- Slow response times
- Increased load

### Scaling Options:
1. **Vercel Pro**: Auto-scales, analytics, support
2. **Load Balancer**: Distribute traffic
3. **CDN**: Cache static assets globally
4. **Database**: If you add backend features

---

## Backup & Recovery

### Code Backup:
- ✅ Git repository (GitHub)
- ✅ Remote backup of repo

### Asset Backup:
- Download `public/assets/` regularly
- Keep original Figma files

### Database Backup (if applicable):
- Automated daily backups
- Point-in-time recovery

---

## Cost Estimation

### Vercel (Hobby - Free):
- ✅ Free for this project
- Unlimited deployments
- Auto-scaling
- Global CDN

### Vercel (Pro - $20/mo):
- More bandwidth
- Analytics
- Support
- Team features

### Other Costs:
- Domain name: $10-15/year
- Email service (if needed): $0-10/mo
- Analytics (optional): $0-20/mo

---

## Support & Maintenance

### Regular Updates:
```bash
# Update dependencies monthly
npm update
npm audit fix
```

### Security:
```bash
# Check for vulnerabilities
npm audit
```

### Monitoring:
- Check uptime weekly
- Review error logs
- Monitor performance metrics
- Check user feedback

---

## Launch Checklist

### Pre-Launch
- [ ] All content is final
- [ ] All images are optimized
- [ ] Forms are working
- [ ] Tests pass
- [ ] Performance is good (90+ Lighthouse)
- [ ] Mobile works perfectly
- [ ] Cross-browser tested

### Launch Day
- [ ] Deploy to production
- [ ] Verify site is live
- [ ] Test all functionality
- [ ] Submit sitemap
- [ ] Announce launch

### Post-Launch (Week 1)
- [ ] Monitor errors
- [ ] Check analytics
- [ ] Review performance
- [ ] Gather feedback
- [ ] Make hotfixes if needed

---

## Success Metrics

### Performance Targets:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1

### Business Metrics:
- Page views
- Email signups
- Bounce rate
- Time on page

---

**You're ready to deploy!** 🚀

Choose your platform, follow the steps, and your site will be live in minutes.

