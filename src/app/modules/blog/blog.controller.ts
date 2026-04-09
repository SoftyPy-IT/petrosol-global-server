import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBlog, deleteBlog, getAllBlog, getBlogBySlug, getSingleBlog, updateBlog } from "./blog.service";

export const createBlogController = catchAsync(async (req, res) => {
  const result = await createBlog(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
})

export const getAllBlogController = catchAsync(async (req, res) => {
  const result = await getAllBlog();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  });
})

export const getSingleBlogController = catchAsync(async (req, res) => {
  const result = await getSingleBlog(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  });
})

export const getBlogBySlugController = catchAsync(async (req, res) => {
  const result = await getBlogBySlug(req.params.slug);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  });
})


export const updateBlogController = catchAsync(async (req, res) => {
  const result = await updateBlog(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
})

export const deleteBlogController = catchAsync(async (req, res) => {
  const result = await deleteBlog(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
})
