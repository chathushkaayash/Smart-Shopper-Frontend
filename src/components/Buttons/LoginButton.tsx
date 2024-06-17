import { Button, Image } from "@chakra-ui/react";

interface Props {
  text: string;
  image: string;
}

const LoginButton = ({ text, image }: Props) => {
  return (
    <Button
      width="full"
      marginY={3}
      gap={2}
      //   boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      //     rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
      boxShadow="md"
      padding={6}
      rounded="md"
      bg="white"
    >
      <Image src={image} height={26} />
      {text}
    </Button>
  );
};


export default LoginButton;
