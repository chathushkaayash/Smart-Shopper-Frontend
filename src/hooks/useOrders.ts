import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Order } from "./useOrder";

const apiClient = new APIClient<Order>("/orders");

const useOrders = () => {
  return useQuery<FetchResponse<Order>, Error>({
    queryKey: ["orders"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useOrders;
