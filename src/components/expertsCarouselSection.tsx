"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import experts from "@/constants/experts";
import ExpertSectionCard from "./expertSectionCard";

const ExpertsCarouselSection = () => {
  return (
    <div className="lg:my-10">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {experts.map((expert, index) => (
            <CarouselItem key={index} className="md:basis-[30%]">
              <div className="p-1">
                <ExpertSectionCard
                  key={expert.name}
                  name={expert.name}
                  title={expert.title}
                  image={expert.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <div className="flex justify-center">
        <Button
          size="exlg"
          className="my-10 text-center rounded-[4rem] bg-primary text-white"
        >
          See full list of Mentors
        </Button>
      </div> */}
    </div>
  );
};

export default ExpertsCarouselSection;
