import { MaoYanRouteName } from '@const/routeNameEnum';
import { MainScreenProps } from '@navigation/type';
import NGTabView from '@ui/NGTabView/NGTabView';
import { statusBarHeight } from '@utils/screen';
import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import Recommend from './subpages/home/recommend/Recommend';

const Home: React.FC<MainScreenProps<MaoYanRouteName.BottomTab>> = (props) => {
  const routes = useMemo(() => {
    return [
      {
        key: 'home',
        serial: 0,
        title: ' 推荐',
        scene: {
          component: Recommend,
        },
      },
    ];
  }, []);
  // console.log({ statusBarHeight, titleHeight });

  const tabbarProps = {
    scrollEnabled: true,
    tabWidth: 110,
    indicatorWidth: 10,
    inactiveTextStyle: {
      color: '#8E8E98',
    },
    indicatorStyle: {
      width: 10,
      height: 3,
      marginBottom: 2,
    },
  };

  return (
    <View style={{ flex: 1, paddingTop: statusBarHeight }}>
      <NGTabView routes={routes} showIndicator={true} tabbarProps={tabbarProps} />
    </View>
  );
};

export default memo(Home);
