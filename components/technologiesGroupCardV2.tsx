'use client';

import { Card, FlexProps, Group, List, ListItem, Title } from '@mantine/core';
import { ReactElement } from 'react';

type TechnologiesGroupProps = {
  icon?: ReactElement;
  name: string;
  technologies: string[];
  direction?: FlexProps['direction'];
};

export const TechnologiesGroupCardV2 = (props: TechnologiesGroupProps) => {
  const mapToBadge = (array: string[]) => array.map((item) => <ListItem key={item}>{item}</ListItem>);

  return (
    <Card
      radius='lg'
      h='100%'
      shadow='xs'
    >
      {props.icon ? (
        <Group mb='sm' wrap='nowrap'>
          {props.icon}
          <Title
            order={5}
            fw={700}
          >
            {props.name}
          </Title>
        </Group>
      ) : (
        <Title
          order={5}
          mb='sm'
          fw={600}
        >
          {props.name}
        </Title>
      )}
      <List
        size='xs'
        withPadding
      >
        {mapToBadge(props.technologies)}
      </List>
    </Card>
  );
};
