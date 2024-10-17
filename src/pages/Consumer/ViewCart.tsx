import SupermarketInformation from "@/components/Accordian";
import IconButton from "@/components/Buttons/IconButton";
import TextButton from "@/components/Buttons/TextButton";
import CartItemCard from "@/components/CartItemCard";
import MiddleContainer from "@/components/Containers/MiddleContainer";
import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import cartImage from "../../assets/cart.png";
import useCartItems from "@/services/Cart/useCartItems";

const ViewCart = () => {
  const navigate = useNavigate();
  const { data: cartItems } = useCartItems();

  // generate a list of unique supermarket ids
  const supermarketIdList: number[] = [];
  cartItems?.results.forEach((item) => {
    const supermarketId = item.supermarketItem?.supermarketId;
    if (supermarketId) {
      if (!supermarketIdList.includes(supermarketId)) {
        supermarketIdList.push(supermarketId);
      }
    }
  });

  let totalAmount: number =
    cartItems?.results.reduce(
      (acc, item) => acc + (item.supermarketItem?.price || 1) * item.quantity,
      0
    ) || 0;
  totalAmount = Number((Math.round(totalAmount * 100) / 100).toFixed(2));

  return (
    <MiddleContainer width="90vw" bg="background" height="fit-content">
      {cartItems?.results.length === 0 ? (
        <EmptyCart />
      ) : (
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(2, 1fr)",
          }}
          h="100%"
          gap={{ base: 4, md: 6, lg: 10 }}
          pt="3vh"
          px="6vw"
        >
          {/* ------------------------------------------ Left Hand Side ------------------------------------------ */}
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
                    _hover={{ textDecoration: "underline" }}
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
              {cartItems?.results.map((item, index) => (
                <CartItemCard key={index} cartItem={item} />
              ))}
            </VStack>
          </GridItem>

          {/* ------------------------------------------ Right Hand Side ------------------------------------------ */}
          <GridItem>
            <Heading as="h3" fontSize={25} mb={16} mt={5}>
              Supermarket Information
            </Heading>
            <Accordion allowToggle>
              {supermarketIdList.map((i, index) => (
                <SupermarketInformation key={index} supermarketId={i} />
              ))}
            </Accordion>
            <Spacer />
            <Text mt={8} fontSize={"lg"} fontWeight={700} textAlign={"right"}>
              Total Amount : {totalAmount} LKR
            </Text>
            <TextButton
              text="Proceed to checkout"
              hoverColor="primary"
              onClick={() => navigate("/cart-comparison")}
            />
          </GridItem>
        </Grid>
      )}
    </MiddleContainer>
  );
};

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection="column" pt="4vh" px="4vw">
      <Heading as="h2" size="lg">
        Your shopping cart
      </Heading>
      <HStack>
        <Text>Not ready to checkout?</Text>
        <Text
          onClick={() => navigate("/")}
          color="primary"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
        >
          Continue Shopping
        </Text>
      </HStack>
      <Spacer />
      <VStack spacing={5} mt={10} align="center">
        <Image src={cartImage} alt="Empty Cart" boxSize="200px" />
        <Heading as="h2" size="lg">
          Your cart is empty
        </Heading>
        <Text fontSize="lg">
          Start adding items to your cart to see them here!
        </Text>
        <Button
          onClick={() => navigate("/")}
          type="submit"
          width="auto"
          bg="#E9893B"
          mt={10}
          borderRadius={5}
          color={"white"}
          _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
          _active={{
            bg: "#E46C0A",
            color: "#FFFFFF",
            transform: "scale(0.98)",
            borderColor: "#E46C0A",
          }}
        >
          Start Shopping
        </Button>
      </VStack>
    </Flex>
  );
};

export default ViewCart;
