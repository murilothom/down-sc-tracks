import { createTheme, ThemeOptions } from '@mui/material/styles';
import { lightPalette, darkPalette, typographyOptions } from './themeTokens';

export const getAppTheme = (mode: 'light' | 'dark') => {
  const palette = mode === 'light' ? lightPalette : darkPalette;

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      ...palette,
    },
    typography: typographyOptions,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*::selection': {
            backgroundColor: 'rgba(255, 85, 0, 0.8)',
          },
          '*::-moz-selection': {
            backgroundColor: 'rgba(255, 85, 0, 0.8)',
          },
          'input::selection, textarea::selection': {
            backgroundColor: 'rgba(255, 85, 0, 0.8) !important',
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
