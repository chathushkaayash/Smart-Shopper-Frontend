import useAuthStore from "@/state-management/auth/store";
import AdminLayout from "./AdminLayout";
import SupermarketManagerLayout from "./SupermarketManagerLayout";

const SharedLayout = () => {
  const { user } = useAuthStore();

  if (user?.role === "Admin") return <AdminLayout />;
  if (user?.role === "Supermarket Manager") return <SupermarketManagerLayout />;
};

export default SharedLayout;
