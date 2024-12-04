import React from "react";
import { SquareCheck } from "lucide-react";

const WhyLearn = () => {
  return (
    <section className="container my-10 md:my-15 lg:my-20">
      <div className="max-w-[41rem] mx-auto">
        <div className="w-10/12 flex flex-col space-y-8 mb-[2rem]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
            Why Learn from TestAmplify Mentors?
          </h1>
          <div className="text-2xs md:text-sm lg:text-base text-[#676767] dark:text-[#8C8C8C] ">
            <p className="text-center">
              At TestAmplify, our mentors are more than just instructors—they're
              passionate professionals dedicated to your success. Each mentor
              brings:
            </p>
          </div>
        </div>
        <ul className="text-[#676767] dark:text-[#8C8C8C] text-2xs md:text-sm lg:text-base">
          <li className="flex gap-2 items-center mb-2">
            <span>
              <SquareCheck size={18} strokeWidth={0.8} />
            </span>
            <span>
              {" "}
              Expertise in cutting-edge testing tools and methodologies.
            </span>
          </li>
          <li className="flex gap-2 items-center mb-2">
            <span>
              <SquareCheck size={18} strokeWidth={0.8} />
            </span>
            <span>
              {" "}
              Real-world experience across industries like finance, healthcare,
              and e-commerce.
            </span>
          </li>
          <li className="flex gap-2 items-center mb-2">
            <span>
              <SquareCheck size={18} strokeWidth={0.8} />
            </span>
            <span>
              {" "}
              A proven track record of delivering quality education and
              mentorship.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyLearn;
