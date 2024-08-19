import PersonalDetails from "@/pages/CourierCompanyManager/PersonalDetails";
import CourierCompanyLayout from "./Layouts/CourierCompanyLayout";
import Deliveries from "@/pages/CourierCompanyManager/Deliveries";
import Request from "@/pages/CourierCompanyManager/Request";


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
