import { Schema, model } from "mongoose";
import { TIndustry } from "./industry.interface";

export const industrySchema = new Schema<TIndustry>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  tag: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  hero: {
    title: {
      type: String,
      required: true,
    },
    highlight: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    primaryCta: {
      label: {
        type: String,
        required: true,
      },
      href: {
        type: String,
        required: true,
      },
    },
    secondaryCta: {
      label: {
        type: String,
        required: true,
      },
      href: {
        type: String,
        required: true,
      },
    },
  },
  highlights: {
    type: [
      {
        label: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  overview: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: [String],
      required: true,
    },
    benefits: {
      type: [String],
      required: true,
    },
  },
  capabilities: {
    type: [
      {
        icon: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  process: {
    type: [
      {
        step: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  cta: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    button: {
      label: {
        type: String,
        required: true,
      },
      href: {
        type: String,
        required: true,
      },
    },
  },
})


//for  create slug
industrySchema.pre('save', function (next) {
  if (this.title) {
    this.slug = this.title.toLowerCase().replace(/\s+/g, '-')
  }
  next()
})

//for  update slug
industrySchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as TIndustry
  if (update.title) {
    update.slug = update.title.toLowerCase().replace(/\s+/g, '-')
  }
  next()
})

export const Industry = model<TIndustry>('Industry', industrySchema)
