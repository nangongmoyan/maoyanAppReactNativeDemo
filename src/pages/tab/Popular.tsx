import { MaoYanRouteName } from '@const/routeNameEnum';
import { MainScreenProps } from '@navigation/type';
import React from 'react';
import { Text, View } from 'react-native';

const Popular: React.FC<MainScreenProps<MaoYanRouteName.BottomTab>> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cinema Page</Text>
    </View>
  );
};

export default Popular;
