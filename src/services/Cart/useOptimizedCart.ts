import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "../types";

interface OptimizedCartItemsRequest {
  consumerId: number;
  location: string;
}

const apiClient = new APIClient<OptimizedCartItemsRequest,CartItem[]>("/optimizer");

const useOptimizedCartItems = ({
  consumerId,
  location,
}: OptimizedCartItemsRequest) => {
  return useQuery({
    queryKey: ["optimized_cart_items", consumerId, location],
    queryFn: () =>
      apiClient.create({
        consumerId: consumerId,
        location: location,
      }),
    onError: () => {},
  });
};

export default useOptimizedCartItems;
