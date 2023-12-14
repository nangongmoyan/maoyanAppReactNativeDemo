import { MaoYanRouteName } from '@const/routeNameEnum';
import BottomTabScreen from './tab/BottomTab';

interface StackValue {
  path?: string;
  headerShown?: boolean;
  name: MaoYanRouteName;
  component: React.LazyExoticComponent<React.FC<any>> | React.FC<any>;
}

const stacks: { [key in string]: StackValue } = {
  BottomTab: {
    name: MaoYanRouteName.BottomTab,
    component: BottomTabScreen,
    path: '',
    headerShown: false,
  },
};

const routerStacks = Object.values(stacks);

export default routerStacks;
