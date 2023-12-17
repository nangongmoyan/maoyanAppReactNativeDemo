import { NGVStack } from '@ui';
import React, { memo } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Svg, { Line } from 'react-native-svg';

interface StraightLineProps {
  width: number;
  height?: number;
  color?: ColorValue;
  style?: ViewStyle;
}
const StraightLine: React.FC<StraightLineProps> = ({ width, height = 2, color = '#ddd', style, ...props }) => {
  return (
    <NGVStack centerH style={style} {...props}>
      <Svg width={width} height={height}>
        <Line strokeWidth={1} x1={0} x2="100%" stroke={color} />
      </Svg>
    </NGVStack>
  );
};

export default memo(StraightLine);
