import { FeedbackCard } from '@/components/feedbackCard';
import { Title } from '@/components/title';
import { BackgroundImage, Box, SimpleGrid, rgba } from '@mantine/core';

export const Feedback = () => (
  <BackgroundImage
    src='/GregorStarkov/background_feedback.jpg'
    bga={{ sm: 'fixed' }}
    id='feedback'
  >
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      bg={rgba('dark.8', 0.7)}
    >
      <Title label='Обратная связь' c='white' />
      <SimpleGrid cols={{ md: 2, base: 1 }} spacing='xl' mt={{ base: 'md', sm: 'xl' }} >
        <FeedbackCard
          name='Поседаева Карина'
          position='HR менеджер OOO&nbsp;"Интабия" (2020-2024)'
          text=''
          photoUrl='/GregorStarkov/KarinaPosedaeva.jpeg'
        />
      </SimpleGrid>
    </Box>
  </BackgroundImage>
)