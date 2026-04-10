import { type Locale, locales } from "./config";

const COOKIE_NAME = "highfive-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

interface LocalePreference {
  locale: Locale;
  lastUpdated: number;
}

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function getLocaleFromCookie(): Locale | null {
  if (typeof document === "undefined") return null;

  try {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === COOKIE_NAME && isLocale(value)) {
        return value;
      }
    }
  } catch {
    // Ignore cookie parsing errors
  }

  return null;
}

export function setLocaleToCookie(locale: Locale): void {
  if (typeof document === "undefined") return;

  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + COOKIE_MAX_AGE * 1000);
    document.cookie = `${COOKIE_NAME}=${locale};expires=${expires.toUTCString()};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
  } catch {
    // Ignore cookie errors (private browsing)
  }
}

export function getLocaleFromStorage(): Locale | null {
  if (typeof localStorage === "undefined") return null;

  try {
    const stored = localStorage.getItem(COOKIE_NAME);
    if (!stored) return null;

    const parsed: unknown = JSON.parse(stored);
    if (
      parsed &&
      typeof parsed === "object" &&
      "locale" in parsed &&
      isLocale((parsed as LocalePreference).locale)
    ) {
      return (parsed as LocalePreference).locale;
    }
  } catch {
    // Ignore parse errors
  }

  return null;
}

export function setLocaleToStorage(locale: Locale): void {
  if (typeof localStorage === "undefined") return;

  try {
    const preference: LocalePreference = {
      locale,
      lastUpdated: Date.now(),
    };
    localStorage.setItem(COOKIE_NAME, JSON.stringify(preference));
  } catch {
    // Ignore storage errors (private browsing)
  }
}

export function getStoredLocale(): Locale | null {
  return getLocaleFromCookie() ?? getLocaleFromStorage();
}

export function setStoredLocale(locale: Locale): void {
  setLocaleToCookie(locale);
  setLocaleToStorage(locale);
}
