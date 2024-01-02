import { operationCurrentCity } from '@utils/config';
import { MaoYanLocation } from 'maoyan-request/dist/types';

const defaultKey = 'cinema' as const;

const { getCurrentCity } = operationCurrentCity();

export const cinemaKeys = {
  /** 搜索电影院列表 */
  cinemaList: (position: MaoYanLocation) => [defaultKey, 'cinemaList', position, getCurrentCity()] as const,
};
