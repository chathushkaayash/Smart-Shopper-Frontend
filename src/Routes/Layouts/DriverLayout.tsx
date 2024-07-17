import useAuthStore from "@/state-management/auth/store";
import { Heading, useMediaQuery } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

const DriverLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { user } = useAuthStore();

  if (user?.role !== "driver")
    return <Navigate to={"/driver/login_register"} />;

  return <>{isMobile[0] ? <Outlet /> : <Heading>Please use a mobile Device</Heading>}</>;
};

export default DriverLayout;
