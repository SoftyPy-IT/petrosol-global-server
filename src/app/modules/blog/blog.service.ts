import { TBlog } from "./blog.interface";
import { Blog } from "./blog.modal";

export const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
}

export const getAllBlog = async () => {
  const result = await Blog.find();
  return result;
}

export const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
}

export const getBlogBySlug = async (slug: string) => {
  const result = await Blog.findOne({ slug });
  return result;
}

export const updateBlog = async (id: string, payload: TBlog) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
}

export const deleteBlog = async (id: string) => {
  await Blog.findByIdAndDelete(id);
  return null;
}
