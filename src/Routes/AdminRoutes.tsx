import loadable from "@loadable/component";

const AdminAdvertisements = loadable(
  () => import("@/pages/Admin/AdminAdvertisements")
);
const AdminCourierServices = loadable(
  () => import("@/pages/Admin/AdminCourierServices")
);
const AdminCustomers = loadable(() => import("@/pages/Admin/AdminCustomers"));
const AdminOverview = loadable(() => import("@/pages/Admin/AdminOverview"));
const AdminSettings = loadable(() => import("@/pages/Admin/AdminSettings"));
// const AdminTransactions = loadable(
//   () => import("@/pages/Admin/AdminTransactions")
// );
const AdminReports = loadable(() => import("@/pages/Admin/AdminReports"));
const AdminOrders = loadable(() => import("@/pages/Admin/AdminOrders"));
const AdminLayout = loadable(() => import("@/Routes/Layouts/AdminLayout"));
const Supermarkets = loadable(() => import("@/pages/Admin/Supermarkets"));
import AddSuperMarket from "@/pages/Admin/AddSuperMarket";

const AdminRoutes = [
  {
    element: <AdminLayout />,
    children: [
      { path: "overview", element: <AdminOverview /> },
      { path: "customers", element: <AdminCustomers /> },
      { path: "courier-services", element: <AdminCourierServices /> },
      // { path: "transactions", element: <AdminTransactions /> },
      { path: "advertisements", element: <AdminAdvertisements /> },
      { path: "reports", element: <AdminReports /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "supermarketList", element: <Supermarkets /> },
      {path: "orders", element: <AdminOrders />},
      {path:"/add-supermarket",element:<AddSuperMarket/>}
    ],
  },
];

export default AdminRoutes;
