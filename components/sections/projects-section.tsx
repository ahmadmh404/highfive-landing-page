"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import { FILTERS, PROJECTS } from "@/lib/constants";

import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { StaggerContainer } from "../animated/staggered-container";
import { ProjectCard } from "./project-card";

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
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="w-full py-20">
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {FILTERS.map((f) => (
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
      <StaggerContainer>
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <ProjectCard key={item.id} item={item} t={t} index={index} />
          ))}
        </AnimatePresence>
      </StaggerContainer>
    </section>
  );
}
