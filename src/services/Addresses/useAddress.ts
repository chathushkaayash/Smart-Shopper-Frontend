import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { BaseAddress } from "../types";
import { CACHE_KEY_ADDRESSES } from "../cache-keys";

const apiClient = new APIClient<BaseAddress>("/addresses");

const useAddress = (id: number) => {
  return useQuery({
    queryKey: [CACHE_KEY_ADDRESSES, id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 1, // 1 minutes
  });
};

export default useAddress;
