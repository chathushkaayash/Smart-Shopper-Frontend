// import SupermarketManagerDashboard from "@/pages/SupermarketManager/Dashboard";
// import SupermarketManagerProducts from "@/pages/SupermarketManager/Products";
// import SupermarketManagerLayout from "./Layouts/SupermarketManagerLayout";
// import SupermarketManagerScan from "@/pages/SupermarketManager/QR/ScanQR";
// import SupermarketManagerProfile from "@/pages/SupermarketManager/Profile/Profile";
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

const SupermarketManagerScan = loadable(
  () => import("@/pages/SupermarketManager/QR/ScanQR")
);

const SupermarketManagerProfile = loadable(
  () => import("@/pages/SupermarketManager/Profile/Profile")
);


const AdminRoutes = [
  {
    element: <SupermarketManagerLayout />,
    children: [
      { path: "products", element: <SupermarketManagerProducts /> },
      { path: "dashboard", element: <SupermarketManagerDashboard /> },
      {path: "scan", element: <SupermarketManagerScan />},

      // {path : "scan", element: <SupermarketManagerScan />},
      // {path : "hi", element: <SupermarketManagerScan />},
      {path : "profile-settings", element: <SupermarketManagerProfile />}
    ],
  },
];

export default AdminRoutes;
