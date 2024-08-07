import SupermarketManagerDashboard from "@/pages/SupermarketManager/Dashboard";
import SupermarketManagerProducts from "@/pages/SupermarketManager/Products";
import SupermarketManagerLayout from "./Layouts/SupermarketManagerLayout";

const AdminRoutes = [
  {
    element: <SupermarketManagerLayout />,
    children: [
      { path: "products", element: <SupermarketManagerProducts /> },
      { path: "dashboard", element: <SupermarketManagerDashboard /> },
    ],
  },
];

export default AdminRoutes;
