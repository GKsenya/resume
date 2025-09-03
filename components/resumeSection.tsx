import { BackgroundImage, Box, BoxProps, DefaultMantineColor } from '@mantine/core';
import { Title } from 'components';
import { ReactNode } from 'react';

type ResumeSectionProps = {
  title: string;
  id: string;
  variant?: 'underlined' | 'colored';
  color?: DefaultMantineColor;
  children: ReactNode;
  backgroundSrc?: string;
} & BoxProps;

export const ResumeSection = ({ title, children, variant, color, backgroundSrc, id, ...props }: ResumeSectionProps) => (
  <BackgroundImage
    src={backgroundSrc || ''}
    bga={{ sm: 'fixed' }}
    id='conditions'
  >
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '40px', xs: '52px', sm: '64px', md: '80px',  lg: '120px' }}
      bg={backgroundSrc && 'rgba(6, 17, 28, 0.9)'}
      id={id}
      {...props}
    >
      <Title
        label={title}
        color={color}
        variant={variant}
      />
      {children}
    </Box>
  </BackgroundImage>
);
