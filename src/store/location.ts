import { createStore } from '@utils/store';
import { MaoYanLocation } from 'maoyan-request/dist/types';

interface LocationStore {
  location: MaoYanLocation;
  setLocation: (data: MaoYanLocation) => void;
}

export const useLocation = createStore<LocationStore>((set) => {
  return {
    location: {
      lat: 39.908546,
      lng: 116.397501,
    },
    setLocation: (data: MaoYanLocation) => set((_) => ({ location: data })),
  };
});
