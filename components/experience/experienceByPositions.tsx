import { Tabs } from '@mantine/core';
import { TabsList } from 'components';
import { TExperienceByPositions } from 'types/companyExperienceItem';
import { ExperienceByProjects } from './experienceByProjects';

type ExperienceByPositionsProps = {
  positions: string[];
  experienceByPositions: TExperienceByPositions;
};

export const ExperienceByPositions = ({ positions, experienceByPositions }: ExperienceByPositionsProps) => {
  return (
    <Tabs
      defaultValue={positions[0]}
      color='orange.5'
    >
      <TabsList items={positions} />
      {positions.map((position) => (
        <Tabs.Panel
          value={position}
          key={position}
        >
          {experienceByPositions[position].projects && (
            <ExperienceByProjects items={experienceByPositions[position].projects} />
          )}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
