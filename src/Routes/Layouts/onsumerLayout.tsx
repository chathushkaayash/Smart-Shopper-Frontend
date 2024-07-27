import SideBar from "@/components/SideBar";
import useAuthStore from "@/state-management/auth/store";
import { Box, Flex } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

const ConsumerLayout = () => {
  const { user } = useAuthStore();

  if (user?.userRole !== "consumer") return <Navigate to={"/login"} />;

  return (
    <Flex w="full">
      <Box w="16vw" top="10vh">
        <SideBar />
      </Box>
      <Box w="full" px="2%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default ConsumerLayout;
