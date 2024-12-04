import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className, children }: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        "border border-foundation-foundation-grey-light drop-shadow-sm bg-foundation-white-light rounded-xl  w-full h-[58px] py-2 font-bold",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
