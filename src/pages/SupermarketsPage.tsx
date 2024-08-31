import AdminSuperMarkets from "./Admin/AdminSuperMarkets";
import useAuthStore from "@/state-management/auth/store";
import PublicSupermarkets from "@/pages/Public/PublicSupermarkets";

const SupermarketsPage = () => {
  console.log("SupermarketsPage");
  const user = useAuthStore((state) => state.user);

  if (user?.role === "Admin") return <AdminSuperMarkets />;
  return <PublicSupermarkets />;
};

export default SupermarketsPage;
