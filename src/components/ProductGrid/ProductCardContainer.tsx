import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductCardContainer = ({ children }: Props) => {
  return (
    <Box w={260} h={350}>
      {children}
    </Box>
  );
};

export default ProductCardContainer;
