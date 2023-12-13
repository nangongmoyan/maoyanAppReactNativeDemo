import { QueryClient } from '@tanstack/react-query';

const ngQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 0,
      retry: 0,
      // 缓存1分钟
      // cacheTime: 1 * 60 * 1000,
      staleTime: 1 * 60 * 1000,
    },
  },
});

export default ngQueryClient;
