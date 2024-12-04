import React from "react";

const MeetTheExperts = () => {
  return (
    <section className="container my-20 md:my-15 lg:my-10 text-center md:text-start">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">
            Meet the Experts Guiding Your Testing Journey
          </h1>
          <div className="text-2xs md:text-sm lg:text-base text-[#676767] dark:text-[#8C8C8C]">
            <p>
              At TestAmplify, we believe that great software begins with
              exceptional testing. Our mission is to equip you with the skills,
              tools, and support to excel in your testing career.
            </p>
          </div>
        </div>
        <div className="bg-[url(/images/mentors/hero.png)] hidden md:block bg-cover bg-center bg-no-repeat md:w-[24rem] md:h-[22rem] lg:w-[32rem] lg-[29rem]"></div>
      </div>
    </section>
  );
};

export default MeetTheExperts;
