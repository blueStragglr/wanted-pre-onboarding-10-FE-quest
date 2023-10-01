// my-theme.ts
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "#FFC0CB",
    base: "#FF8096",
    accent: "#FF3399",
    background: "#FFFFFF",
    gray: "#808080",
  },
  breakPoints: {
    small: "@media (max-width: 639px)",
    medium: "@media (max-width: 1047px)",
    large: "@media (min-width: 1048px)",
  },
};

export { theme };
