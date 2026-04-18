"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedSectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function AnimatedSectionHeader({
  subtitle,
  title,
  className,
}: AnimatedSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
        {title}
      </h2>
      <p className="mt-4 text-base text-foreground/50 md:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
