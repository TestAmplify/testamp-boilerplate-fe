"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import courses from "@/constants/courses";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent>
        {courses.map((course, index) => (
          <CarouselItem key={index} className="md:basis-[30%]">
            <div className="p-1">
              <CourseCard
                key={course.name}
                title={course.name}
                description={course.description}
                image={course.image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CoursesSection;
