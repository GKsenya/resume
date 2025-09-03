'use client'

import { Avatar, Group, Paper, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ReactElement } from 'react';

type FeedbackCardProps = {
    name: string;
    position: string | string[];
    text?: string[];
    content?: ReactElement;
    photoUrl?: string;
}

export const FeedbackCard = (props: FeedbackCardProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
    const positions = typeof props.position === 'string' ? [props.position] : props.position;
    return (
        <Paper p={{ base: 'md', sm: 'xl' }} radius='lg'>
            <Group
                wrap='nowrap'
                h={{ base: 'auto', md: 102 }}
                gap={isMobile ? 'md' : 'lg'}
                mb={isMobile ? 'md' : 'lg'}
            >
                {props.photoUrl && (
                    <Avatar src={props.photoUrl} size={isMobile ? 80 : 102} />
                )}
                <Stack gap={4}>
                    <Title order={4}>{props.name}</Title>
                    <Stack gap={0}>
                        {positions.map((item) => (
                            <Text
                                c='gray.6'
                                lh='xs'
                                fz={{ base: 'xs', sm: 'sm' }}
                                key={item}
                            >
                                {item}
                            </Text>
                        ))}
                    </Stack>
                </Stack>
            </Group>
            {props.content && (
                <Stack gap={8}>{props.content}</Stack>
            )}
            {props.text && (
                <Stack mt='lg' gap={8}>
                    {props.text.map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}
                </Stack>
            )}
        </Paper>
    )
}