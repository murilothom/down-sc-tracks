'use client';
import React, { createContext, useState, useCallback, useContext } from 'react';

type ThemeMode = 'light' | 'dark';
type ThemeContextType = { mode: ThemeMode; toggle: () => void };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  initialMode,
  children,
}: {
  initialMode: ThemeMode;
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('theme', next);
        document.cookie = `theme=${next};path=/;max-age=${60 * 60 * 24 * 365}`;
      } catch {}
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
}
