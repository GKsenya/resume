import { Anchor, Group, Text } from '@mantine/core';
import { ReactElement } from 'react';

type InfoItemProps = {
  name: string,
  value: string | ReactElement;
  href?: string;
}

export const InformationItem = ({ name, value, href }: InfoItemProps) => {
  return (
    <Group>
      <Text fw={500} span>
        {name}
      </Text>
      {href ? (
        <Anchor
          fw={300}
          c='black'
          href={href}
          underline='always'
          target='_blank'
        >
          {value}
        </Anchor>
      ) : (
        <Text fw={300}>{value}</Text>
      )}
    </Group>);
}