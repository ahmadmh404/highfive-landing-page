"use client"

import { motion } from "framer-motion"
import { Award, Globe2, TrendingUp } from "lucide-react"

interface WhyChooseUsSectionProps {
  t: {
    title: string
    subtitle: string
    expertise: {
      title: string
      description: string
    }
    global: {
      title: string
      description: string
    }
    results: {
      title: string
      description: string
    }
  }
}

export function WhyChooseUsSection({ t }: WhyChooseUsSectionProps) {
  const features = [
    {
      icon: Award,
      title: t.expertise.title,
      description: t.expertise.description,
    },
    {
      icon: Globe2,
      title: t.global.title,
      description: t.global.description,
    },
    {
      icon: TrendingUp,
      title: t.results.title,
      description: t.results.description,
    },
  ]

  return (
    <section id="about" className="bg-muted/30 py-24 lg:py-32">
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

        {/* Features */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
