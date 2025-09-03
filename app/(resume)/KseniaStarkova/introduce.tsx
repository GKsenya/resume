'use client';

import { Anchor, BackgroundImage, Box, Flex, Group, Image, Stack, Text, Title, em, rgba } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const Introduce = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <Box pos='relative'>
      <BackgroundImage
        src='/KseniaStarkova/background_macbook_coding.jpg'
        bgp={{ sm: '0 -50vh' }}
        bga={{ sm: 'fixed' }}
        bgsz='cover'
        h={{ base: '45vh', sm: '50vh' }}
      >
        <Flex
          pb='lg'
          c='white'
          h='inherit'
          id='introduce'
          bg={rgba('dark.8', 0.6)}
          pt={{ base: '4vh', sm: 'unset' }}
          px={{ lg: '10vw', base: '6vw' }}
          justify={{ base: 'space-between', sm: 'flex-end' }}
          align={{ base: 'center', sm: 'flex-end' }}
          direction={{ base: 'row', sm: 'row' }}
        >
          <Flex
            maw={{ base: '35vw', sm: '36vw', lg: '30vw' }}
            mah={{ base: '35vh', sm: 'unset' }}
            left={{ base: '0', sm: '6vw', lg: '10vw' }}
            style={isMobile ? {} : { top: '50%', transform: 'translateY(-50%)' }}
            pos={{ base: 'unset', sm: 'absolute' }}
          >
            <Image
              src={isMobile ? '/KseniaStarkova/KseniaStarkovaSmall.jpeg' : '/KseniaStarkova/KseniaStarkova.png'}
              radius={8}
            />
          </Flex>
          <Box w={{ base: '45vw', sm: '44vw' }}>
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
          </Box>
        </Flex>
      </BackgroundImage>

      <Flex
        h={{ base: 'auto', sm: '50vh' }}
        px={{ lg: '10vw', base: '6vw' }}
        justify={{ base: 'flex-start', sm: 'flex-end' }}
        py={{ base: '5vh', sm: 'lg' }}
      >
        <Stack
          gap='xs'
          w={{ base: 'unset', sm: '44vw' }}
        >
          <Group>
            <Text fw={500} span>
              Дата рождения
            </Text>
            <Text fw={300}>06 мая 1999 (26 лет)</Text>
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
              underline='always'
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
              underline='always'
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
              underline='always'
              target='_blank'
            >
              @StarkovaKsenya
            </Anchor>
          </Group>
        </Stack>
      </Flex>
    </Box>
  );
};
