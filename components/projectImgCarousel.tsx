'use client'

import { Group, Image } from '@mantine/core';
import { useState } from 'react';
import { ImgCarouselModal } from './imgCarouselModal';

type ProjectImgCarousel = {
    imgUrls: string[];
}

export const ProjectImgCarousel = (props: ProjectImgCarousel) => {
    const [openedImgIndex, setOpenedImgIndex] = useState<number | undefined>(undefined);

    return (
        <>
            <ImgCarouselModal
                initialSlide={openedImgIndex}
                imagesUrls={props.imgUrls}
                imgHeight='70vh'
                opened={openedImgIndex !== undefined}
                onClose={() => setOpenedImgIndex(undefined)}
            />
            <Group gap='md'>
                {props.imgUrls.map((item, index) => (
                    <Image
                        key={item}
                        src={item}
                        maw={{ base: '11vw', sm: '5vw' }}
                        onClick={() => setOpenedImgIndex(index)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
            </Group>
        </>
    )
}