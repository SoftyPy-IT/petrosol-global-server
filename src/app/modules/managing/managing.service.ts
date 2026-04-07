import { TManaging } from "./managing.interface";
import { Managing } from "./managing.model";

export const createManaging = async (payload: TManaging) => {
  const result = await Managing.create(payload);
  return result;
}

export const getAllManaging = async () => {
  const result = await Managing.find();
  return result;
}

export const getSingleManaging = async (id: string) => {
  const result = await Managing.findById(id);
  return result;
}

export const updateManaging = async (id: string, payload: TManaging) => {
  const result = await Managing.findByIdAndUpdate(id, payload, { new: true });
  return result;
}

export const deleteManaging = async (id: string) => {
  const result = await Managing.findByIdAndDelete(id);
  return result;
}
