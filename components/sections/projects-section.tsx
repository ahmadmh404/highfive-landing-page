"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

type Category = "all" | "web&apps" | "aiFeatures" | "tools";

interface ProjectsSectionProps {
  t: {
    title: string;
    subtitle: string;
    viewCase: string;
    filter?: {
      all: string;
      webApps: string;
      aiFeatures: string;
      tools: string;
    };
  };
}

export function ProjectsSection({ t }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: t.filter?.all || "All" },
    { key: "web&apps", label: t.filter?.webApps || "Web & Apps" },
    { key: "aiFeatures", label: t.filter?.aiFeatures || "AI Features" },
    { key: "tools", label: t.filter?.tools || "Tools" },
  ];

  return (
    <section id="projects" className="bg-muted/30 py-24 lg:py-32">
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
          <p className="text-pretty text-base text-muted-foreground lg:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className="transition-all"
              size="sm"
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              layout
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
                  <h3 className="mb-2 text-lg font-semibold">
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
                  {project.link && (
                    <Button
                      variant="link"
                      className="group/btn -ml-4 gap-2 p-4"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.viewCase}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
