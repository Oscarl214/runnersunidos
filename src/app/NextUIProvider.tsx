'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        themes={['light', 'dark', 'runnerunidos']}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
