import DriverReviews from "@/pages/DriverApp/Dashboard/DriverReviews";
import loadable from "@loadable/component";

const Home = loadable(() => import("@/pages/DriverApp/Dashboard/Home"));
const DriverLayout = loadable(() => import("./Layouts/DriverLayout"));
const Account = loadable(() => import("@/pages/DriverApp/Dashboard/Account"));
const Support = loadable(() => import("@/pages/DriverApp/Dashboard/Support"));
const ViewMap = loadable(() => import("@/pages/DriverApp/Dashboard/ViewMap"));
const Earnings = loadable(() => import("@/pages/DriverApp/Dashboard/Earnings"));
const ViewOpportunity = loadable(
  () => import("@/pages/DriverApp/Dashboard/ViewOpportunity")
);
const EditAccount = loadable(
  () => import("@/pages/DriverApp/Dashboard/EditAccount")
);
const VehicleDetails = loadable(
  () => import("@/pages/DriverApp/Dashboard/VehicleDetails")
);
const ChangePassword = loadable(
  () => import("@/pages/DriverApp/Dashboard/ChangePassword")
);
const Opportunities = loadable(
  () => import("@/pages/DriverApp/Dashboard/Opportunities")
);
const Deliveries = loadable(
  () => import("@/pages/DriverApp/Dashboard/Deliveries")
);

const DriverRoutes = [
  {
    element: <DriverLayout />,
    children: [
      { path: "driver", element: <Home /> },
      { path: "driver/opportunities", element: <Opportunities /> },
      { path: "driver/opportunities/:id", element: <ViewOpportunity /> },
      { path: "driver/earnings", element: <Earnings /> },
      { path: "driver/account", element: <Account /> },
      { path: "driver/account/edit", element: <EditAccount /> },
      { path: "driver/account/change-password", element: <ChangePassword /> },
      { path: "driver/account/vehicle", element: <VehicleDetails /> },
      { path: "driver/deliveries", element: <Deliveries /> },
      { path: "driver/account/reviews", element: <DriverReviews /> },
      { path: "driver/account/support", element: <Support /> },
      { path: "driver/opportunities/viewmap/:id", element: <ViewMap /> },
    ],
  },
];

export default DriverRoutes;
