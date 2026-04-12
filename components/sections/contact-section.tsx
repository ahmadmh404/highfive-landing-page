"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaMapPin,
} from "react-icons/fa6";

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
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          {t.title}
        </h2>
        <p className="mt-4 text-base text-foreground/50 md:text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

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
            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              {"Let's build something together"}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#BEC1DD" }}>
              Whether you have a project in mind or just want to explore
              possibilities, we&apos;re here to help.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: FaEnvelope, label: "Email", value: "hello@highfive.dev" },
              { icon: FaPhone, label: "Phone", value: "+966 55 000 0000" },
              {
                icon: FaMapPin,
                label: "Location",
                value: "Riyadh, Saudi Arabia",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "rgba(17,25,40,0.6)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(203,172,249,0.15)",
                    border: "1px solid rgba(203,172,249,0.3)",
                  }}
                >
                  <Icon style={{ color: "#CBACF9" }} className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "#5c6370" }}>
                    {label}
                  </div>
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
          className="flex flex-col gap-4 p-8 rounded-2xl"
          style={{
            background: "rgba(4,7,29,0.9)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            { key: "name", type: "text", required: true },
            { key: "email", type: "email", required: true },
            { key: "phone", type: "tel", required: false },
          ].map(({ key, type, required }) => (
            <div key={key}>
              <label
                className="block text-xs mb-1.5 uppercase tracking-widest"
                style={{ color: "#5c6370" }}
              >
                {t[key as keyof typeof t]}
              </label>
              <input
                type={type}
                required={required}
                value={(form as any)[key]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [key]: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-purple-400/50"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </div>
          ))}

          <div>
            <label
              className="block text-xs mb-1.5 uppercase tracking-widest"
              style={{ color: "#5c6370" }}
            >
              {t.message}
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none resize-none transition-all duration-200 focus:border-purple-400/50"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>

          <button
            type="submit"
            className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none mt-2"
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
