import useAuthStore from "@/state-management/auth/store";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { IoHome, IoSettings } from "react-icons/io5";
import { MdViewSidebar } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  path?: string;
}

const SideBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const menuItems: MenuItem[] = [
    { icon: IoHome, label: "Dashboard", path: "/dashboard" },
    { icon: MdViewSidebar, label: "Orders", path: "/orderList" },
    { icon: IoMdPeople, label: "Products", path: "/products" },
    { icon: IoSettings, label: "Settings", path: "/settings" },
    { icon: FiLogOut, label: "Logout", path: "/logout" },
  ];

  console.log(location.pathname);

  return (
    <VStack
      w="14vw"
      h="90vh"
      pos="fixed"
      color="gray.800"
      fontWeight="500"
      spacing={3}
      pl={1}
      shadow="lg"
    >
      <Heading fontSize="2xl" color="primary" mt={2} p={2}>
        My Account
      </Heading>

      {menuItems.map((item, index) => (
        <Flex
          key={index}
          align="center"
          p={2}
          w="full"
          cursor="pointer"
          bg={pathname === item.path ? "rgba(255, 119, 8, 0.2)" : ""}
          borderLeft={pathname === item.path ? "5px solid" : ""}
          borderColor={pathname === item.path ? "primary" : ""}
          _hover={{ bg: "gray.100" }}
          onClick={() => {
            if (item.label === "Logout") {
              logout();
            } else {
              navigate(`${item.path}`);
            }
          }}
          mt={item.path === "/logout" ? 'auto' : 0}
          mb={item.path === "/logout" ? 4 : 0}
        >
          <item.icon size={20} />
          <Text ml={2} fontSize="lg">
            {item.label}
          </Text>
        </Flex>
      ))}
    </VStack>
  );
};

export default SideBar;
