import { z } from "zod";

export const createManagingValidation = z.object({
  body: z.object({
    name: z.string(),
    slug: z.string(),
    designation: z.string(),
    description: z.string(),
    image: z.string(),
    socialLinks: z.object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      facebook: z.string().optional(),
      instagram: z.string().optional(),
    }),
    positionIndex: z.number(),
  })
});


export const updateManagingValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    designation: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    socialLinks: z.object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      facebook: z.string().optional(),
      instagram: z.string().optional(),
    }).optional(),
    positionIndex: z.number().optional(),
  })
});
