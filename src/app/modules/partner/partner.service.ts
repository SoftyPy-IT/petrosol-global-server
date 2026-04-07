import { TPartner } from "./partner.interface";
import { Partner } from "./partner.model";

export const createPartner = async (payload: TPartner) => {
  const result = await Partner.create(payload);
  return result;
};

export const getAllPartners = async () => {
  const result = await Partner.find();
  return result;
};

export const getSinglePartner = async (id: string) => {
  const result = await Partner.findById(id);
  return result;
};

export const updatePartner = async (id: string, payload: TPartner) => {
  const result = await Partner.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const deletePartner = async (id: string) => {
  const result = await Partner.findByIdAndDelete(id);
  return result;
};
