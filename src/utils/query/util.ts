import { NetworkStatus } from '@enum/request';
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
  /** 用于传入 NGFlatList 或者NGKFlashList, 显示 ui */
  listProps: {
    data: TData[] | undefined;
    isEnd: boolean;
    loadingMore: boolean;
    maoyanStatus: NetworkStatus;
    // onRefresh: () => void;
    onEndReached: () => Promise<any>;
  };
}

export const convertInfiniteQueryRlt = <TData = any, TQueryFnData = any>(
  value: UseInfiniteQueryResult<InfiniteData<TQueryFnData | undefined, unknown>, Error>,
  dataKey: string,
  convertExtraData?: (item: TData) => TData,
): UseInfiniteQueryResult<InfiniteData<TQueryFnData | undefined, unknown>, Error> & UseNGInfiniteQueryResult<TData> => {
  let list: TData[] = [];
  const { data } = value;

  let maoyanStatus = NetworkStatus.InitLoading;

  if (dataKey) {
    list =
      data?.pages.reduce<TData[]>((accumulator, page) => {
        const groups = (get(page, dataKey) ?? []) as TData[];
        const items = groups.reduce<TData[]>((all, group) => all.concat(convertExtraData ? convertExtraData(group) : group), []);
        return accumulator.concat(items);
      }, []) ?? [];
  }

  if (value.isLoading) {
    maoyanStatus = NetworkStatus.InitLoading;
  } else if (value.isFetchingNextPage) {
    maoyanStatus = NetworkStatus.LoadingMore;
  } else if (value.isRefetching) {
    maoyanStatus = NetworkStatus.Refreshing;
  } else {
    maoyanStatus = NetworkStatus.Success;
  }

  return {
    ...value,
    listProps: {
      data: list,
      maoyanStatus,
      onEndReached: value.fetchNextPage,
      loadingMore: value.isFetchingNextPage,
      isEnd: !!list?.length && !value.hasNextPage,
    },
  };
};
