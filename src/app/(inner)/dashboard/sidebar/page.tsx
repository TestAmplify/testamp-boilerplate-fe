"use client";
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SIDEBAR_LINK } from "./components/SidebarLinks";
import SidebarProfile from "./components/SidebarProfile";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTheme } from "@/contexts/ThemeContext";

const SideNavbar = () => {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar(); // Access closeSidebar to toggle visibility
  const { darkMode } = useTheme();

  return (
    <section>
      {/* Sidebar Toggler (Visible on Small Screens) */}
      <div className="fixed top-5 left-4 z-50 md:hidden">
        <SidebarTrigger />
      </div>

      {/* Sidebar */}
      <Sidebar className="pb-4 max-w-[265px] bg-[#ffffff] dark:bg-gray-900 border-r border-foundation-white-normal dark:border-gray-700">
        {/* Sidebar Header */}
        <SidebarHeader className="pr-4 py-3 flex items-center justify-between -ml-8">
          <Image
            src={darkMode ? "/images/logo_dark.svg" : "/testamplify-logo.jpg"}
            alt="Logo"
            width={205}
            height={70}
          />
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent className="px-4">
          {SIDEBAR_LINK.map((group, index) => (
            <SidebarGroup key={index}>
              <h2 className="text-[#383938] dark:text-white font-semibold text-[18px] mb-2">
                {group.name}
              </h2>
              {group.links.map((link) => {
                const isActive = pathname === link.link;

                return (
                  <Link
                    key={link.name}
                    href={link.link}
                    className={clsx(
                      "flex items-center justify-start py-[13px] px-4 rounded-md relative",
                      isActive
                        ? "bg-foundation-primary-normal text-white"
                        : "hover:underline text-[#323232]"
                    )}
                    onClick={() => setOpenMobile(false)}
                  >
                    <Icon
                      icon={link.icon}
                      className={clsx(
                        "w-6 h-6 text-bold mr-2 dark:text-gray-200 ",
                        isActive ? "text-white" : "text-[#545454]"
                      )}
                    />
                    <span className="dark:text-white  text-base font-semibold">
                      {link.name}
                    </span>
                    {link.name === "Notifications" && (
                      <span className="flex justify-center items-center w-[34px] h-[22px] bg-[#ed3a53] text-white text-xs font-semibold rounded-2xl ml-2">
                        99+
                      </span>
                    )}
                  </Link>
                );
              })}
            </SidebarGroup>
          ))}
        </SidebarContent>

        {/* Sidebar Footer */}
        <SidebarFooter className="mt-auto px-4">
          <SidebarProfile />
        </SidebarFooter>
      </Sidebar>
    </section>
  );
};

export default SideNavbar;
