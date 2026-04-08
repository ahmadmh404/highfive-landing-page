"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data/courses";

interface CoursesSectionProps {
  t: {
    title: string;
    subtitle: string;
    viewCourse: string;
    levels?: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
  };
}

export function CoursesSection({ t }: CoursesSectionProps) {
  const getLevelLabel = (level: string) => {
    const levels = t.levels;
    if (!levels) {
      return level.charAt(0).toUpperCase() + level.slice(1);
    }
    switch (level) {
      case "beginner":
        return levels.beginner || "Beginner";
      case "intermediate":
        return levels.intermediate || "Intermediate";
      case "advanced":
        return levels.advanced || "Advanced";
      default:
        return level;
    }
  };

  return (
    <section id="courses" className="py-24 lg:py-32">
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-xl">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs font-normal">
                      {getLevelLabel(course.level)}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{course.title}</h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  <Button
                    variant="link"
                    className="group/btn -ml-4 gap-2 p-4"
                    asChild
                  >
                    <a href="#">
                      {t.viewCourse}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
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
