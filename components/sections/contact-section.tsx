"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLocationArrow,
  FaMapPin,
  FaPhone,
} from "react-icons/fa6";
import Image from "next/image";
import { AnimatedSectionHeader } from "../animated/animated-section-header";
import { contactInfo } from "@/lib/constants";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-display">
              {"Let's build something together"}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether you have a project in mind or just want to explore
              possibilities, we&apos;re here to help.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/95 border border-muted-foreground/10"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/15 border border-primary/30">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-while/40">{label}</div>
                  <div className="text-sm font-medium text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 p-8 rounded-2xl bg-background/95 border border-muted-foreground/10"
        >
          {[
            { key: "name", type: "text", required: true },
            { key: "email", type: "email", required: true },
            { key: "phone", type: "tel", required: false },
          ].map(({ key, type, required }) => (
            <div key={key}>
              <label className="block text-xs mb-1.5 uppercase tracking-widest text-foreground/40">
                {t[key as keyof typeof t]}
              </label>
              <input
                type={type}
                required={required}
                value={(form as any)[key]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [key]: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-200 focus:border-primary/50 bg-white/[foreby-background.95bg-background/95] border border-muted-foreground/10"
              />
            </div>
          ))}

          <div>
            <label className="block text-xs mb-1.5 uppercase tracking-widest text-foreground/40">
              {t.message}
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder-muted-foreground outline-none resize-none transition-all duration-200 focus:border-primary/50 bg-background/95 border border-muted-foreground/10"
            />
          </div>

          <button
            type="submit"
            className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-px focus:outline-none mt-2"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
              {sent ? "Message Sent!" : t.send}
              {!sent && <FaLocationArrow className="w-3 h-3" />}
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
