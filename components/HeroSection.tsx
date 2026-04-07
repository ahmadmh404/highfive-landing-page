"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaBolt } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";
import type { Lang } from "@/data/translations";
import Link from "next/link";
import { HeroCodeBlock } from "./code-block";

const codeLines = [
  {
    indent: 0,
    tokens: [
      { t: "import", c: "code-keyword" },
      { t: " { scorpeSearch } ", c: "code-punctuation" },
      { t: "from", c: "code-keyword" },
      { t: ' "scorpe-ai"', c: "code-string" },
    ],
  },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { t: "// Enhance search with AI-powered ranking", c: "code-comment" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { t: "const", c: "code-keyword" },
      { t: " results ", c: "code-punctuation" },
      { t: "=", c: "code-operator" },
      { t: " await ", c: "code-keyword" },
      { t: "scorpeSearch", c: "code-function" },
      { t: "({", c: "code-punctuation" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "query", c: "code-variable" },
      { t: ": ", c: "code-punctuation" },
      { t: '"best AI agency near me"', c: "code-string" },
      { t: ",", c: "code-punctuation" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "filters", c: "code-variable" },
      { t: ": { ", c: "code-punctuation" },
      { t: "category", c: "code-variable" },
      { t: ": ", c: "code-punctuation" },
      { t: '"tech"', c: "code-string" },
      { t: " },", c: "code-punctuation" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "rankBy", c: "code-variable" },
      { t: ": ", c: "code-punctuation" },
      { t: '"relevance"', c: "code-string" },
      { t: ",", c: "code-punctuation" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "limit", c: "code-variable" },
      { t: ": ", c: "code-punctuation" },
      { t: "10", c: "code-number" },
    ],
  },
  { indent: 0, tokens: [{ t: "});", c: "code-punctuation" }] },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { t: "console", c: "code-variable" },
      { t: ".", c: "code-punctuation" },
      { t: "log", c: "code-function" },
      { t: "(results.", c: "code-punctuation" },
      { t: "items", c: "code-variable" },
      { t: ");", c: "code-punctuation" },
    ],
  },
  {
    indent: 0,
    tokens: [{ t: "// → HighFive Agency  score: 0.98 ✓", c: "code-comment" }],
  },
];

const stats = [
  { value: "50+", label: "projects_delivered" },
  { value: "30+", label: "global_clients" },
  { value: "5+", label: "years_experience" },
  { value: "98%", label: "client_satisfaction" },
];

interface HeroSectionProps {
  locale: string;
  t: {
    badgeText: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    stats: {
      projects_delivered: string;
      global_clients: string;
      years_experience: string;
      client_satisfaction: string;
    };
  };
}

export default function HeroSection({ locale, t }: HeroSectionProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 120);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Atmospheric light streaks inspired by Finsepa hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-px h-full opacity-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--primary) 40%, var(--accent) 60%, transparent)",
          }}
        />
        <div
          className="absolute top-0 right-1/3 w-px h-3/4 opacity-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--primary) 50%, transparent)",
          }}
        />
        <div
          className="absolute -top-20 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,1)'><path d='M0 .5H31.5V32'/></svg>")`,
        }}
      />

      {/* Radial fade center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(4,7,29,0.8) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <FaBolt className="text-primary w-3 h-3" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            {t.badgeText}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white text-balance max-w-4xl leading-tight font-display"
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed text-muted-foreground"
        >
          {t.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <MagicButton title={t.cta} icon={<FaArrowRight />} position="right" />
          <Link
            href="#ai-tools"
            className="block px-6 py-3 rounded-lg border text-sm font-medium transition-all duration-200 hover:bg-white/5"
            style={{
              borderColor: "var(--border)",
              color: "var(--accent)",
            }}
          >
            {t.ctaSecondary}
          </Link>
        </motion.div>

        {/* Code Block */}
        <HeroCodeBlock />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mt-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -5,
                backgroundColor: "var(--card)",
                borderColor: "var(--primary)/40",
              }}
              transition={{ duration: 0.3, delay: 0.2 + i }}
              className="relative flex flex-col items-center justify-center p-6 rounded-xl border border-border/80 bg-card/80 backdrop-blur-xl transition-all duration-300 group"
            >
              {/* Top Accent Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-3xl md:text-4xl font-bold tracking-tighter font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-primary">
                {stat.value}
              </span>

              <span className="text-[10px] md:text-xs mt-2 uppercase tracking-[0.2em] font-medium text-center text-muted-foreground">
                {t.stats[stat.label as keyof typeof t.stats]}
              </span>

              {/* Subtle Background Radial Glow on Hover */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,var(--primary)_10%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
