import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CartDetails from "./pages/CartDetails";

import ProductDetail from "./pages/ProductDetail";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import ConsumerProfile from "./pages/ConsumerProfile";
import Reviews from "./pages/Reviews";
import ShippingAddress from "./pages/ConsumerShippingAddress";
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
      <Router>
        <Navbar />
        <Routes>
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
        </Routes>
      </Router>
      <BottomNav />
    </>
  );
}

export default App;
