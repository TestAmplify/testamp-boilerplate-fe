"use client";

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import logoBlack from "../../../../public/logoBlue.svg";
import {
  filterSidebarLinks,
  SIDEBAR_LINK,
} from "@/app/(inner)/dashboard/sidebar/components/SidebarLinks";

export const Sidebar = () => {
  const pathname = usePathname();
  const [sidebarLinks, setSidebarLinks] = React.useState(SIDEBAR_LINK);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-[280px] min-w-[280px] px-4 bg-[#F7F7F7] py-4">
      <Link href="/" className="">
        <Image
          src={logoBlack}
          alt="logo-black"
          style={{ width: "46px", height: "auto" }}
        />
      </Link>
      <div className="h-[49px] overflow-hidden border bg-[#FAFBFF] border-[#ADADAD] flex items-center rounded-md mt-4">
        <Search size={24} className="text-[#8A8A8A] ml-2" />
        <input
          type="text"
          className="h-full w-full py-4 border-none px-2 focus-within:outline-none"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            const { value } = e.target;
            setSearchTerm(value);

            const filteredSidebarLinks = filterSidebarLinks(
              SIDEBAR_LINK,
              value
            );
            setSidebarLinks(filteredSidebarLinks);
          }}
        />
      </div>
      <div>
        {sidebarLinks.map((item, index) => (
          <div key={index}>
            <h2 className="text-[#383938] font-semibold text-[18px] mt-6 mb-2">
              {item.name}
            </h2>
            <div className="">
              {item.links.map((link) => {
                const isProfile = link.name === "Profile";

                if (isProfile) {
                  return (
                    <Link
                      key={link.name}
                      href={link.link}
                      className={clsx(
                        "flex items-center justify-start py-3 px-4 rounded-md",
                        pathname === link.link
                          ? "border border-[#E1E1E1]"
                          : "border-none"
                      )}
                    >
                      <Image
                        src={link.icon}
                        alt={link.name}
                        style={{ width: "24px", height: "auto" }}
                      />
                      <span className="text-[#383938] text-base font-normal ml-4">
                        {link.name}
                      </span>
                    </Link>
                  );
                }

                return (
                  <div
                    key={link.name}
                    className={clsx(
                      "flex items-center justify-start py-3 px-4 rounded-md relative",
                      pathname === link.link
                        ? "border border-[#E1E1E1]"
                        : "border-none"
                    )}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      style={{ width: "24px", height: "auto" }}
                    />
                    <Link
                      href={`/dashboard/${link.name.toLowerCase()}`}
                      className="text-[#383938] text-base font-normal ml-4"
                    >
                      {link.name}
                    </Link>
                    <span className="ml-2 inline-flex items-center px-1 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">
                      Coming soon
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
