'use client'

import { ActionIcon, Flex, Group, Stack, Text, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink, IconMapPin } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { Company } from 'types';
import { getPeriod, periodFormatter } from 'utils';

type CompanyCardProps = {
    from: string;
    to?: string;
    position: string;
    company: Company;
    number?: number;
}

export const CompanyCard = ({
    from,
    to,
    position,
    company: { name, link, city },
    number,
}: CompanyCardProps) => {
    const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
    const fromTo = `${dayjs(from).format('MM/YYYY')} - ${to ? dayjs(to).format('MM/YYYY') : 'н.в.'}`;
    const period = periodFormatter(getPeriod(from, to));

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
            {number && (
                <Text size='xl' c='gray.5' fw={800}>{number}.</Text>
            )}
            <Flex
                gap={{ base: 'md', sm: 0 }}
                direction={{ base: 'row', sm: 'column' }}
            >
                <Text fw={300} c='gray.6'>{fromTo}</Text>
                <Text fw={300} c='gray.6'>({period})</Text>
            </Flex>
            <Group gap={2} align='center'>
                <Title order={3} fw={300}>{name}</Title>
                {link && (
                    <ActionIcon
                        variant='transparent'
                        component='a'
                        href={link}
                        color='deepBlue.5'
                        mt='auto'
                        target='_blank'
                    >
                        <IconExternalLink size={40} />
                    </ActionIcon>
                )}
            </Group>
            <Text fw={300}>{position}</Text>
            <Group gap={4} c='gray.6'>
                <IconMapPin fontWeight={200} size={24} />
                <Text fw={300}>{city}</Text>
            </Group>
        </Stack>
    )
}