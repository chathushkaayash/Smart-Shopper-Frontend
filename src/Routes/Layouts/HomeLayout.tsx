import Landing from "@/pages/Consumer/Landing";
import CourierCompanyHome from "@/pages/CourierCompanyManager/CourierCompanyHome";
import Login from "@/pages/Login";
import useAuthStore from "@/state-management/auth/store";
import { Navigate } from "react-router-dom";

const HomeLayout = () => {
  const { user } = useAuthStore();

  if (user?.role === "Admin") return <Navigate to="/overview" />;
  if (user?.role === "Consumer") return <Landing />;
  if (user?.role === "Supermarket Manager") return <Navigate to="/dashboard" />;
  if (user?.role === "Driver") return <Navigate to="/driver" />;
  if (user?.role === "Courier Company Manager") return <CourierCompanyHome />;
  if (!user) return <Landing />;
  return <Login />;
};

export default HomeLayout;
