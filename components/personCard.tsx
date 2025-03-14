'use client';

import { Avatar, Badge, em, Group, Paper, Stack, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { Status } from 'types/status';

const statusColor = {
  [Status.LOOKING_FOR_WORK]: 'green.6',
  [Status.CONSIDERING_OFFERS]: 'yellow.6',
  [Status.NOT_LOOKING]: 'gray.6',
};

const statusText = {
  [Status.LOOKING_FOR_WORK]: 'В активном поиске работы',
  [Status.CONSIDERING_OFFERS]: 'Рассматриваю предложения',
  [Status.NOT_LOOKING]: 'Не ищу работу',
};

type PersonCardProps = {
  name: string;
  position: string;
  photoUrl?: string;
  status: Status;
  pageUrl: string;
};

export const PersonCard = (props: PersonCardProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
  const router = useRouter();

  return (
    <Paper
      p={{ base: 'sm', sm: 'lg' }}
      w={{ base: '90vw', lg: '60vw' }}
      radius={8}
      onClick={() => router.push(props.pageUrl)}
      style={{ cursor: 'pointer' }}
    >
      <Group
        wrap='nowrap'
        gap={isMobile ? 'xs' : 'lg'}
      >
        {props.photoUrl && (
          <Avatar
            src={props.photoUrl}
            size={isMobile ? 80 : 160}
            alt={props.name}
            imageProps={{}}
          />
        )}
        <Stack>
          <Stack gap={isMobile ? 0 : 4}>
            <Title
              c='black'
              fz={{ base: 'h4', sm: 'h3' }}
              lh={{ base: 'h4', sm: 'h3' }}
            >
              {props.name}
            </Title>
            <Title
              order={5}
              c='gray.6'
              fz={{ base: 'h6', sm: 'h5' }}
              lh={{ base: 'h6', sm: 'h5' }}
            >
              {props.position}
            </Title>
          </Stack>
          <Badge
            color={statusColor[props.status]}
            variant='light'
            size={isMobile ? 'xs' : 'md'}
          >
            {statusText[props.status]}
          </Badge>
        </Stack>
      </Group>
    </Paper>
  );
};
