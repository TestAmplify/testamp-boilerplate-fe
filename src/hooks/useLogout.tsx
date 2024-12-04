'use client';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useUserInfoIdb } from './useUserInfoIdb';

const useLogout = () => {
  const router = useRouter();
  const { updateUserInfo } = useUserInfoIdb();

  const logout = () => {
    // Clear the user's authentication data
    cookies.remove('accessToken');
    localStorage.removeItem('useremail');

    // Clear user data from IndexedDB or app state
    updateUserInfo({
      _id: '',
      email: '',
      isEmailVerified: false,
      verificationToken: null,
      firstname: '',
      lastname: '',
      role: '',
      phone: '',
      country: '',
      state: '',
      homeAddress: '',
      postalCode: '',
      profileImage: '',
    }); // Assuming `updateUserInfo` resets user info

    // Redirect the user to the login page
    router.push('/login');
  };

  return logout;
};

export default useLogout;
