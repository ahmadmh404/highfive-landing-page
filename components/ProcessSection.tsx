"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import type { Lang } from "@/data/translations";

interface ProcessSectionProps {
  t: {
    title: string;
    subtitle: string;
  };
}

const phases = [
  {
    key: "discovery",
    order: "Phase 1",
    canvasProps: {
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
  },
  {
    key: "design",
    order: "Phase 2",
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ] as number[][],
      dotSize: 2,
    },
  },
  {
    key: "development",
    order: "Phase 3",
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]] as number[][],
    },
  },
  {
    key: "launch",
    order: "Phase 4",
    canvasProps: {
      animationSpeed: 4,
      containerClassName: "rounded-3xl overflow-hidden",
      colors: [
        [203, 172, 249],
        [100, 120, 220],
      ] as number[][],
    },
  },
];

function Card({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.1] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl cursor-pointer"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-white opacity-20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-white opacity-20" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-white opacity-20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-white opacity-20" />

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
        <h2 className="text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 text-center group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
}

const AceternityIcon = ({ order }: { order: string }) => (
  <div>
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 backdrop-blur-3xl font-bold text-2xl"
        style={{ color: "#CBACF9" }}
      >
        {order}
      </span>
    </button>
  </div>
);

export const Icon = ({ className, ...rest }: any) => (
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

export default function ProcessSection({ t }: ProcessSectionProps) {
  return (
    <section className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading">
          Our <span className="text-purple">Process</span>
        </h2>
        <p
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "#C1C2D3" }}
        >
          {t.subtitle}
        </p>
      </motion.div>

      <div className="my-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4 flex-wrap">
        {phases.map((phase) => (
          <Card
            key={phase.key}
            title={(t as any)[phase.key].title}
            icon={<AceternityIcon order={phase.order} />}
            des={(t as any)[phase.key].description}
          >
            <CanvasRevealEffect {...phase.canvasProps} />
          </Card>
        ))}
      </div>
    </section>
  );
}
