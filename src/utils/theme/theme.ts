import { createTheme } from '@mui/material/styles';

const light = createTheme({
  palette: {
    primary: {
      main: '#f6f5fa',
      light: '#ffffff',
      dark: '#f5f4f9',
      contrastText: '#fefefe',
    },
    secondary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
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
      default: '#ffffff',
      paper: 'rgba(225, 225, 225, 0.5)',
    },
    divider: '#e0e0e0',
    action: {
      active: '#000000',
      hover: '#e3f2fd',
      selected: '#bbdefb',
      disabled: '#9e9e9e',
      disabledBackground: '#e0e0e0',
    },
  },
});

export default light;
