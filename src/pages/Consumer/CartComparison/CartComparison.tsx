import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { CiBookmark } from "react-icons/ci";
import ComparisonItem from "./ComparisonItem";
import OptimizedInfo from "./OptimizedInfo";
import { useNavigate } from "react-router-dom";
import { Key, useState } from "react";
import useCartItems from "@/services/Cart/useCartItems";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import useOptimizer from "@/hooks/useOptimizer";
import Map from "@/pages/Public/Map";
import { CartItem } from "@/services/types";

const CartComparison = () => {
  const { data: cartItems } = useCartItems();
  const { data: optimizedCart } = useOptimizer();
  console.log('optimizedCart :',optimizedCart);
  console.log('cartItems :',cartItems);
  const navigate = useNavigate();
  const [selectedCart, setSelectedCart] = useState(1);

  //fetching data from optimzed algorithm
  //const optimizedCart=useOptimizer();

  const uniqueSupermarketIds = Array.from(
    new Set(cartItems?.results?.map((item) => item.supermarketItem.supermarketId))
  );

  const supermarkets = useSupermarket(uniqueSupermarketIds);

  //centers of our cart supermarkets
  const centers = supermarkets
  .map((supermarket) => supermarket.data?.location)
  .filter(Boolean) 
  .map((location) => {
    const [lat, lng] = location?.split(",").map(Number) || []; 
    return { lat, lng }; 
  });
  console.log('centers :',centers);


  return (
    <Box px="5vw" py="5vh">
      <VStack mb={2}>
        <Text fontSize="3xl" fontWeight={700}>
          Select Your Cart
        </Text>
      </VStack>
      <Grid gridTemplateColumns="1fr 1fr">
        <GridItem h="100%" px={4}>
          <Box
            p={4}
            border="2px solid"
            borderColor={selectedCart === 1 ? "primary" : "gray"}
            borderRadius="md"
            bg={selectedCart === 1 ? "lightOrange" : "white"}
            display="flex"
            alignItems="center"
            w="100%"
          >
            <VStack px={5} w={"full"}>
              <Flex width="100%" justifyContent={"space-between"}>
                <Stack gap={0}>
                  <Text fontSize="3xl" fontWeight={700}>
                    Your Shopping Cart
                  </Text>
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
                </Stack>
                <Box>
                  <CiBookmark size={30} />
                </Box>
              </Flex>

              <VStack
                my={5}
                w="full"
                gap={5}
                divider={<Divider borderColor="gray.400" />}
              >
                {cartItems?.results.map((item, index) => (
                  <ComparisonItem key={index} cartItem={item} />
                ))}
              </VStack>
              <Divider borderColor="gray.400" mb={3} />
              {cartItems && cartItems.results.length >= 4 && (
                <Button width="lg" bg="primary" color="white" mt={4} mb={4}>
                  View More
                </Button>
              )}

              <Box shadow="xl" borderWidth={1} p={2} w="full" borderRadius="10">
                <AspectRatio ratio={16 / 9}>
                <Map centers={centers}/>
                </AspectRatio>
              </Box>
              <OptimizedInfo index={1} cartItems={cartItems?.results || []} />
            </VStack>
          </Box>
        </GridItem>

        <GridItem h="100%" px={4}>
          <Box
            p={4}
            border="2px solid"
            borderColor={selectedCart === 2 ? "primary" : "gray.200"}
            borderRadius="md"
            bg={selectedCart === 2 ? "lightOrange" : "white"}
            display="flex"
            alignItems="center"
            w="100%"
          >
            <VStack px={5} w={"full"}>
              <Flex width="100%" justifyContent={"space-between"}>
                <Stack gap={0}>
                  <Text fontSize="3xl" fontWeight={700}>
                    Optimized Shopping Cart
                  </Text>
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
                </Stack>
                <Box>
                  <CiBookmark size={30} />
                </Box>
              </Flex>

              <VStack
                my={5}
                w="full"
                gap={5}
                divider={<Divider borderColor="gray.400" />}
              >
                {optimizedCart?.map((item: CartItem, index: Key | null | undefined) => (
                  <ComparisonItem key={index} cartItem={item} />
                ))}
              </VStack>
              <Divider borderColor="gray.400" mb={3} />
              {(optimizedCart?.length || 0) > 4 && (
                <Button width="lg" bg="primary" color="white" mt={4} mb={4}>
                  View More
                </Button>
              )}

              <Box shadow="xl" borderWidth={1} p={2} w="full" borderRadius="10">
                <AspectRatio ratio={16 / 9}>
                <Map centers={centers}/>
                </AspectRatio>
              </Box>
              <OptimizedInfo index={2} cartItems={optimizedCart || []} />
            </VStack>
          </Box>
        </GridItem>
      </Grid>

      <Center>
        <HStack mt={4}>
          <Button
            bg={selectedCart === 1 ? "primary" : "white"}
            onClick={() => setSelectedCart(1)}
            ml="12"
            mr="6"
            color={selectedCart === 1 ? "white" : "primary"}
            borderWidth={2}
            borderColor={selectedCart === 1 ? "primary" : "primary"}
            _hover={{ bg: "primary", color: "white" }}
          >
            Your Cart
          </Button>
          <Button
            bg={selectedCart === 2 ? "primary" : "white"}
            onClick={() => setSelectedCart(2)}
            ml={6}
            color={selectedCart === 2 ? "white" : "primary"}
            borderWidth={2}
            borderColor={selectedCart === 2 ? "primary" : "primary"}
            _hover={{ bg: "primary", color: "white" }}
          >
            Optimized Cart
          </Button>
        </HStack>
      </Center>
      <Center display="flex" w="100%">
        <Button
          width={200}
          type="submit"
          borderWidth="1px"
          borderRadius={15}
          borderColor="primary"
          bg="white"
          color="primary"
          shadow="md"
          mr="6"
          mb={10}
          mt={6}
          _hover={{ bg: "primary", color: "white" }}
          _active={{
            bg: "primary",
            color: "white",
            transform: "scale(0.98)",
            borderColor: "primary",
          }}
        >
          Back
        </Button>
        <Button
          width={200}
          type="submit"
          borderWidth="1px"
          borderRadius={15}
          borderColor="primary"
          bg="primary"
          color="white"
          shadow="md"
          ml={6}
          mb={10}
          mt={6}
          _hover={{ bg: "white", color: "primary" }}
          _active={{
            bg: "white",
            color: "primary",
            transform: "scale(0.98)",
            borderColor: "primary",
          }}
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
      </Center>
    </Box>
  );
};

export default CartComparison;
