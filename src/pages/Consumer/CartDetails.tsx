import MiddleContainer from "@/components/Containers/MiddleContainer";
import useCartStore from "@/state-management/cart/store";
import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartItemCard from "@/components/CartItemCard";
import IconButton from "@/components/Buttons/IconButton";
import TextButton from "@/components/Buttons/TextButton";
import Accordian from "@/components/Accordian";

const CartDetails = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();

  const accordionItems = [
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.",
    },
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.",
    },
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.",
    },
  ];
  // return null;
  console.log(items);

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

            <IconButton Icon={AddIcon} />
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
          <Accordian items={accordionItems} />
          <Spacer />
          <TextButton text="Proceed to checkout" onClick={() => {}} />
        </GridItem>
      </Grid>
    </MiddleContainer>
  );
};

export default CartDetails;
