import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MentorsCardProps {
  image: string;
  name: string;
  specialization: string[];
  experience: string;
  funFact: string;
}

const MentorsCard: React.FC<MentorsCardProps> = ({
  image,
  name,
  specialization,
  experience,
  funFact,
}) => {
  return (
    <div className=" lg:w-[63rem] lg:h-[32rem] md:w-[47.25rem] md:h-[24rem] sm:w-[30rem] sm:h-[16rem] w-[8rem] h-[4.5rem] xs:w-[15rem] xs:h-[9rem] grid grid-cols-2 mt-5 lg:gap-10 ">
      {/* <div
        className="w-full rounded-2xl bg-contain bg-no-repeat lg:ml-10"
        style={{ background: `url(${image})` }}
      ></div> */}

      <div className="rounded-2xl">
        <Image
          src={`${image}`}
          width={100}
          height={200}
          alt={"mentor img"}
          // sizes="(max-width: 640px) 100%, (max-width: 1024px) 50%, 33%"
          className="object-cover w-full h-auto lg p-1 sm:p-2.5 md:p-5 lg:p-10"
        />
      </div>

      <div className="flex flex-col h-full gap-0.5 xs:gap-1 sm:gap-2 md:gap-4 lg:gap-7 relative text-start">
        <div className="text-6xs xs:text-5xs sm:text-2xs md:text-sm lg:text-base mt-1 xs:mt-2 sm:mt-3 md:mt-6 lg:mt-12">
          <h3 className="font-medium">Name</h3>
          <p className="text-[#676767] dark:text-[#8C8C8C]">{name}</p>
        </div>
        <div className="text-6xs xs:text-5xs sm:text-2xs md:text-sm lg:text-base">
          <h3>Specialization</h3>
          <p className="text-[#676767] dark:text-[#8C8C8C]">
            {specialization.join(", ")}
          </p>
        </div>
        <div className="text-6xs xs:text-5xs sm:text-2xs md:text-sm lg:text-base">
          <h3>Experience</h3>
          <p className="text-[#676767] dark:text-[#8C8C8C]">{experience}</p>
        </div>
        <div className="text-6xs xs:text-5xs sm:text-2xs md:text-sm lg:text-base">
          <h3>Fun fact</h3>
          <p className="text-[#676767] dark:text-[#8C8C8C]">{funFact}</p>
        </div>
        <hr className="border-[0.3px] xs:border[1px]" />
        <div className="absolute bottom-[10%]">
          <div className="h-[6px] w-[30px] xs:h-[12px] xs:w-[60px] sm:h-[15px] sm:w-[70px] md:h-[20px] md:w-[110px] lg:h-[25px] lg:w-[140px] grid grid-cols-4 md:gap-3 gap-1 ">
            <Link href="#socials">
              <Image
                width={12}
                height={12}
                alt="x logo"
                src={"/images/mentors/x.png"}
                className="objec-cover w-full h-auto"
              />
            </Link>
            <Link href="#socials">
              <Image
                width={12}
                height={12}
                alt="slack logo"
                src={"/images/mentors/slack.png"}
                className="objec-cover w-full h-auto"
              />
            </Link>
            <Link href="#socials">
              <Image
                width={12}
                height={12}
                alt="mail logo"
                src={"/images/mentors/mail.png"}
                className="objec-cover w-full h-auto"
              />
            </Link>
            <Link href="#socials">
              <Image
                width={12}
                height={12}
                alt="link logo"
                src={"/images/mentors/link.png"}
                className="objec-cover w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsCard;
