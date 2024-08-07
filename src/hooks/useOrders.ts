import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Order } from "./useOrder";

const apiClient = new APIClient<Order>("/orders");

const useOrders = () => {
  return useQuery<FetchResponse<Order>, Error>({
    queryKey: ["orders"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 60 * 30, // 30 minute
  });
};

export default useOrders;
