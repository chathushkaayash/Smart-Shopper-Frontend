import useAuthStore from "@/state-management/auth/store";
import useCartStore from "@/state-management/cart/store";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Banner from "../assets/smart-shopper-banner.svg";
import ActionButton from "./Buttons/ActionButton";
import useCart from "@/hooks/useCart";
import { useEffect } from "react";
import UserPlaceholder from "../assets/avatar-placeholder.png";

interface NavItem {
  text: string;
  path: string;
}

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { items, setItems } = useCartStore();
  const { data: cart } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const hideNavbarPaths = ["/driver"];
  const showTopNav = !hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const consumerNavItems: NavItem[] = [
    { text: "Home", path: "/" },
    { text: "Supermarkets", path: "/supermarkets" },
    { text: "About Us", path: "/about" },
  ];

  const courierNavItems: NavItem[] = [
    { text: "Home", path: "/" },
    { text: "Request", path: "/requests" },
    { text: "Deliveries", path: "/deliveries" },
  ];

  const adminNavItems: NavItem[] = [];

  useEffect(() => {
    if (cart?.results) setItems(cart.results);
  }, [cart]);

  let navItems: NavItem[];

  switch (user?.role) {
    case "couriercompany":
      navItems = courierNavItems;
      break;
    case "admin":
      navItems = adminNavItems;
      break;
    case "supermarket":
      navItems = adminNavItems;
      break;
    default:
      navItems = consumerNavItems;
      break;
  }

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
          pos={user?.role === "admin" ? "sticky" : "relative"}
          top={0}
          zIndex={10}
        >
          <HStack gap={5}>
            <Image
              src={Banner}
              onClick={() => navigate("/")}
              cursor="pointer"
            />

            {navItems.map((item) => (
              <Link to={item.path} key={item.text}>
                <Text fontSize="lg" fontWeight="bold">
                  {item.text}
                </Text>
              </Link>
            ))}
          </HStack>

          {user ? (
            <HStack marginX={10} gap={5}>
              <Menu>
                <MenuButton>
                  <Avatar
                    name="Dan Abrahmov"
                    src={UserPlaceholder}
                    boxSize={10}
                    cursor="pointer"
                  />
                </MenuButton>
                <MenuList
                  py={0}
                  bg="white"
                  borderColor={"primary"}
                  borderWidth={3}
                  color={"white"}
                >
                  <MenuItem
                    bg="white"
                    color="primary"
                    _hover={{
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: "orange.500",
                    }}
                    _focus={{
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: "orange.500",
                      bg: "primary",
                      color: "white",
                    }}
                    // _active={{ borderRadius: 5, borderWidth: 2, borderColor: "orange.500", bg: "primary", color: "white" }}
                    onClick={() => navigate("/myOrders")}
                  >
                    Orders
                  </MenuItem>
                  <MenuItem
                    bg="white"
                    color="primary"
                    _hover={{
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: "orange.500",
                    }}
                    _focus={{
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: "orange.500",
                      bg: "primary",
                      color: "white",
                    }}
                    // _active={{ borderRadius: 5, borderWidth: 2, borderColor: "orange.500", bg: "primary", color: "white" }}
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    bg="white"
                    color="primary"
                    _hover={{
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: "orange.500",
                    }}
                    _focus={{
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: "orange.500",
                      bg: "primary",
                      color: "white",
                    }}
                    // _active={{ borderRadius: 5, borderWidth: 2, borderColor: "orange.500", bg: "primary", color: "white" }}
                    onClick={logout}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
              <Text fontSize="lg" fontWeight="bold">
                {user.name}
              </Text>
              {user.role === "consumer" && (
                <Box pos={"relative"} cursor="pointer">
                  <Icon
                    as={FaCartShopping}
                    w={8}
                    h={8}
                    color="black"
                    onClick={() => navigate("/cart")}
                  />
                  <Text
                    as="div"
                    fontSize={"xs"}
                    px={2}
                    py={1}
                    color="white"
                    fontWeight={"bold"}
                    pos={"absolute"}
                    bottom={0}
                    right={-5}
                    bg="primary"
                    rounded={"full"}
                  >
                    {items.length}
                  </Text>
                </Box>
              )}
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
