import { TIndustry } from "./industry.interface"
import { Industry } from "./industry.model"

export const createIndustry = async (payload: TIndustry) => {
  const result = await Industry.create(payload)
  return result
}

export const getAllIndustries = async () => {
  const result = await Industry.find()
  return result
}

export const getIndustryBySlug = async (slug: string) => {
  const result = await Industry.findOne({ slug })
  return result

}

export const getIndustryById = async (id: string) => {
  const result = await Industry.findById(id)
  return result
}

export const updateIndustry = async (slug: string, payload: TIndustry) => {
  const result = await Industry.findOneAndUpdate({ slug }, payload, { new: true })
  return result
}

export const deleteIndustry = async (slug: string) => {
  const result = await Industry.findOneAndDelete({ slug })
  return result
}
