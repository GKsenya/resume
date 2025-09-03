import {
  CompanyExperienceItem,
  Contacts,
  EducationItem,
  FeedbackItem,
  SkillItem,
  UserCommonInfo,
  WorkingConditions,
} from 'types';

export type UserInfo = {
  commonInfo: UserCommonInfo;
  contacts: Contacts;
  certificates?: string[];
  skills?: SkillItem[];
  workingConditions: WorkingConditions;
  education: EducationItem[];
  feedback: FeedbackItem[];
  about?: string[];
  experience: CompanyExperienceItem[];
  experienceBeforeIT?: CompanyExperienceItem[];
};

export type User = {
  name: string;
} & UserInfo;

export type Resume = {
  user: User;
  sectionsOrder?: (keyof Partial<UserInfo>)[];
};
