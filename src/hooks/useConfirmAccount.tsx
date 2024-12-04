import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutationQuery } from './useMutationQuery';

interface ConfirmAccountParams {
  otp: string;
  email?: string;
}

interface ConfirmAccountResponse {
  message: string;
}

const useConfirmAccount = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutationQuery<
    ConfirmAccountResponse,
    ConfirmAccountParams
  >('post', '/api/auth/confirm-account', {
    onMutate: ({ email }) => {
      if (!email && !localStorage.getItem('useremail')) {
        throw new Error('Email is missing. Please try again.');
      }
    },
    onSuccess: (result) => {
      toast.success(result.message);
      setTimeout(() => {
        router.push('/success');
      }, 1000);
    },
    onError: (error) => {
      console.error('An error occurred:', error);
      toast.error(error.message || 'An unexpected error occurred.');
    },
  });

  const confirmAccount = ({ otp }: { otp: string }) => {
    const email = localStorage.getItem('useremail');
    mutate({ otp, email: email || undefined });
  };

  return { loading: isPending, confirmAccount };
};

export default useConfirmAccount;
