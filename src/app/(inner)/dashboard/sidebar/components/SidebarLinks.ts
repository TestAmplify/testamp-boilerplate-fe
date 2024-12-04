import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

export const SIDEBAR_LINK = [
  {
    name: 'Dashboard',
    links: [
      {
        name: 'Overview',
        link: '/dashboard/overview',
        icon: 'ion:binoculars-outline',
        id: '1',
      },
      // {
      //   name: "Learning Paths",
      //   link: "/dashboard/learning-paths",
      //   icon: "fluent-mdl2:publish-course",
      //   id: "2",
      // },
      // {
      //   name: "Mini apps",
      //   link: "/dashboard/mini-apps",
      //   icon: "lucide:airplay",
      //   id: "3",
      // },
      // {
      //   name: "Coding ground",
      //   link: "/dashboard/coding-ground",
      //   icon: "gridicons:code",
      //   id: "4",
      // },
    ],
  },
  {
    name: 'Account',
    links: [
      {
        name: 'Profile',
        link: '/dashboard/profile',
        icon: 'mingcute:user-3-line',
        id: '5',
      },
      {
        name: 'Email',
        link: '/dashboard/email',
        icon: 'weui:email-outlined',
        id: '6',
      },
      {
        name: 'Notifications',
        link: '/dashboard/notifications',
        icon: 'solar:bell-bing-outline',
        id: '7',
      },
      {
        name: 'Subscription',
        link: '/dashboard/subscription',
        icon: 'f7:creditcard',
        id: '8',
      },
      {
        name: 'Settings',
        link: '/dashboard/settings',
        icon: 'carbon:settings',
        id: '9',
      },
      {
        name: 'Support',
        link: '/dashboard/support',
        icon: 'quill:chat',
        id: '10',
      },
    ],
  },
];

export function filterSidebarLinks(
  links: typeof SIDEBAR_LINK,
  searchTerm: string
) {
  if (!searchTerm.trim()) {
    return links;
  }

  const normalizedSearch = searchTerm.toLowerCase().trim();

  return links
    .map((section) => {
      const filteredLinks = section.links.filter((link) =>
        link.name.toLowerCase().includes(normalizedSearch)
      );

      return filteredLinks.length > 0
        ? {
            ...section,
            links: filteredLinks,
          }
        : null;
    })
    .filter(Boolean) as typeof SIDEBAR_LINK;
}
