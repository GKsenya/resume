import { Title } from '@/components/title';
import { Box, Group, Stack, Text } from '@mantine/core';

export const WorkingConditions = () => (
  <Box
    px={{ base: '6vw', lg: '10vw' }}
    py={{ base: '6vh', lg: '10vh' }}
    id='conditions'
  >
    <Title label='Условия работы'  color='indigo' underlined={false}/>
    <Stack gap='xs' mt={{ base: 'md', sm: 'xl' }} >
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
)
