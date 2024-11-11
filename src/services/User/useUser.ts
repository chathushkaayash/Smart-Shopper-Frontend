import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";
import { BaseUser } from "../types";

const apiClient = new APIClient<BaseUser>("/users");

const useUser = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["users", id],
      queryFn: () => apiClient.get(id),
      staleTime: 1000 * 60 * 5, // 5 minutes
    })),
  });
};

export default useUser;
