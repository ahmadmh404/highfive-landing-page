"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  nameKey: string;
  roleKey: string;
  bioKey: string;
  image: string; // Added image path
  rotation: number; // For the "tilted" effect
}

const members: TeamMember[] = [
  {
    nameKey: "Ahmad",
    roleKey: "leadDeveloper",
    bioKey: "ahmed",
    image: "/team/ahmad.jpg",
    rotation: -3,
  },
  {
    nameKey: "Ali",
    roleKey: "aiEngineer",
    bioKey: "ali",
    image: "/team/ali.jpg",
    rotation: 2,
  },
  {
    nameKey: "Yara",
    roleKey: "uiDesigner",
    bioKey: "yara",
    image: "/team/yara.jpg",
    rotation: -2,
  },
  {
    nameKey: "Khalil",
    roleKey: "projectManager",
    bioKey: "khalil",
    image: "/team/khalil.jpg",
    rotation: 3,
  },
  {
    nameKey: "Abdulrahman",
    roleKey: "backendDev",
    bioKey: "abdulrahman",
    image: "/team/abdul.jpg",
    rotation: -1,
  },
];

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

function TeamCard({ member, t }: { member: TeamMember; t: TeamTranslations }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Derive initials from name
  const initials = member.nameKey
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ rotate: member.rotation }}
      whileHover={{
        rotate: 0,
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
        <div
          className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center transition-opacity duration-500 ${
            imgLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-4xl font-bold text-white/40 font-display">
            {initials}
          </span>
        </div>

        <Image
          src={member.image}
          alt={member.nameKey}
          fill
          loading="lazy"
          onLoadingComplete={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`object-cover transition-all duration-700 ease-in-out ${
            isHovered ? "grayscale-0 scale-110" : "grayscale opacity-60"
          } ${imgLoaded || imgError ? "opacity-100" : "opacity-0"}`}
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

export default function TeamSection({ t }: { t: TeamTranslations }) {
  return (
    <section id="team" className="relative w-full py-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            {t.title}
          </h2>
          <p className="mt-4 text-foreground/50 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {members.map((member, i) => (
            <motion.div
              key={member.nameKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TeamCard member={member} t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
