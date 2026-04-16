import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/effects";
import React from "react";
import { PHASES } from "@/lib/constants";
import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { AceternityIcon, PhaseCard } from "./phase-card";

interface ProcessSectionProps {
  t: {
    title: string;
    subtitle: string;
    cards: {
      discovery: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      development: {
        title: string;
        description: string;
      };
      launch: {
        title: string;
        description: string;
      };
    };
  };
}

export default function ProcessSection({ t }: ProcessSectionProps) {
  return (
    <section id="process" className="w-full py-20">
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      <div className="my-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4 flex-wrap">
        {PHASES.map((phase) => (
          <PhaseCard
            key={phase.key}
            title={t.cards[phase.key as keyof typeof t.cards].title}
            icon={<AceternityIcon order={phase.order} />}
            des={t.cards[phase.key as keyof typeof t.cards].description}
          >
            <CanvasRevealEffect {...phase.canvasProps} />
          </PhaseCard>
        ))}
      </div>
    </section>
  );
}
