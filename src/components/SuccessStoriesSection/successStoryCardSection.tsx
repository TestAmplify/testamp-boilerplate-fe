import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import { TiStarOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa6";
import React from "react";

import { Button } from "../ui/button";

interface SuccessStoryCardSectionProps {
  SUCCESS_STORY_DATA: {
    name: string;
    occupation: string;
    review: string;
    image: StaticImageData;
    id: string;
  }[];
  current: number;
  handleNext: () => void;
  handlePrevious: () => void;
}
const SuccessStoryCardSection = ({
  SUCCESS_STORY_DATA,
  current,
  handleNext,
  handlePrevious,
}: SuccessStoryCardSectionProps) => {
  return (
    <div className="my-10 lg:my-16 max-w-3xl lg:max-w-[80%] grid md:grid-cols-2 gap-10 lg:gap-[8rem] pb-10 md:mx-auto">
      <Image
        src={SUCCESS_STORY_DATA[current].image}
        alt="success story"
        className="w-[359px] h-[436px]"
      />

      <div className="md:max-w-[30rem] mt-10">
        <div className="box-border w-[352px] h-[280px] py-4">
          <p className="flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <TiStarOutline />
          </p>
          <p className="mt-4 text-primary-200 dark:text-white">
            {SUCCESS_STORY_DATA[current].review}
          </p>
          <p className="flex items-center gap-2 mt-8">
            <IoShieldCheckmarkSharp className="text-green-400" />{" "}
            <span className="text-primary-200 dark:text-[#8C8C8C]">
              Verified user
            </span>
          </p>
          <p className="mt-4 text-primary-300 dark:text-[#8C8C8C]">
            <b className="text-primary-100 dark:text-white">
              {SUCCESS_STORY_DATA[current].name},
            </b>{" "}
            | {SUCCESS_STORY_DATA[current].occupation}
          </p>
        </div>

        <div className="flex justify-center items-center gap-[11px] mt-3">
          <Button
            onClick={handlePrevious}
            className="w-[48px] h-[48px]  bg-[#ffffff] border-[1px] border-[#EBEBEB] rounded-full shadow-button"
          >
            <MdOutlineKeyboardArrowLeft className="text-[24px]" />
          </Button>
          <Button
            className="w-[69px] h-[48px] bg-[#ffffff] border-[1px] border-[#EBEBEB] rounded-full shadow-button"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
        {/* <div className="flex opacity-0 justify-center gap-2 items-center">
          <Button
            onClick={handlePrevious}
            size="lg"
            variant={"outline"}
            className="w-[48px] h-[48px] min-h-[48px] min-w-[48px] text-center rounded-full shadow-lg shadow-slate-300 bg-white px-3 py-0"
          >
            <MdOutlineKeyboardArrowLeft className="text-[24px]" />
          </Button>

          <Button
            onClick={handleNext}
            size="lg"
            className="my-10 w-[69px] text-center px-3 py-1.5 mr-8 shadow-lg shadow-slate-300 bg-white text-black text-[20px]"
          >
            Next
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default SuccessStoryCardSection;
