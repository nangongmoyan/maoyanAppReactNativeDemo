import { FlashList, FlashListProps } from '@shopify/flash-list';
import { keyExtractor } from '@utils/keyExtractor';

import React, { memo } from 'react';

interface NGFlashListProps extends FlashListProps<any> {}

const NGFlashList: React.FC<NGFlashListProps> = ({ onEndReached, ...rest }) => {
  const _onEndReached = () => {
    onEndReached?.();
  };
  return <FlashList estimatedItemSize={300} keyExtractor={keyExtractor} onEndReachedThreshold={0.5} onEndReached={_onEndReached} {...rest} />;
};

export default memo(NGFlashList);
