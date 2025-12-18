import type { Locale } from "./config";
import { translations } from "./translations";

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}
