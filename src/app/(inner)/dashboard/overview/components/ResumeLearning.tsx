import { Icon } from "@iconify/react";
import Image from "next/image";

const ongoingCourses = [
  {
    progress: "70",
    thumbnailUr: "/task-managerSmall.jpg",
  },
  {
    progress: "50",
    thumbnailUr: "/taking-notesSmall.jpg",
  },
  {
    progress: "40",
    thumbnailUr: "/books-stackSmall.jpg",
  },
  {
    progress: "20",
    thumbnailUr: "/desktop-computerSmall.jpg",
  },
];

const ResumeLearning = () => (
  <section className="px-7 py-5 border border-foundation-grey-light dark:border-gray-700 drop-shadow-sm rounded-xl">
    <div className="flex justify-end">
      <button
        type="button"
        className="border border-foundation-grey-light dark:border-gray-700 p-1 rounded-lg"
      >
        <span className="sr-only">Menu button</span>
        <Icon icon="qlementine-icons:menu-dots-16" className="w-7 h-7" />
      </button>
    </div>
    <h3 className="font-semibold text-[22px]">Resume your learning</h3>
    <p className="text-sm text-foundation-white-dark-active dark:text-gray-300 py-2">
      You can finish up with your courses right now
    </p>
    <div className="flex gap-10 my-3">
      {ongoingCourses.map((course, index) => (
        <div
          key={index}
          className="relative w-[61px] h-[61px] rounded-b-xl overflow-hidden"
        >
          <Image
            src={course.thumbnailUr}
            alt={course.thumbnailUr.split(".")[0].slice(1).replace("-", "")}
            width={61}
            height={61}
            className="w-full h-auto object-cover "
          />
          <progress
            id="progress-bar"
            value={course.progress}
            max="100"
            className="absolute bottom-0 w-full h-1 [&::-webkit-progress-value]:bg-dashboard-green [&::-moz-progress-bar]:bg-dashboard-green [&::-ms-fill]:bg-dashboard-green  [&::-webkit-progress-bar]:bg-foundation-grey-newLight"
          ></progress>
        </div>
      ))}
    </div>
  </section>
);
export default ResumeLearning;
