"use client";

import { usePathname, useRouter } from "next/navigation";
import { type Locale } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      className="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 hover:bg-white/10"
      style={{
        border: "1px solid rgba(203,172,249,0.3)",
        color: "#CBACF9",
      }}
    >
      {currentLocale === "en" ? "عربي" : "EN"}
    </button>
  );
}
