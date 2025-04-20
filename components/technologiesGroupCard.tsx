'use client'

import { Badge, Card, Flex, FlexProps, Title } from '@mantine/core';

type TechnologiesGroupProps = {
  name: string;
  technologies: string[];
  direction?: FlexProps['direction'];
};

export const TechnologiesGroupCard = (props: TechnologiesGroupProps) => {
  const mapToBadge = (array: string[]) =>
    array.map((item) => (
      <Badge
        key={item}
        size='xs'
        variant='light'
        color='gray'
        c='dark'
      >
        {item}
      </Badge>
    ));

  return (
    <Card radius='lg' h='100%'>
      <Title order={4} mb='md'>{props.name}</Title>
      <Flex
        direction='row'
        wrap='wrap'
        gap='xs'
      >
        {mapToBadge(props.technologies)}
      </Flex>
    </Card>
  );
};
