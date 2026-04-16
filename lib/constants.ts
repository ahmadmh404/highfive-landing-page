import { FaBrain, FaCode, FaGraduationCap } from "react-icons/fa6";
import { MockTeamMember, NavItem } from "./types";

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

export const STATS = [
  { value: "500+", label: "projects_delivered" },
  { value: "50+", label: "global_clients" },
  { value: "15+", label: "years_experience" },
  { value: "98%", label: "client_satisfaction" },
];

export const PROCESS_STEPS = [
  {
    order: 1,
    titleKey: "process.1.title",
    descKey: "process.1.desc",
    icon: "01",
  },
  {
    order: 2,
    titleKey: "process.2.title",
    descKey: "process.2.desc",
    icon: "02",
  },
  {
    order: 3,
    titleKey: "process.3.title",
    descKey: "process.3.desc",
    icon: "03",
  },
  {
    order: 4,
    titleKey: "process.4.title",
    descKey: "process.4.desc",
    icon: "04",
  },
];

export const THEME_TRANSITION_MS = 500;
export const FILTER_UPDATE_MS = 300;
export const FORM_VALIDATION_MS = 200;
export const DEMO_TIMEOUT_MS = 10000;
export const DEMO_MIN_DELAY_MS = 2000;
export const DEMO_MAX_DELAY_MS = 5000;

// Hero Section.

export const HERO_CODE_BLOCK = [
  {
    language: "tsx",
    filename: "searchRepo.py",
    code: `
import { scorpeSearch } from "scorpe-ai";

// Enhance search with AI-powered ranking
 const results = await scorpeSearch({
  query: "best AI agency near me",
  filters: { category: "tech" },
  rankBy: "relevance",
  limit: 10
});

console.log(results.items);
// → HighFive Agency score: 0.98 ✓`,
  },
];

export const SERVICES = [
  { key: "customDev", icon: FaCode, color: "text-primary" },
  { key: "aiTools", icon: FaBrain, color: "text-accent" },
  { key: "courses", icon: FaGraduationCap, color: "text-primary" },
];

export const PHASES = [
  {
    key: "discovery",
    order: "Phase 1",
    canvasProps: {
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
  },
  {
    key: "design",
    order: "Phase 2",
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ] as number[][],
      dotSize: 2,
    },
  },
  {
    key: "development",
    order: "Phase 3",
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]] as number[][],
    },
  },
  {
    key: "launch",
    order: "Phase 4",
    canvasProps: {
      animationSpeed: 4,
      containerClassName: "rounded-3xl overflow-hidden",
      colors: [
        [203, 172, 249],
        [100, 120, 220],
      ] as number[][],
    },
  },
];

export const TEAM_MEMBERS: MockTeamMember[] = [
  {
    nameKey: "Ahmad",
    roleKey: "leadDeveloper",
    bioKey: "ahmed",
    image: "/team/ahmad.jpg",
  },
  {
    nameKey: "Ali",
    roleKey: "aiEngineer",
    bioKey: "ali",
    image: "/team/ali.jpg",
  },
  {
    nameKey: "Yara",
    roleKey: "uiDesigner",
    bioKey: "yara",
    image: "/team/yara.jpg",
  },
  {
    nameKey: "Khalil",
    roleKey: "projectManager",
    bioKey: "khalil",
    image: "/team/khalil.jpg",
  },
  {
    nameKey: "Abdulrahman",
    roleKey: "backendDev",
    bioKey: "abdulrahman",
    image: "/team/abdul.jpg",
  },
];
