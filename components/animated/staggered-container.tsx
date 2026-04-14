"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation-constants";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: ReactNode[];
  className?: string;
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
  delay,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay }}
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mt-12",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
