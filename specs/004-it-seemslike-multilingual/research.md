# Research: Multilingual Support - Landing Page

## Summary

Investigated existing i18n infrastructure and identified gaps in multilingual support.

---

## Findings

### 1. Existing i18n Infrastructure

**Configuration** (`lib/i18n/config.ts`):

- Supported locales: `["en", "ar"]`
- Default locale: `"en"`
- RTL locales: `["ar"]`
- Function: `isRTL(locale)` available

**Translations** (`lib/i18n/translations.ts`):

- Comprehensive translation object with both `en` and `ar` keys
- Covers: nav, hero, services, whyChooseUs, process, techStack, projects, team, courses, aiCapabilities, aiTools, testimonials, newsletter, cta, faq, contact, footer
- Type: `TranslationKey` defined

### 2. LanguageSwitcher Component

**Location**: `components/language-switcher.tsx`

**Current Implementation**:

- Simple toggle button between EN/AR
- Uses URL path replacement (`/en` → `/ar`)
- Props: `currentLocale: Locale`
- No persistence (no localStorage/cookie)
- No auto-detection
- No toast notifications

### 3. Testimonials Section

**Location**: `components/sections/testimonials-section.tsx`

**Current State**:

- Translation keys exist: `t.title`, `t.subtitle` (both languages in translations.ts)
- **PROBLEM**: Testimonial content (names, roles, companies, quotes) is HARDCODED in English only
- Not using translation system for dynamic content
- Needs: Arabic translations for mock testimonial data

---

## Gaps Identified

| Section              | Status        | Issue                             |
| -------------------- | ------------- | --------------------------------- |
| Translation keys     | ✅ Complete   | All UI strings have en/ar keys    |
| Testimonials data    | ❌ Incomplete | Hardcoded English only, no Arabic |
| Language persistence | ❌ Missing    | No localStorage/cookie storage    |
| Auto-detection       | ❌ Missing    | No browser language detection     |
| Toast notifications  | ❌ Missing    | No feedback on language fallback  |
| RTL transitions      | ⚠️ Partial    | Config exists, needs verification |

---

## Recommendations

### High Priority

1. **Add Arabic translations for testimonials** - Extend translations.ts with Arabic testimonial content
2. **Implement language persistence** - Use localStorage to remember user choice
3. **Add auto-detection** - Check navigator.language on first visit

### Medium Priority

4. **Toast notifications** - Add component for language fallback feedback
5. **Test RTL rendering** - Verify Arabic text displays correctly in testimonials

### Low Priority

6. **Performance optimization** - Preload translation files

---

## Technology Decisions

**Framework**: Next.js 16 App Router with existing i18n setup

**Translation approach**: Extend existing `translations.ts` object (no next-intl package needed for now)

**Persistence**: localStorage (simple, works for this use case)

**No changes needed to**:

- lib/i18n/config.ts (already configured correctly)
- App router structure (already handles [locale] route)
