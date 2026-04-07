import { Schema, model } from "mongoose";
import { TBanner } from "./banner.interface";
import { slugGenerator } from "../../utils/slugGenerator";


const bannerSchema = new Schema<TBanner>({
  title: { type: String, required: true },
  slug: { type: String },
  subTitle: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  tags: { type: [String], required: true },
}, { timestamps: true });

//for create
bannerSchema.pre('save', function (next) {
  if (this.title) {
    this.slug = slugGenerator(this.title);
  }
  next();
});

//for update
bannerSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as any;

  if (update?.title) {
    update.slug = slugGenerator(update.title);
  }

  if (update?.$set?.title) {
    update.$set.slug = slugGenerator(update.$set.title);
  }

  next();
});

export const Banner = model<TBanner>('Banner', bannerSchema);
