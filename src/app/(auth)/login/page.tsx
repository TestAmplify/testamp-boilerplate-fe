"use client";

import Link from "next/link";
import React from "react";

import AutoCarousel from "@/components/Auth/Login/AutoCarousel";
import slides from "@/constants/loginCarousel";
import LoginForm from "@/components/Auth/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      {/* Right side with the form */}
      <AutoCarousel slides={slides} />
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-full md:max-w-[80%] px-8 xs:px-5">
          <h1 className="text-3xl font-semibold mb-2">Login to your account</h1>
          <p>Enter the details you used in creating your account 🔐</p>

          <LoginForm />

          <p className="mt-8">
            Are you new here?{" "}
            <Link
              href={"/signup"}
              className="font-bold text-[#142E84] dark:text-[#A7C4FF]"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
