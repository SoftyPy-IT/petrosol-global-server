import { Schema, model } from "mongoose";
import { TPartner } from "./partner.interface";
import { slugGenerator } from "../../utils/slugGenerator";

const partnerSchema = new Schema<TPartner>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
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
  description: {
    type: String,
    required: true,
  },
});

// create slug:
partnerSchema.pre('save', function (next) {
  this.slug = slugGenerator(this.name);
  next();
});

// update slug:
partnerSchema.pre('findOneAndUpdate', function (next) {
  this.set({ slug: slugGenerator(this.get('name')) });
  next();
});


export const Partner = model<TPartner>('Partner', partnerSchema);
