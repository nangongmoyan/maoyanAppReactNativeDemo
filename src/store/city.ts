import { MaoYanCity } from '@myTypes/city';
import { operationCurrentCity, operationHistoryCitys } from '@utils/config';
import { createStore } from '@utils/store';
import { uniqBy } from 'lodash';

interface CityStore {
  city: MaoYanCity.CityItem;
  historyCitys: MaoYanCity.CityItem[];
  setCity: (data: MaoYanCity.CityItem) => void;
  setHistoryCitys: (data: MaoYanCity.CityItem) => void;
}

export const useCityStore = createStore<CityStore>((set) => {
  const { getCurrentCity, setCurrentCity } = operationCurrentCity();
  const { getHistoryCitys, setHistoryCitys } = operationHistoryCitys();
  return {
    city: getCurrentCity(),
    historyCitys: getHistoryCitys(),
    setCity: (data) =>
      set((state) => {
        setCurrentCity(data);
        return { ...state, city: data };
      }),
    setHistoryCitys: (data) =>
      set((state) => {
        const rltHistoryCitys = uniqBy([data, ...state.historyCitys].slice(0, 3), 'id');
        setHistoryCitys(rltHistoryCitys);
        return { ...state, historyCitys: rltHistoryCitys };
      }),
  };
});

export const useSetCity = () => useCityStore((state) => state.setCity);
