"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";
import { FaCode, FaBrain, FaGraduationCap } from "react-icons/fa6";

const icons = [FaCode, FaBrain, FaGraduationCap];

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
    { key: "customDev", icon: FaCode, color: "hsl(var(--primary))" },
    { key: "aiTools", icon: FaBrain, color: "hsl(var(--accent))" },
    { key: "courses", icon: FaGraduationCap, color: "hsl(var(--primary))" },
  ];

  return (
    <section id="services" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          {t.title}
        </h2>
        <p className="mt-4 text-base text-foreground/50 md:text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {services.map(({ key, icon: Icon, color }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Button
              borderRadius="1.5rem"
              containerClassName="w-full h-full"
              duration={Math.floor(Math.random() * 5000) + 8000}
              className="w-full text-foreground border border-white/10 bg-background"
            >
              <div className="p-8 flex flex-col gap-4 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon style={{ color }} className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  {(t as any)[key].title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {(t as any)[key].description}
                </p>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
