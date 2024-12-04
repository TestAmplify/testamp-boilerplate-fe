import React from "react";
import {
  components,
  ControlProps,
  MenuProps,
  OptionProps,
  SingleValueProps,
} from "react-select";
import { Icon } from "@iconify/react";
import { OptionType } from "@/types";

export const CustomOption = (props: OptionProps<OptionType>) => {
  const { data, isSelected } = props;

  return (
    <components.Option {...props} className="dark:text-white font-semibold">
      <div className="flex gap-2 py-2">
        {data.icon ? (
          // Ensure data.icon is passed correctly and render the icon
          <Icon icon={data.icon as string} className="w-6 h-6" />
        ) : (
          // Render the flag if not an icon
          <span className="text-[1.5rem] mr-2 emoji">{data.flag}</span>
        )}
        <div className="flex-1 flex justify-between items-center">
          {data.label}
          {isSelected && (
            <Icon icon="ion:checkmark-sharp" className="h-4 w-4 font-bold" />
          )}
        </div>
      </div>
    </components.Option>
  );
};

export const Menu = (props: MenuProps<OptionType>) => (
  <div>
    <components.Menu
      {...props}
      className="dark:bg-gray-800 bg-foundation-white-light dark:border border-gray-600"
    />
  </div>
);

export const Control = (props: ControlProps<OptionType, false>) => (
  <div>
    <components.Control
      {...props}
      className="h-[61px] mt-2 dark:text-white bg-[#FBFBFB] border border-[#E1E1E1] dark:border-gray-700 dark:bg-gray-800 hover:border-foundation-grey-normal dark:hover:border-gray-600 active:border-foundation-white-dark dark:focus:border-blue-500  outline-none drop-shadow-sm dark:drop-shadow-lg rounded-[8px] cursor-pointer disabled:bg-gray-100"
    />
  </div>
);

export const SingleValue = (props: SingleValueProps<OptionType>) => {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      {data && (
        <div className="flex items-center gap-2 max-h-[61px] h-[61px] px-4 font-semibold text-[17px] text-foundation-grey-normal dark:text-white">
          {data.icon ? (
            <Icon icon={data.icon as string} className="w-6 h-6" />
          ) : (
            <span className="text-[2rem] emoji">{data.flag}</span>
          )}
          <span>{data.label}</span>
        </div>
      )}
    </components.SingleValue>
  );
};
