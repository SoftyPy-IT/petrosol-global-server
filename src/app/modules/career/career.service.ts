import { Career } from "./career.modal";
import { TCareer } from "./career.interface";

export const createCareer = async (payload: TCareer) => {
  const result = await Career.create(payload);
  return result;
}

export const getAllCareers = async () => {
  const result = await Career.find();
  return result;
}

export const getCareerBySlug = async (slug: string) => {
  const result = await Career.findOne({ slug });
  return result;
}

export const getCareerById = async (id: string) => {
  const result = await Career.findById(id);
  return result;
}

export const updateCareer = async (slug: string, payload: TCareer) => {
  const result = await Career.findOneAndUpdate({ slug }, payload, { new: true });
  return result;
}

export const deleteCareer = async (slug: string) => {
  const result = await Career.findOneAndDelete({ slug });
  return result;
}
