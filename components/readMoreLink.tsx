import { ActionIcon, Group, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

type ReadMoreLink = {
    url: string;
}

export const ReadMoreLink = ({ url }: ReadMoreLink) => {
    return (
        <Group gap={4}>
            <Text fw={500}>Читать о проекте в кейсах</Text>
            <Group wrap='nowrap' gap={4}>
                <Text fw={500}>компании</Text>
                <ActionIcon
                    variant='transparent'
                    component='a'
                    href={url}
                    color='deepBlue.5'
                    mt='auto'
                    target='_blank'
                >
                    <IconExternalLink />
                </ActionIcon>
            </Group>
        </Group>)
}
