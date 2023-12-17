import { DrawerContent } from '@components/draw';
import { routeStatus } from '@const/routeStatus';
import { MaoYanRoute } from '@myTypes/route';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, Route, useNavigationContainerRef } from '@react-navigation/native';
import { ngTheme } from '@ui';
import { vw } from '@utils/scale';
import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import { RootScreen } from './stacks';

/** 抽屉drawer实例 */
const Drawer = createDrawerNavigator();

const Router = () => {
  const routeRef = useRef<Route<string>>();
  const navigationRef = useNavigationContainerRef();

  const onStateChange = () => {
    const previousRoute = routeRef.current;
    const currentRoute = navigationRef.getCurrentRoute();
    const currentRouteName = currentRoute?.name;
    if (currentRouteName) {
      if (previousRoute?.name !== currentRouteName) {
        const status = routeStatus[currentRouteName as MaoYanRoute.RouteStatusKey];

        !!status?.barStyle && StatusBar.setBarStyle(status?.barStyle, true);
        !!status?.backgroundColor && StatusBar.setBackgroundColor(status?.backgroundColor);
      }
    }

    routeRef.current = currentRoute;
  };

  const renderDrawerContent = (props: DrawerContentComponentProps) => {
    return <DrawerContent {...props} />;
  };

  return (
    <NavigationContainer
      independent={true}
      ref={(ref) => {
        navigationRef.current = ref;
      }}
      onReady={() => {
        routeRef.current = navigationRef.getCurrentRoute();
      }}
      onStateChange={onStateChange}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          swipeEnabled: false,
          keyboardDismissMode: 'none',
          drawerStyle: {
            width: vw(75),
            backgroundColor: ngTheme.colors.white.F5,
          },
        }}
        drawerContent={renderDrawerContent}
      >
        <Drawer.Screen name="Root" component={RootScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
