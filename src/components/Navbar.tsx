import useAuthStore from "@/state-management/auth/store";
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
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Banner from "../assets/smart-shopper-banner.svg";
import ActionButton from "./Buttons/ActionButton";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const hideNavbarPaths = ["/driver"];
  const showTopNav = !hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {showTopNav && (
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
          pos={location.pathname === "/admin" ? "sticky" : "relative"}
          top={0}
          zIndex={10}
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
              <Link to="/">
                <Text fontSize="lg" fontWeight="bold">
                  Home
                </Text>
              </Link>
              <Link to="/supermarkets">
                <Text fontSize="lg" fontWeight="bold">
                  Supermarkets
                </Text>
              </Link>
              <Link to="/about_us">
                <Text fontSize="lg" fontWeight="bold">
                  About Us
                </Text>
              </Link>
            </Show>
          </HStack>

          {user ? (
            <HStack marginX={10} gap={5}>
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                boxSize={10}
                onClick={logout}
              />
              <Text fontSize="lg" fontWeight="bold">
                {user.username}
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
