import loadable from "@loadable/component";

const OrderPage = loadable(() => import("@/pages/Order/OrderPage"));
const OrdersPage = loadable(() => import("@/pages/Order/OrdersPage"));
const SharedLayout = loadable(() => import("./Layouts/SharedLayout"));

const SharedRoutes = [
  {
    element: <SharedLayout />,
    children: [
      { path: "orders", element: <OrdersPage /> },
      { path: "orders/:id", element: <OrderPage /> },
    ],
  },
];

export default SharedRoutes;
