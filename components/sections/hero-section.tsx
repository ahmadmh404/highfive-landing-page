import { FaArrowRight } from "react-icons/fa6";
import { Spotlight } from "@/components/effects";
import MagicButton from "@/components/shared/magic-button";
import Link from "next/link";
import { ANIMATION, scaleIn, statCardHover } from "@/lib/animation-constants";
import { BackgroundGlow } from "../animated/background-glow";
import { STATS } from "@/lib/constants";
import { AtmosphericStrike } from "../effects/atmospheric-strike";
import { GridBackground } from "../effects/grid-background";
import { AnimatedBadge } from "../animated/animated-badge";
import { AnimatedTitle } from "../animated/animated-title";
import { AnimatedSubtitle } from "../animated/animated-subtitle";
import { AnimatedButton } from "../animated/animated-button";
import { StaggerChild } from "../animated/stagger-child";
import { HeroCodeBlock } from "../shared/code-block";
import { AnimatedStatsSection } from "../animated/animated-stats-section";

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

export default function HeroSection({ t }: HeroSectionProps) {
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
      <AtmosphericStrike />

      {/* Grid background */}
      <GridBackground />

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
        <AnimatedBadge badgeText={t.badgeText} />

        {/* Title */}
        <AnimatedTitle title={t.title} />

        {/* Subtitle */}
        <AnimatedSubtitle subtitle={t.subtitle} />

        {/* CTAs */}
        <AnimatedButton>
          <MagicButton title={t.cta} icon={<FaArrowRight />} position="right" />
          <Link
            href="#ai-tools"
            className="block px-6 py-3 rounded-lg border text-sm font-medium transition-all duration-200 hover:bg-white/5"
          >
            {t.ctaSecondary}
          </Link>
        </AnimatedButton>

        {/* Code Block */}
        <HeroCodeBlock />

        {/* Stats */}
        <AnimatedStatsSection>
          {STATS.map((stat, i) => (
            <StaggerChild
              key={stat.label}
              variant={scaleIn}
              initial="hidden"
              animate="visible"
              whileHover={statCardHover}
              className="relative flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 group"
              transition={{
                duration: ANIMATION.durations.HOVER,
                delay: ANIMATION.durations.FAST * i,
              }}
            >
              {/* Top Accent Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#CBACF9]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-3xl md:text-4xl font-bold tracking-tighter font-display bg-clip-text text-transparent bg-linear-to-b from-white to-[#CBACF9]">
                {stat.value}
              </span>

              <span
                className="text-[10px] md:text-xs mt-2 uppercase tracking-[0.2em] font-medium text-center"
                style={{ color: "#C1C2D3" }}
              >
                {t.stats[stat.label as keyof typeof t.stats]}
              </span>

              {/* Subtle Background Radial Glow on Hover */}
              <BackgroundGlow />
            </StaggerChild>
          ))}
        </AnimatedStatsSection>
      </div>
    </section>
  );
}
