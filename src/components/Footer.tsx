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
import { To, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: To) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <Box as="footer" bg="white" p={8} boxShadow="md" borderTop="1px solid" borderColor={"gray.200"}>
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
            <Text cursor="pointer" onClick={() => navigate("/about")} _hover={{ color: "primary" }}>
              Contact Us
            </Text>
            <Text cursor="pointer" onClick={() => handleNavigation("/")} _hover={{ color: "primary" }}>Home</Text>
            <Text cursor="pointer" onClick={() => handleNavigation("/supermarkets")} _hover={{ color: "primary" }}>Supermarkets</Text>
            <Text cursor="pointer" onClick={() => handleNavigation("/about")} _hover={{ color: "primary" }}>About Us</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems="flex-start" spacing={2}>
            <Text fontWeight="bold">Categories</Text>
            <Text>Electronics</Text>
            <Text>Clothing</Text>
            <Text>Food</Text>
            <Text>Shoes</Text>
            <Text>Furniture</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems="flex-start" spacing={2}>
            <Text fontWeight="bold">About</Text>
            <Text cursor="pointer" onClick={() => navigate("/about")} _hover={{ color: "primary" }}>Contact Us</Text>
            <Text cursor="pointer" onClick={() => handleNavigation("/about")} _hover={{ color: "primary" }}>About Us</Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
