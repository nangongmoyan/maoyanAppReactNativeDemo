import { weights } from '@const/font';
import { MaoYanUI } from '@myTypes/ui';
import { Text } from 'native-base';
import React, { memo, useMemo } from 'react';
import { StyleSheet, TextStyle } from 'react-native';

const NGText: React.FC<React.PropsWithChildren<MaoYanUI.NGTextProps>> = ({ style, children, weight = 'normal', ...props }) => {
  const textStyle: TextStyle = useMemo(() => {
    return {
      fontWeight: weights[weight],
    };
  }, [weight]);
  return (
    <Text style={StyleSheet.flatten([textStyle, style])} {...props}>
      {children}
    </Text>
  );
};

export default memo(NGText);
