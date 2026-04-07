import { Banner } from "./banner.model";
import { TBanner } from "./banner.interface";

export const createBanner = async (payload: TBanner) => {
  const result = await Banner.create(payload);
  return result;
}

export const getAllBanners = async () => {
  const result = await Banner.find();
  return result;
}

export const getBannerById = async (id: string) => {
  const result = await Banner.findById(id);
  return result;
}

export const updateBanner = async (id: string, payload: TBanner) => {
  const result = await Banner.findByIdAndUpdate(id, payload, { new: true });
  return result;
}

export const deleteBanner = async (id: string) => {
  const result = await Banner.findByIdAndDelete(id);
  return null;
}
