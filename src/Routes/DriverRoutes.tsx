import Home from "@/pages/DriverApp/Dashboard/Home";
import Opportunities from "@/pages/DriverApp/Dashboard/Opportunities";
import RequestDetails from "@/pages/DriverApp/Dashboard/RequestDetails";
import DriverLayout from "./Layouts/DriverLayout";
import Account from "@/pages/DriverApp/Dashboard/Account";
import EditAccount from "@/pages/DriverApp/Dashboard/EditAccount";
import VehicleDetails from "@/pages/DriverApp/Dashboard/VehicleDetails";
import Deliveries from "@/pages/DriverApp/Dashboard/Deliveries";
import Ratings from "@/pages/DriverApp/Dashboard/Ratings";
import Support from "@/pages/DriverApp/Dashboard/Support";

const DriverRoutes = [
  {
    element: <DriverLayout />,
    children: [
      { path: "driver", element: <Home /> },
      { path: "driver/opportunities", element: <Opportunities /> },
      { path: "driver/opportunities/:id", element: <RequestDetails /> },
      { path: "driver/account", element: <Account /> },
      { path: "driver/account/edit", element: <EditAccount /> },
      { path: "driver/account/vehicle", element: <VehicleDetails /> },
      { path: "driver/account/deliveries", element: <Deliveries /> },
      { path: "driver/account/ratings", element: <Ratings /> },
      { path: "driver/account/support", element: <Support /> },
    ],
  },
];

export default DriverRoutes;
