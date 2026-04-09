import { Schema, model } from "mongoose";
import { slugGenerator } from "../../utils/slugGenerator";
import { TBlog } from "./blog.interface";

export const BlogSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
  imageUrl: { type: String, required: true },
  website: { type: String, required: true },
}, { timestamps: true })


//for  create slug
BlogSchema.pre('save', function (next) {
  if (this.isNew) {
    this.slug = slugGenerator(this.title);
  }
  next();
});

//for update slug
BlogSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as any;
  if (update) {
    update.$set.slug = slugGenerator(update.$set.title);
  }
  next();
});

export const Blog = model<TBlog>('Blog', BlogSchema);
