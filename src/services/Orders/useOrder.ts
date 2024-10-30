import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";
import { Order } from "../types";


const apiClient = new APIClient<Order>("/orders");

const useOrder = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["orders", id],
      queryFn: () => apiClient.get(id),
      // staleTime: 1000 * 30 // 30 seconds
    })),
  });
};

export default useOrder;
