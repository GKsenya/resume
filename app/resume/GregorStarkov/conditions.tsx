import { BackgroundImage, Box, Group, rgba, Stack, Text } from '@mantine/core';
import { Title } from './components/title';

export const WorkingConditions = () => (
  <BackgroundImage
    src='/background_map.png'
    bga={{ sm: 'fixed' }}
    id='conditions'
  >
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      bg={rgba('dark.8', 0.8)}
      c='white'
    >
      <Title label='Условия работы' />
      <Stack gap='xs' mt={{ base: 'md', sm: 'xl' }} >
        <Group>
          <Text fw={500} span>Уровень зарплаты:</Text>
          <Text fw={300}>250 000₽</Text>
        </Group>
        <Group>
          <Text fw={500} span>Занятость:</Text>
          <Text fw={300}>Полная</Text>
        </Group>
        <Group wrap='nowrap' align='start'>
          <Text fw={500} span>График работы:</Text>
          <Text fw={300}>Удаленная работа</Text>
        </Group>
        <Group>
          <Text fw={500} span>Готовность к переезду:</Text>
          <Text fw={300}>Новосибирск</Text>
        </Group>
      </Stack>
    </Box>
  </BackgroundImage>
)
