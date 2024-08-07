import ProductsTable from "@/components/ProductsTable";
import { Box, Text } from "@chakra-ui/react";

const ProductDetails = () => {
  return (
    <>
      <Box
        p={3}
        bg={"white"}
        borderRadius={20}
        overflow="hidden"
        boxShadow="md"
        borderWidth={2}
        my={10}
      >
        <Text fontSize="2xl" fontWeight="semibold" mb={4}>
          Product Details
        </Text>
        <ProductsTable />
      </Box>
    </>
  );
};

export default ProductDetails;
