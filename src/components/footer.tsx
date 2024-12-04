"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "@/contexts/ThemeContext";

const sections = [
  {
    title: "Useful links",
    items: [
      { name: "Home", link: "/" },
      { name: "Resources", link: "/" },
      { name: "Products", link: "/" },
      { name: "Community", link: "/" },
      { name: "Blog", link: "/" },
      { name: "About us", link: "/" },
    ],
  },

  {
    title: "Information",
    items: [
      { name: "FAQ", link: "/" },
      { name: "Blog", link: "/" },
      { name: "Support", link: "/" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Test Automation Training", link: "/" },
      { name: "AI-Powered Learning", link: "/" },
      { name: "Office Simulation" },
      { name: "Expert Mentorship", link: "/" },
    ],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/" },
];

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="container w-full mt-24  text-gray-500 px-2 lg:px-20">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-200 py-8 px-4 gap-3">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold text-black pt-8 dark:text-white">
              {section.title}
            </h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 text-gray-500 hover:text-primary hover:underline dark:text-[#8C8C8C]"
                >
                  <Link href={{ pathname: item.link }}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:max-w-sm pt-8 p-4 lg:p-8 bg-slate-100 mt-4 md:mt-0 dark:bg-[#1E293B]">
          <p className="font-bold  text-black dark:text-white">Subscribe</p>

          <form className="mt-4">
            {/* <div className="flex">
              <input
                className="w-4/5 p-2 mr-4 rounded-md mb-4 border border-black"
                type="email"
                placeholder="Enter email.."
              />
              <div className="w-1/5 bg-primary text-white">
                <LucideArrowBigRight className="w-6 h-6" />
              </div>
            </div> */}

            <div className="flex items-center w-full mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-[#142D84] focus:ring-2 text-sm md:text-base"
              />
              <button className="bg-primary dark:bg-[#142D84] dark:hover:bg-[#0E204E] text-white px-4 py-2 md:py-3 rounded-r-lg hover:bg-[#0E204E] focus:ring-[#142D84] focus:ring-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </button>
            </div>
          </form>

          <p className="py-2">
            Hello, we are Teamamplify. Stay updated with our latest courses and
            news.
          </p>
        </div>
      </div>

      <div className="md:flex items-center max-w-[1240px] px-2 py-4 pb-8 mx-auto justify-between text-center text-black dark:text-white">
        <Link href="/">
          <center>
            {theme === "dark" ? (
              <Image
                src="/images/logo_dark.svg"
                width={150}
                height={50}
                alt="logo"
              />
            ) : (
              <Image
                src="/images/logo_light.svg"
                width={150}
                height={50}
                alt="logo"
              />
            )}
          </center>
        </Link>
        <p className="py-4 font-bold">
          {new Date().getFullYear()} All rights reserved
        </p>

        <div className="flex gap-4 text-black font-bold justify-center dark:text-white">
          {/* <span>Terms</span> */}

          <Link href="#" className="hover:text-primary hover:underline">
            Terrms
          </Link>
          <Link href="#" className="hover:text-primary hover:underline">
            Privacy
          </Link>
          <Link href="#" className="hover:text-primary hover:underline">
            Cookies
          </Link>
        </div>
        <div className="flex gap-4 text-2xl justify-center mt-4 md:mt-0">
          {items.map((x, index) => {
            return (
              <x.icon
                key={index}
                className="hover:text-primary cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
