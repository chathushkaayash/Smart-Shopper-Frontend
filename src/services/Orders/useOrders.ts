import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Order } from "../types";

const apiClient = new APIClient<Order>("/orders");

const useOrders = (supermarketId = -1) => {
  return useQuery({
    queryKey: ["orders", supermarketId],
    queryFn: () =>
      apiClient.getAll({ params: { supermarketId: supermarketId } }),
  });
};

export default useOrders;
