import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createManaging, deleteManaging, getAllManaging, getSingleManaging, updateManaging } from "./managing.service";

export const createManagingController = catchAsync(async (req, res) => {
  const result = await createManaging(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Managing created successfully",
    data: result,
  });
});

export const getAllManagingController = catchAsync(async (req, res) => {
  const result = await getAllManaging();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Managing fetched successfully",
    data: result,
  });
});

export const getSingleManagingController = catchAsync(async (req, res) => {
  const result = await getSingleManaging(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Managing fetched successfully",
    data: result,
  });
});

export const updateManagingController = catchAsync(async (req, res) => {
  const result = await updateManaging(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Managing updated successfully",
    data: result,
  });
});

export const deleteManagingController = catchAsync(async (req, res) => {
  const result = await deleteManaging(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Managing deleted successfully",
    data: result,
  });
});
