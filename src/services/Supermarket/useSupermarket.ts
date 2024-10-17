import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";
import { Supermarket } from "@/services/types";

const apiClient = new APIClient<Supermarket>("/supermarkets");

const useSupermarket = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["supermarket", id],
      queryFn: () => apiClient.get(id),
      staleTime: 1000 * 60 * 30, // 30 minute
    })),
  });
};

export default useSupermarket;
