import { usePositionStore } from '@store/position';
import { convertPrice } from '@utils/price';
import { convertInfiniteQueryRlt, defaultInfiniteQueryOptions, useNGInfiniteQuery } from '@utils/query';
import { MoreCinemasData, cinemaApi } from 'maoyan-request';
import { CinemaBaseItem, MaoYanLocation } from 'maoyan-request/dist/types';
import { LIST_ITEM_FIRST, LIST_ITEM_FOUR, LIST_ITEM_SECOND, LIST_ITEM_THIRD, LIST_ITEM_WIDTH } from '../const';
import { convertPromotion, convertTags } from '../utils';
import { cinemaKeys } from './queryKeys';

async function fetchData(offset: number, position: MaoYanLocation) {
  const rlt = await cinemaApi.moreCinemas({
    offset,
    limit: 50,
    ...position,
  });

  return rlt.cinemas;
}

export const useCinemaList = () => {
  const { city, location } = usePositionStore();
  const rlt = useNGInfiniteQuery({
    queryKey: cinemaKeys.cinemaList(location, city),
    queryFn: ({ pageParam }) => fetchData(pageParam, location),
    ...defaultInfiniteQueryOptions(),
  });

  return convertInfiniteQueryRlt<CinemaBaseItem, MoreCinemasData>(rlt, 'cinemas', convertExtraData);
};

const convertExtraData = (item: CinemaBaseItem) => {
  let itemHeight = 32 + LIST_ITEM_FIRST + LIST_ITEM_SECOND + LIST_ITEM_THIRD;
  const promotions = convertPromotion(item.promotion);

  itemHeight += promotions.length * LIST_ITEM_FOUR;

  return {
    ...item,
    promotions,
    type: 0,
    height: itemHeight,
    width: LIST_ITEM_WIDTH,
    tags: convertTags(item.tag),
    price: convertPrice(item.sellPrice),
  };
};
