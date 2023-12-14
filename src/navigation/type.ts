import { BottomTabRouteName, MaoYanRouteName } from '@const/routeNameEnum';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ImageSourcePropType } from 'react-native';

export interface RootBottomTabItem {
  label?: string;
  showLabel?: boolean;
  name: BottomTabRouteName;
  icon: ImageSourcePropType;
  focusIcon: ImageSourcePropType;
  component: React.LazyExoticComponent<React.FC<any>> | React.FC<any>;
}

export type RenderTabBarIcon = (props: { focused: boolean; bottomTab: RootBottomTabItem }) => React.ReactNode;

type RootStackParams = {
  /** 顶部导航 */
  [MaoYanRouteName.BottomTab]: {};
};

/** 堆栈路由参数列表  */
export type RootStackParamList = Omit<Record<MaoYanRouteName, undefined>, keyof RootStackParams> & RootStackParams;

type BottomTabRouteParams = {
  [BottomTabRouteName.Home]: {};
};

/** 底部导航路由参数列表 */
export type BottomTabParamList = Omit<Record<BottomTabRouteName, undefined>, keyof BottomTabRouteParams> &
  BottomTabRouteParams;

/** Navigation */
export type MainNavigationProps<RouteName extends MaoYanRouteName = MaoYanRouteName> = NativeStackNavigationProp<
  RootStackParamList,
  RouteName
>;

/** Route */
export type MainRouteProp<RouteName extends MaoYanRouteName> = RouteProp<RootStackParamList, RouteName>;

/** ScreenProps */
export type MainScreenProps<RouteName extends MaoYanRouteName> = {
  navigation: MainNavigationProps<RouteName>;
  route: MainRouteProp<RouteName>;
};
