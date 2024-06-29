import {
  Avatar,
  Flex,
  HStack,
  Icon,
  Image,
  Show,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Banner from "../assets/smart-shopper-banner.svg";
import ActionButton from "./Buttons/ActionButton";

const Navbar = () => {
  const [user] = useState("");
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup"];
  const showBottomNav = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showBottomNav && (
        <Flex
          w={"100%"}
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

            <Show above="md">
              <Text fontSize="lg" fontWeight="bold">
                Home
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Supermarkets
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                About Us
              </Text>
            </Show>
          </HStack>

          {user ? (
            <HStack marginX={10} gap={5}>
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                boxSize={10}
              />
              <Text fontSize="lg" fontWeight="bold">
                {user}
              </Text>
              <Icon as={FaCartShopping} w={8} h={8} color="black" />
            </HStack>
          ) : (
            <HStack paddingX={0}>
              {location.pathname !== "/login" ? (
                <ActionButton url="/login">Login</ActionButton>
              ) : null}
              {location.pathname !== "/signup" ? (
                <ActionButton url="/signup">Register</ActionButton>
              ) : null}
            </HStack>
          )}
        </Flex>
      )}
    </>
  );
};

export default Navbar;
