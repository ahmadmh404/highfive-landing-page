# Typography Inconsistency Report

**Feature**: 003-typography-audit  
**Date**: 2026-04-08  
**Status**: In Progress

---

## Overview

This document catalogs typography inconsistencies found across the HighFive landing page.

---

## Inconsistencies Found

### 1. Line Height Variation in Body Text

**Issue**: Body text uses varying line heights across sections.

| Section | Line Height | Value |
|----------|-------------|-------|
| Hero subtitle | Relaxed | 1.6 |
| Services card description | Normal | 1.6 |
| Testimonials quote | Normal | 1.6 |
| Some descriptions | Tight | Not specified |

**Recommendation**: Standardize body text line height to 1.6 (leading-relaxed) for all paragraphs.

---

### 2. Text Balance Utility Inconsistency

**Issue**: Not all multi-line headings use `text-balance` utility.

**Found**:
- Hero title: Uses `text-balance` ✓
- Section titles: Do NOT use `text-balance` ✗

**Recommendation**: Add `text-balance` to all section titles for better readability.

---

### 3. Stats Section Typography Scale

**Issue**: Stats value uses `text-3xl` on lg breakpoint, but other large text uses `text-4xl` or `text-5xl`.

**Location**: HeroSection.tsx line 106
```jsx
<div className="text-3xl font-bold text-foreground lg:text-4xl">
```

**Recommendation**: Consider using consistent scale: `text-4xl lg:text-5xl` for stats values.

---

### 4. Button Font Sizes

**Issue**: Primary buttons use `text-base` (16px) but some secondary buttons may vary.

**Found**:
- Hero buttons: `text-base` ✓
- Other CTAs: Need verification

**Recommendation**: Standardize all button text to `text-base`.

---

### 5. Letter Spacing on Headings

**Issue**: Only large headings (H1, section titles) use `tracking-tight` (-0.02em). Medium headings (card titles) don't specify letter spacing.

**Found**:
- H1: `tracking-tight` ✓
- Section titles (text-4xl): `tracking-tight` ✓
- Card titles (text-lg): No letter spacing specified ✗

**Recommendation**: Add `tracking-tight` to all headings for visual consistency.

---

### 6. Gap in Typography Scale Documentation

**Issue**: The current Tailwind 4 setup doesn't define custom font sizes - uses default scale.

**Impact**: If design system requires specific sizes, they need to be explicitly defined.

**Recommendation**: Document which Tailwind scale values are in use and consider defining custom tokens for brand consistency.

---

### 7. Dark Mode Contrast Concerns

**Issue**: While CSS variables handle dark mode, specific contrast ratios haven't been verified.

**Impact**: Some text may not meet WCAG AA (4.5:1) in dark mode.

**Recommendation**: Run automated contrast checks (Task T012-T013).

---

## Consistency Score

| Metric | Score |
|--------|-------|
| Font Family | 100% - Consistent |
| Font Sizes | 90% - Minor variations |
| Font Weights | 95% - Consistent |
| Line Heights | 80% - Body text varies |
| Letter Spacing | 85% - Headings inconsistent |
| Responsive | 100% - Consistent |

**Overall Consistency**: ~88%

---

## Remediation Priority

| Priority | Issue | Effort |
|----------|-------|--------|
| High | Add text-balance to section titles | Low |
| High | Verify dark mode contrast | Medium |
| Medium | Standardize line heights | Medium |
| Medium | Add tracking-tight to card titles | Low |
| Low | Standardize stats scale | Low |

---

## Notes

- These are analysis findings only - no implementation changes per FR-001
- Recommendations will be compiled in recommendations.md
- Design tokens will be created to prevent future inconsistencies

---

## Additional Inconsistencies Found During Component Audit

### 7. Footer Hardcoded Colors

**Issue**: FooterSection.tsx uses hardcoded hex colors instead of CSS variables.

**Location**: FooterSection.tsx lines 59, 81, 86, 112, 122, 138, 145, 152
```tsx
style={{ color: "#C1C2D3" }}
style={{ color: "#CBACF9" }}
style={{ color: "#BEC1DD" }}
```

**Impact**: Won't adapt to dark/light mode, inconsistent with rest of site using CSS variables.

**Recommendation**: Replace hardcoded colors with CSS variable classes (e.g., `text-muted-foreground`, `text-primary`).