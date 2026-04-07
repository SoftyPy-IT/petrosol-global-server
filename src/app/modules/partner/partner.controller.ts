import { createPartner, deletePartner, getAllPartners, getSinglePartner, updatePartner } from "./partner.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

export const createPartnerController = catchAsync(async (req, res) => {
  const result = await createPartner(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner created successfully',
    data: result,
  });
});


export const updatePartnerController = catchAsync(async (req, res) => {
  const result = await updatePartner(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner updated successfully',
    data: result,
  });
});

export const deletePartnerController = catchAsync(async (req, res) => {
  const result = await deletePartner(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner deleted successfully',
    data: result,
  });
});

export const getSinglePartnerController = catchAsync(async (req, res) => {
  const result = await getSinglePartner(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner fetched successfully',
    data: result,
  });
});

export const getAllPartnersController = catchAsync(async (req, res) => {
  const result = await getAllPartners();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partners fetched successfully',
    data: result,
  });
});
