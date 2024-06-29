import { Button, Image, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  text: string | { base?: string; sm?: string; md?: string; lg?: string };
  image: string;
}

const LoginButton = ({ text, image }: Props) => {
  const buttonText = typeof text === "string" ? text : useBreakpointValue(text);

  return (
    <Button
      width="full"
      marginY={3}
      gap={2}
      //   boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      //     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
      border="1px solid #E2E8F0"
      boxShadow="md"
      padding={5}
      rounded="md"
      bg="white"
    >
      <Image src={image} height={26} />
      {buttonText}
    </Button>
  );
};

export default LoginButton;
