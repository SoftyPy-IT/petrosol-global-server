import z from "zod";

export const bannerValidation = {
  createBannerValidation: z.object({
    body: z.object({
      title: z.string(),
      subTitle: z.string(),
      description: z.string(),
      image: z.string(),
      buttonText: z.string(),
      buttonLink: z.string(),
      isActive: z.boolean(),
      tags: z.array(z.string()),
    })
  }),
  updateBannerValidation: z.object({
    body: z.object({
      title: z.string().optional(),
      subTitle: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      buttonText: z.string().optional(),
      buttonLink: z.string().optional(),
      isActive: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
    })
  })
}
