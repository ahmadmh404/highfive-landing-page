"use client";

import { motion } from "framer-motion";

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
      { name: "Framer Motion", icon: "/fm.svg" },
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          {t.title}
        </h2>
        <p className="mt-4 text-base text-foreground/50 md:text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl p-6"
            style={{
              background: "rgb(4,7,29)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#CBACF9" }}
            >
              {cat.label}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {cat.techs.map((tech, j) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#BEC1DD" }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
