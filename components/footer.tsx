import Link from "next/link";
import { HighFiveLogo } from "@/components/logo";
import type { Locale } from "@/lib/i18n/config";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

interface FooterProps {
  locale: Locale;
  t: {
    footer: {
      tagline: string;
      services: string;
      company: string;
      legal: string;
      privacy: string;
      terms: string;
      rights: string;
    };
    nav: {
      services: string;
      projects: string;
      about: string;
      contact: string;
    };
  };
}

export function Footer({ locale, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: "Web Development", href: `/${locale}#services` },
    { label: "Mobile Apps", href: `/${locale}#services` },
    { label: "AI Solutions", href: `/${locale}#services` },
    { label: "Social Media", href: `/${locale}#services` },
  ];

  const companyLinks = [
    { label: t.nav.about, href: `/${locale}#about` },
    { label: t.nav.projects, href: `/${locale}#projects` },
    { label: t.nav.contact, href: `/${locale}#contact` },
    { label: "Careers", href: `/${locale}/careers` },
  ];

  const legalLinks = [
    { label: t.footer.privacy, href: `/${locale}/privacy` },
    { label: t.footer.terms, href: `/${locale}/terms` },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="inline-block">
              <HighFiveLogo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.footer.services}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.footer.company}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.footer.legal}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} HighFive. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
