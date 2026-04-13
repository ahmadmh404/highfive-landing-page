# Feature Specification: 001 Landing Page MVP Finalization

**Feature Branch**: `001-landing-page-mvp`
**Created**: 2026-04-13
**Status**: Draft
**Input**: "We're about to finish the 001 branch. All we need is to make sure the sections are properly displayed in order and follow the same design system and animation, and provide fallback background for images in the projects, team sections."

## Clarifications

### Session 2026-04-13

- Q: Fallback image strategy — gradient-only or SVG illustrations? → A: Pure CSS gradients with subtle icon overlays (zero dependencies, instant render, no network requests)
- Q: Hardcoded color cleanup scope — enforce forward-only or migrate all existing? → A: Migrate all existing hardcoded values to CSS variables/Tailwind tokens (one-time effort for true maintainability)
- Q: Responsive grid breakpoints — standardize across all sections or preserve per-section layouts? → A: Standardize grid breakpoints (1→2→4 columns at sm/md/lg) for consistent responsive behavior
- Q: BentoGrid Globe SSR issue — fix with mounted guard + cache clear or replace with static? → A: Fix SSR with mounted guard + cache clear (preserves 3D globe visual, ~2 min fix)
- Q: FloatingNav links — keep 4 items or expand and sync all anchors to section IDs? → A: Expand nav to include all key sections, sync every anchor to its section ID for direct navigation

### Localization Issues (Discovered During Spec Review)

The following localization inconsistencies were identified and MUST be resolved:

1. **Navigation items are hardcoded in English** — `data/index.ts` has `navItems` with English names only, not localized for Arabic
2. **FloatingNav doesn't sync with section IDs** — nav links point to `#about`, `#testimonials` but actual sections have different IDs (`#team`, `#tech`, etc.)
3. **Section anchor IDs not localized for RTL** — Arabic users need consistent anchor behavior (scroll direction doesn't flip but layout does)
4. **Some translation keys unused** — translations file has keys that sections don't consume (e.g., `trustedBy`, `newsletter`, `cta`)
5. **Translation type mismatch** — sections use inline `t` prop types that don't match the full translation interface, making it easy to miss keys
6. **Floating nav has 4 links but 8 sections exist** — Process, Tech Stack, Courses, AI Tools have no nav links
7. **Floating nav has 4 links but 8 sections exist** — Process, Tech Stack, Courses, AI Tools have no nav links

### Localization Issues (Discovered During Spec Review)

The following localization inconsistencies were identified and MUST be resolved:

1. **Navigation items are hardcoded in English** — `data/index.ts` has `navItems` with English names only, not localized for Arabic
2. **FloatingNav doesn't sync with section IDs** — nav links point to `#about`, `#testimonials` but actual sections have different IDs (`#team`, `#tech`, etc.)
3. **Section anchor IDs not localized for RTL** — Arabic users need consistent anchor behavior (scroll direction doesn't flip but layout does)
4. **Some translation keys unused** — translations file has keys that sections don't consume (e.g., `trustedBy`, `newsletter`, `cta`)
5. **Translation type mismatch** — sections use inline `t` prop types that don't match the full translation interface, making it easy to miss keys
6. **Floating nav has 4 links but 8 sections exist** — Process, Tech Stack, Courses, AI Tools have no nav links

### Localization Issues (Discovered During Spec Review)

The following localization inconsistencies were identified and MUST be resolved:

1. **Navigation items are hardcoded in English** — `data/index.ts` has `navItems` with English names only, not localized for Arabic
2. **FloatingNav doesn't sync with section IDs** — nav links point to `#about`, `#testimonials` but actual sections have different IDs (`#team`, `#tech`, etc.)
3. **Section anchor IDs not localized for RTL** — Arabic users need consistent anchor behavior (scroll direction doesn't flip but layout does)
4. **Some translation keys unused** — translations file has keys that sections don't consume (e.g., `trustedBy`, `newsletter`, `cta`)
5. **Translation type mismatch** — sections use inline `t` prop types that don't match the full translation interface, making it easy to miss keys

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Consistent Visual Experience (Priority: P1)

A visitor scrolls through the entire landing page and experiences a cohesive, professional design with consistent spacing, animations, colors, and typography across all sections. No section feels visually disconnected or breaks the design rhythm.

**Why this priority**: Visual consistency is the foundation of user trust. Inconsistent spacing, animations, or styling make a site feel amateur and reduce conversion rates.

**Independent Test**: Can be fully tested by scrolling through all sections and verifying visual consistency — delivering a complete professional browsing experience.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls from Hero to Footer, **When** they pass each section, **Then** vertical spacing between sections is consistent (`py-20` / `py-24`) without jarring jumps
2. **Given** a visitor hovers over interactive cards (projects, team, courses, services), **When** hover effects trigger, **Then** all cards use the same animation fingerprint: spring physics (`stiffness: 260, damping: 20`), `scale: 1.05`, and glow effect (`-inset-2 bg-primary/10 blur-2xl`)
3. **Given** a visitor views any card's image, **When** the image fails to load or is loading, **Then** a themed gradient fallback background is displayed with an appropriate icon
4. **Given** a visitor scrolls through sections, **When** content enters the viewport, **Then** entrance animations use consistent patterns: `duration: 0.6`, `y: 20→0`, `opacity: 0→1`, stagger delay `i * 0.1`
5. **Given** a visitor views the page on any screen size, **Then** the layout remains responsive and readable without horizontal scrolling

---

### User Story 2 - Projects Section Image Reliability (Priority: P1)

A potential client browses the project portfolio and sees beautiful project cards even when images haven't loaded yet. Each card displays a themed gradient background as a placeholder.

**Why this priority**: Broken or loading images create visual noise and reduce perceived professionalism. Fallback backgrounds ensure the portfolio looks polished at all times.

**Independent Test**: Can be fully tested by viewing the projects section with network throttling — delivering a complete portfolio browsing experience.

**Acceptance Scenarios**:

1. **Given** a project image is loading, **When** the card renders, **Then** a project-specific gradient background is displayed with a subtle pattern or icon
2. **Given** a project image fails to load, **When** the error occurs, **Then** the fallback gradient remains visible with no broken image indicator
3. **Given** a project image loads successfully, **When** it becomes available, **Then** it fades in smoothly over the fallback background (500ms crossfade)

---

### User Story 3 - Team Section Image Reliability (Priority: P1)

A potential client views the team section and sees professional team member cards with smooth image loading. Even if photos are slow to load, the section looks complete with gradient placeholders.

**Why this priority**: The team section is a trust-builder. Loading states that look broken undermine credibility.

**Independent Test**: Can be fully tested by viewing the team section with network throttling — delivering a complete team discovery experience.

**Acceptance Scenarios**:

1. **Given** a team member image is loading, **When** the card renders, **Then** a gradient background with initials or avatar icon is displayed
2. **Given** a team member image fails to load, **When** the error occurs, **Then** the gradient placeholder remains with the member's initials
3. **Given** a team member image loads successfully, **When** it becomes available, **Then** it appears with a smooth fade-in transition

---

### User Story 4 - Section Order Verification (Priority: P2)

A visitor encounters sections in a logical flow that tells a compelling story: Hero → Services → Why Us → Process → Team → Projects → Tech Stack → Testimonials → Courses → AI Tools → FAQ → Contact → Footer.

**Why this priority**: Section order impacts conversion funnel. The flow should follow a natural persuasion arc: hook → value → proof → action.

**Independent Test**: Can be fully tested by scrolling through the page once — delivering a complete narrative experience.

**Acceptance Scenarios**:

1. **Given** a visitor loads the homepage, **When** they start scrolling, **Then** sections appear in this exact order: Hero, Services, WhyChooseUs, Process, Team, Projects, TechStack, Testimonials, Courses, AITools, FAQ, Contact, Footer
2. **Given** a visitor uses the floating navigation, **When** they click a nav link, **Then** the page smooth-scrolls to the correct section in the right order

---

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: ALL section cards (projects, team, courses, services) MUST use the same hover animation fingerprint:
  - Spring physics: `type: "spring", stiffness: 260, damping: 20`
  - Scale: `1.05`
  - Glow: `absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`
  - Border shimmer: `group-hover:border-primary/30 transition-colors duration-300`

- **FR-002**: ALL section entrance animations MUST use consistent motion constants:
  - Duration: `0.6`
  - Y offset: `20→0`
  - Opacity: `0→1`
  - Stagger delay: `index * 0.1`
  - Viewport: `{ once: true }`

- **FR-003**: Project cards MUST display a themed gradient fallback background when images are loading or fail to load:
  - Each project gets a unique gradient (purple, blue, teal variants)
  - Fallback includes a subtle project-type icon or pattern
  - Image fades in over fallback with 500ms transition

- **FR-004**: Team member cards MUST display a gradient fallback with member initials when images are loading or fail to load:
  - Gradient uses team-section consistent colors
  - Member initials displayed centered in the card
  - Image crossfades in smoothly when loaded

- **FR-005**: ALL sections MUST follow the vertical spacing standard:
  - Default: `py-20` (80px)
  - Hero exception: `pt-28 pb-16` (intentional full-height)
  - Team: `py-24` (exceptional for visual weight)

- **FR-006**: Sections MUST appear in this exact order on the homepage:
  1. FloatingNav (sticky, always visible)
  2. HeroSection
  3. ServicesSection
  4. WhyChooseUsSection
  5. ProcessSection
  6. TeamSection
  7. ProjectsSection
  8. TechStackSection
  9. TestimonialsSection
  10. CoursesSection
  11. AIToolsSection
  12. FAQSection
  13. ContactSection
  14. FooterSection

- **FR-007**: ALL sections MUST use consistent color tokens:
  - Card backgrounds: `bg-[rgb(4,7,29)]` or CSS variable equivalent
  - Borders: `border-white/10` → hover `border-primary/50`
  - Text: `text-foreground` → hover `text-primary`
  - Muted text: `text-foreground/50`

- **FR-020**: ALL existing hardcoded hex values (`#CBACF9`, `#BEC1DD`, `rgba(203,172,249,...)`, etc.) MUST be migrated to CSS variables or Tailwind utility classes:
  - `#CBACF9` → `text-primary` / `bg-primary` / `border-primary`
  - `#BEC1DD` → `text-muted-foreground`
  - `rgba(203,172,249,X)` → `primary/X` or `border-primary/X`
  - `rgba(255,255,255,X)` → `white/X` or `border-white/X`
  - `rgba(4,7,29,X)` → `background/X`

- **FR-021**: ALL section grids MUST use standardized responsive breakpoints:
  - 4-column grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (Courses, Services, Tech Stack)
  - 3-column grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (Team, Testimonials)
  - Projects section: Convert from flex-wrap to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for consistent behavior
  - All grids use `gap-6` standard spacing

- **FR-022**: The BentoGrid Globe SSR error MUST be resolved by:
  - Adding complete `isMounted` guard to `GridGlobe.tsx` with loading fallback
  - Clearing `.next` cache (`rm -rf .next && pnpm dev`)
  - Verifying Globe renders only after client hydration

- **FR-023**: FloatingNav MUST include links to all key sections with anchors synced to section IDs:
  - Nav items: Services (`#services`), Process (`#process`), Team (`#team`), Projects (`#projects`), Tech Stack (`#tech`), Courses (`#courses`), AI Tools (`#ai-tools`), Contact (`#contact`)
  - All links use smooth-scroll behavior via `scroll-behavior: smooth`
  - Active section highlighting in nav based on scroll position
  - Nav items MUST be localized from `t.nav.*` (not hardcoded in `data/index.ts`)

- **FR-024**: Localization consistency MUST be enforced across the entire page:
  - `navItems` in `data/index.ts` MUST be replaced with locale-aware labels from `t.nav.*`
  - All floating nav labels MUST render from translations (`t.nav.services`, `t.nav.projects`, etc.)
  - Section anchor IDs MUST be consistent across locales (`#services`, `#projects`, etc.)
  - Unused translation keys (`trustedBy`, `newsletter`, `cta`) MUST be removed if sections don't consume them
  - Section `t` prop types MUST be aligned with `lib/i18n/translations.ts` types for type safety
  - Arabic locale MUST render correctly with RTL layout direction
  - Nav links MUST scroll to correct sections in both locales
  - Arabic navigation labels MUST display correctly (e.g., "الخدمات" instead of "Services")

### Key Entities _(include if feature involves data)_

- **Project Image**: Represents a project screenshot/mockup — attributes include `src`, `alt`, `fallbackGradient`, `category`
- **Team Member Image**: Represents a team photo — attributes include `src`, `alt`, `fallbackGradient`, `initials`, `name`
- **Animation Fingerprint**: The shared hover/entrance pattern applied to all interactive cards

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: All 14 sections render in the correct order without any section appearing out of sequence (verified by inspecting page DOM order)
- **SC-002**: 100% of interactive cards (projects, team, courses, services) use the same hover animation parameters (spring: 260/20, scale: 1.05, glow inset)
- **SC-003**: 100% of project and team cards display a styled fallback background when images are loading or fail to load
- **SC-004**: All section entrance animations use consistent motion constants (duration: 0.6, y: 20→0, stagger: 0.1)
- **SC-005**: No section uses hardcoded color values — all colors reference CSS variables or design tokens
- **SC-006**: Project images fade in over fallback backgrounds within 500ms of load completion
- **SC-007**: Team member images crossfade in smoothly when loaded, with initials visible during loading
- **SC-008**: Vertical spacing between sections is consistent at `py-20` with documented exceptions (Hero: `pt-28 pb-16`, Team: `py-24`)
- **SC-009**: Floating navigation correctly links to all sections in the proper order and smooth-scroll works for each anchor

## Assumptions

- The existing section components are functionally complete and only need animation/visual consistency updates
- Team member initials can be derived from their names (e.g., "Ahmad" → "A", "Ali Jahjah" → "AJ")
- Project fallback gradients should match the project's category (webApps → purple, aiFeatures → blue, tools → teal)
- The current color system (`bg-[rgb(4,7,29)]`, `border-white/10`, etc.) is the approved design standard
- No new sections need to be added — only existing sections need alignment
- The Globe/Three.js SSR issue is being handled separately
