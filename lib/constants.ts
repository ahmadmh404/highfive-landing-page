import { NavItem } from "./types";

export const SITE_NAME = "HighFive";
export const SITE_TAGLINE = "Expert Custom Development & AI Solutions";

export const NAV_ITEMS: NavItem[] = [
  { label: "nav.services", href: "#services" },
  { label: "nav.projects", href: "#projects" },
  { label: "nav.team", href: "#team" },
  { label: "nav.courses", href: "#courses" },
  { label: "nav.contact", href: "#contact" },
];

export const HERO_CTA = {
  primary: "cta.startProject",
  secondary: "cta.exploreTools",
};

export const PROCESS_STEPS = [
  { order: 1, titleKey: "process.1.title", descKey: "process.1.desc", icon: "01" },
  { order: 2, titleKey: "process.2.title", descKey: "process.2.desc", icon: "02" },
  { order: 3, titleKey: "process.3.title", descKey: "process.3.desc", icon: "03" },
  { order: 4, titleKey: "process.4.title", descKey: "process.4.desc", icon: "04" },
];

export const THEME_TRANSITION_MS = 500;
export const FILTER_UPDATE_MS = 300;
export const FORM_VALIDATION_MS = 200;
export const DEMO_TIMEOUT_MS = 10000;
export const DEMO_MIN_DELAY_MS = 2000;
export const DEMO_MAX_DELAY_MS = 5000;