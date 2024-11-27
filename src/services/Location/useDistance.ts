import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface DistanceRequest {
  location1: string;
  location2: string;
}

const apiClient = new APIClient<DistanceRequest, number>(
  "/locations/consumer_supermarket_distance"
);

const useDistance = (location1: string, location2: string) => {
  return useQuery({
    queryKey: ["consumer_supermarket_distance", location1, location2],
    queryFn: () =>
      apiClient.create({
        location1,
        location2,
      }),
    staleTime: 1000 * 60 * 30, // 30 minute
  });
};

export default useDistance;
