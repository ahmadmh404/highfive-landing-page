"use client";

import { toast } from "@/hooks/use-toast";

export function showLanguageSwitchedToast(locale: string): void {
  toast({
    title: locale === "ar" ? "تم تغيير اللغة" : "Language Changed",
    description:
      locale === "ar"
        ? "تم التبديل إلى العربية بنجاح"
        : "Switched to English successfully",
    duration: 3000,
  });
}

export function showLanguageFallbackToast(fallbackLocale: string): void {
  toast({
    title: fallbackLocale === "ar" ? "اللغة الافتراضية" : "Default Language",
    description:
      fallbackLocale === "ar"
        ? "تم استخدام العربية كلغة افتراضية"
        : "Using Arabic as default language",
    duration: 4000,
  });
}

export function showTranslationMissingToast(): void {
  toast({
    title: "Translation Missing",
    description: "Showing English content as fallback",
    duration: 5000,
    variant: "destructive",
  });
}
