import * as z from "zod";
import validator from "validator";

/**
 * ContactSchema
 */

export const ContactSchema = z.object({
  name: z.string().min(3, "Name is too short.."),
  email: z.string().email("Please provide a valid email"),
  phone: z
    .string()
    .refine(validator.isMobilePhone, "Please provide a valid phone number"),
  message: z
    .string()
    .min(10, "Please provide a valid message")
    .max(
      100,
      "Message is too long, If you wish to send more details send an email.",
    ),
});
