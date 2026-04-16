import Image from "next/image";
import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { ContactForm } from "../contact-form";

interface ContactSectionProps {
  t: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
  };
}

export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="w-full py-20 relative">
      {/* Grid background overlay */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <Image
          fill
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-30"
        />
      </div>

      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

      <ContactForm t={{ ...t }} />
    </section>
  );
}
