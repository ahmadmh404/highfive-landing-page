"use client";

import { motion } from "framer-motion";
import { cardHover, staggerItem } from "@/lib/animations";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div variants={staggerItem} transition={{ delay }}>
      <motion.div
        className={className}
        variants={cardHover}
        initial={"rest"}
        whileHover={"hover"}
        whileTap={"tap"}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
