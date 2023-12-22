import useEvent from '@hooks/useEvent';
import { deviceWidth } from '@utils/scale';
import LottieView from 'lottie-react-native';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Toast } from 'react-hot-toast/headless';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NGHStack } from '../HStack';
import { NGText } from '../Text';

interface NGToastItemProps {
  toast: Toast;
  offset: number;
  updateHeight: (height: number) => void;
}
const NGToastItem: React.FC<NGToastItemProps> = ({ toast, updateHeight, offset }) => {
  const opacity = useSharedValue(0.5);
  const { top } = useSafeAreaInsets();
  const [loop, setLoop] = useState(false);
  const translationY = useSharedValue(-80);

  const textColor = useMemo(() => (toast.type === 'error' ? '#c91e1e' : '#000'), [toast.type]);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      top: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      alignItems: 'center',
      opacity: opacity.value,
      transform: [{ translateY: translationY.value }],
    };
  });

  const onAnimationLoaded = useEvent(() => setLoop(false));

  const renderLottie = useEvent(() => {
    return (
      <LottieView
        loop={loop}
        autoPlay={true}
        resizeMode={'contain'}
        style={styles.lottieView}
        onAnimationLoaded={onAnimationLoaded}
        enableMergePathsAndroidForKitKatAndAbove
        source={toast.type === 'success' ? require('@lotties/success.json') : require('@lotties/error.json')}
      />
    );
  });

  useEffect(() => {
    translationY.value = withSpring(toast.visible ? offset : -80, { duration: 1000 });
  }, [offset, toast.visible, translationY]);

  useEffect(() => {
    opacity.value = withTiming(toast.visible ? 1 : 0, { duration: 300 });
  }, [opacity, toast.visible]);

  return (
    <Animated.View style={reanimatedStyle}>
      <NGHStack
        py={12}
        px={14}
        centerV
        bg={'#FFF'}
        rounded={'full'}
        maxW={deviceWidth - 32}
        style={{ marginTop: top }}
        onLayout={(event) => updateHeight(event.nativeEvent.layout.height)}
      >
        {toast.visible && renderLottie()}
        <NGText textAlign="center" color={textColor}>
          {toast.message}
        </NGText>
      </NGHStack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  lottieView: {
    width: 28,
    height: 28,
  },
});
export default memo(NGToastItem);
