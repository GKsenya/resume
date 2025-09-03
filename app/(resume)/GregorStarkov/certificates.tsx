'use client';

import { BackgroundImage, Box, em, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ImgCarousel, ImgCarouselModal, ResumeSection } from 'components';
import { useState } from 'react';
import classes from './certificates.module.css';

type CertType = {
  name: string,
  year: number,
  source: string,
  description: string,
}

const certs: Record<string, CertType> = {
  '/GregorStarkov/cert-1.jpg': {
    name: 'Основы языка Swift',
    year: 2019,
    source: 'GeekBrains',
    description: '',
  },
  '/GregorStarkov/cert-2.jpg': {
    name: 'Введение в iOS разработку на Swift',
    year: 2020,
    source: 'GeekBrains',
    description: '',
  },
  '/GregorStarkov/cert-3.jpg': {
    name: 'Ускорение iOS-приложений',
    year: 2020,
    source: 'GeekBrains',
    description: '',
  },
  '/GregorStarkov/cert-4.jpg': {
    name: 'Kotlin Multiplatform Masterclass - KMP, KMM - Android, iOS',
    year: 2025,
    source: 'Udemy',
    description: '',
  },
  '/GregorStarkov/cert-5.jpg': {
    name: 'The Complete SQL Bootcamp: Go from Zero to Hero',
    year: 2025,
    source: 'Udemy',
    description: '',
  },
};

export const Certificates = () => {
  const [openedCertIndex, setOpenedCertIndex] = useState<number | undefined>(undefined);
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <ResumeSection
      id='certificates'
      title='Сертификаты'
      color='deepBlue2.3'
      variant='colored'
    >
      <ImgCarouselModal
        initialSlide={openedCertIndex}
        imagesUrls={Object.keys(certs)}
        imgWidth='60vw'
        opened={openedCertIndex !== undefined}
        onClose={() => setOpenedCertIndex(undefined)}
        modalSize='70vw'
        visibleFrom='sm'
      />
      <SimpleGrid
        mt='xl'
        visibleFrom='sm'
        cols={{ base: 1, xs: 2, md: 3, xl: 5 }}
      >
        {Object.keys(certs).map((item, index) => {
          const certData = certs[item];
          return (
            <Paper
              onClick={() => setOpenedCertIndex(index)}
              classNames={{ root: classes.root }}
              key={item}
              radius='lg'
            >
              <BackgroundImage
                src={item}
                h='100%'
              >
                <Stack
                  h='100%'
                  bg='rgba(6, 17, 28, 0.9)'
                  p={{ base: 'md', sm: 'xl' }}
                  c='gray.0'
                  justify='space-between'
                >
                  <Title order={4} fw={800}>
                    {certData.name}
                  </Title>
                  <Stack gap={0}>
                    <Text c='gray.3' fw={600}>{certData.year}</Text>
                    <Text fw={600}>{certData.source}</Text>
                  </Stack>
                </Stack>
              </BackgroundImage>
            </Paper>
          )
        })}
      </SimpleGrid>
      <Box
        hiddenFrom='sm'
        mt='md'
      >
        <ImgCarousel
          imagesUrls={Object.keys(certs)}
          slideSize={isMobile ? '85%' : undefined}
        />
      </Box>
    </ResumeSection>
  );
};
