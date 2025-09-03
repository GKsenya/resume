import { DefaultMantineColor, Divider, Title as MantineTitle, TitleProps as MantineTitleProps } from '@mantine/core';
import { Fragment } from 'react';

type TitleProps = {
  label: string;
  color?: DefaultMantineColor;
  variant?: 'underlined' | 'colored';
} & MantineTitleProps;

export const Title = ({ label, variant = 'underlined', color, ...props }: TitleProps) => (
  <Fragment>
    <MantineTitle
      order={2}
      pb='sm'
      c={variant === 'underlined' ? undefined : color}
      fw={variant === 'underlined' ? undefined : 600}
      {...props}
    >
      {label}
    </MantineTitle>
    {variant === 'underlined' && (
      <Divider
        size='lg'
        w={80}
        color={color}
      />
    )}
  </Fragment>
);
