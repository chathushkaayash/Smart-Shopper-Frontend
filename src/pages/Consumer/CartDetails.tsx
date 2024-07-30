import SupermarketInformation from "@/components/Accordian";
import IconButton from "@/components/Buttons/IconButton";
import TextButton from "@/components/Buttons/TextButton";
import CartItemCard from "@/components/CartItemCard";
import MiddleContainer from "@/components/Containers/MiddleContainer";
import useCartStore from "@/state-management/cart/store";
import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const CartDetails = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();

  const supermarketIdList: number[] = [];

  items.forEach((item) => {
    const supermarketId = item.supermarketItem?.id;
    if (supermarketId) {
      if (!supermarketIdList.includes(supermarketId)) {
        supermarketIdList.push(supermarketId);
      }
    }
  });

  return (
    <MiddleContainer width="90vw" bg="background">
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(2, 1fr)",
        }}
        h="100%"
        gap={{ base: 4, md: 6, lg: 10 }}
        pt="4vh"
        px="6vw"
      >
        <GridItem h="100%">
          <Flex>
            <Flex flexDirection="column">
              <Heading as="h2" size="lg">
                Your shopping cart
              </Heading>
              <HStack>
                <Text>Not ready to checkout?</Text>
                <Text
                  onClick={() => navigate("/")}
                  color="primary"
                  cursor="pointer"
                >
                  Continue Shopping
                </Text>
              </HStack>
            </Flex>
            <Spacer />

            <Link to="/">
              <IconButton Icon={AddIcon} />
            </Link>
          </Flex>
          <VStack spacing={5} mt={10}>
            {items.map((item, index) => (
              <CartItemCard key={index} cartItem={item} />
            ))}
          </VStack>
        </GridItem>

        <GridItem>
          <Heading as="h2" size="lg" mb={10}>
            Order Information
          </Heading>
          <Accordion allowToggle>
            {supermarketIdList.map((i, index) => (
              <SupermarketInformation key={index} supermarketId={i} />
            ))}
          </Accordion>
          <Spacer />
          <TextButton
            text="Proceed to checkout"
            onClick={() => navigate("/cart-comparison")}
          />
        </GridItem>
      </Grid>
    </MiddleContainer>
  );
};

export default CartDetails;
