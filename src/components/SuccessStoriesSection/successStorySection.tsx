"use client";

import React from "react";

import SuccessStoryCardSection from "./successStoryCardSection";

import testimonialLady from "../../../public/testimonialLady.webp";
import successMan from "../../../public/images/man_success.jpg";
import successWoman from "../../../public/images/woman_success.jpg";

const SuccessStorySection = () => {
  const SUCCESS_STORY_DATA = [
    {
      name: "Nova R",
      occupation: "Test Automation Engineer at TechCorp",
      review:
        "“Before joining this program, I was stuck in manual testing. Now, I’ve transitioned to a Test Automation Engineer role, managing CI/CD processes and leading projects.”",
      image: testimonialLady,
      id: "1",
    },
    {
      name: "Emma R",
      occupation: "Test Automation Engineer at TechCorp",
      review:
        "“Thanks to this program, I have gained the skills and confidence to automate complex testing scenarios, which has significantly improved our software quality and delivery speed.”",
      image: successMan,
      id: "2",
    },
    {
      name: "Jeka R",
      occupation: "Test Automation Engineer at TechCorp",
      review:
        "“Before joining this program, I was stuck in manual testing. Now, I’ve transitioned to a Test Automation Engineer role, managing CI/CD processes and leading projects.”",
      image: successWoman,
      id: "3",
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const handleNext = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === SUCCESS_STORY_DATA.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const handlePrevious = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? SUCCESS_STORY_DATA.length - 1 : prevCurrent - 1
    );
  };

  return (
    <div className="container mt-10 lg:my-16">
      {" "}
      <h2 className="text-3xl font-medium text-center text-primary-100 dark:text-white">
        Success Stories{" "}
      </h2>
      <span className="flex md:max-w-sm mt-5 mb-[1.5rem] text-primary-300 text-sm mx-auto justify-center text-center dark:text-[#8C8C8C]">
        Don&apos;t just take our word for it - see what actual users of our
        service have to say about their experience.
      </span>
      <SuccessStoryCardSection
        SUCCESS_STORY_DATA={SUCCESS_STORY_DATA}
        current={current}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default SuccessStorySection;
