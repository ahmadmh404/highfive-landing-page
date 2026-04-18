"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/lib/schema";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/constants";
import { Form } from "./ui/form";
import { Field, FieldError, FieldGroup, FieldTitle } from "./ui/field";
import { Input } from "./ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";
import { FaLocationArrow } from "react-icons/fa6";
import { useTransition } from "react";

interface ContactFormProps {
  t: {
    send: string;
  };
}

export function ContactForm({ t }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: any) {}

  return (
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
                <div className="text-sm font-medium text-foreground">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form */}
      <Form {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 p-8 rounded-2xl bg-background/95 border border-muted-foreground/10"
        >
          <FieldGroup className="space-y-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-disabled={fieldState.invalid}>
                  <FieldTitle>Name</FieldTitle>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your name"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-disabled={fieldState.invalid}>
                  <FieldTitle>Email Address</FieldTitle>
                  <Input
                    type="email"
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your Email"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-disabled={fieldState.invalid}>
                  <FieldTitle>Phone Number</FieldTitle>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter a valid phone number"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-disabled={fieldState.invalid}>
                  <FieldTitle>Message</FieldTitle>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="Enter a message.."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <button
            type="submit"
            className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-px focus:outline-none mt-2"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-foreground backdrop-blur-3xl gap-2">
              {isPending ? "Sending..." : t.send}
              {!!isPending && <FaLocationArrow className="w-3 h-3" />}
            </span>
          </button>
        </motion.form>
      </Form>
    </div>
  );
}
