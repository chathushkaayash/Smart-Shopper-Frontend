import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";
import { Driver } from "../types";

const apiClient = new APIClient<Driver>("/drivers");

// This hook is used to fetch driver details by driver id
const useDriver = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["drivers", id],
      queryFn: () => apiClient.get(id),
      staleTime: 1000 * 60 * 30, // 30 minutes
    })),
  });
};

export default useDriver;
