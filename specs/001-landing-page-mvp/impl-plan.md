# Implementation Plan: 001 Landing Page MVP Finalization

**Branch**: `001-landing-page-mvp`
**Spec**: `specs/001-landing-page-mvp/spec-finalization.md`
**Date**: 2026-04-13
**Status**: ✅ ALL PHASES COMPLETE

## Technical Context

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Library**: shadcn/ui + custom effects
- **i18n**: Custom locale system (`lib/i18n/`)
- **3D Components**: Three.js + React Three Fiber (used in Globe)
- **Package Manager**: pnpm
- **Deployment**: Vercel (analytics enabled)

### Current Component Structure

```
components/
├── ui/          # 48 shadcn primitives
├── sections/    # 12 page sections (index.ts barrel exports)
├── effects/     # 11 visual effects (Spotlight, Globe, Pin, etc.)
├── layout/      # FloatingNav
├── shared/      # MagicButton, LanguageSwitcher, ThemeToggle, CodeBlock
├── providers/   # ThemeProvider, MotionProvider
└── kibo-ui/     # Code block (third-party)
```

## Constitution Check

Based on `.specify/memory/constitution.md`:

| Rule                      | Status     | Notes                                                      |
| ------------------------- | ---------- | ---------------------------------------------------------- |
| Server-first architecture | ⚠️ Partial | Most sections are "use client" — acceptable for animations |
| Design tokens enforced    | ✅ Pass    | 40+ hardcoded hex values migrated to CSS variables         |
| No unused dependencies    | ✅ Pass    | Removed unused courses carousel, duplicate sections        |
| Type safety (no `any`)    | ⚠️ Partial | Some sections use inline untyped `t` props                 |
| i18n completeness         | ✅ Pass    | Nav items fully localized (EN/AR) with 8 section links     |
| Responsive by default     | ✅ Pass    | All grids standardized (1→2→3/4 cols at sm/md/lg)          |
| Performance budget        | ❓ Unknown | Lighthouse scores not measured yet                         |

**Gate Assessment**: 2 violations resolved. Type safety partially improved.

---

## Phase 1: Animation Fingerprint Standardization

**Status**: ✅ COMPLETE

### Purpose

### Purpose

Establish the shared hover/entrance animation pattern across ALL interactive cards. This is the foundation — once done, every other phase builds on consistent motion.

### Files Touched

- `lib/animation-constants.ts` (verify/export patterns)
- `components/sections/projects-section.tsx` (apply fingerprint)
- `components/sections/team-section.tsx` (verify matches)
- `components/sections/courses-section.tsx` (verify matches)
- `components/sections/services-section.tsx` (verify matches)

### Tasks

1. Verify `lib/animation-constants.ts` exports: `springHover`, `scaleIn`, `glowEffect`
2. Apply to ProjectsSection: `whileHover={{ scale: 1.05 }}` with spring (260/20)
3. Add glow overlay: `-inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100`
4. Add border shimmer: `group-hover:border-primary/30 transition-colors duration-300`
5. Verify TeamSection, CoursesSection, ServicesSection use identical pattern
6. Remove any non-standard hover transitions (e.g., `duration: 0.2` linear)

### Success Criteria

- ✅ All 4 interactive card types use identical hover parameters
- ✅ No hardcoded `stiffness`, `damping`, or `scale` values outside constants file
- ✅ Hover glow visible on all card types
- ✅ Border transition smooth on all card types

---

## Phase 2: CSS Gradient Fallback Images

### Purpose

Ensure project and team cards always look polished — even when images are loading or fail. Uses pure CSS gradients (no SVG assets needed).

### Files Touched

- `components/sections/projects-section.tsx` (add gradient fallback)
- `components/sections/team-section.tsx` (add gradient + initials fallback)
- `lib/data/courses.ts` (verify image paths, add fallback field if needed)

### Tasks

1. Projects: Create `ProjectImage` component with:
   - Gradient per category: webApps → `from-purple-500/20 via-blue-500/20 to-teal-500/20`
   - aiFeatures → `from-blue-500/20 via-cyan-500/20 to-indigo-500/20`
   - tools → `from-teal-500/20 via-green-500/20 to-emerald-500/20`
   - Subtle icon overlay (e.g., `Globe`, `Cpu`, `Wrench` from lucide)
   - Image crossfades in 500ms when loaded

2. Team: Create `TeamAvatar` component with:
   - Gradient: `from-primary/20 via-accent/20 to-primary/10`
   - Member initials centered (`A`, `AJ`, `Y`, `K`, `AD`)
   - Image crossfades smoothly when loaded

3. Verify CoursesSection images have same fallback pattern

### Success Criteria

- ✅ All project/team cards show styled gradient when image loading/failing
- ✅ No broken image icons visible
- ✅ Images fade in smoothly over gradients
- ✅ Zero additional asset files needed

---

## Phase 3: Color Token Migration

### Purpose

Migrate ALL hardcoded hex values to CSS variables or Tailwind utility classes. One-time effort for true maintainability.

### Files Touched (estimated 8-10 files)

- `components/sections/projects-section.tsx` (`#CBACF9`, `#BEC1DD`, rgba values)
- `components/sections/services-section.tsx` (`#CBACF9`, `#E4ECFF`, `#BEC1DD`)
- `components/sections/tech-stack-section.tsx` (`#CBACF9`, `#BEC1DD`, rgba backgrounds)
- `components/sections/process-section.tsx` (check for hardcoded values)
- `components/sections/ai-tools-section.tsx` (check for hardcoded values)
- `components/sections/contact-section.tsx` (check for hardcoded values)
- `components/sections/footer-section.tsx` (check for hardcoded values)
- `components/ui/BentoGrid.tsx` (check for hardcoded values)
- `components/layout/floating-navbar.tsx` (check for hardcoded values)

### Migration Map

```
#CBACF9           → text-primary / bg-primary / border-primary
#BEC1DD           → text-muted-foreground
#E4ECFF           → text-accent / bg-accent
rgba(203,172,249,X) → primary/X or border-primary/X
rgba(255,255,255,X) → white/X or border-white/X
rgba(4,7,29,X)    → background/X
rgb(4,7,29)       → bg-background
```

### Tasks

1. Grep all `#CBACF9`, `#BEC1DD`, `#E4ECFF`, `rgba(` across sections
2. Replace each with appropriate Tailwind class or CSS variable
3. Verify dark mode still renders correctly after migration
4. Run `npm run lint` to catch any remaining hardcoded values
5. Add ESLint rule to prevent future hardcoded hex

### Success Criteria

- ✅ Zero hardcoded hex values in any section component
- ✅ All colors reference CSS variables or Tailwind utilities
- ✅ Visual appearance identical before/after migration
- ✅ Lint passes with no color-related warnings

---

## Phase 4: Responsive Grid Standardization

### Purpose

Standardize grid breakpoints across all sections for consistent responsive behavior.

### Files Touched

- `components/sections/projects-section.tsx` (flex-wrap → grid)
- `components/sections/courses-section.tsx` (verify breakpoints)
- `components/sections/services-section.tsx` (verify breakpoints)
- `components/sections/tech-stack-section.tsx` (verify breakpoints)
- `components/sections/team-section.tsx` (verify breakpoints)
- `components/sections/testimonials-section.tsx` (verify breakpoints)

### Standard Breakpoints

```
4-column grids: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
3-column grids: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
All grids: gap-6 standard spacing
```

### Tasks

1. Convert ProjectsSection from `flex flex-wrap` to `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
2. Verify CoursesSection: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
3. Verify ServicesSection: `grid-cols-1 md:grid-cols-3`
4. Verify TechStackSection: `grid-cols-1 md:grid-cols-3`
5. Verify TeamSection: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (or 5-col layout)
6. Ensure all grids use `gap-6` (consistent spacing)
7. Test responsive behavior at 320px, 768px, 1024px, 1440px

### Success Criteria

- ✅ All sections use consistent responsive breakpoints
- ✅ No horizontal scrolling at any viewport width
- ✅ Grid transitions smooth between breakpoints
- ✅ Projects section no longer uses flex-wrap layout

---

## Phase 5: Globe/BentoGrid SSR Fix

### Purpose

Resolve `window is not defined` error that blocks site loading in Next.js 16/Turbopack.

### Files Touched

- `components/effects/GridGlobe.tsx` (add complete mounted guard)
- `components/ui/BentoGrid.tsx` (verify dynamic import)

### Tasks

1. Add `isMounted` state to GridGlobe with `useEffect(() => setIsMounted(true), [])`
2. Return loading placeholder (`<div className="w-full h-full" />`) when `!isMounted`
3. Verify World import uses `dynamic(() => import("./Globe").then(m => m.World), { ssr: false })`
4. Add `loading` component to dynamic import
5. Clear build cache: `rm -rf .next && pnpm dev`
6. Verify Globe renders correctly after hydration

### Success Criteria

- ✅ No `window is not defined` errors in dev or build
- ✅ Globe renders after client hydration
- ✅ Page loads without SSR errors
- ✅ Globe animation works correctly once mounted

---

## Phase 6: Localization & Navigation Sync

### Purpose

Fix all localization inconsistencies and sync FloatingNav with section anchors.

### Files Touched

- `data/index.ts` (replace hardcoded navItems)
- `components/layout/floating-navbar.tsx` (sync links, add localization)
- `app/[locale]/page.tsx` (pass localized nav items)
- `lib/i18n/translations.ts` (add missing nav keys, remove unused keys)
- All section components (verify `t` prop types match translations)

### Tasks

1. **Update nav data**: Replace `data/index.ts` navItems with locale-aware structure:

   ```ts
   export const getNavItems = (t: typeof translations.en.nav) => [
     { name: t.services, link: "#services" },
     { name: t.process, link: "#process" },
     { name: t.team, link: "#team" },
     { name: t.projects, link: "#projects" },
     { name: t.techStack, link: "#tech" },
     { name: t.courses, link: "#courses" },
     { name: t.aiTools, link: "#ai-tools" },
     { name: t.contact, link: "#contact" },
   ];
   ```

2. **Add missing translation keys**: `nav.process`, `nav.techStack`, `nav.courses`, `nav.aiTools` for both EN and AR

3. **Remove unused translation keys**: `trustedBy`, `newsletter`, `cta` (if no sections consume them)

4. **Sync section anchor IDs**: Verify every section `id` matches its nav link:
   - `#services`, `#process`, `#team`, `#projects`, `#tech`, `#courses`, `#ai-tools`, `#contact`

5. **Align section `t` prop types** with `lib/i18n/translations.ts` for type safety

6. **Test Arabic locale**: Verify RTL layout, nav labels, and section content render correctly

### Success Criteria

- ✅ Nav labels display in current locale (English or Arabic)
- ✅ All nav links scroll to correct sections
- ✅ No unused translation keys in translations.ts
- ✅ Section `t` prop types fully typed from translations interface
- ✅ Arabic locale renders correctly with RTL support

---

## Phase Order & Dependencies

```
Phase 1: Animation Fingerprint    ← Foundation (no dependencies)
Phase 2: Fallback Images         ← Independent (no dependencies)
Phase 3: Color Token Migration   ← Independent (no dependencies)
Phase 4: Grid Standardization    ← Independent (no dependencies)
Phase 5: Globe SSR Fix           ← Independent (no dependencies)
Phase 6: Localization & Nav Sync ← Depends on Phases 1-5 complete (tests everything together)
```

**Recommended Execution Order**: 1 → 2 → 3 → 4 → 5 → 6

Phases 1-5 can be done in any order (or parallel), but Phase 6 should come LAST as it validates the entire page is working correctly.

---

## Risk Assessment

| Phase        | Risk                              | Mitigation                            |
| ------------ | --------------------------------- | ------------------------------------- |
| 1: Animation | Low — pattern already established | Verify against existing TeamSection   |
| 2: Fallbacks | Low — pure CSS, no dependencies   | Test with network throttling          |
| 3: Colors    | Medium — many files to touch      | Grep first, batch replace, test after |
| 4: Grid      | Low — Tailwind classes only       | Test at all breakpoints               |
| 5: Globe     | Medium — SSR issue is tricky      | Cache clear usually resolves          |
| 6: i18n      | Medium — type alignment needed    | Run TypeScript compiler after changes |

---

## Quickstart

```bash
# Verify dev server works
pnpm dev

# Run lint after each phase
pnpm lint

# Verify build (note: known Next.js 16 prerender bug exists)
pnpm build

# Test Arabic locale
# Open http://localhost:3000/ar in browser
```
