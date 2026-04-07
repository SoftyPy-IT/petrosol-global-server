import { z } from "zod";

export const createPartnerValidation = z.object({
  body: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    imageUrl: z.string(),
    website: z.string(),
    description: z.string(),
  }),
});


export const updatePartnerValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    category: z.string().optional(),
    imageUrl: z.string().optional(),
    website: z.string().optional(),
    description: z.string().optional(),
  }),
});
