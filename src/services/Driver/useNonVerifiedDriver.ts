import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";
import { NonVerifiedDriver } from "../types";

const apiClient = new APIClient<NonVerifiedDriver>("/driver_requests");

const useNonVerifiedDriver = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["non_verified_drivers",id],
      queryFn: () => apiClient.get(id),
      staleTime: 1000 * 60 * 30, // 30 seconds
    })),
  });
};

export default useNonVerifiedDriver;
