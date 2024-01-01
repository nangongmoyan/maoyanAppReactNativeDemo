import { useCityStore } from '@store/city';
import { convertInfiniteQueryRlt, defaultInfiniteQueryOptions, useNGInfiniteQuery } from '@utils/query';
import { MoreCinemasData, cinemaApi } from 'maoyan-request';
import { CinemaBaseItem, MaoYanLocation } from 'maoyan-request/dist/types';
import { cinemaKeys } from './queryKeys';

async function fetchData(offset: number, position: MaoYanLocation) {
  console.log({ offset });
  const rlt = await cinemaApi.moreCinemas({
    offset,
    limit: 20,
    lat: 22.5625137,
    lng: 113.8891763,
    // ...position,
  });

  return rlt.cinemas;
}

export const useCinemaList = () => {
  const { position } = useCityStore((state) => state.city);
  const rlt = useNGInfiniteQuery({
    queryKey: cinemaKeys.cinemaList(position),
    queryFn: ({ pageParam }) => fetchData(pageParam, position),
    ...defaultInfiniteQueryOptions(),
  });

  return convertInfiniteQueryRlt<CinemaBaseItem, MoreCinemasData>(rlt, 'cinemas');
};
