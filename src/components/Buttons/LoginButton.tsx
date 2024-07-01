import { Button, Image, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  text: string | { base?: string; sm?: string; md?: string; lg?: string };
  image?: string;
  width?: string;
  color?: string;
}

const LoginButton = ({ text, image, width, color }: Props) => {
  const buttonText = typeof text === "string" ? text : useBreakpointValue(text);

  return (
    <Button
      width={width || "full"}
      marginY={3}
      gap={2}
      //   boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      //     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
      border="1px solid #E2E8F0"
      boxShadow="md"
      padding={5}
      rounded="md"
      bg={color || "white"}
      color={color ? "white" : "black"}
    >
      <Image src={image} height={26} />
      {buttonText}
    </Button>
  );
};

export default LoginButton;
