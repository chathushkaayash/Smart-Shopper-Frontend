import loadable from "@loadable/component";

import useAuthStore from "@/state-management/auth/store";
import { Navigate } from "react-router-dom";

const Landing = loadable(() => import("@/pages/Consumer/Landing"));
const Login = loadable(() => import("@/pages/Login"));
const ConsumerHome = loadable(() => import("@/pages/Consumer/ConsumerHome"));
const CourierCompanyHome = loadable(
  () => import("@/pages/CourierCompanyManager/CourierCompanyHome")
);

const HomeLayout = () => {
  const { user } = useAuthStore();

  if (user?.role === "Admin") return <Navigate to="/overview" />;
  if (user?.role === "Consumer") return <ConsumerHome />;
  if (user?.role === "Supermarket Manager") return <Navigate to="/dashboard" />;
  if (user?.role === "Driver") return <Navigate to="/driver" />;
  if (user?.role === "Courier Company Manager") return <CourierCompanyHome />;
  if (!user) return <Landing />;
  return <Login />;
};

export default HomeLayout;
