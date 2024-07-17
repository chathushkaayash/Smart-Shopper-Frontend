import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import useAuthStore from "@/state-management/auth/store";
import { Navigate } from "react-router-dom";

const HomeLayout = () => {
  const { user } = useAuthStore();

  if (user?.role === "admin") return <Navigate to="/overview" />;
  if (user?.role === "consumer") return <Landing />;
  if (user?.role === "driver") return <Navigate to="/driver" />;
  if (!user) return <Landing />;
  return <Login />;
};

export default HomeLayout;
