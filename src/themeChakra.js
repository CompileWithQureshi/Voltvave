


import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // Map your colors to Chakra's default or custom namespaces
    primary: "#4C98EF",
    secondary: "#4C71EF",
    success: "#48bb78",
    black: "#323232",
    gray: "#C1C5CB",
    brand: {
      100: "#4C98EF",
      500: "#4C71EF",
    },
  },
  fontSizes: {
    // Custom font sizes
    heading: "42px",
    title: "24px",
    logo: "18px",
    paragraph: "14px",
  },
  styles: {
    // Global styles for body, headings, etc.
    global: {
      body: {
        bg: "gray.100", // Using Chakra's default grays
        color: "black",
        fontFamily: "Arial, sans-serif",
      },
    },
  },
});

export default theme;
