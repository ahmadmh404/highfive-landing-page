"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PhaseCardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}

export function PhaseCard({ title, icon, children, des }: PhaseCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-border group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] cursor-pointer bg-card transition-all duration-500 hover:border-primary/50"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground opacity-20" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground opacity-20" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground opacity-20" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground opacity-20" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-foreground text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold font-display group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h3>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 text-center text-muted-foreground group-hover/canvas-card:-translate-y-2 transition duration-200">
          {des}
        </p>
      </div>
    </div>
  );
}

export function AceternityIcon({ order }: { order: string }) {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 backdrop-blur-3xl font-bold text-2xl text-primary">
          {order}
        </span>
      </button>
    </div>
  );
}

interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Icon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
