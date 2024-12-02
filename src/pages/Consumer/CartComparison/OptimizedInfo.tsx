
import useConsumer from "@/hooks/useConsumer";
import { getDefaultAddress, getSuperMarketIdList } from "@/lib/utils";
import useOptimizedRoute from "@/services/Location/useOptimizedRoute";
import { CartItem } from "@/services/types";
import useAuthStore from "@/state-management/auth/store";
import { Box, Divider, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
interface Props {
  index: number;
  cartItems: CartItem[];
}

const OptimizedInfo = ({ index, cartItems }: Props) => {
  const user = useAuthStore((state) => state.user);
  const consumer =useConsumer(user?.consumerId || -1);
  const supermarketIds = getSuperMarketIdList(cartItems);
  const address = getDefaultAddress(consumer.data?.addresses);
  console.log("Address:", address?.location);
  const optimizedRoute = useOptimizedRoute(supermarketIds, address?.location || "");
  const deliveryFree = optimizedRoute.data?.deliveryCost || 250;
  const subTotal = cartItems.reduce(
    (acc, item) => acc + (item.supermarketItem?.price || 1) * item.quantity,
    0
  );

  const totalPrice = subTotal + deliveryFree;

  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="2px"
      borderRadius={15}
      bg={index === 1 ? "white" : "lightOrange"}
      mt={4}
      w="100%"
    >
      <Grid gridTemplateColumns="2fr 1fr" width="100%" my={2} px={"5%"}>
        <GridItem>
          <Stack gap={2}>
            <Text color="primary">Total Distance</Text>
            <Text color="gray">Sub Total</Text>
            <Text color="gray">Deliveries</Text>
            <Divider borderColor="gray.400" mb={0} />
            <Text fontWeight={700}>Total</Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={2} alignItems={"flex-end"}>
            <Text color="primary">2.4 KM</Text>
            <Text color="gray">{subTotal} LKR</Text>
            <Text color="gray">{deliveryFree} LKR</Text>
            <Divider borderColor="gray.400" mb={0} />
            <Text fontWeight={700}>{totalPrice} LKR</Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OptimizedInfo;
