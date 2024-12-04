"use client";

import Link from "next/link";
import React from "react";
import ConfirmAccountForm from "@/components/Auth/ConfirmAccount/ConfirmAccountForm";

const ConfirmPage: React.FC = () => {
  return (
    <div className="flex h-screen justify-center  md:justify-start">
      {/* Left side with the image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/confirm.jpg')" }}
      ></div>

      {/* Right side with the form */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-[90%] p-8">
          <h1 className="text-3xl font-semibold mb-2">You’ve got mail</h1>
          <p>
            We’ve sent you a confirmation code. Please enter the code in the
            space below. Resend (in 30 secs)
          </p>

          <ConfirmAccountForm />

          {/* <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div>
              <input
                name="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm dark:text-black"
                placeholder=" "
              />
            </div>

            <button
              type="submit"
              className={`w-full rounded-[5rem] ${buttonVariants({
                variant: "primary",
                size: "lg",
              })}`}
            >
              Continue
            </button>
          </form> */}

          <p className="mt-8">
            Already have an account?{" "}
            <Link href={"/login"} className="font-bold text-[#142E84]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
