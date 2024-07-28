import { Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";

import useProduct from "@/hooks/useProduct";
import useSupermarket from "@/hooks/useSupermarket";
import { CartItem } from "@/state-management/cart/store";
import DeleteImage from "../../../assets/delete.svg";

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
          <Text>Distance : 2 Km</Text>
          <Text>Quantity : 1</Text>
        </Grid>
        <Text fontSize="md" fontWeight={600}>
          150 LKR
        </Text>
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
