import { courses } from "@/lib/data/courses";

import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { CourseCard } from "../shared/course-card";
import { StaggerContainer } from "../animated/staggered-container";

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
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      <StaggerContainer>
        {courses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              course={course}
              index={index}
              t={{ ...t }}
            />
          );
        })}
      </StaggerContainer>
    </section>
  );
}
