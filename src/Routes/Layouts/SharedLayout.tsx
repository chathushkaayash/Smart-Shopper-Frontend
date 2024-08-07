import useAuthStore from "@/state-management/auth/store";
import AdminLayout from "./AdminLayout";
import SupermarketManagerLayout from "./SupermarketManagerLayout";

const SharedLayout = () => {
  const { user } = useAuthStore();

  if (user?.role === "admin") return <AdminLayout />;
  if (user?.role === "supermarket") return <SupermarketManagerLayout />;
};

export default SharedLayout;
