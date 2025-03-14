'use client'

import { CompanyCard } from '@/components/companyCard';
import { Title } from '@/components/title';
import { Box, Divider, Flex, Tabs, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ProjectRole } from 'types/projectRole';
import { BackendProjects } from './backendProjects';
import { FrontendProjects } from './frontendProjects';
import { FullstackProjects } from './fullstackProjects';
import { RoleTabsList } from './roleTabsList';

export const Experience = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
  return (
    // <Tabs defaultValue={ProjectRole.FRONTEND}>
    //   <RoleTabsList />

    //   <Tabs.Panel value="gallery">
    //     Gallery tab content
    //   </Tabs.Panel>

    //   <Tabs.Panel value="messages">
    //     Messages tab content
    //   </Tabs.Panel>

    //   <Tabs.Panel value="settings">
    //     Settings tab content
    //   </Tabs.Panel>
    // </Tabs>
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
        <Tabs defaultValue={ProjectRole.FRONTEND} color='orange.5'>
          <RoleTabsList />

          <Tabs.Panel value={ProjectRole.FRONTEND}>
            <FrontendProjects />
          </Tabs.Panel>

          <Tabs.Panel value={ProjectRole.FULLSTACK}>
            <FullstackProjects />
          </Tabs.Panel>

          <Tabs.Panel value={ProjectRole.BACKEND}>
            <BackendProjects />
          </Tabs.Panel>
        </Tabs>
        {/* <Stack
          gap='xl'
          style={isMobile ? { paddingTop: '2vh' } : {}}
        >
          <Project
            name='БКС'
            link='https://lk.bcs.ru/'
            subtitle='Инвестиционная компания'
            goal='Разработка личного кабинета инвестора'
            technologies={{
              languages: ['TypeScript'],
              frameworks: ['React'],
              uiLibraries: [],
            }}
            additionalInfo={(
              <Group gap={4}>
                <Text fw={600}>Читать о проекте в кейсах</Text>
                <Group wrap='nowrap' gap={4}>
                  <Text fw={600}>компании</Text>
                  <ActionIcon
                    variant='transparent'
                    component='a'
                    href='https://intabia.ru/cases/bks-investors-personal-account'
                    color='deepBlue.5'
                    mt='auto'
                    target='_blank'
                  >
                    <IconExternalLink />
                  </ActionIcon>
                </Group>
              </Group>
            )}
            description={(
              <Stack gap='xs'>
              </Stack>
            )}
          />
          <Project
            name='WHOOSH'
            link='https://whoosh-bike.ru/'
            subtitle='Сервис кикшеринга и велошеринга'
            goal=''
            technologies={{
              languages: [],
              uiLibraries: [],
              frameworks: []
            }}
            additionalInfo={(
              <Group gap={4}>
                <Text fw={600}>Читать о проекте в кейсах</Text>
                <Group wrap='nowrap' gap={4}>
                  <Text fw={600}>компании</Text>
                  <ActionIcon
                    variant='transparent'
                    component='a'
                    href='https://intabia.ru/cases/whoosh-mos-transport'
                    color='deepBlue.5'
                    mt='auto'
                    target='_blank'
                  >
                    <IconExternalLink />
                  </ActionIcon>
                </Group>
              </Group>
            )}
            description={(
              <Stack gap='xs'>
              </Stack>
            )}
          />
          <Project
            name='Мосбиржа'
            link='https://www.moex.com/'
            subtitle='Крупнейший российский биржевой холдинг'
            goal=''
            technologies={{
              languages: [],
              uiLibraries: [],
              frameworks: []
            }}
            additionalInfo={(
              <Group gap={4}>
                <Text fw={600}>Читать о проекте в кейсах</Text>
                <Group wrap='nowrap' gap={4}>
                  <Text fw={600}>компании</Text>
                  <ActionIcon
                    variant='transparent'
                    component='a'
                    href='https://intabia.ru/cases/moex-invester-pro'
                    color='deepBlue.5'
                    mt='auto'
                    target='_blank'
                  >
                    <IconExternalLink />
                  </ActionIcon>
                </Group>
              </Group>
            )}
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
                Создание и сопровождение внутреннего сервиса оценки уровня вовлеченности сотрудников в проектную деятельность на основании тайм-репортов:
                - frontend: react, typescript, styled-components, mui
                - backend: typescript, expres.js, интеграция с keycloak, ldap и БД mysql (БД сервиса redmine)
                - публикация на внутренних серверах компании с использованием Docker и CI/CD
              </Stack>
            )}
          />
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
          <Project
            name='Сервис отпусков'
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
        </Stack> */}
      </Flex>
    </Box>
  )
};
