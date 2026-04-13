"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import type { Lang } from "@/data/translations";

const allProjects = [
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

const filters = ["all", "webApps", "aiFeatures", "tools"] as const;

interface ProjectsSectionProps {
  t: {
    title: string;
    subtitle: string;
    viewCase: string;
    filter?: {
      all: string;
      webApps: string;
      aiFeatures: string;
      tools: string;
    };
  };
}

function ProjectCard({
  item,
  t,
}: {
  item: (typeof allProjects)[0];
  t: ProjectsSectionProps["t"];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={item.link}
      className="group relative cursor-pointer sm:w-96 w-[80vw]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{
        scale: 1.05,
        zIndex: 20,
        transition: { type: "spring", stiffness: 260, damping: 20 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* 1. Main Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgb(4,7,29)]">
        {/* Image Area */}
        <div className="relative overflow-hidden bg-[#13162D] h-[20vh] lg:h-[30vh]">
          <div className="absolute inset-0 bg-background/50">
            <img
              src="/bg.png"
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src={item.img}
            alt={item.title}
            className={`relative z-10 absolute bottom-0 w-full transition-all duration-700 ease-in-out ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(4,7,29)] via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white transition-all duration-200 group-hover:translate-x-2">
            {item.title}
          </h1>

          <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2 transition-all duration-200 group-hover:translate-x-2 text-muted-foreground">
            {item.des}
          </p>

          {/* Tech Icons - Overflow row */}
          <div className="flex items-center mt-7 mb-4 overflow-visible">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center shrink-0"
                style={{ transform: `translateX(-${5 * index + 4}px)` }}
              >
                <img src={icon} alt="tech" className="p-2" />
              </div>
            ))}
          </div>

          {/* CTA Button - Contained, no overflow */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-medium text-primary">
              {t.viewCase}
            </span>
            <FaLocationArrow className="text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Top Shimmer Highlight (HighFive Signature) */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-primary/30 transition-colors duration-300" />
      </div>

      {/* Soft Glow behind card (HighFive Signature) */}
      <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.a>
  );
}

export default function ProjectsSection({ t }: ProjectsSectionProps) {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <section id="projects" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          {t.title}
        </h2>
        <p className="mt-4 text-base text-foreground/50 md:text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
              active === f
                ? "bg-primary/15 border-primary/50 text-primary"
                : "bg-card/60 border-white/10 text-muted-foreground"
            } border`}
          >
            {(t.filter as any)[f]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <ProjectCard key={item.id} item={item} t={t} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
