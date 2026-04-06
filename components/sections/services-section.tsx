"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Sparkles, GraduationCap } from "lucide-react";

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

export function ServicesSection({ t }: ServicesSectionProps) {
  const services = [
    {
      icon: Code,
      title: t.customDev.title,
      description: t.customDev.description,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Sparkles,
      title: t.aiTools.title,
      description: t.aiTools.description,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: GraduationCap,
      title: t.courses.title,
      description: t.courses.description,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.bgColor}`}
                  >
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
