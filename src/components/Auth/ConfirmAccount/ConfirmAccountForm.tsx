import { Formik, Field, Form } from 'formik';
import { fieldVariants } from '../Signup/SignupForm';
import useConfirmAccount from '@/hooks/useConfirmAccount';
import { buttonVariants } from '@/components/ui/button';
import { ClipLoader } from 'react-spinners';

import React from 'react';

const ConfirmAccountForm: React.FC = () => {
  const { confirmAccount, loading } = useConfirmAccount();
  const handleSubmit = async (values: { otp: string }) => {
    confirmAccount(values);
  };

  return (
    <Formik initialValues={{ otp: '' }} onSubmit={handleSubmit}>
      {() => (
        <Form className='space-y-6 mt-8'>
          <div>
            <label
              htmlFor='otp-input'
              className='block text-xs md:text-sm font-medium text-[#142E84] dark:text-white  '
            >
              Otp
            </label>
            <Field
              name='otp'
              id='otp-input'
              className={`pl-[0.5rem!important] ${fieldVariants()}`}
              placeholder='Enter otp'
            ></Field>
          </div>

          <button
            type='submit'
            disabled={loading}
            className={`w-full rounded-[5rem] ${buttonVariants({
              variant: loading ? 'disabled' : 'primary',
              size: 'lg',
            })}`}
          >
            <span>{loading ? <ClipLoader size={25} /> : 'Continue'}</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmAccountForm;
