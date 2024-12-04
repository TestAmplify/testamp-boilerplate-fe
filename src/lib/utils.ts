import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// import notification from "../../public/icons/notification.svg";

// import settings from "../../public/icons/settings.svg";
// import overview from "../../public/icons/overview.svg";
// import miniapps from "../../public/icons/miniapps.svg";
// import profile from "../../public/icons/profile.svg";
// import coding from "../../public/icons/coding.svg";
// import email from "../../public/icons/email.svg";
// import lms from "../../public/icons/lms.svg";

// export const SIDEBAR_LINK = [
//   {
//     name: "Dashboard",
//     links: [
//       {
//         name: "Overview",
//         link: "/dashboard/overview",
//         icon: overview,
//         id: "5",
//       },
//       {
//         name: "LMS",
//         link: "/dashboard/lms",
//         icon: lms,
//         id: "6",
//       },
//       {
//         name: "Mini apps",
//         link: "/dashboard/mini-apps",
//         icon: miniapps,
//         id: "7",
//       },
//       {
//         name: "Coding ground",
//         link: "/dashboard/coding-ground",
//         icon: coding,
//         id: "8",
//       },
//     ],
//   },
//   {
//     name: "Account",
//     links: [
//       {
//         name: "Profile",
//         link: "/dashboard/profile",
//         icon: profile,
//         id: "1",
//       },
//       {
//         name: "Email",
//         link: "/dashboard/email",
//         icon: email,
//         id: "2",
//       },
//       {
//         name: "Notifications",
//         link: "/dashboard/notifications",
//         icon: notification,
//         id: "3",
//       },
//       {
//         name: "Settings",
//         link: "/dashboard/settings",
//         icon: settings,
//         id: "4",
//       },
//     ],
//   },
// ];

// export function filterSidebarLinks(
//   links: typeof SIDEBAR_LINK,
//   searchTerm: string
// ) {
//   if (!searchTerm.trim()) {
//     return links;
//   }

//   const normalizedSearch = searchTerm.toLowerCase().trim();

//   return links
//     .map((section) => {
//       const filteredLinks = section.links.filter((link) =>
//         link.name.toLowerCase().includes(normalizedSearch)
//       );

//       return filteredLinks.length > 0
//         ? {
//             ...section,
//             links: filteredLinks,
//           }
//         : null;
//     })
//     .filter(Boolean) as typeof SIDEBAR_LINK;
// }
