import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserNotification = ({ setShowNotification }: Props) => {
  return (
    <section className="p-4 border border-foundation-foundation-grey-light dark:border-gray-600 drop-shadow-sm rounded-xl absolute -right-12 sm:right-1 top-14 z-20 max-w-[216px] max-h[186px] w-[216px] bg-white  dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div className="relative">
          <span className="flex justify-center items-center w-12 h-12 rounded-full bg-foundation-grey-newLight">
            <Icon icon="solar:bell-bing-outline" />
          </span>
          <span className="flex justify-center items-center absolute top-0 -right-5 w-[34px] h-[22px] bg-[#ed3a53] text-white text-xs font-semibold rounded-2xl">
            99+
          </span>
        </div>
        <button type="button" onClick={() => setShowNotification(false)}>
          {" "}
          <Icon icon="mdi:cancel-bold" className="w-5 h-5 dark:text-white" />
        </button>
      </div>
      <p className="text-sm text-foundation-grey-normal dark:text-white my-3">
        You have 150+ unread notifications.
      </p>
      <button
        type="button"
        className="border border-foundation-foundation-grey-light dark:border-gray-700 drop-shadow-sm rounded-xl w-full py-2 mt-2 font-semibold text-sm text-foundation-grey-normal dark:text-white"
      >
        Read
      </button>
    </section>
  );
};

export default UserNotification;
