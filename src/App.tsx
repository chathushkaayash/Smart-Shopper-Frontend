import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import CartDetails from "./pages/CartDetails";

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
