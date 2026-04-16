"use client";

import { ReactNode } from "react";
import {
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
  Variants,
  ViewportOptions,
} from "framer-motion";

import { cn } from "@/lib/utils";
import { ANIMATION, sectionItemsVariant } from "@/lib/animation-constants";

interface StaggerChildProps {
  children: ReactNode;
  variant?: Variants;
  initial?: string;
  animate?: string;
  whileHover?: TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  viewport?: ViewportOptions;
  transition?: Transition;
  className?: string;
}

export function StaggerChild({
  children,
  variant,
  initial,
  animate,
  whileHover,
  whileInView,
  viewport,
  transition,
  className,
}: StaggerChildProps) {
  return (
    <motion.div
      variants={variant ?? sectionItemsVariant}
      initial={initial ?? "initial"}
      animate={animate}
      whileInView={whileInView ?? "animate"}
      viewport={viewport ?? { once: true }}
      whileHover={whileHover}
      transition={transition ?? { duration: ANIMATION.durations.MEDIUM }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
