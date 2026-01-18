"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface NewsletterSectionProps {
  t: {
    title: string;
    subtitle: string;
    placeholder: string;
    cta: string;
    privacy: string;
  };
}

export function NewsletterSection({ t }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - replace with actual Strapi integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setMessage("Successfully subscribed!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground lg:text-xl">
            {t.subtitle}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Input
              type="email"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              size="lg"
              className="gap-2"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>Subscribing...</>
              ) : (
                <>
                  {t.cta}
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-green-600"
            >
              <CheckCircle2 className="h-5 w-5" />
              <span>{message}</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-destructive"
            >
              <AlertCircle className="h-5 w-5" />
              <span>{message}</span>
            </motion.div>
          )}

          <p className="mt-4 text-sm text-muted-foreground">{t.privacy}</p>
        </motion.div>
      </div>
    </section>
  );
}
