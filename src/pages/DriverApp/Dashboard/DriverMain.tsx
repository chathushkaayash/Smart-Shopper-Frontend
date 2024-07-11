import { Route,  Routes } from "react-router-dom";
import DriverLogin from "../LoginRegister/Login/DriverLogin";
import LoginRegister from "../LoginRegister/LoginRegister";
import DriverRegister from "../LoginRegister/Register/DriverRegister";
import Opportunities from "./Opportunities";
import Home from "./Home";




const DriverMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/login_register" element={<LoginRegister />} />
      <Route path="/login" element={<DriverLogin />} />
      <Route path="/register" element={<DriverRegister />} />
    </Routes>
  );
};

export default DriverMain;





