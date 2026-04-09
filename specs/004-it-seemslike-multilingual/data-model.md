# Data Model: Multilingual Support - Landing Page

## Entities

### 1. LocaleConfig

Configuration for supported languages.

| Field | Type | Description |
|-------|------|-------------|
| `locales` | `readonly ["en", "ar"]` | Supported locale codes |
| `defaultLocale` | `"en"` | Fallback locale |
| `rtlLocales` | `["ar"]` | Right-to-left languages |

**Source**: `lib/i18n/config.ts` (existing, no changes needed)

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

**Testimonials Gap**:
- Current: `title`, `subtitle` have translations
- Missing: `testimonials[].name`, `role`, `company`, `content`

**Source**: `lib/i18n/translations.ts` (needs extension)

---

### 3. LanguagePreference

User's language choice.

| Field | Type | Description |
|-------|------|-------------|
| `locale` | `Locale` | User's selected language ("en" or "ar") |
| `lastUpdated` | `number` | Timestamp of last selection |

**Storage**: localStorage key: `"highfive-locale"`

**Persistence Implementation**:
```typescript
// Save preference
localStorage.setItem("highfive-locale", JSON.stringify({
  locale: newLocale,
  lastUpdated: Date.now()
}));

// Load preference
const saved = localStorage.getItem("highfive-locale");
```

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

## File Changes Required

| File | Change Type | Description |
|------|-------------|-------------|
| `lib/i18n/translations.ts` | Extend | Add Arabic testimonials data |
| `components/language-switcher.tsx` | Modify | Add persistence + auto-detection |
| `components/ui/toast.tsx` | Create | Add toast notification component |
| `app/[locale]/layout.tsx` | Verify | Ensure RTL class applied |