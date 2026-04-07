import { z } from "zod";

export const createContactValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
  })
});

export const updateContactValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    subject: z.string().optional(),
    message: z.string().optional(),
  })
});
