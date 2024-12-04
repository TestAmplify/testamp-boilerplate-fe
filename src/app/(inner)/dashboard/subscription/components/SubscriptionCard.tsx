import { Icon } from "@iconify/react";
import React from "react";
import ButtonWhite from "../../components/ButtonWhite";

interface Props {
  plan: string;
  price: string;
  structure: string;
  values: string[];
  action: string;
  discount: string;
}

const SubscriptionCard = ({
  plan,
  price,
  structure,
  values,
  action,
  discount,
}: Props) => {
  const splitPrice = price.split(".");
  return (
    <div className="relative p-4 bg-foundation-white-light dark:bg-gray-800 border border-foundation-white-normal dark:border-gray-700 rounded-xl drop-shadow-sm dark:drop-shadow">
      <div className="flex flex-col items-center mt-4 mb-5">
        <small className="font-medium text-sm text-foundation-white-dark-active dark:text-white">
          {plan}
        </small>
        <span className="flex items-center my-3 font-bold text-4xl text-foundation-grey-dark dark:text-white">
          <span className="">
            {splitPrice.length > 1 ? `${splitPrice[0]}.` : price}
          </span>
          <small className="font-semibold text-sm mt-4">{splitPrice[1]}</small>
        </span>
        <div className="px-1 pt-1 rounded-full border border-foundation-white-normal dark:border-gray-700">
          <p className="inline-flex items-center pr-2 pl-[2px] text-[15px] text-foundation-grey-normal-hover dark:text-[#D9D9D9] bg-white dark:bg-gray-800 border border-foundation-white-normal dark:border-gray-700 rounded-full drop-shadow-sm">
            <Icon icon="carbon:dot-mark" className="w-6 h-6 text-[#D9D9D9]" />
            {structure}
          </p>
        </div>
        {discount && (
          <span className="flex justify-center items-center absolute inset-y-3 right-3 w-[76px] h-[28px] bg-dashboard-green font-semibold text-white text-xs rounded-full">
            {discount}
          </span>
        )}
      </div>
      <hr className="h-px bg-[#E6E6E6] border-0 mb-3" />
      <ul className="min-h-[154px]">
        {values.map((value, index) => (
          <li
            key={index}
            className="flex gap-2 py-1 font-medium text-[15px] text-foundation-grey-dark dark:text-white"
          >
            <Icon
              icon="lets-icons:check-ring-round"
              className="w-6 h-6 shrink-0  dark:text-[#D9D9D9]"
            />
            {value}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <ButtonWhite type="button" className="max-w-full">
          {action}
        </ButtonWhite>
      </div>
    </div>
  );
};

export default SubscriptionCard;
