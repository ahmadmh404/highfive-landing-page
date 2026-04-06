"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Course = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  level: string;
  price: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Advanced Next.js & React Mastery",
    subtitle: "Build production-grade full-stack apps",
    image: "https://picsum.photos/id/1015/800/600",
    duration: "8 weeks",
    level: "Intermediate",
    price: "$299",
  },
  {
    id: 2,
    title: "Flutter Mobile Development",
    subtitle: "From zero to App Store",
    image: "https://picsum.photos/id/201/800/600",
    duration: "6 weeks",
    level: "Beginner",
    price: "$249",
  },
  {
    id: 3,
    title: "Node.js & Backend Architecture",
    subtitle: "Scalable APIs & Microservices",
    image: "https://picsum.photos/id/301/800/600",
    duration: "10 weeks",
    level: "Advanced",
    price: "$349",
  },
  {
    id: 4,
    title: "AI/ML for Developers",
    subtitle: "Integrate LLMs into your apps",
    image: "https://picsum.photos/id/401/800/600",
    duration: "7 weeks",
    level: "Intermediate",
    price: "$399",
  },
  {
    id: 5,
    title: "Modern UI/UX with Framer Motion",
    subtitle: "Premium animations & interactions",
    image: "https://picsum.photos/id/501/800/600",
    duration: "5 weeks",
    level: "All Levels",
    price: "$199",
  },
  {
    id: 6,
    title: "TypeScript Masterclass",
    subtitle: "Write bulletproof code",
    image: "https://picsum.photos/id/601/800/600",
    duration: "4 weeks",
    level: "Intermediate",
    price: "$179",
  },
];

export default function CoursesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  // Adjust the percentage based on number of cards (6 cards → move ~400-500%)
  // Test and tweak this value until the last card is fully visible
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-420%"]);

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight">
            Featured Courses
          </h2>
          <p className="text-zinc-400 mt-3 text-xl">
            Master the technologies the industry demands
          </p>
        </motion.div>

        {/* Scroll container - tall enough to drive the animation */}
        <div ref={containerRef} className="relative h-[280vh]">
          {/* Sticky viewport */}
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-8 will-change-transform"
            >
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  className="min-w-[380px] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 hover:border-cyan-500 transition-colors"
                  whileHover={{ scale: 1.04, y: -12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Image */}
                  <div className="relative h-60">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                      {course.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-semibold leading-tight">
                        {course.title}
                      </h3>
                      <span className="text-cyan-400 font-mono text-lg">
                        {course.price}
                      </span>
                    </div>

                    <p className="text-zinc-400 line-clamp-2 mb-6">
                      {course.subtitle}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm uppercase tracking-widest text-zinc-500">
                        {course.level}
                      </span>
                      <button className="px-8 py-3 bg-white text-black rounded-2xl font-medium hover:bg-cyan-400 hover:text-white transition-all">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Optional subtle hint */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Scroll down to explore all courses →
        </p>
      </div>
    </section>
  );
}
