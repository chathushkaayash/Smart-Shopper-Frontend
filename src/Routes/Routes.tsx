import App from "@/App";
import CardDetails from "@/pages/Consumer/ViewCart";

import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ConsumerRoutes from "./ConsumerRoutes";
import CourierCompanyRoutes from "./CourierCompanyRoutes";
import DriverRoutes from "./DriverRoutes";
import ErrorPage from "./ErrorPage";
import HomeLayout from "./Layouts/HomeLayout";
import PublicRoutes from "./PublicRoutes";
import SharedRoutes from "./SharedRoutes";
import SupermarketManagerRoutes from "./SupermarketmanagerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <HomeLayout /> },

      ...AdminRoutes,
      ...DriverRoutes,
      ...PublicRoutes,
      ...ConsumerRoutes,
      ...SupermarketManagerRoutes,
      ...SharedRoutes,
      ...CourierCompanyRoutes,

      { path: "cart", element: <CardDetails /> },
    ],
  },
]);

export default router;
