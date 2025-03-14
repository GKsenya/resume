'use client'

import { CompanyCard } from '@/components/companyCard';
import { Project } from '@/components/project';
import { Title } from '@/components/title';
import { Box, Divider, Flex, Stack, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const Experience = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      bg='white'
      id='experience'
    >
      <Title label='Опыт работы' />
      <Flex
        wrap="nowrap"
        align='flex-start'
        gap={0}
        direction={{ base: 'column', sm: 'row' }}
        mt={{ base: 'md', sm: 'xl' }}
      >
        <CompanyCard
          fromTo='07/2020 - н.в.'
          period='4 года 8 месяцев'
          name='ООО "Интабия"'
          position='frontend-разработчик'
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
        <Stack
          gap='xl'
          style={isMobile ? { paddingTop: '2vh' } : {}}
        >
          <Project
            name='БКС'
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
          <Project
            name='WHOOSH'
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
          <Project
            name='Мосбиржа'
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
          <Project
            name='Сервис учёта рабочего времени сотрудников'
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
        </Stack>
      </Flex>
    </Box>
  )
};
