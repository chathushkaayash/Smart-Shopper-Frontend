import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export interface UserPreference {
    userId: number;
    preferenceType: string;
    referenceId: number;
}

const apiClient = new APIClient<UserPreference>("/userpreference/add");

const useCreateUserPreference = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<UserPreference, "id">) => apiClient.create(data),

    onSuccess: () => {
      toast.success("User preference added successfully");
    },

    onError: () => {
      toast.error("An error occurred while adding User preference");
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: ["cart_items"] });
    },
  });
};

export default useCreateUserPreference;
