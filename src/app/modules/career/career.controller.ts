import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createCareer, deleteCareer, getAllCareers, getCareerBySlug, updateCareer } from "./career.service";

export const createCareerController = catchAsync(async (req, res) => {
  const result = await createCareer(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Career created successfully",
    data: result,
  });
});

export const getAllCareersController = catchAsync(async (req, res) => {
  const result = await getAllCareers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Careers fetched successfully",
    data: result,
  });
});

export const getCareerBySlugController = catchAsync(async (req, res) => {
  const result = await getCareerBySlug(req.params.slug);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Career fetched successfully",
    data: result,
  });
});

export const updateCareerController = catchAsync(async (req, res) => {
  const result = await updateCareer(req.params.slug, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Career updated successfully",
    data: result,
  });
});

export const deleteCareerController = catchAsync(async (req, res) => {
  const result = await deleteCareer(req.params.slug);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Career deleted successfully",
    data: result,
  });
});
