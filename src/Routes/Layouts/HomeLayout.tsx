import Landing from "@/pages/Consumer/Landing";
import Login from "@/pages/Login";
import useAuthStore from "@/state-management/auth/store";
import { Navigate } from "react-router-dom";

const HomeLayout = () => {
  const { user } = useAuthStore();

  if (user?.role === "Admin") return <Navigate to="/overview" />;
  if (user?.role === "Consumer") return <Landing />;
  if (user?.role === "Supermarket Manager") return <Navigate to="/dashboard" />;
  if (user?.role === "Driver") return <Navigate to="/driver" />;
  if (!user) return <Landing />;
  return <Login />;
};

export default HomeLayout;
