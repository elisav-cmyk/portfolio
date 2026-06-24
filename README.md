# Elisa Vargas — Portfolio

**Live site:** [elisavargas.com](https://elisavargas.com)

## Tech Stack
- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- Motion (Framer Motion)

## Design Tokens
All colors, spacing, and typography are defined as CSS custom properties in `src/styles/globals.css`. To retheme, edit the `:root` block — no component files need touching.

## Development
```bash
pnpm install
pnpm dev
```

## Deployment
Push to `main` — GitHub Actions builds and deploys automatically to GitHub Pages.

The `public/CNAME` file routes `elisavargas.com` to this GitHub Pages instance.
