# Tasks: Multilingual Support - Landing Page

**Input**: Design documents from `/specs/004-it-seemslike-multilingual/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare project for multilingual feature implementation

- [ ] T001 Verify existing i18n configuration in lib/i18n/config.ts supports en and ar locales
- [ ] T002 [P] Review existing translations.ts structure at lib/i18n/translations.ts
- [ ] T003 [P] Examine current LanguageSwitcher component at components/language-switcher.tsx

**Checkpoint**: Setup complete - understand current state

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure required before user story implementation

- [ ] T004 Create cookie-based locale persistence utility in lib/i18n/locale-cookies.ts
- [ ] T005 [P] Implement browser language auto-detection function in lib/i18n/detect-locale.ts
- [ ] T006 Integrate existing shadcn toast at components/ui/toast.tsx for language fallback feedback messages
- [ ] T006b **[FR-017]** Implement default-to-Arabic locale resolution when no URL locale and no stored preference exists

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Language Switching (Priority: P1) 🎯 MVP

**Goal**: Users can switch between English and Arabic using the LanguageSwitcher in the top navigation

**Independent Test**: Click each language option and verify page content changes accordingly

### Implementation for User Story 1

- [ ] T007 [P] [US1] Enhance LanguageSwitcher at components/language-switcher.tsx to use cookie persistence
- [ ] T008 [US1] Integrate auto-detection in LanguageSwitcher for first-time visitors
- [ ] T009 [US1] Add URL locale priority handling (URL locale wins over stored preference)

**Checkpoint**: User can switch languages with persistence - MVP complete

---

## Phase 4: User Story 2 - Persistent Language Preference (Priority: P1)

**Goal**: Language preference persists across sessions using cookies (with localStorage fallback)

**Independent Test**: Select a language, close browser, reopen page, verify language is preserved

### Implementation for User Story 2

- [ ] T010 [P] [US2] Extend locale-cookies.ts with getLocale and setLocale functions
- [ ] T011 [US2] Add localStorage fallback to cookies for private/incognito mode in locale-cookies.ts
- [ ] T012 [US2] Update LanguageSwitcher to use new cookie utility for preference storage

**Checkpoint**: Language persists across sessions

---

## Phase 5: User Story 3 - Testimonials Multilingual Support (Priority: P2)

**Goal**: Testimonials section displays correctly in both English and Arabic with proper RTL

**Independent Test**: Switch to each language, scroll to testimonials section, verify content displays correctly

### Implementation for User Story 3

- [ ] T013 [P] [US3] Add Arabic translations for testimonials content in lib/i18n/translations.ts (3 testimonials: names, roles, companies, quotes)
- [ ] T014 [US3] Update TestimonialsSection at components/sections/testimonials-section.tsx to use translation keys instead of hardcoded content
- [ ] T015 [US3] Verify RTL rendering works correctly for Arabic testimonials

**Checkpoint**: Testimonials section fully multilingual

---

## Phase 6: User Story 4 - Language Fallback Handling (Priority: P2)

**Goal**: System handles unavailable languages gracefully with user feedback (toast)

**Independent Test**: Attempt to switch to unsupported language, verify toast appears and English loads

### Implementation for User Story 4

- [ ] T016 [P] [US4] Add Arabic FAQ translations in lib/i18n/translations.ts (6 Q&A pairs)
- [ ] T017 [US4] Update FAQSection at components/sections/faq-section.tsx to use translation keys
- [ ] T018 [US4] Add fallback toast notification when translation key is missing
- [ ] T019 [US4] Handle fallback to English when Arabic translation is missing

**Checkpoint**: Fallback handling works for all sections

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: SEO improvements and overall quality

- [ ] T020 [P] Add hreflang and canonical meta tags via Next.js generateMetadata in app/[locale]/layout.tsx for en and ar variants
- [ ] T021 Verify html lang attribute is set correctly per locale in layout.tsx

### Verification Notes (SC-001, SC-003, SC-004)

> The following are verification checklist items - no code changes required, confirm through testing:

- ☐ T022 **[SC-001]** Test language switch under 2 seconds (95th percentile)
- ☐ T023 **[SC-003]** Test persistence across browser sessions (close and reopen browser)
- ☐ T024 **[SC-004]** Verify RTL layout for Arabic content across all sections

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - No dependencies on other stories
- **User Story 2 (P1)**: Depends on US1 - builds on persistence infrastructure
- **User Story 3 (P2)**: Can start after Foundational - independent
- **User Story 4 (P2)**: Can start after Foundational - independent

### Parallel Opportunities

- T002 and T003 can run in parallel (Setup phase)
- T004, T005, T006 can run in parallel (Foundational phase)
- T007, T008, T009 can run in parallel (US1 implementation)
- T013 and T016 can run in parallel (translations for different sections)
- T020 and T022 can run in parallel (Polish phase)

---

## Implementation Strategy

### MVP First (User Stories 1 + 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Language Switching)
4. Complete Phase 4: User Story 2 (Persistence)
5. **STOP and VALIDATE**: Core language switching works with persistence
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add US1 + US2 → Test → Core language switching MVP ready
3. Add US3 → Test → Testimonials multilingual
4. Add US4 → Test → All fallback handling working
5. Polish → Full feature complete

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- User clarifications: cookies for persistence (not localStorage), Arabic as default locale, URL locale priority
- Translation gaps: testimonials (3 items), FAQ (6 Q&A pairs) need Arabic content
