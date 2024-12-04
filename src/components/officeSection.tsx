import React from "react";
import OfficeSectionCard from "./officeSectionCard";

const OfficeSection = () => {
  return (
    <div className="container mt-20">
      {" "}
      <h2 className="text-3xl font-medium text-center text-primary-100 dark:text-white">
        Real-World Office Experience{" "}
      </h2>
      <span className="flex md:max-w-lg mt-5 mb-[1.5rem] text-primary-300 text-sm mx-auto justify-center text-center dark:text-[#8C8C8C]">
        Simulate a real office setup where you&apos;ll work with leads,
        collaborate with peers, and engage in daily scrums and code reviews.
      </span>
      <OfficeSectionCard />
    </div>
  );
};

export default OfficeSection;
