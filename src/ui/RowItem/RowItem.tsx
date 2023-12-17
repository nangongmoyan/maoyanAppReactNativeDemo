import { MaoYanUI } from '@myTypes/ui';
import { pathMap } from '@svgs/path';
import { deviceWidth } from '@utils/scale';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { StraightLine } from '../Decorate';
import { NGHStack } from '../HStack';
import { SvgIcon } from '../SvgIcon';
import { NGText } from '../Text';
import { NGVStack } from '../VStack';
import { NGPressable } from '../native-base';

const RowItem: React.FC<MaoYanUI.RowItem> = ({
  leftIcon,
  itemTitle,
  itemStyle,
  rightValue,
  titleML = 2,
  itemHeight = 46,
  showItemSeparator,
  itemType = 'normal',
  straightLineAlignItems = 'flex-end',
  straightLineWidth = deviceWidth - 64,
}) => {
  const renderRight = useCallback(() => {
    if (itemType === 'hidden') return null;

    if (itemType === 'normal') {
      return <SvgIcon fills={['#ddd']} paths={pathMap.rightArrow} size={12} />;
    }
  }, [itemType]);

  return (
    <NGPressable style={StyleSheet.flatten([itemStyle])}>
      <NGHStack centerV h={itemHeight}>
        {leftIcon}
        <NGText fontSize={12} ml={titleML}>
          {itemTitle}
        </NGText>
        <NGHStack ml="auto">
          {rightValue}
          {itemType !== 'hidden' && renderRight?.()}
        </NGHStack>
      </NGHStack>
      {showItemSeparator && (
        <NGVStack alignItems={straightLineAlignItems}>
          <StraightLine width={straightLineWidth} />
        </NGVStack>
      )}
    </NGPressable>
  );
};

export default memo(RowItem);
