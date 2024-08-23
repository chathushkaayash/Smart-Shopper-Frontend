import APIClient from "@/services/api-client";
import { User } from "@/state-management/auth/store";
import { useQuery } from "@tanstack/react-query";

export interface Driver {
  id: number;
  user: User;
  nic: string;
  courierCompany: string;
  vehicleType: string;
  vehicleColor: string;
  vehicleName: string;
  vehicleNumber: string;
}

const apiClient = new APIClient<Driver>("/drivers");

const useDriver = (id: number) => {
  return useQuery({
    queryKey: ["drivers", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

export default useDriver;
