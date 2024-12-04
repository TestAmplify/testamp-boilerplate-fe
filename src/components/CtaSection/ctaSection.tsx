import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

const CtaSection = () => {
  return (
    <>
      <div className="bg-[url('/cta-bg-image.jpg')] w-full min-h-[45rem] bg-cover bg-center relative flex justify-center  items-center ">
        <div className="">
          <Card className="md:p-20 p-5 sm:p-10 rounded-3xl">
            <CardContent>
              <h2 className="text-xl sm:text-3xl font-medium text-center text-primary-100 dark:text-white">
                Ready to transform your career?
              </h2>
              <span className="flex md:max-w-lg mt-2 mb-[1rem] text-primary-300 text-sm mx-auto justify-center text-center dark:text-[#8C8C8C]">
                Let us help you take your career to the next level
              </span>

              <div className="flex flex-wrap w-[200px] mx-auto justify-center mt-10 lg:w-[600px] gap-4 sm:gap-8">
                <div className="flex-1">
                  <Button
                    variant="primary"
                    size="lg"
                    className="text-center w-full font-semibold rounded-[4rem]"
                  >
                    Sign up now
                  </Button>
                </div>
                <div className="flex-1">
                  <Button
                    variant={"outline"}
                    size="lg"
                    className="w-full text-center font-semibold rounded-[4rem] lg:px-0"
                  >
                    Book a call with our experts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CtaSection;
