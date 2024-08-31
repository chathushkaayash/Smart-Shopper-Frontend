import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";


const apiClient = new APIClient<number>("stats/earnings");

const useEarning = (supermarketId: number) => {
  return useQuery({
    queryKey: ["earnings", supermarketId],
    queryFn: () => apiClient.get(supermarketId),
    retry: 2,
  });
};

export default useEarning;
