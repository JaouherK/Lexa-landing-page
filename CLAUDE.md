# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lexa landing page - a static marketing site for an AI translation platform. No build tools, framework, or package manager.

## Development

```bash
npm install          # Install dependencies
npm run build        # Build Tailwind CSS (one-time)
npm run watch        # Watch mode for Tailwind changes
```

Serve with any static file server:
```bash
python -m http.server 8000
# or
npx serve
```

## Architecture

**Static site with three files:**
- `index.html` - Single-page layout with inline Tailwind config (lines 18-50)
- `styles.css` - Custom animations styled after Landio Framer template
- `script.js` - Vanilla JS for interactivity

**Styling approach:**
- Tailwind CSS via CDN (`cdn.tailwindcss.com`) - not locally installed
- Custom color tokens defined in inline Tailwind config (`lexa-bg`, `lexa-card`, `lexa-accent`, etc.)
- Custom CSS variables for animation easings (`:root` in styles.css)

**Key JavaScript modules (all in script.js):**
- `initScrollAnimations()` - Intersection Observer for `[data-animate]` elements
- `initAnimatedCounters()` - Number counters with `[data-counter]` attribute
- `initFAQAccordion()` - Accordion for `.faq-item` elements
- `initPricingToggle()` - Monthly/yearly price switching
- `initMobileMenu()` - Dynamically created mobile menu
- `initParallax()` - Subtle parallax on `[data-parallax]` elements

**Animation system:**
- Hero animations use custom cubic-bezier easings from CSS variables
- Scroll animations triggered by `data-animate` attribute with optional `data-animate-delay`
- Animation variants: default (slide up), `scale`, `fade`, `slide-left`, `slide-right`

## Assets

- `assets/logo.svg` - Lexa logo
- `media/hero-bg.mp4` - Hero section background video
