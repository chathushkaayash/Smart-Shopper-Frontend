import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Order } from "@/services/types";


const apiClient = new APIClient<Order>("/allOrders");

const useAllOrders = () => {
    return useQuery({
        queryKey: ["allorders"],
        queryFn: () => apiClient.getAll({}),
      });
    };

export default useAllOrders
