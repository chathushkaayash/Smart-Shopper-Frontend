import APIClient from "@/services/api-client";
import { DateTime } from "@/utils/Time";
import { useQuery } from "@tanstack/react-query";

export interface OrderItems {
  id: number;
  supermarketId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  consumerId: number;
  status: string;
  shippingAddress: string;
  shippingMethod: string;
  location: string;
  orderItems: OrderItems[];

  supermarketIdList: string;
  orderPlacedOn: DateTime;
}

const apiClient = new APIClient<Order>("/orders");

const useOrder = (id: number) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => apiClient.get(id),
    retry: 2,
  });
};

export default useOrder;
