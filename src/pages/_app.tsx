import type { AppProps } from 'next/app';
import React, { useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, useThemeContext } from '@/contexts/ThemeContext';
import { getAppTheme } from '@/styles/theme';

function InnerApp({ Component, pageProps }: AppProps) {
  const { mode } = useThemeContext();
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  console.log(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

function AppWithProviders(props: AppProps) {
  const [initialMode] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  return (
    <ThemeProvider initialMode={initialMode}>
      <InnerApp {...props} />
    </ThemeProvider>
  );
}

export default AppWithProviders;
