import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<{ name: string; earnings: number }>(
  "stats/supermarket_earnings"
);

const useSupermarketEarnings = () => {
  return useQuery({
    queryKey: ["supermarket_earnings"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 5, // 5 seconds
  });
};

export default useSupermarketEarnings;
