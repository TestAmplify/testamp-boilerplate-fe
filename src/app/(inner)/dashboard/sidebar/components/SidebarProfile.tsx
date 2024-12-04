'use client';
import useLogout from '@/hooks/useLogout';
import { useUserInfoIdb } from '@/hooks/useUserInfoIdb';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
// import Image from "next/image";
import React, { useState } from 'react';

const SidebarProfile = () => {
  const [isOnline] = useState(true);
  const { isLoading, userInfo } = useUserInfoIdb();

  const logout = useLogout();
  const splitEmail = userInfo?.email?.split('@');
  const truncEmail =
    splitEmail && `${splitEmail[0].slice(0, 3)}...@${splitEmail[1]}`;

  if (isLoading) {
    return (
      <p className='flex justify-center mt-8'>
        <Icon
          icon='eos-icons:three-dots-loading'
          className='w-9 h-9 dark:text-[#1E40AF]'
        />
      </p>
    );
  }

  const userName = userInfo ? (
    <span className='font-semibold text-[15px] dark:text-white block'>{`${
      userInfo?.firstname
    } ${userInfo.lastname && userInfo?.lastname[0]}.`}</span>
  ) : (
    ''
  );

  const initials =
    userInfo?.firstname && userInfo.lastname
      ? `${userInfo?.firstname[0]}${userInfo?.lastname[0]}`
      : '';

  return (
    <section className='relative'>
      <div className='flex items-center gap-3 p-3 max-w-[237px] max-h-[81px] bg-foundation-white-light dark:bg-gray-800 border border-foundation-grey-light-hover dark:border-gray-600 drop-shadow-sm dark:drop-shadow-lg rounded-lg'>
        <div className='relative'>
          {/* {userInfo?.profileImage ? (
            <Image
              src={userInfo.profileImage}
              alt="Image upload"
              width={54}
              height={54}
              className="w-full h-full rounded-full"
            />
          ) : ( */}
          <span className='flex justify-center items-center w-[54px] h-[54px] rounded-full bg-foundation-primary-normal text-white font-bold text-2xl'>
            {initials.toUpperCase()}
            <span className='sr-only'>Initials</span>
          </span>
          {/* )} */}
          <span
            className={clsx(
              'absolute right-0 bottom-0 w-5 h-5 border-[3px] border-white rounded-full',
              isOnline ? 'bg-dashboard-green' : 'bg-foundation-white-normal'
            )}
          >
            <span className='sr-only'>Online or Offline</span>
          </span>
        </div>
        <div className='max-w-[116px]'>
          {userName}
          <span className='text-sm text-[#545454] dark:text-gray-400'>
            {truncEmail}
          </span>
        </div>
      </div>
      <button
        type='button'
        className='absolute top-4 right-3 hover:scale-105 transition-all duration-500 ease-in-out'
        onClick={logout}
      >
        <Icon
          icon='hugeicons:logout-05'
          className='w-6 h-6 dark:text-white text-[#474C59]'
        />
      </button>
    </section>
  );
};

export default SidebarProfile;
