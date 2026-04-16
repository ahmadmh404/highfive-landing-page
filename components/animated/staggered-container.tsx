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
      initial="hidden"
      whileInView="visible"
      transition={{ delay }}
      className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 mt-10", className)}
    >
      {children}
    </motion.div>
  );
}
