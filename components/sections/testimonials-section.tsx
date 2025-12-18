"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
  t: {
    title: string
    subtitle: string
  }
}

export function TestimonialsSection({ t }: TestimonialsSectionProps) {
  // Mock testimonials - fetch from Strapi CMS in production
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content:
        "HighFive transformed our digital presence completely. Their AI integration saved us countless hours and their team was professional throughout.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Marketing Director",
      company: "Global Ventures",
      content:
        "The mobile app they built exceeded our expectations. The bilingual support was seamless and the performance is outstanding.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Founder",
      company: "Creative Studios",
      content:
        "Their social media video production is top-notch. Our engagement rates tripled after working with HighFive.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">{testimonial.content}</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
