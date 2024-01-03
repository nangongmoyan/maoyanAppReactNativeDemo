import { NetworkStatus } from '@enum/request';
import React, { memo } from 'react';
import { DataProvider, LayoutProvider, RecyclerListView, RecyclerListViewProps } from 'recyclerlistview';
import Loading from '../Multi/Loading';
import { NGVStack } from '../VStack';

interface NGListViewProps extends Omit<RecyclerListViewProps, 'dataProvider' | 'layoutProvider'> {
  maoyanStatus: NetworkStatus;
}
const NGListView: React.FC<NGListViewProps> = ({ data, maoyanStatus, ...rest }) => {
  let dataProvider = new DataProvider((r1, r2) => r1 !== r2);

  const layoutProvider = new LayoutProvider(
    (index) => dataProvider.getDataForIndex(index)?.type ?? 0,
    (type, dim, index) => {
      dim.width = dataProvider.getDataForIndex(index).width;
      dim.height = dataProvider.getDataForIndex(index).height;
    },
  );

  if (data) {
    dataProvider = dataProvider.cloneWithRows(data);
  }

  if (maoyanStatus === NetworkStatus.InitLoading) {
    return <Loading />;
  }

  return (
    <NGVStack flex={1} px={16}>
      <RecyclerListView dataProvider={dataProvider} layoutProvider={layoutProvider} renderAheadOffset={2000} disableRecycling={true} {...rest} />
    </NGVStack>
  );
};

export default memo(NGListView);
