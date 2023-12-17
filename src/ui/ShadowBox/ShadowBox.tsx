import { MaoYanUI } from '@myTypes/ui';
import uiStyles from '@styles/uiStyle';
import React, { PropsWithChildren, memo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { NGVStack } from '../VStack';

const ShadowBox: React.FC<PropsWithChildren<MaoYanUI.ShadowBox>> = ({
  boxStyle,
  boxWidth,
  children,
  boxBorderRadius = 8,
  boxBackgroundColor = '#FFF',
  ...restProps
}) => {
  const shadowBoxStyle: ViewStyle = {
    width: boxWidth,
    borderRadius: boxBorderRadius,
    backgroundColor: boxBackgroundColor,
  };
  return (
    <NGVStack style={StyleSheet.flatten([uiStyles.ShadowBoxContainer, boxStyle, shadowBoxStyle])} {...restProps}>
      {children}
    </NGVStack>
  );
};

export default memo(ShadowBox);
