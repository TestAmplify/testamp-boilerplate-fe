import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { User, Phone, Mail, LockIcon, EyeOffIcon, EyeIcon } from 'lucide-react';
import { cva } from 'class-variance-authority';
import * as Yup from 'yup';
import { buttonVariants } from '../../ui/button';
import useSignup from '@/hooks/useSignup';
import { ClipLoader } from 'react-spinners';

export interface SignupFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
  phone: Yup.string()
    .required('phone is required')
    .matches(/^\+?\d{4,15}$/, 'phone number is invalid'),

  email: Yup.string()
    .required('email is required')
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'email is invalid'
    ),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^><&*()\[\]{}_\-+])[A-Za-z\d!@#$%^><&*()\[\]{}_\-+]{8,32}$/,
      'password must be between 8 and 32 characters, one uppercase, one lowercase, one number and one special case character'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export const fieldVariants = cva(
  'block w-full pl-10  pr-3 py-1 md:py-3 box-border h-[2.5rem] md:h-[3rem] lg:h-[4rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm dark:text-black',
  {
    variants: {
      error: {
        true: 'border-red-500 focus:ring-red-500 focus:border-red-500',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfrimPassword] = useState(false);
  const { signup, loading } = useSignup();

  const handleSubmit = (values: SignupFormValues) => {
    signup(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur
      >
        {({ errors, touched }) => (
          <Form
            className='space-y-4 mt-8 sign_up_form'
            id='sign-up-form'
            name='sign-up'
          >
            {/* First Name Field */}
            <div className='flex flex-col md:flex-row gap-4 w-full'>
              <div className='md:w-1/2'>
                <label
                  htmlFor='firstName'
                  className='block text-xs md:text-sm font-medium text-[#142E84] dark:text-white  '
                >
                  First Name
                </label>
                <div className='mt-1 relative rounded-md shadow-sm '>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <User
                      className='h-5 w-5 text-[#142E84]'
                      aria-hidden='true'
                    />
                  </div>
                  <Field
                    name='firstName'
                    id='first-name'
                    className={fieldVariants({
                      error: Boolean(errors.firstName && touched.firstName),
                    })}
                    placeholder='Enter your first name'
                  />
                </div>
                <ErrorMessage
                  name='firstName'
                  component={'p'}
                  className='text-red-500 text-sm mt-1'
                />
              </div>

              {/* Last Name Field */}
              <div className='md:w-1/2'>
                <label
                  htmlFor='lastName'
                  className='block text-xs md:text-sm font-medium text-[#142E84] dark:text-white'
                >
                  Last Name
                </label>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <User
                      className='h-5 w-5 text-[#142E84]'
                      aria-hidden='true'
                    />
                  </div>
                  <Field
                    name='lastName'
                    id='lastName'
                    className={fieldVariants({
                      error: Boolean(errors.lastName && touched.lastName),
                    })}
                    placeholder='Enter your last name'
                  />
                </div>
                <ErrorMessage
                  name='lastName'
                  component={'p'}
                  className='text-red-500 text-sm mt-1'
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className='mt-3'>
              <label
                htmlFor='phone'
                className='block text-xs md:text-smfont-medium text-[#142E84] dark:text-white'
              >
                Phone
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Phone
                    className='h-5 w-5 text-[#142E84]'
                    aria-hidden='true'
                  />
                </div>
                <Field
                  name='phone'
                  type='text'
                  id='phone'
                  className={fieldVariants({
                    error: Boolean(errors.phone && touched.phone),
                  })}
                  placeholder='08100000000'
                />
              </div>
              <ErrorMessage
                name='phone'
                component={'p'}
                className='text-red-500 text-sm mt-1'
              />
            </div>

            {/* Email Field */}
            <div className='mt-3'>
              <label
                htmlFor='email'
                className='block text-xs md:text-sm font-medium text-[#142E84] dark:text-white'
              >
                Email
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='h-5 w-5 text-[#142E84]' aria-hidden='true' />
                </div>
                <Field
                  id='email'
                  name='email'
                  className={fieldVariants({
                    error: Boolean(errors.email && touched.email),
                  })}
                  placeholder='you@example.com'
                />
              </div>
              <ErrorMessage
                name='email'
                component={'p'}
                className='text-red-500 text-sm mt-1'
              />
            </div>

            {/* Password Field */}
            <div className='mt-3'>
              <label
                htmlFor='password'
                className='block text-xs md:text-sm font-medium text-[#142E84] dark:text-white'
              >
                Password
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <LockIcon
                    className='h-5 w-5 text-[#142E84]'
                    aria-hidden='true'
                  />
                </div>
                <Field
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  className={fieldVariants({
                    error: Boolean(errors.password && touched.password),
                  })}
                  placeholder='Enter your password'
                />
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='focus:outline-none'
                  >
                    {showPassword ? (
                      <EyeOffIcon
                        className='h-5 w-5 text-gray-500'
                        aria-hidden='true'
                      />
                    ) : (
                      <EyeIcon
                        className='h-5 w-5 text-gray-500'
                        aria-hidden='true'
                      />
                    )}
                  </button>
                </div>
              </div>
              <ErrorMessage
                name='password'
                component={'p'}
                className='text-red-500 text-sm mt-1'
              />
            </div>

            {/* Confirm Password Field (if you need it) */}
            <div className='mt-3'>
              <label
                htmlFor='confirmPassword'
                className='block text-xs md:text-sm font-medium text-[#142E84] dark:text-white'
              >
                Confirm Password
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <LockIcon
                    className='h-5 w-5 text-[#142E84]'
                    aria-hidden='true'
                  />
                </div>
                <Field
                  id='confirmPassword'
                  name='confirmPassword'
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={fieldVariants({
                    error: Boolean(
                      errors.confirmPassword && touched.confirmPassword
                    ),
                  })}
                  placeholder='Enter your password'
                />
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                  <button
                    type='button'
                    onClick={() => setShowConfrimPassword(!showConfirmPassword)}
                    className='focus:outline-none'
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon
                        className='h-5 w-5 text-gray-500'
                        aria-hidden='true'
                      />
                    ) : (
                      <EyeIcon
                        className='h-5 w-5 text-gray-500'
                        aria-hidden='true'
                      />
                    )}
                  </button>
                </div>
              </div>
              <ErrorMessage
                name='confirmPassword'
                component={'p'}
                className='text-red-500 text-sm mt-1'
              />
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
    </>
  );
};

export default SignupForm;
