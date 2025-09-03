import { Box, Flex, SimpleGrid } from '@mantine/core';
import { Title } from 'components';
import { GitLabProject } from './gitlabProject';

export const GitLabProjects = () => {
  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      pb={{ base: '6vh', lg: '10vh' }}
      id='gitlabProjects'
    >
      <Title label='Примеры работ' />
      <Flex
        mt={{ base: 'md', sm: 'xl' }}
        wrap='nowrap'
        align='flex-start'
        gap={0}
        direction={{ base: 'column', sm: 'row' }}
      >
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing='xl'
        >
          <GitLabProject
            name='Task Manager'
            description=''
            imgUrl='https://gitlab.com/starkov-georgiy/todolist/-/raw/main/screenshots/dark_main.png'
          />
          <GitLabProject
            name='ToDoList'
            description=''
          />
          <GitLabProject
            name='Weather'
            description=''
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
