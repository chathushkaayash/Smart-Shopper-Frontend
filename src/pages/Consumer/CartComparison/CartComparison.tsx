import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Divider,
  AspectRatio,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { CiBookmark } from "react-icons/ci";
import ComparisonItem from "./ComparisonItem";
import useCartStore from "@/state-management/cart/store";

const CartComparison = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <Grid gridTemplateColumns="1fr 1fr" h="100%" px="5vw" py="5vh">
      <GridItem h="100%" px={4}>
        <Box
          p={4}
          border="2px solid"
          borderColor="primary"
          borderRadius="md"
          // bg="background"
          bg="white"
          display="flex"
          alignItems="center"
          w="100%"
        >
          <VStack px={5}>
            <Flex width="100%" justifyContent={"space-between"}>
              <Stack gap={0}>
                <Text fontSize="3xl" color="gray" fontWeight={700}>
                  Your Shopping Cart
                </Text>
                <Text color="gray">
                  Not ready to checkout? Continue shopping
                </Text>
              </Stack>
              <Box>
                <CiBookmark size={30} />
              </Box>
            </Flex>
            {cartItems.map((item,index) => (
              <ComparisonItem key={index} cartItem={item} />
            ))}

            <Button
              type="submit"
              width="lg"
              bg="primary"
              color="white"
              mt={4}
              mb={4}
            >
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
          </VStack>
        </Box>

        <Box
          shadow="md"
          borderWidth="2px"
          borderRadius={15}
          mt={4}
          bg="white"
          p={4}
          w="100%"
        >
          <Grid
            gridTemplateColumns="1fr 1fr"
            h="100%"
            width="100%"
            mt={2}
            mb={2}
          >
            <GridItem h="100%">
              <Text color="gray">Total Distance</Text>
              <Text>
                <b>Sub Total</b>
              </Text>
              <Text color="gray">Deliveries</Text>
            </GridItem>
            <GridItem>
              <Text color="gray">2 Km</Text>
              <Text>
                {" "}
                <b> 450 Lkr</b>
              </Text>
              <Text color="gray">Calculated at the next step</Text>
            </GridItem>
          </Grid>
        </Box>

        <Box display="flex" justifyContent="flex-end" w="100%">
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
        </Box>
      </GridItem>

      <GridItem h="100%" px={4}>
        <Box
          p={4}
          border="2px solid"
          borderColor="primary"
          borderRadius="md"
          bg="lightOrange"
          display="flex"
          alignItems="center"
          w="100%"
        >
          <VStack>
            <Grid gridTemplateColumns="2fr 1fr" width="100%">
              <GridItem>
                <Heading as="h4" size="md" mt={2} fontSize="30px">
                  Optimized Shopping Cart
                </Heading>
                <br />
                <Text>
                  <b>Not ready to checkout? Continue shopping</b>
                </Text>
              </GridItem>
              <GridItem justifySelf="end" alignSelf="start" mt={2}>
                {/* <Image src={CollarImage} /> */}
              </GridItem>
            </Grid>
            {/* <Box>
              <Grid gridTemplateColumns="2fr 5fr 1fr">
                <GridItem>
                  <HStack mt={5}>
                    <Image src={CreamCracker} />
                  </HStack>
                </GridItem>

                <GridItem>
                  <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                    <b>Cream cracker 500g</b>
                  </Text>
                  <Grid gridTemplateColumns="1fr 1fr">
                    <GridItem mt={2} ml={4}>
                      <Image src={SparImage} mt={2} />
                      <Text>quantity : 1</Text>
                      <Text fontSize="20px">
                        <b>: 150 LKR</b>
                      </Text>
                    </GridItem>
                    <GridItem mt={8}>
                      <Text>Distance : 2 Km</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem mt={40} ml={10}>
                  <Image src={DeleteImage} />
                </GridItem>
              </Grid>
            </Box>

            <Divider size="lg" my={4} borderColor="gray" borderWidth="2px" />

            <Box>
              <Grid gridTemplateColumns="2fr 5fr 1fr">
                <GridItem>
                  <HStack mt={5}>
                    <Image src={CreamCracker} />
                  </HStack>
                </GridItem>

                <GridItem>
                  <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                    <b>Cream cracker 500g</b>
                  </Text>
                  <Grid gridTemplateColumns="1fr 1fr">
                    <GridItem mt={4} ml={4}>
                      <Image src={KeelsLogo} mt={4} />
                      <Text>quantity : 1</Text>
                      <Text fontSize="20px">
                        <b>: 150 LKR</b>
                      </Text>
                    </GridItem>
                    <GridItem mt={8}>
                      <Text>Distance : 2 Km</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem mt={40} ml={10}>
                  <Image src={DeleteImage} />
                </GridItem>
              </Grid>
            </Box>

            <Divider size="lg" my={4} borderColor="gray" borderWidth="2px" />

            <Box>
              <Grid gridTemplateColumns="2fr 5fr 1fr">
                <GridItem>
                  <HStack mt={5}>
                    <Image src={CreamCracker} />
                  </HStack>
                </GridItem>

                <GridItem>
                  <Text whiteSpace="nowrap" ml={4} mt={5} fontSize="20px">
                    <b>Cream cracker 500g</b>
                  </Text>
                  <Grid gridTemplateColumns="1fr 1fr">
                    <GridItem mt={4} ml={4}>
                      <Image src={KeelsLogo} mt={4} />
                      <Text>quantity : 1</Text>
                      <Text fontSize="20px">
                        <b>: 150 LKR</b>
                      </Text>
                    </GridItem>
                    <GridItem mt={8}>
                      <Text>Distance : 2 Km</Text>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem mt={40} ml={10}>
                  <Image src={DeleteImage} />
                </GridItem>
              </Grid>
            </Box> */}

            <Button
              type="submit"
              width="lg"
              bg="primary"
              color="white"
              mt={4}
              mb={4}
            >
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
          </VStack>
        </Box>

        <Box
          p={4}
          shadow="md"
          borderWidth="2px"
          borderRadius={15}
          bg="lightOrange"
          mt={4}
          w="100%"
        >
          <Grid
            gridTemplateColumns="1fr 1fr"
            h="100%"
            width="100%"
            mt={2}
            mb={2}
          >
            <GridItem h="100%">
              <Text color="gray">Total Distance</Text>
              <Text>
                <b>Sub Total</b>
              </Text>
              <Text color="gray">Deliveries</Text>
            </GridItem>
            <GridItem>
              <Text color="gray">2 Km</Text>
              <Text>
                {" "}
                <b> 450 Lkr</b>
              </Text>
              <Text color="gray">Calculated at the next step</Text>
            </GridItem>
          </Grid>
        </Box>

        <Box display="flex" w="100%">
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
          >
            Continue
          </Button>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CartComparison;
