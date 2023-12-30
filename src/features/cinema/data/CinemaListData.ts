import { useNGInfiniteQuery } from '@utils/query';
import { cinemaApi } from 'maoyan-request';
import { cinemaKeys } from './queryKeys';

async function fetchData() {
  const rlt = await cinemaApi.moreCinemas({});

  return rlt.cinemas;
}

export const useCinemaList = () => {
  return useNGInfiniteQuery(cinemaKeys.cinemaList(), ({ pageParam }) => fetchData(), {
    dataKey: 'cinemas',
  });
  // return useInfiniteQuery({
  //   queryKey: cinemaKeys.cinemaList(),
  //   queryFn: ({ pageParam }) => fetchData(),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => lastPage?.nextCursor,
  //   getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) => firstPage?.prevCursor,
  // });
};
