
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CartDetails from "./pages/CartDetails";

import ProductDetail from "./pages/ProductDetail";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import Reviews from "./pages/Reviews";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/test" element={<Test />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      
    </Router>
      


    </>
  );
}

export default App;
  