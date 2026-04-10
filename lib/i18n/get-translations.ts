import type { Locale } from "./config";
import { translations } from "./translations";

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function getFallbackTranslations() {
  return translations.en;
}

export function getNestedValue<T>(obj: T, path: string): unknown | undefined {
  const keys = path.split(".");
  let result: unknown = obj;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return result;
}
