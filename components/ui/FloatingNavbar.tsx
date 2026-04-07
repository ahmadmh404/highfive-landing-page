"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "../language-switcher";
import { Locale } from "@/lib/i18n/config";

interface NavItem {
  name: string;
  link: string;
  icon?: React.JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  locale: Locale;
  className?: string;
}

export const FloatingNav = ({
  navItems,
  locale,
  className,
}: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setScrolled(current > 0.02); // Trigger slightly earlier for better UX
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 py-3 rounded-xl border items-center justify-center gap-6",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.85)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 mr-2">
          <span
            className="font-bold text-base font-display text-primary"
          >
            High<span className="text-white">Five</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="text-sm transition-colors duration-200 hover:text-white text-muted-foreground"
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {/* Language toggle + CTA */}
        <div className="flex items-center gap-3 ml-2">
          <LanguageSwitcher currentLocale={locale} />
          <Link
            href="#contact"
            className="hidden sm:flex items-center px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 bg-primary/15 border border-primary/30 text-primary"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
