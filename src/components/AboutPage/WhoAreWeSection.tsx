import React from "react";

const WhoAreWeSection = () => {
  return (
    <section className="container my-10 md:my-15 lg:my-20 text-center">
      <div className=" dark:text-white flex flex-col space-y-7 ">
        {" "}
        <div className="w-[5rem] h-[1.75rem] md:w-[5rem] md:h-[2rem] lg:w-[7rem] lg:h-[3rem]  border-[#E8E8E8] border-[1px] rounded-md mx-auto flex items-center justify-center text-xs md:texxt-sm lg:text-base dark:border-[#8c8c8c]">
          <h1 className="font-semibold">Who are we</h1>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl">About us</h1>
        <div className="max-w-[20rem] lg:max-w-[30rem] mx-auto text-2xs md:text-sm lg:text-base text-[#676767] dark:text-[#8C8C8C]">
          <p>
            At TestAmplify, we believe that great software begins with
            exceptional testing. Our mission is to equip you with the skills,
            tools, and support to excel in your testing career.
          </p>
        </div>
      </div>
      <hr className="mt-10 md:mt-15 lg:mt-20 border-[#E8E8E8] dark:border-[#8c8c8c]" />
    </section>
  );
};

export default WhoAreWeSection;
