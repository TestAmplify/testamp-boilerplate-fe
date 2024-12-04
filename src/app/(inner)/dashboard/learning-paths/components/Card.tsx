import { Icon } from "@iconify/react";
import Image from "next/image";
import { CircularProgress } from "./CircularProgress";

interface Props {
  title: string;
  instructor: string;
  modules: number;
  progress: number;
  thumbnailUrl: string;
}

const Card = ({
  title,
  instructor,
  modules,
  progress,
  thumbnailUrl,
}: Props) => {
  return (
    <div className="border border-foundation-grey-light dark:border-gray-700  drop-shadow-sm dark:drop-shadow-lg p-2 rounded-[18px]">
      <div className="relative rounded-b-xl overflow-hidden">
        <button
          type="button"
          className="absolute top-3 right-3 bg-white  p-1 rounded-lg border border-foundation-grey-light dark:border-gray-700 dark:drop-shadow-lg drop-shadow-sm"
        >
          <span className="sr-only">Menu button</span>
          <Icon
            icon="qlementine-icons:menu-dots-16"
            className="w-7 h-7 text-black"
          />
        </button>
        <Image
          src={thumbnailUrl}
          alt={thumbnailUrl.split(".")[0].slice(1).replace("-", "")}
          width={397}
          height={246}
          className="w-full h-auto object-cover"
        />
        <progress
          id="progress-bar"
          value={progress}
          max="100"
          className="absolute bottom-0 w-full h-1 [&::-webkit-progress-value]:bg-dashboard-green [&::-moz-progress-bar]:bg-dashboard-green [&::-ms-fill]:bg-dashboard-green  [&::-webkit-progress-bar]:bg-foundation-grey-newLight"
        ></progress>
      </div>
      <div className="p-1">
        <h4 className="font-semibold text-2xl my-2">{title}</h4>
        <span className="bold font-medium text-foundation-white-dark-active dark:text-gray-300">
          {instructor}
        </span>
        <div className="flex justify-between mt-12 mb-6">
          <span className="font-semibold">{modules} modules</span>
          <CircularProgress value={progress} />
        </div>
      </div>
    </div>
  );
};

export default Card;
