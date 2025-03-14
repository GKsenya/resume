import { Project } from '@/components/project';
import { Stack } from '@mantine/core';

export const BackendProjects = () => (
  <Project
    name='Умная библиотека'
    link=''
    subtitle=''
    goal=''
    technologies={{
      languages: [],
      uiLibraries: [],
      frameworks: []
    }}
    description={(
      <Stack gap='xs'>
      </Stack>
    )}
  />
)
