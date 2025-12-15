# FashionOS Marketing Site Setup & Architecture

## 1. Project Overview
FashionOS is a luxury operating system for the fashion industry. This repository contains the **Marketing Site Frontend**, built with a focus on editorial aesthetics, high performance, and component modularity.

The current implementation is a **React 19 + TypeScript** Single Page Application (SPA) prototype, designed to be easily hydrated into a **Next.js 14 App Router** production environment.

## 2. Tech Stack

### Core Framework
*   **React**: `^18.3.1` (Targeting 19 for Production)
*   **TypeScript**: `^5.0`
*   **Bundler**: Vite (Recommended for dev) / Next.js Compiler (Production)

### Styling & UI
*   **Tailwind CSS**: Utility-first CSS framework.
    *   *Configuration*: Custom `tailwind.config.js` with luxury tokens (`fashion-black`, `fashion-cream`, `fashion-pink`).
    *   *Fonts*: Inter (Sans) and Playfair Display (Serif) via Google Fonts.
*   **Icons**: `lucide-react` for consistent, lightweight SVG icons.
*   **Animations**: `react-intersection-observer` for scroll-triggered entrance animations (`FadeIn`, `SlideUp`).
*   **Utilities**: `clsx` and `tailwind-merge` for dynamic class composition.

## 3. Directory Structure

The project follows a generic atomic design structure compatible with the `src` directory pattern.

```
src/
├── app/                  # (Next.js App Router Target)
│   ├── layout.tsx        # Root layout with fonts & global styles
│   └── page.tsx          # Homepage composition
├── components/           # UI Building Blocks
│   ├── home/             # Page-specific sections
│   │   ├── Hero.tsx
│   │   ├── ValueGrid.tsx
│   │   ├── Talent.tsx
│   │   ├── ProductionBand.tsx
│   │   ├── EventsBlock.tsx
│   │   ├── MediaGrid.tsx
│   │   ├── DigitalExperiences.tsx
│   │   ├── SocialCommerce.tsx
│   │   └── Personas.tsx
│   ├── layout/           # Structural components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── ui/               # Reusable primitives
│       ├── Button.tsx
│       ├── FadeIn.tsx
│       └── ...
├── lib/                  # Utilities
│   └── cn.ts             # Class name merger
└── styles/               # Global CSS
    └── globals.css       # Tailwind directives
```

## 4. Next.js 14 Integration (Production Target)

While the prototype runs as a client-side SPA, the architecture is strictly strictly typed to support **Next.js 14+**.

### Versioning
*   **Next.js**: `14.2.0+`
*   **Router**: App Router (`app/` directory)
*   **Rendering**: Server Components (RSC) by default for marketing pages; Client Components (`"use client"`) for interactive UI (Navbar, FadeIn, Carousels).

### Migration Guide
1.  Move `components/` to the Next.js `src/components` folder.
2.  Ensure `Navbar.tsx` and `FadeIn.tsx` include the `"use client"` directive at the top of the file.
3.  Migrate `App.tsx` logic into `src/app/page.tsx`.
4.  Migrate `index.html` font links to `src/app/layout.tsx` using `next/font/google`.

## 5. Setup & Development

### Prerequisites
*   Node.js > 18.17.0
*   pnpm (preferred) or npm

### Installation
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

### Build
```bash
pnpm build
pnpm start
```

## 6. Recommended Documentation

To fully professionalize this repository, the following additional documentation is recommended:

### A. `docs/DESIGN_SYSTEM.md`
*   **Color Palette**: Hex codes and usage rules for `fashion-black`, `fashion-cream`, etc.
*   **Typography**: Scale definitions for Headings (Serif) vs Body (Sans).
*   **Spacing**: Grid system and container max-widths.

### B. `docs/CONTRIBUTING.md`
*   **Linting**: ESLint + Prettier configuration.
*   **Commit Convention**: Conventional Commits (e.g., `feat: add social commerce section`).
*   **PR Process**: Review guidelines for maintaining "Luxury Aesthetic".

### C. `docs/DEPLOYMENT.md`
*   **Vercel**: Configuration for automatic deployments.
*   **Environment Variables**: Handling API keys for future integrations (Supabase, CMS).
