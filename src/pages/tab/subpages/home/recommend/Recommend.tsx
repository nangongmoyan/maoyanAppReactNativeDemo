import { MaoYanRouteName } from '@const/routeNameEnum';
import ErrorCatchHOC from '@hoc/error/ErrorCatchHOC';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

const Recommend: React.FC<any> = ({}) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const go2Detail = () => {
    navigation.navigate(MaoYanRouteName.Detail);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{t('70db5534f81b5ffdca31b122cc35068a')}</Text>
      <Pressable onPress={go2Detail}>
        <Text>Go to Detail</Text>
      </Pressable>
    </View>
  );
};

export default ErrorCatchHOC(Recommend);
