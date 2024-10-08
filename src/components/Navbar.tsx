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
  const { data: cart } = useCart();
  const { user, logout } = useAuthStore();
  const { items, setItems } = useCartStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Call useColorModeValue at the top level
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "white");
  const borderColor = useColorModeValue("gray.200", "gray.900");

  const hideNavbarPaths = ["/driver/"];
  const showTopNav = !hideNavbarPaths.some((path) => pathname.startsWith(path));

  const consumerNavItems: NavItem[] = [
    { text: "Home", path: "/" },
    { text: "Supermarkets", path: "/supermarkets" },
    { text: "About Us", path: "/about" },
  ];

  const courierNavItems: NavItem[] = [
    { text: "Home", path: "/" },
    { text: "Request", path: "/requests" },
    { text: "Deliveries", path: "/deliveries" },
    { text: "Drivers", path: "/drivers" },
  ];

  const adminNavItems: NavItem[] = [];

  useEffect(() => {
    if (cart?.results) setItems(cart.results);
  }, [cart, setItems]);

  let navItems: NavItem[];

  switch (user?.role) {
    case "Courier Company Manager":
      navItems = courierNavItems;
      break;
    case "Admin":
      navItems = adminNavItems;
      break;
    case "Supermarket Manager":
      navItems = adminNavItems;
      break;
    default:
      navItems = consumerNavItems;
      break;
  }

  // Function to determine if the menu item is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {showTopNav && (
        <Flex
          w={"100%"}
          bg={bgColor}
          color={color}
          minH={"10vh"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={borderColor}
          align={"center"}
          justifyContent="space-between"
          pos={
            user?.role === "Admin" || user?.role === "Supermarket Manager"
              ? "sticky"
              : "relative"
          }
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
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  textDecoration={pathname === item.path ? "underline 2px" : ""}
                  color={pathname === item.path ? "primary" : ""}
                  textDecorationColor="primary"
                >
                  {item.text}
                </Text>
              </Link>
            ))}
          </HStack>

          {user ? (
            <HStack marginX={10} gap={5}>
              {user.role === "Consumer" && (
                <Menu>
                  <MenuButton>
                    <Avatar
                      name="Bimsara Jayadewa"
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
                      bg={isActive("/overview") ? "orange.500" : "white"}
                      color={isActive("/overview") ? "white" : "primary"}
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
                      onClick={() => navigate("/consumer_overview")}
                    >
                      Overview
                    </MenuItem>
                    <MenuItem
                      bg={isActive("/orders") ? "orange.500" : "white"}
                      color={isActive("/orders") ? "white" : "primary"}
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
                      onClick={() => navigate("/orders")}
                    >
                      Orders
                    </MenuItem>
                    <MenuItem
                      bg={isActive("/feedbacks") ? "orange.500" : "white"}
                      color={isActive("/feedbacks") ? "white" : "primary"}
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
                      onClick={() => navigate("/feedbacks")}
                    >
                      Feedbacks
                    </MenuItem>
                    <MenuItem
                      bg={isActive("/profile") ? "orange.500" : "white"}
                      color={isActive("/profile") ? "white" : "primary"}
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
                      onClick={logout}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
              {user.role === "Admin" && (
                <Menu>
                  <Avatar
                    name="Kavisha Hettige"
                    src={UserPlaceholder}
                    boxSize={10}
                  />
                </Menu>
              )}
              {user.role === "Supermarket Manager" && (
                <Menu>
                  <Avatar
                    name="Milinda Shehan"
                    src={UserPlaceholder}
                    boxSize={10}
                  />
                </Menu>
              )}
              {user.role === "Courier Company Manager" && (
                <Menu>
                  <MenuButton>
                    <Avatar
                      name="Sarala Janson"
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
                      bg={isActive("/profile") ? "orange.500" : "white"}
                      color={isActive("/profile") ? "white" : "primary"}
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
                      onClick={logout}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
              <Text fontSize="lg" fontWeight="bold">
                {user.name}
              </Text>
              {user.role === "Consumer" && (
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
              {pathname !== "/login" ? (
                <ActionButton url="/login">Login</ActionButton>
              ) : null}
              {pathname !== "/signup" ? (
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
