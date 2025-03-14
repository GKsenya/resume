import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Flex, Image, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import classes from './imgCarousel.module.css';

export type ImgCarouselProps = {
    initialSlide?: number;
    imagesUrls: string[];
    slideSize?: string;
    imgWidth?: string;
    imgHeight?: string;
};

export const ImgCarousel = ({
    initialSlide,
    imagesUrls,
    slideSize,
    imgWidth,
    imgHeight,

}: ImgCarouselProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

    return (
        <Carousel
            loop
            withIndicators
            withControls={isMobile ? false : true}
            initialSlide={initialSlide}
            bg='transparent'
            classNames={{
                indicator: classes.indicator,
                control: classes.control,
                controls: classes.controls,
            }}
            nextControlIcon={<IconChevronRight size='5vw' />}
            previousControlIcon={<IconChevronLeft size='5vw' />}
            slideGap={slideSize && 'md'}
            slideSize={slideSize}
            autoFocus={false}
        >
            {imagesUrls.map((item) => (
                <CarouselSlide key={item}>
                    <Flex
                        justify='center'
                        pb='xl'
                    >
                        <Image
                            src={item}
                            alt={item}
                            w={imgWidth}
                            h={imgHeight}
                        />
                    </Flex>
                </CarouselSlide>
            ))}
        </Carousel>
    );
};