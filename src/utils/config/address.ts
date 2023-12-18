import city from '../../city.json';
export const getAddress = () => {
  const ranks = Object.keys(city as MaoYanCity.OriginCity) as MaoYanCity.Rank[];
  const citys = ranks.map((rank) => {
    return {
      title: rank,
      data: city[rank].sort((a, b) => a.py.localeCompare(b.py, 'zh-CN')),
    };
  });

  return { citys, cityKeys: ranks };
};
