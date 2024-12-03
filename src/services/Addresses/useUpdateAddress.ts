import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CACHE_KEY_ADDRESSES } from "../cache-keys";
import { BaseAddress } from "../types";

export type AddressUpdate = Omit<BaseAddress, "id">;

const apiClient = new APIClient<AddressUpdate, string>("/addresses");

const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BaseAddress) =>
      apiClient.update(data.id, {
        addressName: data.addressName,
        address: data.address,
        city: data.city,
        location: data.location,
        priority: data.priority,
        consumerId: data.consumerId,
      }),

    onSuccess: () => {
      toast.success("Address updated successfully");
    },

    onError: (error: string) => {
      toast.error(error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [CACHE_KEY_ADDRESSES] });
    },
  });
};

export default useUpdateAddress;
