import { Company, ExperienceDescription, ProjectInformation } from 'types';


export type TExperienceByPositions = Record<
  string,
  {
    projects?: ProjectInformation[];
    description?: ExperienceDescription;
  }
>;

export type CompanyExperienceItem = {
  from: string;
  to?: string;
  position: string;
  company: Company;
  experienceByPositions?: TExperienceByPositions;
  experienceByProjects?: ProjectInformation[];
  experience?: ExperienceDescription;
};
