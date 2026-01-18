"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectsSectionProps {
  t: {
    title: string;
    subtitle: string;
    viewCase: string;
  };
}

export function ProjectsSection({ t }: ProjectsSectionProps) {
  // Mock projects - in production, fetch from Strapi CMS
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with AI recommendations",
      image: "/modern-ecommerce-dashboard.png",
      category: "Web App",
      technologies: ["Next.js", "AI", "Stripe"],
    },
    {
      title: "Fitness Mobile App",
      description: "Cross-platform fitness tracking with real-time analytics",
      image: "/fitness-app-interface.png",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase"],
    },
    {
      title: "Brand Campaign",
      description: "High-converting video ads for luxury fashion brand",
      image: "/luxury-fashion-video-production.jpg",
      category: "Social Media",
      technologies: ["Video Production", "Animation"],
    },
  ];

  return (
    <section id="projects" className="bg-muted/30 py-24 lg:py-32">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="link" className="group/btn -ml-4 gap-2 p-4">
                    {t.viewCase}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
