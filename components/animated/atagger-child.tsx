"use client";

import { ReactNode } from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import { ANIMATION, scaleIn } from "@/lib/animation-constants";
import { cn } from "@/lib/utils";

interface StaggerChildProps {
  children: ReactNode;
  whileHover?: VariantLabels | TargetAndTransition;
  transition?: { delay: number };
  className?: string;
}

export function StaggerChild({
  children,
  whileHover,
  transition,
  className,
}: StaggerChildProps) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={whileHover}
      className={cn(
        "relative flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 group",
        className,
      )}
      transition={transition ?? { duration: ANIMATION.durations.HOVER }}
    >
      {children}
    </motion.div>
  );
}
