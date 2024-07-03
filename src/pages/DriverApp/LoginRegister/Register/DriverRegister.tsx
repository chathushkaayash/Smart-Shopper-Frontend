import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Otp from "./Otp";
import SelectCompany from "./SelectCompany";

const DriverRegister = () => {
  const [stage, setStage] = useState(0);
  return (
    <>
      {stage === 0 && <PersonalDetails setStage={(s: number) => setStage(s)} />}
      {stage === 1 && <Otp setStage={(s: number) => setStage(s)} />}
      {stage === 2 && <SelectCompany />}
    </>
  );
};

export default DriverRegister;
