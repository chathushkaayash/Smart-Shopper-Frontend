
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

import { Show } from "@chakra-ui/react";
import BottomNav from "./components/BottomNav";


export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  return (
    <>
      <Show above="md">
        <Navbar />
      </Show>

      <Outlet />
      {/* <Router>

        {/* <RouterProvider router={router}/> */}

      {/* <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/ConsumerProfile" element={<ConsumerProfile />} />
          <Route path="/ShippingAddress" element={<ShippingAddress />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/paymentSuccessful" element={<PaymentSuccessful />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/test" element={<Test />} />

          <Route path="/driver/*" element={<DriverMain />} />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/admin" element={<AdminMain />} />
        </Routes> */}

      <Show below="md">
        <BottomNav />
      </Show>
    </>
  );
}

export default App;
