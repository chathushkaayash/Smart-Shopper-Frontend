import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Otp from "./Otp";
import SelectCompany from "./SelectCompany";
import SelectVehicle from "./SelectVehicle";
import VehicleImage from "./VehicleImage";
import EnterPassword from "./EnterPassword";
import SignUpThank from "./SignUpThank";

const DriverRegister = () => {
  const [stage, setStage] = useState(0);
  return (
    <>
      {stage === 0 && <PersonalDetails setStage={(s: number) => setStage(s)} />}
      {stage === 1 && <Otp setStage={(s: number) => setStage(s)} />}
      {stage === 2 && <SelectCompany setStage={(s: number) => setStage(s)} />}
      {stage === 3 && <SelectVehicle setStage={(s: number) => setStage(s)} />}
      {stage === 4 && <VehicleImage setStage={(s: number) => setStage(s)} />}
      {stage === 5 && <EnterPassword setStage={(s: number) => setStage(s)} />}
      {stage === 6 && <SignUpThank />}
    </>
  );
};

export default DriverRegister;
