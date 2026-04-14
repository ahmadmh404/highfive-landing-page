"use client";

import { fadeInUp } from "@/lib/animation-constants";
import { motion } from "framer-motion";

export function AnimatedTitle({ title }: { title: string }) {
  return (
    <motion.h1
      initial={fadeInUp.hidden}
      variants={fadeInUp}
      animate="visible"
      transition={{ duration: 0.7, delay: 0.1 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-foreground text-balance max-w-4xl leading-tight font-display"
    >
      {title}
    </motion.h1>
  );
}
