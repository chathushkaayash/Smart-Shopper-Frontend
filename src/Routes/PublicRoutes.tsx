// import QrScanner from "@/components/Qr/QrScanner";
// import Test from "@/pages/Test";
// import path from "path";

import loadable from "@loadable/component";

const DriverLogin = loadable(
  () => import("@/pages/DriverApp/LoginRegister/Login/DriverLogin")
);
const LoginRegister = loadable(
  () => import("@/pages/DriverApp/LoginRegister/LoginRegister")
);
const DriverRegister = loadable(
  () => import("@/pages/DriverApp/LoginRegister/Register/DriverRegister")
);
const Login = loadable(() => import("@/pages/Login"));
const SignUp = loadable(() => import("@/pages/SignUp"));
const AboutPage = loadable(() => import("@/pages/Public/AboutUs"));

const PublicLayout = loadable(() => import("./Layouts/PublicLayout"));

const PublicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "driver/login", element: <DriverLogin /> },
      { path: "driver/login_register", element: <LoginRegister /> },
      { path: "driver/register", element: <DriverRegister /> },
      { path: "about", element: <AboutPage /> },

      // { path: "qr", element: <QrScanner /> },
      // { path: "test", element: <Test /> },
      // {path : "supermarket", element: <Supermarkets/>},
    
    ],
  },
];

export default PublicRoutes;

