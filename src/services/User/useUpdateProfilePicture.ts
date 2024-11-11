import { objectToFormData } from "@/lib/utils";
import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const apiClient = new APIClient<FormData>("/update_profile_picture");

interface Props {
  userId: number;
}

const useUpdateProfilePicture = ({ userId }: Props) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (image: File) =>
      apiClient.update(userId, objectToFormData({ profilePicture: image })),

    onError: () => {
      toast.error("Failed to update profile picture");
    },

    onSuccess: () => {
      toast.success("Profile picture updated successfully");
    },

    onSettled: () => {
      toast.dismiss();
      queryClient.invalidateQueries({ queryKey: ["drivers", userId] });
      queryClient.invalidateQueries({ queryKey: ["users", userId] });
    },

    // show a loading indicator while the mutation is in progress
    onMutate: () => toast.loading("Updating profile picture"),
  });
};

export default useUpdateProfilePicture;
