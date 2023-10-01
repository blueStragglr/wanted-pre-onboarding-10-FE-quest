import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      base: string;
      accent: string;
      background: string;
      gray: string;
    };
    breakPoints: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
