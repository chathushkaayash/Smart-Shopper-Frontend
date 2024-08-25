import APIClient from "@/services/api-client";
import { User } from "@/state-management/auth/store";
import { DateTime } from "@/utils/Time";
import { useQuery } from "@tanstack/react-query";

export interface Review {
  id: number;
  reviewType: string;
  user: User;
  targetId: number;

  title: string;
  content: string;
  rating: number;
  createdAt: DateTime;
}

const apiClient = new APIClient<Review>("/reviews");

const useReview = (id: number) => {
  return useQuery({
    queryKey: ["reviews", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

export default useReview;
