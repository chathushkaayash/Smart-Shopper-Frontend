import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const apiClient = new APIClient("/accept_driver_request");

const useAcceptDriverRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => apiClient.create({ id }),

    onSuccess: () => {
      toast.success("Driver request accepted successfully");
    },
    onError: () => {
      toast.error("Failed to accept driver request");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["non_verified_drivers"] });
    },
  });
};

export default useAcceptDriverRequest;
