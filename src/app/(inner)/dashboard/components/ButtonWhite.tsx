import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: () => void;
}
const ButtonWhite = ({
  children,
  type,
  className = "sm:max-w-[152px] bg-[#FDFDFD]",
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        "font-bold text-foundation-white-darker dark:text-white w-full h-[50px] px-6 py-2 hover:bg-gray-100 dark:hover:bg-opacity-80 dark:bg-gray-700 border border-foundation-white-normal dark:border-gray-700 drop-shadow-sm rounded-lg",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonWhite;
