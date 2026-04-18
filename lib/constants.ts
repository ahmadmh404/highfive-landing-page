import {
  FaBrain,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { MockTeamMember, NavItem } from "./types";
import { Cpu, Globe, Wrench } from "lucide-react";
import { IconType } from "react-icons";

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
import { Globe } from '../components/effects/Globe';
import { Cpu, Wrench } from 'lucide-react';

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

export const FILTERS = ["all", "webApps", "aiFeatures", "tools"] as const;
export const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    des: "Full-stack e-commerce solution with AI-driven product recommendations, smart search, and real-time analytics dashboard.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "#",
    category: "webApps",
  },
  {
    id: 2,
    title: "Scorpe Search Integration",
    des: "Seamlessly integrated our AI search package into a SaaS platform, boosting user engagement by 40%.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
    category: "aiFeatures",
  },
  {
    id: 3,
    title: "Real Estate Mobile App",
    des: "Cross-platform mobile app with 3D property tours, AI valuation tool, and integrated payment processing.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
    category: "webApps",
  },
  {
    id: 4,
    title: "Analytics Dashboard Tool",
    des: "Enterprise-grade analytics tool with real-time data processing, custom report builder, and AI forecasting.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
    category: "tools",
  },
  {
    id: 5,
    title: "NLP Text Classification API",
    des: "High-performance text classification API trained on Arabic and English datasets for content moderation.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
    link: "#",
    category: "aiFeatures",
  },
  {
    id: 6,
    title: "DevOps Automation Suite",
    des: "CI/CD pipeline automation tool with one-click deployment, monitoring, and multi-cloud support.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/git.svg", "/dock.svg"],
    link: "#",
    category: "tools",
  },
];

export const PROJECTS_FALLBACKS: Record<
  string,
  { gradient: string; icon: IconType }
> = {
  webApps: {
    gradient: "from-purple-500/20 via-blue-500/20 to-teal-500/20",
    icon: Globe,
  },
  aiFeatures: {
    gradient: "from-blue-500/20 via-cyan-500/20 to-indigo-500/20",
    icon: Cpu,
  },
  tools: {
    gradient: "from-teal-500/20 via-green-500/20 to-emerald-500/20",
    icon: Wrench,
  },
};

// ============================= CORSES =============================

export const levelColors = {
  beginner: "bg-green-500/15 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  advanced: "bg-red-500/15 text-red-400 border-red-500/30",
} as const;

// Fallback backgrounds per course type
export const fallbackBgs = {
  frontend: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  backend: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  "ai-ml": "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
  marketing: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
} as const;

// =========================== FOOTER ===============================
export const footerLinks = {
  Services: [
    "Custom Development",
    "AI Tools",
    "Programming Courses",
    "Consulting",
  ],
  Company: ["About Us", "Our Team", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

export const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "hello@highfive.dev" },
  { icon: FaPhone, label: "Phone", value: "+966 55 000 0000" },
  {
    icon: FaMapPin,
    label: "Location",
    value: "Riyadh, Saudi Arabia",
  },
];
