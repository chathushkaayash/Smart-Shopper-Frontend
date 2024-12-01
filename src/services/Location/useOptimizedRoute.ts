import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { OptimizedRoute } from "../types";
import { CACHE_KEY_OPTIMIZED_ROUTE } from "../cache-keys";

interface OptimizeRouteRequest {
  supermarketIds: number[];
  deliveryLocation: string;
}

const apiClient = new APIClient<OptimizeRouteRequest, OptimizedRoute>(
  "/locations/optimize_route"
);

const useOptimizedRoute = (supermarketIds: number[], deliveryLocation: string) => {
  return useQuery({
    queryKey: [CACHE_KEY_OPTIMIZED_ROUTE, supermarketIds, deliveryLocation],
    queryFn: () =>
      apiClient.create({
        supermarketIds,
        deliveryLocation,
      }),
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};

export default useOptimizedRoute;
