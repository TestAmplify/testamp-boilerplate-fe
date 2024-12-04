"use client";

import React from "react";
import OfficeSectionListItems from "./officeSectionListItems";

const OfficeSectionCard = () => {
  return (
    <div className="bg-[#EAF3FF] p-10 rounded-2xl md:max-w-2xl mx-auto my-10 grid md:grid-cols-2 items-start gap-10 dark:bg-[#1A2633]">
      <OfficeSectionListItems
        title="Team Collaboration"
        description="Students work in virtual teams, experiencing real-life collaboration."
        url="/team-icon.svg"
      />
      <OfficeSectionListItems
        title="Role-Based Scenarios"
        description="Mimics roles such as Test Lead or Automation Engineer."
        url="/chess-icon.svg"
      />
      <OfficeSectionListItems
        title="Agile Workflow Practice"
        description="Engage in sprints, daily scrums, and sprint reviews."
        url="/agile-icon.svg"
      />
      <OfficeSectionListItems
        title="Code Reviews & Peer Feedback"
        description="Receive and give feedback through simulated code review sessions."
        url="/code-icon.svg"
      />
    </div>
  );
};

export default OfficeSectionCard;
