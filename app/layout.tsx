import '@mantine/carousel/styles.css';
import { MantineProvider, mantineHtmlProps } from '@mantine/core';
import "@mantine/core/styles.css";
import type { Metadata } from 'next';
import { theme } from '../theme';

export const metadata: Metadata = {
  title: 'Старков Георгий | ios-разработчик',
  description: '',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps} style={{ scrollbarWidth: 'none' }}>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
