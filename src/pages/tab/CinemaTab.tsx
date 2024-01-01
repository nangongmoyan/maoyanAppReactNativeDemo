import { HeaderWithMenu } from '@components/header';
import { NGLayout } from '@components/layout';
import { MaoYanRouteName } from '@enum/routeName';
import { ErrorCatchHOC } from '@hoc/error';
import { MainScreenProps } from '@navigation/type';
import React from 'react';
import Cinema from './subpages/cinema/cinema/Cinema';

const CinemaTab: React.FC<MainScreenProps<MaoYanRouteName.BottomTab>> = (props) => {
  return (
    <NGLayout>
      <HeaderWithMenu />
      <Cinema />
    </NGLayout>
  );
};

export default ErrorCatchHOC(CinemaTab);
