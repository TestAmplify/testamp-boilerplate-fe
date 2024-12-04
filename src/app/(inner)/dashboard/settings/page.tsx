"use client";
import clsx from "clsx";
import React, { useState } from "react";
import Security from "./components/Security";
import Prefrences from "./components/Prefrences";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Prefrences");
  const tabs = ["Prefrences", "Security"];

  return (
    <section className="md:px-10 px-5 py-6">
      <h2 className="font-semibold text-[32px] text-foundation-grey-normal dark:text-white">
        Settings
      </h2>
      <section className="flex md:gap-16 gap-10 mt-9 border-b border-foundation-white-normal dark:border-gray-700 dark:text-white text-foundation-white-dark">
        {tabs.map((tab, index) => (
          <h3
            key={index}
            className={clsx(
              "font-semibold text-[17px] py-2 sm:px-4 sm:flex-none flex-1 text-center cursor-pointer",
              activeTab === tab
                ? "text-foundation-primary-normal dark:text-[#5270d3]  border-b-2 border-foundation-primary-normal dark:border-[#5270d3]"
                : ""
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </h3>
        ))}
      </section>
      <section className="my-10">
        {activeTab === "Prefrences" ? <Prefrences /> : <Security />}
      </section>
    </section>
  );
};

export default Settings;
