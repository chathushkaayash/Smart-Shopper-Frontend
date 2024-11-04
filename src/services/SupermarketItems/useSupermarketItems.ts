import APIClient from "@/services/api-client";
import { SupermarketItem } from "@/services/types";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<SupermarketItem>("/supermarket_items");

export interface SupermarketItemQuery {
  productId?: number;
}

const useSupermarketItems = (supermarketItemQuery: SupermarketItemQuery) => {
  return useQuery({
    queryKey: ["supermarket_items_by_product_id", supermarketItemQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          productId: supermarketItemQuery?.productId || 0,
        },
      }),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export default useSupermarketItems;
