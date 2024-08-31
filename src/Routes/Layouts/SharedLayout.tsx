import useAuthStore from "@/state-management/auth/store";
import AdminLayout from "./AdminLayout";
import SupermarketManagerLayout from "./SupermarketManagerLayout";
import ConsumerLayout from "./ConsumerLayout";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const { user } = useAuthStore();

  if (user?.role === "Admin") return <AdminLayout />;
  if (user?.role === "Supermarket Manager") return <SupermarketManagerLayout />;
  if (user?.role === "Consumer") return <ConsumerLayout />;

  return <Outlet />;
};

export default SharedLayout;
