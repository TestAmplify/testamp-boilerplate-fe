/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { QueryClient } from '@tanstack/react-query';

interface ErrorResponse {
  status: number;
  error?: string; // Optional string for general error message
  message?: string; // Optional string for a detailed message
  data?: {
    code?: string; // Error code
    errors?: any; // Validation or other error data
  };
}

// Create a new QueryClient instance for React Query
export const queryClient = new QueryClient();

// Create the base HTTP client using axios
const $http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Enable retries for the axios client
axiosRetry($http, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

// Handle errors in the response
const handleErrorResponse = (err: AxiosError) => {
  if (typeof window === 'undefined') {
    return;
  }

  const DEFAULT_NETWORK_ERROR_MESSAGE =
    "We couldn't complete your request. Please try again or check your internet connection.";

  // retrieve error message from response
  const errorResponse = err.response?.data as ErrorResponse;

  if (!errorResponse) {
    // Handle missing response data (fallback case)
    toast.error(DEFAULT_NETWORK_ERROR_MESSAGE);
    return Promise.reject(err);
  }

  const isValidationError = String(errorResponse?.error)
    .toLowerCase()
    .includes('validation err');
  const errorCode = errorResponse?.data?.code;

  switch (errorResponse?.status) {
    case 500:
      toast.error(
        errorResponse?.message || 'Server error, please try again later.'
      );
      break;
    case 400:
    case 422:
      if (isValidationError && errorCode && errorCode?.length > 0) {
        toast.error(errorCode);
      } else if (typeof errorResponse?.error === 'string') {
        toast.error(errorResponse?.error);
      } else {
        toast.error('Bad request or validation error.');
      }
      break;
    case 401:
      toast.error('You are not authorized. Please log in again.');
      break;
    case 403:
      toast.error(
        'Forbidden. You do not have permission to perform this action.'
      );
      break;
    case 404:
      toast.error('Resource not found.');
      break;
    default:
      toast.error(DEFAULT_NETWORK_ERROR_MESSAGE);
      break;
  }

  // Ensure the error is always propagated
  return Promise.reject(err);
};

// Handle 401 errors by logging the user out
const logout = async () => {
  Cookies.remove('accessToken');
  queryClient.clear(); // Clear any cached data from React Query
  window.location.href = `${window.location.origin}/login`; // Redirect to login page
};

// Request interceptor to add authorization header
$http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response interceptor to handle errors
$http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      await logout();
    }
    handleErrorResponse(error); // Handle error using the handleErrors function
    return Promise.reject(error);
  }
);

// Export the HTTP client
export { $http };
