export const careerType = [
  "full_time",
  "part_time",
  "contract",
  "temporary",
  "internship",
  "other",
] as const

export type TCareerType = (typeof careerType)[number]
