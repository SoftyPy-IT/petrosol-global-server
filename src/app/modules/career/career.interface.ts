import { TCareerType } from "./career.constant"

export interface TCareer {
  title: string
  slug: string
  location: string
  type: TCareerType
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}



