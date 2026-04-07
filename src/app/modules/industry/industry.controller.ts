import catchAsync from "../../utils/catchAsync";
import { createIndustry, deleteIndustry, getAllIndustries, getIndustryById, getIndustryBySlug, updateIndustry } from "./industry.service";
import sendResponse from "../../utils/sendResponse";

export const createIndustryController = catchAsync(async (req, res) => {
  const result = await createIndustry(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Industry created successfully',
    data: result,
  })
})


export const getAllIndustriesController = catchAsync(async (req, res) => {
  const result = await getAllIndustries()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Industries fetched successfully',
    data: result,
  })
})

export const getIndustryBySlugController = catchAsync(async (req, res) => {
  const result = await getIndustryBySlug(req.params.slug)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Industry fetched successfully',
    data: result,
  })
})

export const getIndustryByIdController = catchAsync(async (req, res) => {
  const result = await getIndustryById(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Industry fetched successfully',
    data: result,
  })
})

export const updateIndustryController = catchAsync(async (req, res) => {
  const result = await updateIndustry(req.params.slug, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Industry updated successfully',
    data: result,
  })
})

export const deleteIndustryController = catchAsync(async (req, res) => {
  const result = await deleteIndustry(req.params.slug)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Industry deleted successfully',
    data: result,
  })
})
