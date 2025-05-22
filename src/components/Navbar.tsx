'use client';

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import { useThemeContext } from '@/contexts/ThemeContext';
import SoundCloudIcon from '@/components/SoundCloudIcon';

const Navbar: React.FC = () => {
  const { mode } = useThemeContext();

  return (
    <AppBar
      position="static"
      sx={{
        maxWidth: '100%',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 1152,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link
              href="/search"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                lineHeight: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <SoundCloudIcon />

              <Typography
                variant="h4"
                color={mode === 'dark' ? 'primary' : 'white'}
                fontWeight={100}
              >
                Down<strong>SC</strong>
              </Typography>
            </Link>
          </Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
