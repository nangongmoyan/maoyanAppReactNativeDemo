import { HeaderWithMenu } from '@components/header';
import { NGLayout } from '@components/layout';
import { MaoYanRouteName } from '@enum/routeName';
import { useCinemaList } from '@features/cinema';
import { MainScreenProps } from '@navigation/type';
import React from 'react';

const Cinema: React.FC<MainScreenProps<MaoYanRouteName.BottomTab>> = (props) => {
  const { listProps, ...rest } = useCinemaList();
  console.log({ listProps });
  return (
    <NGLayout scrollEnabled={false}>
      <HeaderWithMenu />
    </NGLayout>
  );
};

export default Cinema;
