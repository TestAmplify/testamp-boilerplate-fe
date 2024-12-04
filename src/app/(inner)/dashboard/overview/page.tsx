"use client";
import ResumeLearning from "./components/ResumeLearning";
import TrackProgress from "./components/TrackProgress";
import AccountStatus from "./components/AccountStatus";
import RecentLogins from "./components/RecentLogins";
import { useUserInfo } from "@/contexts/UserInfoProvider";

const Overview = () => {
  const { userInfo } = useUserInfo();

  return (
    <section className="text-foundation-grey-normal dark:text-white md:px-10 px-5 py-6">
      <h1 className="font-semibold text-[32px] text-foundation-grey-normal dark:text-white">
        Overview
      </h1>

      <div>
        <div className="my-9">
          <h2 className="font-semibold text-xl text-foundation-white-dark-active dark:text-white">
            Hello again, {userInfo?.firstname || "Anthony"}!
          </h2>
          <p className="text-sm text-foundation-white-dark-active dark:text-gray-300 mt-2">
            We hope you’re making progress on your learning journey.
          </p>
        </div>
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] grid-cols-1 gap-8">
          <div className="flex flex-col gap-6">
            <ResumeLearning />
            <TrackProgress />
          </div>
          <AccountStatus />
        </div>
        <RecentLogins />
      </div>
    </section>
  );
};

export default Overview;
