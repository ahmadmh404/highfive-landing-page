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

interface StaggerChildProps {
  children: ReactNode;
  variant: Variants;
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
      variants={variant}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      whileHover={whileHover}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
