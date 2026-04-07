import { Schema, model } from "mongoose";
import { TContact } from "./contact.interface";
import { slugGenerator } from "../../utils/slugGenerator";

const contactSchema = new Schema<TContact>({
  name: { type: String, required: true },
  slug: { type: String },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

//for create
contactSchema.pre('save', function (next) {
  if (this.subject) {
    this.slug = slugGenerator(this.subject);
  }
  next();
});

//for update
contactSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as any;

  if (update?.subject) {
    update.slug = slugGenerator(update.subject);
  }

  if (update?.$set?.subject) {
    update.$set.slug = slugGenerator(update.$set.subject);
  }

  next();
});

export const Contact = model<TContact>('Contact', contactSchema);
