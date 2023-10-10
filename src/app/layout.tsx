import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Container } from '@mui/material';
import { Providers } from '@/redux/provider';

export const metadata = {
  title: 'UpToDo',
  description: 'Simple todo application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <ThemeRegistry>
            <Container component='main' maxWidth='xs' sx={{ height: '100vh' }}>
              {children}
            </Container>
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
