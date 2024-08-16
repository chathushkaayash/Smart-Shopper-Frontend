import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Otp from "./Otp";
import SelectCompany from "./SelectCompany";
import SelectVehicle from "./SelectVehicle";
import VehicleImage from "./VehicleImage";
import EnterPassword from "./EnterPassword";
import SignUpThank from "./SignUpThank";

export interface DriverDetails {
  id: number;
  courierCompany: string;
  vehicleType: string;
  vehicleColor: string;
  vehicleName: string;
  vehicleNumber: string;
  password: string;
  confirmPassword: string;
  OTP: string;
}

const DriverRegister = () => {
  const [stage, setStage] = useState(1);
  const [driverDetails, setDriverDetails] = useState<DriverDetails>(
    {id:2} as DriverDetails
  );

  return (
    <>
      {stage === 0 && (
        <PersonalDetails
          setStage={(s: number) => setStage(s)}
          driverDetails={driverDetails}
          setDriverDetails={setDriverDetails}
        />
      )}
      {stage === 1 && (
        <Otp
          setStage={(s: number) => setStage(s)}
          driverDetails={driverDetails}
          setDriverDetails={setDriverDetails}
        />
      )}

      {stage === 2 && (
        <SelectCompany
          setStage={(s: number) => setStage(s)}
          driverDetails={driverDetails}
          setDriverDetails={setDriverDetails}
        />
      )}
      {stage === 3 && (
        <SelectVehicle
          setStage={(s: number) => setStage(s)}
          driverDetails={driverDetails}
          setDriverDetails={setDriverDetails}
        />
      )}
      {stage === 4 && (
        <VehicleImage
          setStage={(s: number) => setStage(s)}
          driverDetails={driverDetails}
          setDriverDetails={setDriverDetails}
        />
      )}
      {stage === 5 && (
        <EnterPassword
          setStage={(s: number) => setStage(s)}
          driverDetails={driverDetails}
          setDriverDetails={setDriverDetails}
        />
      )}
      {stage === 6 && <SignUpThank />}
    </>
  );
};

export default DriverRegister;
