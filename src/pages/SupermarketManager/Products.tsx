import ProductsTable from "@/pages/SupermarketManager/ProductTable/SupermarketManagerProductTable";
import { Box, Text } from "@chakra-ui/react";

const ProductDetails = () => {
  return (
    <>
      <Box
        p={10}
        bg={"white"}
        borderRadius={15}
        overflow="hidden"
        boxShadow="md"
        borderWidth={2}
        m="5vw"
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
