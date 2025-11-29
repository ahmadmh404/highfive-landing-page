"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { AnimatedSection } from "./animated/animated-section";
import { AnimatedCard } from "./animated/animated-card";
import { Badge } from "./ui/badge";
import { AnimatedButton } from "./animated/animated-button";

export function ProjectsSection() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title:
        language === "ar" ? "منصة للتجارة الإلكترونية" : "E-Commerce Platform",
      description:
        language === "ar"
          ? "تطبيق ويب كامل مع الذكاء الاصطناعي لتوصيات المنتجات"
          : "Full-stack web app with AI-powered product recommendations",
      image: "/modern-ecommerce-interface.png",
      tags: ["React", "Node.js", "AI"],
    },
    {
      title:
        language === "ar"
          ? "تطبيق الهاتف المحمول للصحة"
          : "Healthcare Mobile App",
      description:
        language === "ar"
          ? "تطبيق جوال لإدارة الصحة مع تقنيات التعلم الآلي"
          : "Mobile health management app with ML integration",
      image: "/healthcare-mobile-app-design.jpg",
      tags: ["Flutter", "Python", "ML"],
    },
    {
      title:
        language === "ar" ? "أطروحة الذكاء الاصطناعي" : "AI Research Thesis",
      description:
        language === "ar"
          ? "أطروحة ماجستير في معالجة اللغة الطبيعية والتعلم العميق"
          : "Masters thesis on NLP and deep learning applications",
      image: "/artificial-intelligence-research-paper.jpg",
      tags: ["Research", "NLP", "AI"],
    },
    {
      title:
        language === "ar"
          ? "معرض أعمال ل مصمم الجرافيك"
          : "Graphic Designer Portfolio",
      description:
        language === "ar"
          ? "سيرة ذاتية احترافية وتصميم معرض أعمال"
          : "Professional CV and portfolio design services",
      image: "/professional-portfolio-design.jpg",
      tags: ["Design", "CV", "Branding"],
    },
  ];

  return (
    <AnimatedSection id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            {t("projects.subtitle")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-balance">
            {t("projects.title")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.15}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border bg-card">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h4 className="text-2xl font-semibold mb-3 text-card-foreground">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <AnimatedButton
                    variant="ghost"
                    className="group/btn p-0 h-auto text-card-foreground hover:!bg-transparent hover:text-primary"
                  >
                    {t("projects.viewProject")}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </AnimatedButton>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
