import { getDecimal, getPrice, getSuperMarketIdList } from "@/lib/utils";
import useOptimizedRoute from "@/services/Location/useOptimizedRoute";
import { CartItem } from "@/services/types";
import useCheckoutRequestStore from "@/state-management/checkout/store";
import { Box, Divider, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
interface Props {
  index: number;
  cartItems: CartItem[];
}

const OptimizedInfo = ({ index, cartItems }: Props) => {
  const supermarketIds = getSuperMarketIdList(cartItems);
  const { checkoutRequest } = useCheckoutRequestStore();
  const optimizedRoute = useOptimizedRoute(
    supermarketIds,
    checkoutRequest.shippingLocation || ""
  );
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
            <Text color="primary">
              {getDecimal(optimizedRoute?.data?.totalDistance || 0)} Km
            </Text>
            <Text color="gray">{getPrice(subTotal)} LKR</Text>
            <Text color="gray">{getPrice(deliveryFree)} LKR</Text>
            <Divider borderColor="gray.400" mb={0} />
            <Text fontWeight={700}>{getPrice(totalPrice)} LKR</Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OptimizedInfo;
