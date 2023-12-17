import { MaoYanUI } from '@myTypes/ui';
import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

const SvgIcon: React.FC<MaoYanUI.SvgIcon> = ({
  paths,
  style,
  size = 40,
  fills = ['#039FFC'],
  viewBox = '0 0 1024 1024',
}) => {
  return (
    <Svg width={size} height={size} style={style} viewBox={viewBox}>
      {paths.map((path, index) => {
        return <Path d={path} key={index} fill={fills[index] ?? fills[0]} />;
      })}
    </Svg>
  );
};

export default memo(SvgIcon);
