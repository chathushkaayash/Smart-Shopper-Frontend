
import useSupermarket from "@/services/Supermarket/useSupermarket";
import { Product, SupermarketItem } from "@/services/types";
import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  product: Product;
  selectedSupermarketItem: SupermarketItem;
}

const ProductDescription = ({ product, selectedSupermarketItem }: Props) => {
  const supermarket = selectedSupermarketItem.supermarketId
    ? useSupermarket([selectedSupermarketItem.supermarketId])
    : [{ data: null, isLoading: false, error: null }];

  return (
    <Box>
      <Text fontSize="1xl" mb={4}>
        {product.description}
      </Text>
      <Image
        src={product.imageUrl}
        alt="product"
        boxSize={"40vh"}
        border="1px"
        borderColor="gray.200"
      />
      <Divider
        mt={5}
        mb={2}
        borderColor="gray.400"
        alignSelf="flex-start"
        w={"50vh"}
      />
      <HStack>
        <Text fontSize={"lg"}>Selected Store :</Text>
        <Text fontSize={"lg"} fontWeight={600}>
          {supermarket[0].data?.name}
        </Text>
      </HStack>
    </Box>
  );
};

export default ProductDescription;
