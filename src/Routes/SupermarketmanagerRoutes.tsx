
import SupermarketManagerLayout from "./Layouts/SupermarketManagerLayout";
import SupermarketManagerOrders from "@/pages/SupermarketManager/OrderList";
import SupermarketManagerProducts from "@/pages/SupermarketManager/Products";
import SupermarketManagerDashboard from "@/pages/SupermarketManager/Dashboard";
import SuperMarketManagerOrder from "@/pages/SupermarketManager/Order";


const AdminRoutes = [
  {
    element: <SupermarketManagerLayout />,
    children: [
      { path: "orderList", element: <SupermarketManagerOrders /> },
      { path: "products", element: <SupermarketManagerProducts /> },
      {path: "dashboard", element: <SupermarketManagerDashboard />},
      {path: "order/:id", element: <SuperMarketManagerOrder />}

    ],
  },
];

export default AdminRoutes;
