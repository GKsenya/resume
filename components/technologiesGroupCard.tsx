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
        variant='dot'
        color='gray'
        c='dark'
      >
        {item}
      </Badge>
    ));

  return (
    <Card radius='lg' h='100%'>
      <Title order={5} mb='md' fw={600}>{props.name}</Title>
      <Flex
        direction='column'
        wrap='wrap'
        gap='xs'
      >
        {mapToBadge(props.technologies)}
      </Flex>
    </Card>
  );
};
