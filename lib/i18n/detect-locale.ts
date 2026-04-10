import { type Locale, locales } from "./config";

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

function extractLocaleCode(languageTag: string): string | null {
  if (!languageTag || typeof languageTag !== "string") return null;

  const parts = languageTag.split("-");
  if (parts.length === 0) return null;

  return parts[0].toLowerCase();
}

export function detectBrowserLocale(): Locale | null {
  if (typeof navigator === "undefined") return null;

  const browserLanguages = navigator.languages ?? [navigator.language ?? ""];

  for (const lang of browserLanguages) {
    const code = extractLocaleCode(lang);
    if (code && isLocale(code)) {
      return code;
    }
  }

  return null;
}

export function getAutoDetectedLocale(): Locale {
  const detected = detectBrowserLocale();
  return detected ?? "ar";
}
