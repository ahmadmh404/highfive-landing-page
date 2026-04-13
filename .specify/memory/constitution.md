<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- Modified principles:
  - "Honesty & Transparency" → "Honesty" (simplified)
  - "Usefulness First" → "Usefulness" (simplified)
  - "Human Touch" + "Technical Excellence" → "Human + Technical" (merged)
  - "Modern Craftsmanship" → "High Quality" (renamed)
- Added sections: Vision, Tone
- Removed sections: none (content restructured into new sections)
- Templates requiring updates:
  ✅ .specify/templates/constitution-template.md (source template)
  ⚠ .specify/templates/plan-template.md (Constitution Check must reference 4 principles)
  ⚠ .specify/templates/spec-template.md (requirements must align with Tech Stack)
  ⚠ .specify/templates/tasks-template.md (task categories must reflect principle-driven work)
- Follow-up TODOs:
  TODO(RATIFICATION_DATE): Confirm original adoption date if project predates 2026-04-02
-->

# HighFive Website Constitution

## Vision

Build a modern, personal showcase for a 5-person freelance coding team
(Frontend, Backend+AI, UI/UX Design, Project Management, Backend),
specialized in custom apps, AI tools/packages, and programming courses.

## Core Principles

### I. Honesty

The website MUST present the team as what it is: a small real team,
not a big agency.

- All copy MUST avoid corporate buzzwords (e.g., "cutting-edge",
  "digital transformation", "excellence").
- Stats, client logos, and testimonials MUST be real or explicitly
  removed—no fabricated social proof.
- Pricing, process, and capabilities MUST be stated accurately
  without exaggeration.

### II. Usefulness

Every page section MUST provide tangible value to the visitor.

- AI tool demos MUST be fully interactive with realistic input forms,
  loading states, and result displays.
- Demos MUST use mock data with realistic API delay to simulate
  real behavior at launch.
- Visitors MUST be able to understand each tool's value within
  seconds of interacting with it.

### III. Human + Technical

The site MUST reflect the people behind it—real names, real photos,
real personalities—while demonstrating technical competence.

- Team member cards MUST include real photos, names, roles, short bios,
  and social/tech links.
- Tone MUST be friendly, confident, approachable, and technical—like
  skilled developers who love solving problems.
- Language MUST be first-person plural ("we") and address the visitor
  directly ("you").
- The site MUST demonstrate the same quality we deliver to clients:
  fast, clean, well-structured code.

### IV. High Quality

The design MUST feel techy and modern while remaining warm and human.

- Support dark and light mode with enhanced visuals (gradients,
  subtle animations, glassmorphism or neubrutalism accents where suitable).
- Use provided modern/high-tech components from the components folder.
- Mobile-first responsive layout with clean typography, generous spacing,
  and micro-interactions.
- All interactive elements MUST have visible focus states and meet
  WCAG 2.1 AA accessibility standards.

## Tone

Friendly, confident, approachable, and technical.

- Speak like skilled developers who love solving real problems.
- No corporate buzzwords. No hollow marketing speak.
- Use first-person plural ("we") and address visitors directly ("you").

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS (existing setup)
- **Localization**: Already implemented—MUST be preserved and supported
  on all new content.
- **Dark/Light Mode**: Already implemented—MUST be enhanced visually,
  not regressed.
- **AI Tool Demos**: MUST have fully functional UI with dummy API calls
  (mock data + realistic loading states) for MVP launch.
- **Reusable Components**: MUST use the modern/high-tech components
  from the components folder where suitable.
- **No Fake Content**: All placeholder stats, logos, and testimonials
  MUST be removed before launch.

## Design Direction

- Techy modern look with a human feel.
- Clean, smooth animations, good use of space.
- Clean typography, generous spacing, purposeful micro-interactions.
- Mobile-first, fast loading, accessible to all users.
- Visual consistency across dark and light modes.

## Governance

This constitution governs all development decisions for the
HighFive Website.

- **Amendment Procedure**: Any change to these principles MUST be
  documented in this file with an updated version number and amendment
  date. Changes MUST be reviewed by at least one team member before
  merging.
- **Versioning Policy**: Semantic versioning applies—MAJOR for breaking
  governance changes, MINOR for new principles or materially expanded
  guidance, PATCH for clarifications and wording fixes.
- **Compliance Review**: Every pull request and feature specification
  MUST be checked against these principles. The Constitution Check
  section in the plan template serves as the formal gate.
- **Runtime Guidance**: Use `AGENTS.md` for day-to-day development
  guidance that supplements but does not contradict this constitution.

**Version**: 1.2.0 | **Ratified**: 2026-04-02 | **Last Amended**: 2026-04-13

## Amendment History

- **1.1.0 → 1.2.0** (2026-04-13): Updated Vision to reflect actual team size (3 → 5 members). Core principles unchanged.
