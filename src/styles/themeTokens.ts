import { PaletteOptions, TypographyVariantsOptions } from '@mui/material/styles';

export const lightPalette: PaletteOptions = {
  primary: {
    main: '#FF5500',
    light: '#FF7A29',
    dark: '#E64E00',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#1E1E1E',
    light: '#424242',
    dark: '#000000',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#D32F2F',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#FFA000',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#0288D1',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#2E7D32',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
  },
};

export const darkPalette: PaletteOptions = {
  primary: {
    main: '#FF5500',
    light: '#FF7A29',
    dark: '#E64E00',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#E0E0E0',
    light: '#FFFFFF',
    dark: '#BDBDBD',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: '#EF5350',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#FFCA28',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#29B6F6',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#66BB6A',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#121212',
    paper: '#1E1E1E',
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.7)',
  },
};

export const typographyOptions: TypographyVariantsOptions = {
  fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontSize: '3rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 300,
    lineHeight: 1.3,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: 1.375,
    letterSpacing: '0em',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
};
