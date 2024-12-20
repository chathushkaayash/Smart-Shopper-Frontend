import { Grid, GridItem, HStack, Image, Stack, Text } from "@chakra-ui/react";

import useProduct from "@/services/Products/useProduct";
import useSupermarket from "@/services/Supermarket/useSupermarket";
// import DeleteImage from "../../../assets/delete.svg";
import useDistance from "@/services/Location/useDistance";
import { CartItem } from "@/services/types";
import useAuthStore from "@/state-management/auth/store";
import useConsumer from "@/hooks/useConsumer";

interface Props {
  cartItem: CartItem;
}

const ComparisonItem = ({ cartItem }: Props) => {
  const user = useAuthStore((state) => state.user);
  const consumer = useConsumer(user?.consumerId || 0);

  const { data: product } = useProduct([
    cartItem.supermarketItem?.productId || 0,
  ])[0];

  const supermarket = useSupermarket([
    cartItem.supermarketItem?.supermarketId || 0,
  ])[0];

  const location1 = supermarket.data?.location || "";
  const location2 = consumer.data?.addresses.length
    ? consumer.data?.addresses[0].location
    : "";

  const distance = useDistance(location1, location2);

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
          <Image src={supermarket.data?.logo} mt={2} w={"4vw"} />
          <Text>Distance : {distance.data?.toFixed(1)} km</Text>
          <Text>Quantity : {cartItem.quantity}</Text>
        </Grid>
        <HStack justifyContent={"space-between"}>
          <Text fontSize="md">
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
          {/* <Image src={DeleteImage} ml="auto" /> */}
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ComparisonItem;
