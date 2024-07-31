import { Button } from "@chakra-ui/react";

type TextButtonProps = {
  text: string;
  hoverColor?: string;
  onClick: () => void;
};

const TextButton = ({ text, hoverColor, onClick }: TextButtonProps) => {
  console.log(hoverColor);
  return (
    <Button
      type="submit"
      width="full"
      bg="#E9893B"
      mt={10}
      borderRadius={5}
      color={"white"}
      onClick={onClick}
      _hover={{ bg: hoverColor, color: "white" }}
    >
      {text}
    </Button>
  );
};

export default TextButton;
