import useDriverRegisterStore from "@/state-management/DriverRegisterStore";
import EnterPassword from "./EnterPassword";
import DriverOtp from "./DriverOtp";
import PersonalDetails from "./PersonalDetails";
import SelectCompany from "./SelectCompany";
import SelectVehicle from "./SelectVehicle";
import SignUpThank from "./SignUpThank";
import VehicleImage from "./VehicleImage";

const DriverRegister = () => {
  const stage = useDriverRegisterStore((state) => state.stage);

  return (
    <>
      {stage === 0 && <PersonalDetails />}
      {stage === 1 && <DriverOtp />}
      {stage === 2 && <SelectCompany />}
      {stage === 3 && <SelectVehicle />}
      {stage === 4 && <VehicleImage />}
      {stage === 5 && <EnterPassword />}
      {stage === 6 && <SignUpThank />}
    </>
  );
};

export default DriverRegister;
