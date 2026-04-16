import { type Locale, locales } from "./config";
import { getStoredLocale } from "./locale-cookies";
import { getAutoDetectedLocale } from "./detect-locale";

export interface LocaleResolutionResult {
  locale: Locale;
  source: "url" | "storage" | "auto-detect" | "default";
}

function isValidLocale(locale: string | null | undefined): locale is Locale {
  return typeof locale === "string" && locales.includes(locale as Locale);
}

export function resolveLocale(
  urlLocale: string | null,
): LocaleResolutionResult {
  // the priority is for the URL.
  if (isValidLocale(urlLocale)) {
    return { locale: urlLocale, source: "url" };
  }

  // Second: we have the stored locale value.
  const storedLocale = getStoredLocale();
  if (isValidLocale(storedLocale)) {
    return { locale: storedLocale, source: "storage" };
  }

  // Third: we have auto detection.
  const autoDetected = getAutoDetectedLocale();
  if (isValidLocale(autoDetected)) {
    return { locale: autoDetected, source: "auto-detect" };
  }

  return { locale: "ar", source: "default" };
}

export function getDefaultLocale(): Locale {
  return "ar";
}
