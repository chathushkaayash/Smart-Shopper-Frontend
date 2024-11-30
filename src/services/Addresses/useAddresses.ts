import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { BaseAddress } from "../types";
import { CACHE_KEY_ADDRESSES } from "../cache-keys";

const apiClient = new APIClient<BaseAddress>("/addresses");

const useAddresses = () => {
  return useQuery({
    queryKey: [CACHE_KEY_ADDRESSES],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 60 * 1, // 1 minutes
  });
};

export default useAddresses;
