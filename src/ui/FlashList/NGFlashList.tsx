import { FlashList, FlashListProps } from '@shopify/flash-list';

import { NetworkStatus } from '@enum/request';
import { keyExtractor } from '@utils/keyExtractor';
import React, { memo, useCallback } from 'react';
import { ViewStyle } from 'react-native';
import End from '../Multi/End';
import Loading from '../Multi/Loading';
import UpLoading from '../Multi/UpLoading';
import { NGVStack } from '../VStack';

interface NGFlashListProps extends FlashListProps<any> {
  isEnd?: boolean;
  maoyanStatus: NetworkStatus;
  containerStyle?: ViewStyle;
}

const NGFlashList: React.FC<NGFlashListProps> = ({ onEndReached, maoyanStatus, isEnd, containerStyle, ...rest }) => {
  console.log({ maoyanStatus });
  const _onEndReached = () => {
    onEndReached?.();
  };
  const _renderFooter = useCallback(() => {
    if (isEnd) return <End />;
    if (maoyanStatus === 'loadingMore') return <UpLoading />;
    return null;
  }, [isEnd, maoyanStatus]);

  if (maoyanStatus === NetworkStatus.InitLoading) {
    return <Loading />;
  }

  return (
    <NGVStack flex={1} style={containerStyle}>
      <FlashList
        estimatedItemSize={80}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.95}
        onEndReached={_onEndReached}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={_renderFooter}
        {...rest}
      />
    </NGVStack>
  );
};

export default memo(NGFlashList);
