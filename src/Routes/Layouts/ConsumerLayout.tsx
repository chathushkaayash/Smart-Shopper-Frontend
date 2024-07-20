import useAuthStore from "@/state-management/auth/store";
import { Navigate, Outlet } from "react-router-dom";

const ConsumerLayout = () => {
  const { user } = useAuthStore();

  if (user?.role !== "consumer") return <Navigate to={"/login"} />;

  return (
    // <Flex w="full">
    //   <Box w="16vw" top="10vh">
    //     <SideBar />
    //   </Box>
    //   <Box w="full" px="2%">
    <Outlet />
    //   </Box>
    // </Flex>
  );
};

export default ConsumerLayout;
