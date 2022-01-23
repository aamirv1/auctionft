import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "0",
  sm: "600px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
});

export const colors = {
  primary: "#6c2024",
  secondary: "#FEDE5A",
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
  breakpoints,
});
