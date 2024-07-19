import DesktopWarning from "@/pages/DriverApp/DesktopWarning";
import useAuthStore from "@/state-management/auth/store";
import {useMediaQuery } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

const DriverLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { user } = useAuthStore();

  if (user?.role !== "driver")
    return <Navigate to={"/driver/login_register"} />;

  return <>{isMobile[0] ? <Outlet /> : <DesktopWarning/>}</>;
};

export default DriverLayout;
