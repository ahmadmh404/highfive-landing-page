"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { MagicButton } from "../shared";
import { fadeInUp } from "@/lib/animation-constants";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: Variants;
  className?: string;
}

export function AnimatedButton({
  children,
  variant,
  className,
}: AnimatedButtonProps) {
  return (
    <motion.div
      variants={variant ?? fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.3 }}
      className={cn("flex flex-col sm:flex-row gap-4 items-center", className)}
    >
      {children}
    </motion.div>
  );
}
