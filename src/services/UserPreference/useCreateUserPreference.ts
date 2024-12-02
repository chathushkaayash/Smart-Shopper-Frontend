import APIClient from "@/services/api-client";
import { useMutation } from "@tanstack/react-query";

export interface UserPreference {
  userId: number;
  preferenceType: string;
  referenceId: number;
}

const apiClient = new APIClient<UserPreference>("/userpreference/add");

const useCreateUserPreference = () => {
  return useMutation({
    mutationFn: (data: Omit<UserPreference, "id">) => apiClient.create(data),
  });
};

export default useCreateUserPreference;
