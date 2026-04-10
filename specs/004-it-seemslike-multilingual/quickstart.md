# Quickstart: Multilingual Support

## Current Implementation Status

| Feature | Status | Files |
|---------|--------|-------|
| Language Switching | ✅ Complete | `components/language-switcher.tsx` |
| Cookie Persistence | ✅ Complete | `lib/i18n/locale-cookies.ts` |
| Auto-Detection | ✅ Complete | `lib/i18n/detect-locale.ts` |
| Locale Resolution | ✅ Complete | `lib/i18n/resolve-locale.ts` |
| Toast Notifications | ✅ Complete | `lib/i18n/language-toast.ts` |
| Testimonials i18n | ✅ Complete | `lib/i18n/translations.ts`, `components/TestimonialsSection.tsx` |

## Adding New Translatable Content

### Step 1: Add Translation Keys

Add new keys to `lib/i18n/translations.ts`:

```typescript
// testimonials structure (current implementation)
export const translations = {
  en: {
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from real businesses",
      items: {
        sarah: {
          name: "Sarah Al-Mansouri",
          role: "CTO",
          company: "Horizon Tech Dubai",
          content: "HighFive transformed...",
        },
        // Add more keys as needed
      },
    },
  },
  ar: {
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "تقييمات حقيقية من شركات حقيقية",
      items: {
        sarah: {
          name: "سارة المنصوري",
          role: "الرئيس التقني",
          company: "هورايزن تك دبي",
          content: "حولت هاي فايف...",
        },
      },
    },
  },
};
```

### Step 2: Update Component to Use Translations

```typescript
// components/TestimonialsSection.tsx (current implementation)
interface TestimonialsSectionProps {
  t: {
    title: string;
    subtitle: string;
    items?: {
      sarah: { name: string; role: string; company: string; content: string };
      ahmed: { name: string; role: string; company: string; content: string };
      maria: { name: string; role: string; company: string; content: string };
      priya?: { name: string; role: string; company: string; content: string };
      mohamed?: { name: string; role: string; company: string; content: string };
      nour?: { name: string; role: string; company: string; content: string };
    };
  };
}

export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
  // Use translation keys dynamically
  const testimonialItems = t.items
    ? [
        {
          quote: t.items.sarah.content,
          name: t.items.sarah.name,
          title: `${t.items.sarah.role}, ${t.items.sarah.company}`,
        },
        // ... more items
      ]
    : [];
  // ... rest of component
}
```

---

## Testing Language Switching

### Manual Test

1. Visit site → loads in Arabic (default per spec)
2. Click LanguageSwitcher button ("EN")
3. URL changes: `/ar` → `/en`
4. Page content displays in English
5. Toast shows: "Language Changed / Switched to English successfully"
6. Refresh page → still English (persisted via cookies)
7. Close browser, reopen → still English (persisted)

### Auto-Detection Test

1. Clear cookies/localStorage
2. Set browser language to Arabic
3. Visit site → loads in Arabic automatically
4. Set browser language to English
5. Visit site → loads in English automatically

### Locale Resolution Priority

1. **URL locale** (highest) - e.g., `/ar` in URL
2. **Stored preference** - cookies/localStorage
3. **Auto-detection** - browser language
4. **Default** - Arabic (per spec FR-017)

### Automated Test

```typescript
// tests/i18n.test.ts
import { render, screen, fireEvent } from "@testing-library/react";
import { setStoredLocale, getStoredLocale } from "@/lib/i18n/locale-cookies";

test("language switcher persists choice in cookies", () => {
  // Set Arabic preference via cookie
  setStoredLocale("ar");
  
  // Verify preference saved
  expect(getStoredLocale()).toBe("ar");
  
  // Render component
  render(<LanguageSwitcher currentLocale="ar" />);
  
  // Click to switch to English
  fireEvent.click(screen.getByRole("button"));
  
  // Verify preference updated
  expect(getStoredLocale()).toBe("en");
});
```

---

## RTL Styling Guidelines

### Automatic RTL

The app automatically applies RTL when locale is "ar":

- Check `lib/i18n/config.ts`: `isRTL(locale)` returns `true` for "ar"
- Layout component should apply: `dir={isRTL(locale) ? "rtl" : "ltr"}`

### Manual RTL Adjustments

For components that need direction-specific styles:

```typescript
import { isRTL } from "@/lib/i18n/config";

// In component
const direction = isRTL(locale) ? "rtl" : "ltr";
// or use Tailwind:
// <div className={locale === "ar" ? "text-right" : "text-left"}>
```

### Things to Test

- [ ] Text alignment flips correctly
- [ ] Icons that indicate direction (arrows) mirror appropriately
- [ ] Form inputs align correctly
- [ ] Number formatting (if any) displays correctly

---

## Toast Notification Usage

```typescript
// Show language fallback message
toast({
  title: "Language not supported",
  description: "Defaulting to English",
  variant: "warning",  // or "default", "destructive"
});
```

---

## Performance Notes

- Translation object is already loaded (no lazy loading needed)
- Language switch triggers full page navigation (Next.js default)
- Consider implementing soft navigation for <2s requirement if needed

---

## Files Reference

| File | Purpose |
|------|---------|
| `lib/i18n/config.ts` | Locale config (unchanged) |
| `lib/i18n/translations.ts` | All translation strings |
| `lib/i18n/get-translations.ts` | Translation getter utility |
| `lib/i18n/locale-cookies.ts` | Cookie/localStorage persistence |
| `lib/i18n/detect-locale.ts` | Browser language detection |
| `lib/i18n/resolve-locale.ts` | Locale resolution logic |
| `lib/i18n/language-toast.ts` | Toast notification functions |
| `components/language-switcher.tsx` | Language toggle component |
| `app/[locale]/layout.tsx` | Layout with locale context |