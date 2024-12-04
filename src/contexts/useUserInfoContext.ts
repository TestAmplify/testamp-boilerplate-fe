"use client";

import React from "react";
import { UserInfoContext } from "./UserInfoProvider";

export const useUserInfoContext = () => {
  const context = React.useContext(UserInfoContext);

  if (!context) {
    throw new Error(
      "useUserInfoContext must be used within a UserInfoProvider"
    );
  }

  return {
    ...context,
  };
};
