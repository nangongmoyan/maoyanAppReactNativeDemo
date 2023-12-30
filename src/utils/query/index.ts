import ngQueryClient from './queryClient';

export { QueryClientProvider as NGQueryClientProvider, useMutation as useNGMutation, useQuery as useNGQuery } from '@tanstack/react-query';

export * from './useNGInfiniteQuery';

export { ngQueryClient };
