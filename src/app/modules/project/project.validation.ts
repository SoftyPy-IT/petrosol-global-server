import { z } from "zod";
import { projectStatus } from "./project.constant";

export const createProjectValidation = z.object({
  body: z.object({
    title: z.string(),
    slug: z.string(),
    subtitle: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.enum(projectStatus),
    imageUrl: z.string(),
    website: z.string(),
  }),
});

export const updateProjectValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(projectStatus).optional(),
    imageUrl: z.string().optional(),
    website: z.string().optional(),
  }),
});

