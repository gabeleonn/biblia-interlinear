import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    grey: {
      50: '#E1E1E1',
      100: '#CFCFCF',
      200: '#B1B1B1',
      300: '#9E9E9E',
      400: '#7E7E7E',
      500: '#626262',
      600: '#515151',
      700: '#3B3B3B',
      800: '#222222',
      900: '#161616',
    },
    purple: {
      500: '#8257e6',
      900: '#572db8',
    },
  },
  fontSize: {
    small: '12px',
    normal: '22px',
    big: '32px',
  },
  fontFamily: {
    normal: 'sans-serif',
    text: 'serif',
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
