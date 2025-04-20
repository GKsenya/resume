'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  headings: {
    fontWeight: '400',
    sizes: {
      h1: {
        fontSize: rem(48),
        lineHeight: rem(56),
        fontWeight: '500',
      },
      h2: { fontSize: rem(32), lineHeight: rem(36) },
      h3: { fontSize: rem(26), lineHeight: rem(30) },
      h4: { fontSize: rem(22), lineHeight: rem(26) },
      h5: { fontSize: rem(18), lineHeight: rem(22), fontWeight: '500', },
    },
  },
  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.375rem',
  },
  colors: {
    brown: [
      '#fcf4ed',
      '#ede7e1',
      '#d8ccc3',
      '#c3b0a1',
      '#b19885',
      '#a68972',
      '#a18168',
      '#8d6f56',
      '#7f624b',
      '#70533c',
    ],
    lightBrown: [
      '#fbf4ef',
      '#f0e6df',
      '#e4cab8',
      '#d8ac8d',
      '#ce936a',
      '#c88352',
      '#c67a46',
      '#af6837',
      '#9c5c2f',
      '#884e25',
    ],
    deepBlue: [
      '#cce5ff',
      '#99ccff',
      '#66b2ff',
      '#3299ff',
      '#007fff',
      '#0066cc',
      '#004c99',
      '#003366',
      '#06294e',
      '#0a223d',
    ],
    // gray: [
    //   "#f8f9fa",
    //   "#e9ecef",
    //   "#dee2e6",
    //   "#ced4da",
    //   "#adb5bd",
    //   "#6c757d",
    //   "#495057",
    //   "#343a40",
    //   "#2a2f34",
    //   "#212529"
    // ]
  },
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
  },
  components: {
    List: {
      styles: {
        itemLabel: {
          marginRight: '24px',
        },
      },
    },
  },
});
