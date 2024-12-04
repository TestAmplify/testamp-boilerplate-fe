"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { LanguageDropDownMenu } from "@/components/ui/dropdown-menu";
import { languages } from "@/constants/languages";
import SignupForm from "@/components/Auth/Signup/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center">
      {/* <div className="flex h-full justify-center md:justify-start"> */}
      {/* Left side with the image */}

      <div className="h-screen sticky top-0  hidden md:block md:w-1/2">
        <div
          className="h-full object-cover md:block md:w-full bg-cover bg-center relative text-[#FFFFFF] md:max-w-80%"
          style={{ backgroundImage: "url('/images/register.jpg')" }}
        >
          <Link href={"/"}>
            <div className="absolute top-[5%] left-[4%] flex w-[261px] h-[60px] items-center ">
              <Image
                className="h-[3rem] w-[3rem] lg:h-[5rem] lg:w-[5rem]"
                src={"/images/test_logo.png"}
                width={60}
                height={60}
                alt="test logo"
              />

              <h1 className="font-bold text-3xs sm:text-2xs md:text-xl lg:text-4xl">
                Testamplify
              </h1>
            </div>
          </Link>

          <h3 className="absolute top-[77.73%] text-3xs md:text-xs lg:text-xl md: md:w-[80%] md:text-[1.2rem] lg:w-[67.5%] h-[5.67%] flex flex-col left-1/2 transform -translate-x-1/2 text-center font-semibold lg:text-[1.5rem] ">
            Transform your QA career with hands-on{" "}
            <span>test automation training</span>
          </h3>
          <div className="absolute max-w-[85%] bottom-[5%] w-full h-[16px] md:h-[40px] flex justify-between left-1/2 transform -translate-x-1/2 items-center ">
            <div className="flex w-6/12 items-center gap-2">
              <div className="">
                <Image
                  src={"/images/usersframe.png"}
                  width={83}
                  height={32}
                  alt="usersframe"
                />
              </div>
              <p className="flex flex-col w-6/12 text-3xs md:base">
                <span className="text-[#9FA4B0]">over 25k+ users</span>
                <span>worldwide</span>
              </p>
            </div>
            <LanguageDropDownMenu languages={languages} />
          </div>
        </div>
      </div>

      {/* Right side with the form */}

      <div className=" md:w-1/2 py-5 flex-grow flex justify-center overflow-y-auto ">
        <div className="w-full h-full md:max-w-[80%] px-8 xs:px-5 flex flex-col justify-center">
          <h1 className="text-lg lg:text-3xl font-semibold mb-2">
            Create your account
          </h1>
          <p className="text-3xs md:text-sm">
            Provide valid information to set up your account 🔐
          </p>

          <SignupForm />

          <p className="mt-2">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="font-bold text-[#142E84] dark:text-[#A7C4FF]"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right side with the form comment*/}
      {/* <div className="md:w-1/2 h-full flex items-center justify-center py-5 md:overflow-y-auto">
        <div className="w-full h-full md:max-w-[80%] px-8 flex flex-col justify-center overflow-y-auto">
          <h1 className="text-lg lg:text-3xl font-semibold mb-2">
            Create your account
          </h1>
          <p>Provide valid information to set up your account 🔐</p>

          <SignupForm onSubmit={handleSubmit} /> */}

      {/* Divider with Text */}
      {/* <div className="flex items-center my-8">
          <hr className="flex-grow border-gray-200" />
          <span className="mx-2 text-gray-600">Or</span>
          <hr className="flex-grow border-gray-200" />
        </div> */}

      {/* <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-2 mt-2 border font-bold border-gray-800 text-gray-700 rounded-md hover:bg-blue-500 hover:text-white transition"
        >

          Continue with Google
        </button> */}

      {/* Continue with X Button */}
      {/* <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-2 mt-4 border font-bold border-gray-800 text-gray-700 rounded-md hover:bg-gray-800 hover:text-white transition"
        >
          Continue with X
        </button> */}

      {/* <p className="mt-2">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="font-bold text-[#142E84] dark:text-[#A7C4FF]"
            >
              Sign In
            </Link>
          </p> */}

      {/* <div className="font-bold text-[#142E84] underline mt-20 text-center">
            <Link href={"terms"}>
              <span className="mr-20"> Terms of service</span>
            </Link>
            <Link href={"terms"}>
              <span> Privacy policy</span>
            </Link>
          </div> */}
      {/* </div> */}
      {/* // </div> */}
      {/* </div> */}
    </div>
  );
};

export default SignupPage;
