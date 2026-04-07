import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createProject, deleteProject, getAllProjects, getSingleProjectById, getSingleProjectBySlug, updateProject } from "./project.service";

export const createProjectController = catchAsync(async (req, res) => {
  const result = await createProject(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});


export const getAllProjectsController = catchAsync(async (req, res) => {
  const result = await getAllProjects();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects fetched successfully',
    data: result,
  });
});


export const getSingleProjectBySlugController = catchAsync(async (req, res) => {
  const result = await getSingleProjectBySlug(req.params.slug);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project fetched successfully',
    data: result,
  });
});

export const getSingleProjectController = catchAsync(async (req, res) => {
  const result = await getSingleProjectById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project fetched successfully',
    data: result,
  });
});

export const updateProjectController = catchAsync(async (req, res) => {
  const result = await updateProject(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

export const deleteProjectController = catchAsync(async (req, res) => {
  const result = await deleteProject(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});
