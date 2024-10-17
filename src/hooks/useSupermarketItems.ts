import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProduct";
import { Supermarket } from "../services/Supermarket/useSupermarket";
import { CartItem } from "./useCartItem";

export interface SupermarketItem {
  id: number;
  productId: number;
  supermarketId: number;
  price: number;
  discount: number;
  availableQuantity: number;
}

export interface SupermarketItemWithRelations {
  product: Product;
  supermarket: Supermarket;
  cartItem: CartItem[];
  id: number;
  productId: number;
  supermarketId: number;
  price: number;
  discount: number;
  availableQuantity: number;
}

const apiClient = new APIClient<SupermarketItemWithRelations>(
  "/supermarketitems"
);

// get SupermarketItem[] for a product
const useSupermarketItems = (productId: number = 0) => {
  return useQuery({
    queryKey: ["store_prices_for_product", productId],
    queryFn: () => apiClient.getAll({ params: { productId } }),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export default useSupermarketItems;
