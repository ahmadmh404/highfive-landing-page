# Quickstart: Multilingual Support

## Adding New Translatable Content

### Step 1: Add Translation Keys

Add new keys to `lib/i18n/translations.ts`:

```typescript
// For testimonials data (currently missing)
export const translations = {
  en: {
    // ... existing
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from real businesses",
      items: [  // ADD THIS
        {
          name: "Sarah Johnson",
          role: "CEO",
          company: "TechStart Inc",
          content: "HighFive transformed...",
        },
        // ... more items
      ],
    },
  },
  ar: {
    // ... existing
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "تقييمات حقيقية من شركات حقيقية",
      items: [  // ADD THIS
        {
          name: "سارة جونسون",
          role: "الرئيس التنفيذي",
          company: "تك ستارت",
          content: "حول هاي فايف حضورنا الرقمي...",
        },
        // ... more items
      ],
    },
  },
};
```

### Step 2: Update Component to Use Translations

```typescript
// components/sections/testimonials-section.tsx
interface TestimonialsSectionProps {
  t: {
    title: string;
    subtitle: string;
    items: Array<{  // ADD items type
      name: string;
      role: string;
      company: string;
      content: string;
      rating: number;
    }>;
  };
}

export function TestimonialsSection({ t }: TestimonialsSectionProps) {
  // Use t.items instead of hardcoded array
  const testimonials = t.items;
  // ... rest of component
}
```

---

## Testing Language Switching

### Manual Test

1. Visit site → loads in English (default)
2. Click LanguageSwitcher button ("عربي")
3. URL changes: `/en` → `/ar`
4. Page content displays in Arabic
5. Refresh page → still Arabic (persisted)

### Automated Test

```typescript
// tests/i18n.test.ts
import { render, screen, fireEvent } from "@testing-library/react";

test("language switcher persists choice", () => {
  // Set Arabic preference
  localStorage.setItem("highfive-locale", JSON.stringify({
    locale: "ar",
    lastUpdated: Date.now()
  }));
  
  // Render component
  render(<LanguageSwitcher currentLocale="ar" />);
  
  // Click to switch to English
  fireEvent.click(screen.getByRole("button"));
  
  // Verify localStorage updated
  const saved = JSON.parse(localStorage.getItem("highfive-locale"));
  expect(saved.locale).toBe("en");
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
| `components/language-switcher.tsx` | Language toggle component |
| `app/[locale]/layout.tsx` | Layout with locale context |