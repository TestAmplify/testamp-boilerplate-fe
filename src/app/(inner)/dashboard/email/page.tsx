"use client";
import { Icon } from "@iconify/react";
import NotificationPreferences from "./components/NotificationPreferences";
import Loader from "../components/Loader";
import { useUserInfo } from "@/contexts/UserInfoProvider";

const Email = () => {
  const { isPending, userInfo, setUserInfo } = useUserInfo();

  if (isPending) return <Loader title="Email" />;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userInfo) {
      setUserInfo({
        ...userInfo,
        email: e.target.value,
      });
    }
  };

  return (
    <section className="text-foundation-grey-normal dark:text-white md:px-10 px-5 py-6">
      <h2 className="font-semibold text-[32px]">Email</h2>
      <section className="md:max-w-[624px] my-10">
        <div className="md:flex gap-20 items-center">
          <label
            htmlFor="email"
            className="text-foundation-white-dark-active dark:text-white mb-2 md:mb-0 block md:inline-block"
          >
            Your email address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={userInfo?.email}
            readOnly
            className="flex-1 w-full h-[61px] px-4 font-semibold text-[17px] bg-[#FBFBFB] dark:bg-gray-800 border border-[#E1E1E1] dark:border-gray-700 hover:border-foundation-grey-normal dark:hover:border-gray-600 active:border-foundation-white-dark  dark:focus:border-blue-500 outline-none drop-shadow-sm dark:drop-shadow-lg rounded-[8px]"
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
      </section>
      <section className="md:flex gap-36 md:max-w-[530px] text-foundation-white-dark-active dark:text-white">
        <span className="flex items-center gap-2 mb-2 md:mb-0">
          Status
          <Icon icon="iconoir:question-mark-circle" className="w-6 h-6" />
        </span>
        <p className="flex-1 flex items-center gap-4 px-3 h-[48px] font-semibold text-[17px] text-dashboard-green rounded-lg bg-dashboard-green bg-opacity-[0.07]">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6962 1.40498C17.4663 1.0377 17.1277 0.751235 16.7274 0.585442C16.3271 0.419649 15.8851 0.382783 15.4629 0.479975L12.4662 1.16831C12.1591 1.23889 11.84 1.23889 11.5329 1.16831L8.53619 0.479975C8.11396 0.382783 7.67194 0.419649 7.27164 0.585442C6.87135 0.751235 6.53271 1.0377 6.30285 1.40498L4.66952 4.01164C4.50285 4.27831 4.27785 4.50331 4.01118 4.67164L1.40452 6.30498C1.03788 6.53463 0.751832 6.87272 0.586075 7.27233C0.420318 7.67194 0.383076 8.11324 0.479518 8.53497L1.16785 11.535C1.23818 11.8415 1.23818 12.1601 1.16785 12.4666L0.479518 15.465C0.382701 15.887 0.419755 16.3286 0.58553 16.7286C0.751305 17.1285 1.03756 17.4669 1.40452 17.6966L4.01118 19.33C4.27785 19.4966 4.50285 19.7216 4.67119 19.9883L6.30452 22.595C6.77452 23.3466 7.67119 23.7183 8.53619 23.52L11.5329 22.8316C11.84 22.7611 12.1591 22.7611 12.4662 22.8316L15.4645 23.52C15.8865 23.6168 16.3282 23.5797 16.7281 23.414C17.1281 23.2482 17.4664 22.9619 17.6962 22.595L19.3295 19.9883C19.4962 19.7216 19.7212 19.4966 19.9879 19.33L22.5962 17.6966C22.9632 17.4666 23.2493 17.1278 23.4148 16.7275C23.5803 16.3273 23.6169 15.8854 23.5195 15.4633L22.8329 12.4666C22.7623 12.1595 22.7623 11.8404 22.8329 11.5333L23.5212 8.53497C23.6182 8.11317 23.5814 7.67163 23.4159 7.2717C23.2504 6.87176 22.9645 6.53329 22.5979 6.30331L19.9895 4.66998C19.7232 4.503 19.4982 4.27794 19.3312 4.01164L17.6962 1.40498ZM16.8579 8.28331C16.9609 8.09375 16.9865 7.8716 16.9291 7.6636C16.8717 7.45559 16.7359 7.27795 16.5502 7.16805C16.3645 7.05815 16.1435 7.02455 15.9335 7.07434C15.7235 7.12412 15.5411 7.2534 15.4245 7.43497L11.0662 14.8116L8.43452 12.2916C8.35645 12.2115 8.26303 12.1479 8.15984 12.1046C8.05664 12.0613 7.94579 12.0392 7.83389 12.0397C7.722 12.0402 7.61134 12.0632 7.50853 12.1074C7.40572 12.1516 7.31286 12.216 7.23549 12.2969C7.15812 12.3777 7.09782 12.4733 7.05819 12.578C7.01857 12.6826 7.00042 12.7942 7.00484 12.906C7.00926 13.0178 7.03616 13.1276 7.08392 13.2288C7.13169 13.33 7.19934 13.4205 7.28285 13.495L10.6729 16.7433C10.7636 16.8301 10.8727 16.8952 10.9922 16.9339C11.1116 16.9725 11.2382 16.9837 11.3626 16.9665C11.4869 16.9494 11.6058 16.9044 11.7103 16.8348C11.8149 16.7653 11.9023 16.673 11.9662 16.565L16.8579 8.28331Z"
                fill="#34C759"
              />
            </svg>
          </span>
          Your email has been verified
        </p>
      </section>
      <hr className="h-px bg-[#E6E6E6] border-0 my-7" />
      <section>
        <NotificationPreferences />
      </section>
    </section>
  );
};

export default Email;
