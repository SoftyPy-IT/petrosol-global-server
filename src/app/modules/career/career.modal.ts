import { Schema, model } from "mongoose";
import { TCareer } from "./career.interface";
import { slugGenerator } from "../../utils/slugGenerator";

export const careerSchema = new Schema<TCareer>({
  title: { type: String, required: true },
  slug: { type: String },
  location: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  responsibilities: { type: [String], required: true },
  requirements: { type: [String], required: true },
  benefits: { type: [String], required: true },
}, { timestamps: true });


//for create
careerSchema.pre('save', function (next) {
  if (this.title) {
    this.slug = slugGenerator(this.title);
  }
  next();
});

//for update
careerSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as any;

  if (update?.title) {
    update.slug = slugGenerator(update.title);
  }

  if (update?.$set?.title) {
    update.$set.slug = slugGenerator(update.$set.title);
  }

  next();
});


export const Career = model<TCareer>('Career', careerSchema);
