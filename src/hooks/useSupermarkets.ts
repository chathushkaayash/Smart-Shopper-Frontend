import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Supermarket } from "./useSupermarket";

const apiClient = new APIClient<Supermarket>("/supermarkets");

const useSuperMarkets = () => {
  return useQuery<FetchResponse<Supermarket>, Error>({
    queryKey: ["supermarkets"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useSuperMarkets;
