import useAuthStore from "@/state-management/auth/store";
import SupermarketViewOrder from "../SupermarketManager/SupermarketViewOrder";
import CustomerViewOrder from "../Consumer/Order/CustomerViewOrder";
import ConsumerViewOrders from "@/pages/Consumer/ViewOrders";

const OrderPage = () => {
  const user = useAuthStore((state) => state.user);

  if (user?.role === "Consumer") return <CustomerViewOrder />;
  if (user?.role === "Supermarket Manager") return <SupermarketViewOrder />;
};

export default OrderPage;
