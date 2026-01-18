"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

interface ProcessSectionProps {
  t: {
    title: string;
    subtitle: string;
    discovery: {
      title: string;
      description: string;
    };
    design: {
      title: string;
      description: string;
    };
    development: {
      title: string;
      description: string;
    };
    launch: {
      title: string;
      description: string;
    };
  };
}

export function ProcessSection({ t }: ProcessSectionProps) {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: t.discovery.title,
      description: t.discovery.description,
    },
    {
      icon: Palette,
      number: "02",
      title: t.design.title,
      description: t.design.description,
    },
    {
      icon: Code,
      number: "03",
      title: t.development.title,
      description: t.development.description,
    },
    {
      icon: Rocket,
      number: "04",
      title: t.launch.title,
      description: t.launch.description,
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground lg:text-xl">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="inline-flex items-center gap-3 mb-3">
                    <span className="text-5xl font-bold text-primary/20">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>

                {/* Spacer */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
