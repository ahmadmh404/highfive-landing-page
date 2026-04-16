import { FaBrain, FaCode, FaGraduationCap } from "react-icons/fa6";

import { ANIMATION } from "@/lib/animation-constants";
import { Button } from "@/components/effects";

import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { StaggerChild } from "../animated/stagger-child";
import { StaggerContainer } from "../animated/staggered-container";

interface ServicesSectionProps {
  t: {
    title: string;
    subtitle: string;
    customDev: {
      title: string;
      description: string;
    };
    aiTools: {
      title: string;
      description: string;
    };
    courses: {
      title: string;
      description: string;
    };
  };
}

export default function ServicesSection({ t }: ServicesSectionProps) {
  const services = [
    { key: "customDev", icon: FaCode, color: "text-primary" },
    { key: "aiTools", icon: FaBrain, color: "text-accent" },
    { key: "courses", icon: FaGraduationCap, color: "text-primary" },
  ];

  return (
    <section id="services" className="w-full py-20">
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      <StaggerContainer>
        {services.map(({ key, icon: Icon, color }, i) => (
          <StaggerChild
            transition={{
              delay: ANIMATION.durations.STAGGER * i,
            }}
          >
            <Button
              borderRadius="1.5rem"
              containerClassName="w-full h-full"
              duration={Math.floor(Math.random() * 5000) + 8000}
              className="w-full text-foreground border-muted-foreground/10 bg-bg-primary"
            >
              <div className="p-8 flex flex-col gap-4 h-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/30`}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {(t as any)[key].title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {(t as any)[key].description}
                </p>
              </div>
            </Button>
          </StaggerChild>
        ))}
      </StaggerContainer>
    </section>
  );
}
