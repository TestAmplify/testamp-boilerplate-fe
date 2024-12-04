import { useQuery } from '@tanstack/react-query';
import { $http } from '../lib/http';

// Reusable GET request hook with $http client
export const useGetQuery = <T,>(key: string, endpoint: string) => {
  return useQuery<T>({
    queryKey: [key], // Query key
    queryFn: async () => {
      const response = await $http.get(endpoint); // Fetch data
      return response.data;
    },
  });
};
