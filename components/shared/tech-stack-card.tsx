"use client";

import { techCardHover } from "@/lib/animation-constants";
import { StaggerChild } from "../animated/stagger-child";
import { Button } from "../effects";
import { motion } from "framer-motion";

interface TechStackCardProps {
  cat: {
    label: string;
    techs: {
      name: string;
      icon: string;
    }[];
  };
  index: number;
}

export function TechStackCard({ cat, index }: TechStackCardProps) {
  return (
    <StaggerChild key={cat.label} transition={{ delay: index * 0.1 }}>
      <Button
        borderRadius="1.5rem"
        containerClassName="w-full h-full"
        duration={Math.floor(Math.random() * 5000) + 10000}
        className="w-full text-foreground border-muted-foreground/10 bg-bg-primary"
      >
        <div className="p-8 flex flex-col gap-4 w-full h-full">
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-primary">
            {cat.label}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {cat.techs.map((tech, j) => (
              <motion.div
                key={tech.name}
                whileHover={techCardHover.whileHover}
                transition={techCardHover.transition}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/10"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Button>
    </StaggerChild>
  );
}
