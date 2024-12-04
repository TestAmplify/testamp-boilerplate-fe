"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

const AutoCarousel = ({ slides }: { slides: string[] }) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    embla.on("init", onSelect);

    const timer = setInterval(() => {
      embla.scrollNext();
    }, 6000);

    return () => {
      clearInterval(timer);
      embla.off("select", onSelect);
    };
  }, [embla]);

  const carouselContentClass = cva(
    "absolute top-[79%] left-[5.83%] w-[88.47%] h-[12.5%] text-white flex gap-2 box-border p-4 max-h-[10vh] z-50 "
  );

  return (
    <div className="hidden md:w-1/2 md:block h-screen sticky top-0">
      <div className="relative h-full">
        {/* Carousel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-screen flex-shrink-0 w-full bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${slide})` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Content Div */}
        <div className={carouselContentClass()}>
          <div className="w-1/12 h-[50%]">
            <Link href="/">
              <Image
                src={"/images/test_logo.png"}
                alt="test logo"
                width={65.36}
                height={64.94}
              />
            </Link>
          </div>
          <div className="w-11/12 flex flex-col ">
            <h3 className="font-semibold text-2xs lg:text-lg flex-shrink-0">
              How does AI help me stay up-to-date with industry trends in Test
              Automation?{" "}
            </h3>

            <p className="text-[#f0ecec] text-4xs lg:text-2xs flex-shrink-0">
              Al-powered tools are constantly evolving, incorporating the latest
              testing methodologies and frameworks. As part of your training,
              you'll learn to work with these cutting-edge tools, which keeps
              your skillset current.
            </p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20 ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => embla?.scrollTo(index)}
              className={`w-0.5 h-0.5 lg:w-2 lg:h-2 md:w-1 md:h-1 rounded-full ${
                selectedIndex === index ? "bg-[#d9d9d9]" : "bg-[#767676]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;
