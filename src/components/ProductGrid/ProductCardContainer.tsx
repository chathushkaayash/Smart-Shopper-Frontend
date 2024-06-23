import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const ProductCardContainer = ({ children,className }: Props) => {
  return (
    <Box h='clamp(350px,350px,350px)' w='clamp(250px,250px,250px)' className={className}>
      {children}
    </Box>
  );
};

export default ProductCardContainer;
