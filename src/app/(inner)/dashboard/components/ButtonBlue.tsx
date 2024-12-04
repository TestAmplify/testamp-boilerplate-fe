import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}
const ButtonBlue = ({
  children,
  type,
  className = "h-[50px] sm:max-w-[170px]",
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        "font-bold text-white w-full py-2 bg-foundation-primary-normal dark:bg-[#1E40AF] hover:bg-opacity-90 dark:hover:bg-opacity-90 rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonBlue;
