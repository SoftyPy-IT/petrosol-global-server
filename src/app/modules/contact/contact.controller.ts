import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createContact, deleteContact, getAllContacts, getContactBySlug, updateContact } from "./contact.service";

export const createContactController = catchAsync(async (req, res) => {
  const result = await createContact(req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Contact created successfully",
    data: result,
  });
});

export const getAllContactsController = catchAsync(async (req, res) => {
  const result = await getAllContacts();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Contacts fetched successfully",
    data: result,
  });
});

export const getContactBySlugController = catchAsync(async (req, res) => {
  const result = await getContactBySlug(req.params.slug);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Contact fetched successfully",
    data: result,
  });
});

export const updateContactController = catchAsync(async (req, res) => {
  const result = await updateContact(req.params.slug, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Contact updated successfully",
    data: result,
  });
});

export const deleteContactController = catchAsync(async (req, res) => {
  const result = await deleteContact(req.params.slug);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Contact deleted successfully",
    data: result,
  });
});
