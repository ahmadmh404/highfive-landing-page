# Tasks: 001-landing-page-mvp (Finalization Phase)

**Branch**: `001-landing-page-mvp` | **Generated**: 2026-04-13
**Status**: Regenerated after spec-finalization.md analysis

## Summary

Finalization tasks organized by implementation plan phase. Each phase addresses one distinct aspect of the landing page polish. Phases 1-5 are independent and can run in parallel; Phase 6 validates everything together.

---

## Phase 1: Animation Fingerprint Standardization

- [ ] T036 Verify `lib/animation-constants.ts` exports spring hover pattern (stiffness: 260, damping: 20)
- [ ] T037 Apply standardized hover fingerprint to `projects-section.tsx`: `whileHover={{ scale: 1.05 }}` + spring physics
- [ ] T038 Add glow overlay to all project cards: `-inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`
- [ ] T039 Add border shimmer to all cards: `group-hover:border-primary/30 transition-colors duration-300`
- [ ] T040 Verify TeamSection, CoursesSection, ServicesSection use identical hover pattern
- [ ] T041 Remove any non-standard hardcoded hover transitions (e.g., `duration: 0.2` linear, custom ease curves)

**Spec Coverage**: FR-001
**Success Criteria**: All 4 interactive card types use identical hover parameters

---

## Phase 2: CSS Gradient Fallback Images

- [ ] T042 Create `ProjectImage` sub-component with CSS gradient fallback per category:
  - webApps: `from-purple-500/20 via-blue-500/20 to-teal-500/20`
  - aiFeatures: `from-blue-500/20 via-cyan-500/20 to-indigo-500/20`
  - tools: `from-teal-500/20 via-green-500/20 to-emerald-500/20`
- [ ] T043 Add lucide icon overlay to project fallbacks (`Globe`, `Cpu`, `Wrench`)
- [ ] T044 Implement 500ms crossfade from gradient to loaded image
- [ ] T045 Create `TeamAvatar` sub-component with gradient + initials fallback:
  - Gradient: `from-primary/20 via-accent/20 to-primary/10`
  - Initials: centered, derived from member names (`A`, `AJ`, `Y`, `K`, `AD`)
- [ ] T046 Verify CoursesSection images use same fallback pattern
- [ ] T047 Test fallbacks with network throttling (offline mode)

**Spec Coverage**: FR-002, FR-003, FR-004
**Success Criteria**: All project/team cards show styled gradient when image loading/failing

---

## Phase 3: Color Token Migration

- [ ] T048 Grep all hardcoded hex values across sections: `#CBACF9`, `#BEC1DD`, `#E4ECFF`, `rgba(203,172,249,`, `rgba(255,255,255,`, `rgba(4,7,29,`
- [ ] T049 Migrate `projects-section.tsx` colors to Tailwind tokens
- [ ] T050 Migrate `services-section.tsx` colors to Tailwind tokens
- [ ] T051 Migrate `tech-stack-section.tsx` colors to Tailwind tokens (inline style blocks)
- [ ] T052 Migrate `process-section.tsx` colors if any hardcoded values found
- [ ] T053 Migrate `ai-tools-section.tsx` colors if any hardcoded values found
- [ ] T054 Migrate `contact-section.tsx` colors if any hardcoded values found
- [ ] T055 Migrate `footer-section.tsx` colors if any hardcoded values found
- [ ] T056 Migrate `floating-navbar.tsx` inline style colors to tokens
- [ ] T057 Migrate `BentoGrid.tsx` inline style colors to tokens
- [ ] T058 Run `pnpm lint` to verify zero remaining hardcoded hex values
- [ ] T059 Verify dark mode renders identically after migration

**Spec Coverage**: FR-007, FR-020
**Success Criteria**: Zero hardcoded hex values, all colors reference CSS variables or Tailwind utilities

---

## Phase 4: Responsive Grid Standardization

- [ ] T060 Convert ProjectsSection from `flex flex-wrap` to `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- [ ] T061 Verify CoursesSection uses `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- [ ] T062 Verify ServicesSection uses `grid-cols-1 md:grid-cols-3`
- [ ] T063 Verify TechStackSection uses `grid-cols-1 md:grid-cols-3`
- [ ] T064 Verify TeamSection uses consistent grid (5 items → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` with last row centered, or 5-col layout)
- [ ] T065 Ensure all section grids use `gap-6` standard spacing
- [ ] T066 Test responsive behavior at 320px, 768px, 1024px, 1440px
- [ ] T067 Verify no horizontal scrolling at any viewport width

**Spec Coverage**: FR-009, FR-021
**Success Criteria**: All sections use consistent responsive breakpoints, no horizontal scrolling

---

## Phase 5: Globe/BentoGrid SSR Fix

- [ ] T068 Add `isMounted` state to `GridGlobe.tsx` with `useEffect(() => setIsMounted(true), [])`
- [ ] T069 Return loading placeholder (`<div className="w-full h-full" />`) when `!isMounted`
- [ ] T070 Verify World import uses `dynamic(() => import("./Globe").then(m => m.World), { ssr: false })`
- [ ] T071 Add `loading` component to dynamic import
- [ ] T072 Clear build cache: `rm -rf .next && pnpm dev`
- [ ] T073 Verify Globe renders correctly after hydration with no SSR errors

**Spec Coverage**: FR-010, FR-022
**Success Criteria**: No `window is not defined` errors, Globe renders after client hydration

---

## Phase 6: Localization & Navigation Sync

- [ ] T074 Add missing nav translation keys to `lib/i18n/translations.ts` for both EN and AR:
  - `nav.process`, `nav.techStack`, `nav.courses`, `nav.aiTools`
- [ ] T075 Remove unused translation keys (`trustedBy`, `newsletter`, `cta`) if no sections consume them
- [ ] T076 Update `data/index.ts` to generate nav items from locale-aware translations:
  ```ts
  export const getNavItems = (t) => [
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
- [ ] T077 Update `app/[locale]/page.tsx` to pass localized nav items to `FloatingNav`
- [ ] T078 Update `FloatingNav` component to accept and render localized nav labels
- [ ] T079 Verify all section `id` attributes match nav link anchors:
  - `#services`, `#process`, `#team`, `#projects`, `#tech`, `#courses`, `#ai-tools`, `#contact`
- [ ] T080 Align section `t` prop types with `lib/i18n/translations.ts` for type safety
- [ ] T081 Test Arabic locale: verify RTL layout, nav labels, and section content render correctly
- [ ] T082 Verify smooth-scroll behavior works for all nav links in both locales

**Spec Coverage**: FR-011, FR-012, FR-023, FR-024
**Success Criteria**: Nav labels display in current locale, all links scroll to correct sections, Arabic renders correctly

---

## Phase 7: Constitution Compliance Cleanup

- [ ] T083 Audit all testimonials for fake/placeholder content per Constitution §I (Honesty)
- [ ] T084 Audit all stats/numbers for accuracy — remove fabricated metrics
- [ ] T085 Audit all client logos — remove any not explicitly approved
- [ ] T086 Verify HeroSection copy uses first-person plural ("we") per Constitution §III
- [ ] T087 Verify ServicesSection copy uses first-person plural ("we") per Constitution §III
- [ ] T088 Verify no corporate buzzwords remain ("cutting-edge", "digital transformation", "excellence")
- [ ] T089 Add comprehensive dark/light mode testing task with transition verification (<500ms)
- [ ] T090 Add accessibility spot-check task for WCAG 2.1 AA compliance (focus states, contrast, alt text)

**Spec Coverage**: FR-016, Constitution §I, §III, §IV
**Success Criteria**: All content is real or explicitly marked placeholder, tone matches Constitution, accessibility baseline met

---

## Dependency Graph

```
Phase 1: Animation Fingerprint    ← Independent
Phase 2: Fallback Images         ← Independent
Phase 3: Color Token Migration   ← Independent
Phase 4: Grid Standardization    ← Independent
Phase 5: Globe SSR Fix           ← Independent
Phase 6: Localization & Nav Sync ← Independent (but test last)
Phase 7: Constitution Compliance ← Depends on Phases 1-6 complete
```

---

## Parallel Execution Opportunities

| Tasks     | Parallel Because                                  |
| --------- | ------------------------------------------------- |
| T036-T041 | Independent of all other phases                   |
| T042-T047 | Independent of all other phases                   |
| T048-T059 | Independent, but batch by file for efficiency     |
| T060-T067 | Independent of all other phases                   |
| T068-T073 | Independent of all other phases                   |
| T074-T082 | Independent, but test after other phases complete |
| T083-T090 | Depends on visual consistency from Phases 1-6     |

---

## Implementation Strategy

**Priority Order**:

1. Phase 5 (Globe SSR fix) — unblocks site loading
2. Phase 1 (Animation fingerprint) — foundation for consistency
3. Phase 3 (Color migration) — eliminates tech debt
4. Phase 2 (Fallback images) — visual polish
5. Phase 4 (Grid standardization) — responsive consistency
6. Phase 6 (Localization) — validates everything together
7. Phase 7 (Constitution compliance) — final quality gate

**MVP for this finalization**: Phases 1-5 complete, site loads without errors, all cards use consistent hover/entrance patterns, colors use tokens, images have fallbacks.

---

## Total Task Count: 55

| Phase                          | Tasks     | Count |
| ------------------------------ | --------- | ----- |
| Phase 1: Animation Fingerprint | T036-T041 | 6     |
| Phase 2: Fallback Images       | T042-T047 | 6     |
| Phase 3: Color Migration       | T048-T059 | 12    |
| Phase 4: Grid Standardization  | T060-T067 | 8     |
| Phase 5: Globe SSR Fix         | T068-T073 | 6     |
| Phase 6: Localization & Nav    | T074-T082 | 9     |
| Phase 7: Constitution Cleanup  | T083-T090 | 8     |

---

## Previous Tasks (Already Complete)

Tasks T001-T035 from the original spec are marked complete and represent the foundational implementation work. The tasks above (T036-T090) represent the remaining finalization work needed to bring the site to production quality.
