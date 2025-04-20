import { PersonCard } from '@/components/personCard';
import { BackgroundImage, Center, rgba, Stack } from '@mantine/core';
import { Status } from 'types/status';


export default function Home() {
  return (
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
            status={Status.LOOKING_FOR_WORK}
            photoUrl='/KseniaStarkova/KseniaStarkovaXSmall.jpeg'
            pageUrl='/KseniaStarkova'
          />
        </Stack>
      </Center>
    </BackgroundImage>
  );
}
