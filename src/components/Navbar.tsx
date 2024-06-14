import {
  Avatar,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Banner from '../assets/smart-shopper-banner.svg';

const Navbar = () => {
  const [user, setUser] = useState("User");

  return (
    <>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"10vh"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent="space-between"
      >
        <HStack gap={5}>
          {/* <Box display="inline" fontSize="2xl" fontWeight="bold">
            <Text as="span">Smart</Text>
            <Text color="primary" as="span">
              Shopper
            </Text>
          </Box> */}
          <Image src={Banner} />

          <Text fontSize="lg">Home</Text>
          <Text fontSize="lg">Supermarkets</Text>
          <Text fontSize="lg">About Us</Text>
        </HStack>

        {user ? (
          <HStack marginX={10} gap={5}>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              boxSize={10}
            />
            <Text fontSize="lg">{user}</Text>
            <Icon as={FaCartShopping} w={8} h={8} color='black' />
          </HStack>
        ) : (
          <HStack marginX={10}>
            <Text fontSize="lg">Login</Text>
            <Text fontSize="lg">Register</Text>
            
          </HStack>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
