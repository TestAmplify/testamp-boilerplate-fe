'use client';
import { Command } from 'lucide-react';
import React, { useState } from 'react';

// import Image from "next/image";

// import notification from "../../../../../../public/icons/notification.svg";
// import profilePic from "../../../../../../public/profilePic.png";
import { Icon } from '@iconify/react';
import UserNotification from '../profile/components/UserNotification';
import { useUserInfoIdb } from '@/hooks/useUserInfoIdb';

const TopNavbarDashboard = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { userInfo } = useUserInfoIdb();
  const initials =
    userInfo?.firstname && userInfo.lastname
      ? `${userInfo?.firstname[0]}${userInfo?.lastname[0]}`
      : '';

  return (
    <div className='flex  md:ml-0 h-[68px] bg-white dark:bg-gray-800 px-1 sm:px-5 justify-between border-b border-foundation-white-normal dark:border-gray-600 dark:drop-shadow-lg'>
      <div className='relative flex-1 sm:flex hidden h-[35px] px-5  items-center mt-4 ml-5 md:ml-0'>
        {/* <Search size={18} color="#141B34" /> */}
        <button type='button' className='absolute inset-y-2 left-10'>
          {' '}
          <Icon
            icon='cil:search'
            className='w-[18px] h-[18px] dark:text-white'
          />
        </button>
        <input
          type='text'
          className='h-[35px] w-full py-4 pr-4 pl-12 dark:text-gray-200 border border-[#EBEBEB] dark:border-gray-700 dark:bg-gray-800 rounded-lg  placeholder:text-[15px] placeholder:text-[#A1A1A1] dark:placeholder:text-gray-200 text-[15px]  focus-within:outline-none'
          placeholder='Search anything'
        />
        <div className='flex items-center text-[14px] text-[#B8C4E6] absolute inset-y-2 right-10'>
          <Command size={15} color='#B8C4E6' />
          <span className='inline-block ml-1 font-semibold'>K</span>
        </div>
      </div>
      <div className='flex-1 md:block hidden'></div>
      <div className='px-6 flex items-center justify-end sm:flex-none flex-1 gap-5'>
        <div
          className='relative flex items-center justify-center w-[32px] h-[35px] rounded-[8px] border-[#DCE0ED] border cursor-pointer'
          onClick={() => setShowNotification(!showNotification)}
        >
          <Icon
            icon='solar:bell-bing-outline'
            className='w-6 h-6 text-[#545454] dark:text-white'
          />
          <div className='w-[9px] h-[9px] rounded-full bg-[#FF3B30] absolute -top-[2px] -right-1' />
          {showNotification && (
            <UserNotification setShowNotification={setShowNotification} />
          )}
        </div>

        <div>
          {/* <Image
            src={profilePic}
            alt="profile-pic"
            className="w-[35px] h-auto"
          /> */}
          <span className='flex justify-center items-center w-[35px] h-[35px] rounded-full bg-foundation-primary-normal text-white font-bold text-xl'>
            {initials.toUpperCase()}
            <span className='sr-only'>Initials</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbarDashboard;
