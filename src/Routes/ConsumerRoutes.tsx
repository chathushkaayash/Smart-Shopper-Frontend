import loadable from "@loadable/component";

const ConsumerCartDetails = loadable(
  () => import("@/pages/Consumer/CartDetails")
);
const ConsumerProfile = loadable(
  () => import("@/pages/Consumer/ConsumerProfile")
);
const ProductReview = loadable(() => import("@/pages/Consumer/Reviews"));
const ConsumerViewOrders = loadable(
  () => import("@/pages/Consumer/ViewOrders")
);
const ConsumerPaymentSuccessful = loadable(
  () => import("@/pages/Consumer/PaymentSuccessful")
);
const ConsumerLayout = loadable(() => import("./Layouts/ConsumerLayout"));
const ConsumerCheckout = loadable(() => import("@/pages/Consumer/Checkout"));
const CartComparison = loadable(
  () => import("@/pages/Consumer/CartComparison/CartComparison")
);
const ViewProduct = loadable(() => import("@/pages/Consumer/ViewProduct"));
const AboutUs = loadable(() => import("@/pages/Consumer/AboutUs"));

const ConsumerRoutes = [
  {
    element: <ConsumerLayout />,
    children: [
      { path: "products/:id", element: <ViewProduct /> },
      { path: "profile", element: <ConsumerProfile /> },
      { path: "view-orders/:id", element: <ConsumerViewOrders /> },
      { path: "cart", element: <ConsumerCartDetails /> },
      { path: "payment-success/:id", element: <ConsumerPaymentSuccessful /> },
      { path: "checkout", element: <ConsumerCheckout /> },
      { path: "cart-comparison", element: <CartComparison /> },
      { path: "about", element: <AboutUs /> },
      {
        path: "reviews/supermarket_item/:id",
        element: <ProductReview />,
      },
    ],
  },
];

export default ConsumerRoutes;
