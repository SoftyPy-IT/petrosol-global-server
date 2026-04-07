export const projectStatus = [
  'ongoing',
  'under_development',
  'planed',
  'on_hold',
  'cancelled',
  'completed',
] as const;

export type TProjectStatus = typeof projectStatus[number];
