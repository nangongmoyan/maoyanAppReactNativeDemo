import ngQueryClient from './queryClient';

export {
  QueryClientProvider as NGQueryClientProvider,
  useInfiniteQuery as useNGInfiniteQuery,
  useMutation as useNGMutation,
  useQuery as useNGQuery
} from '@tanstack/react-query';
export * from './util';

export { ngQueryClient };
