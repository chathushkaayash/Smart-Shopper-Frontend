import useAuthStore from "@/state-management/auth/store";
import SupermarketViewOrder from "../SupermarketManager/SupermarketViewOrder";

const OrderPage = () => {
    const user = useAuthStore((state) => state.user);

    // if (user?.role === "consumer") return <ConsumerOrders />;
    if (user?.role === "Supermarket Manager") return <SupermarketViewOrder />;


}

export default OrderPage