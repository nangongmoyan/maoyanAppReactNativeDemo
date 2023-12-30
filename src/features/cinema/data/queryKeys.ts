const defaultKey = 'cinema' as const;
export const cinemaKeys = {
  /** 搜索电影院列表 */
  cinemaList: () => [defaultKey, 'cinemaList'] as const,
};
