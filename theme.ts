// my-theme.ts
import 'styled-components'
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      lightGrey: string;
      white: string;
    };
    spacing: {
      tiny: number;
      small: number;
      medium: number;
      large: number;
    };
  }
}

export const LintellectTheme: DefaultTheme = {
  colors: {
    main: 'rgb(0, 136, 102)',
    lightGrey: 'rgb(162, 162, 162)',
    white: 'white',
  },
  spacing: {
    large: 30,
    medium: 20,
    small: 15,
    tiny: 10,
  },
};
