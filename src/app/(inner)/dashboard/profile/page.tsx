'use client';
// External libraries
import { Icon } from '@iconify/react';
import { useMutation } from '@tanstack/react-query';

// Custom hooks and utilities
import { useCountries } from '@/hooks/useCountries';
import { $http } from '@/lib/http';
import { toast } from 'react-toastify';

// Components
import Loader from '../components/Loader';

// Types
import { OptionType, UserInfo } from '@/types';
import { useUserInfoIdb } from '@/hooks/useUserInfoIdb';

//Functions
import ProfileForm from './components/ProfileForm';

const updateProfile = async (updatedData: FormData): Promise<UserInfo> => {
  const response = await $http.post('/auth/update-profile', updatedData);
  return response?.data;
};

const Profile = () => {
  const { userInfo, isLoading, updateUserInfo } = useUserInfoIdb();
  const { data: countries } = useCountries();

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: async (data) => {
      await updateUserInfo(data);
      toast.success('Profile updated successfully');
    },
  });

  if (isLoading) return <Loader title='Profile' />;

  return (
    <section className='md:px-10 px-5 py-6'>
      <section className=' text-foundation-grey-normal dark:text-white'>
        <h2 className='font-semibold text-[32px]'>Profile</h2>
        <p className='flex items-center gap-2 px-5 py-3 my-6 font-semibold rounded-[6px] text-foundation-grey-normal dark:text-white bg-[#f7f7f7] dark:bg-gray-800 border border-foundation-grey-newLight dark:border-gray-700 drop-shadow-sm dark:drop-shadow-lg'>
          <Icon
            icon='heroicons:exclamation-circle'
            className='w-6 h-6 shrink-0'
          />
          Changes you make in your profile will reflect across all workspaces.
        </p>
      </section>
      <ProfileForm
        userInfo={userInfo}
        mutation={mutation}
        countries={countries as OptionType[]}
      />
    </section>
  );
};

export default Profile;
