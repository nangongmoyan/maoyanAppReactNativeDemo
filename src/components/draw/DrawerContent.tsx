import { DrawerContentScrollView } from '@react-navigation/drawer';
import { NGVStack } from '@ui';
import { vw } from '@utils/scale';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import DrawerItem from './DrawerItem';
import { allDrawerItem } from './const';

const DrawerContent: React.FC<any> = ({}) => {
  return (
    <NGVStack flex={1} style={StyleSheet.flatten([{ paddingLeft: vw(5) }])}>
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        {allDrawerItem.map((item, index) => {
          return <DrawerItem key={index} data={item.data} itemTitle={item.itemTitle} />;
        })}
      </DrawerContentScrollView>
    </NGVStack>
  );
};

export default memo(DrawerContent);
