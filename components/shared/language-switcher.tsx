"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { type Locale } from "@/lib/i18n/config";
import { setStoredLocale, getStoredLocale } from "@/lib/i18n/locale-cookies";
import { showLanguageSwitchedToast } from "@/lib/i18n/language-toast";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const stored = getStoredLocale();
    setIsFirstVisit(!stored);
  }, []);

  const switchLocale = () => {
    const newLocale: Locale = currentLocale === "en" ? "ar" : "en";

    setStoredLocale(newLocale);

    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);

    showLanguageSwitchedToast(newLocale);
  };

  return (
    <button
      onClick={switchLocale}
      className="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 hover:bg-white/10 border border-primary/30 text-primary"
      aria-label={
        currentLocale === "en" ? "Switch to Arabic" : "Switch to English"
      }
    >
      {currentLocale === "en" ? "عربي" : "EN"}
    </button>
  );
}
