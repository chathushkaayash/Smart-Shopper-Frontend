import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const ProductCardContainer = ({ children, className }: Props) => {
  return (
    <Box
      h="clamp(350px,350px,350px)"
      w="clamp(250px,250px,250px)"
      _hover={{
        // boxShadow: "0 0 10px 0 primary",
        cursor: "pointer",
        // transform: "scale(1.01)",
      }}
      className={
        "hover:scale-105 transition-transform duration-300 ease-in-out shadow-red-500 " +
        className
      }
    >
      {children}
    </Box>
  );
};

export default ProductCardContainer;
