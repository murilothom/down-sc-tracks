'use client';
import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { mode, toggle } = useThemeContext();
  const theme = useTheme();

  return (
    <IconButton onClick={toggle} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
