'use client';

import { Anchor, Box, Group, Image, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const Introduce = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <Group>
      <Image
        src={isMobile ? '/KseniaStarkova/KseniaStarkovaSmall.jpeg' : '/KseniaStarkova/KseniaStarkova.png'}
        radius={8}
      />
      <Box>
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
