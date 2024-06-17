import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  // change body background color based on color mode
  // styles: {
  //   global: (props: StyleFunctionProps) => ({
  //     body: {
  //       bg: props.colorMode === "dark" ? "gray.800" : "#EFF2F6",
  //     },
  //   }),
  // },
  colors: {
    primary: "#E46C0A",
    secondary: "#E9893B",
    background: "#EFF2F6",
    // gray: {
    //   50: "#f9f9f9",
    //   100: "#ededed",
    //   200: "#d3d3d3",
    //   300: "#b3b3b3",
    //   400: "#a0a0a0",
    //   500: "#898989",
    //   600: "#6c6c6c",
    //   700: "#202020",
    //   800: "#121212",
    //   900: "#111",
    // },
  },
});

export default theme;
