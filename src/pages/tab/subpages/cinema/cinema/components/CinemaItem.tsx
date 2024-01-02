import { NGHStack, NGText, NGVStack, ShadowBox, ngTheme } from '@ui';
import { deviceWidth, vw } from '@utils/scale';
import { CinemaBaseItem } from 'maoyan-request/dist/types';
import { theme } from 'native-base';
import React, { memo } from 'react';

interface CinemaItemProps extends CinemaBaseItem {}
const CinemaItem: React.FC<CinemaItemProps> = (item) => {
  return (
    <ShadowBox boxWidth={deviceWidth - 32} boxStyle={{ marginTop: 10 }}>
      <NGVStack p={16} flex={1} backgroundColor={'red'} space={2}>
        <NGHStack centerV justifyContent={'space-between'}>
          <NGText fontSize={16} weight={'semibold'} maxW={vw(72)} numberOfLines={1}>
            {item.nm}
          </NGText>
          <NGText fontSize={12} color={ngTheme.colors.theme.default}>
            {item?.price.integer}
            <NGText fontSize={10}>
              {item?.price.decimal}元<NGText color="#8b8a8e">起</NGText>
            </NGText>
          </NGText>
        </NGHStack>
        <NGHStack centerV justifyContent={'space-between'}>
          <NGText fontSize={12} maxW={vw(72)} numberOfLines={1}>
            {item.addr}
          </NGText>
          <NGText fontSize={12}>{item.distance}</NGText>
        </NGHStack>
        <NGHStack space={1} flexWrap={'wrap'}>
          {item?.tags.map((tag, index) => {
            return (
              <NGVStack key={index} borderWidth={0.5} borderColor={tag.color} px={1} py={0.5} borderRadius={4}>
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
              <NGHStack key={index} mt={5} space={1}>
                <NGVStack bgColor={promotion.bgColor} width={16} height={16} centerH centerV borderRadius={2}>
                  <NGText fontSize={11} height={16} color={theme.colors.white}>
                    {promotion.label}
                  </NGText>
                </NGVStack>
                <NGText fontSize={11}>{promotion.value}</NGText>
              </NGHStack>
            );
          })}
        </NGVStack>
      </NGVStack>
    </ShadowBox>
  );
};

export default memo(CinemaItem);
