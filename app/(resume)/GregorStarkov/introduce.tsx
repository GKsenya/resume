'use client';

import { Anchor, Box, Container, Flex, Group, Image, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconGitlab } from 'components/icons/gitlab';
import { getPeriod, periodFormatter } from 'utils';

export const Introduce = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
  const age = periodFormatter(getPeriod('1996-05-02'), { yearsOnly: true });
  return (
    <Container
      size='responsive'
      pos='relative'
      w={{ base: '86vw', lg: '76vw', xl: '1000px' }}
      px={0}
      mb='xl'
    >
      <Flex
        id='introduce'
        pt='80px'
        justify={{ base: 'space-between', sm: 'flex-start' }}
        align={{ base: 'center', sm: 'flex-end' }}
        direction='row'
        h={{ base: '400px', xs: '480px', sm: '340px', md: '318px' }}
      >
        <Box w={{ base: '44%' }}>
          <Title
            fz={{ base: 'h2', sm: 'h1' }}
            lh={{ base: 'h2', sm: 'h1' }}
            fw={600}
            c='deepBlue2.3'
          >
            Старков Георгий Алексеевич
          </Title>
          <Text
            fz={{ base: 'md', sm: 'lg' }}
            lh={{ base: 'xs', sm: 'lg' }}
            mt={{ base: 'sm', sm: 'unset' }}
          >
            Программист-разработчик iOS приложений
          </Text>
        </Box>
        <Flex
          maw={{ base: '35vw', lg: '410px' }}
          mah={{ base: '300px', sm: 'unset', lg: '548px' }}
          right={{ base: '0' }}
          style={isMobile ? {} : { top: '200px' }}
          pos={{ base: 'unset', sm: 'absolute' }}
        >
          <Image
            src={isMobile ? '/GregorStarkov/GregorStarkovSmall.jpeg' : '/GregorStarkov/GregorStarkov.png'}
            radius={8}
          />
        </Flex>
      </Flex>
      <Box h={{ base: 'auto', md: 'unset' }}>
        <Flex
          pt={{ base: '0', sm: '40px' }}
          pb={{ base: '40px', md: '120px' }}
          direction='column'
          gap='xl'
        >
          <Stack gap='xs'>
            <Group wrap='nowrap'>
              <Text fw={500} span>
                Дата рождения
              </Text>
              <Text fw={300}>02 мая 1996 ({age})</Text>
            </Group>
            <Group wrap='nowrap'>
              <Text fw={500} span>
                Гражданство
              </Text>
              <Text fw={300}>Российская Федерация</Text>
            </Group>
            <Group wrap={'nowrap'}>
              <Text fw={500} span>
                Место проживания
              </Text>
              <Text fw={300}>Россия, г. Иркутск</Text>
            </Group>
            <Group wrap='nowrap'>
              <Text fw={500} span>
                Занятость
              </Text>
              <Text fw={300}>Полная</Text>
            </Group>
            <Group
              wrap='nowrap'
              align='start'
            >
              <Text fw={500} span>
                Тип занятости
              </Text>
              <Text fw={300}>Удаленная работа</Text>
            </Group>
            <Group wrap='nowrap'>
              <Text fw={500} span>
                Готовность к переезду
              </Text>
              <Text fw={300}>Новосибирск</Text>
            </Group>
          </Stack>
          <Stack gap='xs'>
            <Group wrap='nowrap'>
              <Text fw={500} span>
                Телефон
              </Text>
              <Anchor
                underline='always'
                fw={300}
                c='black'
                href='tel:89148739332'
              >
                +7-914-873-93-32
              </Anchor>
            </Group>
            <Group wrap='nowrap'>
              <Text fw={500} span>
                Telegram
              </Text>
              <Anchor
                underline='always'
                fw={300}
                c='black'
                href='https://t.me/StarkovGeorgiy'
                target='_blank'
              >
                @StarkovGeorgiy
              </Anchor>
            </Group>
            <Group wrap='nowrap'>
              <Text fw={500} span>
                Email
              </Text>
              <Anchor
                underline='always'
                fw={300}
                c='black'
                href='mailto:stgregor1@icloud.com'
              >
                stgregor1@icloud.com
              </Anchor>
            </Group>
            <Group wrap='nowrap'>
              <Group gap='xs'>
                <Flex w='20px'>
                  <IconGitlab />
                </Flex>
                <Text fw={500} span>
                  GitLab
                </Text>
              </Group>
              <Anchor
                underline='always'
                fw={300}
                c='black'
                href='https://gitlab.com/starkov-georgiy'
                target='_blank'
              >
                starkov-georgiy
              </Anchor>
            </Group>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};
