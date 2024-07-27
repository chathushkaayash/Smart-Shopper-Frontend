import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
  onClick?: () => void;
  checked?: boolean;
}

const AddToCartButton = ({ text, onClick, checked = false }: Props) => {
  return (
    <Button
      variant="outline"
      color={checked ? "white" : "primary"}
      borderColor="#E46C0A"
      height="36px"
      width="160px"
      border="2px"
      borderRadius="5px"
      fontSize="15px"
      fontWeight="bold"
      bg={checked ? "gray" : "#FFFFFF"}
      _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
      _active={{
        bg: "#E46C0A",
        color: "#FFFFFF",
        transform: "scale(0.98)",
        borderColor: "#E46C0A",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default AddToCartButton;
