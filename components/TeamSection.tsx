"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import type { Lang } from "@/data/translations";

interface TeamMember {
  nameKey: string;
  roleKey: string;
  bioKey: string;
  initials: string;
  color: string;
  canvasColors: number[][];
}

const members: TeamMember[] = [
  {
    nameKey: "Ahmad",
    roleKey: "leadDeveloper",
    bioKey: "ahmed",
    initials: "AH",
    color: "#CBACF9",
    canvasColors: [[203, 172, 249]],
  },
  {
    nameKey: "Ali",
    roleKey: "aiEngineer",
    bioKey: "ali",
    initials: "AL",
    color: "#E4ECFF",
    canvasColors: [[100, 150, 255]],
  },
  {
    nameKey: "Yara",
    roleKey: "uiDesigner",
    bioKey: "yara",
    initials: "YA",
    color: "#CBACF9",
    canvasColors: [
      [203, 172, 249],
      [100, 80, 200],
    ],
  },
  {
    nameKey: "Khalil",
    roleKey: "projectManager",
    bioKey: "khalil",
    initials: "KH",
    color: "#E4ECFF",
    canvasColors: [[80, 120, 220]],
  },
  {
    nameKey: "Abdulrahman",
    roleKey: "backendDev",
    bioKey: "abdulrahman",
    initials: "AB",
    color: "#CBACF9",
    canvasColors: [
      [160, 100, 255],
      [203, 172, 249],
    ],
  },
];

interface TeamSectionProps {
  t: {
    title: string;
    subtitle: string;
  };
}

function TeamCard({ member, t }: { member: TeamMember; t: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-72 w-full cursor-pointer group rounded-2xl overflow-hidden"
      style={{
        background: "rgb(4,7,29)",
        border: `1px solid rgba(255,255,255,0.1)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Canvas Reveal Effect on hover */}
      <div className="absolute inset-0">
        {hovered && (
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent absolute inset-0"
            colors={member.canvasColors}
            dotSize={2}
            showGradient={false}
          />
        )}
        {/* Dark overlay — fades out on hover to reveal canvas */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "rgb(4,7,29)",
            opacity: hovered ? 0 : 1,
          }}
        />
      </div>

      {/* Content — always on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 p-6">
        {/* Avatar */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold font-display transition-all duration-300"
          style={{
            background: hovered
              ? "rgba(255,255,255,0.15)"
              : `${member.color}20`,
            border: `2px solid ${hovered ? "rgba(255,255,255,0.4)" : `${member.color}50`}`,
            color: hovered ? "#fff" : member.color,
          }}
        >
          {member.initials}
        </div>

        {/* Name & Role */}
        <div className="text-center">
          <h3
            className="font-bold text-lg transition-colors duration-300"
            style={{ color: hovered ? "#fff" : "#E4ECFF" }}
          >
            {member.nameKey}
          </h3>
          <p
            className="text-sm mt-1 transition-colors duration-300"
            style={{ color: hovered ? "rgba(255,255,255,0.8)" : "#C1C2D3" }}
          >
            {(t.roles as any)[member.roleKey]}
          </p>
        </div>

        {/* Bio — only visible on hover */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-center leading-relaxed absolute bottom-6 left-4 right-4"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {(t.bios as any)[member.bioKey]}
        </motion.p>
      </div>
    </div>
  );
}

export default function TeamSection({ t }: TeamSectionProps) {
  return (
    <section id="team" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading">
          Meet Our <span className="text-purple">Team</span>
        </h2>
        <p
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "#C1C2D3" }}
        >
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {members.map((member, i) => (
          <motion.div
            key={member.nameKey}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <TeamCard member={member} t={t} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
