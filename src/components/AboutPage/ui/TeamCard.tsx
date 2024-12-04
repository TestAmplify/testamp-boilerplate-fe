import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  title: string;
  bio: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, title, bio }) => {
  return (
    <div className="w-[230px] h-[360px] ">
      <div
        className="h-[50%] w-full"
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="mt-10 text-start">
        <h1 className="text-lg font-medium ">{name}</h1>
        <p className="text-base font-medium text-[#676767] dark:text-[#8C8C8C]">
          {title}
        </p>
        <p className="text-base text-[#676767] dark:text-[#8C8C8C] mt-5">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
