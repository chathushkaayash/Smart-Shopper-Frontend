import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { BaseUser } from "../types";

const apiClient = new APIClient("/users");

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<BaseUser>) =>
      apiClient.update(data?.id || 0, data),

    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: () => {
      toast.error("An error occurred while updating profile");
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: ["users"] });
    },
  });
};

export default useUpdateProfile;
