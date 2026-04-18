"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedStatsSectionProps {
  children: ReactNode;
}

export function AnimatedStatsSection({ children }: AnimatedStatsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mt-12"
    >
      {children}
    </motion.div>
  );
}
