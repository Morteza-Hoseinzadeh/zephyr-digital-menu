import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#21322c',
      light: '#021d14',
      dark: '#011d14',
      contrastText: '#ad8d54',
    },
    secondary: {
      main: '#ad8d54',
      light: '#20312b',
      dark: '#051610',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#ad8d54',
      secondary: '#20312b',
      disabled: '#051610',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#000000',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#ffffff',
    },
    success: {
      main: '#388e3c',
      light: '#66bb6a',
      dark: '#2e7d32',
      contrastText: '#ffffff',
    },
    background: {
      default: '#011d14',
      paper: '#21322c',
    },
    divider: '#20312b',
    action: {
      active: '#ad8d54',
      hover: '#20312b',
      selected: '#051610',
      disabled: '#9e9e9e',
      disabledBackground: '#e0e0e0',
    },
  },
});

export default theme;
