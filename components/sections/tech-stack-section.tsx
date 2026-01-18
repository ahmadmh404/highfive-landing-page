"use client"

import { motion } from "framer-motion"

interface TechStackSectionProps {
  t: {
    title: string
    subtitle: string
  }
}

export function TechStackSection({ t }: TechStackSectionProps) {
  const technologies = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Flutter", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "OpenAI", category: "AI/ML" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Vercel", category: "Cloud" },
  ]

  const categories = ["Frontend", "Mobile", "Backend", "AI/ML", "Database", "Cloud"]

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="text-pretty text-lg text-muted-foreground lg:text-xl">{t.subtitle}</p>
        </motion.div>

        {/* Tech Grid by Category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const techsInCategory = technologies.filter((tech) => tech.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {techsInCategory.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex h-16 items-center justify-center rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
