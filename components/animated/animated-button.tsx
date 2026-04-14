"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { MagicButton } from "../shared";
import { fadeInUp } from "@/lib/animation-constants";

interface AnimatedButtonProps {
  children: ReactNode;
}

export function AnimatedButton({ children }: AnimatedButtonProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 items-center"
    >
      {children}
    </motion.div>
  );
}
