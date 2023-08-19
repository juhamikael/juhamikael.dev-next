import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(6, "Subject must be at least 6 characters")
    .max(50, "Subject must be at most 50 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be at most 1000 characters"),
});
