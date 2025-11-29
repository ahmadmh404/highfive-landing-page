"use client";

import { Code, FileText, GraduationCap, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { AnimatedSection } from "./animated/animated-section";
import { AnimatedCard } from "./animated/animated-card";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
      color: "text-primary",
    },
    {
      icon: FileText,
      title: t("services.research.title"),
      description: t("services.research.description"),
      color: "text-secondary",
    },
    {
      icon: GraduationCap,
      title: t("services.projects.title"),
      description: t("services.projects.description"),
      color: "text-accent",
    },
    {
      icon: FileCheck,
      title: t("services.documents.title"),
      description: t("services.documents.description"),
      color: "text-primary",
    },
  ];

  return (
    <AnimatedSection id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            {t("services.subtitle")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-balance">
            {t("services.title")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.15}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-card-foreground">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
