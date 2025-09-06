# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a Vite project
6. Add environment variable: `VITE_STORYBLOK_ACCESS_TOKEN`
7. Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Add environment variable in Vercel dashboard

## Environment Variables

Add these in your Vercel project settings:

- `VITE_STORYBLOK_ACCESS_TOKEN` - Your Storyblok access token
- `PING_MESSAGE` (optional) - Custom message for /api/ping

## Build Settings

Vercel will automatically detect:

- **Framework**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist/spa`
- **Install Command**: `pnpm install`

## API Routes

Your API routes are handled by `/api/index.ts`:

- `/api/ping` - Returns ping message
- `/api/demo` - Returns demo data

## SPA Routing

All non-API routes are redirected to `index.html` for React Router to handle.

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Build successful
- [ ] Site accessible
- [ ] API routes working
- [ ] SPA routing working

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18.x)
- Verify all dependencies installed
- Check for TypeScript errors

### API Routes Not Working

- Verify `/api/index.ts` exists
- Check Vercel function logs
- Ensure proper imports

### SPA Routing Issues

- Verify `vercel.json` rewrites are correct
- Check that all routes redirect to `index.html`

## Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate will be automatically provisioned
