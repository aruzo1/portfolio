import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      gray: string;
      grayLight: string;
    };
    breakpoints: {
      sm: string;
      md: string;
    };
    borderRadius: string;
    transition: string;
  }
}
