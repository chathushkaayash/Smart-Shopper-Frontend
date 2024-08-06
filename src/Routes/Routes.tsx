import App from "@/App";
import CardDetails from "@/pages/Consumer/CartDetails";
import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ConsumerRoutes from "./ConsumerRoutes";
import DriverRoutes from "./DriverRoutes";
import ErrorPage from "./ErrorPage";
import HomeLayout from "./Layouts/HomeLayout";
import PublicRoutes from "./PublicRoutes";
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


      // { path: "", element: <Landing /> },
      // { path: "login", element: <Login /> },
      // { path: "signup", element: <SignUp /> },

      { path: "cart", element: <CardDetails /> },
      // { path: "reviews", element: <Reviews /> },
    ],
  },
]);

export default router;
