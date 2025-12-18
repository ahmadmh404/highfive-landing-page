"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Brain } from "lucide-react";

interface AICapabilitiesSectionProps {
  t: {
    title: string;
    subtitle: string;
    automation: {
      title: string;
      description: string;
    };
    integration: {
      title: string;
      description: string;
    };
    custom: {
      title: string;
      description: string;
    };
  };
}

export function AICapabilitiesSection({ t }: AICapabilitiesSectionProps) {
  const capabilities = [
    {
      icon: Zap,
      title: t.automation.title,
      description: t.automation.description,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Cpu,
      title: t.integration.title,
      description: t.integration.description,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Brain,
      title: t.custom.title,
      description: t.custom.description,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section className="bg-linear-to-b from-background to-muted/30 py-24 lg:py-32">
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

        {/* Capabilities */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex rounded-xl ${capability.bgColor} p-4`}
                  >
                    <capability.icon
                      className={`h-8 w-8 ${capability.color}`}
                    />
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
