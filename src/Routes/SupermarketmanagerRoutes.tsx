import loadable from "@loadable/component";

const SupermarketManagerDashboard = loadable(
  () => import("@/pages/SupermarketManager/Dashboard")
);
const SupermarketManagerProducts = loadable(
  () => import("@/pages/SupermarketManager/Products")
);
const SupermarketManagerLayout = loadable(
  () => import("./Layouts/SupermarketManagerLayout")
);

const AdminRoutes = [
  {
    element: <SupermarketManagerLayout />,
    children: [
      { path: "products", element: <SupermarketManagerProducts /> },
      { path: "dashboard", element: <SupermarketManagerDashboard /> },
      // {path : "scan", element: <SupermarketManagerScan />},
      // {path : "hi", element: <SupermarketManagerScan />},
      // {path : "profile-settings", element: <SupermarketManagerProfile />}
    ],
  },
];

export default AdminRoutes;
