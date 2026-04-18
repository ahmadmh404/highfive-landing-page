export interface Course {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  icon: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Master modern React, Next.js, and TypeScript with hands-on projects and real-world applications.",
    level: "beginner",
    duration: "8 weeks",
    icon: "FaCode",
    image: "/courses/frontend.jpg",
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "Build scalable APIs with Node.js, Express, and database architecture for production apps.",
    level: "intermediate",
    duration: "10 weeks",
    icon: "FaServer",
    image: "/courses/backend.jpg",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Integrate LLMs, build AI agents, and deploy ML models into real products and workflows.",
    level: "advanced",
    duration: "12 weeks",
    icon: "FaBrain",
    image: "/courses/ai-ml.jpg",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Learn SEO, content strategy, and growth hacking techniques to scale your digital presence.",
    level: "beginner",
    duration: "6 weeks",
    icon: "FaBullhorn",
    image: "/courses/marketing.jpg",
  },
];
