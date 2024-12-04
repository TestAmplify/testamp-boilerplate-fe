import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Card from "./Card";
import ButtonBlue from "../../components/ButtonBlue";

interface Props {
  userName: string;
}

const lmsCourses = [
  {
    id: "1",
    title: "Test Automation Basics",
    instructor: "Richard Carlson",
    modules: 24,
    progress: 50,
    thumbnailUrl: "/taking-notes.jpg",
  },
  {
    id: "2",
    title: "Advanced Automation Techniques",
    instructor: "Alice Johnson",
    modules: 30,
    progress: 75,
    thumbnailUrl: "/desktop-computer.jpg",
  },
  {
    id: "3",
    title: "Introduction to Programming",
    instructor: "John Doe",
    modules: 15,
    progress: 20,
    thumbnailUrl: "/books-stack.jpg",
  },
  {
    id: "4",
    title: "Introduction to Programming",
    instructor: "John Doe",
    modules: 34,
    progress: 20,
    thumbnailUrl: "/task-management.jpg",
  },
];

const LmsPresent = ({ userName }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCourses = lmsCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="text-foundation-grey-normal dark:text-white">
      <section className="flex justify-end">
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            placeholder="Search course"
            className="font-semibold text-sm h-[45px] px-12 pr-8 border border-foundation-white-normal bg-foundation-white-light dark:bg-gray-800 dark:border-gray-700 drop-shadow-sm dark:drop-shadow-lg  outline-none rounded-lg  placeholder:text-foundation-grey-normal dark:placeholder:text-white"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Icon
            icon="tdesign:search"
            className="absolute inset-y-3 left-4 text-[#8A8A8A] w-5 h-5"
          />
        </div>
      </section>
      <section className="">
        <p className="font-medium text-[15px] text-foundation-white-dark-active dark:text-white my-6">{`Hi, ${userName} Be updated with your LMS courses.`}</p>
        <div className="flex justify-center">
          <ButtonBlue type="button" className="sm:max-w-[382px] h-[58px] my-4">
            Open LMS{" "}
            <Icon
              icon="fluent:arrow-up-right-16-filled"
              className="inline-block ml-1"
            />
          </ButtonBlue>
        </div>
      </section>
      <section className="my-7">
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg:grid-cols-2 gap-y-9 gap-x-40">
          {filteredCourses.map((course) => (
            <Card key={course.id} {...course} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default LmsPresent;
