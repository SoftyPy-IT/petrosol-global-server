import { z } from "zod";
import { careerType } from "./career.constant";

export const createCareerValidation = z.object({
  body: z.object({
    title: z.string(),
    slug: z.string(),
    location: z.string(),
    type: z.enum(careerType),
    description: z.string(),
    responsibilities: z.array(z.string()),
    requirements: z.array(z.string()),
    benefits: z.array(z.string()),
  })
});

export const updateCareerValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    location: z.string().optional(),
    type: z.enum(careerType).optional(),
    description: z.string().optional(),
    responsibilities: z.array(z.string()).optional(),
    requirements: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),
  })
});
