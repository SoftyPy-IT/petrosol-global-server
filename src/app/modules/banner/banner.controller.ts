import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBanner, deleteBanner, getAllBanners, getBannerById, updateBanner } from "./banner.service";

export const createBannerController = catchAsync(async (req, res) => {
  const result = await createBanner(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner created successfully",
    data: result,
  });
})

export const getAllBannersController = catchAsync(async (req, res) => {
  const result = await getAllBanners();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banners fetched successfully",
    data: result,
  });
})

export const getBannerByIdController = catchAsync(async (req, res) => {
  const result = await getBannerById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner fetched successfully",
    data: result,
  });
})


export const updateBannerController = catchAsync(async (req, res) => {
  const result = await updateBanner(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner updated successfully",
    data: result,
  });
})

export const deleteBannerController = catchAsync(async (req, res) => {
  const result = await deleteBanner(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner deleted successfully",
    data: result,
  });
})
