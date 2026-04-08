# Implementation Plan: Typography Audit and Consistency

**Branch**: `003-typography-audit` | **Date**: 2026-04-08 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/003-typography-audit/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Audit and document all typography styles across the HighFive landing page sections and components, identifying inconsistencies and comparing against UI/UX best practices. Deliver a design tokens file (CSS variables/JSON) documenting the typography system for future development reference.

## Technical Context

**Language/Version**: TypeScript/JavaScript (Next.js 16 App Router)  
**Primary Dependencies**: Tailwind CSS (existing), Browser DevTools/Playwright (for inspection)  
**Storage**: N/A - documentation output only  
**Testing**: Manual visual inspection + automated screenshot comparison  
**Target Platform**: Web (Next.js landing page)  
**Project Type**: web-service/frontend  
**Performance Goals**: N/A - analysis task  
**Constraints**: Analysis only, no implementation changes  
**Scale/Scope**: Single landing page (~10 sections, ~15 components)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| I. Honesty | Pass | Audit documents real state, no fabrication |
| II. Usefulness | Pass | Documentation enables consistent future development |
| III. Human + Technical | Pass | Typography system serves the team and visitors |
| IV. High Quality | Pass | Audit ensures WCAG AA compliance and design consistency |
| Localization Support | Pass | Typography must work with existing i18n setup |
| Dark/Light Mode | Pass | Must audit typography in both themes |
| No Fake Content | Pass | Only documents existing real styles |

## Project Structure

### Documentation (this feature)

```text
specs/003-typography-audit/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (skipped - internal project)
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
app/
├── [locale]/
│   ├── page.tsx        # Main landing page
│   ├── layout.tsx      # Root layout
│   └── courses-carousel.tsx
├── provider.tsx         # Theme provider
├── manifest.ts
├── robots.ts
└── sitemap.ts

components/             # Reusable components folder
```

**Structure Decision**: This is an audit/documentation task - no new code structure needed. The audit will examine existing `app/` and `components/` directories.

## Phase 0: Research

Since the spec clarifications resolved all unknowns, Phase 0 is minimal:

- Verify existing Tailwind configuration and design tokens
- Identify sections and components to audit
- Confirm UI/UX best practices to apply (WCAG AA, heading hierarchy ratios)

Output: [research.md](research.md) - created inline above

## Phase 1: Design & Contracts

**Prerequisites**: Phase 0 complete

1. **Data Model**: Document typography entities
   - Typography Style (font, size, weight, line-height, letter-spacing)
   - Section (name, typography styles used)
   - Component (name, typography requirements)
   - Typography Pattern (heading scale, body text, UI labels)

2. **Contracts**: Skipped - internal documentation project, no external interfaces

3. **Quickstart**: Guide for future developers to use typography documentation

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |

## Next Steps

- Run `/speckit.tasks` to break this plan into executable tasks
- Run `/speckit.checklist` to create domain-specific validation checklist