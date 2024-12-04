"use client";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./Navs/Navbar";
import { X } from "lucide-react";

const Header = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const hideBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <header className="header border-b-[1px] z-40 sticky top-0 backdrop-blur-sm">
      {isBannerVisible && (
        <div className="banner w-full md:w-[2/3] relative flex justify-center items-center py-3 bg-primary text-white dark:bg-[#0E204E]">
          <div className="flex items-center">
            <Image
              src="/phone_icon.svg"
              alt="phone icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <p className="text-xs md:text-base">
              Book a free consultation call{" "}
              <span className="underline underline-offset-2">now</span>
            </p>

            <X
              width={18}
              height={18}
              className="absolute right-2 lg:right-[10rem] cursor-pointer"
              onClick={hideBanner}
            />
          </div>
        </div>
      )}
      <Navbar />
    </header>
  );
};

export default Header;
