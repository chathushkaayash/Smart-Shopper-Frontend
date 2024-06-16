import { Button } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

const ActionButton = ({ children, size, inverted = false }: Props) => {
  const primaryColor = inverted ? "primary" : "white";
  const whiteColor = inverted ? "white" : "primary";

  return (
    <Button
      size={size}
      variant="outline"
      color={primaryColor}
      borderColor={primaryColor}
      border="2px"
      borderRadius="10px"
      fontSize="15px"
      fontWeight="bold"
      bg={whiteColor}
      _hover={{ bg: primaryColor, color: whiteColor }}
      _active={{
        bg: primaryColor,
        color: whiteColor,
        transform: "scale(0.98)",
        borderColor: primaryColor,
      }}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
