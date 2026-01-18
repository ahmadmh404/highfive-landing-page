"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { type Locale, localeNames } from "@/lib/i18n/config"

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en"
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <Button variant="ghost" size="sm" onClick={switchLocale} className="gap-2">
      <Languages className="h-4 w-4" />
      <span>{localeNames[currentLocale === "en" ? "ar" : "en"]}</span>
    </Button>
  )
}
