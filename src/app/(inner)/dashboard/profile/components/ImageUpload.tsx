import { InputField } from '@/components/hook-form/InputField';
import { ProfileUpdate } from '@/types';
import React, { useState } from 'react';
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import clsx from 'clsx';
import ButtonWhite from '../../components/ButtonWhite';
import { useUserInfoIdb } from '@/hooks/useUserInfoIdb';
import { handleRemoveImage } from '../helperFunctions';

interface ImageProps {
  control: Control<ProfileUpdate>;
  register: UseFormRegister<ProfileUpdate>;
  errors: FieldErrors<ProfileUpdate>;
  previewImage: string | null;
  setValue: UseFormSetValue<ProfileUpdate>;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUpload = ({
  control,
  register,
  errors,
  setValue,
  previewImage,
  setPreviewImage,
}: ImageProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isOnline] = useState(true);
  const { userInfo } = useUserInfoIdb();
  const initials =
    userInfo?.firstname && userInfo.lastname
      ? `${userInfo?.firstname[0]}${userInfo?.lastname[0]}`
      : '';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Clean up the previous image preview URL if it exists
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }

      // Set the new image and update state
      const newPreviewURL = URL.createObjectURL(file);
      setValue('profileImage', file, { shouldValidate: true });
      setPreviewImage(newPreviewURL);
      setFile(file);
    }
  };

  const handleImageOnBlur = () => {
    setValue('profileImage', file);
  };

  // const handleRemoveImage = () => {
  //   if (previewImage) {
  //     URL.revokeObjectURL(previewImage);
  //   }
  //   setPreviewImage(null);
  //   setValue("profileImage", null, { shouldValidate: true });
  // };

  return (
    <div className='flex items-end flex-wrap gap-6 my-6'>
      <div className='relative'>
        {previewImage ? (
          <Image
            src={previewImage || '/profile.jpg'}
            alt='Profile image'
            width={113}
            height={113}
            className='w-[113px] h-[113px] rounded-full'
          />
        ) : (
          <span className='flex justify-center items-center w-[113px] h-[113px] rounded-full bg-foundation-primary-normal text-white font-bold text-4xl'>
            {initials.toUpperCase()}
            <span className='sr-only'>Initials</span>
          </span>
        )}
        <span
          className={clsx(
            'absolute right-2 top-[84px] w-9 h-9 border-[6px] border-white rounded-full',
            isOnline ? 'bg-dashboard-green' : 'bg-foundation-white-normal'
          )}
        >
          <span className='sr-only'>Online or Offline</span>
        </span>
      </div>
      <div className='flex flex-wrap gap-4 -!mt-2'>
        <div className='flex-grow'>
          <label
            htmlFor='profileImage'
            className='flex justify-center items-center gap-2 px-10 rounded-lg h-[50px] w-full py-2 bg-foundation-primary-normal dark:bg-[#1E40AF] hover:bg-opacity-90 dark:hover:bg-opacity-90 font-bold text-white cursor-pointer'
          >
            {' '}
            <Icon icon='icomoon-free:upload' className='w-6 h-6 shrink-0' />
            Upload
          </label>
          <InputField
            type='file'
            control={control}
            registration={{ ...register('profileImage') }}
            hasError={errors.profileImage}
            errorMessage={errors?.profileImage?.message}
            handleImageChange={handleImageChange}
            handleImageOnBlur={handleImageOnBlur}
            accept={'image/*'}
            isRequired
            className='sr-only'
          />
        </div>
        <ButtonWhite
          type='button'
          className='flex-grow xs:w-[152px]'
          onClick={() =>
            handleRemoveImage(previewImage, setPreviewImage, setValue)
          }
        >
          Remove
        </ButtonWhite>
      </div>

      <p className='self-end text-foundation-white-dark-active dark:text-white md:max-w-[313px]'>
        Upload images including SVG, PNG, JPG or GIF (max 25mb)
      </p>
    </div>
  );
};

export default ImageUpload;
