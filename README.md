# Jari Kovalainen — Personal Website (Vite + React)

[![Deploy to Vercel](https://github.com/JariKovis/Pages/actions/workflows/vercel-deploy.yml/badge.svg?branch=main)](https://github.com/JariKovis/Pages/actions/workflows/vercel-deploy.yml)

A modern, fast personal site for a university IT lecturer. Built with React (Vite) and styled with clean, accessible components.

## Overview
- Single-page layout with sections for Home, Focus Areas, Teaching, Thesis, Projects, and Contact.
- Polished UI: sticky header, animated hero, responsive cards, and a back-to-top button.
- Static assets served from `public`, ready for deployment to any static host.

## Features
- Sticky navigation with hover underline animation and neutral background.
- Hero section with gradient typography, animated CTA buttons (split style), and image hover effects.
- Focus Areas grid with icons, descriptions, and feature lists.
- Teaching cards with gradient headers/icons and subtle background accents.
- Thesis steps and Projects layout blocks.
- Footer with LinkedIn, X/Twitter, and GitHub SVG icons.
- Back-to-top button using `IntersectionObserver`.
- Custom AI-themed favicon.

## Tech Stack
- React + Vite
- Plain CSS (centralized styles)
- Node.js >= 20.19 (Vite 7 requirement)

## Quick Start
1. Install prerequisites: Node 20.19+ and npm 10+.
2. Install and run:
   ```bash
   cd react-app
   npm install
   npm run dev
   ```
3. Open the dev server URL shown in the terminal (usually http://localhost:5173).

## Available Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview the production build locally

## Project Structure
```
Pages/
├─ images/                    # Original assets (copied into react-app/public/images)
├─ styles/                    # Original CSS source
├─ react-app/
│  ├─ public/
│  │  ├─ images/             # Site images
│  │  └─ vite.svg            # Replaced with AI-themed favicon
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ Header.jsx
│  │  │  ├─ Hero.jsx
│  │  │  ├─ FocusAreas.jsx
│  │  │  ├─ Teaching.jsx
│  │  │  ├─ Thesis.jsx
│  │  │  ├─ Projects.jsx
│  │  │  ├─ Contact.jsx
│  │  │  └─ BackToTop.jsx
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ styles.css          # Central styles
│  ├─ index.html             # Vite HTML entry
│  └─ package.json
└─ README.md
```

Key files:
- [react-app/src/App.jsx](react-app/src/App.jsx): Composes all sections
- [react-app/src/components/Header.jsx](react-app/src/components/Header.jsx): Sticky nav
- [react-app/src/components/Hero.jsx](react-app/src/components/Hero.jsx): Hero with split buttons
- [react-app/src/components/FocusAreas.jsx](react-app/src/components/FocusAreas.jsx): Enhanced cards
- [react-app/src/components/Teaching.jsx](react-app/src/components/Teaching.jsx): Styled teaching cards
- [react-app/src/components/BackToTop.jsx](react-app/src/components/BackToTop.jsx): Scroll-to-top button
- [react-app/src/styles.css](react-app/src/styles.css): Styles for layout and components

## Assets & Styling
- Images live under [react-app/public/images](react-app/public/images).
- Global styles in [react-app/src/styles.css](react-app/src/styles.css).
- Favicon is the SVG at [react-app/public/vite.svg](react-app/public/vite.svg) (replaced with an AI-themed icon).

## Deployment
This is a static site once built. Typical options:
- Vercel / Netlify: import the repo, set build command `npm run build`, output `dist`.
- GitHub Pages: build locally and publish `dist/` or use an action to build and deploy.

Commands:
```bash
# Build
cd react-app
npm run build

# Preview the production build locally
npm run preview
```

### CI/CD: Deploy to Vercel via GitHub Actions
This repository includes an automated deploy workflow: [vercel-deploy.yml](.github/workflows/vercel-deploy.yml).

- Triggers on pushes to `main` (and can be run manually).
- Builds from the `react-app` directory and deploys to Vercel as production (`--prod`).

Required GitHub repository secrets (Settings → Secrets and variables → Actions):
- `VERCEL_TOKEN` — Vercel personal token
- `VERCEL_ORG_ID` — Vercel organization ID
- `VERCEL_PROJECT_ID` — Vercel project ID

Vercel project settings are configured in [react-app/vercel.json](react-app/vercel.json) (build command and output directory).

You can monitor runs on the Actions tab or via the badge at the top of this README.

## Customization
- Content: edit the JSX files in [react-app/src/components](react-app/src/components).
- Styles: adjust tokens and rules in [react-app/src/styles.css](react-app/src/styles.css).
- Images: replace or add under [react-app/public/images](react-app/public/images) and reference with `/images/...` in JSX.

## Accessibility & SEO
- All images include `alt` text.
- Mobile-friendly with responsive layout.
- Add meta tags/Open Graph as needed in [react-app/index.html](react-app/index.html).

---
If you want, I can also add a deploy workflow (e.g., Vercel/Netlify config or GitHub Pages action).