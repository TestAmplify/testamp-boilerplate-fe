declare type CardProps = {
  title: string;
  description: string;
  image: string; // or use File if it's a file object
};

declare type NavbarContentProps = {
  title: string;
  href: string;
  description: string;
};

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

export interface OptionType {
  value: string | number;
  label: string;
  flag?: string;
  icon?: string;
}

export interface Country {
  name: {
    common: string;
  };
  flag: string;
  timezones: string;
}
export interface ImageValues {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
export interface UserInfo {
  _id: string;
  email: string;
  isEmailVerified: boolean;
  verificationToken: string | null;
  firstname: string;
  lastname: string;
  profileImage?: string;
  role: string;
  // permissions: string[];
  phone: string;
  country?: string;
  state?: string;
  homeAddress?: string;
  postalCode?: string;
}

export interface ProfileUpdate {
  firstname: string;
  lastname: string;
  email?: string | null;
  country: OptionType | string;
  state: string;
  homeAddress: string;
  postalCode: string;
  profileImage: ImageValues | string | null;
}

export interface PasswordUpdate {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword;
}
