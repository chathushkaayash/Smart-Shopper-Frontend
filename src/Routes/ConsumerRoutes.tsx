import ConsumerCartDetails from "@/pages/CartDetails";
import ConsumerCheckout from "@/pages/Checkout";
import ConsumerOrders from "@/pages/ConsumerOrders";
import ConsumerProfile from "@/pages/ConsumerProfile";
import ConsumerPaymentSuccessful from "@/pages/PaymentSuccessful";
import ConsumerProduct from "@/pages/ProductDetail";
import ConsumerReviews from "@/pages/Reviews";
import ConsumerViewOrders from "@/pages/ViewOrders";
import ConsumerLayout from "./Layouts/ConsumerLayout";

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
