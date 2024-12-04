import { SignupFormValues } from '@/components/Auth/Signup/SignupForm';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutationQuery } from './useMutationQuery';

interface SignupResponse {
  message: string;
}

const useSignup = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutationQuery<
    SignupResponse,
    SignupFormValues
  >('post', '/api/auth/signup', {
    onSuccess: (result, variables) => {
      toast.success(result.message);
      localStorage.setItem('useremail', variables.email);
      router.push('/confirm-account');
    },
    // onError: (error) => {
    //   console.error('An error occurred:', error.message);
    //   toast.error(error.message || 'An unexpected error occurred.');
    // },
  });

  const signup = (values: SignupFormValues) => {
    mutate(values);
  };

  return { loading: isPending, signup };
};

export default useSignup;
