
import { CartItem } from "@/services/types";
import { Box, Divider, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
interface Props {
  index: number;
  cartItems: CartItem[];
}

const OptimizedInfo = ({ index, cartItems }: Props) => {
  const deliveryFee = 250;
  const subTotal = cartItems.reduce(
    (acc, item) => acc + (item.supermarketItem?.price || 1) * item.quantity,
    0
  );

  const totalPrice = subTotal + deliveryFee;

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
            <Text color="gray">{deliveryFee} LKR</Text>
            <Divider borderColor="gray.400" mb={0} />
            <Text fontWeight={700}>{totalPrice} LKR</Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OptimizedInfo;
