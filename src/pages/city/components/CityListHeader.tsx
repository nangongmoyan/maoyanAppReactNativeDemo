import { NGVStack } from '@ui';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HEADER_PADDING_BOTTOM } from '../const';
import { getHeaderCity } from '../utils';
import CityListHeaderItem from './CityListHeaderItem';

interface CityListHeaderProps {}
const CityListHeader: React.FC<CityListHeaderProps> = () => {
  const { t } = useTranslation();
  const headerCitys = getHeaderCity();
  return (
    <NGVStack paddingX={16} paddingBottom={HEADER_PADDING_BOTTOM}>
      {headerCitys.map((headerCity, index) => {
        return <CityListHeaderItem key={index} {...headerCity} />;
      })}
    </NGVStack>
  );
};

export default memo(CityListHeader);
