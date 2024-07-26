import ConsumerLanding from "@/pages/Consumer/Landing";
import ConsumerProduct from "@/pages/Consumer/ProductDetail";
import ConsumerCartDetails from "@/pages/Consumer/CartDetails";
import ConsumerProfile from "@/pages/Consumer/ConsumerProfile";
import ConsumerReviews from "@/pages/Consumer/Reviews";
import ConsumerOrders from "@/pages/Consumer/ConsumerOrders";
import ConsumerViewOrders from "@/pages/Consumer/ViewOrders";
import ConsumerPaymentSuccessful from "@/pages/Consumer/PaymentSuccessful";
import ConsumerLayout from "./Layouts/ConsumerLayout";
import ConsumerCheckout from "@/pages/Consumer/Checkout";

const ConsumerRoutes = [
  {
    element: <ConsumerLayout />,
    children: [
      // { path: "", element: <ConsumerLanding /> },
      { path: "product", element: <ConsumerProduct /> },
      { path: "profile", element: <ConsumerProfile /> },
      { path: "review", element: <ConsumerReviews /> },
      { path: "orders", element: <ConsumerOrders /> },
      { path: "view-orders", element: <ConsumerViewOrders /> },
      { path: "cart", element: <ConsumerCartDetails /> },
      { path: "payment-success", element: <ConsumerPaymentSuccessful /> },
      { path: "checkout", element: <ConsumerCheckout /> },
    ],
  },
];

export default ConsumerRoutes;
