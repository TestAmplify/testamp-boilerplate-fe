"use client";
import { UserInfo } from "@/types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, set } from "idb-keyval";
import Cookies from "js-cookie";

// Fetch user info from IndexedDB for a specific user
const fetchUserInfo = async () => {
  const key = "reactQuery-userInfo"; // Using the key for user info
  const data = await get(key);
  return data || null;
};

// Update user info in IndexedDB for a specific user
const updateUserInfo = async ({
  newUserInfo,
}: {
  newUserInfo: UserInfo;
}): Promise<UserInfo> => {
  const key = "reactQuery-userInfo";
  await set(key, newUserInfo);
  return newUserInfo;
};

// Custom hook to manage user info
export const useUserInfoIdb = () => {
  const queryClient = useQueryClient();
  const accessToken = Cookies.get("accessToken");

  // Use Query to fetch user info
  const { data, isLoading, error } = useQuery({
    queryKey: ["userInfo", accessToken], // Include accessToken in the query key
    queryFn: () => fetchUserInfo(),
    enabled: !!accessToken,
    staleTime: Infinity, // Prevent refetching
  });

  // Use Mutation to update user info
  const mutation = useMutation<UserInfo, Error, UserInfo>({
    mutationFn: (newUserInfo: UserInfo) => updateUserInfo({ newUserInfo }),

    onSuccess: (newData: UserInfo) => {
      // Update the cache with the new data
      queryClient.setQueryData(["userInfo", accessToken], newData);
    },
  });

  return {
    userInfo: data,
    isLoading,
    error,
    updateUserInfo: mutation.mutate,
  };
};
