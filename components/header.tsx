"use client";

import { cn } from "@/lib/utils";
import { ThemeToggleLogo } from "./theme-toggle";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { LanguageSwitcher } from "./language-switcher";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const navLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#team",
  },
];

export function Header({ locale }: { locale: "ar" | "en" }) {
  const scrolled = useScroll(20);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex w-full justify-center transition-all duration-500 ease-in-out px-4",
        scrolled ? "top-4" : "top-0",
      )}
    >
      {/* Glass Container: 
          Using your --border and --background variables with OKLCH opacity 
      */}
      <nav
        className={cn(
          "relative flex items-center justify-between transition-all duration-500 ease-out",
          "border border-transparent",
          scrolled
            ? "h-12 w-full max-w-3xl rounded-full border-border bg-[oklch(from_var(--background)_l_c_h/0.6)] backdrop-blur-xl px-2 shadow-2xl shadow-primary/5"
            : "h-20 w-full max-w-7xl border-b border-[oklch(from_var(--border)_l_c_h/0.3)] bg-transparent px-6",
        )}
      >
        {/* Glow Effect (Only visible when scrolled) */}
        {scrolled && (
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-primary/5 blur-xl" />
        )}

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <ThemeToggleLogo />
          </Link>
          <AnimatePresence>
            {!scrolled && (
              <motion.span
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                className="text-lg font-bold tracking-tighter text-foreground md:block hidden"
              >
                highfive
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center gap-1 px-2">
            {navLinks.map(({ label, href }) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "relative rounded-full text-sm font-medium text-muted-foreground transition-all active:scale-95",
                  scrolled
                    ? "hover:!text-primary hover:!bg-transparent"
                    : "hover:text-foreground hover:!bg-accent/10",
                )}
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="mx-2 h-4 w-px bg-border/50" />

          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
