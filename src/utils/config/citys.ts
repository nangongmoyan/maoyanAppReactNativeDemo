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

    const currentCity = popularCitys.find((popularCity) => popularCity.nm === '北京');
    currentCity && mmkvStorage.set(STORAGE_KEY.CURRENT_CITY, JSON.stringify(currentCity));
    const rltCitys = [{ title: hot, data: popularCitys }, ...citys];

    mmkvStorage.set(STORAGE_KEY.CITYS, JSON.stringify(rltCitys));
    return rltCitys;
  }

  return JSON.parse(cityStorage);
};

export const operationCurrentCity = () => {
  const getCurrentCity = () => {
    const currentCityStore = mmkvStorage.getString(STORAGE_KEY.CURRENT_CITY);
    return currentCityStore
      ? JSON.parse(currentCityStore)
      : {
          id: 1,
          nm: '北京',
          py: 'beijing',
          rank: 'S',
          acronym: 'bj',
          chineseFullnm: '北京市',
          position: {
            lat: 39.908546,
            lng: 116.397501,
          },
        };
  };

  const setCurrentCity = (value: MaoYanCity.CityItem) => {
    value && mmkvStorage.set(STORAGE_KEY.CURRENT_CITY, JSON.stringify(value));
  };

  return { getCurrentCity, setCurrentCity };
};

export const operationHistoryCitys = () => {
  const getHistoryCitys = () => {
    const historyCitysStore = mmkvStorage.getString(STORAGE_KEY.HISTORY_CITYS);
    return historyCitysStore ? JSON.parse(historyCitysStore) : [];
  };

  const setHistoryCitys = (value: MaoYanCity.CityItem[]) => {
    value && mmkvStorage.set(STORAGE_KEY.HISTORY_CITYS, JSON.stringify(value));
  };

  return { getHistoryCitys, setHistoryCitys };
};
