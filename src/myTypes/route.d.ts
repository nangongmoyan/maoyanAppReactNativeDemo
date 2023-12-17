import { BottomTabRouteName, MaoYanRouteName } from '@enum/routeName';

declare namespace MaoYanRoute {
  type RouteStatusKey = MaoYanRouteName | BottomTabRouteName;

  interface DrawerItem {
    itemTitle: string;
    data: { route: RouteStatusKey; labels: string[] }[];
  }
}
