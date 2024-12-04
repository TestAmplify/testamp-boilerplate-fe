import React from "react";
import Link from "next/link";
// import Image from "next/image";

const JoinUsNow = () => {
  return (
    <section className="container my-10 md:my-15 lg:my-20 text-center">
      <div className=" dark:text-white flex flex-col space-y-8">
        <div className="w-full h-[10rem] md:h-[20rem] lg:h-[40rem] bg-[url(/images/about/join_us_frame.jpg)] bg-contain bg-center bg-no-repeat sm:mb-5"></div>
      </div>
      <Link href="/signup">
        <button className="w-[6rem] h-[1.5rem] lg:w-[22rem] lg:h-[5rem] rounded-full border-[1px] text-3xs md:text-xs lg:text-base border-[#E8E8E8] dark:border-[#8c8c8c]">
          Join us now!
        </button>
      </Link>
    </section>
  );
};

export default JoinUsNow;
