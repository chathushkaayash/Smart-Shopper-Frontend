import { Box, TableContainer, Tbody, Td, Th, Thead, Tr, Table, Badge, Flex, Text } from "@chakra-ui/react";

interface Product {
  id: number;
  name: string;
  price: number;
  status: string;
}

interface ProductListProps {
  productList: Product[];
}

const ProductList = ({ productList }:ProductListProps) => {
  return (
    <Box borderColor="gray.300" borderWidth={1} maxW={{ base: "100%" }} p={{ base: 2, md: 4 }} m={0} borderRadius={10}>
      <Text fontSize="xl" mb={4}>Product List</Text>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Item Name</Th>
              <Th>Price</Th>
              <Th textAlign="right">Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productList.map((product) => (
              <Tr key={product.id}>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td textAlign="right">
                  <Badge color="white" bg={product.status === "active" ? "green.400" : "red.400"} minW="6rem">
                    <Flex justify="center">
                      {product.status === "active" ? "done" : "pending"}
                    </Flex>
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
