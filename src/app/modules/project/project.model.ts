import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";
import { projectStatus } from "./project.constant";
import { slugGenerator } from "../../utils/slugGenerator";

const projectSchema = new Schema<TProject>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: projectStatus,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
});

// create slug:
projectSchema.pre('save', function (next) {
  this.slug = slugGenerator(this.title);
  next();
});

// update slug:
projectSchema.pre('findOneAndUpdate', function (next) {
  this.set({ slug: slugGenerator(this.get('title')) });
  next();
});

export const Project = model<TProject>('Project', projectSchema);
