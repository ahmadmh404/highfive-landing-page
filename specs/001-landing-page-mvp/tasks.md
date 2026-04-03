# Tasks: 001-landing-page-mvp

**Branch**: `001-landing-page-mvp` | **Generated**: 2026-04-03

## Summary

Landing page implementation tasks organized by user story in priority order. Independent test criteria defined for each story to enable incremental validation.

---

## Phase 1: Setup

Project initialization and configuration.

- [x] T001 Verify existing Next.js 16 setup and dependencies in package.json
- [x] T002 [P] Verify existing dark/light mode setup (next-themes) in app/providers.tsx
- [x] T003 [P] Verify existing localization setup (next-intl) in app/[locale]/
- [x] T004 Create project directory structure: components/sections/, components/features/ai-demos/, lib/data/

**Independent Test**: All commands run without errors.

---

## Phase 2: Foundational

Blocking prerequisites that MUST complete before user stories.

- [x] T005 Create base TypeScript types for all entities in lib/types/index.ts
- [x] T006 [P] Create site constants (team, services, AI tools placeholder data) in lib/constants.ts
- [x] T007 [P] Create mock data files in lib/data/: team.ts, ai-tools.ts, projects.ts, courses.ts
- [x] T008 Create reusable section wrapper component in components/sections/SectionWrapper.tsx

**Dependencies**: Phase 1 complete  
**Independent Test**: Types compile without errors, constants export valid data.

---

## Phase 3: User Story 1 - Discover Services and Contact Team (P1)

**Goal**: Hero section, services section, and contact form working.

**Independent Test**: Visitor can view hero, services, and submit contact form with success message.

### Implementation

- [x] T009 [US1] Create Hero section component in components/sections/Hero.tsx
- [x] T010 [US1] Create services cards component in components/sections/Services.tsx
- [x] T011 [US1] Create contact form component in components/sections/ContactForm.tsx
- [x] T012 [US1] Implement contact form client-side validation (name, email required; phone optional)
- [x] T013 [US1] Add smooth-scroll behavior for "Start a Project" CTA to contact form

**Tests**: Contact form validation <200ms, form clears on success (FR-019)

---

## Phase 4: User Story 2 - Explore and Interact with AI Tools (P1)

**Goal**: Interactive AI tool demos with mock API.

**Independent Test**: Visitor can open demo modal, fill form, run demo, see loading, view results.

### Implementation

- [x] T014 [US2] Create AI Tools section component in components/sections/AiTools.tsx
- [x] T015 [US2] Create AI demo modal component in components/features/ai-demos/DemoModal.tsx
- [x] T016 [US2] Create mock API function with 2-5s delay in lib/api/mock-ai-demo.ts
- [x] T017 [US2] Add loading animation during demo processing
- [x] T018 [US2] Handle rapid click protection (extend to max 10s with warning)
- [x] T019 [US2] Add smooth-scroll behavior for "Explore AI Tools" CTA to AI Tools section

**Tests**: Demo completes full cycle <8s (SC-002), loading animation visible (SC-009)

---

## Phase 5: User Story 3 - Evaluate Team Credibility (P2)

**Goal**: Team member cards displaying all required info.

**Independent Test**: Visitor can view 5 team member cards with photos, names, roles, bios, social links.

### Implementation

- [x] T020 [US3] Create Team section component in components/sections/Team.tsx
- [x] T021 [US3] Create team member card component in components/sections/TeamMemberCard.tsx

**Dependencies**: T006 (constants)

---

## Phase 6: User Story 4 - Browse Projects Portfolio (P2)

**Goal**: Filterable project gallery.

**Independent Test**: Visitor can filter projects by category and view filtered results.

### Implementation

- [x] T022 [US4] Create Projects section component in components/sections/Projects.tsx
- [x] T023 [US4] Create project filter bar component in components/sections/ProjectsFilter.tsx
- [x] T024 [US4] Implement real-time filter without page reload (<300ms)
- [x] T025 [US4] Create project card component in components/sections/ProjectCard.tsx

**Tests**: Filter update <300ms (SC-007)

---

## Phase 7: User Story 5 - Preview Available Courses (P2)

**Goal**: Course preview grid.

**Independent Test**: Visitor can view course cards with titles, levels, descriptions.

### Implementation

- [x] T026 [US5] Create Courses section component in components/sections/Courses.tsx
- [x] T027 [US5] Create course card component in components/sections/CourseCard.tsx

---

## Phase 8: User Story 6 - Switch Theme and Language (P3)

**Goal**: Dark/light mode toggle and language switcher.

**Independent Test**: Visitor can toggle theme and switch language.

### Implementation

- [x] T028 [US6] Verify dark/light mode transitions smoothly (<500ms)
- [x] T029 [US6] Add new content keys to localization files for any new text

**Tests**: Theme transition <500ms (SC-004)

---

## Phase 9: How We Work Section

**Goal**: Process visualization section.

### Implementation

- [x] T030 Create HowWeWork section component in components/sections/HowWeWork.tsx

---

## Phase 10: Navigation & Polish

Cross-cutting concerns and final integration.

- [x] T031 [P] Create responsive navigation bar with mobile hamburger in components/sections/Navbar.tsx
- [x] T032 [P] Add mobile-first responsive styles to all sections (320px-2560px)
- [x] T033 Add smooth-scroll anchor support to navbar (FR-017)
- [x] T034 Integrate all sections into app/page.tsx in correct order
- [x] T035 Remove all placeholder/fake content per FR-016

**Tests**: Lighthouse score >90 (SC-008), responsive 320px-2560px (SC-003)

---

## Dependency Graph

```
Phase 1 (Setup)
    │
    ▼
Phase 2 (Foundational) ───────┐
    │                        │
    ▼                        ▼
Phase 3 (US1)         Phase 5 (US3)
    │                        │
    ▼                        ▼
Phase 4 (US2) ◄────────────┤
    │
    ▼
Phase 6 (US4)
    │
    ▼
Phase 7 (US5)
    │
    ▼
Phase 8-10 (Polish)
```

---

## Parallel Execution Opportunities

| Tasks            | Parallel Because                                 |
| ---------------- | ------------------------------------------------ |
| T002, T003       | Independent verification                         |
| T006, T007       | Independent constant/data creation               |
| T020, T022, T026 | Different sections, no dependencies between them |
| T031, T032       | Different concerns (nav + responsive)            |

---

## Implementation Strategy

**MVP Scope**: User Story 1 (T009-T013) + Hero/Services/Contact form

**Incremental Delivery**:

1. First: Hero + Services + Contact Form (complete lead gen flow)
2. Second: AI Tools demos (differentiating feature)
3. Third: Team + Projects
4. Fourth: Courses + How We Work
5. Fifth: Theme/Language + Polish

---

## Total Task Count: 35

| Phase                 | Tasks     | Count |
| --------------------- | --------- | ----- |
| Phase 1: Setup        | T001-T004 | 4     |
| Phase 2: Foundational | T005-T008 | 4     |
| Phase 3: US1          | T009-T013 | 5     |
| Phase 4: US2          | T014-T019 | 6     |
| Phase 5: US3          | T020-T021 | 2     |
| Phase 6: US4          | T022-T025 | 4     |
| Phase 7: US5          | T026-T027 | 2     |
| Phase 8: US6          | T028-T029 | 2     |
| Phase 9: HowWeWork    | T030      | 1     |
| Phase 10: Polish      | T031-T035 | 5     |

---

## Suggested MVP Scope

**MVP**: Complete Phase 3 (User Story 1) - Hero, Services, Contact Form

This delivers the primary business goal: converting visitors into clients. The MVP should be independently testable with a complete lead generation flow.
