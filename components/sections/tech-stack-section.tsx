import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { StaggerContainer } from "../animated/staggered-container";
import { TechStackCard } from "../shared/tech-stack-card";

const techCategories = [
  {
    label: "Frontend",
    techs: [
      { name: "React", icon: "/re.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Tailwind", icon: "/tail.svg" },
    ],
  },
  {
    label: "Backend & APIs",
    techs: [
      { name: "Node.js", icon: "/c.svg" },
      { name: "Python", icon: "/fm.svg" },
      { name: "Docker", icon: "/dock.svg" },
      { name: "Cloud", icon: "/cloud.svg" },
    ],
  },
  {
    label: "Animation & 3D",
    techs: [
      { name: "Three.js", icon: "/three.svg" },
      { name: "Framer", icon: "/fm.svg" },
      { name: "GSAP", icon: "/gsap.svg" },
      { name: "Stream", icon: "/stream.svg" },
    ],
  },
];

interface TechStackSectionProps {
  t: {
    title: string;
    subtitle: string;
  };
}

export default function TechStackSection({ t }: TechStackSectionProps) {
  return (
    <section id="tech" className="w-full py-20">
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      <StaggerContainer>
        {techCategories.map((cat, i) => (
          <TechStackCard key={i} cat={cat} index={i} />
        ))}
      </StaggerContainer>
    </section>
  );
}
