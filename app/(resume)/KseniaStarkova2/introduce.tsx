'use client';

import { Anchor, Box, Flex, Group, Image, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const Introduce = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <Group h='100vh' justify='space-evenly'>
      <Flex
        maw={{ base: '35vw', sm: '36vw', lg: '30vw' }}
        mah={{ base: '35vh', sm: 'unset' }}
      >
        <Image
          src={isMobile ? '/KseniaStarkova/KseniaStarkovaSmall.jpeg' : '/KseniaStarkova/KseniaStarkova.png'}
          radius={8}
        />
      </Flex>
      <Box maw={{base: 'unset', sm: '46vw'}}>
        <Title
          fz={{ base: 'h2', sm: 'h1' }}
          lh={{ base: 'h2', sm: 'h1' }}
        >
          Старкова Ксения Сергеевна
        </Title>
        <Text
          fz={{ base: 'md', sm: 'lg' }}
          lh={{ base: 'xs', sm: 'lg' }}
          mt={{ base: 'sm', sm: 'unset' }}
          mb='xl'
        >
          Frontend-разработчик | React
        </Text>

        <Stack
          gap='xs'
          w={{ base: 'unset', sm: '44vw' }}
        >
          <Group>
            <Text
              fw={500}
              span
            >
              Дата рождения
            </Text>
            <Text fw={300}>06 мая 1999 (25 лет)</Text>
          </Group>
          <Group>
            <Text
              fw={500}
              span
            >
              Гражданство
            </Text>
            <Text fw={300}>Российская Федерация</Text>
          </Group>
          <Group>
            <Text
              fw={500}
              span
            >
              Место проживания
            </Text>
            <Text fw={300}>Россия, г. Иркутск</Text>
          </Group>
          <Group>
            <Text
              fw={500}
              span
            >
              Email
            </Text>
            <Anchor
              fw={300}
              c='black'
              href='mailto:starkova_k.s@mail.ru'
            >
              starkova_k.s@mail.ru
            </Anchor>
          </Group>
          <Group>
            <Text
              fw={500}
              span
            >
              Телефон
            </Text>
            <Anchor
              fw={300}
              c='black'
              href='tel:89133808958'
            >
              +7-913-380-89-58
            </Anchor>
          </Group>
          <Group>
            <Text
              fw={500}
              span
            >
              Telegram
            </Text>
            <Anchor
              fw={300}
              c='black'
              href='https://t.me/StarkovaKsenya'
              target='_blank'
            >
              @StarkovaKsenya
            </Anchor>
          </Group>
        </Stack>
      </Box>
    </Group>
  );
};
