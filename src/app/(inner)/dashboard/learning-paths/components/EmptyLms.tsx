import Image from "next/image";
import React from "react";
import Button from "../../components/Button";

const EmptyLms = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh]">
      <div className="text-foundation-white-dark">
        <Image src="/empty-lms.jpg" alt="Empty" width={426} height={290} />
        <p className="">
          You have not begun using our learning management system yet.
        </p>
        <div className="flex justify-center mt-6">
          <Button className="sm:max-w-[226px] mt-2">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default EmptyLms;
