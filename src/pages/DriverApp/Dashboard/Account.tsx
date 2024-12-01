import { getImageUrl } from "@/lib/utils";
import useDriver from "@/services/Driver/useDriver";
import useAuthStore from "@/state-management/auth/store";
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
import { FaCar } from "react-icons/fa";
import { MdContactSupport, MdStarRate } from "react-icons/md";
import { PiCaretRightThin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore((state) => ({
    logout: state.logout,
    user: state.user,
  }));
  const driver = useDriver([user?.driverId || 0])[0];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
    {
      Icon: MdStarRate,
      label: "Reviews & Ratings",
      path: "/driver/account/reviews",
    },
    {
      Icon: MdContactSupport,
      label: "Hepl & Support",
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
            src={getImageUrl(driver.data?.user.profilePic)}
            alt="Profile Image"
            objectFit={"cover"}
          />
          <VStack align="start">
            <Text fontSize="xl" fontWeight="bold">
              {user?.name}
            </Text>
            <Text color="gray.500">{user?.email}</Text>
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
        <Button mt="5%" bg="primary" color="white" onClick={handleLogout}>
          Logout
        </Button>
      </Stack>
    </>
  );
};

export default Account;
