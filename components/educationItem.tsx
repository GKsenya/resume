import { Badge, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';

type EducationItemProps = {
    name?: string;
    education?: string;
    faculty?: string;
    institution: string;
    period: string;
    city?: string;
    isOnline?: boolean
}

export const EducationItem = (props: EducationItemProps) => (
    <Flex
        flex={1}
        direction={{ base: 'row', sm: 'column' }}
        ml={{ base: '-12px', sm: 'unset' }}
    >
        <Badge
            circle
            size='md'
            color='gray.5'
            variant='white'
            style={{ border: `4px solid ` }}
            mb='lg'
            mr={{ base: 'md', sm: 'unset' }}
            mt={{ base: 0, sm: '-12px' }}
        />
        <Stack gap={4}>
            <Title order={5}>{props.institution}</Title>
            <Text fw={600} c='gray.5'>{props.period}</Text>
            {props.name && (
                <Text fz='sm' lh='xs'>{props.name}</Text>
            )}
            {props.faculty && (
                <Text fz='sm' lh='xs'>{props.faculty}</Text>
            )}
            {props.education && (
                <Text fz='sm' lh='xs'>{props.education}</Text>
            )}
            {props.city && (
                <Group gap={4} c='gray.5'>
                    <IconMapPin fontWeight={200} size={20} />
                    <Text fz='sm'>{props.city}</Text>
                </Group>
            )}
            {props.isOnline && (
                <Text c='gray.5' fz='sm'>Online</Text>
            )}
        </Stack>
    </Flex>
)
