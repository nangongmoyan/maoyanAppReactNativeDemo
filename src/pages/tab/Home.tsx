import { HeaderWithMenu } from '@components/header';
import { NGLayout } from '@components/layout';
import { MaoYanRouteName } from '@enum/routeName';
import { MainScreenProps } from '@navigation/type';
import { NGTabView } from '@ui';
import React, { memo, useMemo } from 'react';
import Recommend from './subpages/home/recommend/Recommend';
const Home: React.FC<MainScreenProps<MaoYanRouteName.BottomTab>> = ({ navigation }) => {
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
    <NGLayout scrollEnabled={false}>
      <HeaderWithMenu />
      {/* <NGVStack flex={1} backgroundColor={'#3e3'}> */}
      <NGTabView routes={routes} showIndicator={true} tabbarProps={tabbarProps} />
      {/* </NGVStack> */}
    </NGLayout>
  );
};

export default memo(Home);
