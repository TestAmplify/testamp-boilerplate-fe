import { Command, Search } from "lucide-react";
import React from "react";

import Image from "next/image";

import notification from "../../../../public/icons/notification.svg";
import profilePic from "../../../../public/profilePic.png";

const NavbarDashboard = () => {
  return (
    <div className="h-[68px] bg-white px-6 justify-between flex">
      <div className="h-[35px] px-5 overflow-hidden w-[516px] border bg-[#FAFBFF] border-[#EBEBEB] flex items-center rounded-md mt-4">
        <Search size={18} color="#141B34" />
        <input
          type="text"
          className="h-full w-full py-4 border-none placeholder:text-[15px] text-[15px] px-2 focus-within:outline-none"
          placeholder="Search anything"
        />
        <div className="flex items-center text-[14px] text-[#B8C4E6]">
          <Command size={14} color="#B8C4E6" />K
        </div>
      </div>
      <div className="px-6 flex items-center gap-5">
        <div className="relative flex items-center justify-center w-[32px] h-[35px] rounded-[8px] border-[#DCE0ED] border">
          <Image
            src={notification}
            alt="notification"
            style={{ width: "24px", height: "auto" }}
          />
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF3B30] absolute -top-1 -right-1" />
        </div>
        <button type="button">
          <Image
            src={profilePic}
            alt="profile-pic"
            style={{ width: "35px", height: "auto" }}
          />
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
