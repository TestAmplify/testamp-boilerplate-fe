import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { $http } from '../lib/http';

// T: The type of the response data that the mutation returns.
// D: The type of the data been sent in the request (e.g., the body of the POST, PUT, or DELETE request).
export const useMutationQuery = <T, D = unknown>(
  method: 'post' | 'put' | 'delete', // Supported HTTP methods
  endpoint: string, // The API endpoint
  options?: UseMutationOptions<T, Error, D>
) => {
  return useMutation<T, Error, D>({
    mutationFn:
      options?.mutationFn ||
      (async (data: D) => {
        // The reusable mutation function
        const response = await $http.request({
          url: endpoint,
          method, // HTTP method (post, put, delete)
          data, // Payload for POST/PUT requests
        });
        return response.data; // Return response data
      }),
    ...options, // Spread additional options (e.g., onSuccess, onError)
  });
};
