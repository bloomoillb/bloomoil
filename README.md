# Bloom Oil Website

A beautiful, production-ready website for Bloom Oil - Premium Natural Cosmetic Oils.

## Features

- **5 Pages**: Home page + 4 product detail pages (Hair Oil, Body Oil, Eyelashes Oil, Eyebrows Oil)
- **Elegant Design**: Pink/rose color scheme with smooth animations and transitions
- **WhatsApp Integration**: Floating WhatsApp button (79403188) on every page
- **Cash on Delivery**: Prominently displayed badge
- **Social Media Links**: Facebook, Instagram, Twitter, and TikTok (@bloomoil)
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Beautiful Imagery**: High-quality images from Pexels CDN
- **Video Placeholders**: Ready for product demonstration videos
- **SEO Optimized**: Meta tags and descriptions for better search visibility

## Quick Start

### Development Mode

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your website.

### Production Build

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Deployment Options

Your website is ready to deploy to any static hosting service. Here are the easiest options:

### 1. Netlify (Recommended - Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder into Netlify
3. Your site is live!

**OR** Connect your GitHub repository:
- Click "New site from Git"
- Connect your repo
- Build command: `npm run build`
- Publish directory: `dist`

### 2. Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel --prod`
4. Your site is live!

### 3. GitHub Pages (Free)

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select branch and `/dist` folder
4. Your site will be live at `username.github.io/repo-name`

### 4. InfinityFree (Free)

1. Create account at [infinityfree.net](https://infinityfree.net)
2. Upload contents of `dist` folder via FTP
3. Your site is live!

### 5. 000webhost (Free)

1. Create account at [000webhost.com](https://000webhost.com)
2. Use File Manager to upload `dist` folder contents
3. Your site is live!

## Project Structure

```
bloom-oil-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── pages/
│   │   ├── Home.tsx         # Home page with all products
│   │   └── ProductDetail.tsx   # Product detail pages
│   ├── App.tsx              # Main app with routing
│   └── index.css            # Global styles
├── dist/                    # Production build (after npm run build)
└── public/                  # Static assets
```

## Customization

### Update Contact Information

- **WhatsApp Number**: Edit in `src/components/WhatsAppButton.tsx` and `src/components/Footer.tsx`
- **Social Media Links**: Edit in `src/components/Footer.tsx`

### Update Products

- Edit product information in `src/pages/ProductDetail.tsx` in the `productsData` object

### Change Images

- Replace Pexels image URLs with your own product images
- Update URLs in `src/pages/Home.tsx` and `src/pages/ProductDetail.tsx`

### Update Colors

- The color scheme uses Tailwind CSS classes
- Main colors: `pink-50`, `pink-100`, `pink-500`, `rose-50`, etc.
- Global styles in `src/index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: ~65 KB gzipped JavaScript
- Images loaded from Pexels CDN
- Optimized for fast loading
- Production build is fully optimized

## Support

For questions or support, contact via WhatsApp: 79403188

## License

All rights reserved © 2024 Bloom Oil

---

Built with React, TypeScript, Tailwind CSS, and Vite
