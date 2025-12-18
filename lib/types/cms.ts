export interface Service {
  id: string
  title: string
  description: string
  icon: string
  slug: string
  featured: boolean
  locale: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  slug: string
  featured: boolean
  locale: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
  locale: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
  locale: string
}

export interface GlobalSettings {
  siteName: string
  siteDescription: string
  socialLinks: {
    twitter?: string
    linkedin?: string
    github?: string
    facebook?: string
    instagram?: string
  }
  contactEmail: string
  locale: string
}

export interface NewsletterSubscription {
  email: string
  subscribedAt: Date
}
