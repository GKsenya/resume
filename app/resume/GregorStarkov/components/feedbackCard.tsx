'use client'

import { Avatar, Group, Paper, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type FeedbackCardProps = {
    name: string;
    position: string;
    text: string;
    photoUrl?: string;
}

export const FeedbackCard = (props: FeedbackCardProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

    return (
        <Paper p={{ base: 'md', sm: 'xl' }} radius={8}>
            <Group
                wrap='nowrap'
                h={{ base: 'auto', md: 102 }}
                gap={isMobile ? 'md' : 'xl'}
            >
                {props.photoUrl && (
                    <Avatar src={props.photoUrl} size={isMobile ? 80 : 102} />
                )}
                <Stack gap={4}>
                    <Title order={4}>{props.name}</Title>
                    <Text c='gray.6' lh='xs' fz={{ base: 'xs', sm: 'sm' }}>{props.position}</Text>
                </Stack>
            </Group>
            <Text mt='lg'>{props.text}</Text>
        </Paper>
    )
}