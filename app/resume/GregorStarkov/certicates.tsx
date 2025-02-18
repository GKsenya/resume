'use client';

import { Box, Group, Image, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ImgCarousel } from './components/imgCarousel';
import { ImgCarouselModal } from './components/imgCarouselModal';
import { Title } from './components/title';

const certNames = ['/cert-1.jpg', '/cert-2.jpg', '/cert-3.jpg'];

export const Certificates = () => {
    const [openedCertIndex, setOpenedCertIndex] = useState<number | undefined>(undefined);
    const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

    return (
        <Box
            bg='white'
            px={{ sm: '6vw', lg: '10vw' }}
            py={{ base: '6vh', lg: '10vh' }}
            id='certificates'
        >
            <Box ml={{ base: '6vw', sm: 'unset' }}>
                <Title label='Сертификаты' />
            </Box>
            <ImgCarouselModal
                initialSlide={openedCertIndex}
                imagesUrls={certNames}
                imgWidth='60vw'
                opened={openedCertIndex !== undefined}
                onClose={() => setOpenedCertIndex(undefined)}
                modalSize='70vw'
                visibleFrom='sm'
            />
            <Group
                mt='xl'
                gap='md'
                justify='space-between'
                visibleFrom='sm'
            >
                {certNames.map((item, index) => (
                    <Image
                        key={item}
                        maw='25vw'
                        src={item}
                        onClick={() => setOpenedCertIndex(index)}
                        style={{ cursor: 'pointer' }}
                        alt={item}
                    />
                ))}
            </Group>

            <Box hiddenFrom='sm' mt='md'>
                <ImgCarousel
                    imagesUrls={certNames}
                    slideSize={isMobile ? '85%' : undefined}
                />
            </Box>
        </Box>
    );
};
