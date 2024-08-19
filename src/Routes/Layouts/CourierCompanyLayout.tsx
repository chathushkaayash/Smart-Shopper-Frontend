import useAuthStore from "@/state-management/auth/store";

import { Navigate, Outlet } from "react-router-dom";

const CourierCompanyLayout = () => {
  const { user } = useAuthStore();

  if (user?.role !== "Courier Company Manager")
    return <Navigate to={"/login"} />;

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

export default CourierCompanyLayout;
