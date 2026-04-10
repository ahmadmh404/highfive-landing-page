export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    dribbble?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: "code" | "design" | "content" | "analytics";
  icon: string;
  inputFields: AIToolInputField[];
  outputFormat: string;
}

export interface AIToolInputField {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "number";
  required: boolean;
  options?: string[];
  placeholder?: string;
}

export interface AIDemoResult {
  success: boolean;
  output: string;
  processingTime: number;
  error?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "web&apps" | "aiFeatures" | "tools";
  image: string;
  link?: string;
  technologies: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  thumbnail?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export type ThemeMode = "light" | "dark" | "system";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HowWeWorkStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}
