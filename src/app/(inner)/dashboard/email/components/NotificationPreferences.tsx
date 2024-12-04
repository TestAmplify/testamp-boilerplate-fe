import { Icon } from "@iconify/react";
import React, { useState } from "react";

interface Preferences {
  id: number;
  label: string;
  checked: boolean;
  field: string;
}

const preferences = [
  {
    id: 1,
    label:
      "Receive email notifications for test executions, results, and activity.",
    checked: false,
    field: "emailNotifications",
  },
  {
    id: 2,
    label: "Get a weekly summary of recent activity and performance insights.",
    checked: false,
    field: "weeklySummary",
  },
  {
    id: 3,
    label:
      "Receive security notifications for suspicious logins and password changes.",
    checked: true,
    field: "securityNotifications",
  },
  {
    id: 4,
    label: "Get updates about new features, improvements, and announcements.",
    checked: false,
    field: "updatesAboutFeatures",
  },
];

const NotificationPreferences = () => {
  const [selectedPreferences, setSelectedPreferences] =
    useState<Preferences[]>(preferences);

  const handleChange = (id: number) => {
    const updatedPreferences = selectedPreferences.map((pref: Preferences) =>
      pref.id === id ? { ...pref, checked: !pref.checked } : pref
    );
    setSelectedPreferences(updatedPreferences);
  };

  return (
    <div>
      <h3 className="font-semibold text-[22px] mb-3">
        Notification Preferences
      </h3>
      <p className="text-foundation-white-dark-active dark:text-white">
        Control how TestAmplify communicates with you via email, ensuring you're
        informed on the updates that matter most. Customize alerts for activity,
        security, product news, and summary insights.
      </p>
      <div className="flex justify-center mt-6">
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-[19px]">Activity Alerts</h4>
          {selectedPreferences.map((pref: Preferences) => (
            <label
              key={pref.id}
              className="flex items-center gap-2 cursor-pointer font-medium"
            >
              <span
                className={`block h-5 w-5 rounded-[3px] drop-shadow-sm dark:drop-shadow-lg shrink-0 ${
                  pref.checked
                    ? "border-[1.13px] border-foundation-white-dark"
                    : "border-foundation-white-normal-hover border dark:border-gray-600"
                }`}
              >
                {" "}
                {pref.checked && (
                  <div className=" flex justify-center items-center h-full">
                    {" "}
                    <Icon
                      icon="quill:checkmark"
                      className="w-6 h-6 text-foundation-white-dark-active dark:text-foundation-white-normal"
                    />
                  </div>
                )}
              </span>
              <input
                type="checkbox"
                checked={pref.checked}
                onChange={() => handleChange(pref.id)}
                className="sr-only"
              />
              {pref.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
