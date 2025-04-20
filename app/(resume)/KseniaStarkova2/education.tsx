'use client'

import { EducationItem } from '@/components/educationItem';
import { Title } from '@/components/title';
import { Box, Divider, Flex, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';


export const Education = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      id='education'
    >
      <Title label='Образование'  color='indigo' underlined={false}/>
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
          institution='МБОУ Гимназия 21'
          period='2006-2017'
          education='Среднее полное (11&nbsp;классов)'
          city='Кемерово'
        />
        <EducationItem
          faculty='Экономический факультет'
          institution='Новосибирский государственный университет'
          period='2017-2021'
          name='Бизнес-информатика'
          education='Высшее (бакалавриат)'
          city='Новосибирск'
        />
      </Flex>
    </Box>
  )
};
