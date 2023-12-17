import { MaoYanRoute } from 'myTypes/route';
import { ColorValue, StatusBarStyle } from 'react-native';

export const routeStatus: {
  [key in MaoYanRoute.RouteStatusKey]?: {
    barStyle?: StatusBarStyle;
    backgroundColor?: ColorValue;
  };
} = {
  Home: {
    barStyle: 'dark-content',
    backgroundColor: '',
  },
  Cinema: {
    barStyle: 'dark-content',
    backgroundColor: '',
  },
  Detail: {
    barStyle: 'dark-content',
    backgroundColor: '',
  },
};
