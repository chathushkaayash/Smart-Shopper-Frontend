import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "@/utils/Time";
import { Opportunity } from "./useOpportunity";
import { BaseAddress } from "@/services/types";

export interface User {
  id: number;
  name: string;
  email: string;
  number: string;
  profilePic: string;
  role: string;
  status: string;

  lastLogin: DateTime | null;
  createdAt: DateTime;
  updatedAt: DateTime;
  deletedAt: DateTime | null;
}

export interface Consumer {
  user: User;
  addresses: BaseAddress[];
  opportunity: Opportunity[];
  id: number;
  userId: number;
}

const apiClient = new APIClient<Consumer>("/consumers");

const useConsumer = (id: number) => {
  return useQuery({
    queryKey: ["consumers", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 30,
  });
};

export default useConsumer;
