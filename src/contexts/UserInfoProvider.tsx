"use client";

import { QueryClient, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import React, { createContext, useContext, ReactNode } from "react";

import { $http } from "@/lib/http";
import { UserInfo } from "@/types";

const queryClient = new QueryClient();

interface UserInfoContextType {
  isPending: boolean;
  userInfo: UserInfo | undefined;
  setUserInfo: (userInfo: UserInfo) => void;
}

export const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

const fetchUserInfo = async (): Promise<UserInfo> => {
  const { data } = await $http.get<UserInfo>("/user");
  return data || {};
};

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | undefined>(
    undefined
  );
  const accessToken = Cookies.get("accessToken");
 

  const userQuery = useQuery<UserInfo, Error>({
    queryKey: ["userInfo", accessToken],
    queryFn: fetchUserInfo,
    enabled: !!accessToken,
    staleTime: Infinity,
  });

  const updateUserInfo = (userInfo: UserInfo) => {
    setUserInfo(userInfo);
    queryClient.setQueryData(["userInfo"], { isPending: true, ...userInfo });
  };

  return (
    <UserInfoContext.Provider
      value={{
        isPending: userQuery.isPending,
        userInfo: userInfo ?? userQuery.data,
        setUserInfo: updateUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = (): UserInfoContextType => {
  const context = useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  return context;
};
