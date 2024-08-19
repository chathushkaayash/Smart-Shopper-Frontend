import {
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { PiCaretRightThin } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { MdStarRate, MdContactSupport } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/state-management/auth/store";

const Account = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const rows = [
    {
      Icon: BiSolidUserRectangle,
      label: "Account",
      path: "/driver/account/edit",
    },
    { Icon: FaCar, label: "Vehicle Details", path: "/driver/account/vehicle" },
    {
      Icon: TbTruckDelivery,
      label: "Deliveries",
      path: "/driver/deliveries",
    },
    { Icon: MdStarRate, label: "Ratings", path: "/driver/account/ratings" },
    {
      Icon: MdContactSupport,
      label: "Support",
      path: "/driver/account/support",
    },
  ];
  return (
    <>
      <Stack bg="white" borderWidth={2} p={5} gap="2vh">
        <Text fontSize="2xl" fontWeight="bold">
          Profile
        </Text>
        <HStack spacing={4}>
          <Image
            boxSize="70px"
            borderRadius="full"
            src="https://via.placeholder.com/100"
            alt="Profile Image"
          />
          <VStack align="start">
            <Text fontSize="xl" fontWeight="bold">
              {/* {user?.name || "John Doe"} */}
              John Doe
            </Text>
            <Text color="gray.500">
              {/* {user?.email || "john.doe@example.com"} */}
              john.doe@example.com
            </Text>
          </VStack>
        </HStack>
      </Stack>
      <Stack p={5} divider={<Divider borderColor={"gray.300"} />}>
        {rows.map((row, index) => (
          <HStack
            key={index}
            justify="space-between"
            px={2}
            py={4}
            onClick={() => {
              navigate(row.path);
            }}
            cursor="pointer"
          >
            <HStack gap={5}>
              <Icon as={row.Icon} color="primary" boxSize={7} />
              <Text>{row.label}</Text>
            </HStack>
            <Icon as={PiCaretRightThin} boxSize={5} />
          </HStack>
        ))}
        <Button mt="5%" bg="primary" color="white" onClick={logout}>
          Logout
        </Button>
      </Stack>
    </>
  );
};

export default Account;
