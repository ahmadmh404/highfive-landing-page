"use client";

import { fadeInUp } from "@/lib/animation-constants";
import { motion } from "framer-motion";

export function AnimatedSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <motion.p
      initial={fadeInUp.hidden}
      variants={fadeInUp}
      animate="visible"
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-center text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed text-text-muted"
    >
      {subtitle}
    </motion.p>
  );
}
