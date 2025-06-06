'use client'

import { Badge, em, Flex, FlexProps, Group, Text, TextProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type TechnologiesGroupProps = {
  name: string;
  technologies: string[];
  direction?: FlexProps['direction'];
  labelProps?: TextProps;
};

export const TechnologiesGroup = (props: TechnologiesGroupProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  const mapToBadge = (array: string[]) =>
    array.map((item) => (
      <Badge
        color='gray'
        c='dark'
        variant='light'
        key={item}
        size={isMobile ? 'xs' : 'md'}
      >
        {item}
      </Badge>
    ));

  return (
    <Flex
      direction={props.direction || { base: 'column', sm: 'row' }}
      gap={{ base: 0, sm: 'xs' }}
    >
      <Text {...props.labelProps}>{props.name}</Text>
      <Group gap={isMobile ? 4 : 'xs'}>{mapToBadge(props.technologies)}</Group>
    </Flex>
  );
};
