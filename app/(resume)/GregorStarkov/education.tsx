'use client';

import { Divider, Flex, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { EducationItem, ResumeSection } from 'components';

export const Education = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <ResumeSection
      id='education'
      title='Образование'
      color='white'
      variant='colored'
      backgroundSrc='/GregorStarkov/background-3.png'
    >
      <Divider
        size='lg'
        mt={{ base: 'md', sm: '4vh' }}
        color='gray.5'
        visibleFrom='sm'
      />
      <Flex
        wrap='nowrap'
        align='flex-start'
        gap='xl'
        direction={{ base: 'column', sm: 'row' }}
        mt={{ base: 'xl', sm: 0 }}
        style={({ colors }) =>
          isMobile
            ? {
                borderLeft: `4px solid ${colors.gray[5]}`,
              }
            : {}
        }
      >
        <EducationItem
          institution='МБОУ СОШ 40'
          period='2003-2014'
          education='Среднее полное (11&nbsp;классов)'
          city='Иркутск'
          color='white'
        />
        <EducationItem
          faculty='Факультет информатики, сервиса и рекламы'
          institution='Байкальский государственный университет'
          period='2016-2017'
          name='Менеджмент по общему профилю'
          education='Неоконченное высшее (1&nbsp;курс)'
          city='Иркутск'
          color='white'
        />
        <EducationItem
          institution='GeekBrains'
          period='2018-2019'
          name='iOS разработчик'
          isOnline={true}
          color='white'
        />
        <EducationItem
          institution='SwiftBook'
          period='2018-2019'
          name='iOS разработка приложений'
          isOnline={true}
          color='white'
        />
        <EducationItem
          institution='Udemy'
          period='2019-2020'
          name='iOS Development bootcamp'
          isOnline={true}
          color='white'
        />
      </Flex>
    </ResumeSection>
  );
};
