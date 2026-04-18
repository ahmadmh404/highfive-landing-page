"use client";

import { navItems } from "@/_legacy/data";
import { useEffect, useState } from "react";

type PageSection = (typeof navItems)[number]["link"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<PageSection | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section as PageSection);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { activeSection, setActiveSection };
}
