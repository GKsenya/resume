'use client'

import { ActionIcon, Badge, Group, Spoiler, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp, IconExternalLink } from '@tabler/icons-react';
import { ReactElement } from 'react';
import { ProjectImgCarousel } from './projectImgCarousel';

type ProjectProps = {
    name?: string;
    subtitle: string;
    link?: string;
    goal: string;
    architecture?: string;
    technologies?: {
        languages?: string[];
        uiLibraries?: string[];
        frameworks?: string[];
        all?: string[];
    };
    description: ReactElement | string;
    imgUrls?: string[];
    additionalInfo?: ReactElement;
}

const mapToBadge = (array: string[]) => array.map((item) => (
    <Badge color='black' variant='outline' key={item} size='sm'>
        {item}
    </Badge>
))

export const Project = (props: ProjectProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

    return (
        <Stack gap='xs'>
            {props.name && (
                <Stack gap={0}>
                    <Group gap={2} align='center' style={{ wordBreak: 'break-all' }}>
                        <Title order={isMobile ? 4 : 3} fw={500}>
                            {props.name}&nbsp;
                        </Title>
                        {props.link && (
                            <ActionIcon
                                variant='transparent'
                                component='a'
                                href={props.link}
                                color='deepBlue.5'
                                mt='auto'
                                target='_blank'
                            >
                                <IconExternalLink size={40} />
                            </ActionIcon>
                        )}
                    </Group>
                    <Text c='gray.6'>{props.subtitle}</Text>
                </Stack>
            )}
            <Stack gap='xs'>
                <Text fw={300}>
                    <Text fw={500} span>Цель: </Text>
                    {props.goal}
                </Text>
                {props.architecture && (
                    <Text fw={300}>
                        <Text fw={500} span>Архитектура: </Text>
                        {props.architecture}
                    </Text>
                )}
                <Text fw={500}>Используемые технологии:</Text>
                <Stack gap={4}>
                    {props.technologies?.languages?.length ? (
                        <Group gap='xs'>
                            <Text fw={400}>Языки</Text>
                            {mapToBadge(props.technologies.languages)}
                        </Group>
                    ) : null}
                    {props.technologies?.uiLibraries?.length ? (
                        <Group gap='xs'>
                            <Text fw={400}>UI-библиотеки</Text>
                            {mapToBadge(props.technologies.uiLibraries)}
                        </Group>
                    ) : null}
                    {props.technologies?.frameworks?.length ? (
                        <Group gap='xs'>
                            <Text fw={400}>Фреймворки</Text>
                            {mapToBadge(props.technologies.frameworks)}
                        </Group>
                    ) : null}
                    {props.technologies?.all?.length ? (
                        <Group gap='xs'>
                            {mapToBadge(props.technologies.all)}
                        </Group>
                    ) : null}
                </Stack>
                {props.additionalInfo}
            </Stack>
            <Spoiler
                showLabel={(
                    <Group gap={4}>
                        <Text>Подробнее</Text>
                        <IconChevronDown size={16} />
                    </Group>
                )}
                hideLabel={(
                    <Group gap={4}>
                        <Text>Скрыть</Text>
                        <IconChevronUp size={16} />
                    </Group>
                )}
                maxHeight={isMobile ? 80 : 100}
                fw={300}
            >
                {props.description}
            </Spoiler>
            {props.imgUrls && <ProjectImgCarousel imgUrls={props.imgUrls} />}
        </Stack>
    )
}
