// import { LoginFormValues } from '@/components/Auth/Login/LoginForm';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import cookies from 'js-cookie';
import { useUserInfoIdb } from '@/hooks/useUserInfoIdb';
import { useMutationQuery } from '@/hooks/useMutationQuery';

interface LoginResult {
  data: {
    user: {
      _id: string;
      email: string;
      isEmailVerified: boolean;
      verificationToken: string | null;
      firstname: string;
      lastname: string;
      image: string;
      role: string;
      permissions: string[];
      country: string;
      state: string;
      homeAddress: string;
      postalCode: string;
    };
    access_token: string;
  };
  message: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

const useLogin = () => {
  const { updateUserInfo } = useUserInfoIdb();
  const router = useRouter();

  const { mutate, isPending } = useMutationQuery<LoginResult, LoginFormValues>(
    'post',
    '/api/auth/login',
    {
      onSuccess: (result: LoginResult, variables: LoginFormValues) => {
        console.log('Result', result);
        // Save access token in cookies
        cookies.set('accessToken', result.data.access_token);

        // Update user info in IndexedDB
        updateUserInfo({
          _id: result?.data?.user?._id,
          email: result?.data?.user?.email,
          isEmailVerified: result?.data?.user?.isEmailVerified,
          verificationToken: result?.data?.user?.verificationToken,
          firstname: result?.data?.user?.firstname,
          lastname: result?.data?.user?.lastname,
          role: result?.data?.user?.role,
          phone: '',
        });

        // Save email in localStorage
        localStorage.setItem('useremail', variables.email);

        // Redirect to dashboard and show success message
        router.push('/dashboard/overview');
        toast.success(result.message);
      },
      onError: (error) => {
        toast.error(error.message || 'Login failed. Please try again.');
      },
    }
  );

  const login = (values: LoginFormValues) => {
    mutate(values);
  };

  return { login, loading: isPending };
};

export default useLogin;
