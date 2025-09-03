import { Stack } from '@mantine/core';
import { Project2 } from 'components/project/project2';
import { ProjectInformation } from 'types';

type ExperienceByProjects = {
  items: ProjectInformation[];
};

export const ExperienceByProjects = ({ items }: ExperienceByProjects) => (
  <Stack gap={40}>
    {items.map((project) => (
      <Project2
        key={project.name}
        {...project}
      />
    ))}
  </Stack>
);
