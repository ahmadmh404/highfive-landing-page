"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Video, Sparkles } from "lucide-react"

interface ServicesSectionProps {
  t: {
    title: string
    subtitle: string
    webApps: {
      title: string
      description: string
    }
    mobileApps: {
      title: string
      description: string
    }
    socialMedia: {
      title: string
      description: string
    }
    aiSolutions: {
      title: string
      description: string
    }
  }
}

export function ServicesSection({ t }: ServicesSectionProps) {
  const services = [
    {
      icon: Globe,
      title: t.webApps.title,
      description: t.webApps.description,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Smartphone,
      title: t.mobileApps.title,
      description: t.mobileApps.description,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Video,
      title: t.socialMedia.title,
      description: t.socialMedia.description,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Sparkles,
      title: t.aiSolutions.title,
      description: t.aiSolutions.description,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex rounded-xl ${service.bgColor} p-3 transition-transform group-hover:scale-110`}
                  >
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
