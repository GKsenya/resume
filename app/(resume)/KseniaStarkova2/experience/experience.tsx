'use client'

import { CompanyCard } from '@/components/companyCard';
import { Title } from '@/components/title';
import { Box, Divider, Flex, Tabs, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ProjectRole } from 'types/projectRole';
import { FrontendProjects } from './frontendProjects';
import { FullstackProjects } from './fullstackProjects';
import { RoleTabsList } from './roleTabsList';

export const Experience = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      id='experience'
    >
      <Title label='Опыт работы' color='indigo' underlined={false} />
      <Flex
        wrap="nowrap"
        align='flex-start'
        gap={0}
        direction={{ base: 'column', sm: 'row' }}
        mt={{ base: 'md', sm: 'xl' }}
      >
        <CompanyCard
          fromTo='07/2020 - н.в.'
          period='4 года 9 месяцев'
          name='ООО "Интабия"'
          position='Frontend-разработчик'
          city='Новосибирск'
          link='https://intabia.ru'
          number={isMobile ? 1 : undefined}
        />
        <Divider
          mx={{ sm: 'lg', lg: 'xl' }}
          orientation='vertical'
          color='dark.0'
          visibleFrom='sm'
        />
        <Divider
          orientation='horizontal'
          color='dark.0'
          hiddenFrom='sm'
          label="Проекты внутри компании"
          w='-webkit-fill-available'
        />
        <Tabs defaultValue={ProjectRole.FRONTEND} color='orange.5'>
          <RoleTabsList />

          <Tabs.Panel value={ProjectRole.FRONTEND}>
            <FrontendProjects />
          </Tabs.Panel>

          <Tabs.Panel value={ProjectRole.FULLSTACK}>
            <FullstackProjects />
          </Tabs.Panel>

          {/* <Tabs.Panel value={ProjectRole.BACKEND}>
            <BackendProjects />
          </Tabs.Panel> */}
        </Tabs>
      </Flex>
    </Box>
  )
};
