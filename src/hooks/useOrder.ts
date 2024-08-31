import APIClient from "@/services/api-client";
import { DateTime } from "@/utils/Time";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Opportunity } from "./useOpportunity";

export interface OrderItem {
  id: number;
  supermarketId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface SupermarketOrder {
  id: number;
  status: string;
  qrCode: string;
  _orderId: number;
  supermarketId: number;
}

export interface Order {
  id: number;
  consumerId: number;
  status: string;
  shippingAddress: string;
  shippingMethod: string;
  location: string;
  orderItems: OrderItem[];
  deliveryFee: number;

  supermarketOrders: SupermarketOrder[];
  orderPlacedOn: DateTime;
  opportunity: Opportunity[];
}

const apiClient = new APIClient<Order>("/orders");

const useOrder = (id: number) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () =>
      apiClient.get(id).catch((error) => {
        toast.error(error.message);
        return null;
      }),
    retry: 0,
  });
};

export default useOrder;
