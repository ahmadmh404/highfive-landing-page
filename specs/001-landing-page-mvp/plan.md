# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Landing page for a 5-person expert team offering custom development, AI tools & packages, and programming courses. Features interactive AI tool demos with mock API, team profiles, project gallery, courses preview, contact form, and dark/light mode. Built with Next.js 16 (App Router) and Tailwind CSS, preserving existing localization and theme infrastructure.

## Technical Context

**Language/Version**: TypeScript 5.x | JavaScript (Next.js 16 App Router)  
**Primary Dependencies**: Next.js 16, Tailwind CSS, Lucide React (icons), Next-themes (dark/light mode), next-intl (localization)  
**Storage**: N/A (static landing page, no database)  
**Testing**: Jest (unit), Playwright (e2e) - existing setup  
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge - latest 2 versions), responsive 320px-2560px  
**Project Type**: Web application (landing page)  
**Performance Goals**: Lighthouse score >90 (mobile/desktop), theme transition <500ms, filter update <300ms, form validation <200ms  
**Constraints**: Must preserve existing localization and dark/light mode infrastructure, no fake content, mobile-first responsive  
**Scale/Scope**: Single page with 8 sections, 3 interactive AI tool demos, 5 team member cards, 6+ project cards, 4+ course previews

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Honesty | ✅ PASS | FR-016 mandates removal of all placeholder/fake content. No corporate buzzwords in copy requirements. |
| II. Usefulness | ✅ PASS | FR-005, FR-006 require fully interactive AI tool demos with mock API, loading states, and formatted results. |
| III. Human + Technical | ✅ PASS | FR-002 requires real team member info. Tone guidelines in constitution align with spec requirements. |
| IV. High Quality | ✅ PASS | FR-012 requires dark/light mode. FR-014 requires responsive nav. Mobile-first approach specified. |

**Result**: All gates pass. No violations requiring justification.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
app/
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout with providers
├── globals.css           # Global styles
└── [locale]/            # Localization (existing structure)

components/
├── ui/                   # Shadcn UI components
├── sections/             # Landing page sections
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── AiTools.tsx
│   ├── Team.tsx
│   ├── Projects.tsx
│   ├── Courses.tsx
│   ├── HowWeWork.tsx
│   ├── ContactForm.tsx
│   └── Navbar.tsx
└── features/
    └── ai-demos/         # AI tool demo components

lib/
├── utils.ts              # Utilities
├── constants.ts          # Site constants
└── types/                # TypeScript types

hooks/                    # Custom hooks (existing)
styles/                   # CSS/styles (existing)
public/                   # Static assets

tests/
├── e2e/                  # Playwright tests
└── unit/                 # Jest tests
```

**Structure Decision**: Next.js 16 App Router with existing structure preserved. Components organized by section for the landing page, with shared UI components in `components/ui/`. Localization in `[locale]` directory already implemented.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations. All gates pass.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | - | - |
