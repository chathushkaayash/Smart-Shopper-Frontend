import useAuthStore from "@/state-management/auth/store";
import SupermarketViewOrder from "../SupermarketManager/SupermarketViewOrder";
import ConsumerViewOrders from "@/pages/Consumer/ViewOrders";

const OrderPage = () => {
  const user = useAuthStore((state) => state.user);

  // if (user?.role === "consumer") return <ConsumerOrders />;
  if (user?.role === "Supermarket Manager") return <SupermarketViewOrder />;
  if (user?.role === "Consumer") return <ConsumerViewOrders />;
};

export default OrderPage;
