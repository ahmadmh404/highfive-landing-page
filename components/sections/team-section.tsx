import { motion } from "framer-motion";

import { TEAM_MEMBERS } from "@/lib/constants";
import { ANIMATION } from "@/lib/animation-constants";

import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { StaggerChild } from "../animated/stagger-child";
import { StaggerContainer } from "../animated/staggered-container";
import { TeamCard } from "../shared/team-card";

interface TeamSectionProps {
  t: TeamTranslations;
}

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

export default function TeamSection({ t }: TeamSectionProps) {
  return (
    <section id="team" className="relative w-full py-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      <StaggerContainer>
        {TEAM_MEMBERS.map((member, i) => (
          <StaggerChild
            key={member.nameKey}
            transition={{
              delay: ANIMATION.durations.STAGGER * i,
            }}
          >
            <TeamCard member={member} t={t} />
          </StaggerChild>
        ))}
      </StaggerContainer>
    </section>
  );
}
