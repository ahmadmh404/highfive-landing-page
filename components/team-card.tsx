"use client";

import { MockTeamMember } from "@/lib/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CustomImage } from "./shared/custom-image";

interface TeamTranslations {
  title: string;
  subtitle: string;
  roles: {
    leadDeveloper: string;
    aiEngineer: string;
    uiDesigner: string;
    projectManager: string;
    backendDev: string;
  };
  bios: {
    ahmed: string;
    ali: string;
    yara: string;
    khalil: string;
    abdulrahman: string;
  };
}

interface TeamCardProps {
  member: MockTeamMember;
  t: TeamTranslations;
}

export function TeamCard({
  member,
  t,
}: {
  member: MockTeamMember;
  t: TeamTranslations;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 1 }}
      whileHover={{
        scale: 1.05,
        zIndex: 20,
        transition: { type: "spring", stiffness: 260, damping: 20 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* 1. The Main Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-background">
        {/* Gradient fallback with initials */}
        <CustomImage
          url={member.image}
          alt={member.nameKey}
          className={
            isHovered ? "grayscale-0 scale-110" : "grayscale opacity-60"
          }
        />

        {/* 2. Glassmorphism Overlay (The "Label") */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 shadow-2xl">
            <h3 className="font-bold text-foreground text-lg font-display tracking-tight">
              {member.nameKey}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              {t.roles[member.roleKey as keyof typeof t.roles]}
            </p>

            {/* Bio appears on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="text-xs text-muted-foreground mt-3 leading-relaxed overflow-hidden"
                >
                  {t.bios[member.bioKey as keyof typeof t.bios]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 3. Top Shimmer Highlight (HighFive Signature) */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-primary/30 transition-colors" />
      </div>

      {/* 4. Soft Glow behind card */}
      <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}
