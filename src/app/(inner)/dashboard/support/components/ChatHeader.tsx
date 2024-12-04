import { useTheme } from "@/contexts/ThemeContext";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ChatHeader = () => {
  const { darkMode } = useTheme();

  return (
    <section className="pb-3 pt-2">
      <div className="flex justify-center items-center gap-3 flex-wrap">
        <div className="hidden sm:block"></div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={darkMode ? "/images/logo_dark.svg" : "/testamplify-logo.jpg"}
            alt="logo-black"
            width={204}
            height={30}
          />
          <span
            className={clsx(
              "font-medium text-[#8A8A8A] dark:text-white",
              !darkMode ? "-mt-2  ml-11" : "mt-2  ml-9"
            )}
          >
            Support Center
          </span>
        </div>
      </div>
    </section>
  );
};

export default ChatHeader;
