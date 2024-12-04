"use client";
import Image from "next/image";
import { useState } from "react";
import { cva } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const roleVariants = cva(
  "rounded-2xl  p-[1rem] lg:p-[2rem] w-full h-1/3 flex items-center gap-4 sm:gap-[2rem] mb-10 md:mb-5 cursor-pointer",
  {
    variants: {
      variant: {
        selected:
          "border-[#676767] dark:border-[#EBEBEB] drop-shadow-md border-[1.5px]",
        default: "border-[#EBEBEB] dark:border-[#676767] border-[1px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const innerCircleVariants = cva(
  "w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] flex-shrink-0 rounded-full relative",
  {
    variants: {
      variant: {
        selected: "border-[1.5px] border-[#676767]  dark:border-[#EBEBEB]",
        default: "border-[1px] border-[#EBEBEB] dark:border-[#676767]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const GetStarted = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  return (
    <section className="dark:text-white h-full w-full flex flex-col  ">
      <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl pl-5 py-6 ">
        Learning Path
      </h1>

      <div className=" mx-auto mt-[2rem] h-[35rem] max-w-[95%] md:max-w-[80%] lg:max-w-[60%] w-full flex flex-col px-2 text-center mb-5">
        <div className="mb-10 flex gap-4 justify-center">
          <div className="">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">{`Get started with TestAmplify’s learning path`}</h1>
            <p className=" text-2xs md:text-sm lg:text-base text-[#8a8a8a]">
              Select your role to access tailored features and tools designed to
              enhance your experience. Whether you're managing the system,
              teaching, or learning, we've got you covered.
            </p>
          </div>
          <div className="mt-3">
            <Image
              src={"/images/learning-path/book.png"}
              width={25}
              height={25}
              alt="book"
            />
          </div>
        </div>

        {/* Instructor section */}
        <div
          className={`${
            selectedRole === "instructor"
              ? roleVariants({ variant: "selected" })
              : roleVariants()
          }`}
          onClick={() => {
            setSelectedRole("instructor");
          }}
        >
          <div
            className={`${
              selectedRole === "instructor"
                ? innerCircleVariants({ variant: "selected" })
                : innerCircleVariants()
            }`}
          >
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={"/images/learning-path/role.png"}
              width={64}
              height={64}
              alt="role-img"
            ></Image>
            <div className="absolute w-[6rem] text-center h-[1.5rem] rounded-full border-[1px] border-[#EBEBEB] left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white flex items-center justify-center gap-1">
              <span>
                <Image
                  width={5}
                  height={5}
                  src={"/images/learning-path/dot_green.png"}
                  alt="green dot"
                ></Image>
              </span>
              <p className="font-semibold text-2xs sm:text-xs md:text-base">
                Instructor
              </p>
            </div>
          </div>

          <div className="text-start flex-1">
            <h1 className="font-semibold text-base md:text-lg lg:text-xl mb-2">
              Teach and inspire
            </h1>
            <p className="text-[#8a8a8a] text-2xs md:text-xs lg:text-base">
              Empower learners by creating courses, tracking progress, and
              sharing knowledge effectively.
            </p>
          </div>
        </div>
        {/* Student section */}
        <div
          className={`${
            selectedRole === "student"
              ? roleVariants({ variant: "selected" })
              : roleVariants()
          }`}
          onClick={() => {
            setSelectedRole("student");
          }}
        >
          <div
            className={`${
              selectedRole === "student"
                ? innerCircleVariants({ variant: "selected" })
                : innerCircleVariants()
            }`}
          >
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={"/images/learning-path/role_student.png"}
              width={64}
              height={64}
              alt="role-img"
            ></Image>
            <div className=" absolute w-[6rem] text-center h-[1.5rem] rounded-full border-[1px] border-[#EBEBEB]  left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white flex items-center justify-center gap-1">
              <span>
                <Image
                  width={5}
                  height={5}
                  src={"/images/learning-path/dot_orange.png"}
                  alt="green dot"
                ></Image>
              </span>
              <p className="font-semibold text-2xs sm:text-xs md:text-base ">
                Student
              </p>
            </div>
          </div>
          <div className="text-start flex-1">
            <h1 className="font-semibold text-sm md:text-lg lg:text-xl">
              Learn and Grow
            </h1>
            <p className="text-[#8a8a8a] text-3xs md:text-xs lg:text-base curs">
              Access your courses, track achievements, and gain the skills you
              need to succeed.
            </p>
          </div>
        </div>
      </div>

      <button
        disabled={!selectedRole}
        className={`${cn(
          buttonVariants({
            variant: selectedRole ? "primary" : "disabledPrimary",
          }),
          "mx-auto md:ml-auto w-[15rem] h-[2.7rem] sm:w-[17rem] sm:h-[3rem] md:w-[20rem] md:h-[4rem] rounded-md md:mr-10 "
        )}`}
        onClick={() => {
          router.push(`/lms/onboarding/${selectedRole}`);
        }}
      >
        Continue
      </button>
    </section>
  );
};

export default GetStarted;
