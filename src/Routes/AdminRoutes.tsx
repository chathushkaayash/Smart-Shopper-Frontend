import AdminAdvertisements from "@/pages/Admin/AdminAdvertisements";
import AdminCourierServices from "@/pages/Admin/AdminCourierServices";
import AdminCustomers from "@/pages/Admin/AdminCustomers";
import AdminOrders from "@/pages/Admin/AdminOrders";
import AdminOverview from "@/pages/Admin/AdminOverview";
import AdminSettings from "@/pages/Admin/AdminSettings";
import AdminSuperMarkets from "@/pages/Admin/AdminSuperMarkets";
import AdminTransactions from "@/pages/Admin/AdminTransactions";
import AdminLayout from "./Layouts/AdminLayout";

const AdminRoutes = [
  {
    element: <AdminLayout />,
    children: [
      { path: "overview", element: <AdminOverview /> },
      { path: "customers", element: <AdminCustomers /> },
      { path: "supermarkets", element: <AdminSuperMarkets /> },
      { path: "courier-services", element: <AdminCourierServices /> },
      { path: "orders", element: <AdminOrders /> },
      { path: "transactions", element: <AdminTransactions /> },
      { path: "advertisements", element: <AdminAdvertisements /> },
      { path: "settings", element: <AdminSettings /> },
    ],
  },
];

export default AdminRoutes;
