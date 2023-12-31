import { MaoYanRouteName } from '@enum/routeName';
import { lazy } from 'react';
import BottomTabScreen from './tab/BottomTab';

interface StackValue {
  path?: string;
  headerShown?: boolean;
  name: MaoYanRouteName;
  component: React.LazyExoticComponent<React.FC<any>> | React.FC<any>;
}

const Detail = lazy(() => import('@pages/detail/Detail'));
const City = lazy(() => import('@pages/city/City'));

const stacks: { [key in string]: StackValue } = {
  BottomTab: {
    name: MaoYanRouteName.BottomTab,
    component: BottomTabScreen,
    path: '',
    headerShown: false,
  },
  Detail: {
    name: MaoYanRouteName.Detail,
    component: Detail,
    path: '',
    // headerShown: false,
  },
  City: {
    name: MaoYanRouteName.City,
    component: City,
    path: '',
    // headerShown: false,
  },
};

const routerStacks = Object.values(stacks);

export default routerStacks;
