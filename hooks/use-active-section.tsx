"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Services", link: "#services" },
  { name: "Process", link: "#process" },
  { name: "Team", link: "#team" },
  { name: "Projects", link: "#projects" },
  { name: "Tech Stack", link: "#tech" },
  { name: "Courses", link: "#courses" },
  { name: "AI Tools", link: "#ai-tools" },
  { name: "Contact", link: "#contact" },
] as const;

type PageSection = (typeof navItems)[number]["link"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<PageSection | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
