"use client";

import { fadeInDown } from "@/lib/animation-constants";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa6";

export function AnimatedBadge({ badgeText }: { badgeText: string }) {
  return (
    <motion.div
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <FaBolt style={{ color: "#CBACF9" }} className="w-3 h-3" />
      <span className="text-xs tracking-widest uppercase text-muted-foreground">
        {badgeText}
      </span>
    </motion.div>
  );
}
