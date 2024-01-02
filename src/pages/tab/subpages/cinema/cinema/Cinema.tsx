import { useCinemaList } from '@features/cinema';
import ErrorCatchHOC from '@hoc/error/ErrorCatchHOC';
import { NGFlashList } from '@ui';
import { CinemaBaseItem } from 'maoyan-request/dist/types';
import React, { useCallback } from 'react';
import CinemaItem from './components/CinemaItem';
const Cinema: React.FC = () => {
  const { listProps } = useCinemaList();

  const renderItem = useCallback(({ item }: { item: CinemaBaseItem }) => {
    return <CinemaItem {...item} />;
  }, []);

  return <NGFlashList renderItem={renderItem} {...listProps} containerStyle={{ paddingHorizontal: 16 }} />;
};

export default ErrorCatchHOC(Cinema);
