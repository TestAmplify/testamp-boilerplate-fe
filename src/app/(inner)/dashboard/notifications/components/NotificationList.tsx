import { Notification } from "@/constants/notificationsMock";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import React, { useState } from "react";

interface Props {
  notification: Notification;
}

const categoriesColours = {
  "test execution": "#5856D6",
  activity: "#30B0C7",
  security: "#FF2D55",
};

const NotificationList = ({ notification }: Props) => {
  const [checked, setChecked] = useState(notification.read);

  return (
    <section>
      <div>
        <div key={notification.id}>
          <div className="flex flex-col py-4 first:pt-1 border-b border-foundation-white-normal">
            <div className="flex gap-5">
              <label>
                <span
                  className={`block h-5 w-5 mt-1 rounded-[3px] drop-shadow-sm cursor-pointer ${
                    checked
                      ? "border-[1.13px] border-foundation-white-dark"
                      : "border-foundation-white-normal-hover border dark:border-gray-600"
                  }`}
                >
                  {checked && (
                    <div className="flex justify-center items-center h-full">
                      {" "}
                      <Icon
                        icon="quill:checkmark"
                        className="w-6 h-6 text-foundation-white-dark-active dark:text-white"
                      />
                    </div>
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="sr-only"
                />
              </label>
              <p
                className={clsx(
                  "text-foundation-white-dark-active dark:text-gray-300 sm:text-base text-[15px]",
                  checked ? "font-medium" : "font-bold"
                )}
              >
                {notification.title}
              </p>
            </div>
            <div className="flex flex-wrap justify-between ml-8">
              <div className="flex flex-wrap items-center gap-3 sm:divide-x-[1px] divide-black dark:divide-white py-3">
                <span className="flex items-center gap-2 font-semibold text-sm md:text-base text-foundation-grey-normal  dark:text-white">
                  <Icon
                    icon="fluent:clock-alarm-32-regular"
                    className="w-5 h-5"
                  />
                  {`${new Date(notification.timestamp).toLocaleString()}.`}
                </span>
                <span
                  className="inline-flex items-center gap-1 sm:px-2 font-semibold text-sm md:text-base"
                  style={{
                    color:
                      categoriesColours[
                        notification.category.toLowerCase() as keyof typeof categoriesColours
                      ],
                  }}
                >
                  <Icon icon="codicon:debug-stackframe-dot" />
                  {notification.category}
                </span>
              </div>
              <span className="sm:font-semibold font-bold text-sm md:text-base text-foundation-grey-normal dark:text-white">
                {checked ? "Marked as read" : "Unread"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationList;
