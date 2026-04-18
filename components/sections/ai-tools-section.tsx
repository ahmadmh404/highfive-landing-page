"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaChartBar,
  FaMagnifyingGlass,
  FaStarHalfStroke,
} from "react-icons/fa6";

import { ANIMATION } from "@/lib/animation-constants";

import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { MagicButton } from "../shared";
import { StaggerContainer } from "../animated/staggered-container";
import { StaggerChild } from "../animated/stagger-child";

const toolIcons = [FaMagnifyingGlass, FaChartBar, FaStarHalfStroke];
const toolKeys = ["scorpeSearch", "scorpeRank", "scorpeRecommend"] as const;
const toolColors = ["text-primary", "text-accent", "text-primary"];

interface AIToolsSectionProps {
  t: {
    title: string;
    subtitle: string;
    tryDemo: string;
    tools: {
      scorpeSearch: {
        title: string;
        desc: string;
      };
      scorpeRank: {
        title: string;
        desc: string;
      };
      scorpeRecommend: {
        title: string;
        desc: string;
      };
    };

    fields: {
      query: string;
      queryPlaceholder: string;
      filters: string;
      filtersPlaceholder: string;
      data: string;
      dataPlaceholder: string;
      metric: string;
      userId: string;
      userIdPlaceholder: string;
      context: string;
      contextPlaceholder: string;
      count: string;
    };
  };
}

export default function AIToolsSection({ t }: AIToolsSectionProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <section id="ai-tools" className="w-full py-20">
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      <StaggerContainer>
        {toolKeys.map((key, i) => {
          const Icon = toolIcons[i];
          const color = toolColors[i];
          const tool = (t.tools as any)[key];
          const isActive = activeKey === key;

          return (
            <StaggerChild
              key={key}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shrink-0 bg-bg-primary border ${
                isActive ? `border-primary/50` : "border-muted-foreground/10"
              }`}
            >
              <div onClick={() => setActiveKey(isActive ? null : key)}>
                {/* Top colored accent line */}
                <div
                  className={`h-0.5 w-full bg-linear-to-r from-transparent via-${color} to-transparent`}
                />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center bg-${color}/15 border border-${color}/30`}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-mono bg-${color}/12 ${color} border border-${color}/25`}
                    >
                      {tool.category}
                    </span>
                  </div>

                  {/* Title & desc */}
                  <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                    {tool.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 text-muted-foreground">
                    {tool.desc}
                  </p>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 border-t border-muted-foreground/10">
                          <div className="space-y-3">
                            <div>
                              <span className="text-xs uppercase tracking-widest text-foreground/40">
                                Problem Solved
                              </span>
                              <p className="text-sm mt-1 text-muted-foreground">
                                {tool.problem}
                              </p>
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-widest text-foreground/40">
                                Who Needs This
                              </span>
                              <p className="text-sm mt-1 text-muted-foreground">
                                {tool.whoNeeds}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <div className="flex flex-col items-center justify-between mt-4 pt-4 border-t border-muted-foreground/10">
                    <button
                      className="text-xs text-foreground/40"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveKey(isActive ? null : key);
                      }}
                    >
                      {isActive ? "Show less" : "Learn more"}
                    </button>
                  </div>

                  {/* Top Shimmer Highlight (HighFive Signature) */}
                  <div className="absolute inset-0 border border-muted-foreground/10 rounded-2xl pointer-events-none group-hover:border-primary/30 transition-colors duration-300" />
                </div>

                {/* Soft Glow behind card (HighFive Signature) */}
                <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl" />
              </div>
            </StaggerChild>
          );
        })}
      </StaggerContainer>

      <div className="w-full flex justify-center mt-10">
        <MagicButton
          title={t.tryDemo}
          icon={<FaArrowUpRightFromSquare className="w-3 h-3" />}
          position="button"
        />
      </div>
    </section>
  );
}
