import { Project } from '@/components/project';
import { ActionIcon, Group, Stack, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

export const FrontendProjects = () => (
  <Stack
    gap='xl'
  // style={isMobile ? { paddingTop: '2vh' } : {}}
  >
    <Project
      name='БКС'
      link='https://lk.bcs.ru/'
      subtitle='Инвестиционная компания'
      goal='Разработка личного кабинета инвестора'
      technologies={{
        all: [
          'React',
          'TypeScript',
          'ReactQuery',
          'StyledComponents',
          'Playwright',
          'yup',
          'Storybook',
        ]
      }}
      additionalInfo={(
        <Group gap={4}>
          <Text fw={500}>Читать о проекте в кейсах</Text>
          <Group wrap='nowrap' gap={4}>
            <Text fw={500}>компании</Text>
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
          Принимала участие в разработке личного кабинета клиента в составе команды заказчика из 7 человек:
          3 Backend-разработчика, Frontend-разработчик, аналитик(со стороны заказчика),
          Product manager(со стороны заказчика), тестировщик.
        </Stack>
      )}
    />
    <Project
      name='WHOOSH'
      link='https://whoosh-bike.ru/'
      subtitle='Сервис кикшеринга и велошеринга'
      goal=''
      technologies={{
        all: [
          'React',
          'TypeScript',
          'ReactQuery',
          'axios',
          'Mantine',
          'yup',
          'Storybook',
          'lingui',
          'Deck.gl',
          'Mapbox',
          'Tanstack',
        ]
      }}
      additionalInfo={(
        <Group gap={4}>
          <Text fw={500}>Читать о проекте в кейсах</Text>
          <Group wrap='nowrap' gap={4}>
            <Text fw={500}>компании</Text>
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
        all: [
          'React',
          'TypeScript',
          'ReactQuery',
          'Tanstack',
          'Recharts',
        ]
      }}
      additionalInfo={(
        <Group gap={4}>
          <Text fw={500}>Читать о проекте в кейсах</Text>
          <Group wrap='nowrap' gap={4}>
            <Text fw={500}>компании</Text>
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
  </Stack>
)
