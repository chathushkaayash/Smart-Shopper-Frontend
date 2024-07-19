import DesktopWarning from "@/pages/DriverApp/DesktopWarning";
import { useMediaQuery } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

const PublicLayout = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDriverPath = pathname.startsWith("/driver");
  const warning = !isMobile[0] && isDriverPath;

  return <>{warning ? <DesktopWarning /> : <Outlet />}</>;
};

export default PublicLayout;
