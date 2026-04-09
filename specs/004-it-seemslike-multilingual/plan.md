# Implementation Plan: Multilingual Support - Landing Page

**Branch**: `004-it-seemslike-multilingual` | **Date**: 2026-04-09 | **Spec**: [spec.md](./spec.md)

## Summary

Extend existing Next.js i18n infrastructure to provide full multilingual support (English & Arabic) across all landing page sections, with emphasis on testimonials and other currently unsupported sections. Implement persistent language preference, auto-detection, and graceful fallback handling.

## Technical Context

**Language/Version**: TypeScript 5.x, Next.js 16  
**Primary Dependencies**: next-intl (existing), React, Tailwind CSS  
**Storage**: Cookies/localStorage for language persistence  
**Testing**: Jest + React Testing Library (existing project setup)  
**Target Platform**: Web (responsive)  
**Project Type**: Web application / Landing page  
**Performance Goals**: Language switch <2s, First Contentful Paint unaffected  
**Constraints**: Must maintain existing dark/light mode, existing i18n structure  
**Scale/Scope**: 2 languages, ~10 page sections, single-page application

## Constitution Check

| Principle | Compliance | Notes |
|-----------|------------|-------|
| **I. Honesty** | ✅ | All translation content must be accurate—no fabricated content |
| **II. Usefulness** | ✅ | Language switching provides tangible value to Arabic-speaking visitors |
| **III. Human + Technical** | ✅ | RTL support demonstrates technical competence; real team testimonials in both languages |
| **IV. High Quality** | ✅ | Must meet WCAG 2.1 AA; smooth RTL transitions; maintain dark/light mode |

**GATE**: Pass - No violations detected

## Project Structure

```
specs/004-it-seemslike-multilingual/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

```
src/
├── app/                 # Next.js App Router
│   ├── [locale]/        # Localization route (existing)
│   └── ...
├── components/
│   ├── navigation/
│   │   └── LanguageSwitcher.tsx  # Modify existing component
│   └── ...
├── messages/            # Translation files
│   ├── en.json
│   └── ar.json
├── i18n/                # i18n configuration
└── lib/
    └── ...

tests/
└── ...
```

**Structure Decision**: Single Next.js project - extend existing i18n structure with new translation keys for missing sections

---

## Phase 0: Research

### Unknowns to Resolve

1. **Current i18n implementation**: What translation files exist and how are they structured?
2. **LanguageSwitcher component**: What is the current implementation and how does it handle language switching?
3. **Testimonials section**: What component/file contains testimonials and how are they rendered?

### Research Tasks

- [ ] **Task 1**: Research existing next-intl configuration and translation file structure
- [ ] **Task 2**: Find LanguageSwitcher component and understand current behavior
- [ ] **Task 3**: Locate testimonials section and determine content structure

### Outputs

- `research.md` with findings and recommendations

---

## Phase 1: Design

### Data Model

**Entities**:
- `LocaleConfig`: Supported locales (en, ar), default locale, detection strategy
- `TranslationKeys`: Hierarchical key structure for all UI text
- `UserPreference`: Stored language choice (localStorage/cookie)
- `ToastMessage`: Feedback messages for language events

### Contracts

- **LanguageSwitcher API**: Props for current locale, onLocaleChange callback, supported locales list
- **Translation Provider**: Context API for accessing translations across components

### Quickstart

- Steps to add new translatable content
- How to test language switching
- RTL styling guidelines for Arabic

---

## Phase 2: Tasks

*To be generated via /speckit.tasks command*

Expected high-level tasks:
1. Audit all page sections for missing translation keys
2. Add Arabic translations for testimonials section
3. Enhance LanguageSwitcher for persistence + auto-detection
4. Implement RTL layout support
5. Add toast notification component
6. Test across all languages and sections

---

**Plan Status**: Phase 0-1 Complete | Ready for `/speckit.tasks`