'use client';

import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, useThemeContext } from '@/contexts/ThemeContext';
import { getAppTheme } from '@/styles/theme';

interface Props {
  initialMode: 'light' | 'dark';
  children: ReactNode;
}

export default function ClientThemeProvider({ initialMode, children }: Props) {
  return (
    <ThemeProvider initialMode={initialMode}>
      <InnerMuiProvider>{children}</InnerMuiProvider>
    </ThemeProvider>
  );
}

function InnerMuiProvider({ children }: { children: ReactNode }) {
  const { mode } = useThemeContext();
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
