"use client"

import { motion } from "framer-motion"

interface TrustedBySectionProps {
  t: {
    title: string
  }
}

export function TrustedBySection({ t }: TrustedBySectionProps) {
  // Placeholder logos - replace with actual client logos from CMS
  const logos = [
    { name: "TechCorp", width: 120 },
    { name: "GlobalSoft", width: 140 },
    { name: "InnovateLabs", width: 130 },
    { name: "DataSystems", width: 125 },
    { name: "CloudWorks", width: 135 },
    { name: "AIFirst", width: 115 },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
        >
          {t.title}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
              style={{ width: logo.width }}
            >
              <div className="flex h-12 items-center justify-center text-xl font-bold text-foreground">{logo.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
