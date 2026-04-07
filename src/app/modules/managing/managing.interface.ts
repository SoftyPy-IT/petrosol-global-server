export interface TManaging {
  name: string;
  slug: string;
  designation: string;
  description: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  positionIndex: number;
}
