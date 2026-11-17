# ERNEX Website V1

Bilingual (English/Persian) responsive React website for the ERNEX brand.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages
1. Push this project to a GitHub repository.
2. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repository.
4. Use these build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy. Cloudflare will provide a `*.pages.dev` address and HTTPS.

## Customize
- Main content and translations: `src/main.jsx`
- Visual styling: `src/style.css`
- Social links: `links` object in `src/main.jsx`

## Current content notes
- The Great Escape 2 (فرار بزرگ ۲)
- Zombie Survival Shooter
- AI Tools, Projects and Future Lab sections are initial V1 presentation sections.
- Replace the abstract game artwork with the official game screenshots when supplied.
- No backend, accounts, database or API secrets are included in V1.
