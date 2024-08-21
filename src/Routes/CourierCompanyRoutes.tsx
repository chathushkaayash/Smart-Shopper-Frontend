import loadable from "@loadable/component";

const PersonalDetails = loadable(
  () => import("@/pages/CourierCompanyManager/PersonalDetails")
);
const CourierCompanyLayout = loadable(
  () => import("./Layouts/CourierCompanyLayout")
);
const Deliveries = loadable(
  () => import("@/pages/CourierCompanyManager/Deliveries")
);
const Request = loadable(() => import("@/pages/CourierCompanyManager/Request"));

const CourierCompanyRoutes = [
  {
    element: <CourierCompanyLayout />,
    children: [
      { path: "/personalDetails", element: <PersonalDetails /> },
      { path: "/deliveries", element: <Deliveries /> },
      { path: "/requests", element: <Request /> },
    ],
  },
];

export default CourierCompanyRoutes;
