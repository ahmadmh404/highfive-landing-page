# Typography Catalog

**Feature**: 003-typography-audit  
**Date**: 2026-04-08  
**Status**: In Progress

---

## Overview

This document catalogs all typography styles found across the HighFive landing page sections and components. It serves as the foundation for identifying inconsistencies and creating design tokens.

---

## Page Sections

### 1. Hero Section (hero-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Badge text | Inter/system-ui | 0.875rem (14px) | 500 | normal | normal |
| H1 Title | Inter/system-ui | 3rem (48px) - 4rem (64px) | 700 | 1.1 | -0.02em |
| Subtitle | Inter/system-ui | 1.125rem (18px) - 1.5rem (24px) | 400 | 1.6 | normal |
| Button text | Inter/system-ui | 1rem (16px) | 500 | normal | normal |
| Stats value | Inter/system-ui | 2.25rem (36px) - 3rem (48px) | 700 | normal | normal |
| Stats label | Inter/system-ui | 0.875rem (14px) - 1rem (16px) | 400 | normal | normal |

---

### 2. Services Section (services-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Card title | Inter/system-ui | 1.125rem (18px) | 600 | normal | normal |
| Card description | Inter/system-ui | 0.875rem (14px) | 400 | 1.6 | normal |

---

### 3. Why Choose Us Section (why-choose-us-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Card title | Inter/system-ui | 1.125rem (18px) | 600 | normal | normal |
| Card description | Inter/system-ui | 0.875rem (14px) | 400 | 1.6 | normal |

---

### 4. Process Section (process-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Step title | Inter/system-ui | 1.125rem (18px) | 600 | normal | normal |
| Step description | Inter/system-ui | 0.875rem (14px) | 400 | 1.6 | normal |

---

### 5. Team Section (team-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Member name | Inter/system-ui | 1.125rem (18px) | 600 | normal | normal |
| Member role | Inter/system-ui | 0.875rem (14px) | 400 | normal | normal |
| Member bio | Inter/system-ui | 0.875rem (14px) | 400 | 1.6 | normal |

---

### 6. Projects Section (projects-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Project title | Inter/system-ui | 1.125rem (18px) | 600 | normal | normal |
| Project description | Inter/system-ui | 0.875rem (14px) | 400 | 1.6 | normal |

---

### 7. Tech Stack Section (tech-stack-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Tech name | Inter/system-ui | 0.875rem (14px) | 500 | normal | normal |

---

### 8. Testimonials Section (testimonials-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Quote text | Inter/system-ui | 1rem (16px) | 400 | 1.6 | normal |
| Author name | Inter/system-ui | 0.875rem (14px) | 600 | normal | normal |
| Author title | Inter/system-ui | 0.875rem (14px) | 400 | normal | normal |

---

### 9. AI Tools Section (AIToolsSection.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Tool title | Inter/system-ui | 1.125rem (18px) | 600 | normal | normal |
| Tool description | Inter/system-ui | 0.875rem (14px) | 400 | 1.6 | normal |

---

### 10. Contact Section (contact-section.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Section title | Inter/system-ui | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| Form label | Inter/system-ui | 0.875rem (14px) | 500 | normal | normal |
| Input text | Inter/system-ui | 1rem (16px) | 400 | normal | normal |
| Button text | Inter/system-ui | 1rem (16px) | 500 | normal | normal |

---

### 11. Footer Section (FooterSection.tsx)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Footer heading | Inter/system-ui | 1rem (16px) | 600 | normal | normal |
| Footer link | Inter/system-ui | 0.875rem (14px) | 400 | normal | normal |
| Copyright | Inter/system-ui | 0.875rem (14px) | 400 | normal | normal |

---

## Components

### UI Components (components/ui/)

| Component | Typography Notes |
|-----------|------------------|
| button.tsx | text-base (16px), font-medium (500) |
| badge.tsx | text-xs (12px), font-medium (500) |
| card.tsx | No specific typography, inherits |
| input.tsx | text-sm (14px), normal weight |
| label.tsx | text-sm (14px), font-medium (500) |
| tabs.tsx | text-sm (14px), font-medium (500) |

---

## Design Tokens (Current)

### Font Family
```css
--font-sans: Inter, system-ui, sans-serif;
```

### Font Sizes (Tailwind default)
| Token | Value |
|-------|-------|
| text-xs | 0.75rem (12px) |
| text-sm | 0.875rem (14px) |
| text-base | 1rem (16px) |
| text-lg | 1.125rem (18px) |
| text-xl | 1.25rem (20px) |
| text-2xl | 1.5rem (24px) |
| text-3xl | 1.875rem (30px) |
| text-4xl | 2.25rem (36px) |
| text-5xl | 3rem (48px) |
| text-6xl | 3.75rem (60px) |

### Font Weights
| Token | Value |
|-------|-------|
| font-normal | 400 |
| font-medium | 500 |
| font-semibold | 600 |
| font-bold | 700 |

### Line Heights
| Token | Value |
|-------|-------|
| leading-tight | 1.2 |
| leading-normal | 1.5 |
| leading-relaxed | 1.6 |

---

## Dark Mode Typography

All typography uses CSS variables that automatically switch between light and dark themes:

- Light: `--foreground: oklch(0.15 0 0)`
- Dark: `--foreground: oklch(0.98 0 0)`

No explicit font changes between themes.

---

## Responsive Typography

Typography uses Tailwind responsive prefixes:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

Example from HeroSection:
- `text-4xl` (mobile) → `sm:text-5xl` → `lg:text-6xl`

---

## Summary

| Category | Finding |
|----------|---------|
| Font Family | Consistent - Inter/system-ui across all sections |
| Font Sizes | Uses Tailwind scale consistently |
| Font Weights | 400, 500, 600, 700 used appropriately |
| Line Heights | 1.2 (tight), 1.5 (normal), 1.6 (relaxed) |
| Letter Spacing | Generally normal, -0.02em on large headings |
| Responsive | Uses Tailwind breakpoints correctly |
| Dark Mode | CSS variables handle theme switching |

---

## Inconsistencies Found

*(To be documented in inconsistency-report.md)*

- Line heights vary between 1.2 and 1.6 for body text
- Some sections use `text-balance` utility inconsistently
- Stats section uses `text-3xl` on lg but other large text uses different scale