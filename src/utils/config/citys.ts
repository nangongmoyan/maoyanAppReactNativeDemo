import { CityRank, PopularCityName } from '@const/city';
import { STORAGE_KEY } from '@const/storage';
import { MaoYanCity } from '@myTypes/city';
import { mmkvStorage } from '@utils/mmkv';
import city from '../../city.json';

/**
 *
 * @returns
 */

export const getCitys = (): MaoYanCity.SectionCityItem[] => {
  const cityStorage = mmkvStorage.getString(STORAGE_KEY.CITYS);
  if (!cityStorage) {
    let [hot, ...ranks] = CityRank;
    const popularCitys: MaoYanCity.CityItem[] = [];

    const citys = ranks.map((rank) => {
      const result = {
        title: rank,
        data: city[rank].sort((a, b) => a.py.localeCompare(b.py, 'zh-CN')) as MaoYanCity.CityItem[],
      };

      PopularCityName.forEach((element) => {
        if (element.title === rank) {
          const value = result.data.find((v) => v.nm === element.nm);
          value && popularCitys.push(value);
        }
      });

      return result;
    }) as MaoYanCity.SectionCityItem[];

    const rltCitys = [{ title: hot, data: popularCitys }, ...citys];
    mmkvStorage.set(STORAGE_KEY.CITYS, JSON.stringify(rltCitys));

    return rltCitys;
  }

  return JSON.parse(cityStorage);
};

/**
 *
 * @returns
 */
export const getPopularCitys = () => {
  const popularStorage = mmkvStorage.getString(STORAGE_KEY.POPULAR_CITYS);
  if (!popularStorage) {
    const cityStorage = getCitys();
    const popularCitys: MaoYanCity.CityItem[] = [];

    PopularCityName.forEach((element) => {
      const item = cityStorage.find((v) => v.title === element.title);
      if (item) {
        const value = item.data.find((v) => v.nm === element.nm);
        value && popularCitys.push(value);
      }
    });

    mmkvStorage.set(STORAGE_KEY.POPULAR_CITYS, JSON.stringify(popularCitys));

    return popularCitys;
  }

  return JSON.parse(popularStorage);
};
