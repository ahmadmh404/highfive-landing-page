# Data Model: Multilingual Support - Landing Page

## Entities

### 1. LocaleConfig

Configuration for supported languages.

| Field | Type | Description |
|-------|------|-------------|
| `locales` | `readonly ["en", "ar"]` | Supported locale codes |
| `defaultLocale` | `"ar"` | Fallback locale (Arabic per spec) |
| `rtlLocales` | `["ar"]` | Right-to-left languages |

**Source**: `lib/i18n/config.ts` (unchanged)

---

### 2. TranslationData

All UI text content organized by section.

**Structure**:
```
translations
├── nav
├── hero
├── services
├── whyChooseUs
├── process
├── techStack
├── projects
├── team
├── courses
├── aiCapabilities
├── aiTools
├── testimonials    ← KEY ISSUE: Has title/subtitle translations but NO content translations
├── newsletter
├── cta
├── faq
├── contact
└── footer
```

**Testimonials Status**: ✅ RESOLVED
- Now includes: 6 testimonials with name, role, company, content in both EN and AR
- Keys: `sarah`, `ahmed`, `maria`, `priya`, `mohamed`, `nour`

**Source**: `lib/i18n/translations.ts` (extended)

---

### 3. LanguagePreference

User's language choice.

| Field | Type | Description |
|-------|------|-------------|
| `locale` | `Locale` | User's selected language ("en" or "ar") |
| `lastUpdated` | `number` | Timestamp of last selection |

**Storage**: Cookie `"highfive-locale"` (with localStorage fallback)

**Persistence Implementation**:
```typescript
// lib/i18n/locale-cookies.ts
import { setStoredLocale, getStoredLocale } from "@/lib/i18n/locale-cookies";

// Save preference (cookies + localStorage fallback)
setStoredLocale(newLocale);

// Load preference (cookies first, then localStorage)
const savedLocale = getStoredLocale();
```

**Files**:
- `lib/i18n/locale-cookies.ts` - Cookie/localStorage persistence
- `lib/i18n/detect-locale.ts` - Browser language auto-detection
- `lib/i18n/resolve-locale.ts` - Locale resolution (URL > storage > auto > default)
- `lib/i18n/language-toast.ts` - Toast notifications

---

### 4. AutoDetectionResult

Browser language detection result.

| Field | Type | Description |
|-------|------|-------------|
| `detectedLocale` | `Locale \| null` | Browser's preferred language |
| `isSupported` | `boolean` | Whether detected language is supported |
| `fallbackLocale` | `Locale` | Which locale to use if not supported |

**Algorithm**:
1. Get `navigator.language` or `navigator.languages`
2. Extract locale code (e.g., "en-US" → "en")
3. Check if in `supportedLocales`
4. Return default if not supported

---

### 5. ToastNotification

Feedback message for language events.

| Field | Type | Description |
|-------|------|-------------|
| `type` | `"success" \| "info" \| "warning"` | Message type |
| `message` | `string` | Message text |
| `duration` | `number` | Auto-dismiss milliseconds |

**Use Cases**:
- Language switched successfully
- Language fallback (unsupported → default)
- Auto-detection applied

---

## State Transitions

### Language Switch Flow

```
User clicks LanguageSwitcher
    ↓
Check localStorage for saved preference
    ↓
If no saved preference → Run auto-detection
    ↓
Update URL path (/en → /ar)
    ↓
Save new preference to localStorage
    ↓
Trigger page re-render with new locale
    ↓
If translation missing → Show toast + fallback
```

### Auto-Detection Flow

```
First visit (no localStorage)
    ↓
Check navigator.language
    ↓
If "ar" → Use Arabic
    ↓
If "en" → Use English  
    ↓
If other → Default to English + show toast
    ↓
Save preference to localStorage
```

---

## Validation Rules

1. **Locale must be supported**: Only "en" or "ar" allowed
2. **localStorage availability**: Must handle private/incognito mode gracefully
3. **URL sync**: Locale in URL must match stored preference
4. **RTL detection**: Must apply correct text direction for Arabic

---

## File Changes Completed

| File | Change Type | Status |
|------|-------------|--------|
| `lib/i18n/translations.ts` | Extended | ✅ Complete |
| `lib/i18n/locale-cookies.ts` | New | ✅ Complete |
| `lib/i18n/detect-locale.ts` | New | ✅ Complete |
| `lib/i18n/resolve-locale.ts` | New | ✅ Complete |
| `lib/i18n/language-toast.ts` | New | ✅ Complete |
| `components/language-switcher.tsx` | Modified | ✅ Complete |
| `components/TestimonialsSection.tsx` | Modified | ✅ Complete |
| `app/[locale]/layout.tsx` | Verified | ✅ Complete |