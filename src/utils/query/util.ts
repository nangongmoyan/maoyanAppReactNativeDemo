import { GetNextPageParamFunction, InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { get } from 'lodash';

interface DefaultInfiniteQueryOptions<TQueryFnData> {
  initialPageParam: number;
  getNextPageParam: GetNextPageParamFunction<number, TQueryFnData | undefined>;
}
export const defaultInfiniteQueryOptions = <TQueryFnData = any>(): DefaultInfiniteQueryOptions<TQueryFnData> => {
  const getNextPageParam = (lastPage: any) => {
    if (!lastPage?.paging) {
      return 0;
    } else if (lastPage.paging?.hasMore) {
      return lastPage.paging?.offset + lastPage.paging?.limit;
    } else {
      return undefined;
    }
  };
  return {
    initialPageParam: 0,
    getNextPageParam,
  };
};

export interface UseNGInfiniteQueryResult<TData> {
  /** 用于传入 SKFlatList 或者 SKFlashList, 显示 ui */
  listProps: {
    data: TData[] | undefined;
    // isEnd: boolean;
    // loadingMore: boolean;
    // status: NetworkStatus;
    // onRefresh: () => void;
    onEndReached: () => Promise<any>;
  };
}

export const convertInfiniteQueryRlt = <TData = any, TQueryFnData = any>(
  value: UseInfiniteQueryResult<InfiniteData<TQueryFnData | undefined, unknown>, Error>,
  dataKey: string,
): UseInfiniteQueryResult<InfiniteData<TQueryFnData | undefined, unknown>, Error> & UseNGInfiniteQueryResult<TData> => {
  let list: TData[] = [];
  const { data } = value;

  if (dataKey) {
    list =
      data?.pages.reduce<TData[]>((accumulator, page) => {
        const groups = (get(page, dataKey) ?? []) as TData[];
        const items = groups.reduce<TData[]>((all, group) => all.concat(group), []);
        return accumulator.concat(items);
      }, []) ?? [];
  }

  return {
    ...value,
    listProps: {
      data: list,
      onEndReached: value.fetchNextPage,
    },
  };
};
