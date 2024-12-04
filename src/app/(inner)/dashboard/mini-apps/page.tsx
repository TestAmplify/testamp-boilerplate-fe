import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const apps = [
  {
    thumbnailUrl: "/mini-bank-tn.jpg",
    name: "Mini Bank",
    link: "https://mini-bank-fe.vercel.app",
  },

  {
    thumbnailUrl: "/mini-ecom-tn.jpg",
    name: "Mini Shop",
    link: "https://testamplify-mini-shop.vercel.app/",
  },
  {
    thumbnailUrl: "/mini-vid-tn.jpg",
    name: "Mini Flix",
    link: "",
  },

  {
    thumbnailUrl: "/task-manager.jpg",
    name: "Task manager",
    link: "",
  },

  {
    thumbnailUrl: "/ride-sharing.jpg",
    name: "Ride sharing",
    link: "",
  },

  {
    thumbnailUrl: "/message.jpg",
    name: "Messenger",
    link: "",
  },
];
const MiniApps = () => {
  return (
    <section className="font-inter md:px-10 px-5 py-6">
      <h2 className="font-bold text-[32px] text-foundation-grey-normal dark:text-white">
        Mini Apps
      </h2>
      <section className="my-14 h-screen">
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(293px,1fr))] grid-cols-1  lg:grid-cols-3 gap-x-28 gap-y-10">
          {apps.map((app, index) => (
            <div key={index}>
              <div className="relative after:absolute after:inset-0 hover:after:bg-black after:opacity-35 z-0 rounded-2xl overflow-hidden transition duration-1000 ease-in-out group  text-foundation-white-light cursor-pointer">
                <Image
                  src={app.thumbnailUrl}
                  alt={app.name}
                  width={293}
                  height={244}
                  className="w-full h-auto"
                />
                <span className="absolute top-0 left-0 z-10 flex justify-center items-center w-full h-full font-bold text-2xl opacity-0 group-hover:opacity-100">
                  {app.name} app
                </span>
              </div>
              <Button className="my-7 text-foundation-white-darker dark:text-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-opacity-85">
                <Link href={app.link} target="_blank" rel="noreferrer">
                  Open app
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default MiniApps;
