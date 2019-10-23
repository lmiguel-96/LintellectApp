// import original module declarations
import 'styled-components';

// and extend them!
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
