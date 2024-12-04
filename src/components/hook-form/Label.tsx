import React from "react";
import clsx from "clsx";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
  isRequired?: boolean;
};

export const Label = ({ className, isRequired, ...props }: LabelProps) => {
  return (
    <label
      className={clsx(
        "text-foundation-white-dark-active dark:text-white",
        className
      )}
      {...props}
    >
      <span>{props.children}</span>
      {isRequired && (
        <span className="text-red-600 font-bold pl-1 hidden">*</span>
      )}
    </label>
  );
};
