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
    // primary: "#E46C0A",  //Orange
    primary: "#ff7708",  //Orange lightest rgb(255, 119, 8)
    secondary: "#E9893B",  //Light Orange
    // background: "#EFF2F6",  //Light Gray
    background: "#EFF2F6",  //Light Gray
    ready: "#1CD4E0",
    active: "#F3B30E",
  },
});

export default theme;
