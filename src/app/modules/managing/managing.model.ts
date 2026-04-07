import { Schema, model } from "mongoose";
import { TManaging } from "./managing.interface";
import { slugGenerator } from "../../utils/slugGenerator";

const managingSchema = new Schema<TManaging>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    socialLinks: {
      linkedin: { type: String, default: null },
      twitter: { type: String, default: null },
      facebook: { type: String, default: null },
      instagram: { type: String, default: null },
    },

    positionIndex: {
      type: Number,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);


managingSchema.pre("save", async function (next) {
  try {
    if (this.name && !this.slug) {
      this.slug = slugGenerator(this.name);
    }

    if (this.isNew && this.positionIndex === undefined) {
      const lastItem = await Managing.findOne()
        .sort({ positionIndex: -1 })
        .select("positionIndex")
        .lean();

      this.positionIndex = lastItem ? lastItem.positionIndex + 1 : 0;
    }

    next();
  } catch (error) {
    next(error as Error);
  }
});


managingSchema.pre("findOneAndUpdate", async function (next) {
  try {
    const update = this.getUpdate() as any;
    const name = update?.name || update?.$set?.name;
    if (name) {
      const newSlug = slugGenerator(name);

      if (update?.name) update.slug = newSlug;
      if (update?.$set) update.$set.slug = newSlug;
    }

    next();
  } catch (error) {
    next(error as Error);
  }
});

export const Managing = model<TManaging>("Managing", managingSchema);
