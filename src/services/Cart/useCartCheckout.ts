import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export interface CheckoutRequest {
  id?: number;
  consumerId: number;
  shippingLocation: string;
  shippingAddress: string;
  shippingMethod: string;
}

const apiClient = new APIClient<CheckoutRequest, number>("/cart_to_order");

const useCartCheckout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<CheckoutRequest, "id">) => {
      return apiClient.create(data);
    },

    onSuccess: () => {
      toast.success("Checkout successful");
    },
    onError: () => {
      toast.error("An error occurred while checking out");
    },

    onSettled: () => {
      toast.dismiss();
      queryClient.resetQueries({ queryKey: ["cart_items"] });
    },

    onMutate: () => toast.loading("Checking out..."),
  });
};

export default useCartCheckout;
