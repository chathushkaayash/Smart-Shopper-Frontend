import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Driver } from "./useDriver";

const apiClient = new APIClient<Driver>("/drivers");

const useDrivers = () => {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: () =>
      apiClient.getAll({
      }),
    staleTime: 1000 * 5, // 5 seconds
  });
};

export default useDrivers;
