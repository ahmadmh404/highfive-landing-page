"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaMagnifyingGlass,
  FaChartBar,
  FaStarHalfStroke,
} from "react-icons/fa6";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          {t.title}
        </h2>
        <p className="mt-4 text-base text-foreground/50 md:text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6">
        {toolKeys.map((key, i) => {
          const Icon = toolIcons[i];
          const color = toolColors[i];
          const tool = (t.tools as any)[key];
          const isActive = activeKey === key;

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.05,
                zIndex: 20,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shrink-0 bg-[rgb(4,7,29)] border ${
                isActive ? `border-primary/50` : "border-white/10"
              }`}
              onClick={() => setActiveKey(isActive ? null : key)}
            >
              {/* Top colored accent line */}
              <div
                className={`h-0.5 w-full bg-gradient-to-r from-transparent via-${color} to-transparent`}
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
                <h3 className="text-lg font-bold text-white mb-2 font-display">
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
                      <div className="pt-4 pb-2 border-t border-white/10">
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
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <button
                    className="text-xs text-foreground/40"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveKey(isActive ? null : key);
                    }}
                  >
                    {isActive ? "Show less" : "Learn more"}
                  </button>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-${color}/15 border border-${color}/30 ${color}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaArrowUpRightFromSquare className="w-3 h-3" />
                    {t.tryDemo}
                  </button>
                </div>

                {/* Top Shimmer Highlight (HighFive Signature) */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-primary/30 transition-colors duration-300" />
              </div>

              {/* Soft Glow behind card (HighFive Signature) */}
              <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
