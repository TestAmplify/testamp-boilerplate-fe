import { Icon } from "@iconify/react";

const devices = [
  {
    device: "2024 MacBook Pro 14-inch - Lagos, Nigeria",
    date: "Oct 25, 2024 | 14:35 | Lagos, Nigeria",
    deviceType: "computer",
    isPrimary: true,
  },
  {
    device: "iPhone 16 Pro - Lagos, Nigeria",
    date: "Oct 25, 2024 | 14:35 | Lagos, Nigeria",
    deviceType: "mobile",
    isPrimary: false,
  },
];
const RecentLogins = () => (
  <div className="recent-logins">
    <h3 className="font-bold text-2xl mt-10 mb-5">Recent logins</h3>
    <hr className="h-px bg-[#E6E6E6] border-0 mb-5" />
    <ul>
      {devices.map((device, index) => (
        <li key={index} className="mt-6 first:mt-0">
          <span className="flex justify-between ">
            <span className="flex items-center gap-4">
              <Icon
                icon={
                  device.deviceType === "computer"
                    ? "mi:computer"
                    : "heroicons:device-phone-mobile"
                }
                className="w-5 h-5"
              />
              <span className="font-medium">{device.device}</span>
              {device.isPrimary && (
                <span className="font-bold text-foundation-white-darker dark:text-white text-[13px] border border-foundation-grey-light drop-shadow-sm rounded-lg pr-6 pl-2 ml-2">
                  <Icon
                    icon="bi:dot"
                    className="text-dashboard-green inline-block w-7 h-7 shrink-0"
                  />
                  Primary
                </span>
              )}
            </span>
            <button type="button">
              <Icon
                icon="qlementine-icons:menu-dots-16"
                className="w-7 h-7 shrink-0"
              />
            </button>
          </span>
          <span className="text-foundation-white-dark-active dark:text-gray-400 dark:gray-500 text-[13px] ml-9">
            {device.date}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
export default RecentLogins;
