'use client'

import { BackgroundImage, Box, Divider, Flex, em, rgba } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { EducationItem } from './components/educationItem';
import { Title } from './components/title';


export const Education = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <BackgroundImage
      src='/background_code.jpg'
      bga={{ sm: 'fixed' }}
      id='education'
    >
      <Box
        px={{ base: '6vw', lg: '10vw' }}
        py={{ base: '6vh', lg: '10vh' }}
        bg={rgba('dark.8', 0.8)}
        c='white'
      >
        <Title label='Образование' />
        <Divider size='lg' mt={{ base: 'md', sm: 'xl' }} color='gray.5' visibleFrom='sm' />
        <Flex
          wrap='nowrap'
          align='flex-start'
          gap='xl'
          direction={{ base: 'column', sm: 'row' }}
          mt={{ base: 'xl', sm: 0 }}
          style={({ colors }) => (isMobile ? {
            borderLeft: `4px solid ${colors.gray[5]}`,
          } : {})}
        >
          <EducationItem
            institution='МБОУ СОШ 40'
            period='2004-2014'
            education='Среднее полное (11&nbsp;классов)'
            city='Иркутск'
          />
          <EducationItem
            faculty='Факультет информатики, сервиса и рекламы'
            institution='Байкальский государственный университет'
            period='2016-2017'
            name='Менеджмент по общему профилю'
            education='Неоконченное высшее (1&nbsp;курс)'
            city='Иркутск'
          />
          <EducationItem
            institution='GeekBrains'
            period='2018-2019'
            name='iOS разработчик'
            isOnline={true}
          />
          <EducationItem
            institution='SwiftBook'
            period='2018-2019'
            name='iOS разработка приложений'
            isOnline={true}
          />
          <EducationItem
            institution='Udemy'
            period='2019-2020'
            name='iOS Development bootcamp'
            isOnline={true}
          />
        </Flex>
      </Box>
    </BackgroundImage>
  )
};
