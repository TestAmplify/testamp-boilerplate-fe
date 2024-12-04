import React from "react";
import { Card } from "./ui/card";
// import { Card, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";

type ExpertSectionCardProps = {
  name: string;
  title: string;

  image: string;
};

const ExpertSectionCard = ({ image, name, title }: ExpertSectionCardProps) => {
  return (
    <Card className="relative w-full border border-[#ebebeb]/60 rounded-3xl p-3 cursor-pointer hover:shadow-lg">
      <div className="relative">
        <Image
          className="h-full w-full object-cover relative"
          src={image}
          alt={name}
          width={300}
          height={300}
        />

        <div className=" w-full h-24 absolute bottom-0 right-0 left-0 bg-gradient-to-b  from-transparent to-black opacity-90 rounded-3xl rounded-tl-none rounded-tr-none" />
        {/* <div className="w-full absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-white/80"></div> */}
        {/* inset-0 bg-gradient-to-b from-white/20 to-white/80 */}
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-left mt-5 mb-3 font-bold text-xl">{name}</h2>
          <p className="text-left font-medium">{title}</p>
        </div>
      </div>
    </Card>

    // <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    //   <div className="h-96 w-72">
    //     <img
    //       className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
    //       src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    //       alt=""
    //     />
    //   </div>
    //   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
    //   <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
    //     <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
    //     <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    //       dolore adipisci placeat.
    //     </p>
    //     <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
    //       See More
    //     </button>
    //   </div>
    // </div>
  );
};

export default ExpertSectionCard;
