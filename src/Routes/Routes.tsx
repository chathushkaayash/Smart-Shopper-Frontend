import App from "@/App";
import CardDetails from "@/pages/Consumer/CartDetails";

import { createBrowserRouter } from "react-router-dom";
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
      {
        index: true,
        element: <HomeLayout />,
      },
      ...AdminRoutes,
      ...DriverRoutes,
      ...PublicRoutes,
      ...ConsumerRoutes,
      ...SupermarketManagerRoutes,
      ...SharedRoutes,
      ...CourierCompanyRoutes,

      // { path: "", element: <Landing /> },
      // { path: "login", element: <Login /> },
      // { path: "signup", element: <SignUp /> },

      { path: "cart", element: <CardDetails /> },
    ],
  },
]);

export default router;
