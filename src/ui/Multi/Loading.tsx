import { vw } from '@utils/scale';
import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NGVStack } from '../VStack';
interface LoadingProps {}
const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <NGVStack flex={1} centerH centerV>
      <LottieView
        loop={true}
        autoPlay={true}
        resizeMode={'contain'}
        style={styles.lottieView}
        enableMergePathsAndroidForKitKatAndAbove
        source={require('@lotties/networkLoading.json')}
      />
    </NGVStack>
  );
};

const styles = StyleSheet.create({
  lottieView: {
    width: vw(80),
    height: vw(80),
  },
});
export default Loading;
