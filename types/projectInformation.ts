import { ExperienceDescription } from 'types';

export type ProjectInformation = {
  name?: string;
  url?: string;
  goal: string;
  description?: string;
  architecture?: string;
  technologies?:
    | {
        languages?: string[];
        uiLibraries?: string[];
        frameworks?: string[];
      }
    | string[];
  companyInternalLink?: string;
  imgUrls?: string[];
  experience: ExperienceDescription;
};