
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CartDetails from "./pages/CartDetails";

import ProductDetail from "./pages/ProductDetail";
import ProductGrid from "./components/ProductGrid";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      
    </Router>
      


    </>
  );
}

export default App;
  