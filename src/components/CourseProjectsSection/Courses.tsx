"use client";
import React from "react";
import CoursesSection from "./CoursesSection";

const Courses = () => {
  return (
    <div className="container my-20 text-center">
      <h2 className=" font-medium text-primary-100 text-2xl md:text-3xl max-w-[26rem] mx-auto dark:text-white">
        Your Path to Test Automation Mastery
      </h2>
      <p className="my-4 text-base lg:max-w-[33rem] lg:mx-auto md:text-lg text-primary-200 dark:text-[#8C8C8C]">
        Check out the 6 Mini-Projects students will work on, from beginner to
        advanced levels.
      </p>

      <CoursesSection />
    </div>
  );
};

export default Courses;
