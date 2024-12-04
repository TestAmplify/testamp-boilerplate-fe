import React from "react";
import teamMembers from "@/constants/aboutPageTeam";
import TeamCard from "./ui/TeamCard";

const MeetOurTeam = () => {
  return (
    <section className="container my-10 md:my-15 lg:my-20 text-center">
      <div className=" dark:text-white flex flex-col space-y-7 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Meet Our Team</h1>
        <div className="max-w-[20rem] lg:max-w-[30rem] mx-auto text-2xs md:text-sm lg:text-base text-[#676767] dark:text-[#8C8C8C]">
          <p>
            At TestAmplify, we believe that great software begins with
            exceptional testing. Our mission is to equip you with the skills,
            tools, and support to excel in your testing career.
          </p>
        </div>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-10 gap-y-4 my-16">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
