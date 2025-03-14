'use client'

import { ActionIcon, Flex, Group, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink, IconMapPin } from '@tabler/icons-react';

type CompanyCardProps = {
    fromTo: string;
    period: string;
    name: string;
    description?: string;
    position: string;
    link: string;
    city: string;
    number?: number;
}

export const CompanyCard = (props: CompanyCardProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

    return (
        <Stack
            align='flex-start'
            mx={{ base: '-6vw', sm: 0 }}
            px={{ base: '6vw', sm: 0 }}
            py={{ base: '6vw', sm: 0 }}
            miw={{ base: '100vw', sm: 228 }}
            w={{ base: '100vw', sm: 228 }}
            gap={isMobile ? 2 : 'xs'}
        >
            {props.number && (
                <Text size='xl' c='gray.5' fw={800}>{props.number}.</Text>
            )}
            <Flex
                gap={{ base: 'md', sm: 0 }}
                direction={{ base: 'row', sm: 'column' }}
            >
                <Text fw={300} c='gray.6'>{props.fromTo}</Text>
                <Text fw={300} c='gray.6'>({props.period})</Text>
            </Flex>
            <Group gap={2} align='center'>
                <Title order={3} fw={300}>{props.name}</Title>
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
            <Text fw={300}>{props.position}</Text>
            <Group gap={4} c='gray.6'>
                <IconMapPin fontWeight={200} size={24} />
                <Text fw={300}>{props.city}</Text>
            </Group>
        </Stack>
    )
}