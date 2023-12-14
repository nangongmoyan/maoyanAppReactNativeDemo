import { BottomTabRouteName } from '@const/routeNameEnum';
import { BottomTabParamList, RenderTabBarIcon, RootBottomTabItem } from '@navigation/type';
import Home from '@pages/tab/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-native';

const Cinema = lazy(() => import('@pages/tab/Cinema'));
const Show = lazy(() => import('@pages/tab/Show'));
const Mine = lazy(() => import('@pages/tab/Mine'));
const Popular = lazy(() => import('@pages/tab/Popular'));

const bottomTabs: RootBottomTabItem[] = [
  {
    component: Home,
    name: BottomTabRouteName.Home,
    icon: require('@images/home-icon.png'),
    label: '02cd5272a4659c09515d99e7960183e6',
    focusIcon: require('@images/home-icon-active.png'),
  },
  {
    name: BottomTabRouteName.Cinema,
    label: 'b154d2bd985c022e380acfe23eb06351',
    component: Cinema,
    icon: require('@images/cinema-icon.png'),
    focusIcon: require('@images/cinema-icon-active.png'),
  },
  {
    name: BottomTabRouteName.Popular,
    label: 'faf88229ab7d9f6d8ed81d644d6b8810',
    component: Popular,
    icon: require('@images/popular-icon.png'),
    focusIcon: require('@images/popular-icon-active.png'),
  },
  {
    name: BottomTabRouteName.Show,
    label: 'c35fac867a422d7d3ae7f69290764d0a',
    component: Show,
    icon: require('@images/show-icon.png'),
    focusIcon: require('@images/show-icon-active.png'),
  },
  {
    name: BottomTabRouteName.Mine,
    label: 'b3e1e4f29f55c06184fd49980c04be01',
    component: Mine,
    icon: require('@images/mine-icon.png'),
    focusIcon: require('@images/mine-icon-active.png'),
  },
];

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabScreen: React.FC<any> = ({}) => {
  const { t } = useTranslation();
  const renderIcon: RenderTabBarIcon = ({ focused, bottomTab }) => {
    const size = focused ? 30 : 25;
    return <Image source={focused ? bottomTab.focusIcon : bottomTab.icon} style={{ width: size, height: size }} />;
  };
  return (
    <BottomTab.Navigator
      initialRouteName={BottomTabRouteName.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#d7352e',
        tabBarInactiveTintColor: '#5e5e5e',
      }}
      // sceneContainerStyle={{
      //   backgroundColor: 'white',
      // }}
    >
      {bottomTabs.map((bottomTab) => {
        const tabBarLabel = bottomTab.label ? t(bottomTab.label) : '';
        return (
          <BottomTab.Screen
            key={bottomTab.name}
            name={bottomTab.name}
            component={bottomTab.component}
            options={{
              tabBarLabel,
              tabBarIcon: (props) => renderIcon({ ...props, bottomTab }),
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};

export default BottomTabScreen;
