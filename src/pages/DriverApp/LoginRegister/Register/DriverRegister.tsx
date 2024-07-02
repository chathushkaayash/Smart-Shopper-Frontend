import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Otp from "./Otp";

const DriverRegister = () => {
  const [stage, setStage] = useState(0);
  return (
    <>
      {stage === 0 && <PersonalDetails setStage={(s: number) => setStage(s)} />}
      {stage === 1 && <Otp />}
    </>
  );
};

export default DriverRegister;
