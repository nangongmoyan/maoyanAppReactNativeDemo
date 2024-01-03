import { MaoYanCity } from '@myTypes/city';
import { operationCurrentCity, operationHistoryCitys } from '@utils/config';
import { createStore } from '@utils/store';
import { uniqBy } from 'lodash';
import { maoYan } from 'maoyan-request';
import { MaoYanLocation } from 'maoyan-request/dist/types';

interface PositionStore {
  location: MaoYanLocation;
  city: MaoYanCity.CityItem;
  historyCitys: MaoYanCity.CityItem[];
  setLocation: (data: MaoYanLocation) => void;
  setCity: (data: MaoYanCity.CityItem) => void;
  setHistoryCitys: (data: MaoYanCity.CityItem) => void;
}

const { getCurrentCity, setCurrentCity } = operationCurrentCity();
const { getHistoryCitys, setHistoryCitys } = operationHistoryCitys();

export const usePositionStore = createStore<PositionStore>((set) => {
  return {
    location: {
      lat: 39.908546,
      lng: 116.397501,
    },
    city: getCurrentCity(),
    historyCitys: getHistoryCitys(),

    setLocation: (data: MaoYanLocation) => set((_) => ({ location: data })),
    setCity: (data) =>
      set((state) => {
        setCurrentCity(data);
        maoYan.setCityId(data.id.toString());
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
