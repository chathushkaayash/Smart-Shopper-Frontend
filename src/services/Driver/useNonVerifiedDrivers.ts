import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { NonVerifiedDriver } from "../types";

const apiClient = new APIClient<NonVerifiedDriver>("/driver_requests");

const useNonVerifiedDrivers = () => {
  return useQuery({
    queryKey: ["non_verified_drivers"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 5, // 5 seconds
  });
};

export default useNonVerifiedDrivers;
