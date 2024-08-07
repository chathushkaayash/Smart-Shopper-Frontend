import { Grid, GridItem, HStack, Image, Stack, Text } from "@chakra-ui/react";

import useProduct from "@/hooks/useProduct";
import useSupermarket from "@/hooks/useSupermarket";
import DeleteImage from "../../../assets/delete.svg";
import { CartItem } from "@/hooks/useCartItem";

interface Props {
  cartItem: CartItem;
}

const ComparisonItem = ({ cartItem }: Props) => {
  const { data: product } = useProduct(
    cartItem.supermarketItem?.productId || 0
  );

  const { data: supermarket } = useSupermarket(
    cartItem.supermarketItem?.supermarketId || 0
  );

  return (
    <Grid gridTemplateColumns="2fr 5fr 1fr" w="full">
      <GridItem>
        <Image src={product?.imageUrl} w={"15vh"} />
      </GridItem>

      <GridItem ml={4}>
        <Text whiteSpace="nowrap" fontSize="lg" fontWeight={600}>
          {product?.name}
        </Text>

        <Grid gridTemplateColumns="1fr 2fr" alignItems={"flex-end"}>
          <Image src={supermarket?.logo} mt={2} w={"4vw"} />
          <Text>Distance : 2.4 Km</Text>
          <Text>Quantity : {cartItem.quantity}</Text>
        </Grid>
        <HStack justifyContent={"space-between"}>
          <Text fontSize="md" fontWeight={600}>
            Unit Price : {cartItem.supermarketItem?.price} LKR
          </Text>
          <Text fontSize="md" fontWeight={600}>
            Total : {(cartItem.supermarketItem?.price || 1) * cartItem.quantity}{" "}
            LKR
          </Text>
        </HStack>
      </GridItem>
      <GridItem>
        <Stack justifyContent={"flex-end"} h="full">
          <Image src={DeleteImage} ml="auto" />
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ComparisonItem;
