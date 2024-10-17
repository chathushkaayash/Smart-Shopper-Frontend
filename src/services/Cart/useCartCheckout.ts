import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export interface CheckoutRequest {
  id?: number;
  consumerId: number;
  shippingAddress: string;
  shippingMethod: string;
}

const apiClient = new APIClient<CheckoutRequest, number>("/cartaToOrder");

const useCartCheckout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<CheckoutRequest, "id">) => {
      return apiClient.create(data);
    },

    onSuccess: (res) => {
      toast.success("Checkout successful");
      return res;
    },
    onError: () => {
      toast.error("An error occurred while checking out");
      return 25;
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: ["cart_items"] });
    },
  });
};

export default useCartCheckout;
