# Quickstart: Typography Audit

## Overview

This document provides guidance for using the typography audit documentation when developing new sections or components for the HighFive landing page.

## Audit Output

The typography audit produces:

1. **Typography Inventory** - Complete catalog of all typography styles used
2. **Inconsistency Report** - Identified deviations from best practices
3. **Design Tokens** - CSS variables and JSON tokens for implementation
4. **Recommendations** - Suggested improvements for consistency

## Using the Design Tokens

### CSS Variables

```css
:root {
  /* Typography Scale */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Font Families */
  --font-sans: 'Inter', system-ui, sans-serif;
  
  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
}
```

### JSON Tokens

```json
{
  "typography": {
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem"
    },
    "fontFamily": {
      "sans": "'Inter', system-ui, sans-serif"
    }
  }
}
```

## Best Practices Checklist

Before implementing any new typography:

- [ ] Check design tokens first - use defined variables
- [ ] Maintain heading hierarchy ratios (1.25 - 1.5 scale)
- [ ] Ensure minimum 16px base font size for body text
- [ ] Verify contrast ratios meet WCAG AA (4.5:1 for normal text)
- [ ] Test in both dark and light modes
- [ ] Consider localization - fonts must support all required languages

## Finding Help

- **Full Audit Report**: See the typography audit documentation in project specs
- **Tailwind Config**: Check `tailwind.config.ts` for theme customization
- **Constitution**: Review `.specify/memory/constitution.md` for design principles