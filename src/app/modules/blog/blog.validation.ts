import { z } from "zod";

export const createBlogValidation = z.object({
  body: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.string(),
    imageUrl: z.string(),
    website: z.string(),
  })
})

export const updateBlogValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    status: z.string().optional(),
    imageUrl: z.string().optional(),
    website: z.string().optional(),
  })
})
