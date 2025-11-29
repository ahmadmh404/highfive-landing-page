"use client";

import { useState } from "react";
import { Moon, Sun, Globe, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { HighFiveLogo } from "@/components/highfive-logo";
import { useScroll } from "@/hooks/use-scroll";
import Link from "next/link";
import { NavigationItems } from "./shared/navigation-items";
import { ThemeToggle } from "./shared/theme-toggle";
import { staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { scrolled } = useScroll();

  return (
    <nav
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container items-center mx-auto px-4">
        <div className="w-full flex items-center justify-between h-20">
          <Link
            href={"#hero"}
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <HighFiveLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-8 mr-14">
            <NavigationItems />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="hover:!bg-transparent hover:!text-primary"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            >
              <Globe className="size-5" />
            </Button>

            <ThemeToggle />
            <div className="lg:hidden">
              <Button
                variant="ghost"
                className="hover:!bg-transparent hover:!text-primary"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </Button>
            </div>

            {open && (
              <div className="lg:hidden absolute border-b border-border top-16 left-0 w-full">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={open ? "visible" : "hidden"}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t"
                >
                  <NavigationItems
                    onCLick={() => setOpen(false)}
                    mode="mobile"
                  />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
