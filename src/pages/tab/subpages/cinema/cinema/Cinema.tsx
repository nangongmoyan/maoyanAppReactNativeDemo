import { useCinemaList } from '@features/cinema';
import ErrorCatchHOC from '@hoc/error/ErrorCatchHOC';
import useEvent from '@hooks/useEvent';
import { NGFlatList } from '@ui';
import { CinemaBaseItem } from 'maoyan-request/dist/types';
import React from 'react';
import CinemaItem from './components/CinemaItem';

const Cinema: React.FC = () => {
  const { listProps } = useCinemaList();

  const renderItem = useEvent(({ item }: { item: CinemaBaseItem }) => {
    return <CinemaItem {...item} />;
  });

  return <NGFlatList renderItem={renderItem} {...listProps} style={{ paddingHorizontal: 16 }} />;
};

export default ErrorCatchHOC(Cinema);
