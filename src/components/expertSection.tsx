import React from "react";
import ExpertsCarouselSection from "./expertsCarouselSection";
import { Button } from "./ui/button";
import Link from "next/link";

const ExpertSection = () => {
  return (
    <div className="container mt-16 lg:mt-20  mx-auto">
      <h2 className="text-center text-3xl font-medium ">
        Learn from Our Experts
      </h2>
      <p className="text-center mt-5 mb-[1.5rem] text-black/70 text-sm dark:text-[#8C8C8C]">
        Peruse through our list of qualified experts
      </p>

      <ExpertsCarouselSection />
      <div className="w-full text-center ">
        <Link href={"/mentors"}>
          <Button
            variant={"primary"}
            size="lg"
            className="w-full sm:w-2/4 lg:w-1/4 text-center font-semibold rounded-[4rem] lg:px-0 text-3xs sm:text-xs"
          >
            See full list of mentors
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExpertSection;
