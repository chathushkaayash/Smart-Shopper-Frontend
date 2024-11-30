import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CACHE_KEY_CONSUMERS } from "../cache-keys";
import { BaseAddress } from "../types";

export type AddressInsert = Omit<BaseAddress, "id">;

const apiClient = new APIClient<AddressInsert, string>("/addresses");

const useCreateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AddressInsert) => apiClient.create(data),

    onSuccess: () => {
      toast.success("Address added successfully");
    },
    onError: (error: string) => {
      toast.error(error);
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: [CACHE_KEY_CONSUMERS] });
    },
  });
};

export default useCreateAddress;
