<div align="center">

<br />

# Dropwing Groups — Public Website

**Four studios. One group. Built to last.**

[![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)

[dropwinggroups.com](https://dropwinggroups.com) · [Design Studio](#-dropwing-design-studio) · [Fenixa](#-fenixa-solutions) · [Persynix](#-persynix) · [Grovia](#-grovia)

</div>

---

## What This Is

This is the public-facing website codebase for **Dropwing Groups** — a mother company operating four specialized studios across design, software, AI automation, and digital marketing. The V2 redesign lives on the `v2` branch, and each studio also has its own standalone website on a dedicated branch.

Built for performance, built to inspire.

---

## The Four Studios

<table>
<tr>
<td width="25%" valign="top">

### 🎨 Dropwing Design Studio
**Creative & Branding**

Visual identity, brand strategy, social media creatives, print design, and everything in between.

`/ventures/design-studio`

Branch: `design-studio`

</td>
<td width="25%" valign="top">

### 💻 Fenixa Solutions
**Software & Technology**

Web apps, mobile apps, product development, DevOps/cloud infrastructure, and cybersecurity.

`/ventures/fenixa`

Branch: `fenixa-solutions`

</td>
<td width="25%" valign="top">

### 🤖 Persynix
**AI & Automation**

n8n, Make, Zapier workflows, AI/ML models, chatbots, business process automation, and data intelligence.

`/ventures/persynix`

Branch: `persynix`

</td>
<td width="25%" valign="top">

### 📈 Grovia
**Digital Marketing**

Social media management, Google Ads, Meta Ads, SEO, video script writing, and email marketing.

`/ventures/grovia`

Branch: `grovia`

</td>
</tr>
</table>

---

## Branch Structure

```
main                  → Production-stable baseline
v2                    → V2 redesign (all four studios, updated homepage & navigation)
design-studio         → Standalone site for Dropwing Design Studio
fenixa-solutions      → Standalone site for Fenixa Solutions
persynix              → Standalone site for Persynix
grovia                → Standalone site for Grovia
```

Each standalone branch is a fully self-contained React app — no shared routing, no shared providers. Drop it on Vercel and it works independently.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build | Vite |
| Styling | Tailwind CSS + CSS custom properties |
| Animations | Framer Motion (`whileInView`, canvas `useAnimationFrame`) |
| Components | shadcn/ui (Radix UI primitives) |
| Icons | Lucide React |
| Routing | React Router DOM v6 |
| Data fetching | TanStack React Query |
| Forms | React Hook Form + Zod |
| SEO | react-helmet-async |
| Package manager | Bun (also works with npm) |

---

## Project Structure

```
src/
├── assets/
│   └── logo/               # Studio logos (design-studio, persynix, grovia, webforge)
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── sections/           # SiteFooter, shared section components
│   ├── Navbar.tsx          # Four-studio dropdown navigation
│   ├── VentureEcosystem.tsx # Cross-studio navigation strip
│   └── PageTransition.tsx
├── pages/
│   ├── Index.tsx           # Homepage
│   ├── DesignStudio.tsx    # Design Studio venture page
│   ├── Fenixa.tsx          # Fenixa Solutions venture page
│   ├── PerSyniX.tsx        # Persynix venture page
│   ├── Grovia.tsx          # Grovia venture page
│   ├── WhoWeAre.tsx
│   ├── WhatWeThink.tsx
│   ├── Contact.tsx
│   └── ...
├── data/                   # Static content and blog data
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── types/                  # Global TypeScript types
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Santhosh-zeta/Dropwing_Groups-Public_Website.git
cd Dropwing_Groups-Public_Website

# Switch to the V2 branch
git checkout v2

# Install dependencies
bun install
# or: npm install

# Start the dev server
bun run dev
# or: npm run dev
```

The app runs at `http://localhost:5173`.

### Working on a standalone studio site

Each studio has its own branch that is a self-contained app:

```bash
git checkout fenixa-solutions
bun install
bun run dev
```

Same pattern for `design-studio`, `persynix`, and `grovia`.

---

## Scripts

```bash
bun run dev        # Start development server with HMR
bun run build      # Production build (outputs to /dist)
bun run preview    # Preview production build locally
bun run lint       # Run ESLint
bun run test       # Run Vitest unit tests
```

---

## Deployment

This project deploys as a static site. Any platform works:

**Vercel / Netlify**
- Build command: `npm run build` or `bun run build`
- Output directory: `dist`
- Node version: 18+

**Self-hosted**
```bash
bun run build
# Serve the /dist folder with any static file server (nginx, caddy, etc.)
```

For standalone studio sites — check out the specific branch and deploy it the same way. Each branch is an independent Vite app.

---

## Design Decisions

A few intentional choices worth noting if you're reading the source:

**Canvas animations over CSS-only** — Each studio venture page uses a `useAnimationFrame` canvas component for its hero background (wave lines, circuit nodes, particle field, scan grid). These are lightweight, GPU-composited, and give each studio a distinct visual character without importing heavy WebGL libraries.

**Per-studio color tokens** — Each studio owns one accent color (purple / blue / emerald / orange). These are applied consistently across the hero, cards, hover states, and the `VentureEcosystem` component.

**Dark-first, never pure black** — Background colors are `#08060f`, `#050a08`, `#070b12`, `#0a0702` rather than `#000000`. This avoids harsh OLED contrast while reading as intentionally dark.

**No premature abstraction** — Studio pages share no component logic. Each is written as a standalone page. Shared patterns (hero layout, service cards, process steps) are copy-adapted rather than component-abstracted, which makes each page independently editable without fear of breaking another.

---

## Studio Color Reference

| Studio | Primary | Background |
|---|---|---|
| Dropwing Design Studio | `#a855f7` (purple) | `#08060f` |
| Fenixa Solutions | `#3b82f6` (blue) | `#070b12` |
| Persynix | `#10b981` (emerald) | `#050a08` |
| Grovia | `#f97316` (orange) | `#0a0702` |

---

## Contact

**Dropwing Groups**
- Website: [dropwinggroups.com](https://dropwinggroups.com)
- Email: [hello@dropwinggroups.com](mailto:hello@dropwinggroups.com)
- Instagram: [@dropwinggroups](https://instagram.com/dropwinggroups)
- LinkedIn: [Dropwing Groups](https://linkedin.com/company/dropwinggroups)

For design projects: [design@dropwinggroups.com](mailto:design@dropwinggroups.com)  
For software projects: [hello@dropwinggroups.com](mailto:hello@dropwinggroups.com)  
For automation: [automation@dropwinggroups.com](mailto:automation@dropwinggroups.com)  
For marketing: [marketing@dropwinggroups.com](mailto:marketing@dropwinggroups.com)

---

<div align="center">

© 2024–2026 Dropwing Groups · Chennai, India  
Design · Software · Automation · Marketing

</div>
