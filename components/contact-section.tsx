"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import { AnimatedSection } from "./animated/animated-section";

export function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    alert(
      language === "ar"
        ? "تم إرسال رسالتك بنجاح!"
        : "Message sent successfully!"
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <AnimatedSection id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            {t("contact.subtitle")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-balance">
            {t("contact.title")}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold mb-6 text-card-foreground">
                {t("contact.info.title")}
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-card-foreground">
                      {t("contact.info.email")}
                    </p>
                    <Link
                      href="mailto:info@highfive.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@highfive.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-card-foreground">
                      {t("contact.info.phone")}
                    </p>
                    <Link
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +123 456 7890
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-card-foreground">
                      {t("contact.info.address")}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "ar"
                        ? "١٢٣ شارع التكنولوجيا، المدينة"
                        : "123 Tech Street, City"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t("contact.email")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t("contact.message")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  {t("contact.send")}
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
