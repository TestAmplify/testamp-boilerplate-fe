import React from "react";
import MentorsCard from "./MentorsCard";
import mentors from "@/constants/mentors";

const MentorsList: React.FC = () => {
  return (
    <div className="container my-20 md:my-15 lg:my-10 text-center md:text-start">
      {mentors.map((mentor, index) => (
        <MentorsCard key={index} {...mentor} />
      ))}
    </div>
  );
};

export default MentorsList;
