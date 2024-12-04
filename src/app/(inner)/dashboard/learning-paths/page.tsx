"use client";
import { useUserInfo } from "@/contexts/UserInfoProvider";
import EmptyLms from "./components/EmptyLms";
import LmsPresent from "./components/LmsPresent";

const user = { hasStarted: true };

const LearningPaths = () => {
  const { userInfo } = useUserInfo();
  return (
    <div className="md:px-10 px-5 py-6">
      <h2 className="font-semibold text-[32px] text-foundation-grey-normal dark:text-white md:px-10 px-5 md:pt-6 pt-8 pb-4">
        LMS
      </h2>
      {user.hasStarted ? (
        <LmsPresent userName={`${userInfo?.firstname || "Tony"}!`} />
      ) : (
        <EmptyLms />
      )}
    </div>
  );
};

export default LearningPaths;
