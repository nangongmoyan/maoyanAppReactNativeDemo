import { QueryFunction, QueryKey, UseInfiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { flattenData } from './util';

interface Options {
  dataKey?: string;
}

export function useNGInfiniteQuery<TData = any, TError = unknown, TQueryKey extends QueryKey = QueryKey>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<unknown, TQueryKey, unknown>,
  options: Omit<UseInfiniteQueryOptions<unknown, TError, TData, unknown, TQueryKey>, 'queryKey' | 'queryFn' | 'initialPageParam'> & Options,
) {
  const { dataKey, getNextPageParam, ...restOptions } = options;

  const { data, ...rest } = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam: getNextPageParam ?? defaultGetNextPageParam,
    ...restOptions,
  });

  const list = dataKey ? flattenData(data, dataKey) : [];
  // console.log({ pages: data?.pages?.[0] });
  return {
    data,
    ...rest,
    listProps: {
      data: list,
      onEndReached: rest.fetchNextPage,
      loadingMore: rest.isFetchingNextPage,
      isEnd: !!list?.length && !rest.hasNextPage,
    },
  };
}

const defaultGetNextPageParam = (lastPage: { paging }, _: any) => {
  if (!lastPage.paging) {
    return 1;
  } else if (lastPage.paging?.hasMore) {
    return lastPage.paging?.offset + 1;
  } else {
    return undefined;
  }
};
