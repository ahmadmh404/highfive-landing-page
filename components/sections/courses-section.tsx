"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  ArrowRight,
  Code2,
  Server,
  Brain,
  Megaphone,
} from "lucide-react";
import { courses } from "@/lib/data/courses";
import type { Lang } from "@/data/translations";

const iconMap = {
  FaCode: Code2,
  FaServer: Server,
  FaBrain: Brain,
  FaBullhorn: Megaphone,
} as const;

const levelColors = {
  beginner: "bg-green-500/15 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  advanced: "bg-red-500/15 text-red-400 border-red-500/30",
} as const;

interface CoursesSectionProps {
  t: {
    title: string;
    subtitle: string;
    viewCourse: string;
    levels: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
  };
}

export default function CoursesSection({ t }: CoursesSectionProps) {
  return (
    <section id="courses" className="w-full py-20">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => {
          const Icon = iconMap[course.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-white/10 bg-[rgb(4,7,29)] transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="flex flex-col p-6 gap-4">
                  {/* Level Badge & Duration */}
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={`text-xs font-medium ${levelColors[course.level]}`}
                    >
                      {t.levels[course.level]}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                      <Clock className="h-3.5 w-3.5" />
                      {course.duration}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground font-display">
                      {course.title}
                    </h3>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <button className="group/btn flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:gap-3">
                    {t.viewCourse}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
