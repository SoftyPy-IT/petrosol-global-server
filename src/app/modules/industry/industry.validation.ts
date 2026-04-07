import { z } from "zod";

export const createIndustryValidation = z.object({
  title: z.string(),
  slug: z.string(),
  tag: z.object({
    label: z.string(),
    icon: z.string(),
  }),
  hero: z.object({
    title: z.string(),
    highlight: z.string(),
    description: z.string(),
    image: z.string(),
    primaryCta: z.object({
      label: z.string(),
      href: z.string(),
    }),
    secondaryCta: z.object({
      label: z.string(),
      href: z.string(),
    }),
  }),
  highlights: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ),
  overview: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.array(z.string()),
    benefits: z.array(z.string()),
  }),
  capabilities: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
  process: z.array(
    z.object({
      step: z.number(),
      title: z.string(),
      description: z.string(),
    })
  ),
  cta: z.object({
    title: z.string(),
    description: z.string(),
    button: z.object({
      label: z.string(),
      href: z.string(),
    }),
  }),
})

export const updateIndustryValidation = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  tag: z.object({
    label: z.string(),
    icon: z.string(),
  }).optional(),
  hero: z.object({
    title: z.string().optional(),
    highlight: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    primaryCta: z.object({
      label: z.string().optional(),
      href: z.string().optional(),
    }).optional(),
    secondaryCta: z.object({
      label: z.string().optional(),
      href: z.string().optional(),
    }),
  }),
  highlights: z.array(
    z.object({
      label: z.string().optional(),
      value: z.string().optional(),
    })
  ),
  overview: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    description: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),
  }),
  capabilities: z.array(
    z.object({
      icon: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
  ),
  process: z.array(
    z.object({
      step: z.number().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    })
  ),
  cta: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    button: z.object({
      label: z.string().optional(),
      href: z.string().optional(),
    }),
  }),
})
