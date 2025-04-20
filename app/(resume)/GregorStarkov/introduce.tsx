'use client'

import {
  Anchor,
  BackgroundImage,
  Box,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
  em,
  rgba
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const Introduce = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <Box pos='relative'>
      <BackgroundImage
        src='/GregorStarkov/background_macbook_coding.jpg'
        bgp={{ sm: '0 -50vh' }}
        bga={{ sm: 'fixed' }}
        bgsz='cover'
        h={{ base: '48vh', sm: '50vh' }}
      >
        {/* <Button
          component='a'
          href='/СтарковГА_iOS-разработчик.pdf'
          download='СтарковГА_iOS-разработчик.pdf'
          color='white'
          variant='outline'
          pos='absolute'
          top={{base: '8vh', sm: '2vh'}}
          right='2vw'
          rightSection={<IconDownload size={16} />}
        >
          Скачать
        </Button> */}
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
              src={
                isMobile ?
                  '/GregorStarkov/GregorStarkovSmall.jpeg' :
                  '/GregorStarkov/GregorStarkov.png'
              }
              radius={8}
            />
          </Flex>
          <Box w={{ base: '45vw', sm: '44vw' }}>
            <Title
              fz={{ base: "h2", sm: 'h1' }}
              lh={{ base: "h2", sm: 'h1' }}
            >
              Старков Георгий Алексеевич
            </Title>
            <Text
              fz={{ base: 'md', sm: 'lg' }}
              lh={{ base: 'xs', sm: 'lg' }}
              mt={{ base: 'sm', sm: "unset" }}
            >
              Программист-разработчик iOS приложений
            </Text>
          </Box>
        </Flex>
      </BackgroundImage>

      <Flex
        bg='white'
        pt='lg'
        h={{ base: 'auto', sm: '50vh' }}
        px={{ lg: '10vw', base: '6vw' }}
        justify={{ base: 'flex-start', sm: 'flex-end' }}
        py={{ base: '6vh', sm: 'lg' }}
      >
        <Stack gap='xs' w={{ base: 'unset', sm: '44vw' }}>
          <Group>
            <Text fw={500} span>Дата рождения</Text>
            <Text fw={300}>02 мая 1996 (28 лет)</Text>
          </Group>
          <Group>
            <Text fw={500} span>Гражданство</Text>
            <Text fw={300}>Российская Федерация</Text>
          </Group>
          <Group>
            <Text fw={500} span>Место проживания</Text>
            <Text fw={300}>Россия, г. Иркутск</Text>
          </Group>
          <Group>
            <Text fw={500} span>Email</Text>
            <Anchor
              fw={300}
              c='black'
              href='mailto:stgregor1@icloud.com'
            >
              stgregor1@icloud.com
            </Anchor>
          </Group>
          <Group>
            <Text fw={500} span>Телефон</Text>
            <Anchor
              fw={300}
              c='black'
              href='tel:89148739332'
            >
              +7-914-873-93-32
            </Anchor>
          </Group>
          <Group>
            <Text fw={500} span>Telegram</Text>
            <Anchor
              fw={300}
              c='black'
              href='https://t.me/StarkovGeorgiy'
              target='_blank'
            >
              @StarkovGeorgiy
            </Anchor>
          </Group>
        </Stack>
      </Flex>
    </Box>
  )
};
