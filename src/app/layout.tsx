import * as React from 'react';
import type { Metadata } from 'next';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Client Coaching Portal',
  description: 'Industrial Strength Coaching',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
