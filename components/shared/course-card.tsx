"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Clock,
  Code2,
  Megaphone,
  Server,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Course } from "@/lib/data/courses";
import { fallbackBgs, levelColors } from "@/lib/constants";
import { glowHover } from "@/lib/animation-constants";
import { CustomImage } from "./custom-image";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  index: number;
  t: {
    viewCourse: string;
    levels: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
  };
}

const iconMap = {
  FaCode: Code2,
  FaServer: Server,
  FaBrain: Brain,
  FaBullhorn: Megaphone,
} as const;

export function CourseCard({ course, index, t }: CourseCardProps) {
  return (
    <motion.a
      key={course.id}
      href={`#${course.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group block relative"
      whileHover={glowHover.whileHover}
    >
      <Card className="min-h-100 max-h-120 overflow-hidden border-muted-foreground/10 bg-bg-primary">
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
        <div className="absolute inset-0 border border-muted-foreground/10 rounded-2xl pointer-events-none group-hover:border-primary/30 transition-colors duration-300" />
      </Card>

      {/* Soft Glow behind card (HighFive Signature) */}
      <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl" />
    </motion.a>
  );
}

function CourseThumbnail({
  courseId,
  image,
}: {
  courseId: string;
  image: string;
}) {
  const fallbackBg =
    fallbackBgs[courseId as keyof typeof fallbackBgs] || fallbackBgs.frontend;

  return (
    <div className="relative w-full aspect-video bg-background/50 overflow-hidden">
      {/* Actual image */}
      <CustomImage
        fallback={(imgLoaded, imgError) => (
          <div
            className={cn(
              `absolute inset-0 bg-linear-to-br transition-opacity duration-500 `,
              imgLoaded ? "opacity-0" : "opacity-100",
              imgError && fallbackBg,
            )}
          >
            <BookOpen className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white/40" />
          </div>
        )}
        url={image}
        alt={courseId}
        className={(loaded) =>
          cn(
            `absolute inset-0 w-full h-full object-cover transition-opacity duration-500`,
            loaded ? "opacity-100" : "opacity-0",
          )
        }
      />

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
    </div>
  );
}
