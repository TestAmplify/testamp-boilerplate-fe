"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  NotificationValues,
  notificationsMock,
} from "@/constants/notificationsMock";
import Loader from "../components/Loader";
import NotificationList from "./components/NotificationList";
import clsx from "clsx";

const fetchNotifications = async (
  category: string
): Promise<NotificationValues["notifications"]> => {
  // Mock API data
  return new Promise((resolve) => {
    setTimeout(() => {
      const { notifications } = notificationsMock;
      const filteredNotifications =
        category === "All"
          ? notifications
          : notifications.filter(
              (n) => n.category.toLowerCase() === category.toLowerCase()
            );
      resolve(filteredNotifications);
    }, 500);
  });
};

const tabs = [
  { name: "All", key: "all" },
  { name: "Test Execution", key: "test_execution" },
  { name: "Activity", key: "activity" },
  { name: "Security", key: "security" },
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("All");
  const unreadCounts =
    notificationsMock.unreadCounts as NotificationValues["unreadCounts"];

  const { data, isLoading } = useQuery<
    NotificationValues["notifications"],
    Error
  >({
    queryKey: ["notifications", activeTab],
    queryFn: () => fetchNotifications(activeTab),
  });

  if (isLoading) {
    return <Loader title="Notifications" />;
  }

  return (
    <section className="md:px-10 px-5 py-6">
      <h2 className="font-semibold text-[32px] text-foundation-grey-normal dark:text-white">
        Notfications
      </h2>
      <div className="flex items-center overflow-auto no-scrollbar">
        <section className="flex-shrink-0 grow flex flex-wrap gap-2 py-2 mt-9 mb-7 max-h-[44px] bg-foundation-white-light-hover border border-foundation-white-normal rounded-[8px] drop-shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              type="button"
              className={clsx(
                "py-2 px-6 h-full -mt-2",
                tab.name === activeTab
                  ? "font-medium text-foundation-grey-normal border border-[#C1C2C1] bg-white rounded-lg"
                  : "text-medium text-foundation-white-dark"
              )}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name} (
              {unreadCounts[tab.key as keyof typeof unreadCounts] ?? 0})
            </button>
          ))}
        </section>
      </div>

      {data && data?.length > 0 ? (
        data.map((notification) => (
          <NotificationList key={notification.id} notification={notification} />
        ))
      ) : (
        <p>No notifications available.</p>
      )}
    </section>
  );
};

export default Notifications;
