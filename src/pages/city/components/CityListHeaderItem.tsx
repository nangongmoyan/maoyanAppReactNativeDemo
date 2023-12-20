import { MaoYanCity } from '@myTypes/city';
import { NGCenter, NGHStack, NGText, NGVStack } from '@ui';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HEADER_HEIGHT, HEADER_ITEM_BETWEEN_WIDTH, HEADER_ITEM_HEIGHT, HEADER_ITEM_MARGIN_Y, HEADER_ITEM_WIDTH } from '../const';

interface CityListHeaderItemProps extends MaoYanCity.HeaderCityItem {}
const CityListHeaderItem: React.FC<CityListHeaderItemProps> = ({ title, data }) => {
  const { t } = useTranslation();
  return (
    <NGVStack>
      <NGVStack h={HEADER_HEIGHT} centerV>
        <NGText fontSize={12}>{t(title)}</NGText>
      </NGVStack>
      <NGHStack flexWrap={'wrap'}>
        {data.map((item, index) => {
          const marginX = (index + 2) % 3 === 0 ? HEADER_ITEM_BETWEEN_WIDTH : 0;
          return (
            <NGCenter key={index} marginX={marginX} w={HEADER_ITEM_WIDTH} borderWidth={0.5} h={HEADER_ITEM_HEIGHT} marginY={HEADER_ITEM_MARGIN_Y}>
              {item.nm}
            </NGCenter>
          );
        })}
      </NGHStack>
    </NGVStack>
  );
};

export default memo(CityListHeaderItem);
