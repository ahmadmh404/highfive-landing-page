"use client";

import { useState } from "react";
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
  BookOpen,
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

// Fallback backgrounds per course type
const fallbackBgs = {
  frontend: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  backend: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  "ai-ml": "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
  marketing: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
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

function CourseThumbnail({
  courseId,
  image,
}: {
  courseId: string;
  image?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const Icon =
    iconMap[
      (courses.find((c) => c.id === courseId)?.icon ||
        "FaCode") as keyof typeof iconMap
    ];
  const fallbackBg =
    fallbackBgs[courseId as keyof typeof fallbackBgs] || fallbackBgs.frontend;

  if (!image || error) {
    return (
      <div
        className={`relative w-full aspect-video bg-gradient-to-br ${fallbackBg} flex items-center justify-center`}
      >
        <BookOpen className="h-12 w-12 text-white/40" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-background/50 overflow-hidden">
      {/* Fallback gradient while loading */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${fallbackBg} transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <BookOpen className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white/40" />
      </div>

      {/* Actual image */}
      <img
        src={image}
        alt={courseId}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
    </div>
  );
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => {
          const Icon = iconMap[course.icon as keyof typeof iconMap];

          return (
            <motion.a
              key={course.id}
              href={`#${course.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block relative"
              whileHover={{
                scale: 1.05,
                zIndex: 20,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
            >
              <Card className="h-full overflow-hidden border-white/10 bg-[rgb(4,7,29)]">
                {/* Thumbnail */}
                <CourseThumbnail courseId={course.id} image={course.image} />

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

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground font-display group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* CTA with hover effect */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
                    {t.viewCourse}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>

                {/* Top Shimmer Highlight (HighFive Signature) */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-primary/30 transition-colors duration-300" />
              </Card>

              {/* Soft Glow behind card (HighFive Signature) */}
              <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
