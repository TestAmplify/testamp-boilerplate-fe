import React from "react";
import WhoAreWeSection from "@/components/AboutPage/WhoAreWeSection";
import MeetOurTeam from "@/components/AboutPage/MeetOurTeam";
import JoinUsNow from "@/components/AboutPage/JoinUsNow";
const About: React.FC = () => {
  return (
    <>
      <WhoAreWeSection />
      <MeetOurTeam />
      <JoinUsNow />
    </>
  );
};

export default About;
