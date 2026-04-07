import { TProjectStatus } from "./project.constant";

export interface TProject {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  category: string;
  status: TProjectStatus;
  imageUrl: string;
  website: string;
}
