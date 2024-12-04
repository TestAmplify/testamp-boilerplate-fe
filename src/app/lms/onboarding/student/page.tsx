"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
const StudentOnboardingPage = () => {
  const { darkMode } = useTheme();
  return (
    <section className="container flex justify-center h-screen">
      <div className="flex flex-col w-[647px] mt-20 items-center">
        <div className="bg-[url(/images/learning-path/welcome.png)] bg-contain bg-no-repeat bg-center w-[258px] h-[193.5px] md:w-[416px] md:h-[287px] lg:w-[516px] lg:h-[387px]"></div>
        <div className="text-center flex flex-col gap-8 items-center">
          <h1 className="text-[#383938] font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl dark:text-white">
            Welcome, <span className="italic">Anthony</span>
          </h1>
          <p className="text-[#7D7D7D] text-sm md:text-base dark:text-[#8c8c8c]">
            {`We're excited to have you on this learning journey. Let’s get
            started by choosing your learning path.`}
          </p>

          <button
            className={`${cn(
              buttonVariants({ variant: "primary" }),
              "w-full rounded-md font-bold text-sm md:text-base h-[3.5rem]"
            )}`}
          >
            Choose learnning path
          </button>

          <Link href="/dashboard/overview" className="flex gap-3">
            {darkMode ? (
              <MoveLeft color="#8c8c8c" />
            ) : (
              <MoveLeft color="#515151" />
            )}
            <span className="text-[#515151] dark:text-[#8c8c8c]">
              Back to profile
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentOnboardingPage;
