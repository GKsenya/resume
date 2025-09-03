type DescriptionList = {
  name: string;
  items?: (
    | string
    | {
        name: string;
        items?: string[];
      }
  )[];
};

export type ExperienceDescription = (string | DescriptionList)[];
