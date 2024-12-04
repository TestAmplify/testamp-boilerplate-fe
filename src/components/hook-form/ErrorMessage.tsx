import React, { ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <p className="text-xs mt-2 text-rose-500 font-semibold">{children}</p>;
};
