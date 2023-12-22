import ErrorCatchHOC from '@hoc/error/ErrorCatchHOC';
import useNGNavigation from '@hooks/useNGNavigation';
import useNGToast from '@hooks/useNGToast';
import React from 'react';
// import toast from 'react-hot-toast/headless';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';
const Recommend: React.FC<any> = ({}) => {
  const navigation = useNGNavigation();
  const { t } = useTranslation();
  const { toast } = useNGToast();
  const go2Detail = () => {
    // navigation.push(MaoYanRouteName.City, {});
    // toast('Hello Native', {
    //   icon: '🔥',
    // });
    toast.success('Successfully toasted!');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={go2Detail} hitSlop={20}>
        <Text>Go to Detail</Text>
      </Pressable>

      <Pressable
        style={{ marginTop: 50 }}
        onPress={() => {
          toast.error('Error toasted!', {
            duration: 2500,
          });
        }}
        hitSlop={20}
      >
        <Text>Go to Detail</Text>
      </Pressable>
    </View>
  );
};

export default ErrorCatchHOC(Recommend);
