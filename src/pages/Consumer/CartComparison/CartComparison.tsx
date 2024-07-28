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

import useCartStore from "@/state-management/cart/store";
import { CiBookmark } from "react-icons/ci";
import ComparisonItem from "./ComparisonItem";
import OptimizedInfo from "./OptimizedInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CartComparison = () => {
  const cartItems = useCartStore((state) => state.items);
  const navigate = useNavigate();
  const [selectedCart, setSelectedCart] = useState(1);

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
                  <Text>Not ready to checkout? Continue shopping</Text>
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
                {cartItems.map((item, index) => (
                  <ComparisonItem key={index} cartItem={item} />
                ))}
              </VStack>

              <Button width="lg" bg="primary" color="white" mt={4} mb={4}>
                View More
              </Button>

              <Box shadow="xl" borderWidth={1} p={2} w="full" borderRadius="10">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029768701894!2d79.85857797499636!3d6.902205493097101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1721984297174!5m2!1sen!2slk"
                    loading="lazy"
                  ></iframe>
                </AspectRatio>
              </Box>
              <OptimizedInfo index={1} />
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
                  <Text>Not ready to checkout? Continue shopping</Text>
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
                {cartItems.map((item, index) => (
                  <ComparisonItem key={index} cartItem={item} />
                ))}
              </VStack>

              <Button width="lg" bg="primary" color="white" mt={4} mb={4}>
                View More
              </Button>

              <Box shadow="xl" borderWidth={1} p={2} w="full" borderRadius="10">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029768701894!2d79.85857797499636!3d6.902205493097101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1721984297174!5m2!1sen!2slk"
                    loading="lazy"
                  ></iframe>
                </AspectRatio>
              </Box>
              <OptimizedInfo index={2} />
            </VStack>
          </Box>
        </GridItem>
      </Grid>

      <Center>
        <HStack mt={4}>
          <Button
            bg={selectedCart === 1 ? "primary" : "white"}
            onClick={() => setSelectedCart(1)}
            ml={4}
          >
            Your Cart
          </Button>
          <Button
            bg={selectedCart === 2 ? "primary" : "white"}
            onClick={() => setSelectedCart(2)}
            ml={4}
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
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
      </Center>
    </Box>
  );
};

export default CartComparison;
