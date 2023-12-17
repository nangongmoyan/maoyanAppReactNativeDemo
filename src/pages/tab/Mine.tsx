import { MaoYanRouteName } from '@enum/routeName';
import { MainScreenProps } from '@navigation/type';
import React from 'react';
import { Text, View } from 'react-native';

const Mine: React.FC<MainScreenProps<MaoYanRouteName.BottomTab>> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mine Screen</Text>
    </View>
  );
};

export default Mine;
