import App from "@/App";
import Reviews from "@/components/Feedback";
import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ConsumerRoutes from "./ConsumerRoutes";
import DriverRoutes from "./DriverRoutes";
import ErrorPage from "./ErrorPage";
import HomeLayout from "./Layouts/HomeLayout";
import PublicRoutes from "./PublicRoutes";

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

      // { path: "", element: <Landing /> },
      // { path: "login", element: <Login /> },
      // { path: "signup", element: <SignUp /> },

      // { path: "cart", element: <CartDetails /> },
      // { path: "product/:id", element: <ProductDetail /> },
      // { path: "ConsumerProfile", element: <ConsumerProfile /> },

      // { path: "ShippingAddress", element: <ShippingAddress /> },
      // { path: "reviews", element: <Reviews /> },
      // { path: "paymentSuccessful", element: <PaymentSuccessful /> },

      // { path: "Footer", element: <Footer /> },
      // { path: "test", element: <Test /> },

      // { path: "driver", element: <LoginRegister /> },
      // { path: "driver/login_register", element: <LoginRegister /> },
      // { path: "driver/login", element: <DriverLogin /> },
      // { path: "driver/register", element: <DriverRegister /> },
      { path: "reviews", element: <Reviews /> },
    ],
  },
]);

export default router;
