
import "./App.css";
import Navbar from "./components/Navbar";
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

      <Navbar /> 
      {/* <Login /> */}
      <SignUp/>

     
      <ProductDetail />

    </>
  );
}

export default App;
  