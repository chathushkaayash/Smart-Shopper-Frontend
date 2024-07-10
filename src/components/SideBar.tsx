import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaCartFlatbed, FaShop } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdViewSidebar } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbTransactionDollar, TbTruckDelivery } from "react-icons/tb";

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  path?: string;
}

interface Props {
  adminPage: string;
  setAdminPage: (page: string) => void;
}

const SideBar = ({ adminPage, setAdminPage }: Props) => {
  const menuItems: MenuItem[] = [
    { icon: MdViewSidebar, label: "Overview" },
    { icon: IoMdPeople, label: "Customers" },
    { icon: FaShop, label: "Super Markets" },
    { icon: TbTruckDelivery, label: "Courier Services" },
    { icon: FaCartFlatbed, label: "Orders", path: "/admin-Orders" },
    { icon: TbTransactionDollar, label: "Transactions" },
    { icon: RiAdvertisementFill, label: "Advertisements" },
    { icon: IoSettings, label: "Settings" },
    { icon: FiLogOut, label: "Logout" },
  ];

  return (
    <VStack
      w="14vw"
      h="full"
      pos="fixed"
      color="gray.800"
      fontWeight="500"
      spacing={3}
      pl={2}
      shadow="lg"
      bg="gray.50"
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
          bg={adminPage === item.label ? "white" : ""}
          borderLeft={adminPage === item.label ? "5px solid" : ""}
          borderColor={adminPage === item.label ? "primary" : ""}
          // borderLeftRadius="md"
          _hover={{ bg: "gray.100" }}
          onClick={() => setAdminPage(item.label)}
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
