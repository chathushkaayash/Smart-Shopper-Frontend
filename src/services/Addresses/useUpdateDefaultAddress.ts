import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CACHE_KEY_ADDRESSES } from "../cache-keys";
import { BaseAddress } from "../types";

const apiClient = new APIClient<BaseAddress, string>("/addresses/default");

const useUpdateDefaultAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BaseAddress) => apiClient.update(data.id, {}),

    onSuccess: () => {
      toast.success("Default address updated successfully");
    },

    onError: (error: string) => {
      toast.error(error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [CACHE_KEY_ADDRESSES] });
    },
  });
};

export default useUpdateDefaultAddress;
