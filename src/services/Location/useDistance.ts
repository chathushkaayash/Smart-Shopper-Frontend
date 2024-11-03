import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";

const apiClient = new APIClient<number>("/locations/consumer_supermarket_distance");

const useDistance = (locations: string[]) => {
  return useQueries({
    queries: locations.map((id) => ({
      queryKey: ["consumer_supermarket_distance", id],
      queryFn: () => apiClient.get(id),
      staleTime: 1000 * 60 * 30, // 30 minute
    })),
  });
};

export default useDistance;
