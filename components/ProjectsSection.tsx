"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
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
            className="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden"
            style={{
              background:
                active === f ? "rgba(203,172,249,0.15)" : "rgba(17,25,40,0.6)",
              border:
                active === f
                  ? "1px solid rgba(203,172,249,0.5)"
                  : "1px solid rgba(255,255,255,0.1)",
              color: active === f ? "#CBACF9" : "#BEC1DD",
            }}
          >
            {(t.filter as any)[f]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={t.viewCase} href={item.link}>
                <div
                  className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-background/50">
                    <img src="/bg.png" alt="background" />
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      >
                        <img src={icon} alt="tech" className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p
                      className="flex lg:text-xl md:text-xs text-sm"
                      style={{ color: "#CBACF9" }}
                    >
                      {t.viewCase}
                    </p>
                    <FaLocationArrow
                      className="ms-3"
                      style={{ color: "#CBACF9" }}
                    />
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
