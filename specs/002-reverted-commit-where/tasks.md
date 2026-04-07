# Tasks: Apply Frontend Best Practices

**Input**: Design documents from `/specs/002-reverted-commit-where/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: N/A - Validation via automated linting and manual review (per clarifications)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Audit & Analysis)

**Purpose**: Analyze current codebase before making changes

- [x] T001 Run initial TypeScript type-check and document all type errors
- [x] T002 [P] Run ESLint and document all lint errors/warnings
- [x] T003 [P] List all components in components/ directory
- [x] T004 Inventory all TypeScript `any` types used in components
- [x] T005 Document current component naming patterns

---

## Phase 2: Foundational (Baseline Validation)

**Purpose**: Establish baseline measurements before changes

- [x] T006 Run Lighthouse audit and record baseline scores (Performance, Accessibility)
- [x] T007 [P] Run build and document initial bundle size
- [x] T008 Test all visual effects are functional (animations, Three.js, transitions)
- [x] T009 Document current accessibility issues (missing ARIA, keyboard nav)

---

## Phase 3: User Story 1 - Code Quality Audit (Priority: P1) 🎯 MVP

**Goal**: Improve code quality with consistent patterns and TypeScript types while preserving all effects

**Independent Test**: Run app, verify all sections render with animations and effects intact

### Implementation for User Story 1

- [x] T010 [P] [US1] Fix component naming inconsistencies in components/*.tsx
- [x] T011 [P] [US1] Add proper TypeScript interfaces for component props in components/
- [x] T012 [P] [US1] Replace all `any` types with proper types in components/
- [x] T013 [P] [US1] Add proper TypeScript interfaces for component props in components/ui/
- [x] T014 [P] [US1] Replace all `any` types with proper types in components/ui/
- [x] T015 [US1] Fix lint errors in lib/ directory
- [x] T016 [US1] Fix lint errors in hooks/ directory
- [x] T017 [US1] Fix TypeScript errors in lib/utils.ts
- [x] T018 [US1] Fix TypeScript errors in custom hooks

**Checkpoint**: At this point, code quality improved while all effects remain functional

---

## Phase 4: User Story 2 - Performance Optimization (Priority: P2)

**Goal**: Optimize performance without removing features

**Independent Test**: Lighthouse score improves or stays above 90

### Implementation for User Story 2

- [x] T019 [P] [US2] Add dynamic imports for Three.js components (components/ui/GridGlobe.tsx)
- [x] T020 [P] [US2] Add dynamic imports for other heavy animation components
- [x] T021 [US2] Implement Next.js Image component for all img tags
- [x] T022 [US2] Add proper lazy loading for below-fold components
- [x] T023 [US2] Verify bundle size reduction with build analysis

**Checkpoint**: Performance improved while all visual effects work

---

## Phase 5: User Story 3 - Accessibility Enhancement (Priority: P3)

**Goal**: Improve accessibility without changing visual design

**Independent Test**: Accessibility score improves, keyboard navigation works

### Implementation for User Story 3

- [x] T024 [P] [US3] Add ARIA labels to interactive elements in components/
- [x] T025 [P] [US3] Add ARIA labels to interactive elements in components/ui/
- [x] T026 [US3] Ensure all buttons have accessible names
- [x] T027 [US3] Add proper focus management for modals/dialogs if any
- [x] T028 [US3] Ensure proper heading hierarchy (h1-h6)
- [x] T029 [US3] Add skip-to-content link for keyboard users
- [x] T030 [US3] Verify keyboard navigation works throughout

**Checkpoint**: Accessibility improved while visual design unchanged

---

## Phase 6: Polish & Validation

**Purpose**: Final validation and cleanup

- [x] T031 [P] Run full ESLint and fix all errors/warnings
- [x] T032 [P] Run full TypeScript type-check and fix all errors
- [x] T033 Run Lighthouse and verify scores meet success criteria
- [x] T034 Manual testing: verify all visual effects functional
- [x] T035 [P] Accessibility audit and fix any remaining issues
- [x] T036 Final build verification

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup - provides baseline measurements
- **User Stories (Phase 3-5)**: All can proceed sequentially after Foundational
  - US1 (P1) first - core code quality
  - US2 (P2) second - performance
  - US3 (P3) third - accessibility
- **Polish (Phase 6)**: Depends on all user stories

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - baseline code quality
- **User Story 2 (P2)**: Builds on US1 - adds performance optimizations
- **User Story 3 (P3)**: Builds on US1 - adds accessibility improvements
- All stories can be implemented in parallel if needed (different files)

### Within Each User Story

- Code quality issues in different components marked [P] can run in parallel
- Work on one component folder at a time to avoid conflicts
- Story complete before validation pass

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel
- Within US1: T010-T014 can run in parallel (different component folders)
- Within US2: T019-T020 can run in parallel
- Within US3: T024-T025 can run in parallel
- Polish phase T031-T032, T035 can run in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1-2: Analysis and baseline
2. Complete Phase 3: User Story 1 (Code Quality)
3. **STOP and VALIDATE**: Verify all effects work, lint passes

### Incremental Delivery

1. Phase 1-2 → Baseline ready
2. Phase 3 (US1) → Code quality improved → Validate → Deploy
3. Phase 4 (US2) → Performance improved → Validate → Deploy
4. Phase 5 (US3) → Accessibility improved → Validate → Deploy
5. Phase 6 → Final polish

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- All visual effects MUST remain functional throughout
- No effect removal without explicit user confirmation
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
