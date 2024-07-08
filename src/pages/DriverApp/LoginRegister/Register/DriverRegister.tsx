import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Otp from "./Otp";
import SelectCompany from "./SelectCompany";
import SelectVehicle from "./SelectVehicle";
// import VehicleImage from "./VehicleImage";

const DriverRegister = () => {
  const [stage, setStage] = useState(3);
  return (
    <>
      {stage === 0 && <PersonalDetails setStage={(s: number) => setStage(s)} />}
      {stage === 1 && <Otp setStage={(s: number) => setStage(s)} />}
      {stage === 2 && <SelectCompany setStage={(s: number) => setStage(s)} />}
      {stage === 3 && <SelectVehicle setStage={(s: number) => setStage(s)} />}
      {/* {stage === 4 && <VehicleImage setStage={(s: number) => setStage(s)} />} */}
    </>
  );
};

export default DriverRegister;
