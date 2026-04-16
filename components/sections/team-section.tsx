import { TEAM_MEMBERS } from "@/lib/constants";
import { motion } from "framer-motion";
import { TeamCard } from "../team-card";
import { AnimatedSectionHeader } from "../animated/animated-section-header";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {TEAM_MEMBERS.map((member, i) => (
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
    </section>
  );
}
