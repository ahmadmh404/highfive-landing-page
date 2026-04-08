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
const toolColors = ["#CBACF9", "#E4ECFF", "#CBACF9"];

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
              className="relative rounded-2xl overflow-hidden cursor-pointer group shrink-0"
              style={{
                background: "rgb(4,7,29)",
                border: isActive
                  ? `1px solid ${color}50`
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isActive ? `0 0 30px ${color}15` : "none",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onClick={() => setActiveKey(isActive ? null : key)}
            >
              {/* Top colored accent line */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
              />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon style={{ color }} className="w-5 h-5" />
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-mono"
                    style={{
                      background: `${color}12`,
                      color,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Title & desc */}
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {tool.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#BEC1DD" }}
                >
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
                      <div
                        className="pt-4 pb-2"
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <div className="space-y-3">
                          <div>
                            <span
                              className="text-xs uppercase tracking-widest"
                              style={{ color: "#5c6370" }}
                            >
                              Problem Solved
                            </span>
                            <p
                              className="text-sm mt-1"
                              style={{ color: "#C1C2D3" }}
                            >
                              {tool.problem}
                            </p>
                          </div>
                          <div>
                            <span
                              className="text-xs uppercase tracking-widest"
                              style={{ color: "#5c6370" }}
                            >
                              Who Needs This
                            </span>
                            <p
                              className="text-sm mt-1"
                              style={{ color: "#C1C2D3" }}
                            >
                              {tool.whoNeeds}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer */}
                <div
                  className="flex items-center justify-between mt-4 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <button
                    className="text-xs"
                    style={{ color: "#5c6370" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveKey(isActive ? null : key);
                    }}
                  >
                    {isActive ? "Show less" : "Learn more"}
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                      color,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaArrowUpRightFromSquare className="w-3 h-3" />
                    {t.tryDemo}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
