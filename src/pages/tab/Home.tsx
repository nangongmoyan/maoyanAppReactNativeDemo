import { MaoYanRouteName } from '@const/routeNameEnum';
import { MainScreenProps } from '@navigation/type';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

const Home: React.FC<MainScreenProps<MaoYanRouteName.BottomTab>> = (props) => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{t('70db5534f81b5ffdca31b122cc35068a')}</Text>
    </View>
  );
};

export default memo(Home);
