"use client";

import { motion } from "framer-motion";
import {
  FaLocationArrow,
  FaGithub,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import MagicButton from "./MagicButton";
import type { Lang } from "@/data/translations";

const footerLinks = {
  Services: [
    "Custom Development",
    "AI Tools",
    "Programming Courses",
    "Consulting",
  ],
  Company: ["About Us", "Our Team", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

interface FooterSectionProps {
  t: {
    tagline: string;
    services: string;
    company: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

export default function FooterSection({ t }: FooterSectionProps) {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="footer">
      {/* CTA Block */}
      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight font-display"
        >
          Ready to take <span className="text-primary">your</span> digital
          presence to the next level?
        </motion.h2>
        <p className="mt-5 mb-8 text-base max-w-xl text-muted-foreground">
          Reach out to us today and let&apos;s discuss how HighFive can help you
          achieve your goals.
        </p>
        <MagicButton
          title="Start Your Project"
          icon={<FaLocationArrow />}
          position="right"
        />
      </div>

      {/* Footer grid */}
      <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-t border-white/5">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 mt-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold font-display text-primary">
              HighFive
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.tagline}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 bg-card/80 border border-white/10"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="mt-8">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest text-primary">
              {(t as any)[category.toLowerCase()] || category}
            </h4>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-white text-muted-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
        <p className="text-sm text-muted-foreground/70">
          &copy; 2025 HighFive. {t.rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-xs transition-colors hover:text-white text-muted-foreground/70"
          >
            {t.privacy}
          </a>
          <a
            href="#"
            className="text-xs transition-colors hover:text-white text-muted-foreground/70"
          >
            {t.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
