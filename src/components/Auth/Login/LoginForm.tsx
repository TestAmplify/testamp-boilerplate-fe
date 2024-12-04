import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { LockIcon, EyeOffIcon, EyeIcon } from 'lucide-react';
import { buttonVariants } from '../../ui/button';
import { Mail } from 'lucide-react';
import * as Yup from 'yup';
import { fieldVariants } from '../Signup/SignupForm';
import useLogin from '@/hooks/useLogin';
import { ClipLoader } from 'react-spinners';

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useLogin();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('email is required')
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        'email is invalid'
      ),
    password: Yup.string().required('password is required'),
  });
  const handleSubmit = (values: LoginFormValues) => {
    login(values);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ errors, touched }) => (
        <Form className='space-y-6 mt-8'>
          <div>
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
                type='email'
                placeholder={'you@example.com'}
              />
            </div>
            <ErrorMessage
              name='email'
              component={'p'}
              className='text-red-500 text-sm mt-1'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-xs md:text-sm font-medium text-[#142E84] dark:text-white'
            >
              Password
            </label>
            <div className='mt-1 relative rounded-md shadow-sm'>
              {/* Lock Icon */}
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                <LockIcon
                  className='h-5 w-5 text-[#142E84]'
                  aria-hidden='true'
                />
              </div>

              {/* Eye Icon */}
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

              {/* Label */}

              {/* Input Field */}
              <Field
                id='password'
                name='password'
                className={fieldVariants({
                  error: Boolean(errors.password && touched.password),
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
              />
            </div>
            {/* Error Message */}
            <ErrorMessage
              name='password'
              component='p'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className={`w-full rounded-[5rem] font-semibold ${buttonVariants({
              variant: loading ? 'disabled' : 'primary',
              size: 'lg',
            })}`}
          >
            <span>{loading ? <ClipLoader size={25} /> : 'Login'}</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
