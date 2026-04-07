# Implementation Plan: Apply Frontend Best Practices

**Branch**: `002-reverted-commit-where` | **Date**: 2026-04-07 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-reverted-commit-where/spec.md`

## Summary

Apply frontend best practices to the HighFive landing page codebase while preserving all existing visual effects (animations, transitions, Three.js elements). Focus on code quality (naming conventions, TypeScript type safety), performance optimization, and accessibility improvements. Validation via automated linting + manual review.

## Technical Context

**Language/Version**: TypeScript 5.x / JavaScript (Next.js 16 App Router)  
**Primary Dependencies**: Next.js 16, Tailwind CSS, Lucide React, next-themes, next-intl  
**Storage**: N/A (static landing page)  
**Testing**: ESLint, TypeScript strict mode  
**Target Platform**: Web (responsive)  
**Project Type**: Web application (landing page)  
**Performance Goals**: Lighthouse score >90, bundle size reduction or maintenance  
**Constraints**: Must preserve all existing visual effects  
**Scale/Scope**: Single landing page with ~20 components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Honesty | PASS | No changes to content - only code improvements |
| II. Usefulness | PASS | No changes to interactive demos or UI functionality |
| III. Human + Technical | PASS | Preserving all visual effects and team content |
| IV. High Quality | PASS | Best practices directly improve code quality |

## Project Structure

### Documentation (this feature)

```text
specs/002-reverted-commit-where/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A for landing page)
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
# Next.js App Router structure (landing page)
app/
├── [locale]/
│   ├── page.tsx
│   └── layout.tsx
└── api/

components/
├── ui/                  # Reusable UI components
├── *.tsx               # Section components (HeroSection, ServicesSection, etc.)
└── FooterSection.tsx

lib/
├── utils.ts
└── internationalization

hooks/
└── use*.ts

public/
├── images/
└── locales/

styles/
└── globals.css
```

**Structure Decision**: Next.js 16 App Router with app/[locale]/ structure for internationalization. Components in flat /components folder with UI components in /components/ui.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | No violations | N/A |

## Phase 0: Research

### Current Codebase Analysis

**Tech Stack Confirmed**:
- Next.js 16 (App Router)
- TypeScript 5.x
- Tailwind CSS
- Framer Motion (animations)
- Three.js / @react-three/fiber (3D effects)
- next-intl (localization)
- next-themes (dark/light mode)

**Areas to Audit**:
1. Component naming conventions
2. TypeScript type coverage
3. Hook patterns and custom hooks
4. Accessibility (ARIA, keyboard navigation)
5. Bundle size and code splitting
6. Performance anti-patterns

### Best Practices to Apply

| Area | Best Practice |
|------|--------------|
| TypeScript | Enable strict mode, proper typing for props, avoid `any` |
| Components | Consistent naming (PascalCase), proper prop typing |
| Hooks | Custom hooks for reusable logic, proper deps in useEffect |
| Accessibility | ARIA labels, focus management, semantic HTML |
| Performance | Lazy loading, code splitting, image optimization |
| Styling | Tailwind utility classes, design tokens |

## Phase 1: Design

### Component Inventory

| Component | Location | Purpose |
|-----------|----------|---------|
| HeroSection | components/ | Main hero with animations |
| ServicesSection | components/ | Service cards |
| GridGlobe | components/ui/ | Three.js 3D globe |
| FooterSection | components/ | Footer with links |
| MovingBorders | components/ui/ | Button component |
| + others | components/ | Various UI sections |

### Key Design Decisions

1. **TypeScript Strict Mode**: Enable all strict checks, avoid `any`
2. **Component Props**: Define proper interfaces for all components
3. **Accessibility**: Add ARIA labels where missing, ensure keyboard navigation
4. **Performance**: Add dynamic imports for heavy components (Three.js)

## Phase 2: Implementation

### Implementation Phases

**Phase 2.1: Code Quality (Week 1)**
- Audit all components for naming consistency
- Add/improve TypeScript types
- Fix linting errors
- Remove any `any` types

**Phase 2.2: Performance (Week 2)**
- Add lazy loading for Three.js components
- Optimize images
- Check bundle analyzer

**Phase 2.3: Accessibility (Week 3)**
- Add ARIA labels
- Test keyboard navigation
- Fix any a11y issues

**Phase 2.4: Validation (Week 4)**
- Run full lint
- Lighthouse audit
- Manual testing of all effects
- Accessibility audit

### Success Criteria Validation

| SC | Metric | Target |
|----|--------|--------|
| SC-001 | Effects functional | 100% |
| SC-002 | Lighthouse Performance | >90 or +10% |
| SC-003 | Lighthouse Accessibility | >85 or +15% (cap at 98) |
| SC-004 | Bundle size | No increase |
| SC-005 | Code patterns | 100% consistent |
