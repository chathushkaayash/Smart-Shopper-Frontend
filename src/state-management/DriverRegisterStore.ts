import APIClient from "@/services/api-client";
import { DriverRegistrationDetails } from "@/services/types";
import { toast } from "sonner";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface DriverRegisterStore {
  stage: number;
  setStage: (stage: number) => void;
  driverDetails: DriverRegistrationDetails;
  setDriverDetails: (details: DriverRegistrationDetails) => void;

  sendPersonalData: () => void;
  otpResend: () => void;
  matchOtp: (otp: string) => void;
  updateVehicleDetails: (password: string, confirmPassword: string) => void;
}

const driverRegisterStore: StateCreator<DriverRegisterStore> = (set, get) => ({
  stage: 0,
  driverDetails: {} as DriverRegistrationDetails,
  setStage: (stage: number) => {
    set(() => ({ stage }));
  },
  setDriverDetails: (driverDetails: DriverRegistrationDetails) => {
    set(() => ({ driverDetails }));
  },

  // ------------------------- Send Drivers Personal Details to the server -------------------------
  sendPersonalData: () => {
    const { driverDetails } = get();

    const apiClient = new APIClient<DriverRegistrationDetails, number>(
      "/driver_otp"
    );

    if (driverDetails)
      apiClient
        .create(driverDetails)
        .then((res) => {
          set({ driverDetails: { ...driverDetails, id: res }, stage: 1 });
        })
        .catch((err) => {
          toast.error(err.message);
        });
  },

  // ------------------------- Resend OTP to the driver -------------------------
  otpResend: () => {
    const { driverDetails } = get();

    const apiClient = new APIClient<{ id: number }>("/driver_otp_resend");
    if (driverDetails)
      apiClient
        .create({ id: driverDetails.id })
        .then(() => {
          toast.success("OTP sent successfully");
        })
        .catch((err) => {
          toast.error(err.message);
        });
  },

  // ------------------------- Match OTP -------------------------
  matchOtp: (otp: string) => {
    const { driverDetails } = get();

    const apiClient = new APIClient<{ OTP: string; driverId: number }, string>(
      "/match_driver_otp"
    );

    if (driverDetails)
      apiClient
        .create({
          driverId: driverDetails.id || -1,
          OTP: otp,
        })
        .then(() => {
          set({ driverDetails: { ...driverDetails, OTP: otp }, stage: 2 });
          toast.success("OTP matched successfully");
        })
        .catch((err) => {
          toast.error(err.message);
        });
  },

  // ------------------------- Update Vehicle Details -------------------------
  // This function is used to update the vehicle details of the driver and set the password
  updateVehicleDetails: (password, confirmPassword) => {
    const { driverDetails } = get();

    const apiClient = new APIClient<DriverRegistrationDetails>(
      "/update_driver_vehicle_details/" + driverDetails.id
    );

    if (driverDetails)
      apiClient
        .create({ ...driverDetails, password, confirmPassword })
        .then(() => {
          toast.success("Password set successfully");
          set({ stage: 6 });
        })
        .catch((err) => {
          toast.error(err.message);
        });
  },
});

const persistedDriverRegisterStore = persist<DriverRegisterStore>(
  driverRegisterStore,
  {
    name: "driver-register-store",
  }
);

const useDriverRegisterStore = create(persistedDriverRegisterStore);

export default useDriverRegisterStore;
