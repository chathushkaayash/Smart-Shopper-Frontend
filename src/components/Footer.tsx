import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";

import Logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <Box as="footer" bg="white" p={8} boxShadow="md">
      <Grid templateColumns={{ base: "1fr", md: "3fr 1fr 1fr 1fr" }} gap={8}>
        <GridItem>
          <Center flexDirection="column">
            <Image src={Logo} width="150px" />
            <Box display="inline" fontSize="3xl" fontWeight="bold" mt={2}>
              <Text as="span">Smart</Text>
              <Text color="primary" as="span">
                Shopper
              </Text>
            </Box>
            <Text>
              Smart Lists.{" "}
              <Text as="span" color="orange.500">
                Best Prices.
              </Text>{" "}
              Fast Delivery
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <VStack alignItems="flex-start" spacing={2}>
            <Text fontWeight="bold">Quick Links</Text>
            <Text>Home</Text>
            <Text>Super Markets</Text>
            <Text>About Us</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems="flex-start" spacing={2}>
            <Text fontWeight="bold">Categories</Text>
            <Text>Biscuit</Text>
            <Text>Fruits</Text>
            <Text>Vegetables</Text>
            <Text>Beverages</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems="flex-start" spacing={2}>
            <Text fontWeight="bold">About</Text>
            <Text>About Us</Text>
            <Text>Contact Us</Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
