import { NetworkStatus } from '@enum/request';
import { keyExtractor } from '@utils/keyExtractor';
import React, { memo, useCallback } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import End from '../Multi/End';
import Loading from '../Multi/Loading';
import UpLoading from '../Multi/UpLoading';
import { NGVStack } from '../VStack';

interface NGFlatListProps extends FlatListProps<any> {
  isEnd?: boolean;
  maoyanStatus: NetworkStatus;
}
const NGFlatList: React.FC<NGFlatListProps> = ({ onEndReached, maoyanStatus, isEnd, ...rest }) => {
  const _onEndReached = (e) => {
    onEndReached && onEndReached(e);
  };

  console.log({ isEnd, maoyanStatus });
  const _renderFooter = useCallback(() => {
    if (isEnd) return <End />;
    if (maoyanStatus === 'loadingMore') return <UpLoading />;
    return null;
  }, [isEnd, maoyanStatus]);

  if (maoyanStatus === NetworkStatus.InitLoading) {
    return <Loading />;
  }

  return (
    <NGVStack flex={1}>
      <FlatList
        keyExtractor={keyExtractor}
        onEndReached={_onEndReached}
        onEndReachedThreshold={0.95}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={_renderFooter}
        {...rest}
      />
    </NGVStack>
  );
};

export default memo(NGFlatList);
