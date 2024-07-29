import { Button } from "@chakra-ui/react";

type TextButtonProps = {
  text: string;
  onClick: () => void;
};

const TextButton = ({ text, onClick }: TextButtonProps) => {
  return (
    <Button
      type="submit"
      width="full"
      bg="#E9893B"
      mt={10}
      borderRadius={5}
      color={"white"}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default TextButton;
