import { MaoYanCity } from '@myTypes/city';
import { MaoYanLocation } from 'maoyan-request/dist/types';

const defaultKey = 'cinema' as const;

export const cinemaKeys = {
  /** 搜索电影院列表 */
  cinemaList: (position: MaoYanLocation, city: MaoYanCity.CityItem) => [defaultKey, 'cinemaList', position, city] as const,
};
