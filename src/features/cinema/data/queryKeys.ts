import { MaoYanLocation } from 'maoyan-request/dist/types';

const defaultKey = 'cinema' as const;
export const cinemaKeys = {
  /** 搜索电影院列表 */
  cinemaList: (position: MaoYanLocation) => [defaultKey, 'cinemaList', position] as const,
};
