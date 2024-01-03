import { LIST_ITEM_FIRST, LIST_ITEM_FOUR, LIST_ITEM_SECOND, LIST_ITEM_THIRD, LIST_ITEM_WIDTH } from '@features/cinema';
import { NGHStack, NGText, NGVStack, ShadowBox, ngTheme } from '@ui';
import { vw } from '@utils/scale';
import { CinemaBaseItem } from 'maoyan-request/dist/types';
import React, { memo } from 'react';

interface CinemaItemProps extends CinemaBaseItem {}
const CinemaItem: React.FC<CinemaItemProps> = (item) => {
  return (
    <ShadowBox boxWidth={LIST_ITEM_WIDTH}>
      <NGVStack p={16}>
        <NGHStack centerV height={LIST_ITEM_FIRST} justifyContent={'space-between'}>
          <NGText fontSize={16} weight={'semibold'} maxW={vw(72)} numberOfLines={1}>
            {item.nm}
          </NGText>
          {item.price.available && (
            <NGText fontSize={12} color={ngTheme.colors.theme.default}>
              {item?.price.integer}
              <NGText fontSize={10}>
                {item?.price.decimal}元<NGText color="#8b8a8e">起</NGText>
              </NGText>
            </NGText>
          )}
        </NGHStack>
        <NGHStack centerV height={LIST_ITEM_SECOND} justifyContent={'space-between'}>
          <NGText fontSize={12} maxW={vw(72)} numberOfLines={1}>
            {item.addr}
          </NGText>
          <NGText fontSize={12}>{item.distance}</NGText>
        </NGHStack>
        <NGHStack space={1} flexWrap={'wrap'}>
          {item?.tags.map((tag, index) => {
            return (
              <NGVStack centerV key={index} height={LIST_ITEM_THIRD} borderWidth={0.5} borderColor={tag.color} px={1} borderRadius={4}>
                <NGText fontSize={10} color={tag.color}>
                  {tag.label}
                </NGText>
              </NGVStack>
            );
          })}
        </NGHStack>
        <NGVStack>
          {item?.promotions.map((promotion, index) => {
            return (
              <NGHStack key={index} centerV space={1} height={LIST_ITEM_FOUR}>
                <NGVStack bgColor={promotion.bgColor} width={16} height={16} centerH centerV borderRadius={2}>
                  <NGText fontSize={10} color={ngTheme.colors.white}>
                    {promotion.label}
                  </NGText>
                </NGVStack>
                <NGText fontSize={10}>{promotion.value}</NGText>
              </NGHStack>
            );
          })}
        </NGVStack>
      </NGVStack>
    </ShadowBox>
  );
};

export default memo(CinemaItem);
