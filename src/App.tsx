import "./App.css";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

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
      
      <Login />
      {/* <Landing/> */}
    </>
  );
}

export default App;
