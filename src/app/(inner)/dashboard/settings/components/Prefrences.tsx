import SelectField from '@/components/hook-form/SelectField';
import { useCountries } from '@/hooks/useCountries';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { useTheme } from '@/contexts/ThemeContext';

const Prefrences = () => {
  const { data: countries } = useCountries();
  const { setTheme } = useTheme();
  const languages = [
    {
      label: 'English (US)',
      value: 'English (US)',
      icon: 'emojione:flag-for-us-outlying-islands',
    },

    {
      label: 'English (UK)',
      value: 'English (UK)',
      icon: 'circle-flags:uk',
    },
  ];

  const timeZones = countries?.map((country) => ({
    label: country.timeZones,
    value: country.timeZones,
    icon: 'tdesign:time',
  }));

  const themes = [
    {
      label: 'System preference',
      value: 'system',
      thumbnail: '/theme-system.jpg',
    },
    { label: 'Light', value: 'light', thumbnail: '/theme-light.jpg' },
    { label: 'Dark', value: 'dark', thumbnail: '/theme-dark.jpg' },
  ];

  const {
    control,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  //Persists data on reload
  useFormPersist('profileForm', {
    watch,
    setValue,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  });

  return (
    <section className='text-foundation-grey-normal dark:text-white'>
      <h4 className='font-bold text-2xl'>General</h4>
      <form>
        <section className='grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg-grid-cols-2 gap-x-32 gap-y-4 my-5'>
          <div className='flex-1'>
            <h5 className='font-semibold text-[17px]'>Language</h5>
            <label
              htmlFor='language'
              className='text-sm text-foundation-white-dark-active dark:text-white'
            >
              Select your preferred display language for the platform
            </label>
          </div>
          <div className='flex-1'>
            <SelectField
              registration={{ ...register('language') }}
              control={control}
              options={languages}
              // errorMessage={errors.language?.message}
              icon
              hasError={errors.language}
              isRequired
            />
          </div>
        </section>
        <section className='grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg-grid-cols-2 gap-x-32 gap-y-4 my-16'>
          <div className='flex-1'>
            <h5 className='font-semibold text-[17px]'>Time zone</h5>
            <label
              htmlFor='timeZone'
              className='text-sm text-foundation-white-dark-active dark:text-white'
            >
              Set your time zone for accurate timestamps across TestAmplify
            </label>
          </div>
          <div className='flex-1'>
            <SelectField
              registration={{ ...register('timeZone') }}
              control={control}
              options={timeZones}
              // errorMessage={errors.timeZone?.message}
              icon
              hasError={errors.timeZone}
              isRequired
            />
          </div>
        </section>
      </form>
      <section className='grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg-grid-cols-2 lg:grid-cols-2 gap-x-32 '>
        <div className='flex-1 flex-grow mb-3'>
          <h5 className='font-semibold text-[17px]'>Theme</h5>
          <p className='text-sm text-foundation-white-dark-active dark:text-white'>
            Switch between Light and Dark modes for a customized visual
            experience
          </p>
        </div>
        <div className='flex-1 flex sm:flex-row flex-col gap-12'>
          {themes.map((item) => (
            <div
              key={item.label}
              className='cursor-pointer'
              onClick={() =>
                setTheme(item.value as 'light' | 'dark' | 'system')
              }
            >
              <Image
                src={item.thumbnail}
                alt={`${item.label} theme`}
                width={107.88}
                height={86.13}
                className='sm:w-[107.88px] w-full h-auto rounded-lg overflow-hidden'
              />
              <span className='font-bold text-[13px]'>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Prefrences;
