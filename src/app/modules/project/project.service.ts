import { TProject } from "./project.interface";
import { Project } from "./project.model";

export const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

export const getAllProjects = async () => {
  const result = await Project.find();
  return result;
};

export const getSingleProjectBySlug = async (slug: string) => {
  const result = await Project.findOne({ slug });
  return result;
};

export const getSingleProjectById = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

export const updateProject = async (id: string, payload: TProject) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};
