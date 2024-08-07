import OrderPage from "@/pages/Order/OrderPage";
import SharedLayout from "./Layouts/SharedLayout";
import OrdersPage from "@/pages/Order/OrdersPage";

const SharedRoutes = [
  {
    element: <SharedLayout />,
    children: [
      { path: "orders/:id", element: <OrderPage /> },
      { path: "orders", element: <OrdersPage /> },
    ],
  },
];

export default SharedRoutes;
