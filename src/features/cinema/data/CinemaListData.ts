import { useLocation } from '@store/location';
import { convertPrice } from '@utils/price';
import { convertInfiniteQueryRlt, defaultInfiniteQueryOptions, useNGInfiniteQuery } from '@utils/query';
import { MoreCinemasData, cinemaApi } from 'maoyan-request';
import { CinemaBaseItem, MaoYanLocation } from 'maoyan-request/dist/types';
import { convertPromotion, convertTags } from '../utils';
import { cinemaKeys } from './queryKeys';

async function fetchData(offset: number, position: MaoYanLocation) {
  const rlt = await cinemaApi.moreCinemas({
    offset,
    limit: 20,
    ...position,
  });

  return rlt.cinemas;
}

export const useCinemaList = () => {
  const { location } = useLocation();
  const rlt = useNGInfiniteQuery({
    queryKey: cinemaKeys.cinemaList(location),
    queryFn: ({ pageParam }) => fetchData(pageParam, location),
    ...defaultInfiniteQueryOptions(),
  });

  return convertInfiniteQueryRlt<CinemaBaseItem, MoreCinemasData>(rlt, 'cinemas', convertExtraData);
};

const convertExtraData = (item: CinemaBaseItem) => {
  return {
    ...item,
    tags: convertTags(item.tag),
    price: convertPrice(item.sellPrice),
    promotions: convertPromotion(item.promotion),
  };
};
