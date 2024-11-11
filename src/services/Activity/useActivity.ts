import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Activity } from "../types";

const apiClient = new APIClient<Activity>("/activities");

const useActivity = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useActivity;