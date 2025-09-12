'use client';

import { BackgroundImage, Center, rgba, Stack } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersonCard } from 'components';
import dayjs from 'dayjs';
import { Status } from 'types/status';
require('dayjs/locale/ru');

dayjs.locale('ru');

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundImage
        src='/GregorStarkov/background_macbook_coding.jpg'
        bga={{ sm: 'fixed' }}
        bgsz='cover'
        h='100vh'
      >
        <Center
          c='white'
          h='inherit'
          id='introduce'
          bg={rgba('dark.8', 0.6)}
        >
          <Stack gap='xl'>
            <PersonCard
              name='Старков Георгий Алексеевич'
              position='iOS-разработчик'
              status={Status.LOOKING_FOR_WORK}
              photoUrl='/GregorStarkov/GregorStarkovXSmall.jpeg'
              pageUrl='/GregorStarkov'
            />
            <PersonCard
              name='Старкова Ксения Сергеевна'
              position='Frontend-разработчик | React'
              status={Status.CONSIDERING_OFFERS}
              photoUrl='/KseniaStarkova/KseniaStarkovaXSmall.jpeg'
              pageUrl='/KseniaStarkova'
            />
          </Stack>
        </Center>
      </BackgroundImage>
    </QueryClientProvider>
  );
}
