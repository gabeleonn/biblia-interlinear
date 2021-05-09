import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      purple: {
        500: string;
        900: string;
      };
    };
    fontSize: {
      small: string;
      normal: string;
      big: string;
    };
    fontFamily: {
      normal: string;
      text: string;
    };
  }
}
